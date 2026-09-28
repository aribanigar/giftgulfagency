"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceRow = {
  slug: string;
  name: string;
  short: string;
  capabilities: string[];
};

/** Hairline accordion of services, one expanded at a time. */
export function ServicesList({ rows }: { rows: ServiceRow[] }) {
  const [open, setOpen] = useState<string | null>(rows[0]?.slug ?? null);

  return (
    <ul className="hairline border-t">
      {rows.map((row, i) => {
        const isOpen = open === row.slug;
        return (
          <li key={row.slug} className="hairline border-b">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : row.slug)}
              className="group flex w-full items-center gap-6 py-7 text-left sm:py-8"
            >
              <span className="w-8 font-heading text-sm font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-2xl font-semibold tracking-tight transition-colors group-hover:text-brand sm:text-3xl">
                {row.name}
              </span>
              <Plus
                className={cn("h-6 w-6 shrink-0 transition-transform duration-300", isOpen && "rotate-45")}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="grid grid-cols-1 gap-8 pb-10 pl-14 lg:grid-cols-12">
                  <p className="text-lg leading-relaxed text-ink/70 lg:col-span-5">{row.short}</p>
                  <div className="lg:col-span-6 lg:col-start-7">
                    <ul className="flex flex-col gap-2.5 text-[15px] text-ink/80">
                      {row.capabilities.slice(0, 5).map((c) => (
                        <li key={c} className="flex gap-3">
                          <span className="mt-2.5 h-1 w-3 shrink-0 bg-brand" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${row.slug}`} className="link-arrow mt-7 text-base">
                      Explore {row.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
