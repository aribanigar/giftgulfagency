import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

export const printingTopics: Topic[] = [
  {
    slug: "book-printing",
    name: "Book Printing",
    category: "Printing",
    section: "printing",
    primaryKeyword: "book printing",
    seoTitle: "Book Printing: Binding, Paper & Sizes",
    metaDescription:
      "Book printing for company profiles, annual reports, coffee table books, novels and manuals: binding types, paper, sizes and print runs across the UAE and GCC.",
    intro:
      "Printing a book means making three choices early: the binding, the paper and the trim size. They decide how the book opens, how it feels and what it costs per copy, long before the design is final.",
    cityPages: true,
    sections: [
      {
        heading: "Binding types",
        blocks: [
          table(
            ["Binding", "Page count", "Looks and feels", "Common use"],
            [
              ["Saddle stitch (stapled)", "8 to about 64 pages", "Light, lies fairly flat", "Booklets, magazines, event programmes"],
              ["Perfect binding (glued)", "About 40 pages and up", "Flat square spine with printed title", "Company profiles, catalogues, paperbacks"],
              ["PUR binding", "About 40 pages and up", "Stronger glue, opens flatter", "Books used often, heat-exposed stock"],
              ["Section sewn", "Any", "Most durable, opens well", "Coffee table books, premium reports"],
              ["Hardcover (case bound)", "Any", "Rigid board cover, premium", "Anniversary books, gifts, hardbacks"],
              ["Wire-O and spiral", "Any", "Opens fully flat", "Manuals, calendars, notebooks, menus"],
            ],
          ),
          p("Saddle stitch page counts must be multiples of 4. In the Gulf's summer heat, PUR glue holds better than standard hot-melt glue for books stored in cars or warehouses."),
        ],
      },
      {
        heading: "Paper choices",
        blocks: [
          ul([
            "Inside pages: 100 to 170 gsm coated (matt or gloss) for photos, 80 to 120 gsm uncoated for text-heavy books.",
            "Covers: 250 to 350 gsm board, laminated matt, gloss or soft-touch for softcovers.",
            "Hardcovers: printed paper wrapped over greyboard, or cloth with foil stamping.",
            "Finishes: spot UV, embossing, foil and debossing on the cover.",
          ]),
        ],
      },
      {
        heading: "Common book sizes",
        blocks: [
          table(
            ["Size", "Millimetres", "Use"],
            [
              ["A5", "148 x 210", "Novels, guides, notebooks"],
              ["B5", "176 x 250", "Textbooks, manuals"],
              ["A4", "210 x 297", "Company profiles, reports, catalogues"],
              ["Square 210 or 300", "210 x 210 / 300 x 300", "Coffee table and photo books"],
              ["Landscape A4", "297 x 210", "Portfolios, architecture books"],
            ],
          ),
        ],
      },
      {
        heading: "Digital or offset",
        blocks: [
          p("Digital printing suits short runs, from a single proof copy to a few hundred books, and allows personalisation. Offset printing costs more to set up but becomes cheaper per copy on longer runs, typically from several hundred copies up, and gives the most consistent colour."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is the cheapest binding for a book?",
        a: "Saddle stitch for thin books and perfect binding for thicker ones. Hardcover and section sewn cost more but last much longer.",
      },
      {
        q: "Can I print a small number of books?",
        a: "Yes. Digital printing makes short runs practical, including single proof copies before a larger order.",
      },
      {
        q: "Do books printed in the UAE need approval?",
        a: "Books for sale or public distribution may need media content approval from the relevant authority before printing. Internal corporate documents usually do not. Check with the authority for your emirate or country.",
      },
    ],
    related: ["brochure-printing", "product-labels", "custom-printed-boxes"],
  },
  {
    slug: "brochure-printing",
    name: "Brochure Printing",
    category: "Printing",
    section: "printing",
    primaryKeyword: "brochure printing",
    seoTitle: "Brochure Printing: Folds, Sizes & Paper",
    metaDescription:
      "Brochure printing guide: bi-fold, tri-fold, Z-fold and gate fold, A4, A5 and DL sizes, paper weights and finishes for businesses across the UAE, Qatar and GCC.",
    intro:
      "A brochure is folded print that someone can pick up and take away. The fold decides how the story unfolds as it opens, so choose it before designing, not after.",
    cityPages: true,
    sections: [
      {
        heading: "Fold types",
        blocks: [
          table(
            ["Fold", "Panels", "Best for"],
            [
              ["Bi-fold (half fold)", "4", "Menus, event programmes, simple product sheets"],
              ["Tri-fold (roll fold)", "6", "The classic DL brochure for services and clinics"],
              ["Z-fold", "6", "Step-by-step content, maps, timelines"],
              ["Gate fold", "6 or 8", "Product reveals, launches, premium offers"],
              ["Cross fold", "8", "Maps and posters folded to pocket size"],
            ],
          ),
        ],
      },
      {
        heading: "Sizes and paper",
        blocks: [
          ul([
            "A4 folded to DL (99 x 210 mm): fits brochure racks and standard envelopes.",
            "A4 folded to A5: more space per panel for photos.",
            "A3 folded to A4: a mini catalogue without binding.",
            "Paper: 150 to 170 gsm for light brochures, 200 to 250 gsm for a premium feel. Heavier stock above about 170 gsm is creased before folding so it does not crack.",
          ]),
        ],
      },
      {
        heading: "Brochure vs booklet vs flyer",
        blocks: [
          p("A flyer is a single flat sheet. A brochure is one sheet folded into panels. A booklet or catalogue has several sheets bound together, usually stapled. When the content runs past 8 panels, a stapled booklet reads better than a large folded sheet."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is the most common brochure size?",
        a: "An A4 sheet tri-folded to DL size (99 x 210 mm). It fits racks, envelopes and pockets.",
      },
      {
        q: "Should brochures be printed in English and Arabic?",
        a: "In the GCC, bilingual brochures reach a wider audience. Arabic reads right to left, so plan the layout for both directions from the start rather than translating at the end.",
      },
    ],
    related: ["book-printing", "roll-up-banners", "acrylic-display-stands"],
  },
];
