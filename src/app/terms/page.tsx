import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";
import { PageHero } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Terms | Gifts Gulf Advertising",
  description:
    "The terms that apply to using the Gifts Gulf Advertising website.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default async function TermsPage() {
  const settings = await getSettings();

  return (
    <div>
      <PageHero
        size="md"
        crumbs={[{ name: "Home", href: "/" }, { name: "Terms" }]}
        eyebrow="Last updated: September 2026"
        title="Terms of Use"
      />
      <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">

      <div className="flex flex-col gap-10 text-[17px] leading-[1.75] text-ink/75">
        <p>
          These terms cover use of this website, {siteConfig.url}. Using
          this site means accepting the terms below.
        </p>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Website content
          </h2>
          <p className="mt-3">
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
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Enquiries and quotes
          </h2>
          <p className="mt-3">
            Submitting the contact form or requesting a quote does not
            create a binding order. A project is confirmed once both sides
            agree on scope, pricing and timeline directly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Intellectual property
          </h2>
          <p className="mt-3">
            The design, photography and written content on this site
            belong to {siteConfig.name} unless otherwise credited, and
            aren&apos;t to be reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Acceptable use
          </h2>
          <p className="mt-3">
            This site shouldn&apos;t be used to submit false enquiries,
            attempt to disrupt the site, or access it in a way not intended
            by its normal design.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Questions
          </h2>
          <p className="mt-3">
            For any question about these terms, contact{" "}
            <a
              href={`mailto:${settings.contactEmail}`}
              className="text-brand underline underline-offset-4"
            >
              {settings.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
      </div>
      </div>
    </div>
  );
}
