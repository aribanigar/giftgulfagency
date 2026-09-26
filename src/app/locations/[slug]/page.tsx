import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, HairlineLinks, PageHero, SectionIntro } from "@/components/editorial";
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

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: location.city }]}
        eyebrow={location.country}
        title={<>Gifts Gulf in<br /><span className="text-brand-bright">{location.city}</span></>}
        intro={<p>{location.blurb}</p>}
        cta={{ href: "/contact", label: `Get a quote in ${location.city}` }}
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Overview" title={`Serving ${location.city}`} size="md">
            <p>{location.definition}</p>
          </SectionIntro>
          <div className="hairline mt-16 grid grid-cols-1 border-t lg:grid-cols-2">
            <div className="hairline border-b py-8 lg:border-b-0 lg:border-r lg:pr-12">
              <p className="eyebrow">Areas we work in</p>
              <p className="mt-4 text-lg leading-relaxed">{location.keyAreas.join(" · ")}</p>
            </div>
            <div className="py-8 lg:pl-12">
              <p className="eyebrow">Approvals in {location.city}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">{location.approvalNote}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <SectionIntro eyebrow="Services" title={`What we deliver in ${location.city}`} size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <HairlineLinks items={sections.map((s) => ({ href: `/${s.slug}`, title: s.name, meta: s.short }))} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={location.faqs} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Explore" title="Other locations" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <HairlineLinks
                items={locations
                  .filter((l) => l.slug !== location.slug)
                  .map((l) => ({ href: `/locations/${l.slug}`, title: l.city, meta: l.country }))}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
