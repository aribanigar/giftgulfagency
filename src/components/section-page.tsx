import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import {
  ArrowLink,
  Container,
  FactGrid,
  HairlineLinks,
  PageHero,
  SectionIntro,
} from "@/components/editorial";
import { sections, capabilityBlogSlug, type Section } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { faqPageSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { sectionHeroGalleries } from "@/lib/photos";
import { productsForSection } from "@/lib/products";
import { serviceGuides } from "@/lib/service-guides";
import { GuideContent } from "@/components/guide-content";

export function SectionPage({ section }: { section: Section }) {
  const related = sections.filter((s) => s.slug !== section.slug);
  const products = productsForSection(section.slug);
  const lower = section.name.toLowerCase();
  const guide = serviceGuides[section.slug];

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

      <PageHero
        photos={sectionHeroGalleries[section.slug] ?? []}
        crumbs={[{ name: "Home", href: "/" }, { name: section.name }]}
        eyebrow="Services"
        title={
          <>
            {section.name}
            <br />
            <span className="text-brand-bright">in the UAE &amp; Qatar</span>
          </>
        }
        intro={<p>{section.description}</p>}
        cta={{ href: "/contact", label: `Get a quote for ${lower}` }}
      />

      {/* Buyer's guide (unique per service), falling back to the definition */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          {guide ? (
            <>
              <SectionIntro eyebrow="Buyer's guide" title={guide.title} size="md">
                <p>{guide.lead}</p>
              </SectionIntro>
              <div className="mt-16">
                <GuideContent sections={guide.sections} />
              </div>
            </>
          ) : (
            <>
              <SectionIntro eyebrow="Overview" title={`What ${/s$/.test(lower) ? "are" : "is"} ${lower}?`} size="md">
                <p>{section.definition}</p>
              </SectionIntro>
              <div className="mt-16">
                <FactGrid facts={section.quickFacts} />
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Capabilities */}
      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <SectionIntro eyebrow="What's included" title="Capabilities" size="md">
            <p>Each line links to a practical guide on how that part of the job works.</p>
          </SectionIntro>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <HairlineLinks
                items={section.capabilities.map((c) => {
                  const slug = capabilityBlogSlug[c];
                  return { href: slug ? `/blog/${slug}` : "/blog", title: c };
                })}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Regional note */}
      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">Where we deliver</p>
              <h2 className="display-sm">Across the UAE, Qatar and the wider GCC</h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/75 lg:col-span-6 lg:col-start-7">{section.regionalNote}</p>
          </div>
        </Container>
      </section>

      {products.length > 0 ? (
        <section className="bg-white py-24 sm:py-32">
          <Container>
            <SectionIntro eyebrow="Products" title={`Popular ${lower} products`} size="md" />
            <ul className="hairline mt-14 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <li key={product.slug} className="hairline border-b sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
                  <Link href={`/${product.slug}`} className="group flex h-full flex-col gap-4 p-8 transition-colors hover:bg-white">
                    <span className="flex items-start justify-between gap-4">
                      <span className="text-xl font-semibold tracking-tight">{product.name}</span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand group-hover:opacity-100" strokeWidth={1.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink/65">{product.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={section.faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Explore" title="Other services" size="md" />
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <ArrowLink href="/contact" className="text-lg">Brief several at once</ArrowLink>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <HairlineLinks items={related.map((s) => ({ href: `/${s.slug}`, title: s.name, meta: s.short }))} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export function sectionMetadata(section: Section) {
  const title = `${section.name} Company in Dubai & Qatar | Gifts Gulf Advertising`;
  const description = section.metaDescription;
  const image = sectionHeroGalleries[section.slug]?.[0];
  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/${section.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${section.slug}`,
      images: image ? [{ url: image, width: 1920, height: 1080, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
