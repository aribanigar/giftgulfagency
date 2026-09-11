"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/site-data";
import { submitContactAction, type ContactResult } from "./actions";

const initialState: ContactResult | null = null;

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactAction,
    initialState,
  );

  if (state?.ok) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-heading text-lg font-semibold text-zinc-900">
          Thanks. We&apos;ve got your message.
        </h3>
        <p className="mt-2 text-sm text-zinc-600">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="h-11 rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-medium text-zinc-800">
          Service you need
        </label>
        <select
          id="service"
          name="service"
          className="h-11 rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {sections.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-none rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
        />
      </div>

      {state && !state.ok ? (
        <p className="text-sm text-red-600">{state.error}</p>
      ) : null}

      <Button type="submit" size="lg" className="self-start" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
