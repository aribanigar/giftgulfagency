import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Kicker } from "@/components/kicker";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Contact Gifts Gulf Advertising | Printing in UAE & Qatar",
  description:
    "Get in touch with Gifts Gulf Advertising for printing, signages, events & exhibitions, packaging, gift items and social media across Dubai, Abu Dhabi, Sharjah and Doha.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default async function ContactPage() {
  const settings = await getSettings();
  const telHref = `tel:${settings.contactPhone.replace(/[^\d+]/g, "")}`;

  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Kicker>Contact</Kicker>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Let&apos;s talk about the work.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-600">
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
                href={`mailto:${settings.contactEmail}`}
                className="flex items-start gap-3 text-sm text-zinc-700 hover:text-green-700"
              >
                <Mail className="mt-0.5 h-5 w-5 text-green-600" />
                {settings.contactEmail}
              </a>
              <a
                href={telHref}
                className="flex items-start gap-3 text-sm text-zinc-700 hover:text-green-700"
              >
                <Phone className="mt-0.5 h-5 w-5 text-green-600" />
                {settings.contactPhone}
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-700">
                <MapPin className="mt-0.5 h-5 w-5 text-green-600" />
                {settings.address}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
