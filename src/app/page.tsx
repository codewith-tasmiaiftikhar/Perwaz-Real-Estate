import { Faq } from "@/components/Faq";
import { FeaturedRow } from "@/components/FeaturedRow";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/data/properties";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = properties.filter((p) => p.status !== "sold");

  return (
    <>
      <Hero />
      <FeaturedRow properties={featured} />

      <section className="bg-ink px-4 py-14 text-cream sm:px-6 md:py-28 lg:px-10">
        <Reveal className="mx-auto max-w-site">
          <div>
            <span className="inline-flex items-center gap-2.5 font-body text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              {site.country}
            </span>
            <h2 className="mt-5 font-heading text-4xl font-light leading-[1.18] text-white md:text-6xl">
              What each listing
              <br />
              <span className="mt-1 inline-block pl-[0.12em] pr-[0.2em] italic leading-[1.3]">
                <span className="gold-shimmer">tells you.</span>
              </span>
            </h2>
            <span className="ornament-line mt-6" />
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/65">
              No guesswork. You see the house, the size in marla, and whether
              water, electricity and gas are connected — then you message
              Perwaz if you want to walk through it.
            </p>
            <ul className="mt-8 max-w-md space-y-0">
              {[
                ["Photos", "Rooms, kitchen, front and porch so you know the condition."],
                ["Facts", "Area, asking price, and facilities written in plain words."],
                ["WhatsApp", "One number for visits, papers and questions about the listing."],
              ].map(([title, desc]) => (
                <li
                  key={title}
                  className="flex items-start gap-4 border-t border-white/10 py-4 first:border-t-0"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" />
                  <div>
                    <p className="font-body text-sm tracking-wide text-white">
                      {title}
                    </p>
                    <p className="mt-0.5 font-body text-xs leading-relaxed text-white/50">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="bg-ink px-4 pb-16 sm:px-6 md:pb-24 lg:px-10">
        <div className="royal-rule mx-auto mb-10 max-w-site" />
        <Reveal className="mx-auto max-w-3xl pt-6">
          <h2 className="font-heading text-3xl font-light text-white md:text-5xl">
            Want to sell, or come and see a house?
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-white/70">
            Send a WhatsApp with the listing name, or with your own property’s
            location, size, asking price and photos. We will tell you the next
            step.
          </p>
        </Reveal>
      </section>

      <Faq />
    </>
  );
}
