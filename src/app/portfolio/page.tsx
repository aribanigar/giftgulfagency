import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { sectionHeroGalleries, sectionPhotos, heroPhoto } from "@/lib/photos";
import { Reveal } from "@/components/reveal";
import { Container, PageHero } from "@/components/editorial";

const portfolioTitle = "Portfolio | Gifts Gulf Advertising";
const portfolioDescription =
  "Work across printing, signages, events and exhibitions, packaging, gift items and social media for clients in the UAE and Qatar.";

export const metadata: Metadata = {
  title: portfolioTitle,
  description: portfolioDescription,
  alternates: { canonical: `${siteConfig.url}/portfolio` },
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: heroPhoto("events-exhibitions"), width: 1920, height: 1080, alt: portfolioTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioTitle,
    description: portfolioDescription,
    images: [heroPhoto("events-exhibitions")],
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <PageHero
        photos={[heroPhoto("events-exhibitions")]}
        crumbs={[{ name: "Home", href: "/" }, { name: "Work" }]}
        eyebrow="Our work"
        title={<>Built. Printed.<br /><span className="text-brand-bright">Installed.</span></>}
        intro={
          <p>
            Work across printing, signage, exhibitions, packaging, gift items
            and social media for clients in the UAE and Qatar. Project case
            studies are being added; until then, the images below illustrate
            each service.
          </p>
        }
      />

      <section className="on-dark bg-night py-24 text-white sm:py-32">
        <Container>
          <div className="flex flex-col gap-28">
            {sections.map((section, i) => {
              const gallery = sectionHeroGalleries[section.slug] ?? [];
              const photo = gallery[section.slug === "signages" ? 1 : 0] ?? sectionPhotos[section.slug];
              const flip = i % 2 === 1;
              return (
                <Reveal key={section.slug}>
                  <Link href={`/${section.slug}`} className="group grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                    <div className={`relative aspect-[16/10] overflow-hidden bg-night-2 lg:col-span-8 ${flip ? "lg:order-2 lg:col-start-5" : ""}`}>
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`${section.name} work in the UAE and Qatar`}
                          fill
                          sizes="(min-width:1024px) 66vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : null}
                    </div>
                    <div className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
                      <p className="eyebrow">{String(i + 1).padStart(2, "0")} · Service</p>
                      <h2 className="display-md mt-5 transition-colors group-hover:text-brand-bright">{section.name}</h2>
                      <p className="mt-5 text-lg leading-relaxed text-white/65">{section.short}</p>
                      <span className="link-arrow mt-8 text-base">
                        Explore {section.name} <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
