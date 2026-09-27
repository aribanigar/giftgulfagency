import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sections, markets } from "@/lib/site-data";
import { getSettings } from "@/lib/settings";
import { locations } from "@/lib/locations";
import { productsForSection } from "@/lib/products";
import { blogPosts } from "@/lib/blog-data";
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
  { href: "/directory", label: "Directory" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

// Every section that has dedicated product pages, plus the location and
// guide pages — a real sitemap of what's on the site, not a keyword-stuffed
// link list: every anchor here is the actual page title.
const productColumns = sections
  .map((section) => ({ section, products: productsForSection(section.slug) }))
  .filter((c) => c.products.length > 0);

// Long-tail, education-first guides for exactly the searches people
// actually run before buying (what kind of vinyl sticker, what a roll-up
// is, the difference between 2D and 3D signage) — curated by topic, not
// every post on the blog, so the footer stays a real answer to "what do
// I search for" rather than a dump of the whole archive.
const longTailGuideSlugs = [
  "vinyl-stickers-guide",
  "banner-printing-guide",
  "roll-up-banner-stands-guide",
  "popup-display-stands-guide",
  "wooden-backdrops-guide",
  "acrylic-lettering-displays-guide",
  "channel-letters-guide",
  "acrylic-display-stands-guide",
  "exhibition-stand-guide",
  "exhibition-kiosk-design-guide",
  "restaurant-mall-kiosk-guide",
  "painting-carpentry-fitout-guide",
];
const longTailGuides = longTailGuideSlugs
  .map((slug) => blogPosts.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

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

  const colHead = "eyebrow eyebrow-bright mb-4";
  const subLink = "inline-block py-1 text-sm text-white/55 transition-colors hover:text-white";

  return (
    <footer className="on-dark bg-night text-white">
      {/* Closing call to action, shown above every page's footer. */}
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="display-xl [text-wrap:wrap]">
          <span className="block"><span className="text-brand-bright">Grow</span> your brand</span>
          <span className="block">across the Gulf.</span>
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-white/70">
              Signage, print, an exhibition stand, packaging or a social
              campaign. Tell us what you need and where, and we will come back
              with a quote.
            </p>
            <Link href="/contact" className="link-arrow mt-8 text-xl">
              Start the conversation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center" aria-label="Gifts Gulf Advertising, home">
                <Image src="/logo-white.png" alt="Gifts Gulf Advertising" width={1516} height={358} className="h-11 w-auto" />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
                Every brand touchpoint, one partner. Printing, signage, events,
                packaging, gifting and social media across the UAE and Qatar.
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.08em] text-white/40">
                {markets.join(" · ")}
              </p>
              <div className="mt-4 flex flex-col text-sm">
                <a href={`mailto:${settings.contactEmail}`} className="py-1 text-white/80 hover:text-white">
                  {settings.contactEmail}
                </a>
                <a href={telHref} className="py-1 text-white/80 hover:text-white">
                  {settings.contactPhone}
                </a>
              </div>
              {socials.length > 0 ? (
                <div className="mt-6 flex gap-3">
                  {socials.map(({ url, label, Icon }) =>
                    url ? (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="block h-9 w-9 transition-transform hover:scale-110"
                      >
                        <Icon className="h-9 w-9" />
                      </a>
                    ) : (
                      <span key={label} aria-label={`${label} (coming soon)`} className="block h-9 w-9 opacity-40 grayscale">
                        <Icon className="h-9 w-9" />
                      </span>
                    ),
                  )}
                </div>
              ) : null}
            </div>

            <div>
              <h3 className={colHead}>Services</h3>
              <ul className="flex flex-col">
                {sections.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="inline-block py-1.5 text-[15px] text-white/80 hover:text-white">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={colHead}>Company</h3>
              <ul className="flex flex-col">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1.5 text-[15px] text-white/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-3 lg:grid-cols-6">
            <div>
              <h4 className={colHead}>Locations</h4>
              <ul className="flex flex-col">
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/locations/${l.slug}`} className={subLink}>
                      {l.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {productColumns.map(({ section, products }) => (
              <div key={section.slug}>
                <h4 className={colHead}>{section.name}</h4>
                <ul className="flex flex-col">
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}`} className={subLink}>
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {longTailGuides.length > 0 ? (
              <div>
                <h4 className={colHead}>Guides</h4>
                <ul className="flex flex-col">
                  {longTailGuides.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className={subLink}>
                        {post.title.split(":")[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {year} Gifts Gulf Advertising. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
