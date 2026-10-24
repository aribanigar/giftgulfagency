"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitQuickQuoteAction, type ContactResult } from "@/app/contact/actions";
import { QUICK_QUOTE_CITIES } from "@/lib/quick-quote";

const input =
  "h-11 w-full border border-white/20 bg-white/5 px-3 text-base text-white lg:text-[15px] placeholder:text-white/40 outline-none transition-colors focus:border-brand-bright";

export function QuickQuoteForm({
  item,
  service,
  source,
  city,
}: {
  item?: string;
  service?: string;
  source: string;
  city?: string;
}) {
  const [state, action, pending] = useActionState<ContactResult | null, FormData>(submitQuickQuoteAction, null);

  if (state?.ok) {
    return (
      <div role="status" className="flex flex-col gap-3">
        <p className="eyebrow eyebrow-bright">Request received</p>
        <p className="text-lg font-semibold">Thank you. Your reference is {state.ref}.</p>
        <p className="text-sm leading-relaxed text-white/70">
          {state.emailedCustomer
            ? "We've emailed you a copy of your request. Our team will get back to you with questions or a quote."
            : "Our team will get back to you with questions or a quote."}
        </p>
      </div>
    );
  }

  return (
    <form action={action} data-enquiry-form className="flex flex-col gap-3">
      <input type="hidden" name="service" value={service ?? ""} />
      <input type="hidden" name="source" value={source} />
      <div aria-hidden className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="sr-only" htmlFor="qq-item">What do you need?</label>
      <input id="qq-item" name="item" required defaultValue={item} placeholder="What do you need?" className={input} />
      <div className="grid grid-cols-2 gap-3">
        <label className="sr-only" htmlFor="qq-qty">Quantity</label>
        <input id="qq-qty" name="quantity" placeholder="Quantity" className={input} />
        <label className="sr-only" htmlFor="qq-city">City</label>
        <select id="qq-city" name="city" required defaultValue={city ?? ""} className={`${input} appearance-none`}>
          <option value="" disabled className="text-ink">City</option>
          {QUICK_QUOTE_CITIES.map((c) => (
            <option key={c} value={c} className="text-ink">{c}</option>
          ))}
        </select>
      </div>
      <label className="sr-only" htmlFor="qq-name">Name</label>
      <input id="qq-name" name="name" required autoComplete="name" placeholder="Your name" className={input} />
      <label className="sr-only" htmlFor="qq-email">Email</label>
      <input id="qq-email" name="email" type="email" required autoComplete="email" placeholder="Email" className={input} />
      <label className="sr-only" htmlFor="qq-phone">Phone</label>
      <input id="qq-phone" name="phone" type="tel" required autoComplete="tel" placeholder="Phone with country code" className={input} />
      <label className="sr-only" htmlFor="qq-msg">Details</label>
      <textarea id="qq-msg" name="message" rows={3} placeholder="Sizes, deadline, anything else (optional)" className={`${input} h-auto py-2.5`} />
      {state && !state.ok ? (
        <p role="alert" className="text-sm text-red-300">{state.error}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-1 h-12 bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright disabled:opacity-60"
      >
        {pending ? "Sending..." : "Request a quote"}
      </button>
      <p className="text-xs leading-relaxed text-white/50">
        Prefer the detailed form? <Link href="/contact" className="underline underline-offset-2 hover:text-white">Full quote request</Link>
      </p>
    </form>
  );
}
