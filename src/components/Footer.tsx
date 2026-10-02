import Link from "next/link";
import { contacts, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "./Logo";

export function Footer() {

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-site gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-cream/70">
            We list houses, plots and apartments for sale in Pakistan. Each
            page shows photos, size and facilities. Message us on WhatsApp to
            visit or to list your property.
          </p>
        </div>
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-gold">
            Pages
          </p>
          <div className="mt-4 flex flex-col gap-2 font-body text-sm text-cream/70">
            <Link href="/properties" className="hover:text-gold">
              Properties
            </Link>
            <Link href="/about" className="hover:text-gold">
              About
            </Link>
            <Link href="/#faq" className="hover:text-gold">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-gold">
            Contact
          </p>
          <div className="mt-4 space-y-4 font-body text-sm text-cream/70">
            {contacts.map((person) => (
              <a
                key={person.phone}
                href={whatsappUrl(undefined, person.phone)}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-gold"
              >
                <span className="block text-cream">{person.name}</span>
                <span>{person.phone}</span>
              </a>
            ))}
            <p>{site.country}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center font-body text-[11px] uppercase tracking-[0.16em] text-cream/40">
        {site.name} · {site.country}
      </div>
    </footer>
  );
}
