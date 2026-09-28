import { p, table, ul, type GuideSection } from "@/lib/content-types";

export type ServiceGuide = {
  /** Uppercase display headline for the guide block. */
  title: string;
  /** One paragraph shown beside the headline. */
  lead: string;
  sections: GuideSection[];
};

/**
 * Service-specific buyer's guides. Each one is written around what people
 * actually search before buying that service (sizes, materials, methods,
 * approvals, price drivers), so no two service pages share body copy.
 */
export const serviceGuides: Record<string, ServiceGuide> = {
  printing: {
    title: "Choosing the right print method",
    lead: "Most printing questions come down to three things: how many you need, what it is printed on, and how long it has to last. The method follows from those answers, not the other way round.",
    sections: [
      {
        heading: "Offset, digital or large-format?",
        blocks: [
          p("Offset printing uses metal plates and is the cheapest per piece once runs pass roughly 1,000 copies, which is why books, magazines, annual reports and high-volume brochures go to offset. Digital printing needs no plates, so a run of 50 brochures, a set of business cards or a personalised certificate batch is faster and cheaper digitally. Large-format printing covers anything wider than a desktop printer can handle: banners, roll-ups, foam boards, vinyl wraps and exhibition panels up to 3.2 m wide on roll-fed machines."),
          table(
            ["Method", "Best for", "Typical run", "Turnaround"],
            [
              ["Offset", "Books, magazines, catalogues, letterheads, high-volume flyers", "500 to 100,000+", "Longer, plates and drying"],
              ["Digital (toner / inkjet)", "Business cards, short-run brochures, menus, certificates, variable data", "1 to 1,000", "Fast, often next day"],
              ["Large-format (solvent, eco-solvent, latex, UV)", "Banners, roll-ups, backdrops, stickers, foam boards, wall graphics", "1 to a few hundred", "Fast once artwork is approved"],
              ["UV flatbed", "Direct print on acrylic, wood, metal, glass and gift items", "1 to thousands", "Fast, no screens or plates"],
              ["DTF and screen", "T-shirts, hoodies, jerseys, caps, tote bags", "DTF 1 to 200; screen 50+", "DTF fast; screen needs set-up"],
            ],
          ),
        ],
      },
      {
        heading: "Book, brochure and catalogue printing",
        blocks: [
          p("Page count and binding decide the format. Saddle stitching (two staples on the spine) suits brochures and booklets up to about 64 pages, and page counts must be in multiples of four. Perfect binding (glued spine) suits catalogues, reports and paperback books above roughly 40 pages. Hardcover case binding is used for coffee-table books, company profiles and photo books that need to last."),
          ul([
            "Paper weight: 130 to 170 gsm for brochure inner pages, 250 to 350 gsm for covers, 80 to 100 gsm uncoated for text-heavy books.",
            "Finish: matt or gloss lamination protects covers; spot UV and foil stamping lift a logo or title.",
            "Sizes: A4 and A5 are the standard brochure sizes in the Gulf; square 210 x 210 mm is popular for company profiles.",
            "Bilingual layouts: Arabic reads right to left, so a bilingual brochure is often designed as a flip book, with Arabic opening from the opposite cover.",
          ]),
        ],
      },
      {
        heading: "Paper sizes people ask about",
        blocks: [
          table(
            ["Size", "Millimetres", "Common use"],
            [
              ["A1", "594 x 841", "Posters, floor plans, event signage"],
              ["A2", "420 x 594", "Posters, menu boards"],
              ["A3", "297 x 420", "Posters, certificates, fold-out menus"],
              ["A4", "210 x 297", "Letterheads, brochures, reports, flyers"],
              ["A5", "148 x 210", "Flyers, notebooks, booklets, invitations"],
              ["A6", "105 x 148", "Postcards, vouchers, table cards"],
              ["Business card", "90 x 50 (UAE common) or 85 x 55", "Business cards"],
            ],
          ),
        ],
      },
      {
        heading: "What changes the price",
        blocks: [
          ul([
            "Quantity: the single biggest factor. Offset gets cheaper per piece as the run grows; digital stays flatter.",
            "Paper and stock: heavier, textured or specialty papers cost more than standard coated stock.",
            "Colours and finishing: lamination, foil, spot UV, die-cutting, embossing and special binding all add steps.",
            "Size and material for large-format: a PVC flex banner costs far less per square metre than a backlit fabric or a UV print on acrylic.",
            "Artwork readiness: print-ready files at the right size, with 3 mm bleed and CMYK colour, avoid design time.",
          ]),
        ],
      },
    ],
  },

  signages: {
    title: "Which sign is right for your shopfront",
    lead: "A sign is judged from across the road, at night and after three summers of sun. Letter style, material and lighting decide how it reads, how long it lasts and whether it gets approved.",
    sections: [
      {
        heading: "3D letters vs 2D letters",
        blocks: [
          p("2D signage means flat graphics: printed or cut vinyl on an ACP (aluminium composite) panel, a printed flex face in a light box, or a flat-cut acrylic logo only a few millimetres deep. It is the most economical option and works well for indoor branding, directories and secondary signs."),
          p("3D signage means letters with real depth, usually 30 to 100 mm or more, that stand off the wall and cast shadows. A 3D sign board reads from much further away, looks more premium and is the default choice for mall and street-facing shopfronts in Dubai, Abu Dhabi and Doha."),
          table(
            ["Type", "How it is made", "Best for"],
            [
              ["Flat-cut acrylic (2D)", "Laser-cut acrylic sheet, 3 to 20 mm", "Reception logos, office walls, directories"],
              ["ACP panel with vinyl (2D)", "Printed or cut vinyl on aluminium composite", "Budget shopfronts, warehouse and site signs"],
              ["Acrylic 3D letters", "Acrylic faces with acrylic or metal returns", "Mall shopfronts, cosmetic and fashion retail"],
              ["Stainless steel letters", "Brushed, mirror or gold-finish steel, welded", "Hotels, clinics, corporate lobbies, luxury retail"],
              ["Channel letters", "Metal returns with acrylic face and internal LEDs", "Street-facing shops and restaurants"],
            ],
          ),
        ],
      },
      {
        heading: "Lit or non-lit",
        blocks: [
          ul([
            "Front-lit channel letters: LEDs inside shine through a translucent acrylic face. The brightest and most common illuminated sign.",
            "Back-lit (halo) letters: a solid metal face with LEDs behind, washing a halo onto the wall. Used by hotels, clinics and premium brands.",
            "Light boxes: a printed face lit from inside. Economical for large logos, menu boards and double-sided projecting signs.",
            "LED neon flex: a flexible silicone tube that looks like glass neon, uses less power and does not break. Popular for cafes, salons and feature walls.",
            "Non-lit: acrylic, stainless steel or wood letters for indoor lobbies and daytime signs, often lit by spotlights instead.",
          ]),
        ],
      },
      {
        heading: "Built for Gulf heat",
        blocks: [
          p("Outdoor signs in the Gulf face surface temperatures well over 60 degrees Celsius, sandstorms and strong UV. That is why cast acrylic is preferred over extruded acrylic for faces, why LED modules need proper heat sinks and IP-rated power supplies, and why outdoor vinyl should be a cast or high-performance grade with UV lamination. Cheaper materials often yellow, warp or fade within one or two summers."),
        ],
      },
      {
        heading: "Permits and approvals",
        blocks: [
          p("Most outdoor signs in the GCC need approval from the local municipality before installation, and signs inside malls, free zones and business towers also need the landlord or free zone authority to sign off on size, position and lighting. Approval usually needs a scaled drawing, the trade licence and the landlord's no-objection letter. We prepare the drawings and mock-ups; applying early keeps the sign from holding up a shop opening."),
        ],
      },
      {
        heading: "What changes the price",
        blocks: [
          ul([
            "Letter height and total width of the sign.",
            "Material: flat acrylic, 3D acrylic, stainless steel or brass.",
            "Illumination type and the number of LED modules and power supplies.",
            "Mounting: raceway, direct fix or stand-off; height and access (scaffolding or boom lift).",
            "Approvals, night-time installation in malls, and removal of an old sign.",
          ]),
        ],
      },
    ],
  },

  "fit-out": {
    title: "How a fit-out actually runs",
    lead: "A fit-out turns an empty unit into a working shop, office, kiosk or restaurant. The design is the visible part; approvals, MEP and joinery decide whether it opens on time.",
    sections: [
      {
        heading: "Types of fit-out",
        blocks: [
          table(
            ["Type", "What is included", "Typical clients"],
            [
              ["Retail fit-out", "Shopfront, display joinery, cash counter, lighting, flooring, signage", "Fashion, cosmetics, electronics, pharmacies"],
              ["F&B fit-out", "Kitchen layout, counters, seating, extraction coordination, signage", "Cafes, restaurants, cloud kitchens"],
              ["Office fit-out", "Partitions, ceilings, flooring, meeting rooms, reception, branding", "SMEs, free zone offices, clinics"],
              ["Kiosk and pop-up", "Freestanding unit, storage, lighting, graphics", "Mall kiosks, product launches, seasonal stores"],
            ],
          ),
        ],
      },
      {
        heading: "The usual sequence",
        blocks: [
          ul([
            "Site survey and measurements of the unit as handed over (shell and core, or previous tenant's fit-out).",
            "Concept design and 3D renders for sign-off.",
            "Detailed drawings for landlord, mall and authority approval, including fire and MEP.",
            "Joinery, metalwork and signage produced in the workshop while site works run in parallel.",
            "On-site works: partitions, ceilings, electrical, flooring, painting.",
            "Installation of joinery, fixtures and signage, then snagging and handover.",
          ]),
        ],
      },
      {
        heading: "Cosmetic and beauty retail",
        blocks: [
          p("Cosmetic brands need more than shelves. Testers need lit, easy-to-clean counters; products need locking storage underneath; mirrors need colour-accurate lighting so shades look right; and the whole unit must match brand guidelines that often come from a head office abroad. Gondola units, wall bays, beauty stations and mall kiosks are usually built in lacquered MDF, acrylic and metal, with integrated LED strips and printed backlit graphics that can be swapped each campaign."),
        ],
      },
      {
        heading: "What changes the cost",
        blocks: [
          ul([
            "Floor area and whether the unit is shell and core or already fitted.",
            "Joinery finish: laminate, lacquer, veneer or solid surface.",
            "MEP scope: new electrical, lighting, AC diffusers, sprinklers.",
            "Mall and authority requirements, including night-work rules and fire-rated materials.",
            "Timeline: compressed schedules need more crews working in parallel.",
          ]),
        ],
      },
    ],
  },

  "events-exhibitions": {
    title: "Planning an exhibition stand",
    lead: "A stand has a few seconds to stop someone walking an aisle. Stand type, height and graphics do that work; the logistics behind them decide whether it is ready when the doors open.",
    sections: [
      {
        heading: "Shell scheme, modular or custom build",
        blocks: [
          table(
            ["Option", "What it is", "When it fits"],
            [
              ["Shell scheme", "The organiser's aluminium walls and fascia; you add graphics, furniture and lighting", "First-time exhibitors, tight budgets, 9 to 18 sqm"],
              ["Modular system", "Reusable aluminium frames with tension fabric or panel graphics", "Brands exhibiting several times a year"],
              ["Custom build", "Stand designed and built from timber, metal and acrylic for one space", "Flagship shows, raised space only, strong brand statements"],
              ["Pop-up and portable", "Pop-up stands, roll-ups and counters that pack into cases", "Conferences, roadshows, lobby activations"],
            ],
          ),
          p("Shell scheme booth branding is the most searched starting point. Graphics are usually printed on foam board, PVC or fabric and fitted to the organiser's panels, so they must follow the exact panel sizes in the exhibitor manual."),
        ],
      },
      {
        heading: "Major GCC exhibition venues",
        blocks: [
          ul([
            "Dubai World Trade Centre and Expo City Dubai.",
            "ADNEC Centre Abu Dhabi.",
            "Expo Centre Sharjah.",
            "Doha Exhibition and Convention Center (DECC) and Qatar National Convention Centre (QNCC).",
            "Riyadh Front Exhibition and Conference Center and Jeddah Superdome.",
            "Kuwait International Fair, Exhibition World Bahrain and Oman Convention and Exhibition Centre.",
          ]),
          p("Every venue publishes its own rules for build height, rigging, fire-rated materials, build-up and breakdown times. Drawings usually need organiser approval weeks before the show."),
        ],
      },
      {
        heading: "Event branding essentials",
        blocks: [
          ul([
            "Backdrops and step-and-repeat walls for press, awards and photos.",
            "Roll-up banners and pop-up stands for registration, sponsors and directions.",
            "Stage branding, podium wraps and LED screen content.",
            "Wayfinding, table cards, lanyards and badges.",
            "Branded giveaways and photo booth frames.",
          ]),
        ],
      },
      {
        heading: "What changes the cost",
        blocks: [
          ul([
            "Stand size in square metres and whether it is shell scheme or raw space.",
            "Build type: modular reuse is cheaper over a season than a one-off custom stand.",
            "Height, double-deck structures, rigging and hanging signs.",
            "AV: LED walls, screens and lighting.",
            "Storage and reuse between shows, and freight between cities.",
          ]),
        ],
      },
    ],
  },

  packaging: {
    title: "Picking the right box or bag",
    lead: "Packaging has two jobs: protect the product and make the brand look worth buying. The structure handles the first; print and finish handle the second.",
    sections: [
      {
        heading: "Common box styles",
        blocks: [
          table(
            ["Style", "Material", "Typical use"],
            [
              ["Folding carton", "300 to 400 gsm board", "Cosmetics, perfume, supplements, food retail"],
              ["Rigid box (magnetic, lid and base, drawer)", "Greyboard wrapped in printed paper", "Corporate gift boxes, luxury retail, electronics"],
              ["Corrugated mailer", "E-flute or B-flute corrugated", "E-commerce, subscription boxes, shipping"],
              ["Food and takeaway box", "Food-grade kraft or coated board", "Cafes, bakeries, restaurants, delivery"],
              ["Window box", "Carton with PET window", "Sweets, dates, gift sets"],
            ],
          ),
        ],
      },
      {
        heading: "Paper bags",
        blocks: [
          p("Printed paper bags are one of the most requested packaging items in the UAE. Kraft paper bags with twisted handles suit cafes and everyday retail; laminated art-paper bags with rope or ribbon handles suit fashion, perfume and corporate gifting. Non-woven and canvas tote bags are the reusable alternative for events and supermarkets."),
        ],
      },
      {
        heading: "Cosmetic packaging",
        blocks: [
          p("Cosmetic and perfume packaging lives on shelves next to global brands, so finish matters: soft-touch lamination, hot foil, embossing, spot UV and inserts that hold the bottle firmly. Ingredient and regulatory text often has to appear in Arabic and English, which needs to be planned into the dieline from the start."),
        ],
      },
      {
        heading: "What changes the price",
        blocks: [
          ul([
            "Quantity: packaging has set-up costs (dies, plates), so unit price falls sharply as runs grow.",
            "Structure: rigid and magnetic boxes cost far more than folding cartons.",
            "Finishes: foil, emboss, spot UV and soft-touch each add a process.",
            "Inserts: foam, card or moulded pulp inserts.",
            "Samples: a physical sample before the bulk run is strongly recommended.",
          ]),
        ],
      },
    ],
  },

  "gift-items": {
    title: "Corporate gifts people actually keep",
    lead: "A branded gift works when it is used daily and the logo is placed where it is seen. The decoration method matters as much as the item.",
    sections: [
      {
        heading: "Branding methods by item",
        blocks: [
          table(
            ["Method", "Works on", "Look"],
            [
              ["UV printing", "Acrylic, wood, power banks, notebooks, bottles (flat areas)", "Full colour, slightly raised"],
              ["Laser engraving", "Metal pens, steel bottles, wood, leather", "Permanent, tone-on-tone"],
              ["Pad printing", "Pens, keychains, small curved items", "One to two colours, small logos"],
              ["Sublimation", "White ceramic mugs, polyester apparel", "Full colour wrap"],
              ["Embroidery", "Caps, polos, jackets", "Premium, textured"],
              ["Debossing and foil", "Leather notebooks, diaries, gift boxes", "Elegant, subtle"],
            ],
          ),
        ],
      },
      {
        heading: "Popular gift sets",
        blocks: [
          ul([
            "Welcome kits for new staff: notebook, pen, bottle, tote bag, lanyard.",
            "Executive sets: leather notebook, metal pen, card holder in a rigid gift box.",
            "Tech sets: power bank, wireless charger, earbuds case.",
            "Ramadan and Eid hampers with dates, coffee and branded packaging.",
            "UAE National Day and Qatar National Day gifts in national colours.",
          ]),
        ],
      },
      {
        heading: "What changes the price",
        blocks: [
          ul([
            "Item quality and brand of the base product.",
            "Number of branding positions and colours.",
            "Individual packaging, gift boxes and personalised names.",
            "Quantity, and how far ahead the order is placed before peak seasons.",
          ]),
        ],
      },
    ],
  },

  "social-media": {
    title: "What a social media retainer should cover",
    lead: "Posting is the visible part. Strategy, content production, paid budget and reporting decide whether a brand's social media turns into enquiries.",
    sections: [
      {
        heading: "What is usually included",
        blocks: [
          ul([
            "Monthly content calendar planned around launches, seasons, Ramadan and national days.",
            "Photography, short-form video and Reels production.",
            "Bilingual Arabic and English captions written for each platform, not machine translated.",
            "Community management: replying to comments and messages.",
            "Paid social campaigns on Meta, TikTok and Snapchat with targeting by city.",
            "Monthly reporting on reach, engagement, leads and spend.",
          ]),
        ],
      },
      {
        heading: "Which platforms matter in the Gulf",
        blocks: [
          table(
            ["Platform", "Strong for"],
            [
              ["Instagram", "Retail, F&B, beauty, real estate, lifestyle brands"],
              ["TikTok", "Consumer brands, launches, younger audiences"],
              ["Snapchat", "Saudi Arabia and younger UAE audiences"],
              ["LinkedIn", "B2B, corporate, recruitment, government-facing firms"],
              ["WhatsApp Business", "Enquiries, catalogues, order follow-up"],
            ],
          ),
        ],
      },
      {
        heading: "What changes the price",
        blocks: [
          ul([
            "Number of platforms and posts per month.",
            "Amount of original photo and video production versus supplied content.",
            "Languages: bilingual content takes more writing and design time.",
            "Paid media budget, which is separate from the management fee.",
          ]),
        ],
      },
    ],
  },
};
