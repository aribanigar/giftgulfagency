import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { sectionPhotos } from "@/lib/photos";

/**
 * A deliberately loud, full-width index of every top-level page — huge
 * type, numbered rows, a photo that floods in behind the label on hover.
 * Built from navLinks so "About Us" and all six sections stay in sync
 * with the header/footer automatically.
 */
export function SectionIndex() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-b border-zinc-800 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
        <p className="font-mono text-xs tracking-[0.2em] text-green-500">
          Everywhere a brand shows up
        </p>
        <div className="mt-8 border-t border-zinc-800">
          {navLinks.map((link, i) => {
            const slug = link.href.replace("/", "");
            const photo = sectionPhotos[slug];
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex flex-col gap-3 overflow-hidden border-b border-zinc-800 py-7 sm:flex-row sm:items-center sm:justify-between sm:py-9"
              >
                {photo ? (
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="900px"
                    className="object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-25"
                  />
                ) : null}
                <div className="relative flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-sm text-zinc-600 transition-colors duration-300 group-hover:text-green-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-[clamp(2rem,8vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-white transition-colors duration-300 group-hover:text-green-400">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="relative h-8 w-8 shrink-0 self-end text-zinc-600 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-white sm:self-auto" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
