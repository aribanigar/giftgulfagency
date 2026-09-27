import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";
import { PageHero } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Privacy Policy | Gifts Gulf Advertising",
  description:
    "How Gifts Gulf Advertising collects and uses information submitted through this website.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default async function PrivacyPage() {
  const settings = await getSettings();

  return (
    <div>
      <PageHero
        size="md"
        crumbs={[{ name: "Home", href: "/" }, { name: "Privacy" }]}
        eyebrow="Last updated: September 2026"
        title="Privacy Policy"
      />
      <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">

      <div className="flex flex-col gap-10 text-[17px] leading-[1.75] text-ink/75">
        <p>
          This page explains what information {siteConfig.name} collects
          through this website, and how it&apos;s used. It applies to{" "}
          {siteConfig.url} and covers information submitted through the
          quote form, nothing more.
        </p>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            What we collect
          </h2>
          <p className="mt-3">
            When the quote form is submitted, we collect the details you
            enter: your name, company, email address, phone number, the
            service and item you need, quantity, size or specifications,
            location, deadline, installation and artwork needs, budget range,
            preferred contact method and your message. That&apos;s the only
            personal information this site collects directly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            How it&apos;s used
          </h2>
          <p className="mt-3">
            Contact form submissions are used only to respond to the
            enquiry, whether that&apos;s a quote request, a question, or
            anything else raised through the form. Information isn&apos;t
            sold, rented or shared with third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            How it&apos;s stored
          </h2>
          <p className="mt-3">
            Submissions are emailed to our team and to you as a confirmation
            through our email provider, and stored securely to allow the team
            to follow up,
            and are kept only for as long as needed to respond to and
            resolve the enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Cookies
          </h2>
          <p className="mt-3">
            This site does not use advertising or tracking cookies. Any
            cookies in use are strictly functional, such as keeping an
            admin session signed in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Your information
          </h2>
          <p className="mt-3">
            To ask what information we hold about you, or to request it be
            deleted, contact us at{" "}
            <a
              href={`mailto:${settings.contactEmail}`}
              className="text-brand underline underline-offset-4"
            >
              {settings.contactEmail}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Changes to this policy
          </h2>
          <p className="mt-3">
            If how this site collects or uses information changes, this
            page will be updated to reflect it.
          </p>
        </section>
      </div>
      </div>
      </div>
    </div>
  );
}
