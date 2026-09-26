import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import { LEAD_STATUSES, getLead } from "@/lib/leads";
import { formatMoney, serviceLabel } from "@/lib/email/templates";
import { siteConfig } from "@/lib/site-config";
import { AdminShell, StatusBadge } from "../../admin-shell";
import { addNoteAction, setStatusAction } from "../../leads-actions";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Lead | Gifts Gulf Advertising",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const fmt = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" });

function defaultValidUntil() {
  return new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10);
}

const emailLabels: Record<string, string> = {
  "enquiry-admin": "Admin alert",
  "enquiry-customer": "Confirmation to customer",
  "quote-customer": "Quote to customer",
  "accepted-admin": "Quote accepted alert",
};

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) redirect("/admin");
  const { id } = await params;
  const lead = await getLead(id);
  if (!lead) notFound();

  const detail: [string, string][] = [
    ["Service", serviceLabel(lead.service)],
    ["Item", lead.item],
    ["Quantity", lead.quantity],
    ["Size / specs", lead.size],
    ["Location", lead.city],
    ["Needed by", lead.deadline],
    ["Installation", lead.installation],
    ["Artwork", lead.artwork],
    ["Budget", lead.budget],
  ];
  const q = lead.quote;
  const currency = lead.city.includes("Doha") || lead.city.includes("Qatar") ? "QAR" : "AED";

  return (
    <AdminShell active="leads">
      <Link href="/admin" className="text-sm text-zinc-500 hover:text-green-700">&larr; All leads</Link>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-bold text-zinc-900">
            {lead.name}
            {lead.company ? <span className="font-normal text-zinc-500"> · {lead.company}</span> : null}
          </h1>
          <p className="mt-1 font-mono text-xs text-zinc-400">{lead.ref} · {fmt.format(new Date(lead.submittedAt))}</p>
        </div>
        <StatusBadge status={lead.status} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <section className="rounded-[var(--radius-lg)] border border-zinc-200 p-5">
            <h2 className="font-heading text-base font-semibold text-zinc-900">Contact</h2>
            <p className="mt-2 text-sm text-zinc-700">
              <a className="hover:text-green-700" href={`mailto:${lead.email}`}>{lead.email}</a>
              {" · "}
              <a className="hover:text-green-700" href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}>{lead.phone}</a>
              {" · "}
              <a className="hover:text-green-700" href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </p>
            <p className="mt-1 text-xs text-zinc-500">Prefers: {lead.contactMethod}</p>
          </section>

          <section className="rounded-[var(--radius-lg)] border border-zinc-200 p-5">
            <h2 className="font-heading text-base font-semibold text-zinc-900">Request</h2>
            <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              {detail.filter(([, v]) => v).map(([k, v]) => (
                <div key={k}><dt className="text-xs text-zinc-500">{k}</dt><dd className="text-zinc-900">{v}</dd></div>
              ))}
            </dl>
            <p className="mt-4 whitespace-pre-wrap text-sm text-zinc-700">{lead.message}</p>
          </section>

          <section className="rounded-[var(--radius-lg)] border border-zinc-200 p-5">
            <h2 className="font-heading text-base font-semibold text-zinc-900">
              {q ? "Quote sent" : "Send a quote"}
            </h2>
            {q ? (
              <div className="mt-3 rounded-[var(--radius-md)] bg-green-50 p-4 text-sm text-zinc-800">
                <p className="text-lg font-bold">{formatMoney(q)} <span className="text-sm font-normal text-zinc-500">{q.vat === "excluded" ? "excl. VAT" : q.vat === "included" ? "incl. VAT" : ""}</span></p>
                <p className="mt-1 text-xs text-zinc-500">Sent {fmt.format(new Date(q.sentAt))} · valid until {q.validUntil}{q.acceptedAt ? ` · accepted ${fmt.format(new Date(q.acceptedAt))}` : ""}</p>
                <p className="mt-2 whitespace-pre-wrap">{q.scope}</p>
                <p className="mt-3 break-all text-xs text-zinc-500">Customer link: {siteConfig.url}/quote/{lead.id}?t={q.token}</p>
              </div>
            ) : null}
            <div className="mt-4">
              <QuoteForm id={lead.id} defaultCurrency={currency} resend={Boolean(q)} validDefault={defaultValidUntil()} />
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-8">
          <section className="rounded-[var(--radius-lg)] border border-zinc-200 p-5">
            <h2 className="font-heading text-base font-semibold text-zinc-900">Status</h2>
            <form action={setStatusAction.bind(null, lead.id)} className="mt-3 flex gap-2">
              <select key={lead.status} name="status" defaultValue={lead.status} className="h-10 flex-1 rounded-[var(--radius-md)] border border-zinc-300 bg-white px-2 text-sm capitalize">
                {LEAD_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="rounded-[var(--radius-md)] bg-zinc-900 px-3 text-sm font-medium text-white">Save</button>
            </form>
          </section>

          <section className="rounded-[var(--radius-lg)] border border-zinc-200 p-5">
            <h2 className="font-heading text-base font-semibold text-zinc-900">Internal notes</h2>
            <form action={addNoteAction.bind(null, lead.id)} className="mt-3 flex flex-col gap-2">
              <textarea name="note" rows={3} className="rounded-[var(--radius-md)] border border-zinc-300 px-3 py-2 text-sm" placeholder="Called customer, wants revised size..." />
              <button className="self-start rounded-[var(--radius-md)] bg-zinc-900 px-3 py-2 text-sm font-medium text-white">Add note</button>
            </form>
            <ul className="mt-4 flex flex-col gap-3">
              {lead.notes.map((n) => (
                <li key={n.at} className="text-sm text-zinc-700"><span className="block font-mono text-xs text-zinc-400">{fmt.format(new Date(n.at))}</span>{n.text}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[var(--radius-lg)] border border-zinc-200 p-5">
            <h2 className="font-heading text-base font-semibold text-zinc-900">Email log</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {lead.emails.map((e, i) => (
                <li key={i} className="text-zinc-700">
                  <span className={e.ok ? "text-green-700" : "text-red-600"}>{e.ok ? "Sent" : "Failed"}</span>{" "}
                  {emailLabels[e.kind] ?? e.kind}
                  <span className="block text-xs text-zinc-400">{e.to} · {fmt.format(new Date(e.at))}{e.error ? ` · ${e.error}` : ""}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </AdminShell>
  );
}
