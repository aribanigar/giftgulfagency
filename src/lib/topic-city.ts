import { p, table, ul, type GuideSection } from "@/lib/content-types";
import type { Faq } from "@/lib/site-data";
import { gccCities, getGccCity, type GccCity } from "@/lib/gcc-cities";
import { getTopic, topics, type Topic } from "@/lib/topics";

/**
 * Topic x city pages, only where there is real search demand for the pair.
 * Everything else stays on the national topic page to avoid thin,
 * near-duplicate city pages.
 */
const ALL = gccCities.map((c) => c.slug);
const CORE = ["dubai", "abu-dhabi", "sharjah", "doha", "riyadh"];
const UAE_QA = ["dubai", "abu-dhabi", "sharjah", "doha"];

const cityPlan: Record<string, string[]> = {
  "3d-letter-signage": ALL,
  "exhibition-booth-design": ALL,
  "roll-up-banners": ALL,
  "acrylic-signage": CORE,
  "light-box-signs": CORE,
  "neon-signs": UAE_QA,
  "pop-up-stands": UAE_QA,
  "backdrop-stands": CORE,
  "mall-kiosks": CORE,
  "book-printing": UAE_QA,
  "brochure-printing": UAE_QA,
  "frosted-glass-stickers": UAE_QA,
  "window-graphics": UAE_QA,
  "custom-t-shirt-printing": CORE,
  "custom-printed-boxes": CORE,
  "retail-branding": CORE,
};

/** Plural noun used in running text, so sentences read naturally. */
const nouns: Record<string, string> = {
  "3d-letter-signage": "3D letter signs",
  "exhibition-booth-design": "exhibition stands",
  "roll-up-banners": "roll-up banners",
  "acrylic-signage": "acrylic signs",
  "light-box-signs": "light box signs",
  "neon-signs": "neon signs",
  "pop-up-stands": "pop-up stands",
  "backdrop-stands": "event backdrops",
  "mall-kiosks": "mall kiosks",
  "book-printing": "printed books",
  "brochure-printing": "printed brochures",
  "frosted-glass-stickers": "frosted glass stickers",
  "window-graphics": "window graphics",
  "custom-t-shirt-printing": "custom printed t-shirts",
  "custom-printed-boxes": "custom printed boxes",
  "retail-branding": "retail branding projects",
};
const noun = (topic: Topic) => nouns[topic.slug] ?? topic.name.toLowerCase();

/** "Oman National Day, 20 November" -> "Oman National Day (20 November)". */
const days = (c: GccCity) => c.nationalDay.replace(/, (\d+ [A-Za-z]+)/g, " ($1)").replace(/\), and /g, ") and ");

const isEvent = (t: Topic) => t.category === "Exhibitions & Kiosks" || t.category === "Displays & Stands";

function approvalText(topic: Topic, c: GccCity) {
  if (topic.slug === "mall-kiosks") {
    return `Kiosks in ${c.city} malls are approved by the mall: design drawings, materials, electrics and installation method, with food kiosks needing extra approvals.`;
  }
  if (isEvent(topic)) {
    return `At ${c.venues[0].name} and other ${c.city} venues, the show organiser and venue approve stand drawings, materials, rigging and electrics before build-up. Hotels and malls set their own rules for delivery times and fixing.`;
  }
  return c.approvals;
}

export type TopicCityPage = {
  topic: Topic;
  city: GccCity;
  path: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  sections: GuideSection[];
  faqs: Faq[];
};

export function topicCityPairs() {
  return Object.entries(cityPlan).flatMap(([topicSlug, cities]) =>
    cities.map((citySlug) => ({ topicSlug, citySlug })),
  );
}

export function citiesForTopic(topicSlug: string): GccCity[] {
  return (cityPlan[topicSlug] ?? []).map((s) => getGccCity(s)).filter((c): c is GccCity => Boolean(c));
}

export function topicsForCity(citySlug: string): Topic[] {
  return Object.entries(cityPlan)
    .filter(([, cities]) => cities.includes(citySlug))
    .map(([slug]) => getTopic(slug))
    .filter((t): t is Topic => Boolean(t));
}

// Fail the build if the plan points at a topic or city that does not exist.
for (const { topicSlug, citySlug } of topicCityPairs()) {
  if (!topics.some((t) => t.slug === topicSlug)) throw new Error(`cityPlan: unknown topic ${topicSlug}`);
  if (!getGccCity(citySlug)) throw new Error(`cityPlan: unknown city ${citySlug}`);
}

const list = (items: string[], n = items.length) => {
  const xs = items.slice(0, n);
  return xs.length > 1 ? `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}` : xs[0] ?? "";
};

function whereSection(topic: Topic, c: GccCity): GuideSection {
  const lower = noun(topic);
  const rows: string[][] = [];
  if (topic.category === "Exhibitions & Kiosks" || topic.category === "Displays & Stands") {
    for (const v of c.venues) rows.push([v.name, v.note]);
    rows.push(["Malls", list(c.malls, 4)]);
    rows.push(["Business districts", list(c.businessDistricts, 4)]);
  } else if (topic.category === "Signage" || topic.category === "Retail Branding" || topic.category === "Stickers & Vinyl") {
    rows.push(["Malls", list(c.malls)]);
    rows.push(["Offices and street retail", list(c.businessDistricts)]);
    rows.push(["Warehouses and showrooms", list(c.industrialAreas)]);
  } else {
    rows.push(["Offices", list(c.businessDistricts)]);
    rows.push(["Events", list(c.venues.map((v) => v.name), 2)]);
    rows.push(["Warehouses and distribution", list(c.industrialAreas)]);
  }
  return {
    heading: `Where we deliver ${lower} in ${c.city}`,
    blocks: [
      p(`We deliver${topic.category === "Printing" || topic.category === "Apparel" || topic.category === "Packaging" ? "" : " and install"} ${lower} across ${c.city}. These are the areas and venues a ${c.city} job is most often planned around.`),
      table(["Area", "Examples"], rows),
    ],
  };
}

function localSection(topic: Topic, c: GccCity): GuideSection {
  const lower = noun(topic);
  const blocks = [];
  switch (topic.category) {
    case "Signage":
      blocks.push(
        p(`${c.climate} For ${lower} this decides the materials: sealed LED modules and drivers, UV-stable acrylic faces and stainless or powder-coated fixings outdoors, while mall shopfronts in ${list(c.malls, 2)} are built to each mall's own lighting and depth rules.`),
        p(`${c.language} Plan the Arabic and English lines together at design stage, so both read at the same distance and the sign is not resized after approval.`),
      );
      break;
    case "Displays & Stands":
      blocks.push(
        p(`Most ${lower} in ${c.city} are used at ${c.venues[0].name}, in hotel conference rooms and at mall activations. Venues set their own rules on floor protection, fixing to walls and delivery times, so stands are packed to go through service entrances and goods lifts.`),
        p(`${c.climate} Indoors, air conditioning keeps prints stable; for outdoor use, choose heavier bases and weather-resistant material.`),
      );
      break;
    case "Exhibitions & Kiosks":
      blocks.push(
        p(`${c.city}'s event calendar is heaviest in the cooler months, which is when build-up slots, contractor crews and storage get booked early. Each venue publishes an exhibitor manual with deadlines for stand drawings, rigging and electrics, and the organiser approves the design before build-up.`),
        p(`Mall kiosks and pop-ups in ${list(c.malls, 3)} go through the mall's own design review and usually install outside trading hours.`),
      );
      break;
    case "Printing":
      blocks.push(
        p(`${c.language} Many ${c.city} clients produce ${topic.slug === "book-printing" ? "books, company profiles and reports" : "brochures"} in both languages, either as one bilingual layout or two editions, and the choice changes page count and binding.`),
        p(`Print destined for events at ${c.venues[0].name} is best delivered a few days before build-up, as venues restrict loading times.`),
      );
      break;
    case "Stickers & Vinyl":
      blocks.push(
        p(`${c.climate} Heat and humidity decide which film and adhesive to use: removable films for tenants in towers across ${list(c.businessDistricts, 3)}, and UV-resistant inks and laminates on street-facing glass.`),
        p(`Towers and malls often ask for installation outside working or trading hours and a method statement for work at height.`),
      );
      break;
    case "Apparel":
      blocks.push(
        p(`${c.climate} For outdoor events, marathons and site teams in ${c.city}, lightweight polyester or dri-fit breathes better than heavy cotton.`),
        p(`Demand peaks before ${days(c)}, sports days and year-end events, so order early for those dates.`),
      );
      break;
    case "Packaging":
      blocks.push(
        p(`Gifting drives much of the packaging demand in ${c.city}: Ramadan and Eid hampers, ${days(c)} and year-end corporate gifts. Order boxes well ahead of those dates.`),
        p(`${c.language} Retail packaging usually carries both languages, plus any product information your category requires.`),
      );
      break;
    case "Retail Branding":
      blocks.push(
        p(`Retail in ${c.city} is split between malls such as ${list(c.malls, 3)}, each with its own design guidelines and approvals, and street stores in areas like ${list(c.businessDistricts, 2)}, where exterior signs need permits.`),
        p(`Plan seasonal refreshes around Ramadan, Eid, ${days(c)} and year-end sales.`),
      );
      break;
  }
  return { heading: `${topic.name} in ${c.city}: what to plan for`, blocks };
}

function timingSection(topic: Topic, c: GccCity): GuideSection {
  const installs = !["Printing", "Apparel", "Packaging"].includes(topic.category);
  return {
    heading: `Approvals and timing in ${c.city}`,
    blocks: [
      ...(installs ? [p(approvalText(topic, c))] : []),
      ul([
        `Weekend: ${c.weekend}. Deliveries and installs are scheduled around it and around venue access hours.`,
        `${days(c).includes(" and ") ? `Ramadan, ${days(c)}` : `Ramadan and ${days(c)}`} change working hours and push up demand, so allow extra time.`,
        `Share the delivery address or venue, target date and quantities with your brief so we can confirm what is achievable.`,
      ]),
    ],
  };
}

function cityFaqs(topic: Topic, c: GccCity): Faq[] {
  const lower = noun(topic);
  const installs = !["Printing", "Apparel", "Packaging"].includes(topic.category);
  const faqs: Faq[] = [
    {
      q: `Do you deliver ${lower} in ${c.city}?`,
      a: installs
        ? `Yes. We deliver and install ${lower} across ${c.city}, including ${list(c.businessDistricts, 3)}, malls and event venues.`
        : `Yes. We deliver ${lower} across ${c.city}, including offices in ${list(c.businessDistricts, 3)} and event venues.`,
    },
  ];
  if (installs) {
    faqs.push({
      q: `Do ${lower} in ${c.city} need approval?`,
      a: approvalText(topic, c),
    });
  }
  if (isEvent(topic) && topic.slug !== "mall-kiosks") {
    faqs.push({
      q: `Which ${c.city} venues can you deliver to?`,
      a: `Any venue in the city, including ${list(c.venues.map((v) => v.name.replace(/^Hotels/, "hotels")))}. Each venue's exhibitor manual and access rules are followed.`,
    });
  }
  faqs.push({
    q: `What should a ${c.city} brief for ${lower} include?`,
    a: "Sizes, quantities, artwork or logo files, the delivery address or venue, the target date, and any landlord, mall or organiser guidelines you have received.",
  });
  return faqs;
}

export function buildTopicCityPage(topicSlug: string, citySlug: string): TopicCityPage | undefined {
  if (!(cityPlan[topicSlug] ?? []).includes(citySlug)) return undefined;
  const topic = getTopic(topicSlug);
  const c = getGccCity(citySlug);
  if (!topic || !c) return undefined;
  const lower = noun(topic);
  const installs = !["Printing", "Apparel", "Packaging"].includes(topic.category);
  const verb = installs ? "deliver and install" : "deliver";

  const metaDescription = `${topic.name} in ${c.city}: options, local venues and areas, approvals and timing. We ${verb} across ${c.city}, ${c.country}.`;

  return {
    topic,
    city: c,
    path: `/${topic.slug}/${c.slug}`,
    h1: `${topic.name} in ${c.city}`,
    seoTitle: `${topic.name} in ${c.city}`,
    metaDescription: metaDescription.length > 158 ? `${topic.name} in ${c.city}: options, local areas, approvals and timing. We ${verb} across ${c.city}.` : metaDescription,
    intro: `A practical guide to ${lower} for ${c.city} projects: where they are used, what the climate and local rules mean for the build, and how to plan timing around the ${c.country} calendar. We ${verb} across ${c.city}.`,
    sections: [localSection(topic, c), whereSection(topic, c), timingSection(topic, c), topic.sections[0]],
    faqs: cityFaqs(topic, c),
  };
}
