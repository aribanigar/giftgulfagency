import { randomBytes, randomUUID } from "crypto";
import { Redis } from "@upstash/redis";

export const LEAD_STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type Quote = {
  amount: number;
  currency: "AED" | "QAR";
  vat: "excluded" | "included" | "none";
  validUntil: string;
  leadTime: string;
  scope: string;
  notes: string;
  token: string;
  sentAt: string;
  acceptedAt?: string;
};

export type EmailEvent = {
  kind: "enquiry-admin" | "enquiry-customer" | "quote-customer" | "accepted-admin";
  to: string;
  at: string;
  ok: boolean;
  error?: string;
};

export type Lead = {
  id: string;
  ref: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  item: string;
  quantity: string;
  size: string;
  budget: string;
  deadline: string;
  installation: string;
  artwork: string;
  contactMethod: string;
  message: string;
  status: LeadStatus;
  quote?: Quote;
  notes: { at: string; text: string }[];
  emails: EmailEvent[];
  submittedAt: string;
  updatedAt: string;
};

export type NewLead = Omit<
  Lead,
  "id" | "ref" | "status" | "notes" | "emails" | "submittedAt" | "updatedAt" | "quote"
>;

const LEADS_KEY = "gifts-gulf:leads:v2";

// Same Upstash env var lookup as settings.ts: the Vercel Marketplace Redis
// integration can inject either naming convention.
function redisEnv() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export function isLeadsStoreConfigured() {
  return redisEnv() !== null;
}

function getRedis() {
  const env = redisEnv();
  return env ? new Redis(env) : null;
}

function parse(raw: unknown): Lead | null {
  if (!raw) return null;
  return (typeof raw === "string" ? JSON.parse(raw) : raw) as Lead;
}

function makeRef(now: Date) {
  const d = now.toISOString().slice(2, 10).replace(/-/g, "");
  return `GG-${d}-${randomBytes(2).toString("hex").toUpperCase()}`;
}

/** Builds a lead in memory without touching storage. */
export function buildLead(data: NewLead): Lead {
  const now = new Date();
  return {
    ...data,
    id: randomUUID(),
    ref: makeRef(now),
    status: "new",
    notes: [],
    emails: [],
    submittedAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
}

export async function persistLead(lead: Lead): Promise<void> {
  const redis = getRedis();
  if (!redis) throw new Error("Leads store isn't configured.");
  await redis.hset(LEADS_KEY, { [lead.id]: JSON.stringify(lead) });
}

export async function getLead(id: string): Promise<Lead | null> {
  const redis = getRedis();
  if (!redis) return null;
  return parse(await redis.hget(LEADS_KEY, id));
}

export async function getLeads(): Promise<Lead[]> {
  const redis = getRedis();
  if (!redis) return [];
  const all = await redis.hgetall<Record<string, unknown>>(LEADS_KEY);
  return Object.values(all ?? {})
    .map(parse)
    .filter((l): l is Lead => l !== null)
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
}

/** Read-modify-write helper for admin/customer actions. */
export async function updateLead(
  id: string,
  mutate: (lead: Lead) => void,
): Promise<Lead | null> {
  const lead = await getLead(id);
  if (!lead) return null;
  mutate(lead);
  lead.updatedAt = new Date().toISOString();
  await persistLead(lead);
  return lead;
}

export function newQuoteToken() {
  return randomBytes(16).toString("hex");
}
