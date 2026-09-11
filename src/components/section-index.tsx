"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type SectionIndexRow = {
  href: string;
  label: string;
  caption: string;
  photo: string;
};

/**
 * A numbered index of every top-level page, paired with a live preview
 * panel — hovering or focusing a row crossfades the panel to that row's
 * photo. On small screens the panel is hidden and this is just a clean,
 * large-type list (the interaction needs a pointer and screen width
 * neither guarantee).
 *
 * Takes fully-resolved `rows` as a prop rather than computing photo URLs
 * itself — this is a client component (for the active-row state), and
 * the Cloudinary URLs depend on a server-only env var, so they have to
 * be resolved on the server and passed down, not recomputed here.
 *
 * Hover/focus handlers sit on a plain wrapping div, not the Link itself —
 * Link didn't forward them reliably.
 */
export function SectionIndex({ rows }: { rows: SectionIndexRow[] }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="scroll-mt-20 border-b border-zinc-800 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
        <p className="font-mono text-xs tracking-[0.2em] text-green-500">
          Everywhere a brand shows up
        </p>

        <div className="mt-8 grid gap-x-12 lg:grid-cols-[1fr_320px]">
          <div className="border-t border-zinc-800">
            {rows.map((row, i) => {
              const isActive = active === i;
              return (
                <div
                  key={row.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="relative border-b border-zinc-800"
                >
                  <Link
                    href={row.href}
                    className="relative flex items-center justify-between gap-4 py-6 outline-none sm:py-8"
                  >
                    <span
                      aria-hidden
                      className={
                        "absolute inset-y-0 left-[-1rem] w-0.5 origin-top scale-y-0 bg-green-500 transition-transform duration-300 sm:left-[-1.5rem] " +
                        (isActive ? "scale-y-100" : "")
                      }
                    />
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span
                        className={
                          "font-mono text-sm transition-colors duration-300 " +
                          (isActive ? "text-green-400" : "text-zinc-600")
                        }
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          "font-heading text-[clamp(2rem,7vw,4.75rem)] font-extrabold leading-[1.02] tracking-tight transition-all duration-300 " +
                          (isActive
                            ? "translate-x-2 text-green-400"
                            : "text-white")
                        }
                      >
                        {row.label}
                      </span>
                    </div>
                    <span
                      className={
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-14 sm:w-14 " +
                        (isActive
                          ? "rotate-45 border-green-400 bg-green-400 text-zinc-950"
                          : "border-zinc-700 text-zinc-500")
                      }
                    >
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] border border-zinc-800 bg-zinc-900">
                {rows.map((row, i) => (
                  <Image
                    key={row.href}
                    src={row.photo}
                    alt=""
                    fill
                    sizes="320px"
                    priority={active === i}
                    className={
                      "object-cover object-center transition-opacity duration-500 ease-in-out " +
                      (active === i ? "opacity-100" : "opacity-0")
                    }
                  />
                ))}
                <div className="photo-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-heading text-lg font-bold text-white">
                    {rows[active].label}
                  </p>
                  {rows[active].caption ? (
                    <p className="mt-1 text-sm text-zinc-300">
                      {rows[active].caption}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
