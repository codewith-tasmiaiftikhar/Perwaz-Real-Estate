import { EmptyCollection } from "@/components/EmptyCollection";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/data/properties";

export const metadata = {
  title: "Properties",
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-marble pt-[7.5rem] md:pt-40">
      <div className="mx-auto max-w-site px-4 py-8 sm:px-6 md:py-20 lg:px-10">
        <Reveal>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            On the market
          </span>
          <h1 className="mt-4 font-heading text-3xl font-light text-ink sm:text-4xl md:text-6xl lg:text-7xl">
            Properties
          </h1>
          <p className="mt-4 max-w-lg font-body text-sm text-mute">
            Open a listing for photos and details. WhatsApp us when you want to
            visit, or if you have a property of your own to add.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-site px-4 pb-24 sm:px-6 lg:px-10">
        {properties.length === 0 ? (
          <EmptyCollection />
        ) : (
          <>
            <p className="mb-6 font-body text-xs uppercase tracking-[0.15em] text-mute">
              {properties.length}{" "}
              {properties.length === 1 ? "listing" : "listings"}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {properties.map((property, index) => (
                <div
                  key={property.slug}
                  className="anim-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
