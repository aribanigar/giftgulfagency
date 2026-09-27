import { p, table, ul } from "@/lib/content-types";
import type { BlogPost } from "@/lib/blog-data";

const D = "2026-09-23";

export const printProductPosts: BlogPost[] = [
  {
    slug: "envelope-sizes",
    title: "Envelope sizes: DL, C4, C5 and C6 explained",
    metaDescription: "Envelope sizes chart: DL 110 x 220 mm, C6, C5, C4 and C3, which paper size fits each, window positions and printing for business mail.",
    category: "Sizes & Specs",
    excerpt: "Which envelope fits A4, A5 and folded letters, with every standard size in mm.",
    coverStat: "DL 110 x 220 mm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "DL envelopes (110 x 220 mm) hold an A4 folded in three. C5 (162 x 229 mm) holds A5 or A4 folded once, C4 (229 x 324 mm) holds A4 flat, and C6 (114 x 162 mm) holds A6 or A4 folded twice.",
    tags: ["envelope", "envelopes", "envelope sizes", "dl envelope", "business stationery"],
    relatedTopics: ["brochure-printing"],
    intro: "Envelope sizes are designed around the A-series paper sizes, so the right envelope depends on what goes inside and how it is folded.",
    sections: [
      {
        heading: "Envelope size chart",
        blocks: [
          table(
            ["Envelope", "Size (mm)", "Holds"],
            [
              ["C6", "114 x 162", "A6, or A4 folded twice"],
              ["DL", "110 x 220", "A4 folded in three, DL flyers"],
              ["C5", "162 x 229", "A5, or A4 folded once"],
              ["C4", "229 x 324", "A4 flat, certificates, brochures"],
              ["C3", "324 x 458", "A3 flat"],
              ["B4", "250 x 353", "Thick A4 documents and catalogues"],
            ],
          ),
        ],
      },
      {
        heading: "Printed business envelopes",
        blocks: [
          ul([
            "Window envelopes: the address on the letter shows through, saving labels.",
            "Peel-and-seal or gummed flaps.",
            "Logo and return address printed on the front or flap.",
            "Paper: typically 90 to 120 gsm for letters; board-backed for certificates.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What envelope fits A4 without folding?", a: "C4, which is 229 x 324 mm." },
      { q: "What is a DL envelope?", a: "A 110 x 220 mm envelope that holds an A4 sheet folded into three." },
    ],
  },
  {
    slug: "certificate-printing-guide",
    title: "Certificate printing: paper, sizes, foil and security features",
    metaDescription: "Certificate printing guide: A4 and A3 sizes, 250 to 350 gsm paper, gold foil, embossed seals, numbering and security features for awards and training.",
    category: "Printing",
    excerpt: "How to print certificates that look official: paper, foil, seals, numbering and folders.",
    coverStat: "A4 certificates",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Most certificates are A4 on 250 to 350 gsm textured or smooth board, often with gold or silver foil, an embossed seal and a printed or individual number. Security features such as holograms help for training and academic certificates.",
    tags: ["certificate", "certificate printing", "award certificates", "training certificates"],
    relatedTopics: ["hologram-stickers", "brochure-printing"],
    intro: "Certificates are kept, framed and shown, so the paper and finish carry as much weight as the wording.",
    sections: [
      {
        heading: "Paper and size",
        blocks: [
          table(
            ["Option", "Common choice"],
            [
              ["Size", "A4 landscape or portrait; A3 for large awards"],
              ["Paper", "250 to 350 gsm board, textured, linen or smooth"],
              ["Colour", "White, cream or ivory"],
              ["Personalisation", "Names printed digitally from a spreadsheet"],
            ],
          ),
        ],
      },
      {
        heading: "Finishes and security",
        blocks: [
          ul([
            "Gold, silver or rose gold foil on borders, logos and seals.",
            "Embossed or debossed seal for an official feel.",
            "Individual serial numbers for verification.",
            "Hologram stickers or QR codes linking to an online check.",
            "Certificate folders or frames for presentation.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What paper is used for certificates?", a: "Usually 250 to 350 gsm board, often textured or linen finish." },
      { q: "Can each certificate have a different name?", a: "Yes. Names are merged from a spreadsheet and printed digitally on each sheet." },
    ],
  },
  {
    slug: "company-stamps-uae",
    title: "Company stamps in the UAE: self-inking, pre-inked and rubber",
    metaDescription: "Company stamp types in the UAE: self-inking, pre-inked and traditional rubber stamps, sizes, what goes on a company stamp, and ordering tips.",
    category: "Printing",
    excerpt: "Self-inking or pre-inked, round or rectangular: choosing a company stamp and what goes on it.",
    coverStat: "Company stamps",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Company stamps in the UAE are usually round or rectangular self-inking or pre-inked stamps showing the company name in English and Arabic, often with the city and trade licence details. Suppliers usually ask for a copy of the trade licence before making a company seal.",
    tags: ["stamp", "uae stamp", "company stamp", "self ink stamps", "stamp dubai"],
    relatedTopics: ["brochure-printing"],
    intro: "Stamped documents are still part of daily business in the UAE: invoices, delivery notes, quotations and letters are commonly signed and stamped.",
    sections: [
      {
        heading: "Stamp types",
        blocks: [
          table(
            ["Type", "How it works", "Best for"],
            [
              ["Self-inking", "Built-in ink pad flips with each press", "Daily office use, fast stamping"],
              ["Pre-inked (flash)", "Ink held inside the rubber, very sharp", "Company seals, fine detail"],
              ["Traditional rubber", "Separate ink pad", "Occasional use, large stamps"],
              ["Pocket stamps", "Compact, with cover", "Sales and delivery staff"],
              ["Date and number stamps", "Adjustable bands", "Receiving and accounts"],
            ],
          ),
        ],
      },
      {
        heading: "What goes on a company stamp",
        blocks: [
          ul([
            "Registered company name in English and Arabic.",
            "City or emirate, and often the PO box.",
            "Trade licence number where required by your clients or processes.",
            "Logo, if the design stays clear at small sizes.",
          ]),
          p("Round stamps of about 38 to 45 mm diameter are common for company seals; rectangular stamps suit addresses and approval marks."),
        ],
      },
    ],
    faqs: [
      { q: "Do I need a trade licence to make a company stamp?", a: "Suppliers usually ask for a copy of the trade licence before making a stamp with your company name." },
      { q: "How long does a self-inking stamp last?", a: "Thousands of impressions; the pad can be re-inked or replaced." },
    ],
  },
  {
    slug: "letterhead-design-printing",
    title: "Letterhead design and printing: what to include and which paper",
    metaDescription: "Business letterhead design: what to include in the UAE, layout, 100 to 120 gsm paper, digital templates and matching stationery.",
    category: "Printing",
    excerpt: "What belongs on a business letterhead, and how to print one that works in the office printer.",
    coverStat: "Headed paper",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "A business letterhead is A4 headed paper with the logo, company name, address, contact details and often the trade licence and TRN. Print on 100 to 120 gsm uncoated paper so it runs through laser printers, and keep a matching Word template for digital letters.",
    tags: ["business headed paper", "letterhead", "stationery printing", "corporate stationery"],
    relatedTopics: ["brochure-printing"],
    intro: "Letterheads still carry quotations, contracts and official letters. A well-set letterhead makes every document look consistent.",
    sections: [
      {
        heading: "What to include",
        blocks: [
          ul([
            "Logo and registered company name, in English and Arabic if used.",
            "Address, phone, email and website.",
            "Trade licence number and, if VAT registered, the TRN, which many clients expect on commercial documents.",
            "Plenty of white space in the body area.",
          ]),
        ],
      },
      {
        heading: "Printing",
        blocks: [
          table(
            ["Choice", "Recommendation"],
            [
              ["Size", "A4, 210 x 297 mm"],
              ["Paper", "100 to 120 gsm uncoated, laser compatible"],
              ["Colour", "Full colour or brand spot colours"],
              ["Matching items", "Envelopes, compliment slips, business cards, folders"],
            ],
          ),
          p("Coated or heavily textured papers can smudge or jam in office printers, so test a sheet before a large run."),
        ],
      },
    ],
    faqs: [
      { q: "What gsm is letterhead paper?", a: "Usually 100 to 120 gsm uncoated paper." },
      { q: "Should a UAE letterhead show the TRN?", a: "If the company is VAT registered and uses the letterhead for commercial documents, showing the TRN is common practice." },
    ],
  },
  {
    slug: "payment-voucher-receipt-books",
    title: "Payment vouchers and receipt books: NCR carbonless printing",
    metaDescription: "Payment voucher and receipt book printing: 2-part and 3-part NCR carbonless sets, numbering, sizes, binding and what to include.",
    category: "Printing",
    excerpt: "How voucher and receipt books are made: carbonless copies, numbering, sizes and layout.",
    coverStat: "2-part NCR",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Payment vouchers, cash receipts and delivery notes are printed as NCR (carbonless) books: 2-part (white and yellow) or 3-part (white, pink, yellow) sets, sequentially numbered, glued at the top or side and bound in books of 50 or 100 sets.",
    tags: ["payment voucher", "payment voucher form", "receipt book", "petty cash voucher", "cash receipt voucher"],
    relatedTopics: ["book-printing"],
    intro: "Even with accounting software, many businesses still use printed vouchers and receipt books for petty cash, site deliveries and field sales.",
    sections: [
      {
        heading: "NCR sets",
        blocks: [
          table(
            ["Set", "Copies", "Typical use"],
            [
              ["2-part", "White original, yellow copy", "Receipts, petty cash vouchers"],
              ["3-part", "White, pink, yellow", "Delivery notes, invoices, job cards"],
              ["4-part", "Four colours", "Multi-department processes"],
            ],
          ),
        ],
      },
      {
        heading: "What to include",
        blocks: [
          ul([
            "Company name, logo, address and TRN if applicable.",
            "Sequential numbering for audit trails.",
            "Date, amount in figures and words, description and payee.",
            "Signature boxes for prepared, approved and received.",
            "Perforation so originals tear out cleanly.",
            "Common sizes: A5 and A4; books of 50 or 100 sets.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is NCR paper?", a: "No Carbon Required paper: coated sheets that transfer writing to the copies below without carbon paper." },
      { q: "Can vouchers be numbered?", a: "Yes. Sequential numbering is standard for vouchers and receipts." },
    ],
  },
  {
    slug: "canvas-print-sizes",
    title: "Canvas print sizes, frame depths and how to choose",
    metaDescription: "Canvas print sizes from 30 x 40 cm to 100 x 150 cm, 18 mm vs 38 mm frame depth, gallery wrap, resolution and canvas for offices and homes.",
    category: "Printing",
    excerpt: "Standard canvas sizes, frame depth, wrap styles and the image resolution each size needs.",
    coverStat: "30 x 40 to 100 x 150",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Popular canvas print sizes are 30 x 40, 40 x 60, 50 x 70, 60 x 90, 70 x 100 and 100 x 150 cm. Frames are usually about 18 mm (slim) or 38 mm (gallery) deep, with the image wrapped around the edges.",
    tags: ["canvas print", "canvas prints", "canvas printing", "canvas printing dubai", "wall art dubai"],
    relatedTopics: ["wall-stickers-decals"],
    intro: "Canvas prints bring photography and brand imagery into offices, hotels, clinics and homes without glass reflections.",
    sections: [
      {
        heading: "Common sizes",
        blocks: [
          table(
            ["Size (cm)", "Where it works", "Minimum image size (approx.)"],
            [
              ["30 x 40", "Desks, shelves, small walls", "2400 x 1800 px"],
              ["40 x 60", "Bedrooms, meeting rooms", "3000 x 2000 px"],
              ["50 x 70", "Feature spots", "3500 x 2500 px"],
              ["60 x 90", "Above sofas and desks", "4000 x 2700 px"],
              ["70 x 100", "Receptions, lobbies", "4500 x 3200 px"],
              ["100 x 150", "Large feature walls", "6000 x 4000 px"],
            ],
            "Image sizes are practical minimums for viewing from a normal distance.",
          ),
        ],
      },
      {
        heading: "Frame and wrap options",
        blocks: [
          ul([
            "Slim frame (about 18 mm): lighter, modern.",
            "Gallery frame (about 38 mm): deeper, stands off the wall, no frame needed.",
            "Image wrap: the picture continues around the edges.",
            "Mirror or colour edge: keeps the full image on the front.",
            "Floating frames for a finished gallery look.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is the most popular canvas size?", a: "40 x 60 cm and 60 x 90 cm are common choices for homes and offices." },
      { q: "Can I print a phone photo on canvas?", a: "Yes for smaller sizes. Large canvases need a higher-resolution image to stay sharp." },
    ],
  },
  {
    slug: "photo-print-sizes",
    title: "Photo print sizes: 4 x 6, 5 x 7, 8 x 10 and A4 explained",
    metaDescription: "Standard photo print sizes in inches and cm: 4 x 6, 5 x 7, 8 x 10, 8 x 12, A4 and A3, with the pixels each needs and gloss vs matt paper.",
    category: "Sizes & Specs",
    excerpt: "Standard photo print sizes, the pixels each needs, and which paper finish to choose.",
    coverStat: "4 x 6 in",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Standard photo print sizes are 4 x 6 in (10 x 15 cm), 5 x 7 in (13 x 18 cm), 8 x 10 in (20 x 25 cm), 8 x 12 in (20 x 30 cm), A4 (21 x 29.7 cm) and A3 (29.7 x 42 cm). A 4 x 6 print needs about 1200 x 1800 pixels at 300 DPI.",
    tags: ["photo printing dubai", "photo print sizes", "print photos", "photo prints"],
    relatedTopics: ["foam-board-printing"],
    intro: "Photo sizes follow camera proportions rather than paper sizes, which is why some images need cropping to fit.",
    sections: [
      {
        heading: "Photo sizes and pixels",
        blocks: [
          table(
            ["Size", "cm", "Pixels at 300 DPI"],
            [
              ["4 x 6 in", "10 x 15", "1200 x 1800"],
              ["5 x 7 in", "13 x 18", "1500 x 2100"],
              ["8 x 10 in", "20 x 25", "2400 x 3000"],
              ["8 x 12 in", "20 x 30", "2400 x 3600"],
              ["A4", "21 x 29.7", "2480 x 3508"],
              ["A3", "29.7 x 42", "3508 x 4961"],
            ],
          ),
        ],
      },
      {
        heading: "Finishes",
        blocks: [
          p("Gloss gives vivid colour but shows fingerprints and reflections. Matt or lustre reduces glare and suits frames and event displays. Most phone and camera photos have a 3:2 or 4:3 ratio, so 4 x 6 and 8 x 12 crop least from 3:2 images."),
        ],
      },
    ],
    faqs: [
      { q: "What is the standard photo print size?", a: "4 x 6 inches (10 x 15 cm)." },
      { q: "Will my photo be cropped?", a: "If its ratio differs from the print size, some edges are cropped. 3:2 photos fit 4 x 6 and 8 x 12 exactly." },
    ],
  },
  {
    slug: "desk-calendar-printing",
    title: "Desk calendar printing: sizes, binding and design ideas",
    metaDescription: "Branded desk calendar printing: tent calendar sizes, 12 or 13 pages, wire-o binding, board stands, and design ideas for corporate gifting.",
    category: "Printing",
    excerpt: "How branded desk calendars are made, and how to design one people keep all year.",
    coverStat: "12 or 13 pages",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Branded desk calendars are usually tent-style, around A5 landscape or 210 x 100 mm, with 12 or 13 printed pages on wire-o binding and a rigid board stand. Order in October or November so they reach clients before the new year.",
    tags: ["table calendar", "desk calendars", "calendar printing", "corporate calendars"],
    relatedTopics: ["book-printing", "brochure-printing"],
    intro: "A desk calendar sits in front of a client for twelve months, which makes it one of the longest-lived pieces of year-end print.",
    sections: [
      {
        heading: "Formats",
        blocks: [
          table(
            ["Format", "Size", "Notes"],
            [
              ["Tent desk calendar", "About A5 landscape or 210 x 100 mm", "Wire-o on a folded board stand"],
              ["Easel calendar", "A5 or square", "Flip pages on a stand"],
              ["Wall calendar", "A4, A3 or custom", "Hanging hook, 12 or 13 pages"],
              ["Planner calendar", "A4 landscape", "Space for notes"],
            ],
          ),
        ],
      },
      {
        heading: "Design ideas",
        blocks: [
          ul([
            "Show public holidays and key dates for your market, in English and Arabic.",
            "Use each month for a product, project or brand story.",
            "Hijri and Gregorian dates side by side are popular in the GCC.",
            "Add a 13th page for December or the following January.",
          ]),
          p("Public holidays tied to the Islamic calendar are announced close to the date, so mark them as expected dates."),
        ],
      },
    ],
    faqs: [
      { q: "When should I order corporate calendars?", a: "In October or November, so they are delivered before the new year." },
      { q: "Can calendars show Hijri dates?", a: "Yes. Dual Gregorian and Hijri calendars are common in the GCC." },
    ],
  },
  {
    slug: "presentation-folder-printing",
    title: "Presentation folder printing: sizes, pockets and card slots",
    metaDescription: "Printed presentation folders: A4 pocket folder sizes, 300 to 350 gsm board, single or double pockets, business card slots, capacity and finishes.",
    category: "Printing",
    excerpt: "A4 pocket folders for proposals, events and welcome packs: sizes, board and finishes.",
    coverStat: "A4 pocket folder",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Presentation folders hold A4 documents in one or two pockets, printed on 300 to 350 gsm board, usually around 220 x 310 mm closed. Business card slots, a capacity spine for thick packs and matt or soft-touch lamination are common options.",
    tags: ["pocket folder", "folders", "presentation folder", "corporate stationery"],
    relatedTopics: ["brochure-printing"],
    intro: "A good folder keeps proposals, contracts and welcome packs together and makes a strong first impression at meetings and events.",
    sections: [
      {
        heading: "Options",
        blocks: [
          ul([
            "Size: about 220 x 310 mm closed to hold A4 sheets.",
            "Board: 300 to 350 gsm, laminated for durability.",
            "Pockets: one on the right, or two.",
            "Business card slits on the pocket.",
            "Capacity spine (for example 5 mm) for thicker packs.",
            "Finishes: foil logo, spot UV, embossing.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What size is an A4 presentation folder?", a: "About 220 x 310 mm when closed, slightly larger than A4 so sheets fit inside." },
    ],
  },
  {
    slug: "booklet-printing-page-counts",
    title: "Booklet printing: page counts, binding and sizes",
    metaDescription: "Booklet printing guide: why saddle-stitched page counts must be multiples of 4, A5 and A4 sizes, paper, and when to switch to perfect binding.",
    category: "Printing",
    excerpt: "Why booklets come in multiples of four pages, and when to switch from stapled to glued binding.",
    coverStat: "Multiples of 4",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Stapled (saddle-stitched) booklets must have a page count in multiples of 4, including the cover: 8, 12, 16, 20 pages and so on, usually up to about 64 pages. Above that, perfect binding with a flat spine works better.",
    tags: ["booklets printing", "booklet printing dubai", "booklet pages", "booklets"],
    relatedTopics: ["book-printing", "brochure-printing"],
    intro: "Booklets are made from sheets folded in half and nested, so every sheet adds four pages. Knowing that avoids blank pages at the end.",
    sections: [
      {
        heading: "Page counts and binding",
        blocks: [
          table(
            ["Pages", "Binding", "Use"],
            [
              ["8 to 64 (multiples of 4)", "Saddle stitch (staples)", "Programmes, menus, catalogues"],
              ["40 and more", "Perfect binding (glued spine)", "Company profiles, reports"],
              ["Any", "Wire-o", "Manuals and planners that lie flat"],
            ],
          ),
        ],
      },
      {
        heading: "Sizes and paper",
        blocks: [
          ul([
            "A5 booklet: printed on A4 sheets folded in half.",
            "A4 booklet: printed on A3 sheets folded in half.",
            "Inside pages 100 to 170 gsm; covers 200 to 300 gsm for a sturdier feel.",
            "Self-cover (same paper throughout) is cheaper; a heavier cover looks better.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Why must booklet pages be multiples of 4?", a: "Each folded sheet creates four pages, so stapled booklets always add pages in groups of four." },
    ],
  },
];
