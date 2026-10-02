import Link from "next/link";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";
import { Logo } from "./Logo";

export function Footer() {
  const wa = whatsappUrl();

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
          <div className="mt-4 space-y-3 font-body text-sm text-cream/70">
            {wa ? (
              <a href={wa} target="_blank" rel="noreferrer" className="hover:text-gold">
                Message on WhatsApp
              </a>
            ) : null}
            <p>{site.whatsapp}</p>
            <p>{site.country}</p>
          </div>
          <div className="mt-8">
            <WhatsAppButton light label="Message on WhatsApp" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center font-body text-[11px] uppercase tracking-[0.16em] text-cream/40">
        {site.name} · {site.country}
      </div>
    </footer>
  );
}
