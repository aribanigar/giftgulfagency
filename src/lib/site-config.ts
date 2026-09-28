export const siteConfig = {
  name: "Gifts Gulf Advertising",
  legalName: "Gifts Gulf Advertising",
  // giftsgulf.com (no "agency") is a separate, unrelated live project — do
  // not confuse it with this one. giftsgulfagency.com is now the live
  // custom domain for this deployment (DNS + SSL confirmed working), so
  // that's the fallback below. Still best practice to also set
  // NEXT_PUBLIC_SITE_URL in Vercel's project env vars so this stays the
  // single source of truth if the domain ever changes again.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.giftsgulfagency.com",
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
