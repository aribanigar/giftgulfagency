/**
 * Placeholder photography. Served from Cloudinary (CLOUDINARY_CLOUD_NAME env
 * var) when configured — f_auto/q_auto lets Cloudinary pick the best format
 * and quality per browser, so Vercel's Image Optimization API isn't needed.
 * Falls back to the local copies in public/photos/ if Cloudinary isn't
 * configured (e.g. a fresh checkout before env vars are set).
 *
 * Sourced from Unsplash (free license, no attribution required) — swap for
 * real project photography once available; see README "Known placeholders".
 * Re-run scripts/upload-photos-to-cloudinary.mjs after replacing any file
 * in public/photos/.
 */
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

function cld(id: string) {
  if (!CLOUD_NAME) return null;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/gifts-gulf/${id}`;
}

function photo(id: string) {
  return cld(id) ?? `/photos/${id}.jpg`;
}

export const sectionPhotos: Record<string, string> = {
  printing: photo("stickers-labels"),
  signages: photo("signage"),
  "events-exhibitions": photo("events-exhibitions"),
  packaging: photo("packaging-gifts"),
  "gift-items": photo("gift-items"),
  "social-media": photo("social-media"),
};

export const featurePhotos = {
  heroSkyline: photo("hero-skyline"),
  sheikhZayedRoad: photo("sheikh-zayed-road"),
  fabrication: photo("fabrication"),
  fabricationDetail: photo("fabrication-detail"),
};
