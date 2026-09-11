import Link from "next/link";
import {
  Award,
  ArrowRight,
  BarChart3,
  Boxes,
  Calendar,
  Check,
  Coffee,
  Compass,
  Gift,
  Handshake,
  ImagePlay,
  Layers,
  Lightbulb,
  MapPin,
  MessageCircle,
  Package,
  Palette,
  PenTool,
  Presentation,
  Printer,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionVisual } from "@/components/section-visual";
import { JsonLd } from "@/components/json-ld";
import { sections, type Section } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { faqPageSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { sectionHeroGalleries } from "@/lib/photos";

const capabilityIconRules: [RegExp, LucideIcon][] = [
  // Specific multi-word phrases first, so a generic word (like "design" or
  // "bulk") appearing inside a more specific phrase elsewhere in the list
  // can't steal the match before the specific rule gets a chance to run.
  [/website|\bseo\b/i, Search],
  [/exhibition|kiosk|\bstand\b/i, Presentation],
  [/wayfinding/i, Compass],
  [/laser-cut|acrylic lettering/i, Sparkles],
  [/led|illuminated/i, Lightbulb],
  [/award|trophies/i, Award],
  [/storefront|retail branding/i, ShoppingBag],
  [/signboard|signage/i, MapPin],
  [/carry bag|kraft/i, ShoppingBag],
  [/corporate orders|partner/i, Handshake],
  [/hamper|gift set/i, Gift],
  [/personalisation|personalization/i, PenTool],
  [/sample/i, Sparkles],
  [/hardboard/i, Boxes],
  [/uv printing|dtf|printing/i, Printer],
  [/sticker|decal/i, Layers],
  [/vehicle/i, Truck],
  [/cup/i, Coffee],
  [/box/i, Package],
  [/production support/i, Truck],
  [/trade show|activation/i, Users],
  [/strategy|pillar/i, Lightbulb],
  [/photography|video|reels/i, ImagePlay],
  [/paid|advertising|\bads\b/i, Target],
  [/community|review/i, MessageCircle],
  [/influencer|ugc/i, Users],
  [/commerce|shop/i, ShoppingBag],
  [/analytics|reporting/i, BarChart3],
  [/ramadan|national day|campaign planning/i, Calendar],
  [/backdrop/i, Palette],
  // Generic catch-alls last: "design" and "branding" appear inside many
  // more specific phrases above, so this only fires when nothing else did.
  [/graphic|copywriting|design|branding/i, Palette],
];

function capabilityIcon(text: string): LucideIcon {
  for (const [pattern, icon] of capabilityIconRules) {
    if (pattern.test(text)) return icon;
  }
  return Check;
}

export function SectionPage({ section }: { section: Section }) {
  const Icon = section.icon;
  const related = sections.filter((s) => s.slug !== section.slug);

  return (
    <div>
      <JsonLd data={serviceSchema(section)} />
      <JsonLd data={faqPageSchema(section.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: section.name, url: `${siteConfig.url}/${section.slug}` },
        ])}
      />

      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-zinc-950">
        <SectionVisual photos={sectionHeroGalleries[section.slug] ?? []} />
        <div className="section-hero-shade absolute inset-0" />

        <div className="hero-text-shadow relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-zinc-300">
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
            <span className="mx-2 text-zinc-500">/</span>
            <span className="text-white">{section.name}</span>
          </nav>

          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <h1 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {section.name} in the UAE &amp; Qatar
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            {section.description}
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          What is {section.name.toLowerCase()}?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          {section.definition}
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
          {section.quickFacts.map((fact) => (
            <div key={fact.label} className="bg-white p-4">
              <dt className="font-mono text-[11px] tracking-wide text-zinc-400">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-zinc-800">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          What&apos;s included
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {section.capabilities.map((c) => {
            const CapIcon = capabilityIcon(c);
            return (
              <li
                key={c}
                className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-zinc-200 p-4 text-sm text-zinc-700 transition-colors hover:border-green-600"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
                  <CapIcon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="pt-1">{c}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-[var(--radius-lg)] border border-green-200 bg-green-50 p-5 text-sm leading-relaxed text-zinc-700">
          <span className="font-semibold text-green-800">
            Not just a single-service specialist.
          </span>{" "}
          Most printers, signage companies and digital agencies in the UAE
          and Qatar only do one thing. Gifts Gulf Advertising pairs{" "}
          {section.name.toLowerCase()} with the other five sections a brand
          needs under the same brief, so nothing gets lost between vendors.
        </div>

        <h3 className="mt-12 font-heading text-lg font-semibold text-zinc-900">
          Serving Dubai, Abu Dhabi, Sharjah &amp; Doha
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          {section.regionalNote}
        </p>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={section.faqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Other sections
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group rounded-[var(--radius-lg)] border border-zinc-200 p-5 transition-colors hover:border-green-600"
            >
              <h3 className="font-heading text-base font-semibold text-zinc-900">
                {s.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Ready to brief {section.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            Tell us the scope and timeline in Dubai, Abu Dhabi, Sharjah or
            Doha, and we&apos;ll follow up with next steps.
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

export function sectionMetadata(section: Section) {
  const title = `${section.name} Company in Dubai, Abu Dhabi & Doha | Gifts Gulf Advertising`;
  return {
    title,
    description: section.description,
    alternates: { canonical: `${siteConfig.url}/${section.slug}` },
    openGraph: {
      title,
      description: section.description,
      url: `${siteConfig.url}/${section.slug}`,
    },
  };
}
