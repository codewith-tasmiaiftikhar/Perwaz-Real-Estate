"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { contacts, hasWhatsApp } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (!hasWhatsApp()) return null;

  const onListing = pathname.startsWith("/properties/") && pathname !== "/properties";

  return (
    <div
      className={`fixed right-4 z-[70] flex-col items-end gap-2 md:bottom-7 md:right-7 ${
        onListing
          ? "hidden lg:flex lg:bottom-7"
          : "flex bottom-[calc(1.25rem+env(safe-area-inset-bottom))]"
      }`}
    >
      {open ? (
        <div className="flex w-56 flex-col overflow-hidden rounded-sm bg-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
          {contacts.map((person) => (
            <a
              key={person.phone}
              href={whatsappUrl(undefined, person.phone)}
              target="_blank"
              rel="noreferrer"
              className="border-b border-black/10 px-4 py-3 font-body text-sm text-ink last:border-b-0 hover:bg-[#f6f0e4]"
            >
              <span className="block">{person.name}</span>
              <span className="text-xs text-mute">{person.phone}</span>
            </a>
          ))}
        </div>
      ) : null}
      <button
        type="button"
        aria-expanded={open}
        aria-label="Choose who to message on WhatsApp"
        onClick={() => setOpen((value) => !value)}
        className="wa-float flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current md:h-9 md:w-9" aria-hidden>
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.1 6.45 2.1 12c0 1.76.46 3.48 1.34 5L2 22l5.14-1.35A9.9 9.9 0 0 0 12.04 22c5.5 0 9.96-4.45 9.96-9.96 0-2.66-1.04-5.16-2.95-7.13zM12.04 20.15c-1.52 0-3.01-.4-4.31-1.15l-.31-.18-3.05.8.82-2.97-.2-.33a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.19-8.18 8.19zm4.52-6.16c-.25-.12-1.47-.72-1.70-.81-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74 1.59.68 2.02.74 2.75.62.42-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z" />
        </svg>
      </button>
    </div>
  );
}
