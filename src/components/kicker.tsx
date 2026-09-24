import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em]",
        dark ? "text-green-500" : "text-green-700",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-green-500" : "bg-green-600")}
      />
      {children}
    </p>
  );
}
