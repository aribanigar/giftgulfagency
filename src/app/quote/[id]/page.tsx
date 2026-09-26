import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLead } from "@/lib/leads";
import { formatMoney } from "@/lib/email/templates";
import { Button } from "@/components/ui/button";
import { acceptQuoteAction } from "./actions";

export const metadata: Metadata = {
  title: "Your quote | Gifts Gulf Advertising",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function QuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ t?: string }>;
}) {
  const [{ id }, { t }] = await Promise.all([params, searchParams]);
  const lead = await getLead(id);
  const q = lead?.quote;
  if (!lead || !q || !t || q.token !== t) notFound();

  const vat = q.vat === "excluded" ? "Excluding VAT" : q.vat === "included" ? "Including VAT" : "";

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-xs text-zinc-400">{lead.ref}</p>
      <h1 className="mt-1 font-heading text-2xl font-bold text-zinc-900">Your quote, {lead.name}</h1>
      <div className="mt-6 rounded-[var(--radius-xl)] border border-green-200 bg-green-50 p-6">
        <p className="text-sm text-zinc-600">Quote total</p>
        <p className="font-heading text-3xl font-bold text-zinc-900">{formatMoney(q)}</p>
        {vat ? <p className="text-sm text-zinc-600">{vat}</p> : null}
      </div>
      <dl className="mt-6 flex flex-col gap-4 text-sm">
        <div><dt className="text-xs text-zinc-500">For</dt><dd className="text-zinc-900">{lead.item} (qty {lead.quantity})</dd></div>
        <div><dt className="text-xs text-zinc-500">What is included</dt><dd className="whitespace-pre-wrap text-zinc-900">{q.scope}</dd></div>
        {q.leadTime ? <div><dt className="text-xs text-zinc-500">Lead time</dt><dd className="text-zinc-900">{q.leadTime}</dd></div> : null}
        <div><dt className="text-xs text-zinc-500">Valid until</dt><dd className="text-zinc-900">{q.validUntil}</dd></div>
        {q.notes ? <div><dt className="text-xs text-zinc-500">Notes</dt><dd className="whitespace-pre-wrap text-zinc-900">{q.notes}</dd></div> : null}
      </dl>
      {q.acceptedAt ? (
        <p className="mt-8 rounded-[var(--radius-md)] bg-green-50 p-4 text-sm font-medium text-green-800">
          Thank you. You accepted this quote and our team will be in touch to get started.
        </p>
      ) : (
        <form action={acceptQuoteAction.bind(null, lead.id, t)} className="mt-8">
          <Button type="submit" size="lg">Accept this quote</Button>
          <p className="mt-3 text-xs text-zinc-500">Need changes first? Reply to the quote email and we will revise it.</p>
        </form>
      )}
    </div>
  );
}
