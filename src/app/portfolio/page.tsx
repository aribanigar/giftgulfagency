import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/kicker";
import { sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Portfolio | Gifts Gulf Advertising",
  description:
    "Work across printing, signages, events and exhibitions, packaging, gift items and social media for clients in the UAE and Qatar, organised by category.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Kicker>Portfolio</Kicker>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Work, by category.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-600">
            Project photography and case studies from across the UAE and
            Qatar are being added here. In the meantime, here&apos;s exactly
            what each category covers and delivers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.slug}
                href={`/${section.slug}`}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-zinc-50">
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="bg-dot-grid absolute inset-0 opacity-30" />
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-200/50 blur-2xl" />
                    <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-zinc-300/40 blur-2xl" />
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-[var(--radius-sm)] bg-green-600 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                    {section.name}
                  </span>
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-md shadow-green-900/20">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.6} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-zinc-900">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {section.short}
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-col gap-1.5 border-t border-zinc-100 pt-3">
                    {section.capabilities.slice(0, 3).map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-xs text-zinc-600"
                      >
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-green-700">
                    See {section.name.toLowerCase()} in detail
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Want to see how this applies to your brand?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            Share what you&apos;re working on and we&apos;ll walk you through
            relevant examples for your category and market.
          </p>
          <div className="mt-7">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
