import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceMarquee } from "@/components/service-marquee";
import { ServiceCard } from "@/components/service-card";
import { VendorComparison } from "@/components/vendor-comparison";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoEmbed } from "@/components/video-embed";
import { Kicker } from "@/components/kicker";
import { JsonLd } from "@/components/json-ld";
import { getSettings } from "@/lib/settings";
import { parseVideoUrl } from "@/lib/video";
import { sections, sectors, markets, siteFaqs } from "@/lib/site-data";
import { faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Advertising Agency & Signage Company in UAE & Qatar | Gifts Gulf Advertising",
  description:
    "Printing, signages, events & exhibitions, packaging, gift items and social media, one partner across Dubai, Abu Dhabi, Sharjah and Doha.",
  alternates: { canonical: siteConfig.url },
};

const processSteps = [
  {
    n: "01",
    title: "Brief",
    text: "We start with the brand, the market, whether UAE or Qatar, and the outcome you need, not a generic questionnaire.",
  },
  {
    n: "02",
    title: "Design",
    text: "Concepts move fast, with production, installation and search visibility considered from the first sketch.",
  },
  {
    n: "03",
    title: "Produce",
    text: "Printing, signage, events and digital work happens under one roof, so nothing waits on a third party.",
  },
  {
    n: "04",
    title: "Launch & Grow",
    text: "Install, go live, then keep momentum with social media, SEO and the rest of the digital side of the business.",
  },
];

export default async function Home() {
  const settings = await getSettings();
  const hasVideo = parseVideoUrl(settings.featuredVideo.url) !== null;

  return (
    <div>
      <JsonLd data={faqPageSchema(siteFaqs)} />

      {/* Hero */}
      <section className="bg-dot-grid relative overflow-hidden border-b border-zinc-200 bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-100 opacity-60 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            <Kicker>Advertising Agency — UAE &amp; Qatar</Kicker>
            <h1 className="mt-6 font-heading text-[2.75rem] font-bold leading-[1.02] tracking-tight text-balance text-zinc-900 sm:text-7xl lg:text-[5.5rem]">
              Every brand
              <br />
              touchpoint.
              <br />
              <span className="text-green-600">One partner.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              Gifts Gulf Advertising covers printing, signages, events &amp;
              exhibitions, packaging and gift items, plus the social media,
              website and SEO work that keeps a brand visible, for
              businesses in Dubai, Abu Dhabi, Sharjah and Doha.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative border-t border-zinc-200">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-5 sm:px-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Serving
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {markets.map((city) => (
                <span
                  key={city}
                  className="font-heading text-sm font-semibold text-zinc-500"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceMarquee />

      {/* Process */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Kicker>How we work</Kicker>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Brief once. Everything moves together.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Services */}
      <section id="services" className="scroll-mt-20 border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Kicker>Services</Kicker>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Six sections, one partner.
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Everything a brand needs to look right and be found, in one
            place.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <ServiceCard key={section.slug} service={section} />
            ))}
          </div>
        </div>
      </section>

      {/* Vendor comparison */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Kicker>Why one partner</Kicker>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            One partner instead of five vendors.
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Most signage companies, printers, fit-out contractors and
            digital agencies across the UAE and Qatar specialise in one
            thing. Gifts Gulf Advertising doesn&apos;t.
          </p>
          <div className="mt-12">
            <VendorComparison />
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-zinc-200 bg-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-4 py-16 sm:px-6 sm:py-20">
          <div>
            <div className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">6</div>
            <p className="mt-3 text-sm text-zinc-400">
              Sections under one roof.
            </p>
          </div>
          <div>
            <div className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">2</div>
            <p className="mt-3 text-sm text-zinc-400">
              Markets: the UAE and Qatar.
            </p>
          </div>
          <div>
            <div className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">1</div>
            <p className="mt-3 text-sm text-zinc-400">
              Partner to brief, instead of several vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Markets & sectors */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                Where we work
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {markets.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-green-600 hover:text-zinc-900"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                Who we work with
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-green-600 hover:text-zinc-900"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasVideo ? (
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
              {settings.featuredVideo.title}
            </h2>
            <div className="mt-8">
              <VideoEmbed
                url={settings.featuredVideo.url}
                title={settings.featuredVideo.title}
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ (AEO) */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
          <Kicker>FAQ</Kicker>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Frequently asked questions.
          </h2>
          <div className="mt-10">
            <FaqAccordion faqs={siteFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Let&apos;s build your next brand moment.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Signage, an exhibition stand, a new website, or all of it.
            Wherever you are between Dubai and Doha, tell us what you need.
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
