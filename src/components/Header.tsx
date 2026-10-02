"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contacts } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";
import { Ticker } from "./Ticker";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onListing = pathname.startsWith("/properties/") && pathname !== "/properties";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass =
    "relative inline-flex min-h-11 items-center font-body text-[11px] tracking-[0.18em] uppercase text-cream/70 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`anim-header fixed top-0 left-0 right-0 z-50 bg-ink ${
        scrolled ? "shadow-lg shadow-black/40" : ""
      }`}
    >
      <div className="header-gold-line" />
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-10">
        <div className="hidden h-[5.25rem] items-center justify-between gap-6 md:flex">
          <Logo />
          <nav className="flex items-center gap-6 lg:gap-7">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="grid h-16 grid-cols-[4.5rem_1fr_4.5rem] items-center md:hidden">
          {onListing ? (
            <BackButton className="justify-start text-cream" />
          ) : (
            <span />
          )}
          <div className="flex justify-center">
            <Logo compact />
          </div>
          <button
            type="button"
            className="min-h-11 justify-self-end font-body text-[11px] tracking-[0.16em] uppercase text-cream"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          {contacts.map((person) => (
            <Link
              key={person.phone}
              href={whatsappUrl(undefined, person.phone)}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {person.name}
            </Link>
          ))}
        </nav>
      ) : null}
      <Ticker />
    </header>
  );
}
