import type { MetadataRoute } from "next";
import { sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/portfolio", "/about", "/contact"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const sectionRoutes = sections.map((section) => ({
    url: `${siteConfig.url}/${section.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...sectionRoutes];
}
