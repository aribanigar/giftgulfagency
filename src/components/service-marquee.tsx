import { services } from "@/lib/site-data";

export function ServiceMarquee() {
  const items = [...services, ...services];

  return (
    <div className="mask-fade-x overflow-hidden border-y border-zinc-200 bg-zinc-900 py-4">
      <div className="animate-marquee flex w-max gap-8">
        {items.map((service, i) => (
          <span
            key={`${service.slug}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm uppercase tracking-wider text-zinc-400"
          >
            {service.name}
            <span className="text-green-500" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
