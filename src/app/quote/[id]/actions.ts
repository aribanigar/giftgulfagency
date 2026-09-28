"use server";

import { revalidatePath } from "next/cache";
import { getLead, updateLead } from "@/lib/leads";
import { notifyQuoteAccepted } from "@/lib/notify";

export async function acceptQuoteAction(id: string, token: string) {
  const lead = await getLead(id);
  if (!lead?.quote || lead.quote.token !== token || lead.quote.acceptedAt) return;
  const accepted = await updateLead(id, (l) => {
    if (l.quote) l.quote.acceptedAt = new Date().toISOString();
    l.status = "won";
  });
  if (accepted?.quote) {
    const event = await notifyQuoteAccepted(accepted, accepted.quote);
    await updateLead(id, (l) => {
      l.emails.push(event);
    });
  }
  revalidatePath(`/quote/${id}`);
}
