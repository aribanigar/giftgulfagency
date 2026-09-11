import Link from "next/link";
import { servicesByPillar } from "@/lib/site-data";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-tight text-zinc-900">
                Gifts Gulf
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-green-700">
                Media &amp; Advertising
              </span>
            </Link>
            <p className="mt-4 max-w-[26ch] text-sm text-zinc-600">
              Every brand touchpoint, one partner — from signage and print to
              social and software.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-900">
              Brand Production
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {servicesByPillar.production.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-zinc-600 hover:text-green-700"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-900">
              Digital Growth
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {servicesByPillar.digital.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-zinc-600 hover:text-green-700"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-900">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-600 hover:text-green-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Gifts Gulf. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-green-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
