import type { Metadata } from "next";
import { isAdminConfigured, isAuthenticated } from "@/lib/admin-auth";
import { getSettings, isSettingsStoreConfigured } from "@/lib/settings";
import { LoginForm } from "./login-form";
import { SettingsForm } from "./settings-form";

export const metadata: Metadata = {
  title: "Admin | Gifts Gulf Advertising",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await isAuthenticated();
  const settings = await getSettings();

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20">
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

      <div className="mt-8">
        {authed ? (
          <SettingsForm settings={settings} />
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}
