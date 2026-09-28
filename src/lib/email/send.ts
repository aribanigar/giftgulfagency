import nodemailer from "nodemailer";

export type SendResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string };

export const ADMIN_NOTIFY_EMAIL =
  process.env.ADMIN_NOTIFY_EMAIL ?? "arfatshah.qa@gmail.com";

function smtpConfig() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  const port = Number(process.env.SMTP_PORT ?? 465);
  return {
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

export function isEmailConfigured() {
  return smtpConfig() !== null;
}

export async function sendEmail(input: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const config = smtpConfig();
  if (!config) {
    console.warn(
      `[email skipped: SMTP_USER/SMTP_PASS not set] to=${input.to} subject="${input.subject}"`,
    );
    return { ok: false, skipped: true, error: "Email isn't configured yet." };
  }
  try {
    const transport = nodemailer.createTransport(config);
    await transport.sendMail({
      from: process.env.EMAIL_FROM ?? `Gifts Gulf Advertising <${config.auth.user}>`,
      to: input.to,
      subject: input.subject,
      html: input.html,
      ...(input.replyTo ? { replyTo: input.replyTo } : {}),
    });
    return { ok: true };
  } catch (err) {
    console.error("[email failed]", err);
    return { ok: false, error: "The mail server rejected or could not send the message." };
  }
}
