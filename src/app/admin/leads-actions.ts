"use server";

import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/admin-auth";
import {
  LEAD_STATUSES,
  getLead,
  newQuoteToken,
  updateLead,
  type LeadStatus,
  type Quote,
} from "@/lib/leads";
import { notifyQuoteToCustomer } from "@/lib/notify";

export type QuoteResult =
  | { ok: true; emailed: boolean; message: string }
  | { ok: false; error: string };

async function requireAdmin() {
  if (!(await isAuthenticated())) throw new Error("Not signed in.");
}

export async function setStatusAction(id: string, formData: FormData) {
  await requireAdmin();
  const status = String(formData.get("status") ?? "") as LeadStatus;
  if (!LEAD_STATUSES.includes(status)) return;
  await updateLead(id, (lead) => {
    lead.status = status;
  });
  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${id}`);
}

export async function addNoteAction(id: string, formData: FormData) {
  await requireAdmin();
  const text = String(formData.get("note") ?? "").trim().slice(0, 1000);
  if (!text) return;
  await updateLead(id, (lead) => {
    lead.notes.unshift({ at: new Date().toISOString(), text });
  });
  revalidatePath(`/admin/leads/${id}`);
}

export async function sendQuoteAction(
  id: string,
  _prev: QuoteResult | null,
  formData: FormData,
): Promise<QuoteResult> {
  await requireAdmin();
  const lead = await getLead(id);
  if (!lead) return { ok: false, error: "Lead not found." };

  const amount = Number(String(formData.get("amount") ?? "").replace(/,/g, ""));
  const currency = formData.get("currency") === "QAR" ? "QAR" : "AED";
  const vatRaw = String(formData.get("vat") ?? "");
  const vat: Quote["vat"] =
    vatRaw === "included" || vatRaw === "none" ? vatRaw : "excluded";
  const validUntil = String(formData.get("validUntil") ?? "").trim();
  const scope = String(formData.get("scope") ?? "").trim().slice(0, 2000);
  const leadTime = String(formData.get("leadTime") ?? "").trim().slice(0, 200);
  const notes = String(formData.get("notes") ?? "").trim().slice(0, 2000);

  if (!Number.isFinite(amount) || amount <= 0) {
    return { ok: false, error: "Enter the quote total as a number." };
  }
  if (!validUntil) return { ok: false, error: "Choose how long the quote is valid." };
  if (!scope) return { ok: false, error: "Describe what the quote includes." };

  const quote: Quote = {
    amount,
    currency,
    vat,
    validUntil,
    leadTime,
    scope,
    notes,
    token: newQuoteToken(),
    sentAt: new Date().toISOString(),
  };

  const event = await notifyQuoteToCustomer(lead, quote);
  await updateLead(id, (l) => {
    l.quote = quote;
    l.status = "quoted";
    l.emails.push(event);
  });
  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${id}`);

  return event.ok
    ? { ok: true, emailed: true, message: `Quote emailed to ${lead.email}.` }
    : {
        ok: true,
        emailed: false,
        message: `Quote saved but the email did not send (${event.error}). Copy the customer's link from the lead page or retry.`,
      };
}
