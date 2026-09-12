import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Globe, Handshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionVisual } from "@/components/section-visual";
import { Reveal } from "@/components/reveal";
import { markets, sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { featurePhotos, sectionHeroGalleries } from "@/lib/photos";

const aboutTitle = "About Gifts Gulf Advertising | Printing, Signage & Events Partner";
const aboutDescription =
  "Gifts Gulf Advertising builds printing, signage, event & exhibition stands, packaging and gift items for businesses across the UAE and Qatar, one brief, one team, one delivery.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: `${siteConfig.url}/about`,
    images: [{ url: sectionHeroGalleries.signages[0], width: 1920, height: 1080, alt: aboutTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [sectionHeroGalleries.signages[0]],
  },
};

const aboutHeroGallery = [
  sectionHeroGalleries.signages[0],
  sectionHeroGalleries["events-exhibitions"][0],
  sectionHeroGalleries.packaging[0],
  sectionHeroGalleries.printing[0],
  sectionHeroGalleries["gift-items"][0],
];

const values = [
  {
    icon: Handshake,
    title: "One team, every service",
    text: "Printing, signage, events and gifting sit alongside social media, website and SEO work, briefed once and delivered as one project.",
  },
  {
    icon: Factory,
    title: "Production-first thinking",
    text: "Design decisions are made with fabrication, installation and real materials in mind from the first concept, not reworked after the quote.",
  },
  {
    icon: Globe,
    title: "Physical and digital, together",
    text: "A brand's storefront, its exhibition booth, and its search rankings are treated as one connected project, briefed and delivered together.",
  },
  {
    icon: ShieldCheck,
    title: "Built for the UAE & Qatar",
    text: "Every section, from signage approvals to local search, is planned around how business actually gets done in Dubai, Abu Dhabi, Sharjah and Doha.",
  },
];

const leadSections = sections.filter((s) => s.slug !== "social-media");

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[64vh] items-end overflow-hidden bg-zinc-950">
        <SectionVisual photos={aboutHeroGallery} />
        <div className="section-hero-shade absolute inset-0" />

        <div className="hero-text-shadow relative mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6 sm:pb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-green-400">
            About Gifts Gulf Advertising
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything a brand needs printed, built and installed, from one
            team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Printing, signage, event and exhibition stands, packaging and
            gift items, produced by one team and delivered across the UAE and
            Qatar, from a single brief.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category deck — the core of what generates a quote request */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          What we build
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Six sections, one team behind all of them. Pick where your
          project starts, every section links through to a full brief and
          a quote.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => {
            const Icon = s.icon;
            const photo = sectionHeroGalleries[s.slug]?.[0];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-green-600 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={`${s.name} work in the UAE and Qatar`}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    ) : null}
                    <div className="photo-shade absolute inset-0" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-zinc-900">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {s.short}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-1.5 border-t border-zinc-100 pt-4 text-sm font-medium text-green-700">
                      Get a quote for {s.name.toLowerCase()}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            How we think about the work
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[var(--radius-xl)] border border-zinc-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-lg)] bg-green-50 text-green-700">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-zinc-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
              Where we deliver
            </h2>
            <p className="mt-4 max-w-lg text-zinc-600">
              Printing, signage, exhibition stands, packaging and gift items,
              produced and installed for businesses across the UAE and
              Qatar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
          <div className="grid grid-cols-2 gap-3">
            {leadSections.slice(0, 4).map((s) => {
              const photo = sectionHeroGalleries[s.slug]?.[1] ?? sectionHeroGalleries[s.slug]?.[0];
              return (
                <div
                  key={s.slug}
                  className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-zinc-900"
                >
                  {photo ? (
                    <Image
                      src={photo}
                      alt={`${s.name} sample`}
                      fill
                      sizes="(min-width:1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-zinc-950">
        <Image
          src={featurePhotos.fabrication}
          alt="Production floor where signage and fit-out work is fabricated"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="photo-shade-strong absolute inset-0" />
        <div className="hero-text-shadow relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Ready to brief your next project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-300">
              Printing, signage, an exhibition stand, packaging or gift
              items, tell us what you need and where, and we&apos;ll follow
              up with next steps.
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
