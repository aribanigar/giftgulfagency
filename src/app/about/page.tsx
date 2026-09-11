import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { markets, sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Gifts Gulf Advertising | Printing Partner in UAE & Qatar",
  description:
    "Gifts Gulf Advertising is a media and advertising partner across the UAE and Qatar, covering printing, signages, events & exhibitions, packaging, gift items and social media under one roof.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    title: "One partner, not a chain of vendors",
    text: "Printing, signage, events and gifting sit alongside social media, website and SEO work, briefed once and delivered as one project.",
  },
  {
    title: "Production-first thinking",
    text: "Design decisions are made with fabrication, installation and real materials in mind from the first concept.",
  },
  {
    title: "Physical and digital, together",
    text: "A brand's storefront, its exhibition booth, and its search rankings are treated as the same problem, not separate projects.",
  },
  {
    title: "Built for the UAE & Qatar",
    text: "Every section, from signage approvals to local search, is planned around how business actually gets done in Dubai, Abu Dhabi, Sharjah and Doha.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            An advertising &amp; printing partner, built around one roof.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Gifts Gulf Advertising brings together printing, from UV and DTF
            work to large-format, stickers and banners, with signages, events
            &amp; exhibitions, packaging, and gift items, plus the social
            media, website and SEO work that keeps a brand visible. One
            brief, one point of contact, work that stays consistent across
            every surface it touches, across the UAE and Qatar.
          </p>
          <p className="mt-4 text-sm font-medium text-zinc-500">
            {markets.join(" · ")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          What we do
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="rounded-[var(--radius-lg)] border border-zinc-200 p-4 transition-colors hover:border-green-600"
            >
              <h3 className="font-heading text-base font-semibold text-zinc-900">
                {s.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            How we think about the work
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-heading text-lg font-semibold text-zinc-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Want to see what we can build together?
          </h2>
          <div className="mt-7">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
