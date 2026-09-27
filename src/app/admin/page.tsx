import type { Metadata } from "next";
import Link from "next/link";
import { isAdminConfigured, isAuthenticated } from "@/lib/admin-auth";
import { LEAD_STATUSES, getLeads, isLeadsStoreConfigured } from "@/lib/leads";
import { ADMIN_NOTIFY_EMAIL, isEmailConfigured } from "@/lib/email/send";
import { serviceLabel } from "@/lib/email/templates";
import { LoginForm } from "./login-form";
import { AdminShell, StatusBadge } from "./admin-shell";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

export const metadata: Metadata = {
  title: "Admin | Gifts Gulf Advertising",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function Notice({ tone, children }: { tone: "amber" | "red"; children: React.ReactNode }) {
  const c =
    tone === "amber"
      ? "border-amber-300 bg-amber-50 text-amber-800"
      : "border-red-300 bg-red-50 text-red-700";
  return (
    <div className={`mb-4 rounded-[var(--radius-md)] border border-dashed p-4 text-sm ${c}`}>
      {children}
    </div>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  if (!(await isAuthenticated())) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="font-heading text-2xl font-bold text-zinc-900">Admin</h1>
        <p className="mt-2 text-sm text-zinc-600">Sign in to see enquiries and site settings.</p>
        {!isAdminConfigured() ? (
          <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-700">
            ADMIN_PASSWORD isn&apos;t set for this project. Add it under Vercel &rarr;
            Settings &rarr; Environment Variables to enable admin access.
          </div>
        ) : null}
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    );
  }

  const { status } = await searchParams;
  const all = await getLeads();
  const leads = LEAD_STATUSES.includes(status as never)
    ? all.filter((l) => l.status === status)
    : all;
  const count = (s: string) => all.filter((l) => l.status === s).length;

  return (
    <AdminShell active="leads">
      <h1 className="font-heading text-2xl font-bold text-zinc-900">Leads</h1>
      <p className="mt-1 mb-6 text-sm text-zinc-600">
        Quote requests from the website, newest first. New enquiries are also emailed to{" "}
        {ADMIN_NOTIFY_EMAIL}.
      </p>

      {!isLeadsStoreConfigured() ? (
        <Notice tone="amber">
          No Redis store is connected, so enquiries can&apos;t be saved here yet. They are still
          emailed to {ADMIN_NOTIFY_EMAIL} if email is set up. Add a Redis (Upstash)
          integration in the Vercel dashboard to capture leads in this portal.
        </Notice>
      ) : null}
      {!isEmailConfigured() ? (
        <Notice tone="amber">
          Email isn&apos;t set up. Add SMTP_USER and SMTP_PASS in Vercel environment
          variables to send admin alerts and customer emails.
        </Notice>
      ) : null}

      <div className="mb-6 flex flex-wrap gap-2 text-sm">
        <Link href="/admin" className={`rounded-full border px-3 py-1 ${!status ? "border-green-600 bg-green-50 text-green-800" : "border-zinc-200 text-zinc-600"}`}>
          All ({all.length})
        </Link>
        {LEAD_STATUSES.map((s) => (
          <Link key={s} href={`/admin?status=${s}`} className={`rounded-full border px-3 py-1 capitalize ${status === s ? "border-green-600 bg-green-50 text-green-800" : "border-zinc-200 text-zinc-600"}`}>
            {s} ({count(s)})
          </Link>
        ))}
      </div>

      {leads.length === 0 ? (
        <p className="text-sm text-zinc-500">No enquiries here yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {leads.map((lead) => (
            <Link
              key={lead.id}
              href={`/admin/leads/${lead.id}`}
              className="rounded-[var(--radius-lg)] border border-zinc-200 p-4 transition-colors hover:border-green-600"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-heading text-sm font-semibold text-zinc-900">
                  {lead.name}
                  {lead.company ? <span className="font-normal text-zinc-500"> · {lead.company}</span> : null}
                </p>
                <div className="flex items-center gap-3">
                  <StatusBadge status={lead.status} />
                  <span className="font-mono text-xs text-zinc-400">
                    {dateFormatter.format(new Date(lead.submittedAt))}
                  </span>
                </div>
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                {serviceLabel(lead.service)} · {lead.item} · qty {lead.quantity} · {lead.city}
              </p>
              <p className="mt-1 font-mono text-xs text-zinc-400">{lead.ref}</p>
            </Link>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
