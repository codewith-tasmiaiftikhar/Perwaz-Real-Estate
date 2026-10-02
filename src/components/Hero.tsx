import Link from "next/link";
import { contacts, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { GoldDust } from "./GoldDust";
import { HeroFilmstrip } from "./HeroFilmstrip";
import { HeroSlideshow } from "./HeroSlideshow";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col bg-ink pt-[7.25rem] md:pt-[7.75rem]">
      <HeroSlideshow />
      <GoldDust />
      <div className="hero-orb hidden sm:block" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-site flex-1 flex-col justify-end px-4 pb-28 sm:px-6 md:pb-40 lg:px-10">
        <span className="anim-hero-kicker mb-4 inline-flex items-center gap-2.5 font-body text-[10px] uppercase tracking-[0.22em] text-gold sm:tracking-[0.28em] md:mb-8">
          <span className="float-dot size-1.5 rounded-full bg-gold" />
          For sale
          <span className="ml-1 hidden h-px w-8 origin-left bg-gold/40 line-grow sm:inline" />
          <span className="hidden text-white/60 sm:inline">{site.country}</span>
        </span>
        <h1 className="anim-hero-title mb-4 max-w-5xl font-heading text-[2.05rem] font-light leading-[1.2] text-white sm:text-5xl md:mb-8 md:text-[5.2rem] lg:text-[6.4rem]">
          <span className="hero-line block">Your next home,</span>
          <span className="hero-line hero-line-delay mt-1 block pl-[0.12em] pr-[0.2em] italic leading-[1.28]">
            <span className="gold-shimmer">shown in full.</span>
          </span>
        </h1>
        <span className="ornament-line mb-7 md:mb-9" />
        <p className="anim-hero-copy mb-6 max-w-xl font-body text-sm leading-relaxed tracking-normal text-white/80 sm:text-base md:mb-11 md:text-lg">
          Perwaz Real Estate lists houses, plots and apartments across Pakistan.
          Open a listing for photos, size and facilities — then WhatsApp us to
          visit or to ask a question.
        </p>

        <form
          action="/properties"
          className="anim-hero-bar gold-frame flex w-full max-w-4xl flex-col items-stretch gap-1 rounded-sm border border-gold/40 bg-[#f6f0e4] p-2 shadow-2xl shadow-black/50 md:flex-row md:gap-0"
        >
          <label className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#6f6b64]">
              Country
            </span>
            <span className="mt-1 font-body text-sm font-medium text-[#0b0b0b]">
              {site.country}
            </span>
          </label>
          <div className="hidden w-px bg-black/15 md:block" />
          <label className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#6f6b64]">
              Looking for
            </span>
            <span className="mt-1 font-body text-sm font-medium text-[#0b0b0b]">
              Property for sale
            </span>
          </label>
          <div className="flex items-center gap-2 p-1 md:pl-3">
            <div className="flex flex-col">
              {contacts.map((person) => (
                <Link
                  key={person.phone}
                  href={whatsappUrl(undefined, person.phone)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-sm px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.08em] text-[#0b0b0b] hover:text-[#9a7b3a]"
                >
                  {person.name}
                </Link>
              ))}
            </div>
            <button
              type="submit"
              className="gold-btn relative overflow-hidden inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#d9bd77] px-7 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#0b0b0b] hover:bg-[#e2c984] md:w-auto"
            >
              See listings
            </button>
          </div>
        </form>
      </div>

      <HeroFilmstrip />
      <div className="scroll-cue hidden md:block" aria-hidden>
        <span />
      </div>
    </section>
  );
}
