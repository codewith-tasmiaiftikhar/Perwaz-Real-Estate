"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/properties";

const FADE_MS = 1100;
const HOLD_MS = 5600;

export function HeroSlideshow() {
  const count = heroSlides.length;
  const [active, setActive] = useState(0);
  const [under, setUnder] = useState<number | null>(null);
  const [reduce, setReduce] = useState(false);
  const ready = useRef<boolean[]>(heroSlides.map(() => false));
  const failed = useRef<boolean[]>(heroSlides.map(() => false));
  const activeRef = useRef(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const go = useCallback(
    (index: number) => {
      const current = activeRef.current;
      if (count === 0 || index === current) return;
      setUnder(current);
      setActive(index);
    },
    [count],
  );

  useEffect(() => {
    if (under == null) return;
    const started = Date.now();
    const id = window.setInterval(() => {
      const elapsed = Date.now() - started;
      const painted = ready.current[active] || failed.current[active];
      if (elapsed >= (reduce ? 0 : FADE_MS) && painted) setUnder(null);
    }, 80);
    return () => window.clearInterval(id);
  }, [under, active, reduce]);

  useEffect(() => {
    if (reduce || count < 2) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      const current = activeRef.current;
      let next = (current + 1) % count;
      let steps = 0;
      while (failed.current[next] && steps < count) {
        next = (next + 1) % count;
        steps += 1;
      }
      if (next === current || !ready.current[next]) return;
      go(next);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, [reduce, count, go]);

  useEffect(() => {
    if (count === 0) return;
    const indexes = [0, 1, 2].map((offset) => (active + offset) % count);
    const images: HTMLImageElement[] = [];
    for (const index of indexes) {
      if (ready.current[index] || failed.current[index]) continue;
      const img = new Image();
      img.onload = () => {
        ready.current[index] = true;
      };
      img.onerror = () => {
        failed.current[index] = true;
      };
      img.src = heroSlides[index].src;
      images.push(img);
    }
    return () => {
      for (const img of images) {
        img.onload = null;
        img.onerror = null;
      }
    };
  }, [active, count]);

  if (count === 0) {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1a1a,transparent_70%)]" />
    );
  }

  const upcoming = (active + 1) % count;
  const shown = [under, active, upcoming].filter(
    (index, pos, all): index is number =>
      index != null && all.indexOf(index) === pos,
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {shown.map((index) => {
        const slide = heroSlides[index];
        const on = index === active;
        const holding = index === under;
        const ken = !reduce && (on || holding);
        return (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center ${
              reduce ? "" : "transition-opacity duration-[1100ms] ease-in-out"
            } ${on || holding ? "opacity-100" : "opacity-0"}`}
            style={{
              zIndex: on ? 2 : holding ? 1 : 0,
              backgroundImage: `url("${slide.src}")`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt=""
              fetchPriority={on ? "high" : "low"}
              decoding="async"
              ref={(node) => {
                if (node?.complete && node.naturalWidth > 0) ready.current[index] = true;
              }}
              onLoad={() => {
                ready.current[index] = true;
              }}
              onError={() => {
                if (failed.current[index]) return;
                failed.current[index] = true;
                if (activeRef.current !== index) return;
                for (let step = 1; step <= count; step += 1) {
                  const next = (index + step) % count;
                  if (!failed.current[next]) {
                    go(next);
                    return;
                  }
                }
              }}
              className={`absolute inset-0 h-full w-full object-cover ${
                ken ? (index % 2 === 0 ? "hero-ken-a" : "hero-ken-b") : ""
              }`}
            />
          </div>
        );
      })}
      <div className="hero-vignette absolute inset-0 z-[3]" />
      <div className="hero-grain absolute inset-0 z-[3]" />
      <div className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 gap-1.5 sm:flex sm:bottom-32">
        {heroSlides.map((slide, index) => (
          <button
            key={`${slide.src}-dot`}
            type="button"
            aria-label={`Show photo ${index + 1}`}
            onClick={() => go(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === active ? "w-7 bg-gold" : "w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
