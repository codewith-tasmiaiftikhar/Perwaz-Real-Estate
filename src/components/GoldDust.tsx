const motes = [
  { l: "8%", t: "22%", d: "0s", s: "3px" },
  { l: "18%", t: "68%", d: "1.2s", s: "2px" },
  { l: "27%", t: "36%", d: "2.4s", s: "4px" },
  { l: "41%", t: "14%", d: "0.6s", s: "2px" },
  { l: "53%", t: "58%", d: "3.1s", s: "3px" },
  { l: "62%", t: "28%", d: "1.8s", s: "2px" },
  { l: "71%", t: "72%", d: "0.3s", s: "4px" },
  { l: "79%", t: "18%", d: "2.8s", s: "2px" },
  { l: "86%", t: "46%", d: "1.5s", s: "3px" },
  { l: "93%", t: "63%", d: "3.6s", s: "2px" },
  { l: "12%", t: "48%", d: "4.2s", s: "3px" },
  { l: "34%", t: "80%", d: "2s", s: "2px" },
];

export function GoldDust() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[8] overflow-hidden" aria-hidden>
      {motes.map((mote, i) => (
        <span
          key={i}
          className="gold-mote"
          style={{
            left: mote.l,
            top: mote.t,
            width: mote.s,
            height: mote.s,
            animationDelay: mote.d,
          }}
        />
      ))}
    </div>
  );
}
