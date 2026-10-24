"use server";

import { buildLead, isLeadsStoreConfigured, persistLead, type NewLead } from "@/lib/leads";
import { notifyNewEnquiry } from "@/lib/notify";
import { QUICK_QUOTE_CITIES } from "@/lib/quick-quote";

export type ContactResult =
  | { ok: true; ref: string; emailedCustomer: boolean }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Only same-site paths are kept as a lead's source page. */
function sourcePath(raw: string) {
  return raw.startsWith("/") && !raw.startsWith("//") ? raw : "";
}

const CITIES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Other UAE emirate",
  "Doha",
  "Other Qatar location",
];

export async function submitContactAction(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("website") ?? "").trim()) {
    return { ok: true, ref: "GG-000000-0000", emailedCustomer: false };
  }

  const f = (name: string, max = 200) =>
    String(formData.get(name) ?? "").trim().slice(0, max);

  const data = {
    name: f("name", 100),
    company: f("company", 120),
    email: f("email", 160).toLowerCase(),
    phone: f("phone", 30),
    service: f("service", 60),
    city: f("city", 60),
    item: f("item", 160),
    quantity: f("quantity", 60),
    size: f("size", 200),
    budget: f("budget", 60),
    deadline: f("deadline", 20),
    installation: f("installation", 60),
    artwork: f("artwork", 60),
    contactMethod: f("contactMethod", 30),
    message: f("message", 3000),
    source: sourcePath(f("source", 200)) || "/contact",
  };

  if (!data.name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(data.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (data.phone.replace(/\D/g, "").length < 7) {
    return {
      ok: false,
      error: "Please enter a phone number we can reach you on, with country code.",
    };
  }
  if (!data.service) return { ok: false, error: "Please choose a service." };
  if (!CITIES.includes(data.city)) {
    return { ok: false, error: "Please choose where the work is needed." };
  }
  if (!data.item) {
    return { ok: false, error: "Please tell us what you need, for example \"roll-up banners\"." };
  }
  if (!data.quantity) return { ok: false, error: "Please enter the quantity." };
  if (data.message.length < 10) {
    return {
      ok: false,
      error: "Please add a few details about the job so we can quote accurately.",
    };
  }

  return saveAndNotify(data);
}

async function saveAndNotify(data: NewLead): Promise<ContactResult> {
  const lead = buildLead(data);
  const events = await notifyNewEnquiry(lead);
  lead.emails = events;

  let saved = false;
  if (isLeadsStoreConfigured()) {
    try {
      await persistLead(lead);
      saved = true;
    } catch (err) {
      console.error("[lead save failed]", err);
    }
  }

  const adminEmailed = events.some((e) => e.kind === "enquiry-admin" && e.ok);
  // The enquiry counts as received only if the team can actually see it.
  if (!saved && !adminEmailed) {
    return {
      ok: false,
      error:
        "We couldn't submit this form right now. Please email or call us directly using the details on this page.",
    };
  }

  return {
    ok: true,
    ref: lead.ref,
    emailedCustomer: events.some((e) => e.kind === "enquiry-customer" && e.ok),
  };
}


/** Short sidebar form: fewer required fields, same lead store and emails. */
export async function submitQuickQuoteAction(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  if (String(formData.get("website") ?? "").trim()) {
    return { ok: true, ref: "GG-000000-0000", emailedCustomer: false };
  }
  const f = (name: string, max = 200) =>
    String(formData.get(name) ?? "").trim().slice(0, max);

  const name = f("name", 100);
  const email = f("email", 160).toLowerCase();
  const phone = f("phone", 30);
  const city = f("city", 60);
  const item = f("item", 160);
  const details = f("message", 2000);
  const source = sourcePath(f("source", 200));

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Please enter a phone number with country code." };
  }
  if (!QUICK_QUOTE_CITIES.includes(city)) return { ok: false, error: "Please choose a city." };
  if (!item) return { ok: false, error: "Please tell us what you need." };

  return saveAndNotify({
    name,
    company: "",
    email,
    phone,
    service: f("service", 60) || "General enquiry",
    city,
    item,
    quantity: f("quantity", 60),
    size: "",
    budget: "",
    deadline: "",
    installation: "",
    artwork: "",
    contactMethod: "",
    message: details,
    source,
  });
}
