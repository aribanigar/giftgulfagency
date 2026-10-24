"use client";

import { useActionState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/site-data";
import { submitContactAction, type ContactResult } from "./actions";

const initialState: ContactResult | null = null;

const inputClass =
  "h-12 w-full border border-ink/20 bg-white px-4 text-base text-ink lg:text-[15px] outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand";

const cities = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Other UAE emirate",
  "Doha",
  "Other Qatar location",
];

const budgets = [
  "Not sure yet",
  "Under AED 2,000 (about QAR 2,000)",
  "AED 2,000 to 10,000",
  "AED 10,000 to 50,000",
  "Above AED 50,000",
];

const installOptions = [
  "Not needed",
  "Installation needed",
  "Not sure, please advise",
];

const artworkOptions = [
  "I have print-ready artwork",
  "I have a logo, please prepare the artwork",
  "I need design from scratch",
];

function Field({
  id,
  label,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
        {required ? <span className="text-green-700"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="text-xs text-zinc-500">{hint}</p> : null}
    </div>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="eyebrow mb-2">
        {title}
      </legend>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactAction,
    initialState,
  );

  if (state?.ok) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-heading text-lg font-semibold text-zinc-900">
          Thanks. Your quote request is with our team.
        </h3>
        <p className="mt-2 text-sm text-zinc-600">
          Your reference is{" "}
          <span className="font-mono font-semibold text-zinc-900">
            {state.ref}
          </span>
          .{" "}
          {state.emailedCustomer
            ? "We've sent a confirmation to your email."
            : "We'll be in touch on the email and phone you gave us."}
        </p>
      </div>
    );
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form action={formAction} data-enquiry-form className="flex flex-col gap-8">
      <Group title="About you">
        <Field id="name" label="Full name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field id="company" label="Company">
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </Field>
        <Field id="email" label="Email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" required hint="Include the country code, e.g. +971 or +974.">
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+971 50 000 0000" className={inputClass} />
        </Field>
      </Group>

      <Group title="Your project">
        <Field id="service" label="Service" required>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a service</option>
            {sections.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field id="city" label="Where is it needed?" required>
          <select id="city" name="city" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a location</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field id="item" label="What exactly do you need?" required hint="For example: roll-up banners, 3D shop sign, 10 x 3 m exhibition stand, branded mugs.">
          <input id="item" name="item" type="text" required className={inputClass} />
        </Field>
        <Field id="quantity" label="Quantity" required hint="Number of pieces, or 1 for a single build.">
          <input id="quantity" name="quantity" type="text" required inputMode="numeric" className={inputClass} />
        </Field>
        <Field id="size" label="Size or specifications" hint="Dimensions, materials, colours, finishes, if you know them.">
          <input id="size" name="size" type="text" className={inputClass} />
        </Field>
        <Field id="deadline" label="Needed by" hint="Leave empty if flexible.">
          <input id="deadline" name="deadline" type="date" min={today} className={inputClass} />
        </Field>
      </Group>

      <Group title="A few more details">
        <Field id="installation" label="Installation">
          <select id="installation" name="installation" defaultValue={installOptions[0]} className={inputClass}>
            {installOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="artwork" label="Artwork">
          <select id="artwork" name="artwork" defaultValue={artworkOptions[0]} className={inputClass}>
            {artworkOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="budget" label="Budget range">
          <select id="budget" name="budget" defaultValue={budgets[0]} className={inputClass}>
            {budgets.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="contactMethod" label="Best way to reach you">
          <select id="contactMethod" name="contactMethod" defaultValue="Email" className={inputClass}>
            <option>Email</option>
            <option>Phone call</option>
            <option>WhatsApp</option>
          </select>
        </Field>
      </Group>

      <Field id="message" label="Project details" required hint="Tell us the job in your own words: where it goes, what it should say, anything we should know.">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          className="resize-none border border-ink/20 bg-white px-4 py-3 text-base text-ink lg:text-[15px] outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state && !state.ok ? (
        <p role="alert" className="text-sm text-red-600">{state.error}</p>
      ) : null}

      <Button type="submit" size="lg" className="h-14 self-start px-10 text-base" disabled={pending}>
        {pending ? "Sending…" : "Request My Quote"}
      </Button>
    </form>
  );
}
