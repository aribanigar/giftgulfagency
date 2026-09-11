import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceMarquee } from "@/components/service-marquee";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import {
  pillars,
  pillarOrder,
  servicesByPillar,
  sectors,
  markets,
  siteFaqs,
} from "@/lib/site-data";
import { organizationSchema, faqPageSchema } from "@/lib/schema";

const processSteps = [
  {
    n: "01",
    title: "Brief",
    text: "We start with the brand, the market — UAE or Qatar — and the outcome you need, not a generic questionnaire.",
  },
  {
    n: "02",
    title: "Design",
    text: "Concepts move fast, with production, installation and search visibility considered from the first sketch.",
  },
  {
    n: "03",
    title: "Produce",
    text: "Signage, print, fit-out and digital work happens under one roof, so nothing waits on a third party.",
  },
  {
    n: "04",
    title: "Launch & Grow",
    text: "Install, go live, then keep momentum with SEO, social and the rest of the digital side of the business.",
  },
];

export default function Home() {
  return (
    <div>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqPageSchema(siteFaqs)} />

      {/* Hero */}
      <section className="bg-dot-grid relative overflow-hidden border-b border-zinc-200 bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-100 opacity-60 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold leading-[1.06] tracking-tight text-balance text-zinc-900 sm:text-6xl">
              Every brand touchpoint.
              <br />
              <span className="text-green-600">One partner</span>, across
              the UAE &amp; Qatar.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              Gifts Gulf plans and builds the full brand journey — websites,
              SEO and social media on one side; signage, large-format
              printing, fit-outs, exhibition booths and branded merchandise
              on the other — for businesses in Dubai, Abu Dhabi, Sharjah and
              Doha.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceMarquee />

      {/* Process */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            How we work
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.n} className="relative">
                <span className="font-heading text-3xl font-bold text-green-600/30">
                  {step.n}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.text}
                </p>
                {i < processSteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute right-[-1rem] top-2 hidden h-px w-8 bg-zinc-300 lg:block"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Twelve services, four pillars
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {pillarOrder.map((pillar) => (
              <div
                key={pillar}
                className="flex flex-col justify-between rounded-[var(--radius-xl)] border border-zinc-200 p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-xl font-semibold text-zinc-900">
                      {pillars[pillar].label}
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      {String(servicesByPillar[pillar].length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-zinc-600">
                    {pillars[pillar].tagline}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {servicesByPillar[pillar].map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-green-600 hover:text-green-700"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/services#${pillar}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-green-700"
                >
                  Explore {pillars[pillar].label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-zinc-200 bg-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          <div>
            <div className="font-heading text-4xl font-bold text-white">12</div>
            <p className="mt-2 text-sm text-zinc-400">
              Services under one roof.
            </p>
          </div>
          <div>
            <div className="font-heading text-4xl font-bold text-white">4</div>
            <p className="mt-2 text-sm text-zinc-400">
              Pillars — digital, signage, spaces, print.
            </p>
          </div>
          <div>
            <div className="font-heading text-4xl font-bold text-white">2</div>
            <p className="mt-2 text-sm text-zinc-400">
              Markets — the UAE and Qatar.
            </p>
          </div>
          <div>
            <div className="font-heading text-4xl font-bold text-white">1</div>
            <p className="mt-2 text-sm text-zinc-400">
              Partner to brief, instead of several vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Markets & sectors */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Where we work
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {markets.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Who we work with
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (AEO) */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={siteFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <h2 className="font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">
            Let&apos;s build your next brand moment.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Signage, an exhibition stand, a new website, or all of it —
            wherever you are between Dubai and Doha, tell us what you need.
          </p>
          <div className="mt-8">
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
