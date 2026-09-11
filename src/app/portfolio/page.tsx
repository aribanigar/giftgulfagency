import type { Metadata } from "next";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio | Gifts Gulf Media & Advertising",
  description: "Work across signage, print, events, fit-outs, social and web.",
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
            studies, organised by service. Swap the placeholders below for
            actual completed work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="flex aspect-[4/3] flex-col justify-between rounded-[var(--radius-xl)] border border-dashed border-zinc-300 bg-zinc-50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-white text-green-700 ring-1 ring-zinc-200">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-zinc-900">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    Project photography coming soon
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
