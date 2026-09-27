import { p, table, ul } from "@/lib/content-types";
import type { BlogPost } from "@/lib/blog-data";

const D = "2026-09-24";
const CAT = "Stickers & Labels";

export const stickerPosts: BlogPost[] = [
  {
    slug: "types-of-stickers",
    title: "Types of stickers: materials, finishes and cuts explained",
    metaDescription: "Types of stickers explained: paper, vinyl, clear, holographic and metallic materials, gloss or matt finishes, and die-cut, kiss-cut and roll formats.",
    category: CAT,
    excerpt: "Paper or vinyl, clear or white, die-cut or on a roll: a plain guide to choosing the right sticker.",
    coverStat: "Sticker types",
    readTime: "5 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Stickers differ by material (paper, white vinyl, clear vinyl, holographic, metallic), finish (gloss, matt, laminated), cut (die-cut, kiss-cut, sheet, roll) and adhesive (permanent, removable, high-tack). Paper suits dry indoor use; vinyl resists water, sun and handling.",
    tags: ["stickers", "custom stickers", "sticker printing", "vinyl stickers printing", "logo stickers"],
    relatedTopics: ["product-labels", "hologram-stickers", "window-graphics"],
    intro: "Stickers are used for product labels, packaging seals, laptop giveaways, window promotions and car branding. The right one depends on where it will stick and how long it must last.",
    sections: [
      {
        heading: "Sticker materials",
        blocks: [
          table(
            ["Material", "Water and sun", "Best for"],
            [
              ["Paper (gloss, matt, kraft)", "Low", "Packaging seals, dry products, short promotions"],
              ["White vinyl", "High", "Product labels, laptops, bottles, outdoor"],
              ["Clear vinyl", "High", "Glass, bottles, no-label look"],
              ["Holographic", "High", "Eye-catching promos, security seals"],
              ["Metallic silver or gold", "High", "Premium brands, gift packaging"],
              ["Reflective vinyl", "High", "Vehicles, safety and night visibility"],
            ],
          ),
        ],
      },
      {
        heading: "Cuts and formats",
        blocks: [
          ul([
            "Die-cut: cut through the sticker and backing to the exact shape of the design.",
            "Kiss-cut: cut through the sticker only, leaving the backing square for easy peeling.",
            "Sheet stickers: several designs on one sheet, good for giveaways.",
            "Roll labels: for fast hand application or labelling machines.",
            "Round, square, oval and rectangle standard shapes cost less than custom outlines.",
          ]),
        ],
      },
      {
        heading: "Adhesives",
        blocks: [
          p("Permanent adhesive suits products and packaging. Removable adhesive peels cleanly from glass and walls at the end of a campaign. High-tack adhesive grips textured or powder-coated surfaces. For freezers and humid bathrooms, ask for an adhesive rated for those conditions."),
        ],
      },
    ],
    faqs: [
      { q: "What type of sticker is waterproof?", a: "Vinyl stickers, especially with a laminate, resist water, sun and scratching. Paper stickers do not." },
      { q: "What is the difference between die-cut and kiss-cut stickers?", a: "Die-cut stickers are cut through the backing to the shape; kiss-cut stickers keep a square backing and are cut only through the top layer." },
    ],
  },
  {
    slug: "cast-vs-calendered-vinyl",
    title: "Cast vs calendered vinyl: which sticker vinyl lasts longer",
    metaDescription: "Cast vs calendered vinyl compared: thickness, conformability, outdoor life, shrinkage and which suits vehicle wraps, walls and flat signs.",
    category: CAT,
    excerpt: "Why vehicle wraps use cast vinyl and flat signs often use calendered, and what that means in Gulf heat.",
    coverStat: "Cast vs calendered",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "signages",
    quickAnswer: "Cast vinyl is thin, stable and stretches over curves and rivets, so it suits vehicle wraps and long-term outdoor graphics. Calendered vinyl is thicker, cheaper and best on flat surfaces for shorter-term graphics, as it can shrink over time.",
    tags: ["vinyl stickers printing", "vehicle wrap vinyl", "cast vinyl", "calendered vinyl"],
    relatedTopics: ["window-graphics", "wall-stickers-decals", "floor-graphics"],
    intro: "Two sheets of vinyl can look identical on the roll and behave very differently on a car door in August. The way the film is made decides how it handles curves, heat and time.",
    sections: [
      {
        heading: "How they compare",
        blocks: [
          table(
            ["", "Cast vinyl", "Calendered vinyl"],
            [
              ["How it is made", "Poured as a liquid and cured", "Rolled and stretched through rollers"],
              ["Thickness", "Thin, typically about 50 microns", "Thicker, typically about 70 to 100 microns"],
              ["Curves and rivets", "Conforms well", "Best on flat or gently curved surfaces"],
              ["Shrinkage", "Very low", "Can shrink and lift at edges over time"],
              ["Typical use", "Vehicle wraps, long-term outdoor graphics", "Flat signs, windows, short-term promotions"],
              ["Cost", "Higher", "Lower"],
            ],
            "Thickness and life vary by manufacturer and product line; check the data sheet.",
          ),
        ],
      },
      {
        heading: "In Gulf conditions",
        blocks: [
          p("Heat, UV and sand are harder on vinyl than in cooler climates, so manufacturers' outdoor life figures should be treated as best case. For vehicles and sun-facing graphics, choose cast film with a matching laminate from the same manufacturer, and keep calendered film for flat, shorter-term work."),
        ],
      },
    ],
    faqs: [
      { q: "Which vinyl is used for car wraps?", a: "Cast vinyl, because it stretches over curves without shrinking back." },
      { q: "Is calendered vinyl bad?", a: "No. It is good value for flat surfaces and campaigns of a few months to a few years." },
    ],
  },
  {
    slug: "gold-labels-foil-stickers",
    title: "Gold labels and foil stickers: foil paper, hot foil and metallic film",
    metaDescription: "Gold labels explained: gold foil paper, hot foil stamping, metallic polyester and embossed seals for perfume, gifts, candles and premium packaging.",
    category: CAT,
    excerpt: "Three ways to make a gold label, and which suits perfume, gifts, candles and seals.",
    coverStat: "Gold labels",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "packaging",
    quickAnswer: "Gold labels are made by printing on gold metallic paper or polyester, by hot foil stamping gold onto white or coloured stock, or by combining foil with embossing. Metallic polyester resists moisture best; hot foil gives the sharpest, most premium shine.",
    tags: ["gold labels", "gold stickers", "foil stickers", "perfume labels"],
    relatedTopics: ["product-labels", "cosmetic-packaging", "custom-printed-boxes"],
    intro: "Gold labels signal a premium product instantly, which is why they appear on perfume, oud, chocolates, candles and gift boxes across the Gulf.",
    sections: [
      {
        heading: "Ways to make a gold label",
        blocks: [
          table(
            ["Method", "Look", "Best for"],
            [
              ["Gold metallic paper", "Gold background, printed text", "Gift seals, short runs"],
              ["Gold metallic polyester", "Durable gold, water resistant", "Perfume, cosmetics, bottles"],
              ["Hot foil stamping", "Bright foil on white, black or coloured stock", "Luxury logos and fine details"],
              ["Foil plus embossing", "Raised, shining logo", "Seals and premium packaging"],
              ["Digital foil", "Foil on printed areas without dies", "Short runs and personalisation"],
            ],
          ),
        ],
      },
      {
        heading: "Design tips",
        blocks: [
          ul([
            "Very thin lines and tiny text can fill in when foiled; keep details above about 0.3 mm.",
            "Black or deep navy stock makes gold foil stand out most.",
            "Rose gold, silver and holographic foils are alternatives to classic gold.",
            "Ask for a physical sample: foil looks different in hand than on screen.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Are gold labels waterproof?", a: "Metallic polyester labels are water resistant. Gold paper labels are not unless laminated." },
      { q: "What is hot foil stamping?", a: "A heated die presses metallic foil onto the label, leaving a bright, crisp metallic design." },
    ],
  },
  {
    slug: "one-way-vision-sticker",
    title: "One-way vision stickers: how they work and where to use them",
    metaDescription: "How one-way vision stickers work: perforated vinyl, 50/50 and 70/30 ratios, visibility from inside, day vs night, and uses on shops and vehicles.",
    category: CAT,
    excerpt: "Perforated vinyl that shows a graphic outside and keeps the view from inside. How it works and its limits.",
    coverStat: "One-way vision",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "signages",
    quickAnswer: "One-way vision sticker is perforated vinyl printed on the outside with a black backing. From outside you see the graphic; from inside you see out through the holes. Common perforation ratios are 50/50 and 70/30 (print area to holes).",
    tags: ["one way vision sticker", "sticker one way vision", "window stickers", "shopfront graphics"],
    relatedTopics: ["window-graphics", "frosted-glass-stickers", "retail-branding"],
    intro: "One-way vision turns shop windows, office glass and vehicle rear windows into advertising space without blocking the view from inside.",
    sections: [
      {
        heading: "How it works",
        blocks: [
          p("The film is covered in small holes. The white face is printed with the design and the adhesive side is black. Your eye looks through the black side and the holes easily from inside, while from outside the brighter printed face dominates. It works best when the outside is brighter than the inside, so the effect reverses at night when interior lights are on."),
        ],
      },
      {
        heading: "Choosing the film",
        blocks: [
          table(
            ["Ratio", "Graphic", "View out"],
            [
              ["70/30", "Stronger image", "Slightly darker view"],
              ["60/40", "Balanced", "Balanced"],
              ["50/50", "Lighter image", "Clearer view; common on vehicles"],
            ],
          ),
          ul([
            "Optically clear laminate keeps dirt and water out of the holes.",
            "Avoid fine text and thin lines, which break up across the holes.",
            "Check vehicle rules before covering rear and side windows.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Can people see inside through one-way vision at night?", a: "Yes, partly. When the interior is lit and it is dark outside, the effect reverses and people can see in." },
      { q: "Is one-way vision removable?", a: "Yes. It is designed to be removed from glass at the end of a campaign." },
    ],
  },
  {
    slug: "transparent-stickers",
    title: "Transparent stickers: clear labels for glass, bottles and windows",
    metaDescription: "Transparent stickers explained: clear vinyl and clear BOPP, white ink underprint, uses on glass, bottles and windows, and design tips.",
    category: CAT,
    excerpt: "How clear stickers are printed, why white ink matters, and where the no-label look works best.",
    coverStat: "Clear stickers",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "packaging",
    quickAnswer: "Transparent stickers are printed on clear vinyl or clear BOPP film. Because ink is translucent, a white underprint layer is added behind colours so they stay bright on dark or clear surfaces.",
    tags: ["transparent stickers", "clear stickers", "clear labels", "glass stickers"],
    relatedTopics: ["product-labels", "window-graphics", "cosmetic-packaging"],
    intro: "Clear stickers let the product, drink or glass show through, giving a clean 'printed directly on' look for bottles, jars, cosmetics and shop windows.",
    sections: [
      {
        heading: "Printing clear stickers",
        blocks: [
          ul([
            "Clear BOPP: common for bottles and jars; resists water and oil.",
            "Clear vinyl: flexible, for windows, glass doors and curved surfaces.",
            "White underprint: gives colours opacity; areas without white stay clear.",
            "Reverse printing: prints on the adhesive side for stickers read through glass from outside.",
          ]),
        ],
      },
      {
        heading: "Design tips",
        blocks: [
          p("Test contrast against the real product: black text disappears on dark bottles and white text on clear water. Bubble-free application needs a smooth, clean surface; roll labels applied by machine give the most consistent no-label look."),
        ],
      },
    ],
    faqs: [
      { q: "Why do clear stickers need white ink?", a: "Standard inks are translucent. A white layer underneath keeps colours bright on clear or dark surfaces." },
      { q: "Can clear stickers go inside a shop window?", a: "Yes, with reverse printing so they read correctly from outside." },
    ],
  },
  {
    slug: "roll-stickers-vs-sheet-stickers",
    title: "Roll stickers vs sheet stickers: which format to order",
    metaDescription: "Roll stickers vs sheet stickers: when to choose each, roll core sizes, unwind direction, labelling machines, and sheet layouts for giveaways.",
    category: CAT,
    excerpt: "Rolls for fast application and machines, sheets for giveaways and small batches. What to tell your printer.",
    coverStat: "Roll vs sheet",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "packaging",
    quickAnswer: "Choose roll stickers for applying many identical labels quickly by hand or machine, and sheet stickers for giveaways, small batches or several designs together. For rolls, give your printer the core size, roll diameter limit and unwind direction.",
    tags: ["roll of stickers", "sticker sheets", "roll labels", "label printing"],
    relatedTopics: ["product-labels", "hologram-stickers"],
    intro: "The format matters as much as the design once you are applying hundreds of stickers a day.",
    sections: [
      {
        heading: "When to use each",
        blocks: [
          table(
            ["Format", "Best for"],
            [
              ["Roll", "Product labels, packaging seals, delivery bags, labelling machines"],
              ["Sheet", "Giveaways, sticker packs, small batches, mixed designs"],
              ["Single die-cut", "Laptop and merchandise stickers handed out one by one"],
            ],
          ),
        ],
      },
      {
        heading: "Roll details to confirm",
        blocks: [
          ul([
            "Core size, commonly 25 mm, 40 mm or 76 mm, to fit your dispenser or machine.",
            "Maximum outer roll diameter.",
            "Unwind direction: which way the label faces as it comes off the roll.",
            "Gap between labels and number of labels per roll.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What core size do label machines use?", a: "Many use 76 mm cores; hand dispensers often use 25 or 40 mm. Check your equipment." },
    ],
  },
  {
    slug: "magnetic-car-stickers",
    title: "Magnetic car signs: when to choose magnets over vinyl",
    metaDescription: "Magnetic car signs vs vinyl stickers: thickness, sizes, where they stick, care in hot weather, and when vehicle branding needs a permit.",
    category: CAT,
    excerpt: "Removable magnetic panels for cars and vans: pros, limits and how to care for them in the heat.",
    coverStat: "Car magnets",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "signages",
    quickAnswer: "Magnetic car signs are printed flexible magnet sheets, usually around 0.75 to 0.85 mm thick, that stick to flat steel panels and come off in seconds. They suit personal cars used for work; permanent fleet branding is better done in vinyl.",
    tags: ["magnetic sticker", "stickers for cars", "car signage", "car magnets"],
    relatedTopics: ["window-graphics"],
    intro: "If a car is used for business during the week and family on weekends, a magnet lets you brand it only when you need to.",
    sections: [
      {
        heading: "Magnets vs vinyl",
        blocks: [
          table(
            ["", "Magnetic sign", "Vinyl graphics"],
            [
              ["Removal", "Seconds, reusable", "Permanent until removed professionally"],
              ["Surfaces", "Flat steel panels only", "Almost any panel and glass"],
              ["Look", "Visible panel edge", "Painted-on look"],
              ["Best for", "Occasional business use", "Fleet and long-term branding"],
            ],
          ),
        ],
      },
      {
        heading: "Care and rules",
        blocks: [
          ul([
            "Magnets do not stick to aluminium, fibreglass or plastic panels.",
            "Remove and clean regularly so dust and moisture do not mark the paint.",
            "In strong heat, park in shade or remove the magnet to protect the paint underneath.",
            "In Dubai, commercial advertising on vehicles generally needs an RTA permit; other emirates and GCC countries have their own rules. Check before driving with branded panels.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Will a magnetic sign damage car paint?", a: "Not if it is removed and cleaned regularly. Leaving it on for weeks can trap dirt and moisture." },
      { q: "Do magnetic signs fly off on the highway?", a: "Quality magnets on a flat, clean steel panel stay on at normal speeds. Curves, edges and body filler weaken the grip." },
    ],
  },
  {
    slug: "clothing-labels-guide",
    title: "Clothing labels: woven, printed, heat transfer and care labels",
    metaDescription: "Clothing label types for brands: woven, printed satin, heat transfer tagless labels, care labels, hang tags, sizes and folding styles.",
    category: CAT,
    excerpt: "Woven or printed, sewn or tagless: choosing brand labels, care labels and hang tags for apparel.",
    coverStat: "Woven labels",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Brand clothing labels are usually woven (durable, textured), printed satin or cotton (soft, fine detail), or heat transfer (tagless, printed inside the garment). Care labels carry fibre content and washing symbols, and hang tags are card tags attached at retail.",
    tags: ["clothing labels", "woven labels", "hang tags", "care labels"],
    relatedTopics: ["custom-t-shirt-printing", "corporate-uniforms", "custom-hoodies"],
    intro: "Labels finish a garment and make merchandise and uniforms feel like a real brand rather than a printed blank.",
    sections: [
      {
        heading: "Label types",
        blocks: [
          table(
            ["Type", "Feel", "Best for"],
            [
              ["Woven damask", "Textured, durable", "Neck labels, premium apparel"],
              ["Printed satin", "Smooth, shiny", "Fine detail, lingerie, abayas"],
              ["Printed cotton", "Soft, natural", "Organic and casual brands"],
              ["Heat transfer (tagless)", "No tag to scratch", "T-shirts, sportswear"],
              ["Leather or PU patches", "Premium, rugged", "Denim, caps, bags"],
              ["Hang tags", "Card with string", "Retail price and brand story"],
            ],
          ),
        ],
      },
      {
        heading: "Folds and placement",
        blocks: [
          ul([
            "Straight cut: sewn on all four sides.",
            "End fold: edges folded under, sewn on two ends.",
            "Centre fold (loop): folded in half and sewn into a seam.",
            "Common placements: inside neck, side seam, hem or sleeve.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between woven and printed labels?", a: "Woven labels have the design woven into the fabric and last very long; printed labels are softer and show finer detail." },
      { q: "Are care labels required?", a: "Many markets expect fibre content and care instructions on garments sold at retail. Check the rules where you sell." },
    ],
  },
  {
    slug: "metal-stickers-guide",
    title: "Metal stickers and metal labels: nickel, aluminium and chrome",
    metaDescription: "Metal stickers explained: electroformed nickel 3D stickers, aluminium labels, chrome-look stickers and where each is used on products and packaging.",
    category: CAT,
    excerpt: "Thin raised nickel logos, printed aluminium labels and chrome-look stickers for premium products.",
    coverStat: "Metal stickers",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "packaging",
    quickAnswer: "Metal stickers are usually electroformed nickel (a thin, raised metal logo with no background), anodised or printed aluminium labels, or metallic-look vinyl. Nickel stickers are popular on perfume, electronics, furniture and gift boxes.",
    tags: ["metal stickers", "metal labels", "nickel stickers", "logo stickers"],
    relatedTopics: ["cosmetic-packaging", "custom-printed-boxes", "product-labels"],
    intro: "A metal logo on a box or product reads as quality before anyone opens it.",
    sections: [
      {
        heading: "Types",
        blocks: [
          table(
            ["Type", "Look", "Use"],
            [
              ["Electroformed nickel", "Thin raised letters, gold, silver or colour", "Perfume, electronics, furniture, gift boxes"],
              ["Aluminium labels", "Printed or anodised, often etched", "Machinery nameplates, appliances"],
              ["Stainless steel plates", "Engraved, very durable", "Equipment and asset tags"],
              ["Metallic vinyl", "Metal look, flexible", "Budget alternative for packaging"],
            ],
          ),
        ],
      },
      {
        heading: "How nickel stickers are applied",
        blocks: [
          p("Nickel stickers come on a transfer tape. You press the logo onto the surface and peel the tape away, leaving only the separate metal letters. Smooth, clean, flat surfaces give the best result."),
        ],
      },
    ],
    faqs: [
      { q: "Are metal stickers waterproof?", a: "Yes. Nickel and aluminium resist water; adhesion depends on a clean, smooth surface." },
    ],
  },
  {
    slug: "sticker-printing-artwork-checklist",
    title: "Sticker printing artwork checklist: files, cut lines and sizes",
    metaDescription: "Sticker artwork checklist: vector cut lines, bleed, white ink layers, minimum text size, colour mode and file formats printers need.",
    category: CAT,
    excerpt: "What to send your printer so stickers come back cut, coloured and sized correctly.",
    coverStat: "Cut line ready",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "printing",
    quickAnswer: "Send stickers as vector PDF or AI files in CMYK at final size, with 2 to 3 mm bleed, a separate vector cut line (usually a named spot colour), a white ink layer for clear or metallic stock, and no text smaller than about 6 pt.",
    tags: ["sticker printing", "print stickers", "die cut stickers", "artwork setup"],
    relatedTopics: ["product-labels", "hologram-stickers"],
    intro: "Most sticker reprints come from artwork issues, not printing faults. A quick check before sending saves days.",
    sections: [
      {
        heading: "Checklist",
        blocks: [
          ul([
            "Final size set correctly in millimetres.",
            "2 to 3 mm bleed beyond the cut line.",
            "Cut line as a separate vector path on its own layer, named as the printer asks.",
            "Keep text and logos 2 mm inside the cut line.",
            "Text at least about 6 pt; lines at least 0.25 pt.",
            "CMYK colour, with Pantone references for brand colours.",
            "White ink layer for clear, kraft or metallic stock.",
            "Fonts outlined and images at 300 DPI.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What file format is best for stickers?", a: "Vector PDF or AI with the cut line on a separate layer." },
    ],
  },
];
