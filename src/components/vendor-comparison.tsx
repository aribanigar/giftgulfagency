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
    <ol className="hairline grid grid-cols-1 border-t md:grid-cols-2 md:gap-x-12">
      {benefits.map((item, i) => (
        <li key={item} className="hairline flex gap-6 border-b py-7">
          <span className="w-7 shrink-0 font-heading text-sm font-bold text-brand">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}
