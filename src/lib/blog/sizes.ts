import { p, table, ul } from "@/lib/content-types";
import type { BlogPost } from "@/lib/blog-data";

const D = "2026-09-27";
const CAT = "Sizes & Specs";

type Size = { name: string; mm: [number, number]; inch: string; px300: string; px72: string };

const A: Record<string, Size> = {
  A0: { name: "A0", mm: [841, 1189], inch: "33.1 x 46.8", px300: "9933 x 14043", px72: "2384 x 3370" },
  A1: { name: "A1", mm: [594, 841], inch: "23.4 x 33.1", px300: "7016 x 9933", px72: "1684 x 2384" },
  A2: { name: "A2", mm: [420, 594], inch: "16.5 x 23.4", px300: "4961 x 7016", px72: "1191 x 1684" },
  A3: { name: "A3", mm: [297, 420], inch: "11.7 x 16.5", px300: "3508 x 4961", px72: "842 x 1191" },
  A4: { name: "A4", mm: [210, 297], inch: "8.3 x 11.7", px300: "2480 x 3508", px72: "595 x 842" },
  A5: { name: "A5", mm: [148, 210], inch: "5.8 x 8.3", px300: "1748 x 2480", px72: "420 x 595" },
  A6: { name: "A6", mm: [105, 148], inch: "4.1 x 5.8", px300: "1240 x 1748", px72: "298 x 420" },
};

function sizeTable(s: Size) {
  const [w, h] = s.mm;
  return table(
    ["Unit", "Portrait (W x H)", "Landscape (W x H)"],
    [
      ["Millimetres", `${w} x ${h} mm`, `${h} x ${w} mm`],
      ["Centimetres", `${w / 10} x ${h / 10} cm`, `${h / 10} x ${w / 10} cm`],
      ["Inches", `${s.inch} in`, `${s.inch.split(" x ").reverse().join(" x ")} in`],
      ["Pixels at 300 DPI (print)", `${s.px300} px`, `${s.px300.split(" x ").reverse().join(" x ")} px`],
      ["Pixels at 72 DPI (screen)", `${s.px72} px`, `${s.px72.split(" x ").reverse().join(" x ")} px`],
    ],
    "ISO 216 A-series. Add 3 mm bleed on each side for print artwork that runs to the edge.",
  );
}

function aSizePost(key: keyof typeof A, o: {
  slug: string;
  title: string;
  meta: string;
  excerpt: string;
  intro: string;
  uses: string[];
  compare: string;
  faqs: { q: string; a: string }[];
  tags: string[];
  topics: string[];
}): BlogPost {
  const s = A[key];
  const [w, h] = s.mm;
  return {
    slug: o.slug,
    title: o.title,
    metaDescription: o.meta,
    category: CAT,
    excerpt: o.excerpt,
    coverStat: `${w} x ${h} mm`,
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: `${s.name} paper is ${w} x ${h} mm (${w / 10} x ${h / 10} cm, or ${s.inch} inches). For print at 300 DPI, set artwork to ${s.px300} pixels.`,
    tags: o.tags,
    relatedTopics: o.topics,
    intro: o.intro,
    sections: [
      { heading: `${s.name} size in every unit`, blocks: [sizeTable(s)] },
      { heading: `What ${s.name} is used for`, blocks: [ul(o.uses)] },
      { heading: `How ${s.name} compares`, blocks: [p(o.compare)] },
      {
        heading: `Setting up ${s.name} artwork for print`,
        blocks: [
          ul([
            `Document size: ${w} x ${h} mm, plus 3 mm bleed on every side (${w + 6} x ${h + 6} mm overall) if colour or images run to the edge.`,
            "Keep text and logos at least 5 mm inside the trim line (the safe zone).",
            "Colour mode: CMYK for print. Images at 300 DPI at final size.",
            "Export as a print-ready PDF with crop marks and fonts embedded or outlined.",
          ]),
        ],
      },
    ],
    faqs: o.faqs,
  };
}

export const sizePosts: BlogPost[] = [
  aSizePost("A4", {
    slug: "a4-size",
    title: "A4 size in mm, cm, inches and pixels",
    meta: "A4 size is 210 x 297 mm (21 x 29.7 cm, 8.3 x 11.7 in). A4 in pixels at 300 and 72 DPI, landscape size, uses and print setup.",
    excerpt: "A4 is 210 x 297 mm. Every unit you need, including pixels for print and screen, landscape size and bleed.",
    intro:
      "A4 is the standard sheet for letters, forms, reports and most office printing across the UAE, the GCC and almost every country outside North America. It belongs to the ISO 216 A-series, where each size is half the one before it and every sheet keeps the same proportions.",
    uses: [
      "Letterheads, invoices, quotations and payment vouchers.",
      "Company profiles, reports and catalogues, usually saddle stitched or perfect bound.",
      "Flyers and one-page menus.",
      "Tri-fold brochures: an A4 sheet folded twice gives the DL size (99 x 210 mm).",
      "Certificates and A4 sticker label sheets.",
    ],
    compare:
      "Two A4 sheets side by side make one A3 (297 x 420 mm); an A4 folded in half gives A5 (148 x 210 mm). US Letter (216 x 279 mm) is slightly wider and shorter, so documents set up for Letter can clip or show white margins when printed on A4.",
    faqs: [
      { q: "What is A4 size in cm?", a: "21 x 29.7 cm." },
      { q: "What is A4 size in inches?", a: "About 8.27 x 11.69 inches, usually rounded to 8.3 x 11.7." },
      { q: "What is A4 landscape size?", a: "297 x 210 mm: the same sheet turned on its side, so the width is 297 mm." },
      { q: "How many pixels is A4?", a: "2480 x 3508 pixels at 300 DPI for print, or 595 x 842 pixels at 72 DPI for screen." },
    ],
    tags: ["a4 size", "a4 size paper", "a4 landscape size", "a4 sheet size", "paper size"],
    topics: ["brochure-printing", "book-printing"],
  }),
  aSizePost("A3", {
    slug: "a3-size",
    title: "A3 size in mm, cm, inches and pixels",
    meta: "A3 size is 297 x 420 mm (29.7 x 42 cm, 11.7 x 16.5 in). A3 in pixels, landscape size, uses for posters, menus and drawings.",
    excerpt: "A3 is 297 x 420 mm, exactly two A4 sheets. Dimensions in every unit plus what A3 is best for.",
    intro:
      "A3 is double the area of A4 and the largest size most office printers handle. It is the go-to format for small posters, menus, presentation boards, drawings and folded brochures that open to a wider spread.",
    uses: [
      "Small posters for notice boards, lifts and shop windows.",
      "Restaurant menus and table talkers, often laminated.",
      "Architectural and engineering drawings.",
      "A3 folded to A4 for four-page brochures and event programmes.",
      "Certificates and presentation boards mounted on foam board.",
    ],
    compare:
      "A3 is two A4 sheets (297 x 420 mm) and half an A2. A3+ or Super A3 (329 x 483 mm) is a slightly larger sheet printers use so A3 artwork can print with bleed and crop marks.",
    faqs: [
      { q: "What is A3 size in cm?", a: "29.7 x 42 cm." },
      { q: "What is A3 paper size in mm?", a: "297 x 420 mm." },
      { q: "Is A3 twice the size of A4?", a: "Yes. A3 has exactly twice the area of A4; two A4 sheets side by side make one A3." },
    ],
    tags: ["a3 size", "a3 size paper", "a3 sheet size", "a3 paper size in mm", "a3 in mm"],
    topics: ["brochure-printing", "foam-board-printing"],
  }),
  aSizePost("A2", {
    slug: "a2-size",
    title: "A2 size in mm, cm, inches and pixels",
    meta: "A2 size is 420 x 594 mm (42 x 59.4 cm, 16.5 x 23.4 in). A2 in pixels at 300 DPI, landscape size and common uses for posters.",
    excerpt: "A2 is 420 x 594 mm, a popular poster size. All units, pixel sizes and when to choose it.",
    intro:
      "A2 is four A4 sheets in area and one of the most popular poster sizes. It is large enough to read across a room but still easy to frame, mount and ship.",
    uses: [
      "Event and promotional posters.",
      "Framed wall prints and art prints.",
      "Floor-standing A-board signs and easel boards.",
      "Presentation and planning drawings.",
      "Shop window posters and in-store promotions.",
    ],
    compare:
      "A2 is double A3 and half A1. For a poster that must be read from several metres away, A1 or larger usually works better; for a counter or window poster, A3 to A2 is typical.",
    faqs: [
      { q: "What is A2 size in cm?", a: "42 x 59.4 cm." },
      { q: "What is A2 size in inches?", a: "About 16.5 x 23.4 inches." },
      { q: "How many A4 sheets fit in A2?", a: "Four A4 sheets make one A2." },
    ],
    tags: ["a2 size", "a2 paper", "a2 sheet size", "poster size"],
    topics: ["foam-board-printing"],
  }),
  aSizePost("A1", {
    slug: "a1-size",
    title: "A1 size in mm, cm, inches and pixels",
    meta: "A1 size is 594 x 841 mm (59.4 x 84.1 cm, 23.4 x 33.1 in). A1 in pixels at 300 DPI, uses for posters, boards and plans.",
    excerpt: "A1 is 594 x 841 mm, the standard large poster and display board size.",
    intro:
      "A1 is the large poster size you see at conferences, in site offices and on display boards. It is printed on large-format printers rather than office machines.",
    uses: [
      "Large posters at events, exhibitions and in malls.",
      "Architectural and construction plans.",
      "Foam board and Forex display boards on easels.",
      "Research and academic posters.",
      "Shell scheme booth panels (check the exact visible size in your exhibitor manual).",
    ],
    compare:
      "A1 is double A2 and half A0. At 300 DPI an A1 file is over 7,000 pixels wide; for large posters viewed from a distance, 150 DPI at full size is usually enough.",
    faqs: [
      { q: "What is A1 size in cm?", a: "59.4 x 84.1 cm." },
      { q: "What resolution does an A1 poster need?", a: "300 DPI gives 7016 x 9933 pixels. For viewing from a metre or more, 150 DPI (about 3508 x 4967 pixels) usually looks sharp." },
      { q: "Can A1 be printed on foam board?", a: "Yes. A1 is a common size for printed foam board and Forex display boards." },
    ],
    tags: ["a1 size", "a1 poster", "a1 paper size", "large format printing"],
    topics: ["foam-board-printing", "shell-scheme-branding"],
  }),
  aSizePost("A0", {
    slug: "a0-size",
    title: "A0 size in mm, cm, inches and pixels",
    meta: "A0 size is 841 x 1189 mm (84.1 x 118.9 cm, 33.1 x 46.8 in), exactly one square metre. A0 pixels, uses and print tips.",
    excerpt: "A0 is 841 x 1189 mm, one square metre, and the base of the whole A-series.",
    intro:
      "A0 is the starting point of the ISO A-series: a sheet with an area of exactly one square metre. Every smaller A size is made by halving it.",
    uses: [
      "Very large posters and wall graphics.",
      "Engineering and architectural drawings.",
      "Conference and exhibition display boards.",
      "Large maps and site plans.",
    ],
    compare:
      "A0 is two A1 sheets, four A2, eight A3 and sixteen A4. Sizes larger than A0 are written as 2A0 (1189 x 1682 mm) and 4A0.",
    faqs: [
      { q: "What is A0 size in cm?", a: "84.1 x 118.9 cm." },
      { q: "Why is A0 one square metre?", a: "The A-series was designed so A0 has an area of 1 square metre with a side ratio of 1 to the square root of 2, which keeps the same shape when halved." },
    ],
    tags: ["a0 size", "a0 paper", "paper size"],
    topics: ["foam-board-printing"],
  }),
  aSizePost("A5", {
    slug: "a5-size",
    title: "A5 size in mm, cm, inches and pixels",
    meta: "A5 size is 148 x 210 mm (14.8 x 21 cm, 5.8 x 8.3 in), half of A4. A5 in pixels, uses for flyers, notebooks and booklets.",
    excerpt: "A5 is 148 x 210 mm, half an A4. Popular for flyers, notebooks, menus and booklets.",
    intro:
      "A5 is half an A4 sheet and a favourite for handheld print: flyers, notebooks, diaries, booklets and table menus.",
    uses: [
      "Flyers and leaflets for events and promotions.",
      "Notebooks, diaries and planners.",
      "Booklets and event programmes, made from A4 sheets folded in half.",
      "Table menus and acrylic menu stands.",
      "Novels and guides in book printing.",
    ],
    compare: "A5 is half A4 and double A6. An A4 sheet folded once gives an A5 booklet page.",
    faqs: [
      { q: "What is A5 size in cm?", a: "14.8 x 21 cm." },
      { q: "Is A5 half of A4?", a: "Yes. Fold an A4 sheet in half and each half is A5." },
    ],
    tags: ["a5 size", "a5 paper", "a5 sheet size", "flyer size"],
    topics: ["book-printing", "acrylic-display-stands"],
  }),
  {
    slug: "paper-sizes-chart",
    title: "Paper sizes chart: A0 to A7, B sizes, DL and US Letter",
    metaDescription: "Complete paper size chart in mm, cm and inches: A0 to A7, B4 and B5, DL, SRA3 and US Letter, with what each size is used for.",
    category: CAT,
    excerpt: "Every common paper size in one chart, from A0 posters to DL leaflets, with what each is used for.",
    coverStat: "A0 to A7",
    readTime: "5 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer:
      "The A-series runs from A0 (841 x 1189 mm) down by halves: A1 594 x 841, A2 420 x 594, A3 297 x 420, A4 210 x 297, A5 148 x 210, A6 105 x 148 mm. DL is 99 x 210 mm and US Letter is 216 x 279 mm.",
    tags: ["paper size", "print sizes", "a sizes", "a paper size", "printing paper size"],
    relatedTopics: ["brochure-printing", "book-printing", "foam-board-printing"],
    intro:
      "Most printing in the UAE and GCC uses the international ISO 216 A-series, where each size is half of the previous one and all share the same proportions. A few other formats, such as DL and B sizes, fill the gaps.",
    sections: [
      {
        heading: "A-series paper sizes",
        blocks: [
          table(
            ["Size", "Millimetres", "Centimetres", "Inches", "Typical use"],
            [
              ["A0", "841 x 1189", "84.1 x 118.9", "33.1 x 46.8", "Large posters, plans"],
              ["A1", "594 x 841", "59.4 x 84.1", "23.4 x 33.1", "Posters, display boards"],
              ["A2", "420 x 594", "42 x 59.4", "16.5 x 23.4", "Posters, framed prints"],
              ["A3", "297 x 420", "29.7 x 42", "11.7 x 16.5", "Small posters, menus"],
              ["A4", "210 x 297", "21 x 29.7", "8.3 x 11.7", "Letters, reports, flyers"],
              ["A5", "148 x 210", "14.8 x 21", "5.8 x 8.3", "Flyers, notebooks"],
              ["A6", "105 x 148", "10.5 x 14.8", "4.1 x 5.8", "Postcards, invitations"],
              ["A7", "74 x 105", "7.4 x 10.5", "2.9 x 4.1", "Small cards, tickets"],
            ],
          ),
        ],
      },
      {
        heading: "Other sizes printers use",
        blocks: [
          table(
            ["Size", "Millimetres", "Use"],
            [
              ["DL", "99 x 210", "Tri-fold leaflets and rack cards"],
              ["DL envelope", "110 x 220", "Holds an A4 folded in three"],
              ["B5", "176 x 250", "Books and manuals"],
              ["B4", "250 x 353", "Posters, larger books"],
              ["SRA3", "320 x 450", "Press sheet for A3 with bleed"],
              ["US Letter", "216 x 279", "North American documents"],
            ],
          ),
        ],
      },
      {
        heading: "Why A sizes halve so neatly",
        blocks: [
          p("Every A size has a width-to-height ratio of 1 to 1.414 (the square root of 2). Cut a sheet in half across its long side and both halves keep that exact shape. That is why an A4 design scales cleanly to A3 or A5 without cropping or distortion."),
        ],
      },
    ],
    faqs: [
      { q: "What is the most common paper size?", a: "A4 (210 x 297 mm) is the standard office and document size across the UAE, GCC and most of the world." },
      { q: "What size is a DL flyer?", a: "99 x 210 mm, which is one third of an A4 sheet." },
      { q: "Can I scale an A4 design to A3?", a: "Yes. A sizes share the same proportions, so scaling by about 141% turns A4 into A3 without cropping." },
    ],
  },
  {
    slug: "postcard-size",
    title: "Postcard size: standard dimensions for printing",
    metaDescription: "Standard postcard size is A6, 148 x 105 mm. Postcard dimensions in mm and inches, other common sizes, paper weight and print setup.",
    category: CAT,
    excerpt: "The standard postcard is A6, 148 x 105 mm. Other sizes, paper weights and how to set up artwork.",
    coverStat: "148 x 105 mm",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "The standard postcard size is A6: 148 x 105 mm (about 5.8 x 4.1 inches). Larger promotional cards are often A5 (210 x 148 mm) or DL (210 x 99 mm).",
    tags: ["postcard size", "a6 size", "invitation card size"],
    relatedTopics: ["brochure-printing"],
    intro: "Postcards are used for promotions, thank-you cards in e-commerce parcels, invitations and event handouts. Most follow the A6 size so they fit standard envelopes and display racks.",
    sections: [
      {
        heading: "Common postcard and card sizes",
        blocks: [
          table(
            ["Size", "Millimetres", "Inches", "Use"],
            [
              ["A6", "148 x 105", "5.8 x 4.1", "Standard postcard, thank-you cards"],
              ["A5", "210 x 148", "8.3 x 5.8", "Promotional cards, invitations"],
              ["DL", "210 x 99", "8.3 x 3.9", "Rack cards, gift vouchers"],
              ["Square 148", "148 x 148", "5.8 x 5.8", "Invitations and greeting cards"],
            ],
          ),
        ],
      },
      {
        heading: "Paper and finish",
        blocks: [
          ul([
            "300 to 400 gsm board so the card feels sturdy.",
            "Matt or soft-touch lamination for a premium feel; gloss for photo-heavy designs.",
            "Uncoated board if people need to write on the back.",
            "Spot UV, foil or rounded corners for invitations and luxury brands.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What size is a postcard in cm?", a: "The standard A6 postcard is 14.8 x 10.5 cm." },
      { q: "What paper weight is best for postcards?", a: "300 to 400 gsm board. Lighter paper feels flimsy and can bend in the post." },
    ],
  },
  {
    slug: "id-card-size",
    title: "ID card size: standard dimensions in mm, inches and pixels",
    metaDescription: "Standard ID card size is 85.6 x 54 mm (CR80, ISO/IEC 7810 ID-1), 0.76 mm thick. ID card size in inches and pixels for design.",
    category: CAT,
    excerpt: "The standard ID card is 85.6 x 54 mm, the same size as a bank card. Design sizes, thickness and print options.",
    coverStat: "85.6 x 54 mm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "The standard ID card size is 85.6 x 53.98 mm (3.370 x 2.125 inches), called CR80 or ISO/IEC 7810 ID-1, with a thickness of 0.76 mm. It is the same size as a bank card.",
    tags: ["size of id card", "id card size", "cr80", "id card printing", "employee id card"],
    relatedTopics: ["corporate-uniforms"],
    intro: "Employee, student, visitor and membership cards almost all use the same credit-card format, so they fit card holders, lanyards, wallets and card printers everywhere.",
    sections: [
      {
        heading: "ID card dimensions",
        blocks: [
          table(
            ["Measure", "Value"],
            [
              ["Millimetres", "85.6 x 53.98 mm (usually written 85.6 x 54 mm)"],
              ["Inches", "3.370 x 2.125 in"],
              ["Thickness", "0.76 mm (30 mil)"],
              ["Corner radius", "About 3.18 mm"],
              ["Pixels at 300 DPI", "1011 x 638 px (portrait: 638 x 1011 px)"],
              ["Design with 2 mm bleed", "89.6 x 58 mm"],
            ],
            "CR80 / ISO/IEC 7810 ID-1 format.",
          ),
        ],
      },
      {
        heading: "Portrait or landscape",
        blocks: [
          p("Landscape cards fit more text and suit wallets and access readers. Portrait cards suit lanyards, because the card hangs naturally with the photo at the top and the name readable at chest height. If the card will have a slot punch for a clip, keep text and the photo clear of the top 10 mm."),
        ],
      },
      {
        heading: "Card types and features",
        blocks: [
          ul([
            "Printed PVC: the standard employee and visitor card.",
            "Proximity or RFID cards for door access, printed on the surface.",
            "Magnetic stripe cards for older access and payment systems.",
            "Barcode or QR code for attendance and event check-in.",
            "Holograms or overlays to make cards harder to copy.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is the size of an ID card in cm?", a: "8.56 x 5.4 cm." },
      { q: "Is an ID card the same size as a credit card?", a: "Yes. Both use the CR80 / ISO ID-1 format: 85.6 x 54 mm." },
      { q: "What size should I design an ID card in Photoshop?", a: "1011 x 638 pixels at 300 DPI for landscape, or 638 x 1011 for portrait, plus bleed if your printer asks for it." },
    ],
  },
  {
    slug: "business-card-size-uae",
    title: "Business card size in the UAE: mm, inches and pixels",
    metaDescription: "Common business card sizes in the UAE: 90 x 55 mm, 85 x 55 mm and 3.5 x 2 in. Pixels at 300 DPI, bleed, paper weight and finishes.",
    category: CAT,
    excerpt: "The sizes used for business cards in the UAE, how to set up artwork, and which paper and finish to pick.",
    coverStat: "90 x 55 mm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "The most widely used business card sizes in the UAE are 90 x 55 mm and 85 x 55 mm, with the US size 3.5 x 2 inches (88.9 x 50.8 mm) also common. Add 3 mm bleed on each side to the artwork.",
    tags: ["business card size", "visiting card size", "business cards dubai", "business card printing"],
    relatedTopics: ["brochure-printing"],
    intro: "There is no single official business card size, but a few formats dominate. Choose one that fits standard card holders and wallets, and keep it consistent across your team.",
    sections: [
      {
        heading: "Common business card sizes",
        blocks: [
          table(
            ["Size", "Millimetres", "Pixels at 300 DPI", "With 3 mm bleed"],
            [
              ["Gulf and Asia standard", "90 x 55", "1063 x 650", "96 x 61 mm"],
              ["European standard", "85 x 55", "1004 x 650", "91 x 61 mm"],
              ["US standard", "88.9 x 50.8 (3.5 x 2 in)", "1050 x 600", "94.9 x 56.8 mm"],
              ["Square", "55 x 55 or 65 x 65", "650 x 650 / 768 x 768", "Add 3 mm each side"],
            ],
          ),
        ],
      },
      {
        heading: "Paper and finishes",
        blocks: [
          ul([
            "350 to 400 gsm board is standard; 600 gsm or layered board feels premium.",
            "Matt or soft-touch lamination, with spot UV on the logo.",
            "Gold or silver foil, embossing or debossing for luxury brands.",
            "Bilingual cards: English on one side, Arabic on the other.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is the standard visiting card size in the UAE?", a: "90 x 55 mm is the most common, followed by 85 x 55 mm." },
      { q: "Should business cards be printed in Arabic?", a: "Many UAE businesses print English on one side and Arabic on the other, especially when dealing with government or local clients." },
    ],
  },
  {
    slug: "roll-up-banner-size-guide",
    title: "Roll-up banner size in cm, inches and pixels",
    metaDescription: "Roll-up banner sizes: 85 x 200, 100 x 200, 120 x 200 and 150 x 200 cm, in inches and pixels, with visible area and artwork setup.",
    category: CAT,
    excerpt: "Every standard roll-up banner size in cm, inches and pixels, plus how much of the banner is actually visible.",
    coverStat: "85 x 200 cm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "events-exhibitions",
    quickAnswer: "The standard roll-up banner size is 85 x 200 cm (about 33.5 x 78.7 inches). Other common sizes are 100 x 200, 120 x 200 and 150 x 200 cm. Most stands need extra length (often around 10 cm) at the bottom that rolls into the base.",
    tags: ["roll up banner size", "roll up size", "roll up banner measurements", "roll up banner size in cm", "pull up banner size"],
    relatedTopics: ["roll-up-banners", "pop-up-stands", "backdrop-stands"],
    intro: "Roll-up sizes are quoted as width x visible height. The printed graphic is usually a little longer, because the bottom section wraps around the roller inside the base and the top clips into a rail.",
    sections: [
      {
        heading: "Roll-up banner sizes",
        blocks: [
          table(
            ["Size (cm)", "Inches", "Pixels at 150 DPI", "Best for"],
            [
              ["80 x 200", "31.5 x 78.7", "4724 x 11811", "Tight spaces"],
              ["85 x 200", "33.5 x 78.7", "5020 x 11811", "Standard for events and lobbies"],
              ["100 x 200", "39.4 x 78.7", "5906 x 11811", "Retail entrances"],
              ["120 x 200", "47.2 x 78.7", "7087 x 11811", "Exhibition stands"],
              ["150 x 200", "59.1 x 78.7", "8858 x 11811", "Wide backdrops"],
            ],
            "Large-format prints viewed from a metre or more look sharp at 100 to 150 DPI at full size.",
          ),
        ],
      },
      {
        heading: "Where to put content",
        blocks: [
          ul([
            "Top 60 cm: logo and main message, at eye level.",
            "Middle: product image or two to three short points.",
            "Bottom 40 to 50 cm: contact details or QR code only, as tables and people block it.",
            "Text height: at least 5 cm for headlines so they read from 3 to 5 metres.",
          ]),
        ],
      },
      {
        heading: "Artwork setup",
        blocks: [
          p("Ask for the stand's template before designing: the extra length at the bottom and top varies by stand model. Design at full size (or 1:10 scale with images at 1500 DPI), in CMYK, with fonts outlined, and export a print-ready PDF."),
        ],
      },
    ],
    faqs: [
      { q: "What is the standard roll-up banner size in cm?", a: "85 x 200 cm." },
      { q: "What resolution should a roll-up banner be?", a: "100 to 150 DPI at full size is enough, because roll-ups are viewed from a distance." },
      { q: "Is a pull-up banner the same size as a roll-up?", a: "Yes. Pull-up and roll-up are two names for the same product and use the same sizes." },
    ],
  },
  {
    slug: "poster-sizes",
    title: "Poster sizes: standard print sizes in cm and inches",
    metaDescription: "Standard poster sizes: A4 to A0, 50 x 70 cm, 61 x 91 cm and 70 x 100 cm, with viewing distances and resolution for sharp printing.",
    category: CAT,
    excerpt: "Standard poster sizes, how far away each one reads, and the resolution you need for sharp prints.",
    coverStat: "A3 to A0",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Common poster sizes are A3 (29.7 x 42 cm), A2 (42 x 59.4 cm), A1 (59.4 x 84.1 cm), A0 (84.1 x 118.9 cm), plus 50 x 70 cm, 61 x 91 cm (24 x 36 in) and 70 x 100 cm.",
    tags: ["poster size", "print sizes", "poster printing", "a1 poster"],
    relatedTopics: ["foam-board-printing", "window-graphics"],
    intro: "The right poster size depends on where it hangs and how far away people stand. A menu board by a counter can be A3; a mall poster read across a walkway needs A1 or larger.",
    sections: [
      {
        heading: "Standard poster sizes",
        blocks: [
          table(
            ["Size", "cm", "Inches", "Comfortable reading distance"],
            [
              ["A3", "29.7 x 42", "11.7 x 16.5", "Up to about 1.5 m"],
              ["A2", "42 x 59.4", "16.5 x 23.4", "Up to about 2.5 m"],
              ["50 x 70", "50 x 70", "19.7 x 27.6", "Up to about 3 m"],
              ["A1", "59.4 x 84.1", "23.4 x 33.1", "Up to about 3.5 m"],
              ["24 x 36 in", "61 x 91.4", "24 x 36", "Up to about 4 m"],
              ["70 x 100", "70 x 100", "27.6 x 39.4", "Up to about 4.5 m"],
              ["A0", "84.1 x 118.9", "33.1 x 46.8", "Up to about 5 m"],
            ],
            "Reading distances are rough guides and depend on text size and contrast.",
          ),
        ],
      },
      {
        heading: "Resolution and materials",
        blocks: [
          ul([
            "Hand-held or close viewing: 300 DPI at final size.",
            "Wall posters viewed from a metre or more: 150 DPI is usually enough.",
            "Paper: 150 to 200 gsm silk or satin for indoor posters.",
            "Mounted: foam board or Forex for easels and walls.",
            "Outdoor: waterproof synthetic paper or vinyl.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is the most popular poster size?", a: "A2 and A1 are the most common for events and retail; A3 for small notices and menus." },
      { q: "What size is a 24 x 36 inch poster in cm?", a: "About 61 x 91.4 cm." },
    ],
  },
  {
    slug: "print-resolution-dpi-guide",
    title: "Print resolution: what DPI you need for sharp printing",
    metaDescription: "What DPI to use for print: 300 DPI for close viewing, 150 DPI for posters, 72 to 100 DPI for billboards. Pixel sizes and common mistakes.",
    category: CAT,
    excerpt: "300 DPI, 150 DPI or less? How resolution works for business cards, posters, roll-ups and billboards.",
    coverStat: "300 DPI",
    readTime: "5 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Use 300 DPI at final size for anything read up close (cards, brochures, books), 150 DPI for posters and roll-ups, and 72 to 100 DPI for large banners and billboards viewed from far away.",
    tags: ["print resolution", "dpi for printing", "300 dpi", "image resolution"],
    relatedTopics: ["brochure-printing", "roll-up-banners"],
    intro: "Blurry print is almost always a resolution problem: an image that looks fine on a phone screen does not have enough pixels to stretch across a poster. The fix is to check pixels at the final print size before sending artwork.",
    sections: [
      {
        heading: "DPI by product",
        blocks: [
          table(
            ["Product", "Viewing distance", "DPI at final size"],
            [
              ["Business cards, brochures, books", "Hand-held", "300"],
              ["Posters A3 to A1", "1 to 3 m", "150 to 300"],
              ["Roll-ups and pop-ups", "2 to 5 m", "100 to 150"],
              ["Large banners and hoardings", "5 m and more", "72 to 100"],
              ["Billboards", "Far", "Often 20 to 50"],
            ],
          ),
        ],
      },
      {
        heading: "How to check an image",
        blocks: [
          p("Divide the pixel width by the print width in inches. A 3000-pixel-wide photo printed 10 inches wide gives 300 DPI, which is sharp. The same photo stretched to 40 inches drops to 75 DPI, which only works if people stand well back."),
          ul([
            "Increasing DPI in software without adding real pixels does not improve quality.",
            "Logos should be vector files (AI, EPS, PDF, SVG), which print sharp at any size.",
            "Screenshots and images saved from websites are rarely good enough for print.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Is 72 DPI OK for printing?", a: "Only for very large prints seen from a distance, such as banners. For documents and brochures use 300 DPI." },
      { q: "What is the difference between DPI and PPI?", a: "PPI is pixels per inch in a digital image; DPI is dots per inch laid down by a printer. In everyday artwork setup they are used interchangeably." },
    ],
  },
  {
    slug: "paper-gsm-guide",
    title: "Paper GSM guide: which paper weight for which print job",
    metaDescription: "Paper GSM explained: 80 gsm office paper to 400 gsm board. Which paper weight to choose for flyers, brochures, cards, books and posters.",
    category: CAT,
    excerpt: "GSM decides how thick and premium print feels. A quick chart for flyers, brochures, cards, covers and posters.",
    coverStat: "80 to 400 gsm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "GSM means grams per square metre. Office paper is 80 gsm, flyers 130 to 170 gsm, brochures 150 to 250 gsm, book covers and postcards 300 to 350 gsm, and business cards 350 to 400 gsm.",
    tags: ["paper gsm", "paper weight", "gsm meaning"],
    relatedTopics: ["brochure-printing", "book-printing"],
    intro: "GSM is the weight of one square metre of the paper. Higher gsm usually means thicker, stiffer paper, but coating and finish also change how it feels.",
    sections: [
      {
        heading: "GSM by product",
        blocks: [
          table(
            ["GSM", "Feel", "Use"],
            [
              ["70 to 90", "Office paper", "Letterheads, forms, book text pages"],
              ["100 to 130", "Light, crisp", "Flyers for mass distribution, book pages"],
              ["150 to 170", "Standard flyer and brochure", "Flyers, leaflets, posters"],
              ["200 to 250", "Firm", "Premium brochures, catalogue covers"],
              ["300 to 350", "Card", "Postcards, softcover book covers, folders"],
              ["350 to 400+", "Thick card", "Business cards, invitations, hang tags"],
            ],
          ),
        ],
      },
      {
        heading: "Coated or uncoated",
        blocks: [
          p("Coated paper (gloss, silk or matt) makes colours and photos sharp. Uncoated paper looks natural and is easy to write on, so it suits letterheads, notebooks and forms. Paper above about 170 gsm should be creased before folding so it does not crack along the fold."),
        ],
      },
    ],
    faqs: [
      { q: "What gsm is normal printer paper?", a: "80 gsm." },
      { q: "What gsm is best for brochures?", a: "150 to 170 gsm for standard brochures, 200 to 250 gsm for a premium feel." },
    ],
  },
  {
    slug: "bleed-and-safe-zone",
    title: "Bleed and safe zone in print: what 3 mm bleed means",
    metaDescription: "What bleed is in printing, why printers ask for 3 mm bleed, and how to set up bleed, trim and safe zones in your artwork.",
    category: CAT,
    excerpt: "Why printers ask for 3 mm bleed, and how to set up trim and safe zones so nothing gets cut off.",
    coverStat: "3 mm bleed",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Bleed is extra artwork, usually 3 mm on each side, that extends past the trim line so no white edge appears after cutting. The safe zone is a margin of about 3 to 5 mm inside the trim where important text should stay.",
    tags: ["bleed", "print bleed", "safe zone", "artwork setup"],
    relatedTopics: ["brochure-printing", "book-printing"],
    intro: "Guillotines and cutters move slightly on every sheet. Bleed and safe zones absorb that movement so backgrounds reach the edge and text is never trimmed.",
    sections: [
      {
        heading: "The three lines in print artwork",
        blocks: [
          ul([
            "Bleed line: 3 mm outside the finished size. Backgrounds and images extend to here.",
            "Trim line: the finished size, where the sheet is cut.",
            "Safe line: 3 to 5 mm inside the trim. Keep text, logos and QR codes inside it.",
          ]),
          p("An A4 flyer with 3 mm bleed is set up at 216 x 303 mm. Large-format jobs such as banners often need more bleed or extra material for hems and eyelets, so ask for the printer's template."),
        ],
      },
    ],
    faqs: [
      { q: "Do I need bleed if my design has a white border?", a: "No, if nothing touches the edge. Bleed is only needed when colour or images run to the edge." },
      { q: "How much bleed for a book cover?", a: "Usually 3 to 5 mm, but hardcover wraps need more. Always use the printer's template." },
    ],
  },
  {
    slug: "cmyk-vs-rgb-printing",
    title: "CMYK vs RGB: which colour mode to use for print",
    metaDescription: "CMYK vs RGB explained: why print uses CMYK, why colours shift from screen to paper, and when to use Pantone spot colours.",
    category: CAT,
    excerpt: "Why bright screen colours look duller in print, and how to keep brand colours consistent.",
    coverStat: "CMYK vs RGB",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Use CMYK for print and RGB for screens. RGB can show brighter colours than ink can reproduce, so convert artwork to CMYK before printing, or specify Pantone spot colours where exact brand colour matters.",
    tags: ["cmyk vs rgb", "colour mode", "pantone", "brand colours"],
    relatedTopics: ["brochure-printing", "custom-printed-boxes"],
    intro: "Screens mix red, green and blue light; printers mix cyan, magenta, yellow and black ink. The two systems cover different colour ranges, which is why neon greens and electric blues often print duller than they look on screen.",
    sections: [
      {
        heading: "Which mode for which job",
        blocks: [
          table(
            ["Output", "Colour mode"],
            [
              ["Brochures, cards, packaging", "CMYK"],
              ["Exact brand colours on print", "Pantone (spot) where possible"],
              ["Websites, social media, screens", "RGB"],
              ["Large-format and UV printing", "CMYK, sometimes with added inks"],
            ],
          ),
        ],
      },
      {
        heading: "Keeping brand colours consistent",
        blocks: [
          ul([
            "Define CMYK, RGB, HEX and Pantone values in your brand guidelines.",
            "Ask for a printed proof for colour-critical jobs, especially packaging.",
            "Expect small differences between paper types: uncoated paper looks softer than coated.",
            "For large black areas, printers often use rich black (black plus some CMY) for depth.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What happens if I send RGB files to print?", a: "They get converted to CMYK during printing, and some bright colours may shift. Converting yourself lets you see and adjust the result first." },
      { q: "What is a Pantone colour?", a: "A pre-mixed ink with a standard reference number, used when a brand colour must look the same on every job." },
    ],
  },
  {
    slug: "what-is-a-leaflet",
    title: "What is a leaflet? Leaflet vs flyer vs brochure",
    metaDescription: "What a leaflet is, and how leaflets, flyers, brochures and booklets differ in size, folding, paper and use for businesses in the UAE.",
    category: CAT,
    excerpt: "Leaflet, flyer, brochure or booklet? The differences, and which one suits your message.",
    coverStat: "Leaflet vs flyer",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "A leaflet is a small printed sheet, flat or folded once, that gives information about a product, service or event. A flyer is usually a single flat promotional sheet, a brochure is folded into panels, and a booklet has several pages bound together.",
    tags: ["what is a leaflet", "leaflet vs flyer", "leaflets design", "brochure"],
    relatedTopics: ["brochure-printing", "book-printing"],
    intro: "The words are often used interchangeably, but printers and designers usually mean slightly different things. Knowing the difference helps you brief the right product and price.",
    sections: [
      {
        heading: "The differences at a glance",
        blocks: [
          table(
            ["Format", "Build", "Typical sizes", "Use"],
            [
              ["Flyer", "Single flat sheet, often one-sided", "A5, A4, DL", "Short promotions, events, hand-outs"],
              ["Leaflet", "Flat or folded once, double-sided", "A5, A4, DL", "Information, menus, instructions"],
              ["Brochure", "One sheet folded into panels", "A4 to DL tri-fold, A3 to A4", "Services, products, company overviews"],
              ["Booklet", "Several sheets stapled or bound", "A5, A4", "Catalogues, programmes, profiles"],
            ],
          ),
        ],
      },
      {
        heading: "Choosing the right one",
        blocks: [
          ul([
            "One offer or event: a flyer.",
            "A menu, price list or set of instructions: a leaflet.",
            "A service overview for reception desks and exhibitions: a tri-fold brochure.",
            "More than eight panels of content: a stapled booklet.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Is a leaflet the same as a flyer?", a: "Close, but not quite. A flyer is usually a single flat promotional sheet; a leaflet is more informational and may be folded once." },
      { q: "What paper is used for leaflets?", a: "Typically 130 to 170 gsm coated paper." },
    ],
  },
  {
    slug: "a4-sticker-paper-guide",
    title: "A4 sticker paper: types, label layouts and printing",
    metaDescription: "A4 sticker paper explained: paper vs vinyl, gloss vs matt, kiss-cut label layouts, and when to switch to professionally printed labels.",
    category: CAT,
    excerpt: "Which A4 sticker sheets to buy for office printing, and when professional label printing makes more sense.",
    coverStat: "A4 labels",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "A4 sticker paper is a 210 x 297 mm sheet with adhesive backing, sold as a full sheet or pre-cut into labels. Paper stickers suit dry, indoor use; vinyl or polyester sheets resist water and are better for products.",
    tags: ["a4 sticker paper", "a4 paper with sticker", "paper sticker a4", "sticker printing"],
    relatedTopics: ["product-labels", "hologram-stickers"],
    intro: "A4 sticker sheets are handy for small runs printed in the office: address labels, file labels and short batches of product stickers. For larger runs or special shapes, professionally printed labels look better and cost less per piece.",
    sections: [
      {
        heading: "Types of A4 sticker sheets",
        blocks: [
          table(
            ["Type", "Best for", "Printer"],
            [
              ["Matt paper", "Office labels, addresses, files", "Laser or inkjet"],
              ["Gloss paper", "Colourful promotional stickers", "Check printer compatibility"],
              ["White or clear vinyl", "Water-resistant product stickers", "Usually laser or specialised"],
              ["Kraft paper", "Natural and handmade products", "Laser or inkjet"],
              ["Pre-cut layouts (e.g. 8, 14, 21, 24, 65 per sheet)", "Uniform labels", "Match the template to your printer"],
            ],
          ),
        ],
      },
      {
        heading: "When to switch to printed labels",
        blocks: [
          ul([
            "Runs of several hundred labels or more.",
            "Custom shapes such as circles, ovals or die-cut logos.",
            "Products kept in fridges, bathrooms or outdoors.",
            "Foil, embossing or hologram finishes.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Can I print A4 sticker paper on an inkjet printer?", a: "Yes, if the sheet is made for inkjet. Laser sheets and inkjet sheets use different coatings, so check the packaging." },
      { q: "Are A4 paper stickers waterproof?", a: "No. For water resistance use vinyl or polyester sheets, or laminate the stickers." },
    ],
  },
];
