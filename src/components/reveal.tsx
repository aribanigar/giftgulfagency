"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight scroll-reveal: one IntersectionObserver per instance,
 * unobserves itself on first intersection. Transform/opacity only (GPU),
 * so it stays smooth even on a long, image-heavy page.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Safety net: if IntersectionObserver never fires (unsupported,
    // throttled background tab, etc.) the content must not stay hidden.
    const fallback = window.setTimeout(() => {
      node.classList.add("reveal-in");
    }, 1800);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
            window.clearTimeout(fallback);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
