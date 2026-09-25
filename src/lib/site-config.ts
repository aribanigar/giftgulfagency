export const siteConfig = {
  name: "Gifts Gulf Advertising",
  legalName: "Gifts Gulf Advertising",
  // giftsgulf.com is a separate, unrelated live project — do not point this
  // site's canonical/sitemap/schema URLs at it. Update NEXT_PUBLIC_SITE_URL
  // once a custom domain is assigned to this deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://giftsgulfagency.vercel.app",
  description:
    "Printing, signage, events & exhibitions, packaging, gift items and social media, one advertising partner across the GCC, from Dubai and Abu Dhabi to Doha, Riyadh, Kuwait City, Manama and Muscat.",
  areaServed: [
    "United Arab Emirates",
    "Qatar",
    "Saudi Arabia",
    "Kuwait",
    "Bahrain",
    "Oman",
  ],
  cities: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Doha",
    "Riyadh",
    "Jeddah",
    "Kuwait City",
    "Manama",
    "Muscat",
  ],
};
