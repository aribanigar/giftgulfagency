import { siteConfig } from "@/lib/site-config";
import { sections } from "@/lib/site-data";
import type { Lead, Quote } from "@/lib/leads";

const GREEN = "#16a34a";
const INK = "#18181b";
const MUTED = "#52525b";
const LINE = "#e4e4e7";

export function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function serviceLabel(slug: string) {
  if (slug === "other") return "Something else";
  return sections.find((s) => s.slug === slug)?.name ?? slug;
}

export function formatMoney(q: Pick<Quote, "amount" | "currency">) {
  return `${q.currency} ${q.amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

const vatText: Record<Quote["vat"], string> = {
  excluded: "Excluding VAT",
  included: "Including VAT",
  none: "",
};

function nl2br(value: string) {
  return esc(value).replace(/\r?\n/g, "<br>");
}

function shell(opts: { preheader: string; heading: string; body: string }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(opts.heading)}</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${INK};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(opts.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px 12px;"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid ${LINE};">
<tr><td style="padding:24px 32px 18px;"><img src="${siteConfig.url}/logo.png" alt="${esc(siteConfig.name)}" height="40" style="display:block;height:40px;width:auto;border:0;"></td></tr>
<tr><td style="height:4px;background:${GREEN};font-size:0;line-height:0;">&nbsp;</td></tr>
<tr><td style="padding:28px 32px 8px;">
<h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:${INK};">${esc(opts.heading)}</h1>
${opts.body}
</td></tr>
<tr><td style="padding:20px 32px 28px;border-top:1px solid ${LINE};font-size:12px;line-height:1.6;color:${MUTED};">
${esc(siteConfig.legalName)} &middot; Dubai, Abu Dhabi, Sharjah &amp; Doha<br>
<a href="${siteConfig.url}" style="color:${GREEN};text-decoration:none;">${siteConfig.url.replace(/^https?:\/\//, "")}</a>
</td></tr>
</table></td></tr></table></body></html>`;
}

const p = (text: string) =>
  `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:${INK};">${text}</p>`;

function button(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 18px;"><tr><td style="background:${GREEN};border-radius:6px;"><a href="${href}" style="display:inline-block;padding:12px 24px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">${esc(label)}</a></td></tr></table>`;
}

function rows(items: [string, string | undefined][]) {
  const body = items
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px 8px 0;font-size:13px;color:${MUTED};vertical-align:top;width:150px;border-bottom:1px solid ${LINE};">${esc(k)}</td><td style="padding:8px 0;font-size:14px;color:${INK};vertical-align:top;border-bottom:1px solid ${LINE};">${nl2br(v as string)}</td></tr>`,
    )
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">${body}</table>`;
}

function requestRows(lead: Lead): [string, string | undefined][] {
  return [
    ["Reference", lead.ref],
    ["Service", serviceLabel(lead.service)],
    ["Item / product", lead.item],
    ["Quantity", lead.quantity],
    ["Size / specifications", lead.size],
    ["Delivery city", lead.city],
    ["Needed by", lead.deadline],
    ["Installation", lead.installation],
    ["Artwork", lead.artwork],
    ["Budget", lead.budget],
    ["Details", lead.message],
  ];
}

/** 1. Customer: we received your enquiry. */
export function enquiryReceivedCustomer(lead: Lead) {
  return {
    subject: `We've received your enquiry (${lead.ref})`,
    html: shell({
      preheader: `Thanks ${lead.name}, your reference is ${lead.ref}.`,
      heading: "We've received your enquiry",
      body:
        p(`Hi ${esc(lead.name)},`) +
        p(
          `Thank you for contacting ${esc(siteConfig.name)}. Your request is with our team and your reference is <strong>${esc(lead.ref)}</strong>.`,
        ) +
        rows(requestRows(lead)) +
        `<p style="margin:0 0 6px;font-size:15px;font-weight:600;color:${INK};">What happens next</p>` +
        `<ol style="margin:0 0 18px;padding-left:20px;font-size:14px;line-height:1.7;color:${INK};">
<li>We review the details you sent and check anything that needs clarifying.</li>
<li>We send your quote to this email address.</li>
<li>You approve it with one click and we get started.</li></ol>` +
        p(
          `If anything above is wrong, or you have artwork or drawings to share, just reply to this email.`,
        ),
    }),
  };
}

/** 2. Admin: new enquiry. */
export function newEnquiryAdmin(lead: Lead) {
  const link = `${siteConfig.url}/admin/leads/${lead.id}`;
  return {
    subject: `New enquiry ${lead.ref}: ${serviceLabel(lead.service)} from ${lead.name}`,
    html: shell({
      preheader: `${lead.name}, ${lead.phone}, ${serviceLabel(lead.service)}`,
      heading: "New enquiry received",
      body:
        rows([
          ["Name", lead.name],
          ["Company", lead.company],
          ["Email", lead.email],
          ["Phone", lead.phone],
          ["Preferred contact", lead.contactMethod],
        ]) +
        rows(requestRows(lead)) +
        button(link, "Open in admin and send quote") +
        p(
          `Reply to this email to reach the customer directly, or call ${esc(lead.phone)}.`,
        ),
    }),
  };
}

/** 3. Customer: here is your quote. */
export function quoteCustomer(lead: Lead, quote: Quote) {
  const acceptUrl = `${siteConfig.url}/quote/${lead.id}?t=${quote.token}`;
  const vat = vatText[quote.vat];
  return {
    subject: `Your quote from ${siteConfig.name} (${lead.ref})`,
    html: shell({
      preheader: `Quote total ${formatMoney(quote)}. Valid until ${quote.validUntil}.`,
      heading: "Your quote is ready",
      body:
        p(`Hi ${esc(lead.name)},`) +
        p(
          `Thank you for your enquiry <strong>${esc(lead.ref)}</strong>. Here is our quote for ${esc(lead.item)}.`,
        ) +
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;"><tr><td style="padding:18px 20px;">
<div style="font-size:13px;color:${MUTED};">Quote total</div>
<div style="font-size:28px;font-weight:700;color:${INK};line-height:1.3;">${esc(formatMoney(quote))}</div>
${vat ? `<div style="font-size:13px;color:${MUTED};">${vat}</div>` : ""}
</td></tr></table>` +
        rows([
          ["What is included", quote.scope],
          ["Lead time", quote.leadTime],
          ["Valid until", quote.validUntil],
          ["Notes", quote.notes],
        ]) +
        button(acceptUrl, "Review and accept quote") +
        p(
          `Want to change quantities, sizes or finishes? Reply to this email and we will revise the quote.`,
        ),
    }),
  };
}

/** 4. Admin: customer accepted the quote. */
export function quoteAcceptedAdmin(lead: Lead, quote: Quote) {
  const link = `${siteConfig.url}/admin/leads/${lead.id}`;
  return {
    subject: `Quote accepted: ${lead.ref} (${formatMoney(quote)})`,
    html: shell({
      preheader: `${lead.name} accepted ${formatMoney(quote)}.`,
      heading: "Quote accepted",
      body:
        p(
          `<strong>${esc(lead.name)}</strong> accepted quote <strong>${esc(formatMoney(quote))}</strong> for ${esc(lead.item)}.`,
        ) +
        rows([
          ["Reference", lead.ref],
          ["Email", lead.email],
          ["Phone", lead.phone],
          ["Company", lead.company],
        ]) +
        button(link, "Open lead"),
    }),
  };
}
