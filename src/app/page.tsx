import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  Layers,
  MapPin,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceMarquee } from "@/components/service-marquee";
import { SectionIndex, type SectionIndexRow } from "@/components/section-index";
import { SectionVisual } from "@/components/section-visual";
import { VendorComparison } from "@/components/vendor-comparison";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoEmbed } from "@/components/video-embed";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { getSettings } from "@/lib/settings";
import { parseVideoUrl } from "@/lib/video";
import { sectors, markets, siteFaqs, navLinks, sections } from "@/lib/site-data";
import { faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { featurePhotos, homeHeroGallery, sectionHeroGalleries } from "@/lib/photos";

const indexCaptions: Record<string, string> = {
  "/about": "Who we are, and how the work actually gets done.",
};

const sectionIndexRows: SectionIndexRow[] = navLinks.map((link) => {
  const slug = link.href.replace("/", "");
  const section = sections.find((s) => s.slug === slug);
  return {
    href: link.href,
    label: link.label,
    caption: indexCaptions[link.href] ?? section?.short ?? "",
    photo: sectionHeroGalleries[slug]?.[0] ?? featurePhotos.fabrication,
  };
});

const homeTitle =
  "Advertising Agency & Signage Company in UAE & Qatar | Gifts Gulf Advertising";
const homeDescription =
  "Printing, signages, events & exhibitions, packaging, gift items and social media, one partner across Dubai, Abu Dhabi, Sharjah and Doha.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteConfig.url,
    images: [{ url: homeHeroGallery[0], width: 1920, height: 1080, alt: homeTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeHeroGallery[0]],
  },
};

const sectorIcons: Record<string, typeof ShoppingBag> = {
  Retail: ShoppingBag,
  Hospitality: UtensilsCrossed,
  Corporate: Building2,
  Events: CalendarDays,
  Government: Landmark,
  Healthcare: HeartPulse,
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
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-zinc-950">
        <SectionVisual photos={homeHeroGallery} />
        <div className="hero-shade absolute inset-0" />

        <div className="hero-text-shadow relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40 sm:px-6 sm:pb-20">
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
      <SectionIndex rows={sectionIndexRows} />

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

      {/* Coverage: stats, markets & sectors */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Layers, value: "6", label: "Sections under one roof." },
              { icon: Globe2, value: "2", label: "Markets: the UAE and Qatar." },
              { icon: Handshake, value: "1", label: "Partner to brief, instead of several vendors." },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-xl)] border border-zinc-800 bg-zinc-900/60 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-lg)] bg-green-500/10 text-green-400">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="mt-5 font-heading text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 rounded-[var(--radius-xl)] border border-zinc-800 bg-zinc-900/60 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-green-400">
                Where we work
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {markets.map((city) => (
                  <span
                    key={city}
                    className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm font-medium text-zinc-300"
                  >
                    <MapPin className="h-3.5 w-3.5 text-green-400" strokeWidth={2} />
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-green-400">
                Who we work with
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {sectors.map((sector) => {
                  const Icon = sectorIcons[sector] ?? Building2;
                  return (
                    <span
                      key={sector}
                      className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm font-medium text-zinc-300"
                    >
                      <Icon className="h-3.5 w-3.5 text-green-400" strokeWidth={2} />
                      {sector}
                    </span>
                  );
                })}
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
        <div className="hero-text-shadow relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
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
