import type { Metadata } from "next";
import { services, pillars } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import type { Pillar } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio | Gifts Gulf Media & Advertising",
  description:
    "Work across digital, signage, fit-outs, exhibitions and print for clients in the UAE and Qatar.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

const pillarStyle: Record<Pillar, string> = {
  digital: "bg-green-600 text-white",
  signage: "bg-zinc-900 text-white",
  spaces: "bg-zinc-700 text-white",
  print: "border border-zinc-300 bg-white text-zinc-700",
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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-white transition-colors hover:border-green-600"
              >
                <div
                  className="relative flex aspect-[16/10] items-center justify-center bg-zinc-100"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent, transparent 10px, rgb(0 0 0 / 0.03) 10px, rgb(0 0 0 / 0.03) 11px)",
                  }}
                >
                  <span className="absolute left-3 top-3 rounded-[var(--radius-sm)] border border-zinc-200 bg-white/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600 backdrop-blur">
                    Code: {service.code}
                  </span>
                  <span
                    className={
                      "absolute bottom-3 right-3 rounded-[var(--radius-sm)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider " +
                      pillarStyle[service.pillar]
                    }
                  >
                    {pillars[service.pillar].label}
                  </span>
                  <Icon className="h-9 w-9 text-zinc-300" strokeWidth={1.5} />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-zinc-900">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {service.short}
                    </p>
                  </div>
                  <dl className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 font-mono text-[11px] uppercase tracking-wide text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <dt>Pillar</dt>
                      <dd className="text-zinc-600">
                        {pillars[service.pillar].label}
                      </dd>
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
