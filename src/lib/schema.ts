import { siteConfig } from "@/lib/site-config";
import { sections, type Faq, type Section } from "@/lib/site-data";
import type { BlogPost, BlogSection } from "@/lib/blog-data";
import type { SiteSettings } from "@/lib/settings";
import type { Location } from "@/lib/locations";
import { sectionHeroGalleries, blogPhotoIds, heroPhoto } from "@/lib/photos";
import { productsForSection } from "@/lib/products";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

function areaServed() {
  return [
    ...siteConfig.areaServed.map((name) => ({ "@type": "Country", name })),
    ...siteConfig.cities.map((name) => ({ "@type": "City", name })),
  ];
}

/**
 * A short reference to the Organization node below, repeated (not just
 * linked by @id) on every page's `provider`/`brand`/`publisher` field so
 * the markup still resolves correctly for parsers that read one JSON-LD
 * block at a time rather than resolving @id references across pages.
 */
function organizationRef() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

/**
 * Site-wide identity markup, rendered once in the root layout. Uses
 * AdvertisingAgency (a LocalBusiness subtype) rather than bare
 * Organization so local/map-pack and AI-answer surfaces can identify this
 * as a physical, area-served business rather than a generic brand entity.
 * Only surfaces contact details already published on the site (footer) —
 * never fabricates an address, hours, price range, rating or review that
 * aren't real: fabricated trust signals are a spam pattern Google's own
 * quality-rater guidelines flag, and inventing rating data is misleading
 * to real visitors regardless of the SEO angle.
 */
export function organizationSchema(settings?: SiteSettings) {
  const socials = settings
    ? Object.values(settings.socialLinks).filter(Boolean)
    : [];
  return {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/favicon.ico`,
    },
    description: siteConfig.description,
    // Real service list, not a fabricated credential — reflects the
    // actual sections this site publishes.
    knowsAbout: sections.map((s) => s.name),
    areaServed: areaServed(),
    ...(settings?.contactEmail || settings?.contactPhone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            ...(settings?.contactEmail ? { email: settings.contactEmail } : {}),
            ...(settings?.contactPhone ? { telephone: settings.contactPhone } : {}),
          },
        }
      : {}),
    ...(settings?.address ? { address: settings.address } : {}),
    ...(socials.length > 0 ? { sameAs: socials } : {}),
  };
}

/** Rendered once alongside organizationSchema — ties the site's pages to the same entity. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(section: Section) {
  const image = sectionHeroGalleries[section.slug]?.[0];
  const products = productsForSection(section.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/${section.slug}#service`,
    serviceType: section.name,
    name: section.name,
    description: section.description,
    provider: organizationRef(),
    areaServed: areaServed(),
    url: `${siteConfig.url}/${section.slug}`,
    ...(image ? { image } : {}),
    ...(products.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${section.name} products`,
            itemListElement: products.map((product) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: product.name,
                url: `${siteConfig.url}/${product.slug}`,
              },
            })),
          },
        }
      : {}),
  };
}

export function productSchema(product: {
  slug: string;
  name: string;
  metaDescription: string;
  parentSection?: string;
}) {
  const category = product.parentSection
    ? sections.find((s) => s.slug === product.parentSection)?.name
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/${product.slug}#product`,
    name: product.name,
    description: product.metaDescription,
    brand: organizationRef(),
    ...(category ? { category } : {}),
    url: `${siteConfig.url}/${product.slug}`,
  };
}

export function locationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/locations/${location.slug}#service`,
    serviceType: "Printing, signage & advertising services",
    name: `Gifts Gulf Advertising in ${location.city}`,
    description: location.definition,
    provider: organizationRef(),
    areaServed: { "@type": "City", name: location.city },
    url: `${siteConfig.url}/locations/${location.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: sections.map((section) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: section.name,
          url: `${siteConfig.url}/${section.slug}`,
        },
      })),
    },
  };
}

function wordsIn(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Honest word count — summed from the post's own real content, not estimated. */
function articleWordCount(post: BlogPost) {
  const blockWords = (blocks: BlogSection["blocks"]) =>
    blocks.reduce(
      (sum, block) =>
        sum + wordsIn(block.type === "p" ? block.text : block.items.join(" ")),
      0,
    );
  const sectionWords = post.sections.reduce(
    (sum, section) => sum + wordsIn(section.heading) + blockWords(section.blocks),
    0,
  );
  const faqWords = post.faqs.reduce((sum, faq) => sum + wordsIn(faq.q) + wordsIn(faq.a), 0);
  return wordsIn(post.intro) + sectionWords + faqWords;
}

export function articleSchema(post: BlogPost) {
  const photoId = blogPhotoIds[post.photoId];
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.category,
    wordCount: articleWordCount(post),
    inLanguage: "en",
    ...(photoId ? { image: heroPhoto(photoId) } : {}),
    // Corporate authorship: this is company-published guidance, not an
    // individually bylined article, so Organization is the accurate
    // author — inventing a named "expert" author with fabricated
    // credentials would be a false E-E-A-T signal, not a real one.
    author: organizationRef(),
    publisher: {
      ...organizationRef(),
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
