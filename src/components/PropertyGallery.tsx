"use client";

import { useEffect, useRef, useState } from "react";

function Thumb({
  src,
  active,
  label,
  eager,
  onSelect,
}: {
  src: string;
  active: boolean;
  label: string;
  eager: boolean;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState(eager);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (eager) return;
    const node = ref.current;
    const root = node?.parentElement;
    if (!node || !root) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { root, rootMargin: "160px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [eager]);

  const url = attempt === 0 ? src : `${src}?retry=${attempt}`;

  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      aria-label={label}
      aria-current={active ? "true" : undefined}
      className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm bg-[#eceae4] sm:h-20 sm:w-28 ${
        active ? "ring-1 ring-gold" : "opacity-80"
      }`}
    >
      {shown && attempt < 3 ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt=""
          decoding="async"
          draggable={false}
          onError={() => setAttempt((n) => n + 1)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </button>
  );
}

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const current = images[active];
  const url = !current || attempt === 0 ? current : `${current}?retry=${attempt}`;

  useEffect(() => {
    setAttempt(0);
  }, [active]);

  if (!current || !url) return null;

  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#eceae4] sm:aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={url}
          src={url}
          alt={`${title}, photo ${active + 1}`}
          decoding="async"
          draggable={false}
          onError={() => {
            if (attempt < 2) setAttempt((n) => n + 1);
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {images.length > 1 ? (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 font-body text-[10px] uppercase tracking-[0.12em] text-white">
            {active + 1} / {images.length}
          </span>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex w-full min-w-0 gap-2 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <Thumb
              key={`${src}-${index}`}
              src={src}
              active={index === active}
              eager={index < 6}
              label={`Show photo ${index + 1}`}
              onSelect={() => setActive(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
