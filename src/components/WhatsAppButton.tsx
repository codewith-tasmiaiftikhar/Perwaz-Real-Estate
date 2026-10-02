import Link from "next/link";
import { hasWhatsApp } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = {
  href?: string;
  label?: string;
  className?: string;
  light?: boolean;
};

export function WhatsAppButton({
  href,
  label = "Message on WhatsApp",
  className = "",
  light = false,
}: Props) {
  const url = href ?? whatsappUrl();
  const ready = Boolean(url) && hasWhatsApp();
  if (!ready) return null;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`gold-btn relative overflow-hidden inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.15em] ${
        light ? "bg-[#d9bd77] text-ink" : "bg-[#d9bd77] text-ink"
      } ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </Link>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.1 6.45 2.1 12c0 1.76.46 3.48 1.34 5L2 22l5.14-1.35A9.9 9.9 0 0 0 12.04 22c5.5 0 9.96-4.45 9.96-9.96 0-2.66-1.04-5.16-2.95-7.13zM12.04 20.15c-1.52 0-3.01-.4-4.31-1.15l-.31-.18-3.05.8.82-2.97-.2-.33a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.19-8.18 8.19zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74 1.59.68 2.02.74 2.75.62.42-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z" />
    </svg>
  );
}
