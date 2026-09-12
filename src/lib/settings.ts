import { Redis } from "@upstash/redis";
import { unstable_cache, updateTag } from "next/cache";

export type SocialLinks = {
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  youtube: string;
  x: string;
};

export type FeaturedVideo = {
  url: string;
  title: string;
};

export type SiteSettings = {
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: SocialLinks;
  featuredVideo: FeaturedVideo;
};

export const defaultSettings: SiteSettings = {
  contactEmail: "Contact@giftsgulfagency.com",
  contactPhone: "+91 6005 001 499",
  address: "Dubai, UAE & Doha, Qatar",
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
    x: "",
  },
  featuredVideo: {
    url: "",
    title: "See Gifts Gulf Advertising in action",
  },
};

const SETTINGS_KEY = "gifts-gulf:site-settings";
const SETTINGS_TAG = "site-settings";

// Vercel's Redis/Upstash marketplace integration can inject either naming
// convention depending on when it was connected. Support both.
function redisEnv() {
  const url =
    process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export function isSettingsStoreConfigured() {
  return redisEnv() !== null;
}

function getRedis() {
  const env = redisEnv();
  if (!env) return null;
  return new Redis(env);
}

const readSettings = unstable_cache(
  async (): Promise<SiteSettings> => {
    const redis = getRedis();
    if (!redis) return defaultSettings;
    const stored = await redis.get<Partial<SiteSettings>>(SETTINGS_KEY);
    return { ...defaultSettings, ...stored };
  },
  ["site-settings"],
  { tags: [SETTINGS_TAG], revalidate: 60 },
);

export async function getSettings(): Promise<SiteSettings> {
  return readSettings();
}

export async function updateSettings(
  partial: Partial<SiteSettings>,
): Promise<SiteSettings> {
  const redis = getRedis();
  if (!redis) {
    throw new Error(
      "Settings store isn't connected yet. Add a Redis (Upstash) integration in the Vercel dashboard first.",
    );
  }
  const current = await getSettings();
  const next = { ...current, ...partial };
  await redis.set(SETTINGS_KEY, next);
  updateTag(SETTINGS_TAG);
  return next;
}
