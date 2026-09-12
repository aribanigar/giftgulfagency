import Link from "next/link";
import { sections, markets } from "@/lib/site-data";
import { getSettings } from "@/lib/settings";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  YoutubeIcon,
  XIcon,
} from "@/components/social-icons";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export async function Footer() {
  const year = new Date().getFullYear();
  const settings = await getSettings();
  const telHref = `tel:${settings.contactPhone.replace(/[^\d+]/g, "")}`;

  // Facebook, Instagram, LinkedIn & TikTok always show as brand touchpoints,
  // even before a URL is connected in admin settings; YouTube and X only
  // appear once a link is actually set.
  const alwaysShownSocials = [
    { url: settings.socialLinks.facebook, label: "Facebook", Icon: FacebookIcon },
    { url: settings.socialLinks.instagram, label: "Instagram", Icon: InstagramIcon },
    { url: settings.socialLinks.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { url: settings.socialLinks.tiktok, label: "TikTok", Icon: TikTokIcon },
  ];
  const optionalSocials = [
    { url: settings.socialLinks.youtube, label: "YouTube", Icon: YoutubeIcon },
    { url: settings.socialLinks.x, label: "X", Icon: XIcon },
  ].filter((s) => s.url);
  const socials = [...alwaysShownSocials, ...optionalSocials];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-tight text-zinc-900">
                Gifts Gulf
              </span>
              <span className="mt-0.5 text-[10px] font-medium tracking-[0.2em] text-green-700">
                Media &amp; Advertising
              </span>
            </Link>
            <p className="mt-4 max-w-[30ch] text-sm text-zinc-600">
              Every brand touchpoint, one partner. Printing, signages,
              events and gifting, across the UAE and Qatar.
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              {markets.join(" · ")}
            </p>
            <div className="mt-2 flex flex-col text-sm text-zinc-600">
              <a href={`mailto:${settings.contactEmail}`} className="inline-block py-1.5 hover:text-green-700">
                {settings.contactEmail}
              </a>
              <a href={telHref} className="inline-block py-1.5 hover:text-green-700">
                {settings.contactPhone}
              </a>
            </div>
            {socials.length > 0 ? (
              <div className="mt-5 flex gap-3">
                {socials.map(({ url, label, Icon }) =>
                  url ? (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-green-600 hover:text-green-700"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} (coming soon)`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-300"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  ),
                )}
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-900">
              Services
            </h3>
            <ul className="mt-2 flex flex-col">
              {sections.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="inline-block py-1.5 text-sm text-zinc-600 hover:text-green-700"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-900">
              Company
            </h3>
            <ul className="mt-2 flex flex-col">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block py-1.5 text-sm text-zinc-600 hover:text-green-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Gifts Gulf Advertising. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="inline-block py-1.5 hover:text-green-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-block py-1.5 hover:text-green-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
