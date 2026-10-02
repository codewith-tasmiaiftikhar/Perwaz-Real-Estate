"use client";

import { useRouter } from "next/navigation";

export function BackButton({
  fallback = "/properties",
  label = "Back",
  className = "",
}: {
  fallback?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallback);
      }}
      className={`inline-flex min-h-11 min-w-11 items-center gap-2 font-body text-xs uppercase tracking-[0.14em] ${className}`}
    >
      <span aria-hidden>←</span>
      {label}
    </button>
  );
}
