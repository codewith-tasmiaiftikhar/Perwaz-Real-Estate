import Link from "next/link";
import type { Property } from "@/data/properties";
import { propertyPhoto, propertyVideo, typeLabel } from "@/data/properties";
import { CardVideo } from "./CardVideo";

export function PropertyCard({ property }: { property: Property }) {
  const photo = property.coverImage
    ? propertyPhoto(property, property.coverImage)
    : undefined;
  const video = !photo ? propertyVideo(property) : undefined;
  const sold = property.status === "sold";
  const rent = property.status === "for-rent";
  const badge = sold ? "Sold out" : rent ? "For rent" : "For sale";

  return (
    <Link href={`/properties/${property.slug}`} className="group group-card block">
      <article>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#eceae4] shadow-[0_16px_42px_-18px_rgba(191,144,58,0.5)] transition-shadow duration-500 group-hover:shadow-[0_26px_64px_-14px_rgba(191,144,58,0.65)]">
          {photo ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={property.title}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
              />
            </>
          ) : video ? (
            <CardVideo src={video} />
          ) : (
            <div className="h-full w-full bg-[#eceae4]" />
          )}
          <span className="card-shine always" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-black/55 px-2.5 py-1 font-body text-[10px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
            {badge}
          </span>
          <div className="pointer-events-none absolute bottom-5 right-5 z-10 text-right">
            <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-white/80">
              {sold ? "Sold out" : "WhatsApp for the price"}
            </span>
          </div>
        </div>
        <div className="pb-1 pt-5">
          <h3 className="line-clamp-2 font-heading text-xl leading-[1.2] text-ink transition-colors duration-500 group-hover:text-gold-accessible md:text-[1.4rem]">
            {property.title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-4 font-body text-xs text-mute">
            <span className="text-ink/70">{`${property.location}, ${property.city}`}</span>
            <span className="text-black/20">·</span>
            <span>{property.area}</span>
            <span className="text-black/20">·</span>
            <span>{typeLabel[property.type]}</span>
            {property.bedrooms ? (
              <>
                <span className="text-black/20">·</span>
                <span>{property.bedrooms} bed</span>
              </>
            ) : null}
            {property.bathrooms ? (
              <>
                <span className="text-black/20">·</span>
                <span>{property.bathrooms} bath</span>
              </>
            ) : null}
          </div>
        </div>
      </article>
    </Link>
  );
}
