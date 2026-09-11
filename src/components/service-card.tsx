import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      id={service.slug}
      className="group flex flex-col justify-between rounded-[var(--radius-xl)] border border-zinc-200 bg-white p-6 transition-colors hover:border-green-600"
    >
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-heading text-lg font-semibold text-zinc-900">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {service.short}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-green-700">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
