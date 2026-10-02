"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What kind of property do you list?",
    a: "Houses, apartments, plots and some commercial space for sale in Pakistan. Each listing has photos, size, price and facilities.",
  },
  {
    q: "How do I ask about a house?",
    a: "Open WhatsApp from any page. Say which listing you mean, and we will share extra details and arrange a visit if it is still available.",
  },
  {
    q: "Can I visit before I decide?",
    a: "Yes. Message us on WhatsApp and we will set a time. Bring questions about papers, utilities and neighbourhood — we will answer what we can.",
  },
  {
    q: "I have a property. Will you put it on the site?",
    a: "Send the location, size (marla or kanal), asking price, and photos or a video. We will tell you what else we need before it is published.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-marble px-4 py-14 sm:px-6 md:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block font-body text-[10px] uppercase tracking-[0.3em] text-gold">
          Help
        </span>
        <h2 className="mt-3 font-heading text-3xl font-light text-ink md:text-5xl">
          Common questions
        </h2>
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="anim-card"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <FaqItem q={item.q} a={item.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-body text-sm text-ink group-hover:text-gold-accessible md:text-base">
          {q}
        </span>
        <span
          className={`text-gold transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      {open ? (
        <p className="max-w-2xl pb-5 font-body text-sm leading-relaxed text-mute">
          {a}
        </p>
      ) : null}
    </div>
  );
}
