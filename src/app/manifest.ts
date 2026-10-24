import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/** Lets phones add the site to the home screen and open it like an app. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Gifts Gulf",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111312",
    theme_color: "#111312",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
