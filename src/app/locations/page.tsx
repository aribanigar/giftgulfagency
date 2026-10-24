import type { Metadata } from "next";
import { Container, HairlineLinks, PageHero } from "@/components/editorial";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";
import { EnquiryBand } from "@/components/enquiry-band";

const title = "Locations We Serve Across the GCC | Gifts Gulf Advertising";
const description =
  "Printing, signage, exhibitions, packaging, gifting and social media delivered across the UAE, Qatar, Saudi Arabia, Kuwait, Bahrain and Oman.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/locations` },
  openGraph: { title, description, url: `${siteConfig.url}/locations` },
  twitter: { card: "summary_large_image", title, description },
};

export default function LocationsPage() {
  const byCountry = locations.reduce<Record<string, typeof locations>>((acc, l) => {
    (acc[l.country] ??= []).push(l);
    return acc;
  }, {});

  return (
    <div>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Locations" }]}
        eyebrow="Locations"
        title={<>Across<br /><span className="text-brand-bright">the Gulf.</span></>}
        intro={
          <p>
            One production team and one point of contact, delivering printing,
            signage, exhibitions, packaging, gifting and social media in every
            market below.
          </p>
        }
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-20">
            {Object.entries(byCountry).map(([country, cities]) => (
              <div key={country} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <h2 className="display-sm lg:col-span-4">{country}</h2>
                <div className="lg:col-span-8">
                  <HairlineLinks
                    size="lg"
                    items={cities.map((l) => ({ href: `/locations/${l.slug}`, title: l.city, meta: l.blurb }))}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EnquiryBand
        source="/locations"
        title={<>A project in<br />your city?</>}
        intro={<p>Choose the city, say what you need, and our team will plan production, delivery and installation around it.</p>}
      />
    </div>
  );
}
