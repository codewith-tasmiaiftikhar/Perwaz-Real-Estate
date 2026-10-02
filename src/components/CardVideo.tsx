"use client";

import { useEffect, useRef } from "react";

export function CardVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!node.src) node.src = src;
          void node.play().catch(() => {});
        } else {
          node.pause();
        }
      },
      { rootMargin: "80px", threshold: 0.2 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
