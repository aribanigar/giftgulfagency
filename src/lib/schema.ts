import { siteConfig } from "@/lib/site-config";
import type { Faq, Section } from "@/lib/site-data";
import type { BlogPost } from "@/lib/blog-data";
import type { SiteSettings } from "@/lib/settings";
import type { Location } from "@/lib/locations";

function areaServed() {
  return [
    ...siteConfig.areaServed.map((name) => ({ "@type": "Country", name })),
    ...siteConfig.cities.map((name) => ({ "@type": "City", name })),
  ];
}

/**
 * Site-wide identity markup, rendered once in the root layout. Uses
 * AdvertisingAgency (a LocalBusiness subtype) rather than bare
 * Organization so local/map-pack and AI-answer surfaces can identify this
 * as a physical, area-served business rather than a generic brand entity.
 * Only surfaces contact details already published on the site (footer) —
 * never fabricates an address, hours or price range that aren't real.
 */
export function organizationSchema(settings?: SiteSettings) {
  const socials = settings
    ? Object.values(settings.socialLinks).filter(Boolean)
    : [];
  return {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    areaServed: areaServed(),
    ...(settings?.contactEmail ? { email: settings.contactEmail } : {}),
    ...(settings?.contactPhone ? { telephone: settings.contactPhone } : {}),
    ...(settings?.address ? { address: settings.address } : {}),
    ...(socials.length > 0 ? { sameAs: socials } : {}),
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: section.name,
    name: section.name,
    description: section.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: areaServed(),
    url: `${siteConfig.url}/${section.slug}`,
  };
}

export function productSchema(product: { slug: string; name: string; metaDescription: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription,
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/${product.slug}`,
  };
}

export function locationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Printing, signage & advertising services",
    name: `Gifts Gulf Advertising in ${location.city}`,
    description: location.definition,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "City", name: location.city },
    url: `${siteConfig.url}/locations/${location.slug}`,
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
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
