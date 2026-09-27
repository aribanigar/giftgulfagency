import Link from "next/link";
import { QuickQuoteForm } from "@/components/sidebar/quick-quote-form";

export type SidebarLink = { href: string; title: string; meta?: string };
export type SidebarGroup = { title: string; links: SidebarLink[] };

/**
 * Sticky right-hand column: a short quote form, then groups of related
 * links (guides, directory topics, locations) for interlinking.
 */
export function PageSidebar({
  quote,
  groups,
}: {
  quote: { item?: string; service?: string; source: string; city?: string; heading?: string };
  groups: SidebarGroup[];
}) {
  const visible = groups.filter((g) => g.links.length > 0);
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-28" aria-label="Get a quote and related pages">
      <div className="on-dark bg-night p-6 text-white sm:p-7">
        <p className="eyebrow">Get a quote</p>
        <p className="mt-3 text-xl font-semibold leading-snug tracking-tight">
          {quote.heading ?? "Tell us what you need"}
        </p>
        <div className="mt-5">
          <QuickQuoteForm item={quote.item} service={quote.service} source={quote.source} city={quote.city} />
        </div>
      </div>
      {visible.map((g) => (
        <nav key={g.title} aria-label={g.title} className="border border-ink/10 bg-white p-6">
          <p className="eyebrow">{g.title}</p>
          <ul className="mt-3">
            {g.links.map((l) => (
              <li key={l.href} className="hairline border-b last:border-b-0">
                <Link href={l.href} className="group block py-3">
                  <span className="block text-[15px] font-medium leading-snug transition-colors group-hover:text-brand">{l.title}</span>
                  {l.meta ? <span className="mt-0.5 block text-xs text-ink/50">{l.meta}</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </aside>
  );
}
