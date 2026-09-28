import type { SidebarLink } from "@/components/sidebar/page-sidebar";
import { blogPosts } from "@/lib/blog-data";
import { locations } from "@/lib/locations";
import { placesForCity } from "@/lib/places";
import { sections } from "@/lib/site-data";
import { citiesForTopic, topicsForCity } from "@/lib/topic-city";
import { getTopic, topics, type Topic } from "@/lib/topics";

/** Blog guides that support any of the given topics, closest first. */
export function guideLinks(topicSlugs: string[], opts: { exclude?: string; limit?: number } = {}): SidebarLink[] {
  const scored = blogPosts
    .filter((p) => p.slug !== opts.exclude)
    .map((p) => ({ p, s: (p.relatedTopics ?? []).filter((t) => topicSlugs.includes(t)).length }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, opts.limit ?? 6).map(({ p }) => ({ href: `/blog/${p.slug}`, title: p.title, meta: p.category }));
}

export function topicLinks(slugs: string[], limit = 6): SidebarLink[] {
  return slugs
    .map(getTopic)
    .filter((t): t is Topic => Boolean(t))
    .slice(0, limit)
    .map((t) => ({ href: `/${t.slug}`, title: t.name, meta: t.category }));
}

/** Topics in the same category, for "more like this". */
export function siblingTopicLinks(topic: Topic, limit = 6): SidebarLink[] {
  return topics
    .filter((t) => t.category === topic.category && t.slug !== topic.slug)
    .slice(0, limit)
    .map((t) => ({ href: `/${t.slug}`, title: t.name }));
}

/** Topic x city pages for a topic, falling back to location pages. */
export function cityLinksForTopic(topicSlug?: string): SidebarLink[] {
  const cities = topicSlug ? citiesForTopic(topicSlug) : [];
  const topic = topicSlug ? getTopic(topicSlug) : undefined;
  if (topic && cities.length > 0) {
    return cities.map((c) => ({ href: `/${topic.slug}/${c.slug}`, title: `${topic.name} in ${c.city}` }));
  }
  return locationLinks();
}

export function locationLinks(exclude?: string): SidebarLink[] {
  return locations
    .filter((l) => l.slug !== exclude)
    .map((l) => ({ href: `/locations/${l.slug}`, title: l.city, meta: l.country }));
}

export function cityGuideLinks(citySlug: string, excludeTopic?: string, limit = 8): SidebarLink[] {
  return topicsForCity(citySlug)
    .filter((t) => t.slug !== excludeTopic)
    .slice(0, limit)
    .map((t) => ({ href: `/${t.slug}/${citySlug}`, title: t.name }));
}

export function placeLinks(citySlug: string, excludePlace?: string): SidebarLink[] {
  return placesForCity(citySlug)
    .filter((p) => p.slug !== excludePlace)
    .map((p) => ({ href: `/locations/${citySlug}/${p.slug}`, title: p.name, meta: p.kind === "venue" ? "Venue" : "Area" }));
}

export function serviceLinks(exclude?: string): SidebarLink[] {
  return sections.filter((s) => s.slug !== exclude).map((s) => ({ href: `/${s.slug}`, title: s.name }));
}
