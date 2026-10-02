import Link from "next/link";
import { site } from "@/data/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex flex-col items-center"
      aria-label={`${site.name} home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/house-mark.png"
        alt=""
        width={375}
        height={248}
        className={compact ? "h-7 w-auto" : "h-12 w-auto"}
        draggable={false}
      />
      <span
        className={`mt-0.5 font-body font-normal uppercase leading-none tracking-[0.28em] text-white sm:tracking-[0.42em] ${
          compact ? "text-[12px]" : "text-[15px] md:text-[17px]"
        }`}
      >
        Perwaz
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className={`h-px bg-[#d4b15c] ${compact ? "w-3" : "w-5 md:w-6"}`} />
        <span
          className={`uppercase leading-none tracking-[0.28em] text-white sm:tracking-[0.42em] ${
            compact ? "text-[6px]" : "text-[8px] md:text-[9px]"
          }`}
        >
          Real Estate
        </span>
        <span className={`h-px bg-[#d4b15c] ${compact ? "w-3" : "w-5 md:w-6"}`} />
      </span>
    </Link>
  );
}
