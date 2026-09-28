import Link from "next/link";
import type { ReactNode } from "react";
import { logoutAction } from "./actions";

export function AdminShell({
  active,
  children,
}: {
  active: "leads" | "settings";
  children: ReactNode;
}) {
  const link = (href: string, label: string, key: string) => (
    <Link
      href={href}
      className={
        key === active
          ? "font-semibold text-green-700"
          : "text-zinc-600 hover:text-green-700"
      }
    >
      {label}
    </Link>
  );
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-8 flex items-center gap-6 border-b border-zinc-200 pb-4 text-sm">
        {link("/admin", "Leads", "leads")}
        {link("/admin/settings", "Site settings", "settings")}
        <form action={logoutAction} className="ml-auto">
          <button type="submit" className="text-zinc-500 hover:text-red-600">
            Sign out
          </button>
        </form>
      </nav>
      {children}
    </div>
  );
}

export const statusStyles: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  contacted: "bg-amber-50 text-amber-700",
  quoted: "bg-purple-50 text-purple-700",
  won: "bg-green-50 text-green-700",
  lost: "bg-zinc-100 text-zinc-600",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[status] ?? ""}`}
    >
      {status}
    </span>
  );
}
