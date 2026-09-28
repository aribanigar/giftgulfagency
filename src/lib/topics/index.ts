import { products } from "@/lib/products";
import { sections } from "@/lib/site-data";
import { apparelTopics } from "./apparel";
import { displayTopics } from "./displays";
import { exhibitionTopics } from "./exhibitions";
import { packagingTopics, retailTopics } from "./packaging-retail";
import { printingTopics } from "./printing";
import { signageTopics } from "./signage";
import { stickerTopics } from "./stickers";
import { TOPIC_CATEGORIES, type Topic, type TopicCategory } from "./types";

export { TOPIC_CATEGORIES };
export type { Topic, TopicCategory };

export const topics: Topic[] = [
  ...signageTopics,
  ...displayTopics,
  ...exhibitionTopics,
  ...printingTopics,
  ...stickerTopics,
  ...apparelTopics,
  ...packagingTopics,
  ...retailTopics,
];

// Topics share the root URL space with products and service sections, so a
// duplicate slug would silently shadow a page. Fail the build instead.
{
  const taken = new Set([...products.map((p) => p.slug), ...sections.map((s) => s.slug)]);
  const seen = new Set<string>();
  for (const t of topics) {
    if (taken.has(t.slug) || seen.has(t.slug)) throw new Error(`Topic slug collision: ${t.slug}`);
    seen.add(t.slug);
  }
  for (const t of topics) {
    for (const r of t.related) {
      if (!seen.has(r)) throw new Error(`Topic ${t.slug} links to unknown related topic: ${r}`);
    }
  }
}

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}

export function topicsByCategory() {
  return TOPIC_CATEGORIES.map((category) => ({
    category,
    topics: topics.filter((t) => t.category === category),
  }));
}

export function topicsForSection(sectionSlug: string) {
  return topics.filter((t) => t.section === sectionSlug);
}
