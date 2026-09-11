import { siteConfig } from "@/lib/site-config";
import type { Faq, Section } from "@/lib/site-data";

function areaServed() {
  return [
    ...siteConfig.areaServed.map((name) => ({ "@type": "Country", name })),
    ...siteConfig.cities.map((name) => ({ "@type": "City", name })),
  ];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: areaServed(),
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
