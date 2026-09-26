"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendQuoteAction, type QuoteResult } from "../../leads-actions";

const input =
  "h-11 w-full rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600";

export function QuoteForm({
  id,
  defaultCurrency,
  resend,
  validDefault,
}: {
  id: string;
  defaultCurrency: "AED" | "QAR";
  resend: boolean;
  validDefault: string;
}) {
  const [state, action, pending] = useActionState<QuoteResult | null, FormData>(
    sendQuoteAction.bind(null, id),
    null,
  );

  return (
    <form action={action} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800">
        Quote total
        <input name="amount" required inputMode="decimal" placeholder="4500" className={input} />
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800">
          Currency
          <select name="currency" defaultValue={defaultCurrency} className={input}>
            <option>AED</option>
            <option>QAR</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800">
          VAT
          <select name="vat" defaultValue="excluded" className={input}>
            <option value="excluded">Excluding VAT</option>
            <option value="included">Including VAT</option>
            <option value="none">No VAT line</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800">
        Valid until
        <input name="validUntil" type="date" required defaultValue={validDefault} className={input} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800">
        Lead time
        <input name="leadTime" placeholder="e.g. 7 working days after approval" className={input} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800 sm:col-span-2">
        What the quote includes
        <textarea name="scope" required rows={4} className="rounded-[var(--radius-md)] border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-800 sm:col-span-2">
        Notes to the customer (optional)
        <textarea name="notes" rows={2} className="rounded-[var(--radius-md)] border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600" />
      </label>
      {state ? (
        <p role="status" className={`text-sm sm:col-span-2 ${state.ok && state.emailed ? "text-green-700" : state.ok ? "text-amber-700" : "text-red-600"}`}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : resend ? "Send revised quote" : "Email quote to customer"}
        </Button>
      </div>
    </form>
  );
}
