import { X, Check } from "lucide-react";

const oldWay = [
  "A signage company for the storefront",
  "A separate printer for stickers and packaging",
  "A different contractor for the shop fit-out",
  "An events company for the next exhibition",
  "A digital agency for the website, SEO and social media",
  "Five vendors, five timelines, five invoices to reconcile",
];

const giftsGulfWay = [
  "One brief covers signage, print, fit-out, exhibitions, gifting, website, SEO and social",
  "One team, one timeline, one invoice",
  "Brand stays consistent from the storefront to the Instagram feed",
  "Production and digital run in parallel, not queued behind separate vendors",
];

export function VendorComparison() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="rounded-[var(--radius-xl)] border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
        <h3 className="font-heading text-lg font-semibold text-zinc-500">
          The fragmented way
        </h3>
        <ul className="mt-5 flex flex-col gap-3">
          {oldWay.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[var(--radius-xl)] border-2 border-green-600 bg-white p-6 sm:p-7">
        <h3 className="font-heading text-lg font-semibold text-zinc-900">
          The Gifts Gulf Advertising way
        </h3>
        <ul className="mt-5 flex flex-col gap-3">
          {giftsGulfWay.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
