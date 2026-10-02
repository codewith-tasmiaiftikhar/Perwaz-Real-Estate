"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { Reveal } from "./Reveal";
import { PropertyCard } from "./PropertyCard";

export function FeaturedRow({ properties }: { properties: Property[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scroller.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  if (properties.length === 0) return null;

  return (
    <section className="bg-marble pb-14 pt-14 md:pb-16 md:pt-28">
      <div className="mx-auto mb-8 flex max-w-site items-end justify-between px-4 md:mb-14 sm:px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold">
            On the market
          </span>
          <h2 className="mt-3 font-heading text-[1.85rem] font-light text-ink md:text-5xl lg:text-6xl">
            Homes on the market
          </h2>
          <span className="ornament-line mt-4" />
        </Reveal>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_18px_rgba(217,189,119,0.45)]"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_18px_rgba(217,189,119,0.45)]"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 sm:px-6 lg:px-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {properties.map((property, index) => (
          <div
            key={property.slug}
            className="anim-card w-[78vw] max-w-[320px] flex-shrink-0 sm:w-[340px] sm:max-w-none md:w-[380px]"
            style={{
              scrollSnapAlign: "center",
              animationDelay: `${index * 120}ms`,
            }}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-site px-6 lg:px-10">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 font-body text-sm tracking-[0.05em] text-ink hover:text-gold"
        >
          See all listings →
        </Link>
      </div>
    </section>
  );
}
