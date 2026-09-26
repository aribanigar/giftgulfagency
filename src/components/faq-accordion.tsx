"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="hairline divide-y divide-[rgb(15_15_15/0.14)] border-y [.on-dark_&]:divide-white/15">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-brand sm:text-xl">
                {faq.q}
              </span>
              <Plus
                className={cn(
                  "h-6 w-6 shrink-0 text-brand transition-transform duration-300",
                  open && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-200 ease-out",
                open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0">
                <p className="max-w-3xl text-base leading-relaxed opacity-70">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
