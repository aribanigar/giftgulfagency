import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, HairlineLinks, PageHero, SectionIntro } from "@/components/editorial";
import { JsonLd } from "@/components/json-ld";
import { locations, getLocation } from "@/lib/locations";
import { sections } from "@/lib/site-data";
import { topicsForCity } from "@/lib/topic-city";
import { placesForCity } from "@/lib/places";
import { PageSidebar } from "@/components/sidebar/page-sidebar";
import { quoteCityFor } from "@/lib/quick-quote";
import { guideLinks, locationLinks } from "@/lib/related-links";
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
  const localTopics = topicsForCity(location.slug);
  const localPlaces = placesForCity(location.slug);

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
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <SectionIntro eyebrow="Overview" title={`Serving ${location.city}`} size="md">
                <p>{location.definition}</p>
              </SectionIntro>
              <div className="hairline mt-14 border-t">
                <div className="hairline border-b py-8">
                  <p className="eyebrow">Areas we work in</p>
                  <p className="mt-4 text-lg leading-relaxed">{location.keyAreas.join(" · ")}</p>
                </div>
                <div className="py-8">
                  <p className="eyebrow">Approvals in {location.city}</p>
                  <p className="mt-4 text-lg leading-relaxed text-ink/75">{location.approvalNote}</p>
                </div>
              </div>
              {localPlaces.length > 0 ? (
                <div className="mt-14">
                  <p className="eyebrow">Areas and venues</p>
                  <h2 className="display-sm mt-4">Around {location.city}</h2>
                  <div className="mt-8">
                    <HairlineLinks
                      items={localPlaces.map((x) => ({ href: `/locations/${location.slug}/${x.slug}`, title: x.name, meta: x.summary }))}
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="lg:col-span-4">
              <PageSidebar
                quote={{ source: `/locations/${location.slug}`, city: quoteCityFor(location.slug), heading: `A project in ${location.city}?` }}
                groups={[
                  { title: "Popular guides", links: guideLinks(localTopics.map((t) => t.slug), { limit: 6 }) },
                  { title: "Directory", links: [{ href: "/directory", title: "All products and services" }] },
                  { title: "Other locations", links: locationLinks(location.slug) },
                ]}
              />
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
          {localTopics.length > 0 ? (
            <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-bright">Local guides</p>
                <h2 className="display-sm mt-4">{location.city} guides</h2>
              </div>
              <div className="lg:col-span-8">
                <HairlineLinks
                  items={localTopics.map((t) => ({ href: `/${t.slug}/${location.slug}`, title: `${t.name} in ${location.city}`, meta: t.category }))}
                />
              </div>
            </div>
          ) : null}
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
