import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { markets } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Gifts Gulf | Advertising & Printing Partner in UAE & Qatar",
  description:
    "Gifts Gulf is a media and advertising partner across the UAE and Qatar, covering digital growth, signage and large format, interiors and experiences, and print and personalisation under one roof.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    title: "One partner, not a chain of vendors",
    text: "Websites, SEO and social sit alongside signage, print, fit-outs and exhibitions — briefed once and delivered as one project.",
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
    text: "Every service — from signboard approvals to local search — is planned around how business actually gets done in Dubai, Abu Dhabi, Sharjah and Doha.",
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
            Gifts Gulf brings together digital growth — websites, SEO and
            social media — with large-format printing and branding —
            signboards, stickers, flags and acrylic — plus interior
            fit-outs, kiosks and exhibition booths, and print
            personalisation — screen printing, T-shirts, UV-printed gifts
            and packaging. One brief, one point of contact, work that stays
            consistent across every surface it touches, across the UAE and
            Qatar.
          </p>
          <p className="mt-4 text-sm font-medium text-zinc-500">
            {markets.join(" · ")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
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
