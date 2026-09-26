"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { sections } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/blog", label: "Insights" },
  { href: "/locations", label: "Locations" },
];

// Every public page opens with a dark hero, so the header sits transparently
// on top of it; admin and quote pages start plain, so they get a solid bar.
function startsWithDarkHero(pathname: string) {
  return !pathname.startsWith("/admin") && !pathname.startsWith("/quote");
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const overlay = startsWithDarkHero(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !overlay || scrolled;
  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid ? "bg-white text-ink shadow-[0_1px_0_rgb(15_15_15/0.08)]" : "bg-transparent text-white",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div
            className={cn(
              "flex h-20 items-center justify-between gap-6 border-b transition-colors",
              solid ? "border-transparent" : "border-white/25",
            )}
          >
            <Link href="/" className="flex shrink-0 items-center" aria-label="Gifts Gulf Advertising, home" onClick={close}>
              <Image
                src={solid ? "/logo.png" : "/logo-white.png"}
                alt="Gifts Gulf Advertising"
                width={1516}
                height={358}
                priority
                className="h-9 w-auto max-w-none sm:h-10"
              />
            </Link>

            <nav className="hidden items-center gap-9 text-[15px] lg:flex">
              <div className="group relative">
                <Link
                  href="/#services"
                  className="flex items-center gap-1 py-7 transition-opacity hover:opacity-70"
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" strokeWidth={2} />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-0 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="grid grid-cols-2 gap-x-8 bg-night p-7 text-white shadow-2xl">
                    {sections.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="group/item flex items-center justify-between border-b border-white/10 py-3.5 text-[15px] hover:text-brand-bright"
                        >
                          {s.name}
                          <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover/item:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="whitespace-nowrap transition-opacity hover:opacity-70">
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="hidden items-center gap-2 whitespace-nowrap text-[15px] font-semibold transition-colors hover:text-brand-bright lg:flex"
            >
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {!overlay ? <div aria-hidden className="h-20" /> : null}

      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-night text-white lg:hidden">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
            <Link href="/" onClick={close} aria-label="Gifts Gulf Advertising, home">
              <Image src="/logo-white.png" alt="Gifts Gulf Advertising" width={1516} height={358} className="h-9 w-auto" />
            </Link>
            <button type="button" aria-label="Close menu" onClick={close} className="inline-flex h-11 w-11 items-center justify-center">
              <X className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8">
            <p className="eyebrow eyebrow-bright mb-3">Services</p>
            <ul className="mb-10">
              {sections.map((s) => (
                <li key={s.slug} className="border-b border-white/10">
                  <Link href={`/${s.slug}`} onClick={close} className="block py-3.5 text-lg">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {[...primaryLinks, { href: "/contact", label: "Contact" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={close} className="display-md block py-2 hover:text-brand-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={close} className="link-arrow mt-10 text-lg">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
