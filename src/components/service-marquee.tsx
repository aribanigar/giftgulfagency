import { sections } from "@/lib/site-data";

function Row() {
  const items = [...sections, ...sections];
  return (
    <div className="group overflow-hidden">
      <div className="animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]">
        {items.map((service, i) => {
          const Icon = service.icon;
          return (
            <span
              key={`${service.slug}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs tracking-wider text-zinc-300 transition-colors hover:border-green-500/60 hover:text-white"
            >
              <Icon className="h-3.5 w-3.5 text-green-500" strokeWidth={2} />
              {service.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function ServiceMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-zinc-950 py-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(22_163_74_/_0.12),_transparent_65%)]"
      />
      <div className="mask-fade-x relative">
        <Row />
      </div>
    </div>
  );
}
