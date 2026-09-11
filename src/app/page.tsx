import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceMarquee } from "@/components/service-marquee";
import { ServiceCard } from "@/components/service-card";
import { VendorComparison } from "@/components/vendor-comparison";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoEmbed } from "@/components/video-embed";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { getSettings } from "@/lib/settings";
import { parseVideoUrl } from "@/lib/video";
import { sections, sectors, markets, siteFaqs } from "@/lib/site-data";
import { organizationSchema, faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { featurePhotos } from "@/lib/photos";

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
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqPageSchema(siteFaqs)} />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-zinc-950">
        <Image
          src={featurePhotos.heroSkyline}
          alt="Dubai skyline at dusk, Sheikh Zayed Road interchange lit gold below the Burj Khalifa"
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover object-bottom opacity-95"
        />
        <div className="hero-shade absolute inset-0" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40 sm:px-6 sm:pb-20">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-green-400">
            <span className="h-1.5 w-1.5 bg-green-400" />
            UAE &amp; Qatar &middot; Advertising &amp; Signage
          </div>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl">
            Every brand touchpoint.
            <br />
            <span className="text-green-400">One partner</span>, across
            the UAE &amp; Qatar.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Gifts Gulf Advertising covers printing, signages, events &amp;
            exhibitions, packaging and gift items, plus the social media,
            website and SEO work that keeps a brand visible, for
            businesses in Dubai, Abu Dhabi, Sharjah and Doha.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
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

      {/* Services */}
      <section id="services" className="scroll-mt-20 border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Six sections, one partner
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Everything a brand needs to look right and be found, in one
            place.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, i) => (
              <Reveal key={section.slug} delay={i * 80}>
                <ServiceCard service={section} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor comparison */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            One partner instead of five vendors
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Most signage companies, printers, fit-out contractors and
            digital agencies across the UAE and Qatar specialise in one
            thing. Gifts Gulf Advertising doesn&apos;t.
          </p>
          <div className="mt-10">
            <VendorComparison />
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-zinc-200 bg-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-4 py-14 sm:px-6">
          <div>
            <div className="font-heading text-4xl font-bold text-white">6</div>
            <p className="mt-2 text-sm text-zinc-400">
              Sections under one roof.
            </p>
          </div>
          <div>
            <div className="font-heading text-4xl font-bold text-white">2</div>
            <p className="mt-2 text-sm text-zinc-400">
              Markets: the UAE and Qatar.
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
              <p className="text-xs font-semibold tracking-wider text-zinc-500">
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
              <p className="text-xs font-semibold tracking-wider text-zinc-500">
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
      <section className="relative overflow-hidden bg-zinc-950">
        <Image
          src={featurePhotos.sheikhZayedRoad}
          alt="Sheikh Zayed Road towers with light trails at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="photo-shade-strong absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Let&apos;s build your next brand moment.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-300">
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
