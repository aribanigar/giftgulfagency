import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import { getSettings, isSettingsStoreConfigured } from "@/lib/settings";
import { SettingsForm } from "../settings-form";
import { AdminShell } from "../admin-shell";

export const metadata: Metadata = {
  title: "Site settings | Gifts Gulf Advertising",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  if (!(await isAuthenticated())) redirect("/admin");
  const settings = await getSettings();
  return (
    <AdminShell active="settings">
      <h1 className="font-heading text-2xl font-bold text-zinc-900">Site settings</h1>
      <p className="mt-2 text-sm text-zinc-600">Update the contact details shown on the public site.</p>
      {!isSettingsStoreConfigured() ? (
        <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          No Redis store connected yet. Changes made here won&apos;t persist until a Redis
          (Upstash) integration is added to this project in the Vercel dashboard.
        </div>
      ) : null}
      <div className="mt-8 max-w-xl">
        <SettingsForm settings={settings} />
      </div>
    </AdminShell>
  );
}
