import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

export const stickerTopics: Topic[] = [
  {
    slug: "frosted-glass-stickers",
    name: "Frosted Glass Stickers",
    category: "Stickers & Vinyl",
    section: "signages",
    primaryKeyword: "frosted glass sticker",
    seoTitle: "Frosted Glass Stickers & Frosted Film for Offices",
    metaDescription:
      "Frosted glass stickers and etched-effect film for office partitions, meeting rooms, clinics and shopfronts: privacy bands, cut logos and printed frosting.",
    intro:
      "Frosted film gives glass the look of sandblasted or etched glass for a fraction of the cost. It adds privacy to meeting rooms and clinics, marks glass doors so people do not walk into them, and carries a logo without blocking light.",
    cityPages: true,
    sections: [
      {
        heading: "Common applications",
        blocks: [
          ul([
            "Privacy bands across glass partitions, usually from about 90 to 180 cm above the floor.",
            "Manifestation strips on glass doors, which safety codes often require so glass is visible.",
            "Cut-out logos and patterns where the clear areas show the design.",
            "Full-height frosting for clinic treatment rooms, washrooms and prayer rooms.",
            "Shopfront glass with opening hours and brand names.",
          ]),
        ],
      },
      {
        heading: "Frosted film types",
        blocks: [
          table(
            ["Film", "Effect"],
            [
              ["Plain frosted (etch)", "Even matt finish like sandblasted glass"],
              ["Cut frosted", "Logos, stripes or patterns cut from frosted film"],
              ["Printed frosted", "Colour printed on frosted or clear film"],
              ["Gradient frosted", "Fades from opaque to clear"],
              ["Dusted crystal and coloured frost", "Tinted or textured decorative effects"],
            ],
          ),
          p("Frosted film is applied to the inside of the glass wherever possible, where it is protected from cleaning and weather. It can be removed later without damaging the glass."),
        ],
      },
    ],
    faqs: [
      {
        q: "Can frosted film be removed?",
        a: "Yes. Quality frosted vinyl peels off cleanly, and any adhesive residue can be cleaned from the glass.",
      },
      {
        q: "Can you see through frosted glass film at night?",
        a: "Frosted film blurs shapes but lets light through. At night, with lights on inside, silhouettes can show. For full privacy, use opaque or blackout film.",
      },
    ],
    related: ["window-graphics", "wall-stickers-decals", "acrylic-name-plates"],
  },
  {
    slug: "window-graphics",
    name: "Window Graphics & One-Way Vision",
    category: "Stickers & Vinyl",
    section: "signages",
    primaryKeyword: "window graphics",
    seoTitle: "Window Graphics, One-Way Vision & Shopfront Vinyl",
    metaDescription:
      "Shopfront window graphics, one-way vision film, promotional vinyl and cut lettering for retail, restaurants and offices in the UAE, Qatar and GCC.",
    intro:
      "Shop windows are free advertising space facing the street or the mall walkway. Window graphics turn them into signs, promotions and privacy screens, and they can be changed with every campaign.",
    cityPages: true,
    sections: [
      {
        heading: "Types of window graphics",
        blocks: [
          table(
            ["Type", "What it does", "Use"],
            [
              ["One-way vision (perforated)", "Printed outside, see-through from inside", "Shopfronts, offices, vehicle rear windows"],
              ["Full-colour opaque vinyl", "Blocks the view completely", "Hoardings, back-of-house windows"],
              ["Cut vinyl lettering", "Only the letters are applied", "Opening hours, logos, contact details"],
              ["Clear printed vinyl", "Colour graphics on transparent film", "Promotions that keep the view open"],
              ["Static cling", "No adhesive, reusable", "Short campaigns and seasonal sales"],
              ["Double-sided window print", "Reads from both sides", "Mall stores seen from inside and out"],
            ],
          ),
        ],
      },
      {
        heading: "Heat and sun in the Gulf",
        blocks: [
          p("Strong sun fades cheap inks and bakes adhesive onto glass. For street-facing windows, use UV-resistant inks and laminates, and choose removable adhesives so graphics come off cleanly at the end of a campaign. Dark films on the inside of sun-facing glass can heat the glass, so check with the building before covering large areas."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is one-way vision film?",
        a: "A perforated vinyl printed on one side. From outside you see the graphic; from inside you can still see out through the small holes.",
      },
    ],
    related: ["frosted-glass-stickers", "floor-graphics", "retail-branding"],
  },
  {
    slug: "wall-stickers-decals",
    name: "Wall Stickers & Office Wall Graphics",
    category: "Stickers & Vinyl",
    section: "fit-out",
    primaryKeyword: "wall stickers",
    seoTitle: "Office Wall Graphics, Wall Stickers & Wallpaper",
    metaDescription:
      "Office wall graphics, printed wallpaper, cut vinyl decals and brand walls for offices, cafes, schools and retail across the UAE, Qatar and GCC.",
    intro:
      "Wall graphics put a brand's story on the walls without repainting or building: values in reception, a mural in a cafe, a timeline in a corridor, or wayfinding in a school.",
    sections: [
      {
        heading: "Options",
        blocks: [
          ul([
            "Cut vinyl decals: letters, logos and line art with no background.",
            "Printed wall vinyl: full-colour murals applied like a sticker, removable.",
            "Printed wallpaper: textured or smooth paper and fabric-backed vinyl for permanent walls.",
            "Magnetic and whiteboard wall films for meeting rooms.",
            "3D letters combined with printed walls for reception brand walls.",
          ]),
        ],
      },
      {
        heading: "Wall surfaces matter",
        blocks: [
          p("Vinyl sticks best to smooth, sealed and fully cured paint. Fresh paint needs time to cure before vinyl goes on, and textured or damp walls may need wallpaper instead. Removable vinyl can lift freshly painted surfaces, so the wall condition is checked before printing."),
        ],
      },
    ],
    faqs: [
      {
        q: "Will wall stickers damage paint?",
        a: "Removable vinyl on well-cured paint usually comes off cleanly. On poor or fresh paint, some lifting can happen, so a test patch is sensible.",
      },
    ],
    related: ["frosted-glass-stickers", "3d-letter-signage", "floor-graphics"],
  },
  {
    slug: "floor-graphics",
    name: "Floor Graphics",
    category: "Stickers & Vinyl",
    section: "signages",
    primaryKeyword: "floor stickers",
    seoTitle: "Floor Graphics & Floor Stickers",
    metaDescription:
      "Anti-slip floor graphics and floor stickers for retail promotions, wayfinding, events and exhibitions, indoor and outdoor, across the UAE, Qatar and GCC.",
    intro:
      "Floor graphics sit where shoppers look when they walk. They guide queues, lead people to a product or booth, and brand the floor of an exhibition stand.",
    sections: [
      {
        heading: "Where floor graphics are used",
        blocks: [
          ul([
            "Wayfinding in malls, hospitals, airports and warehouses.",
            "In-store promotions leading to an aisle or product.",
            "Queue and spacing markers.",
            "Exhibition booths and event entrances.",
            "Outdoor pavement graphics on concrete and asphalt, with a suitable textured film.",
          ]),
        ],
      },
      {
        heading: "Safety and materials",
        blocks: [
          table(
            ["Floor", "Film"],
            [
              ["Tiles, vinyl, polished concrete", "Floor vinyl with anti-slip laminate"],
              ["Carpet (events)", "Carpet graphic film or printed carpet"],
              ["Outdoor concrete, asphalt", "Textured road-marking style film"],
            ],
          ),
          p("Floor graphics should always carry an anti-slip rated laminate. Short-term films suit campaigns of a few weeks; longer campaigns need heavier-duty laminates."),
        ],
      },
    ],
    faqs: [
      {
        q: "Are floor stickers slippery?",
        a: "Not when they are finished with an anti-slip laminate, which is standard for floor graphics.",
      },
    ],
    related: ["window-graphics", "wall-stickers-decals", "exhibition-booth-design"],
  },
  {
    slug: "hologram-stickers",
    name: "Hologram & Security Stickers",
    category: "Stickers & Vinyl",
    section: "printing",
    primaryKeyword: "hologram stickers",
    seoTitle: "Hologram Stickers & Tamper-Evident Security Labels",
    metaDescription:
      "Hologram stickers, tamper-evident void labels, warranty seals and serial-numbered security labels for product authentication across the UAE and GCC.",
    intro:
      "Security stickers protect products and packaging from tampering and copying. They show when a box has been opened and help customers tell genuine products from counterfeits.",
    sections: [
      {
        heading: "Types of security labels",
        blocks: [
          table(
            ["Label", "How it protects"],
            [
              ["Hologram sticker", "Hard-to-copy rainbow or 3D effect"],
              ["VOID tamper-evident label", "Leaves a VOID pattern when peeled"],
              ["Destructible (eggshell) vinyl", "Breaks into pieces if removed"],
              ["Serial-numbered labels", "Each label unique for tracking"],
              ["QR or scratch-off verification", "Customer checks authenticity online"],
              ["Warranty seals", "Show if a device has been opened"],
            ],
          ),
        ],
      },
      {
        heading: "Where they are used",
        blocks: [
          p("Electronics warranty seals, cosmetics and perfume boxes, pharmaceutical and supplement packs, food delivery bag seals, event wristbands and tickets, and certificates."),
        ],
      },
    ],
    faqs: [
      {
        q: "Can hologram stickers be customised with my logo?",
        a: "Yes. Standard hologram patterns can be overprinted with a logo, and fully custom holograms can be made for larger runs.",
      },
    ],
    related: ["product-labels", "cosmetic-packaging", "custom-printed-boxes"],
  },
  {
    slug: "product-labels",
    name: "Product Labels",
    category: "Stickers & Vinyl",
    section: "packaging",
    primaryKeyword: "product labels",
    seoTitle: "Custom Product Labels: Materials, Finishes & Rolls",
    metaDescription:
      "Custom product labels for food, cosmetics, perfume, candles and beverages: paper, BOPP and clear labels on rolls or sheets, with foil and embossing, in the GCC.",
    intro:
      "A product label carries the brand, the legal information and often the barcode, all on a small surface that has to survive fridges, bathrooms or oily hands. The material matters as much as the design.",
    sections: [
      {
        heading: "Label materials",
        blocks: [
          table(
            ["Material", "Water and oil", "Use"],
            [
              ["Uncoated or textured paper", "Low", "Dry goods, candles, artisan products"],
              ["Gloss or matt paper", "Low to medium", "Short-life products, boxes"],
              ["White BOPP (plastic)", "High", "Cosmetics, sauces, cleaning products, fridge items"],
              ["Clear BOPP", "High", "No-label look on glass and bottles"],
              ["Metallic silver or gold", "High", "Premium perfume and gifts"],
            ],
          ),
        ],
      },
      {
        heading: "Rolls or sheets",
        blocks: [
          ul([
            "Roll labels: for hand application at volume or for labelling machines. Tell the printer the core size, the roll direction and the label gap.",
            "Sheet labels: for small batches applied by hand or printed in-house.",
          ]),
          p("In the GCC, food and cosmetic labels often need Arabic text alongside English, plus ingredients, batch, expiry and origin details. Confirm the requirements for your product category with the regulator before printing."),
        ],
      },
      {
        heading: "Finishes",
        blocks: [
          p("Gold or silver foil, embossing, spot UV, soft-touch and matt or gloss laminates. Laminates also protect the print from scuffing and moisture."),
        ],
      },
    ],
    faqs: [
      {
        q: "Which label material is waterproof?",
        a: "BOPP (plastic) labels are water and oil resistant, which makes them the usual choice for cosmetics, drinks and anything kept in a fridge.",
      },
    ],
    related: ["hologram-stickers", "cosmetic-packaging", "custom-printed-boxes"],
  },
];
