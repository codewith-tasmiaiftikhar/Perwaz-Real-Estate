import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/BackButton";
import { PropertyGallery } from "@/components/PropertyGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  gallery,
  getProperty,
  properties,
  propertyVideos,
  typeLabel,
} from "@/data/properties";
import { formatPrice } from "@/lib/format";
import { propertyEnquireMessage, whatsappUrl } from "@/lib/whatsapp";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Property" };
  return {
    title: property.title,
    description: `${property.location}, ${property.city}. ${property.area}.`,
  };
}

export default async function PropertyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const images = gallery(property);
  const videos = propertyVideos(property);
  const rent = property.status === "for-rent";
  const enquire = whatsappUrl(
    propertyEnquireMessage(
      property.title,
      `${property.location}, ${property.city}`,
    ),
  );

  return (
    <div className="bg-marble pt-[7.5rem] md:pt-[8.5rem]">
      <article className="mx-auto min-w-0 max-w-site px-4 pb-28 sm:px-6 lg:px-10 md:pb-24">
        <div className="pt-4 md:pt-8">
          <BackButton
            label="Back to listings"
            className="text-gold hover:text-gold-accessible"
          />
        </div>

        <div className="mt-4 md:mt-6">
          <PropertyGallery images={images} title={property.title} />
        </div>

        {videos.length > 0 ? (
          <div className="mt-4 grid gap-4">
            {videos.map((src) => (
              <div key={src} className="overflow-hidden rounded-sm bg-ink">
                <video
                  className="aspect-video w-full"
                  controls
                  playsInline
                  preload="metadata"
                  poster={images[0]}
                  src={src}
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start md:mt-10 md:gap-12">
          <aside className="h-fit rounded-sm border border-black/10 bg-white p-5 shadow-[0_16px_42px_-18px_rgba(0,0,0,0.15)] lg:order-2 lg:p-8">
            <p className="font-heading text-3xl font-light text-ink">
              {formatPrice(property.price, { monthly: rent })}
            </p>
            <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-mute">
              {property.status === "sold"
                ? "Sold"
                : rent
                  ? "Monthly rent"
                  : "Asking · for sale"}
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-mute">
              WhatsApp us for papers, a visit, or to confirm the house is still
              available.
            </p>
            <div className="mt-6 hidden lg:block">
              <WhatsAppButton href={enquire} label="Ask about this house" />
            </div>
          </aside>

          <div className="lg:order-1">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold">
              {typeLabel[property.type]}
            </span>
            <h1 className="mt-3 font-heading text-[1.85rem] font-light leading-[1.15] text-ink sm:text-4xl md:text-5xl">
              {property.title}
            </h1>
            <p className="mt-3 font-body text-sm text-mute">{`${property.location}, ${property.city}`}</p>

            <div className="mt-8 flex flex-wrap gap-8 border-y border-black/10 py-6">
              {[
                ["Area", property.area],
                ...(property.bedrooms
                  ? [["Beds", String(property.bedrooms)] as const]
                  : []),
                ...(property.bathrooms
                  ? [["Baths", String(property.bathrooms)] as const]
                  : []),
                ["Type", typeLabel[property.type]],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-mute">
                    {label}
                  </p>
                  <p className="mt-1 font-heading text-2xl font-light text-ink">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-ink/80">
              {property.description}
            </p>

            <div className="mt-12">
              <h2 className="font-heading text-2xl font-light text-ink">
                Facilities
              </h2>
              <ul className="mt-5 grid gap-0 sm:grid-cols-2">
                {property.facilities.map((item) => (
                  <li
                    key={item}
                    className="border-t border-black/10 py-3 font-body text-sm text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </article>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/10 bg-white/95 px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
        <BackButton
          label="Back"
          className="flex-1 justify-center rounded-sm border border-black/15 text-ink"
        />
        <WhatsAppButton
          href={enquire}
          label="WhatsApp"
          className="flex-1 justify-center rounded-sm"
        />
      </div>
    </div>
  );
}
