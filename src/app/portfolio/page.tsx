import type { Metadata } from "next";
import { sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Portfolio | Gifts Gulf Advertising",
  description:
    "Work across printing, signages, events and exhibitions, packaging, gift items and social media for clients in the UAE and Qatar.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Work, by category.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">
            This page is set up to hold real project photography and case
            studies from across the UAE and Qatar, organised by service.
            Swap the placeholders below for actual completed work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.slug}
                className="flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-white transition-colors hover:border-green-600"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-zinc-50">
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="bg-dot-grid absolute inset-0 opacity-30" />
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-200/50 blur-2xl" />
                    <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-zinc-300/40 blur-2xl" />
                  </div>
                  <span className="absolute left-3 top-3 rounded-[var(--radius-sm)] border border-zinc-200 bg-white/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600 backdrop-blur">
                    Code: {section.code}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-[var(--radius-sm)] bg-green-600 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                    {section.name}
                  </span>
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-md shadow-green-900/20">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.6} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-zinc-900">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {section.short}
                    </p>
                  </div>
                  <dl className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 font-mono text-[11px] uppercase tracking-wide text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <dt>Code</dt>
                      <dd className="text-zinc-600">{section.code}</dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <dt>Status</dt>
                      <dd className="text-zinc-600">Pending</dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
