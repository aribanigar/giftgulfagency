import { CheckCircle2 } from "lucide-react";

const benefits = [
  "The same artwork file used for the storefront sign carries through to the packaging and exhibition stand graphics, so brand colours match exactly everywhere",
  "A reorder on a sticker or box goes straight back to the original file with the same team, ready quickly",
  "The team building an exhibition stand has already worked on the storefront and packaging, so every touchpoint reads as one brand",
  "A signage schedule update gets flagged internally the same day, so the launch content calendar shifts with it automatically",
  "Materials and finishes are specified for Gulf heat and UV exposure from the quote stage onward",
  "Installation and quality checks are handled by the same team that built the piece, keeping accountability clear from design through to install",
  "One point of contact can speak to the sign, the packaging and the launch post, because one team briefed all three from a single conversation",
];

export function ServiceBenefits() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {benefits.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[var(--radius-xl)] border border-zinc-200 bg-white p-5 text-sm leading-relaxed text-zinc-700"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" strokeWidth={1.75} />
          {item}
        </li>
      ))}
    </ul>
  );
}
