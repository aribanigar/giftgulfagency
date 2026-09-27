/** Structured long-form content shared by service guides, topic pages and city pages. */
export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type GuideSection = {
  heading: string;
  blocks: Block[];
};

export const p = (text: string): Block => ({ type: "p", text });
export const ul = (items: string[]): Block => ({ type: "ul", items });
export const table = (head: string[], rows: string[][], caption?: string): Block => ({
  type: "table",
  head,
  rows,
  caption,
});

export function blockText(b: Block): string {
  if (b.type === "p") return b.text;
  if (b.type === "ul") return b.items.join(" ");
  return [b.caption ?? "", ...b.head, ...b.rows.flat()].join(" ");
}
