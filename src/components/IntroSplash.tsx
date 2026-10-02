"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function IntroSplash() {
  const [phase, setPhase] = useState<"pending" | "play" | "exit" | "gone">(
    "pending",
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("perwaz-intro") === "1";

    if (reduce || seen) {
      document.documentElement.dataset.motion = "skip";
      document.documentElement.classList.remove("intro-lock");
      setPhase("gone");
      return;
    }

    document.documentElement.dataset.motion = "play";
    document.documentElement.classList.add("intro-lock");
    setPhase("play");

    const exitAt = window.setTimeout(() => setPhase("exit"), 2200);
    const goneAt = window.setTimeout(() => {
      document.documentElement.classList.remove("intro-lock");
      sessionStorage.setItem("perwaz-intro", "1");
      setPhase("gone");
    }, 3300);

    return () => {
      window.clearTimeout(exitAt);
      window.clearTimeout(goneAt);
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  if (phase === "pending" || phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-ink ${
        phase === "exit"
          ? "animate-[curtainExit_1.15s_cubic-bezier(0.76,0,0.24,1)_forwards]"
          : ""
      }`}
      aria-hidden
    >
      <div
        className="scale-125 sm:scale-150 md:scale-[1.75]"
        style={{
          animation: "splashLogoIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        <Logo />
      </div>
    </div>
  );
}
