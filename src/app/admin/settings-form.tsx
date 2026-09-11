"use client";

import { useActionState, type InputHTMLAttributes } from "react";
import { updateSettingsAction, logoutAction, type ActionResult } from "./actions";
import { Button } from "@/components/ui/button";
import type { SiteSettings } from "@/lib/settings";

const initialState: ActionResult | null = null;

const inputClass =
  "h-11 rounded-[var(--radius-md)] border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600";

function Field({
  id,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
      </label>
      <input id={id} name={id} className={inputClass} {...props} />
    </div>
  );
}

export function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [state, formAction, pending] = useActionState(
    updateSettingsAction,
    initialState,
  );

  return (
    <div className="flex flex-col gap-8">
      <form action={formAction} className="flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <h2 className="font-heading text-base font-semibold text-zinc-900">
            Contact details
          </h2>
          <Field
            id="contactEmail"
            label="Contact email"
            type="email"
            required
            defaultValue={settings.contactEmail}
          />
          <Field
            id="contactPhone"
            label="Contact phone"
            type="tel"
            required
            defaultValue={settings.contactPhone}
          />
          <Field
            id="address"
            label="Address line"
            type="text"
            required
            defaultValue={settings.address}
          />
        </section>

        <section className="flex flex-col gap-5 border-t border-zinc-200 pt-8">
          <div>
            <h2 className="font-heading text-base font-semibold text-zinc-900">
              Social links
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Leave blank to hide an icon from the footer.
            </p>
          </div>
          <Field
            id="socialFacebook"
            label="Facebook URL"
            type="url"
            placeholder="https://facebook.com/..."
            defaultValue={settings.socialLinks.facebook}
          />
          <Field
            id="socialInstagram"
            label="Instagram URL"
            type="url"
            placeholder="https://instagram.com/..."
            defaultValue={settings.socialLinks.instagram}
          />
          <Field
            id="socialLinkedin"
            label="LinkedIn URL"
            type="url"
            placeholder="https://linkedin.com/company/..."
            defaultValue={settings.socialLinks.linkedin}
          />
          <Field
            id="socialYoutube"
            label="YouTube URL"
            type="url"
            placeholder="https://youtube.com/@..."
            defaultValue={settings.socialLinks.youtube}
          />
          <Field
            id="socialX"
            label="X (Twitter) URL"
            type="url"
            placeholder="https://x.com/..."
            defaultValue={settings.socialLinks.x}
          />
        </section>

        <section className="flex flex-col gap-5 border-t border-zinc-200 pt-8">
          <div>
            <h2 className="font-heading text-base font-semibold text-zinc-900">
              Featured video
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              A YouTube, Vimeo, or direct .mp4 link. Leave blank to hide the
              video section from the homepage.
            </p>
          </div>
          <Field
            id="videoUrl"
            label="Video URL"
            type="url"
            placeholder="https://www.youtube.com/watch?v=..."
            defaultValue={settings.featuredVideo.url}
          />
          <Field
            id="videoTitle"
            label="Video title"
            type="text"
            defaultValue={settings.featuredVideo.title}
          />
        </section>

        {state && !state.ok ? (
          <p className="text-sm text-red-600">{state.error}</p>
        ) : null}
        {state?.ok ? (
          <p className="text-sm text-green-700">Changes saved.</p>
        ) : null}

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={pending}>
            {pending ? "Saving…" : "Save changes"}
          </Button>
        </div>
      </form>

      <form action={logoutAction} className="border-t border-zinc-200 pt-6">
        <Button type="submit" variant="ghost" size="sm">
          Sign out
        </Button>
      </form>
    </div>
  );
}
