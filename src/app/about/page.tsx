import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { contacts, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-marble pt-[7.5rem] md:pt-[8.5rem]">
      <section className="bg-ink px-4 py-12 text-cream sm:px-6 md:py-24 lg:px-10">
        <Reveal className="mx-auto max-w-site">
          <span className="inline-flex items-center gap-2.5 font-body text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="float-dot size-1.5 rounded-full bg-gold" />
            {site.country}
          </span>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-light leading-[1.02] tracking-[-0.015em] text-white sm:text-5xl md:text-6xl">
            <span className="gold-shimmer">Perwaz Real Estate</span>
          </h1>
        </Reveal>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10 md:py-24">
        <Reveal>
          <div className="space-y-6 font-body text-base leading-relaxed text-mute">
            <p>
              We help people buy and sell property in Pakistan. On this site you
              will find houses and other listings with photographs, the size,
              and what is connected — water, electricity, gas. Ask us on
              WhatsApp for the price.
            </p>
            <p>
              If a home interests you, message us on WhatsApp. That is also the
              number to use if you want your own property listed: send location,
              size, price and photos.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-3">
            {contacts.map((person) => (
              <WhatsAppButton
                key={person.phone}
                href={whatsappUrl(undefined, person.phone)}
                label={person.name}
              />
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
