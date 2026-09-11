import { randomUUID } from "crypto";
import { Redis } from "@upstash/redis";

export type Lead = {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  submittedAt: string;
};

const LEADS_KEY = "gifts-gulf:leads";

// Same Upstash env var lookup as settings.ts — the Vercel Marketplace
// Redis integration can inject either naming convention.
function redisEnv() {
  const url =
    process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export function isLeadsStoreConfigured() {
  return redisEnv() !== null;
}

function getRedis() {
  const env = redisEnv();
  if (!env) return null;
  return new Redis(env);
}

export async function saveLead(
  data: Omit<Lead, "id" | "submittedAt">,
): Promise<Lead> {
  const redis = getRedis();
  if (!redis) {
    throw new Error(
      "Leads can't be saved yet — no Redis (Upstash) integration is connected to this project.",
    );
  }
  const lead: Lead = {
    ...data,
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  await redis.lpush(LEADS_KEY, JSON.stringify(lead));
  return lead;
}

export async function getLeads(): Promise<Lead[]> {
  const redis = getRedis();
  if (!redis) return [];
  const raw = await redis.lrange<string | Lead>(LEADS_KEY, 0, 199);
  return raw.map((item) =>
    typeof item === "string" ? (JSON.parse(item) as Lead) : item,
  );
}
