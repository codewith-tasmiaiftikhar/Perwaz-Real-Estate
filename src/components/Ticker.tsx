const lines = [
  "WhatsApp +92 336 9040860 for a viewing",
  "Houses, plots and apartments listed with photos",
  "Each page shows size, water, electricity and gas",
  "Perwaz Real Estate · Pakistan",
];

export function Ticker() {
  const text = lines.join("     ·     ");

  return (
    <div className="relative overflow-hidden border-t border-[#c9a961]/40 bg-[#0b0b0b]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
      <div className="ticker-track flex w-max items-center py-2.5">
        <span className="px-6 font-body text-[11px] tracking-[0.08em] text-[#e2c984] sm:px-8 sm:text-[13px] sm:tracking-[0.16em]">
          {text}
        </span>
        <span
          className="px-6 font-body text-[11px] tracking-[0.08em] text-[#e2c984] sm:px-8 sm:text-[13px] sm:tracking-[0.16em]"
          aria-hidden
        >
          {text}
        </span>
      </div>
    </div>
  );
}
