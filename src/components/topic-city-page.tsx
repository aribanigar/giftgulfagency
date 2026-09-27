import { FaqAccordion } from "@/components/faq-accordion";
import { GuideContent } from "@/components/guide-content";
import { JsonLd } from "@/components/json-ld";
import { ArrowLink, Container, HairlineLinks, PageHero, SectionIntro } from "@/components/editorial";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { citiesForTopic, topicsForCity, type TopicCityPage } from "@/lib/topic-city";

export function TopicCityView({ page }: { page: TopicCityPage }) {
  const { topic, city } = page;
  const url = `${siteConfig.url}${page.path}`;
  const otherCities = citiesForTopic(topic.slug).filter((c) => c.slug !== city.slug);
  const moreHere = topicsForCity(city.slug).filter((t) => t.slug !== topic.slug);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: page.h1,
          serviceType: topic.name,
          description: page.metaDescription,
          provider: { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name, url: siteConfig.url },
          areaServed: { "@type": "City", name: city.city, containedInPlace: { "@type": "Country", name: city.country } },
          url,
        }}
      />
      <JsonLd data={faqPageSchema(page.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Directory", url: `${siteConfig.url}/directory` },
          { name: topic.name, url: `${siteConfig.url}/${topic.slug}` },
          { name: city.city, url },
        ])}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Directory", href: "/directory" },
          { name: topic.name, href: `/${topic.slug}` },
          { name: city.city },
        ]}
        eyebrow={`${city.city}, ${city.country}`}
        title={page.h1}
        size="md"
        intro={<p>{page.intro}</p>}
        cta={{ href: "/contact", label: `Get a quote in ${city.city}` }}
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Local guide" title={`Planning in ${city.city}`} size="md">
            <p>
              The {city.city}-specific details first, then the essentials of{" "}
              {topic.name.toLowerCase()} that apply everywhere.
            </p>
          </SectionIntro>
          <div className="mt-16">
            <GuideContent sections={page.sections} />
          </div>
          <div className="mt-10">
            <ArrowLink href={`/${topic.slug}`} className="text-lg">
              Full {topic.name.toLowerCase()} guide
            </ArrowLink>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={page.faqs} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {moreHere.length > 0 ? (
              <div>
                <p className="eyebrow mb-6">More in {city.city}</p>
                <HairlineLinks items={moreHere.map((t) => ({ href: `/${t.slug}/${city.slug}`, title: t.name }))} />
              </div>
            ) : null}
            {otherCities.length > 0 ? (
              <div>
                <p className="eyebrow mb-6">{topic.name} in other cities</p>
                <HairlineLinks items={otherCities.map((c) => ({ href: `/${topic.slug}/${c.slug}`, title: c.city, meta: c.country }))} />
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </div>
  );
}

export function topicCityMetadata(page: TopicCityPage) {
  const title = `${page.seoTitle} | Gifts Gulf Advertising`;
  const url = `${siteConfig.url}${page.path}`;
  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: { title, description: page.metaDescription, url },
    twitter: { card: "summary_large_image" as const, title, description: page.metaDescription },
  };
}
