import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { getSection } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { faqPageSchema, productSchema, breadcrumbSchema } from "@/lib/schema";
import { productsForSection, type Product } from "@/lib/products";

export function ProductPage({ product }: { product: Product }) {
  const Icon = product.icon;
  const section = getSection(product.parentSection);
  const related = productsForSection(product.parentSection).filter(
    (p) => p.slug !== product.slug,
  );

  return (
    <div>
      <JsonLd data={productSchema(product)} />
      <JsonLd data={faqPageSchema(product.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          ...(section
            ? [{ name: section.name, url: `${siteConfig.url}/${section.slug}` }]
            : []),
          { name: product.name, url: `${siteConfig.url}/${product.slug}` },
        ])}
      />

      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950">
        <div className="section-hero-shade absolute inset-0" />
        <div className="hero-text-shadow relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-zinc-300">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span className="mx-2 text-zinc-500">/</span>
            {section ? (
              <>
                <Link href={`/${section.slug}`} className="hover:text-green-400">{section.name}</Link>
                <span className="mx-2 text-zinc-500">/</span>
              </>
            ) : null}
            <span className="text-white">{product.name}</span>
          </nav>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h1 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {product.name}
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">{product.short}</p>
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
          What is {product.name.toLowerCase()}?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          {product.definition}
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
          {product.quickFacts.map((fact) => (
            <div key={fact.label} className="bg-white p-4">
              <dt className="font-mono text-[11px] tracking-wide text-zinc-400">{fact.label}</dt>
              <dd className="mt-1 text-sm text-zinc-800">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Options
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product.options.map((option) => (
            <li
              key={option}
              className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-zinc-200 p-4 text-sm text-zinc-700"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
                <Check className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="pt-1">{option}</span>
            </li>
          ))}
        </ul>

        {section ? (
          <div className="mt-6 rounded-[var(--radius-lg)] border border-green-200 bg-green-50 p-5 text-sm leading-relaxed text-zinc-700">
            <span className="font-semibold text-green-800">Part of {section.name}.</span>{" "}
            {product.name} is produced alongside the rest of our{" "}
            <Link href={`/${section.slug}`} className="font-medium text-green-700 underline underline-offset-2">
              {section.name.toLowerCase()}
            </Link>{" "}
            work, so it can be briefed and delivered together with a brand&apos;s other printing,
            signage, packaging or gifting needs.
          </div>
        ) : null}
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={product.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Other {section ? section.name.toLowerCase() : "products"}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group rounded-[var(--radius-lg)] border border-zinc-200 p-5 transition-colors hover:border-green-600"
              >
                <h3 className="font-heading text-base font-semibold text-zinc-900">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.short}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Ready to brief {product.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            Tell us the quantity and timeline, and we&apos;ll follow up with next steps.
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

export function productMetadata(product: Product) {
  const title = `${product.name} in the UAE & Qatar | Gifts Gulf Advertising`;
  return {
    title,
    description: product.metaDescription,
    alternates: { canonical: `${siteConfig.url}/${product.slug}` },
    openGraph: { title, description: product.metaDescription, url: `${siteConfig.url}/${product.slug}` },
    twitter: { card: "summary_large_image" as const, title, description: product.metaDescription },
  };
}
