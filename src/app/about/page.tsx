import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ArrowLink, Container, PageHero, SectionIntro } from "@/components/editorial";
import { markets, sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { featurePhotos, sectionHeroGalleries } from "@/lib/photos";
import { EnquiryBand } from "@/components/enquiry-band";

const aboutTitle = "About Gifts Gulf Advertising | Printing, Signage & Events Partner";
const aboutDescription =
  "Gifts Gulf Advertising builds printing, signage, event & exhibition stands, packaging and gift items for businesses across the UAE and Qatar, one brief, one team, one delivery.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: `${siteConfig.url}/about`,
    images: [{ url: sectionHeroGalleries.signages[0], width: 1920, height: 1080, alt: aboutTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [sectionHeroGalleries.signages[0]],
  },
};

const aboutHeroGallery = [
  sectionHeroGalleries.signages[0],
  sectionHeroGalleries["events-exhibitions"][0],
  sectionHeroGalleries.packaging[0],
  sectionHeroGalleries.printing[0],
  sectionHeroGalleries["gift-items"][0],
];

const values = [
  {
    title: "One team, every service",
    text: "Printing, signage, events and gifting sit alongside social media, website and SEO work, briefed once and delivered as one project.",
  },
  {
    title: "Production-first thinking",
    text: "Design decisions are made with fabrication, installation and real materials in mind from the first concept, not reworked after the quote.",
  },
  {
    title: "Physical and digital, together",
    text: "A brand's storefront, its exhibition booth, and its search rankings are treated as one connected project, briefed and delivered together.",
  },
  {
    title: "Built for the UAE & Qatar",
    text: "Every section, from signage approvals to local search, is planned around how business actually gets done in Dubai, Abu Dhabi, Sharjah and Doha.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        photos={aboutHeroGallery}
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        eyebrow="About us"
        title={<>Printed, built<br />and installed,<br /><span className="text-brand-bright">by one team.</span></>}
        intro={
          <p>
            Printing, signage, event and exhibition stands, packaging and gift
            items, produced by one team and delivered across the UAE and Qatar,
            from a single brief.
          </p>
        }
        cta={{ href: "/portfolio", label: "See our work" }}
      />

      {/* What we build */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="What we build" title={<>Every service,<br />one team</>}>
            <p>
              Pick where your project starts. Every service links through to a
              full brief and a quote.
            </p>
          </SectionIntro>
          <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => {
              const photo = sectionHeroGalleries[s.slug]?.[0];
              return (
                <Reveal key={s.slug} delay={(i % 3) * 90}>
                  <Link href={`/${s.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-night">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`${s.name} work in the UAE and Qatar`}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : null}
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="display-sm">{s.name}</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{s.short}</p>
                      </div>
                      <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 opacity-40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand group-hover:opacity-100" strokeWidth={1.5} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <SectionIntro eyebrow="How we think" title={<>How we think<br />about the work</>} />
          <ol className="hairline mt-16 grid grid-cols-1 border-t md:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title} className="hairline border-b py-10 md:odd:border-r md:odd:pr-12 md:even:pl-12">
                <span className="font-heading text-sm font-bold text-brand-bright">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-sm mt-5">{v.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">{v.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Where we deliver */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionIntro eyebrow="Where we deliver" title={<>Across<br />the Gulf</>} size="md" />
              <p className="mt-8 text-lg leading-relaxed text-ink/70">
                Printing, signage, exhibition stands, packaging and gift items,
                produced and installed for businesses in these cities.
              </p>
              <ul className="hairline mt-10 border-t">
                {markets.map((city) => (
                  <li key={city} className="hairline border-b py-4 text-xl font-semibold tracking-tight">
                    {city}
                  </li>
                ))}
              </ul>
              <ArrowLink href="/locations" className="mt-10 text-lg">All locations</ArrowLink>
            </div>
            <div className="relative min-h-[28rem] overflow-hidden bg-night lg:col-span-6 lg:col-start-7">
              <Image
                src={featurePhotos.fabrication}
                alt="Production floor where signage and fit-out work is fabricated"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <EnquiryBand
        source="/about"
        title={<>Work<br />with us</>}
        intro={<p>Send a short brief and the city it is for. One point of contact handles it from quote to delivery.</p>}
      />
    </div>
  );
}
