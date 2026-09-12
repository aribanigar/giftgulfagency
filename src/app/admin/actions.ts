"use server";

import { revalidatePath } from "next/cache";
import {
  checkPassword,
  createSession,
  destroySession,
  isAdminConfigured,
} from "@/lib/admin-auth";
import { updateSettings, type SiteSettings } from "@/lib/settings";

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function loginAction(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  if (!isAdminConfigured()) {
    return {
      ok: false,
      error:
        "ADMIN_PASSWORD isn't set for this project yet. Add it in Vercel's Environment Variables first.",
    };
  }
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    return { ok: false, error: "Incorrect password." };
  }
  await createSession();
  return { ok: true };
}

export async function logoutAction() {
  await destroySession();
}

export async function updateSettingsAction(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const field = (name: string) => String(formData.get(name) ?? "").trim();

  const partial: Partial<SiteSettings> = {
    contactEmail: field("contactEmail"),
    contactPhone: field("contactPhone"),
    address: field("address"),
    socialLinks: {
      facebook: field("socialFacebook"),
      instagram: field("socialInstagram"),
      linkedin: field("socialLinkedin"),
      tiktok: field("socialTiktok"),
      youtube: field("socialYoutube"),
      x: field("socialX"),
    },
    featuredVideo: {
      url: field("videoUrl"),
      title: field("videoTitle") || "See Gifts Gulf Advertising in action",
    },
  };

  try {
    await updateSettings(partial);
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Could not save settings.",
    };
  }

  revalidatePath("/", "layout");
  return { ok: true };
}
