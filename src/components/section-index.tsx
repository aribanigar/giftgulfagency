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

        <div className="mt-8 grid gap-x-16 lg:grid-cols-[1fr_460px]">
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
                    className="relative flex items-center gap-4 py-5 outline-none sm:gap-6 sm:py-6"
                  >
                    <span
                      aria-hidden
                      className={
                        "absolute inset-y-0 left-[-1rem] w-0.5 origin-top scale-y-0 bg-green-500 transition-transform duration-300 sm:left-[-1.5rem] " +
                        (isActive ? "scale-y-100" : "")
                      }
                    />
                    <span
                      className={
                        "font-mono text-xs transition-colors duration-300 " +
                        (isActive ? "text-green-400" : "text-zinc-600")
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-zinc-800 lg:hidden">
                      <Image
                        src={row.photo}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover object-center"
                      />
                    </div>

                    <span
                      className={
                        "flex-1 font-heading text-[clamp(1.5rem,4.5vw,2.5rem)] font-extrabold leading-[1.05] tracking-tight transition-all duration-300 " +
                        (isActive
                          ? "translate-x-2 text-green-400"
                          : "text-white")
                      }
                    >
                      {row.label}
                    </span>

                    <span
                      className={
                        "hidden shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:flex sm:h-12 sm:w-12 " +
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 shadow-[0_30px_80px_-30px_rgb(0_0_0_/_0.7)]">
                {rows.map((row, i) => (
                  <Image
                    key={row.href}
                    src={row.photo}
                    alt=""
                    fill
                    sizes="460px"
                    priority={active === i}
                    className={
                      "ken-burns object-cover object-center transition-opacity duration-500 ease-in-out " +
                      (active === i ? "opacity-100" : "opacity-0")
                    }
                  />
                ))}
                <div className="photo-shade absolute inset-0" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <span className="font-mono text-xs tracking-[0.2em] text-white/70">
                    {String(active + 1).padStart(2, "0")} / {String(rows.length).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-heading text-2xl font-bold text-white">
                    {rows[active].label}
                  </p>
                  {rows[active].caption ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
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
