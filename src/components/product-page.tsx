import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { ArrowLink, Container, FactGrid, HairlineLinks, PageHero, SectionIntro } from "@/components/editorial";
import { getSection } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { faqPageSchema, productSchema, breadcrumbSchema } from "@/lib/schema";
import { productsForSection, type Product } from "@/lib/products";

export function ProductPage({ product }: { product: Product }) {
  const section = getSection(product.parentSection);
  const related = productsForSection(product.parentSection).filter(
    (p) => p.slug !== product.slug,
  );
  const lower = product.name.toLowerCase();

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

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          ...(section ? [{ name: section.name, href: `/${section.slug}` }] : []),
          { name: product.name },
        ]}
        eyebrow={section ? section.name : "Products"}
        title={product.name}
        intro={<p>{product.short}</p>}
        cta={{ href: "/contact", label: `Get a quote for ${lower}` }}
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Overview" title={`What ${/s$/.test(lower) ? "are" : "is"} ${lower}?`} size="md">
            <p>{product.definition}</p>
          </SectionIntro>
          <div className="mt-16">
            <FactGrid facts={product.quickFacts} />
          </div>
        </Container>
      </section>

      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <SectionIntro eyebrow="Options" title="Choose what fits" size="md">
            {section ? (
              <p>
                Produced alongside the rest of our{" "}
                <Link href={`/${section.slug}`} className="underline underline-offset-4 hover:text-brand-bright">
                  {section.name.toLowerCase()}
                </Link>{" "}
                work, so it can be briefed together with a brand&apos;s other
                printing, signage, packaging or gifting needs.
              </p>
            ) : null}
          </SectionIntro>
          <ul className="hairline mt-14 grid grid-cols-1 border-t md:grid-cols-2 md:gap-x-12">
            {product.options.map((option, i) => (
              <li key={option} className="hairline flex gap-6 border-b py-6">
                <span className="w-7 shrink-0 font-heading text-sm font-bold text-brand-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{option}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={product.faqs} />
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-[#f3f4f2] py-24 sm:py-32">
          <Container>
            <SectionIntro
              eyebrow="Explore"
              title={`More ${section ? section.name.toLowerCase() : "products"}`}
              size="md"
            />
            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                {section ? (
                  <ArrowLink href={`/${section.slug}`} className="text-lg">
                    All {section.name.toLowerCase()}
                  </ArrowLink>
                ) : null}
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <HairlineLinks items={related.map((p) => ({ href: `/${p.slug}`, title: p.name, meta: p.short }))} />
              </div>
            </div>
          </Container>
        </section>
      ) : null}
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
