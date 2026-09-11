export const siteConfig = {
  name: "Gifts Gulf Advertising",
  legalName: "Gifts Gulf Advertising",
  // giftsgulf.com is a separate, unrelated live project — do not point this
  // site's canonical/sitemap/schema URLs at it. Update NEXT_PUBLIC_SITE_URL
  // once a custom domain is assigned to this deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://giftsgulfagency.vercel.app",
  description:
    "Gifts Gulf Advertising is a media and advertising partner across the UAE and Qatar, covering printing, signages, events & exhibitions, packaging, gift items, and social media, plus the website and SEO work behind it.",
  areaServed: ["United Arab Emirates", "Qatar"],
  cities: ["Dubai", "Abu Dhabi", "Sharjah", "Doha"],
};
