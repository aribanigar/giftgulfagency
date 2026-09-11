import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Privacy Policy | Gifts Gulf Advertising",
  description:
    "How Gifts Gulf Advertising collects and uses information submitted through this website.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default async function PrivacyPage() {
  const settings = await getSettings();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-zinc-500">Last updated: September 2026</p>

      <div className="prose-sm mt-8 flex flex-col gap-6 text-sm leading-relaxed text-zinc-700 sm:text-base">
        <p>
          This page explains what information {siteConfig.name} collects
          through this website, and how it&apos;s used. It applies to{" "}
          {siteConfig.url} and covers information submitted through the
          contact form, nothing more.
        </p>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            What we collect
          </h2>
          <p className="mt-2">
            When the contact form is submitted, we collect the name, email
            address, selected service and message provided. That&apos;s the
            only personal information this site collects directly.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            How it&apos;s used
          </h2>
          <p className="mt-2">
            Contact form submissions are used only to respond to the
            enquiry, whether that&apos;s a quote request, a question, or
            anything else raised through the form. Information isn&apos;t
            sold, rented or shared with third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            How it&apos;s stored
          </h2>
          <p className="mt-2">
            Submissions are stored securely to allow the team to follow up,
            and are kept only for as long as needed to respond to and
            resolve the enquiry.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Cookies
          </h2>
          <p className="mt-2">
            This site does not use advertising or tracking cookies. Any
            cookies in use are strictly functional, such as keeping an
            admin session signed in.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Your information
          </h2>
          <p className="mt-2">
            To ask what information we hold about you, or to request it be
            deleted, contact us at{" "}
            <a
              href={`mailto:${settings.contactEmail}`}
              className="text-green-700 hover:underline"
            >
              {settings.contactEmail}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            Changes to this policy
          </h2>
          <p className="mt-2">
            If how this site collects or uses information changes, this
            page will be updated to reflect it.
          </p>
        </section>
      </div>
    </div>
  );
}
