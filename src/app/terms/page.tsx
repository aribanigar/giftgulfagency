import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Terms | Gifts Gulf Advertising",
  description:
    "The terms that apply to using the Gifts Gulf Advertising website.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default async function TermsPage() {
  const settings = await getSettings();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-sm text-zinc-500">Last updated: September 2026</p>

      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-zinc-700 sm:text-base">
        <p>
          These terms cover use of this website, {siteConfig.url}. Using
          this site means accepting the terms below.
        </p>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Website content
          </h2>
          <p className="mt-2">
            The content on this site, including text, photography and
            design, describes the services {siteConfig.name} offers across
            printing, signage, events &amp; exhibitions, packaging, gift
            items and social media. It&apos;s provided for general
            information, and specific pricing, timelines and specifications
            for any project are confirmed directly with the team, not
            drawn from this website alone.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Enquiries and quotes
          </h2>
          <p className="mt-2">
            Submitting the contact form or requesting a quote does not
            create a binding order. A project is confirmed once both sides
            agree on scope, pricing and timeline directly.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Intellectual property
          </h2>
          <p className="mt-2">
            The design, photography and written content on this site
            belong to {siteConfig.name} unless otherwise credited, and
            aren&apos;t to be reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Acceptable use
          </h2>
          <p className="mt-2">
            This site shouldn&apos;t be used to submit false enquiries,
            attempt to disrupt the site, or access it in a way not intended
            by its normal design.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Questions
          </h2>
          <p className="mt-2">
            For any question about these terms, contact{" "}
            <a
              href={`mailto:${settings.contactEmail}`}
              className="text-green-700 hover:underline"
            >
              {settings.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
