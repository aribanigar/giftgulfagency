"use server";

import { saveLead, isLeadsStoreConfigured } from "@/lib/leads";

export type ContactResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactAction(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email and message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!isLeadsStoreConfigured()) {
    return {
      ok: false,
      error:
        "This form isn't connected yet — please email or call us directly using the details on this page, and we'll get back to you.",
    };
  }

  try {
    await saveLead({ name, email, service, message });
  } catch {
    return {
      ok: false,
      error:
        "Something went wrong sending your message. Please email or call us directly instead.",
    };
  }

  return { ok: true };
}
