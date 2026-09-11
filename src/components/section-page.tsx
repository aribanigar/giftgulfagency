import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionVisual } from "@/components/section-visual";
import { JsonLd } from "@/components/json-ld";
import { sections, type Section } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { faqPageSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";

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

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-zinc-500">
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-700">{section.name}</span>
          </nav>

          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-green-50 text-green-700">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <h1 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                {section.name} in the UAE &amp; Qatar
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
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
              <dt className="font-mono text-[11px] uppercase tracking-wide text-zinc-400">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-zinc-800">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <SectionVisual slug={section.slug} icon={Icon} />
        </div>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          What&apos;s included
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {section.capabilities.map((c) => (
            <li
              key={c}
              className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-zinc-200 p-4 text-sm text-zinc-700"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              {c}
            </li>
          ))}
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
