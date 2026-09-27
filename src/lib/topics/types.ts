import type { GuideSection } from "@/lib/content-types";
import type { Faq } from "@/lib/site-data";

export const TOPIC_CATEGORIES = [
  "Signage",
  "Displays & Stands",
  "Exhibitions & Kiosks",
  "Printing",
  "Stickers & Vinyl",
  "Apparel",
  "Packaging",
  "Retail Branding",
] as const;

export type TopicCategory = (typeof TOPIC_CATEGORIES)[number];

export type Topic = {
  slug: string;
  name: string;
  category: TopicCategory;
  /** Parent service page slug, for breadcrumbs and cross-links. */
  section: string;
  primaryKeyword: string;
  /** Title-tag text before the brand suffix. */
  seoTitle: string;
  metaDescription: string;
  /** Hero paragraph. */
  intro: string;
  sections: GuideSection[];
  faqs: Faq[];
  related: string[];
  /** Whether this topic gets per-city pages. */
  cityPages?: boolean;
};
