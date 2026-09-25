import type { MetadataRoute } from "next";
import { sections } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import { locations } from "@/lib/locations";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

const staticRoutePriority: Record<string, { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = {
  "": { changeFrequency: "weekly", priority: 1 },
  "/portfolio": { changeFrequency: "weekly", priority: 0.6 },
  "/about": { changeFrequency: "monthly", priority: 0.6 },
  "/contact": { changeFrequency: "monthly", priority: 0.5 },
  "/blog": { changeFrequency: "weekly", priority: 0.6 },
  "/locations": { changeFrequency: "monthly", priority: 0.6 },
  "/privacy": { changeFrequency: "yearly", priority: 0.2 },
  "/terms": { changeFrequency: "yearly", priority: 0.2 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = Object.entries(staticRoutePriority).map(
    ([path, meta]) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      ...meta,
    }),
  );

  const sectionRoutes = sections.map((section) => ({
    url: `${siteConfig.url}/${section.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...sectionRoutes, ...blogRoutes, ...locationRoutes, ...productRoutes];
}
