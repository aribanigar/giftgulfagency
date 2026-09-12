import { X, Check } from "lucide-react";

const oldWay = [
  "The signage company designs the storefront sign without ever seeing the packaging vendor's colour file, so the green is never quite the same green",
  "A sticker and packaging reorder goes to a different printer than the one who made the original artwork, and the file has to be rebuilt from scratch",
  "The exhibition stand is built by an events company that's never seen the storefront or the product packaging in person",
  "A social media agency schedules the launch content from a brand PDF, before the signage has even been installed",
  "A signage delay pushes the store opening back a week, but nobody tells the digital agency, so the launch posts go out on the old date",
  "Five vendors, five invoices, and no one who can actually answer for how the whole launch is going",
];

const giftsGulfWay = [
  "The same artwork file used for the storefront sign is reused for the packaging and the exhibition stand graphics, so the colour actually matches",
  "A reorder on a sticker or box goes back to the same file, the same team, not a rebuild from a screenshot",
  "The person building the exhibition stand has already seen the storefront and handled the packaging, so nothing looks like it came from a different brand",
  "A signage delay gets flagged internally the same day, and the launch content calendar shifts with it instead of firing on the old date",
  "One point of contact can answer for the sign, the packaging and the launch post, because one team briefed all three from the same conversation",
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
