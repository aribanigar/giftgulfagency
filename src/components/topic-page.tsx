import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { GuideContent } from "@/components/guide-content";
import { JsonLd } from "@/components/json-ld";
import { ArrowLink, Container, HairlineLinks, PageHero, SectionIntro } from "@/components/editorial";
import { getSection } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqPageSchema, productSchema } from "@/lib/schema";
import { getTopic, type Topic } from "@/lib/topics";

export function TopicPage({ topic }: { topic: Topic }) {
  const section = getSection(topic.section);
  const related = topic.related.map(getTopic).filter((t): t is Topic => Boolean(t));
  const lower = topic.name.toLowerCase();

  return (
    <div>
      <JsonLd data={productSchema({ ...topic, parentSection: topic.section })} />
      <JsonLd data={faqPageSchema(topic.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Directory", url: `${siteConfig.url}/directory` },
          { name: topic.name, url: `${siteConfig.url}/${topic.slug}` },
        ])}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Directory", href: "/directory" },
          { name: topic.name },
        ]}
        eyebrow={topic.category}
        title={topic.name}
        size="md"
        intro={<p>{topic.intro}</p>}
        cta={{ href: "/contact", label: `Get a quote for ${lower}` }}
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Buyer's guide" title={`${topic.name}, explained`} size="md">
            <p>
              What to decide before you brief a supplier: the options, the
              trade-offs and the details that change the result.
            </p>
          </SectionIntro>
          <div className="mt-16">
            <GuideContent sections={topic.sections} />
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={topic.faqs} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Explore" title="Related in the directory" size="md" />
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-3">
              {section ? (
                <ArrowLink href={`/${section.slug}`} className="text-lg">
                  {section.name}
                </ArrowLink>
              ) : null}
              <ArrowLink href="/directory" className="text-lg">
                Full directory
              </ArrowLink>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <HairlineLinks
                items={related.map((t) => ({ href: `/${t.slug}`, title: t.name, meta: t.category }))}
              />
              <p className="mt-10 text-base opacity-70">
                We deliver and install across Dubai, Abu Dhabi, Sharjah, Doha,
                Riyadh, Jeddah, Kuwait, Bahrain and Oman.{" "}
                <Link href="/contact" className="underline underline-offset-4 hover:text-brand">
                  Send a brief
                </Link>{" "}
                with sizes, quantities and the delivery city.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export function topicMetadata(topic: Topic) {
  const title = `${topic.seoTitle} | Gifts Gulf Advertising`;
  const url = `${siteConfig.url}/${topic.slug}`;
  return {
    title,
    description: topic.metaDescription,
    alternates: { canonical: url },
    openGraph: { title, description: topic.metaDescription, url },
    twitter: { card: "summary_large_image" as const, title, description: topic.metaDescription },
  };
}
