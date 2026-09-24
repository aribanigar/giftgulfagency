import { siteConfig } from "@/lib/site-config";
import type { SiteSettings } from "@/lib/settings";
import type { Faq, Section } from "@/lib/site-data";

function areaServed() {
  return [
    ...siteConfig.areaServed.map((name) => ({ "@type": "Country", name })),
    ...siteConfig.cities.map((name) => ({ "@type": "City", name })),
  ];
}

function sameAs(settings: SiteSettings) {
  return Object.values(settings.socialLinks).filter(Boolean);
}

export function organizationSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    email: settings.contactEmail,
    telephone: settings.contactPhone,
    areaServed: areaServed(),
    sameAs: sameAs(settings),
  };
}

// Distinct from organizationSchema: this is what Google's local-pack and
// AI answer engines cross-check against a Google Business Profile listing,
// so it needs telephone/address to be the same values published there (NAP
// consistency). addressLocality/addressCountry below default to the first
// entry in siteConfig.cities/areaServed until a verified street address is
// supplied via the admin settings.
export function localBusinessSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    email: settings.contactEmail,
    telephone: settings.contactPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address,
      addressLocality: siteConfig.cities[0],
      addressCountry: "AE",
    },
    areaServed: areaServed(),
    sameAs: sameAs(settings),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
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
