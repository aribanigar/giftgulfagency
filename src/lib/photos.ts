/**
 * Placeholder photography. Served from Cloudinary (CLOUDINARY_CLOUD_NAME env
 * var) when configured — cropped and capped server-side to the size each
 * component actually needs (the source uploads are 2000-2400px, often
 * portrait, so shipping them uncropped made every photo slow to load),
 * with f_auto/q_auto letting Cloudinary pick the best format/quality per
 * browser. Falls back to the local copies in public/photos/ if Cloudinary
 * isn't configured (e.g. a fresh checkout before env vars are set).
 *
 * Sourced from Unsplash (free license, no attribution required) — swap for
 * real project photography once available; see README "Known placeholders".
 * Re-run scripts/upload-photos-to-cloudinary.mjs after replacing any file
 * in public/photos/.
 */
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

function cld(id: string, transform: string) {
  if (!CLOUD_NAME) return null;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/gifts-gulf/${id}`;
}

/** Wide 16:9 crop, capped at 1200px — small contexts (portfolio cards). */
function wide(id: string) {
  return (
    cld(id, "c_fill,g_auto,ar_16:9,w_1200,q_auto,f_auto") ?? `/photos/${id}.jpg`
  );
}

/** Wide 16:9 crop, capped at 1920px, with a chosen gravity — full-bleed heroes. */
function heroPhoto(id: string, gravity: "auto" | "south" | "center" = "auto") {
  return (
    cld(id, `c_fill,g_${gravity},ar_16:9,w_1920,q_auto,f_auto`) ??
    `/photos/${id}.jpg`
  );
}

/** Small thumbnails — the portfolio grid, one per section. */
export const sectionPhotos: Record<string, string> = {
  printing: wide("printing-digital"),
  signages: wide("signage-install"),
  "events-exhibitions": wide("events-exhibitions"),
  packaging: wide("packaging-boxes"),
  "gift-items": wide("gift-items"),
  "social-media": wide("social-media"),
};

/**
 * Each section page's full-bleed hero, at the top of the page — five real
 * product/work shots per section, auto-rotating.
 */
export const sectionHeroGalleries: Record<string, string[]> = {
  printing: [
    heroPhoto("printing-digital"),
    heroPhoto("stickers-labels"),
    heroPhoto("printing-magazine"),
    heroPhoto("printing-uvcase"),
    heroPhoto("printing-vinyl"),
  ],
  signages: [
    heroPhoto("signage-install"),
    heroPhoto("signage-wayfinding"),
    heroPhoto("signage-acrylic"),
    heroPhoto("signage-illuminated"),
    heroPhoto("signage-led"),
  ],
  "events-exhibitions": [
    heroPhoto("events-exhibitions"),
    heroPhoto("events-backdrop"),
    heroPhoto("events-truss"),
    heroPhoto("events-stand"),
    heroPhoto("events-hall"),
  ],
  packaging: [
    heroPhoto("packaging-boxes"),
    heroPhoto("packaging-cups"),
    heroPhoto("packaging-hardboard"),
    heroPhoto("packaging-carrybag"),
    heroPhoto("packaging-set"),
  ],
  "gift-items": [
    heroPhoto("gift-pens"),
    heroPhoto("gift-bottles"),
    heroPhoto("gift-hamper"),
    heroPhoto("gift-items"),
    heroPhoto("gift-mugs"),
  ],
  "social-media": [
    heroPhoto("social-media"),
    heroPhoto("social-flatlay"),
    heroPhoto("social-ringlight"),
    heroPhoto("social-analytics"),
    heroPhoto("social-studio"),
  ],
};

export const featurePhotos = {
  heroSkyline: heroPhoto("hero-skyline", "south"),
  sheikhZayedRoad: heroPhoto("sheikh-zayed-road", "auto"),
  fabrication: heroPhoto("fabrication", "auto"),
  fabricationDetail: wide("fabrication-detail"),
};

/**
 * Homepage hero — real, market-accurate shots on rotation: the Dubai
 * skyline, Sheikh Zayed Road, the fabrication floor where the work gets
 * made, and a real illuminated sign, not staged or generic renders.
 */
export const homeHeroGallery: string[] = [
  heroPhoto("hero-skyline", "south"),
  heroPhoto("sheikh-zayed-road", "auto"),
  heroPhoto("fabrication", "auto"),
  heroPhoto("signage-install", "auto"),
];
