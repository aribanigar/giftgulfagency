import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceBenefits } from "@/components/vendor-comparison";
import { ServicesList } from "@/components/services-list";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoEmbed } from "@/components/video-embed";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ArrowLink, Container, PageHero, SectionIntro } from "@/components/editorial";
import { getSettings } from "@/lib/settings";
import { parseVideoUrl } from "@/lib/video";
import { sectors, markets, siteFaqs, sections } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import { faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import {
  blogPhotoIds,
  featurePhotos,
  homeHeroGallery,
  sectionHeroGalleries,
  wide,
} from "@/lib/photos";

const homeTitle =
  "Advertising Agency & Signage Company in UAE & Qatar | Gifts Gulf Advertising";
const homeDescription =
  "Printing, signages, events & exhibitions, packaging, gift items and social media, one partner across Dubai, Abu Dhabi, Sharjah and Doha.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteConfig.url,
    images: [{ url: homeHeroGallery[0], width: 1920, height: 1080, alt: homeTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeHeroGallery[0]],
  },
};

const processSteps = [
  {
    title: "Brief",
    text: "We start with the brand, the market, whether UAE or Qatar, and the outcome you need, not a generic questionnaire.",
  },
  {
    title: "Design",
    text: "Concepts move fast, with production, installation and search visibility considered from the first sketch.",
  },
  {
    title: "Produce",
    text: "Printing, signage, events and digital work happens under one roof, so nothing waits on a third party.",
  },
  {
    title: "Launch & grow",
    text: "Install, go live, then keep momentum with social media, SEO and the rest of the digital side of the business.",
  },
];

// The two first-slide photos composed for a wide frame crop badly in the
// tall work cards, so those sections use their second slide instead.
const workPhotoIndex: Record<string, number> = { signages: 1 };

const latestPosts = [...blogPosts]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3);

export default async function Home() {
  const settings = await getSettings();
  const hasVideo = parseVideoUrl(settings.featuredVideo.url) !== null;

  return (
    <div>
      <JsonLd data={faqPageSchema(siteFaqs)} />

      <PageHero
        size="xl"
        photos={homeHeroGallery}
        eyebrow="Advertising · Signage · Print · Events"
        title={
          <>
            Every brand touchpoint.
            <br />
            <span className="text-brand-bright">One partner.</span>
          </>
        }
        intro={
          <p>
            Gifts Gulf Advertising covers printing, signages, events and
            exhibitions, packaging and gift items, plus the social media,
            website and SEO work that keeps a brand visible, for businesses in
            Dubai, Abu Dhabi, Sharjah and Doha.
          </p>
        }
        cta={{ href: "/contact", label: "Get a quote" }}
      />

      {/* About */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="About us" title={<>One team.<br />Every touchpoint.</>} />
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden bg-night lg:col-span-7">
              <Image
                src={featurePhotos.fabrication}
                alt="Production floor where signage and fit-out work is fabricated"
                fill
                sizes="(min-width:1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
              <p className="text-lg leading-relaxed text-ink/75">
                Print, signage, exhibition stands, packaging, gifts and social
                media, planned and produced by one team from a single brief, so
                colours, timelines and messaging stay consistent from the
                shopfront to the feed.
              </p>
              <ArrowLink href="/about" className="mt-8 self-start text-lg">
                More about us
              </ArrowLink>
            </div>
          </div>

          <dl className="hairline mt-24 grid grid-cols-1 border-t sm:grid-cols-3">
            {[
              { value: String(sections.length), label: "Services under one roof" },
              { value: String(markets.length), label: "Gulf cities we deliver to" },
              { value: "1", label: "Team, brief and point of contact" },
            ].map((stat) => (
              <div key={stat.label} className="hairline border-b py-10 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display-xl block text-brand">{stat.value}</span>
                  <span className="mt-4 block text-base text-ink/70">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-24">
            <SectionIntro eyebrow="Why one team" title="What changes when it is all one brief" size="md" />
            <div className="mt-12">
              <ServiceBenefits />
            </div>
          </div>
        </Container>
      </section>

      {/* Work */}
      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <SectionIntro eyebrow="Our work" title={<>Built. Printed.<br />Installed.</>}>
            <p>
              From a single shop sign to a full exhibition hall, every piece is
              designed, produced and installed by the same team, for retail,
              hospitality, corporate and government clients across the Gulf.
            </p>
          </SectionIntro>

          <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {sections.map((s, i) => {
              const gallery = sectionHeroGalleries[s.slug] ?? [];
              const photo = gallery[workPhotoIndex[s.slug] ?? 0] ?? gallery[0] ?? featurePhotos.fabrication;
              return (
                <Reveal key={s.slug} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-40" : ""}>
                  <Link href={`/${s.slug}`} className="group block">
                    <div className={`relative overflow-hidden bg-night-2 ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                      <Image
                        src={photo}
                        alt={`${s.name} work by Gifts Gulf Advertising`}
                        fill
                        sizes="(min-width:768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-6">
                      <div>
                        <h3 className="display-sm">{s.name}</h3>
                        <p className="mt-3 max-w-md text-base leading-relaxed text-white/65">{s.short}</p>
                      </div>
                      <ArrowUpRight className="mt-1 h-7 w-7 shrink-0 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-bright group-hover:opacity-100" strokeWidth={1.5} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-20">
            <ArrowLink href="/portfolio" className="text-lg">See all our work</ArrowLink>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="Services" title={<>Advertising across<br />the Gulf</>}>
            <p>
              Every service below runs through the same team. Open any one to see
              what is included, or brief several at once.
            </p>
          </SectionIntro>
          <div className="mt-16">
            <ServicesList
              rows={sections.map((s) => ({
                slug: s.slug,
                name: s.name,
                short: s.short,
                capabilities: s.capabilities,
              }))}
            />
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="How we work" title="From brief to launch" size="md" />
          <ol className="hairline mt-14 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="hairline border-b py-10 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
                <span className="display-md block text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Coverage */}
      <section className="on-dark overflow-hidden bg-night py-24 text-white sm:py-32">
        <Container>
          <p className="eyebrow mb-10">Where we deliver</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {markets.map((city, i) => (
              <li key={city} className="display-lg flex items-center gap-6">
                <span className={i % 2 === 0 ? "text-white" : "text-white/35"}>{city}</span>
                {i < markets.length - 1 ? <span className="text-brand-bright">·</span> : null}
              </li>
            ))}
          </ul>
          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-3">Who we work with</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-4 text-xl text-white/80 lg:col-span-9">
              {sectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Insights */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro eyebrow="Insights" title={<>Guides that help<br />you buy right</>} />
            <ArrowLink href="/blog" className="shrink-0 text-lg">All insights</ArrowLink>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-night">
                  <Image
                    src={wide(blogPhotoIds[post.photoId])}
                    alt={post.title}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6">{post.category}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-ink/55">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {hasVideo ? (
        <section className="bg-[#f3f4f2] py-24 sm:py-32">
          <Container>
            <SectionIntro eyebrow="Watch" title={settings.featuredVideo.title} size="md" />
            <div className="mt-12 max-w-5xl">
              <VideoEmbed url={settings.featuredVideo.url} title={settings.featuredVideo.title} />
            </div>
          </Container>
        </section>
      ) : null}

      {/* FAQ (AEO) */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={siteFaqs} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
