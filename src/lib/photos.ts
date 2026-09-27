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
export function wide(id: string) {
  return (
    cld(id, "c_fill,g_auto,ar_16:9,w_1200,q_auto,f_auto") ?? `/photos/${id}.jpg`
  );
}

/** Wide 16:9 crop, capped at 1920px, with a chosen gravity — full-bleed heroes. */
export function heroPhoto(id: string, gravity: "auto" | "south" | "center" = "auto") {
  return (
    cld(id, `c_fill,g_${gravity},ar_16:9,w_1920,q_auto,f_auto`) ??
    `/photos/${id}.jpg`
  );
}

/** Small thumbnails — the portfolio grid, one per section. */
export const sectionPhotos: Record<string, string> = {
  printing: wide("printing-digital"),
  signages: wide("signage-3dletters"),
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
    heroPhoto("printing-screen1"),
    heroPhoto("printing-largeformat"),
    heroPhoto("printing-screen2"),
    heroPhoto("printing-vinyl"),
  ],
  signages: [
    heroPhoto("signage-3dletters"),
    heroPhoto("signage-wayfinding"),
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
    heroPhoto("gift-totebag"),
    heroPhoto("gift-tshirt"),
    heroPhoto("gift-notebook"),
    heroPhoto("gift-pens"),
    heroPhoto("gift-tumbler"),
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
  heroPhoto("signage-3dletters", "auto"),
];

/**
 * Blog post cover photo ids, one per article — raw Cloudinary public_ids,
 * not pre-cropped, so a post page can request the hero (16:9 wide) crop
 * and the index card can request the smaller (16:9 capped) crop from the
 * same source image.
 */
export const blogPhotoIds: Record<string, string> = {
  "indoor-signage-guide": "signage-wayfinding",
  "outdoor-signage-guide": "signage-3dletters",
  "vinyl-stickers-guide": "stickers-labels",
  "banner-printing-guide": "printing-digital",
  "acrylic-box-packaging": "blog-acrylic-box",
  "leather-gift-boxes": "blog-leather-box",
  "corporate-gift-items-guide": "gift-pens",
  "social-media-management-guide": "social-media",
  "website-software-development": "blog-web-development",
  "seo-services-guide": "blog-seo-services",
  "exhibition-stand-guide": "events-exhibitions",
  "uv-printing-explained": "printing-uvcase",
  "dtf-vs-screen-vs-sublimation": "printing-digital",
  "large-format-printing-guide": "printing-vinyl",
  "flag-printing-guide": "events-backdrop",
  "channel-letters-guide": "signage-led",
  "led-vs-neon-signage": "signage-illuminated",
  "shop-signage-approvals-uae": "signage-illuminated",
  "vehicle-branding-fleet-graphics": "signage-vehiclewrap",
  "product-launch-event-planning": "events-stand",
  "trade-show-checklist": "events-truss",
  "event-backdrop-step-and-repeat-guide": "events-backdrop",
  "food-packaging-guide-uae-qatar": "packaging-set",
  "retail-packaging-unboxing-guide": "packaging-hardboard",
  "eco-friendly-packaging-guide": "packaging-carrybag",
  "ecommerce-packaging-guide": "packaging-boxes",
  "eid-corporate-gifting-guide": "gift-hamper",
  "national-day-gift-guide": "gift-mugs",
  "employee-onboarding-kit-guide": "gift-totebag",
  "promotional-merchandise-guide": "gift-pens",
  "instagram-marketing-guide-uae-qatar": "social-flatlay",
  "google-business-profile-optimization": "blog-seo-services",
  "social-media-content-calendar-guide": "social-ringlight",
  "local-seo-multi-location-guide": "social-studio",
  "retail-store-opening-checklist": "signage-acrylic",
  "restaurant-branding-guide": "packaging-cups",
  "offset-printing-guide": "printing-magazine",
  "canvas-printing-guide": "printing-largeformat",
  "acrylic-lettering-displays-guide": "signage-lasercutting",
  "acrylic-awards-trophies-guide": "gift-items",
  "exhibition-kiosk-design-guide": "events-stand",
  "paid-social-advertising-guide": "social-analytics",
  "social-media-content-design-copywriting-guide": "social-flatlay",
  "influencer-ugc-marketing-guide": "social-studio",
  "social-media-analytics-reporting-guide": "blog-seo-services",
  "3d-design-exhibition-stands-guide": "events-hall",
  "roll-up-banner-stands-guide": "printing-largeformat",
  "popup-display-stands-guide": "events-stand",
  "fabric-printing-guide": "events-backdrop",
  "office-fit-out-cost-guide-dubai": "sheikh-zayed-road",
  "fit-out-contractor-vs-interior-designer": "sheikh-zayed-road",
  "retail-fit-out-timeline-guide": "sheikh-zayed-road",
  "dubai-fit-out-approval-process": "sheikh-zayed-road",
  "google-ads-ppc-guide-uae": "blog-web-development",
  "corporate-gifts-budget-guide-uae": "gift-tumbler",
  "artwork-vector-file-guide": "printing-digital",
  "gitex-global-2026-exhibition-checklist": "events-hall",
  "diwali-corporate-gifting-guide": "gift-hamper",
  // No dedicated photography exists yet for a wooden backdrop specifically,
  // a restaurant/mall kiosk, or a carpentry workshop — each reuses the
  // closest real, honestly-related existing photo rather than a file that
  // doesn't exist, same pattern as the fit-out guides above.
  "wooden-backdrops-guide": "events-backdrop",
  "restaurant-mall-kiosk-guide": "events-stand",
  "acrylic-display-stands-guide": "signage-acrylic",
  "painting-carpentry-fitout-guide": "sheikh-zayed-road",
  "vat-corporate-gifts-printing-uae": "blog-seo-services",
  "national-day-decoration-signage-dubai": "signage-illuminated",
  // No dedicated photography exists for an RFQ/procurement process or a
  // bank-industry gifting scene either — reusing the closest honestly-
  // related existing photo, same pattern as above.
  "how-to-write-rfq-corporate-gifts-printing-uae": "blog-web-development",
  "corporate-gifts-banks-financial-institutions-uae": "gift-pens",
  // Single-question guides: exact-subject photos from Pixabay (free for
  // commercial use, no attribution required), self-hosted on Cloudinary.
  // Provenance in scripts/pixabay-photo-credits.json.
  "a2-size": "blog-a2-size",
  "a1-size": "blog-a1-size",
  "a0-size": "blog-a0-size",
  "a5-size": "blog-a5-size",
  "paper-sizes-chart": "blog-paper-sizes-chart",
  "postcard-size": "blog-postcard-size",
  "id-card-size": "blog-id-card-size",
  "business-card-size-uae": "blog-business-card-size-uae",
  "poster-sizes": "blog-poster-sizes",
  "print-resolution-dpi-guide": "blog-print-resolution-dpi-guide",
  "cmyk-vs-rgb-printing": "blog-cmyk-vs-rgb-printing",
  "what-is-a-leaflet": "blog-what-is-a-leaflet",
  "mouse-pad-printing-guide": "blog-mouse-pad-printing-guide",
  "paper-cup-sizes-printing": "blog-paper-cup-sizes-printing",
  "paper-bag-sizes-guide": "blog-paper-bag-sizes-guide",
  "non-woven-vs-canvas-tote-bags": "blog-non-woven-vs-canvas-tote-bags",
  "name-badge-types": "blog-name-badge-types",
  "custom-mug-printing-methods": "blog-custom-mug-printing-methods",
  "safety-jacket-printing": "blog-safety-jacket-printing",
  "corporate-gift-ideas-uae": "blog-corporate-gift-ideas-uae",
  "polo-shirt-design-tips": "blog-polo-shirt-design-tips",
  "football-jersey-custom-design": "blog-football-jersey-custom-design",
  "t-shirt-printing-design-tips": "blog-t-shirt-printing-design-tips",
  "name-plate-design-for-house": "blog-name-plate-design-for-house",
  "mandatory-safety-signs-uae": "blog-mandatory-safety-signs-uae",
  "sign-board-letter-height-viewing-distance": "blog-sign-board-letter-height-viewing-distance",
  "wall-decal-design": "blog-wall-decal-design",
  "cast-vs-calendered-vinyl": "blog-cast-vs-calendered-vinyl",
  "clothing-labels-guide": "blog-clothing-labels-guide",
  "envelope-sizes": "blog-envelope-sizes",
  "company-stamps-uae": "blog-company-stamps-uae",
  "photo-print-sizes": "blog-photo-print-sizes",
  "booklet-printing-page-counts": "blog-booklet-printing-page-counts",
  "custom-medals-guide": "blog-custom-medals-guide",
  "custom-keychain-types": "blog-custom-keychain-types",
  "branded-water-bottles-guide": "blog-branded-water-bottles-guide",
  "branded-pens-guide": "blog-branded-pens-guide",
  "usb-flash-drive-branding": "blog-usb-flash-drive-branding",
  "branded-umbrellas-guide": "blog-branded-umbrellas-guide",
  "gala-dinner-branding-checklist": "blog-gala-dinner-branding-checklist",
  "custom-neon-sign-guide": "blog-custom-neon-sign-guide",
  "wayfinding-signage-types": "blog-wayfinding-signage-types",
  "a4-size": "blog-a4-size",
  "types-of-stickers": "blog-types-of-stickers",
  "desk-calendar-printing": "blog-desk-calendar-printing",
  "payment-voucher-receipt-books": "blog-payment-voucher-receipt-books",  "door-signage-design": "blog-door-signage-design",
  "frosted-sticker-design-ideas": "blog-frosted-sticker-design-ideas",
  "flex-vs-acp-vs-3d-sign-boards": "blog-flex-vs-acp-vs-3d-sign-boards",
  "backdrop-design-tips": "blog-backdrop-design-tips",
  "table-cloth-printing-events": "blog-table-cloth-printing-events",
  "acrylic-photo-frames": "blog-acrylic-photo-frames",
  "gold-labels-foil-stickers": "blog-gold-labels-foil-stickers",
  "transparent-stickers": "blog-transparent-stickers",
  "roll-stickers-vs-sheet-stickers": "blog-roll-stickers-vs-sheet-stickers",
  "magnetic-car-stickers": "blog-magnetic-car-stickers",
  "sticker-printing-artwork-checklist": "blog-sticker-printing-artwork-checklist",
  "id-card-printing-guide": "blog-id-card-printing-guide",
  "paper-gsm-guide": "blog-paper-gsm-guide",
  "a4-sticker-paper-guide": "blog-a4-sticker-paper-guide",
  "certificate-printing-guide": "blog-certificate-printing-guide",
  "letterhead-design-printing": "blog-letterhead-design-printing",
  "canvas-print-sizes": "blog-canvas-print-sizes",
  "presentation-folder-printing": "blog-presentation-folder-printing",

};
