import type { Metadata } from "next";
import { isAdminConfigured, isAuthenticated } from "@/lib/admin-auth";
import { getSettings, isSettingsStoreConfigured } from "@/lib/settings";
import { getLeads, isLeadsStoreConfigured } from "@/lib/leads";
import { LoginForm } from "./login-form";
import { SettingsForm } from "./settings-form";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export const metadata: Metadata = {
  title: "Admin | Gifts Gulf Advertising",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await isAuthenticated();
  const settings = await getSettings();
  const leads = authed ? await getLeads() : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-heading text-2xl font-bold text-zinc-900">
        Site settings
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Update the contact details shown on the public site.
      </p>

      {!isSettingsStoreConfigured() ? (
        <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          No Redis store connected yet. Changes made here won&apos;t
          persist until a Redis (Upstash) integration is added to this
          project in the Vercel dashboard. The site works fine with the
          defaults in the meantime.
        </div>
      ) : null}

      {!isAdminConfigured() ? (
        <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-700">
          ADMIN_PASSWORD isn&apos;t set for this project. Add it under
          Vercel &rarr; Settings &rarr; Environment Variables to enable
          admin access.
        </div>
      ) : null}

      <div className="mt-8 max-w-xl">
        {authed ? (
          <SettingsForm settings={settings} />
        ) : (
          <LoginForm />
        )}
      </div>

      {authed ? (
        <div className="mt-16">
          <h2 className="font-heading text-xl font-bold text-zinc-900">
            Leads
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Submissions from the contact form, most recent first.
          </p>

          {!isLeadsStoreConfigured() ? (
            <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
              No Redis store connected yet, so the contact form can&apos;t
              save leads. Add a Redis (Upstash) integration in the Vercel
              dashboard to start capturing enquiries.
            </div>
          ) : leads.length === 0 ? (
            <p className="mt-6 text-sm text-zinc-500">
              No enquiries yet. Submissions from /contact will show up
              here.
            </p>
          ) : (
            <div className="mt-6 flex flex-col gap-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="rounded-[var(--radius-lg)] border border-zinc-200 p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-heading text-sm font-semibold text-zinc-900">
                      {lead.name}
                    </p>
                    <p className="font-mono text-xs text-zinc-400">
                      {dateFormatter.format(new Date(lead.submittedAt))}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">
                    <a
                      href={`mailto:${lead.email}`}
                      className="hover:text-green-700"
                    >
                      {lead.email}
                    </a>
                    {lead.service ? ` · ${lead.service}` : ""}
                  </p>
                  <p className="mt-2 text-sm text-zinc-700">
                    {lead.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
