import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";

const title = "Locations We Serve Across the GCC | Gifts Gulf Advertising";
const description =
  "Printing, signage, exhibitions, packaging, gifting and social media delivered across the UAE, Qatar, Saudi Arabia, Kuwait, Bahrain and Oman.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/locations` },
  openGraph: { title, description, url: `${siteConfig.url}/locations` },
  twitter: { card: "summary_large_image", title, description },
};

export default function LocationsPage() {
  const byCountry = locations.reduce<Record<string, typeof locations>>((acc, l) => {
    (acc[l.country] ??= []).push(l);
    return acc;
  }, {});

  return (
    <div>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950">
        <div className="section-hero-shade absolute inset-0" />
        <div className="hero-text-shadow relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Locations across the GCC.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-300">
            One production team, one point of contact, delivering printing,
            signage, exhibitions, packaging, gifting and social media in
            every market below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {Object.entries(byCountry).map(([country, cities]) => (
          <div key={country} className="mb-14 last:mb-0">
            <h2 className="font-heading text-xl font-semibold text-zinc-900">{country}</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="group flex flex-col gap-3 rounded-[var(--radius-lg)] border border-zinc-200 p-5 transition-colors hover:border-green-600 hover:bg-green-50/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="font-heading text-base font-semibold text-zinc-900">{l.city}</span>
                    <span className="mt-1 block text-sm text-zinc-600">{l.blurb}</span>
                  </span>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-green-700">
                    View {l.city} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
