import { ADMIN_NOTIFY_EMAIL, sendEmail } from "@/lib/email/send";
import {
  enquiryReceivedCustomer,
  newEnquiryAdmin,
  quoteAcceptedAdmin,
  quoteCustomer,
} from "@/lib/email/templates";
import type { EmailEvent, Lead, Quote } from "@/lib/leads";

async function dispatch(
  kind: EmailEvent["kind"],
  to: string,
  mail: { subject: string; html: string },
  replyTo?: string,
): Promise<EmailEvent> {
  const result = await sendEmail({ to, ...mail, replyTo });
  return {
    kind,
    to,
    at: new Date().toISOString(),
    ok: result.ok,
    ...(result.ok ? {} : { error: result.error }),
  };
}

/** New enquiry: alert the admin, acknowledge the customer. */
export async function notifyNewEnquiry(lead: Lead): Promise<EmailEvent[]> {
  return Promise.all([
    dispatch("enquiry-admin", ADMIN_NOTIFY_EMAIL, newEnquiryAdmin(lead), lead.email),
    dispatch(
      "enquiry-customer",
      lead.email,
      enquiryReceivedCustomer(lead),
      ADMIN_NOTIFY_EMAIL,
    ),
  ]);
}

export function notifyQuoteToCustomer(lead: Lead, quote: Quote) {
  return dispatch(
    "quote-customer",
    lead.email,
    quoteCustomer(lead, quote),
    ADMIN_NOTIFY_EMAIL,
  );
}

export function notifyQuoteAccepted(lead: Lead, quote: Quote) {
  return dispatch(
    "accepted-admin",
    ADMIN_NOTIFY_EMAIL,
    quoteAcceptedAdmin(lead, quote),
    lead.email,
  );
}
