"use client";

import { useState } from "react";

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#eceae4] sm:aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current}
          alt={`${title} ${active + 1}`}
          decoding="async"
          className="h-full w-full object-cover"
        />
        {images.length > 1 ? (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 font-body text-[10px] uppercase tracking-[0.12em] text-white">
            {active + 1} / {images.length}
          </span>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="scrollbar-hide mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm sm:h-20 sm:w-28 ${
                index === active ? "ring-1 ring-gold" : "opacity-70"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
