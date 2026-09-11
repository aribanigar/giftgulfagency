import type { MetadataRoute } from "next";
import { sections } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/portfolio", "/about", "/contact", "/blog"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const sectionRoutes = sections.map((section) => ({
    url: `${siteConfig.url}/${section.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...sectionRoutes, ...blogRoutes];
}
