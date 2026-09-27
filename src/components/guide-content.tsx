import type { Block, GuideSection } from "@/lib/content-types";

export function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="text-[17px] leading-[1.75] text-current opacity-80">{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul className="hairline border-t">
        {block.items.map((item) => (
          <li key={item} className="hairline flex items-start gap-4 border-b py-4 text-[16px] leading-relaxed opacity-90">
            <span aria-hidden className="mt-3 h-0.5 w-3 shrink-0 bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
        {block.caption ? <caption className="mb-3 text-left text-sm opacity-60">{block.caption}</caption> : null}
        <thead>
          <tr>
            {block.head.map((h) => (
              <th key={h} className="hairline border-b-2 py-3 pr-6 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`hairline border-b py-3 pr-6 align-top ${j === 0 ? "font-medium" : "opacity-80"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Long-form guide: heading on the left, content on the right, split by hairlines. */
export function GuideContent({ sections, stacked }: { sections: GuideSection[]; stacked?: boolean }) {
  if (stacked) {
    return (
      <div className="hairline border-t">
        {sections.map((s) => (
          <section key={s.heading} className="hairline flex flex-col gap-5 border-b py-10">
            <h3 className="text-2xl font-semibold leading-snug tracking-tight">{s.heading}</h3>
            <div className="flex flex-col gap-6">
              {s.blocks.map((b, i) => (
                <BlockView key={i} block={b} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
  return (
    <div className="hairline border-t">
      {sections.map((s) => (
        <section key={s.heading} className="hairline grid grid-cols-1 gap-6 border-b py-12 lg:grid-cols-12 lg:gap-10">
          <h3 className="text-2xl font-semibold leading-snug tracking-tight lg:col-span-4">{s.heading}</h3>
          <div className="flex flex-col gap-6 lg:col-span-8">
            {s.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
