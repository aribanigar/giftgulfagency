import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Gifts Gulf Media & Advertising",
  description: "Get in touch with Gifts Gulf for signage, print, events, fit-outs, and digital work.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Let&apos;s talk about the work.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">
            Whether it&apos;s one service or all of them, tell us what
            you&apos;re working on and we&apos;ll follow up with next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-heading text-xl font-semibold text-zinc-900">
              Reach us directly
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <a
                href="mailto:hello@giftsgulf.com"
                className="flex items-start gap-3 text-sm text-zinc-700 hover:text-green-700"
              >
                <Mail className="mt-0.5 h-5 w-5 text-green-600" />
                hello@giftsgulf.com
              </a>
              <a
                href="tel:+9740000000"
                className="flex items-start gap-3 text-sm text-zinc-700 hover:text-green-700"
              >
                <Phone className="mt-0.5 h-5 w-5 text-green-600" />
                +974 0000 0000
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-700">
                <MapPin className="mt-0.5 h-5 w-5 text-green-600" />
                Doha, Qatar
              </div>
            </div>
            <p className="mt-8 rounded-[var(--radius-md)] border border-dashed border-zinc-300 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-500">
              Placeholder contact details — replace with the real email,
              phone number and address before this goes live.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
