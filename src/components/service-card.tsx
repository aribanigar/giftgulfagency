import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Section } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Section }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <span className="font-mono text-[11px] tracking-wider text-zinc-300 transition-colors group-hover:text-zinc-400">
            {service.code}
          </span>
        </div>
        <h3 className="mt-5 font-heading text-lg font-semibold text-zinc-900">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {service.short}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-zinc-900">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
