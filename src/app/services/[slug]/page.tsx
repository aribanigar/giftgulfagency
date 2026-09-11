import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { services, servicesByPillar, pillars, getService } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { faqPageSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.name} in Dubai, Abu Dhabi & Doha | Gifts Gulf`;
  return {
    title,
    description: service.description,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = servicesByPillar[service.pillar].filter(
    (s) => s.slug !== service.slug,
  );

  return (
    <div>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          {
            name: service.name,
            url: `${siteConfig.url}/services/${service.slug}`,
          },
        ])}
      />

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-zinc-500">
            <Link href="/services" className="hover:text-green-700">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-700">{service.name}</span>
          </nav>

          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-green-50 text-green-700">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                {service.code} · {pillars[service.pillar].label}
              </span>
              <h1 className="mt-2 max-w-2xl font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                {service.name} across the UAE &amp; Qatar
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {service.description}
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
          What&apos;s included
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.capabilities.map((c) => (
            <li
              key={c}
              className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-zinc-200 p-4 text-sm text-zinc-700"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            More in {pillars[service.pillar].label}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-[var(--radius-lg)] border border-zinc-200 p-5 transition-colors hover:border-green-600"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  {s.code}
                </span>
                <h3 className="mt-2 font-heading text-base font-semibold text-zinc-900">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{s.short}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Ready to brief {service.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            Tell us the scope and timeline — Dubai, Abu Dhabi, Sharjah or
            Doha — and we&apos;ll follow up with next steps.
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
