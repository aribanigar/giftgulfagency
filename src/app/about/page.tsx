import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | Gifts Gulf Media & Advertising",
  description:
    "Gifts Gulf is a media and advertising partner covering brand production and digital growth under one roof.",
};

const values = [
  {
    title: "One partner, not a chain of vendors",
    text: "Signage, print, events, fit-out, social and web sit under one roof, briefed once and delivered as one project.",
  },
  {
    title: "Production-first thinking",
    text: "Design decisions are made with fabrication, installation and real materials in mind from the first concept.",
  },
  {
    title: "Physical and digital, together",
    text: "A brand's storefront and its Instagram feed are treated as the same problem, not two separate projects.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
            About Gifts Gulf
          </span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            A media &amp; advertising partner, built around one roof.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Gifts Gulf brings together brand production — signage, stickers,
            packaging, corporate gifts, events and fit-outs — with the
            digital side of a brand: social media, websites and software.
            One brief, one point of contact, work that stays consistent
            across every surface it touches.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          How we think about the work
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
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
