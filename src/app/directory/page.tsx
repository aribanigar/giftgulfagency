import type { Metadata } from "next";
import { Container, HairlineLinks, PageHero } from "@/components/editorial";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";
import { topics, topicsByCategory } from "@/lib/topics";
import { EnquiryBand } from "@/components/enquiry-band";

const title = "Advertising & Printing Directory | Gifts Gulf Advertising";
const description =
  "Guides to signage, displays, exhibition stands, printing, stickers, apparel, packaging and retail branding across the UAE, Qatar and the GCC.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/directory` },
  openGraph: { title, description, url: `${siteConfig.url}/directory` },
  twitter: { card: "summary_large_image", title, description },
};

function anchor(category: string) {
  return category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");
}

export default function DirectoryPage() {
  const groups = topicsByCategory().filter((g) => g.topics.length > 0);

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Directory", url: `${siteConfig.url}/directory` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Advertising and printing directory",
          itemListElement: topics.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: `${siteConfig.url}/${t.slug}`,
          })),
        }}
      />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Directory" }]}
        eyebrow="Directory"
        title={<>Everything<br /><span className="text-brand-bright">in advertising.</span></>}
        intro={
          <p>
            Practical guides to {topics.length} products and services, from 3D
            letters and roll-ups to book printing and cosmetic packaging: sizes,
            materials, options and what to decide before you brief.
          </p>
        }
      >
        <nav aria-label="Directory categories" className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
          {groups.map((g) => (
            <a key={g.category} href={`#${anchor(g.category)}`} className="hover:text-white">
              {g.category}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-20">
            {groups.map((g) => (
              <div key={g.category} id={anchor(g.category)} className="grid scroll-mt-28 grid-cols-1 gap-8 lg:grid-cols-12">
                <h2 className="display-sm lg:col-span-4">{g.category}</h2>
                <div className="lg:col-span-8">
                  <HairlineLinks
                    items={g.topics.map((t) => ({ href: `/${t.slug}`, title: t.name, meta: t.metaDescription }))}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EnquiryBand
        source="/directory"
        title={<>Not sure what<br />you need?</>}
        intro={<p>Describe the job in your own words and we will suggest the right product, material and size.</p>}
      />
    </div>
  );
}
