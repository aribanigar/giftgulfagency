/** Cities offered on the short sidebar quote form. */
export const QUICK_QUOTE_CITIES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Other UAE emirate",
  "Doha",
  "Riyadh",
  "Jeddah",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Other",
];

const citySlugToOption: Record<string, string> = {
  dubai: "Dubai",
  "abu-dhabi": "Abu Dhabi",
  sharjah: "Sharjah",
  doha: "Doha",
  riyadh: "Riyadh",
  jeddah: "Jeddah",
  "kuwait-city": "Kuwait",
  manama: "Bahrain",
  muscat: "Oman",
};

export function quoteCityFor(citySlug?: string) {
  return citySlug ? citySlugToOption[citySlug] : undefined;
}
