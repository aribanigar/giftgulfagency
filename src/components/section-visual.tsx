import type { LucideIcon } from "lucide-react";

export function SectionVisual({
  icon: Icon,
  code,
}: {
  icon: LucideIcon;
  code: string;
}) {
  return (
    <div className="relative aspect-[21/9] overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-gradient-to-br from-green-50 via-white to-zinc-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-dot-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-zinc-300/40 blur-3xl" />

        <div className="animate-float-a absolute left-[18%] top-[22%] h-16 w-16 rounded-2xl border border-green-600/25 bg-white/70" />
        <div className="animate-float-b absolute right-[20%] bottom-[20%] h-12 w-12 rounded-full border border-zinc-300 bg-white/70" />
        <div className="absolute right-[32%] top-[28%] h-3 w-3 rounded-full bg-green-500/70" />
        <div className="absolute left-[30%] bottom-[26%] h-2.5 w-2.5 rounded-full bg-zinc-400/70" />
      </div>

      <div className="relative flex h-full items-center justify-center">
        <div className="animate-float-badge flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-900/25 sm:h-28 sm:w-28">
          <Icon className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={1.6} />
        </div>
      </div>

      <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
        {code}
      </span>
    </div>
  );
}
