import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, HairlineLinks, PageHero, SectionIntro } from "@/components/editorial";
import { GuideContent } from "@/components/guide-content";
import { JsonLd } from "@/components/json-ld";
import { p, ul } from "@/lib/content-types";
import { getGccCity } from "@/lib/gcc-cities";
import { getLocation } from "@/lib/locations";
import { getPlace, places } from "@/lib/places";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { citiesForTopic } from "@/lib/topic-city";
import { getTopic } from "@/lib/topics";
import { PageSidebar } from "@/components/sidebar/page-sidebar";
import { quoteCityFor } from "@/lib/quick-quote";
import { cityGuideLinks, guideLinks, locationLinks, placeLinks } from "@/lib/related-links";

for (const pl of places) {
  if (!getLocation(pl.citySlug)) throw new Error(`Place ${pl.slug}: unknown city ${pl.citySlug}`);
  for (const t of pl.topics) if (!getTopic(t)) throw new Error(`Place ${pl.slug}: unknown topic ${t}`);
}

export function generateStaticParams() {
  return places.map((pl) => ({ slug: pl.citySlug, place: pl.slug }));
}

export const dynamicParams = false;

type Params = Promise<{ slug: string; place: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, place } = await params;
  const pl = getPlace(slug, place);
  const location = getLocation(slug);
  if (!pl || !location) return {};
  const title = `${pl.kind === "venue" ? "Exhibition Stands & Branding at" : "Signage, Printing & Branding in"} ${pl.name}, ${location.city} | Gifts Gulf Advertising`;
  const description = pl.summary.length > 150 ? pl.summary : `${pl.summary} We deliver and install here.`;
  const url = `${siteConfig.url}/locations/${slug}/${place}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PlacePage({ params }: { params: Params }) {
  const { slug, place } = await params;
  const pl = getPlace(slug, place);
  const location = getLocation(slug);
  if (!pl || !location) notFound();
  const city = getGccCity(slug);
  const url = `${siteConfig.url}/locations/${slug}/${place}`;
  const topicLinks = pl.topics
    .map(getTopic)
    .filter((t) => t !== undefined)
    .map((t) => {
      const local = citiesForTopic(t.slug).some((c) => c.slug === slug);
      return { href: local ? `/${t.slug}/${slug}` : `/${t.slug}`, title: local ? `${t.name} in ${location.city}` : t.name, meta: t.category };
    });

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Place",
          "@id": `${url}#place`,
          name: pl.name,
          description: pl.summary,
          containedInPlace: { "@type": "City", name: location.city },
          url,
        }}
      />
      <JsonLd data={faqPageSchema(pl.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Locations", url: `${siteConfig.url}/locations` },
          { name: location.city, url: `${siteConfig.url}/locations/${slug}` },
          { name: pl.name, url },
        ])}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: location.city, href: `/locations/${slug}` },
          { name: pl.name },
        ]}
        eyebrow={pl.kind === "venue" ? `Venue, ${location.city}` : `Area, ${location.city}`}
        title={pl.name}
        size="md"
        intro={<p>{pl.summary}</p>}
        cta={{ href: "/contact", label: `Get a quote for ${pl.name}` }}
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Local guide" title={pl.kind === "venue" ? "Exhibiting here" : "Branding in this area"} size="md">
            <p>
              We deliver and install across {pl.name} and the rest of {location.city}.
            </p>
          </SectionIntro>
          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
            <GuideContent
              stacked
              sections={[
                { heading: `About ${pl.name}`, blocks: pl.profile.map(p) },
                { heading: "What to plan for", blocks: [ul(pl.planning)] },
                ...(city
                  ? [
                      {
                        heading: `Working in ${location.city}`,
                        blocks: [ul([`Weekend: ${city.weekend}.`, city.climate, city.language])],
                      },
                    ]
                  : []),
              ]}
            />
            </div>
            <div className="lg:col-span-4">
              <PageSidebar
                quote={{
                  item: getTopic(pl.topics[0])?.name,
                  source: `/locations/${slug}/${place}`,
                  city: quoteCityFor(slug),
                  heading: `A job in ${pl.name}?`,
                }}
                groups={[
                  { title: "Related guides", links: guideLinks(pl.topics, { limit: 5 }) },
                  { title: `Around ${location.city}`, links: placeLinks(slug, pl.slug) },
                  { title: `${location.city} guides`, links: cityGuideLinks(slug) },
                  { title: "Other locations", links: locationLinks(slug) },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <SectionIntro eyebrow="Guides" title={`Most requested in ${pl.name}`} size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <HairlineLinks items={topicLinks} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={pl.faqs} />
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
