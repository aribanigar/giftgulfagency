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

/** Wide 16:9 crop, capped at 1200px — section bands and portfolio cards. */
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

export const sectionPhotos: Record<string, string> = {
  printing: wide("stickers-labels"),
  signages: wide("signage"),
  "events-exhibitions": wide("events-exhibitions"),
  packaging: wide("packaging-boxes"),
  "gift-items": wide("gift-items"),
  "social-media": wide("social-media"),
};

/**
 * Multiple product shots for sections where one photo undersells the range
 * of what's produced — SectionVisual rotates through these instead of
 * showing a single static image. Sections without an entry here just fall
 * back to their single sectionPhotos image.
 */
export const sectionGalleries: Record<string, string[]> = {
  packaging: [
    wide("packaging-boxes"),
    wide("packaging-cups"),
    wide("packaging-hardboard"),
    wide("packaging-carrybag"),
  ],
};

export const featurePhotos = {
  heroSkyline: heroPhoto("hero-skyline", "south"),
  sheikhZayedRoad: heroPhoto("sheikh-zayed-road", "auto"),
  fabrication: heroPhoto("fabrication", "auto"),
  fabricationDetail: wide("fabrication-detail"),
};
