"use client";

import { useState } from "react";

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [attempt, setAttempt] = useState(0);
  const url = attempt === 0 ? src : `${src}?retry=${attempt}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={alt}
      loading="eager"
      decoding="async"
      draggable={false}
      onError={() => {
        if (attempt < 2) setAttempt((n) => n + 1);
      }}
      className={className}
    />
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
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#eceae4] sm:aspect-[16/10]">
        <GalleryImage
          src={current}
          alt={`${title} ${active + 1}`}
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
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show photo ${index + 1}`}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm bg-[#eceae4] sm:h-20 sm:w-28 ${
                index === active ? "ring-1 ring-gold" : "opacity-80"
              }`}
            >
              <GalleryImage
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
