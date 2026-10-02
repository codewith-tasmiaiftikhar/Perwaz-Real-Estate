"use client";

import { useEffect } from "react";
import { heroRooms } from "@/data/properties";

export function HeroFilmstrip() {
  useEffect(() => {
    for (const src of heroRooms) {
      const img = new Image();
      img.src = src;
    }
  }, []);

  const frames = [...heroRooms, ...heroRooms];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] overflow-hidden pb-2 pt-8 sm:pb-3 sm:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-12 bg-gradient-to-t from-ink/80 to-transparent sm:h-16" />
      <div className="film-track flex w-max gap-2 px-2 sm:gap-3 sm:px-3">
        {frames.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="h-14 w-20 shrink-0 rounded-sm border border-gold/35 bg-cover bg-center shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:h-24 sm:w-36"
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}
      </div>
    </div>
  );
}
