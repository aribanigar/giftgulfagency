export type SendResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string };

export const ADMIN_NOTIFY_EMAIL =
  process.env.ADMIN_NOTIFY_EMAIL ?? "arfatshah.qa@gmail.com";

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

// Resend's shared onboarding@resend.dev sender only delivers to the Resend
// account owner. Set EMAIL_FROM to an address on a verified domain to email
// customers.
const FROM =
  process.env.EMAIL_FROM ?? "Gifts Gulf Advertising <onboarding@resend.dev>";

export async function sendEmail(input: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn(
      `[email skipped: RESEND_API_KEY not set] to=${input.to} subject="${input.subject}"`,
    );
    return { ok: false, skipped: true, error: "Email isn't configured yet." };
  }
  try {
    const res = await fetch(process.env.RESEND_API_URL ?? "https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [input.to],
        subject: input.subject,
        html: input.html,
        ...(input.replyTo ? { reply_to: input.replyTo } : {}),
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`[email failed ${res.status}] ${body}`);
      return { ok: false, error: `Email provider returned ${res.status}.` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[email error]", err);
    return { ok: false, error: "Could not reach the email provider." };
  }
}
