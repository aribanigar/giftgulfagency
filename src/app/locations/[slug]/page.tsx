import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { locations, getLocation } from "@/lib/locations";
import { sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { locationSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  const title = `Printing & Signage Company in ${location.city} | Gifts Gulf Advertising`;
  const description = location.blurb;
  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/locations/${location.slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/locations/${location.slug}` },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <div>
      <JsonLd data={locationSchema(location)} />
      <JsonLd data={faqPageSchema(location.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Locations", url: `${siteConfig.url}/locations` },
          { name: location.city, url: `${siteConfig.url}/locations/${location.slug}` },
        ])}
      />

      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950">
        <div className="section-hero-shade absolute inset-0" />
        <div className="hero-text-shadow relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-zinc-300">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span className="mx-2 text-zinc-500">/</span>
            <Link href="/locations" className="hover:text-green-400">Locations</Link>
            <span className="mx-2 text-zinc-500">/</span>
            <span className="text-white">{location.city}</span>
          </nav>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <MapPin className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-green-400">{location.country}</p>
              <h1 className="mt-1 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Gifts Gulf Advertising in {location.city}
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">{location.blurb}</p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Serving {location.city}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          {location.definition}
        </p>

        <div className="mt-8 rounded-[var(--radius-lg)] border border-zinc-200 bg-zinc-50 p-5">
          <p className="font-mono text-[11px] tracking-wide text-zinc-400">Areas we work in</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">{location.keyAreas.join(" · ")}</p>
        </div>

        <h3 className="mt-12 font-heading text-lg font-semibold text-zinc-900">
          Approvals in {location.city}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          {location.approvalNote}
        </p>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          What we deliver in {location.city}
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.slug}>
                <Link
                  href={`/${section.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-zinc-200 p-5 transition-colors hover:border-green-600 hover:bg-green-50/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="font-heading text-base font-semibold text-zinc-900">
                      {section.name}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-600">{section.short}</span>
                  </span>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-green-700">
                    View {section.name.toLowerCase()}{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={location.faqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Other locations
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group rounded-[var(--radius-lg)] border border-zinc-200 p-5 transition-colors hover:border-green-600"
              >
                <h3 className="font-heading text-base font-semibold text-zinc-900">{l.city}</h3>
                <p className="mt-1 text-sm text-zinc-600">{l.country}</p>
              </Link>
            ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Ready to brief a project in {location.city}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            Tell us the scope and timeline, and we&apos;ll follow up with next steps.
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
