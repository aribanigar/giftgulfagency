import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

export const displayTopics: Topic[] = [
  {
    slug: "roll-up-banners",
    name: "Roll-Up Banners",
    category: "Displays & Stands",
    section: "events-exhibitions",
    primaryKeyword: "roll up banner size",
    seoTitle: "Roll-Up Banner Printing: Sizes, Stands & Printing",
    metaDescription:
      "Roll-up banner sizes (85x200, 100x200, 120x200, 150x200 cm), stand types and printing for events, lobbies and exhibitions across the UAE, Qatar and GCC.",
    intro:
      "A roll-up (pull-up) banner is a printed graphic that rolls into an aluminium base and stands up in under a minute. It is the most used portable display in the Gulf, at conferences, reception desks, retail entrances and exhibition stands.",
    cityPages: true,
    sections: [
      {
        heading: "Standard roll-up banner sizes",
        blocks: [
          table(
            ["Size (W x H)", "Best for"],
            [
              ["80 x 200 cm", "Tight spaces, reception counters"],
              ["85 x 200 cm", "The most common standard size, events and lobbies"],
              ["100 x 200 cm", "More room for content, retail entrances"],
              ["120 x 200 cm", "Exhibition stands, sponsor walls"],
              ["150 x 200 cm", "Wide backdrops behind speakers or products"],
              ["200 x 200 cm", "Mini backdrop, photo walls"],
            ],
            "Visible print height is usually around 200 cm; allow extra length at the bottom that sits inside the base.",
          ),
        ],
      },
      {
        heading: "Stand types",
        blocks: [
          ul([
            "Economy stand: light aluminium, fine for occasional use.",
            "Premium or deluxe stand: wider, heavier base that stays steady on smooth floors and resists tipping.",
            "Double-sided stand: two graphics back to back, for walkways and open areas.",
            "Wide-base and outdoor stands: heavier bases or water-fill weights for entrances.",
            "Replaceable-cassette stands: swap the graphic without buying a new base.",
          ]),
        ],
      },
      {
        heading: "Material and artwork tips",
        blocks: [
          p("Roll-ups are printed on anti-curl PVC, polyester film or grey-back material that blocks light from behind. Keep the most important message in the top two thirds, because the bottom 50 cm sits below eye level and is often blocked by tables or people. Use large text that reads from 3 to 5 metres, and supply artwork at full size with bleed."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is the standard roll-up banner size?",
        a: "85 x 200 cm is the most common standard size in the UAE and GCC. 100 x 200 and 120 x 200 cm are also widely used when more space is needed.",
      },
      {
        q: "What is the difference between a roll-up and a pull-up banner?",
        a: "They are the same thing. Roll-up, pull-up and roll-up standee all describe a banner that retracts into a base.",
      },
      {
        q: "Can I reuse the stand with a new graphic?",
        a: "Yes, with a replaceable-cassette or a stand designed for graphic changes. Economy stands are usually replaced as a unit.",
      },
    ],
    related: ["pop-up-stands", "backdrop-stands", "flag-banners", "promotional-counters"],
  },
  {
    slug: "pop-up-stands",
    name: "Pop-Up Stands",
    category: "Displays & Stands",
    section: "events-exhibitions",
    primaryKeyword: "pop up stand",
    seoTitle: "Pop-Up Stands & Pop-Up Display Walls",
    metaDescription:
      "Straight and curved pop-up stands, fabric pop-up walls and pop-up counters for exhibitions, conferences and roadshows across the UAE, Qatar and GCC.",
    intro:
      "A pop-up stand is a collapsible frame that expands into a large display wall, usually 3 x 3 or 3 x 4 panels, then packs into a wheeled case. It turns a bare booth space into a branded wall in minutes.",
    cityPages: true,
    sections: [
      {
        heading: "Pop-up stand types",
        blocks: [
          table(
            ["Type", "Graphic", "Notes"],
            [
              ["Magnetic pop-up", "Laminated panels hung on magnetic bars", "Classic option, crisp print"],
              ["Fabric pop-up", "One stretch-fabric graphic over the frame", "Seamless, light, quick to set up"],
              ["Straight wall", "Flat display", "Fits shell scheme back walls"],
              ["Curved wall", "Curved display", "Wraps a space, more visual impact"],
              ["Pop-up counter", "Wrapped counter with top", "Doubles as a transport case on some models"],
            ],
          ),
          p("A 3 x 3 pop-up is roughly 2.2 to 2.3 m high and 2.5 to 2.9 m wide depending on the model, which suits a 3 x 3 m shell scheme booth."),
        ],
      },
      {
        heading: "Pop-up stand vs roll-up banner",
        blocks: [
          p("A roll-up covers a slim vertical space; a pop-up covers a whole wall. Many exhibitors pair one pop-up wall behind a counter with one or two roll-ups at the front of the booth."),
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a pop-up stand take to set up?",
        a: "Most fabric pop-ups take one person around 10 to 15 minutes. Magnetic panel versions take a little longer because each panel is hung separately.",
      },
      {
        q: "Will a pop-up stand fit in a shell scheme booth?",
        a: "A 3 x 3 straight pop-up usually fits a 3 m wide shell scheme back wall. Check the height limit and panel size in the exhibitor manual first.",
      },
    ],
    related: ["roll-up-banners", "backdrop-stands", "shell-scheme-branding", "promotional-counters"],
  },
  {
    slug: "backdrop-stands",
    name: "Backdrops & Step-and-Repeat Walls",
    category: "Displays & Stands",
    section: "events-exhibitions",
    primaryKeyword: "backdrop stands",
    seoTitle: "Event Backdrops, Backdrop Stands & Media Walls",
    metaDescription:
      "Event backdrops, step-and-repeat media walls, tension fabric backdrops and backdrop stands for launches, awards and press events across the UAE, Qatar and GCC.",
    intro:
      "A backdrop is the branded wall behind a stage, a speaker or a red-carpet photo point. A step-and-repeat is a backdrop with logos repeated in a grid so they appear in every photo, whatever the crop.",
    cityPages: true,
    sections: [
      {
        heading: "Backdrop types",
        blocks: [
          table(
            ["Type", "Structure", "Best for"],
            [
              ["Tension fabric backdrop", "Aluminium tube frame with stretch fabric", "Reusable, wrinkle-free, easy to ship"],
              ["Banner backdrop on stand", "Telescopic stand with PVC or fabric banner", "Budget, quick events"],
              ["Wooden backdrop", "Timber frame with printed panels or vinyl", "Stages, weddings, custom shapes"],
              ["Step-and-repeat media wall", "Any of the above with repeated logos", "Press, awards, sponsor events"],
              ["LED screen backdrop", "Modular LED panels", "Conferences, product launches"],
            ],
          ),
        ],
      },
      {
        heading: "Common backdrop sizes",
        blocks: [
          ul([
            "2.4 x 2.4 m and 3 x 2.4 m for photo points and small stages.",
            "4 x 2.4 m and 6 x 3 m for award ceremonies and press walls.",
            "Custom sizes built to the stage width for conferences.",
          ]),
          p("For step-and-repeat walls, logos are usually 25 to 40 cm wide so they stay readable in a half-body photo. Matt fabric avoids flash glare in photos."),
        ],
      },
    ],
    faqs: [
      {
        q: "Which backdrop material photographs best?",
        a: "Matt fabric or matt laminated prints. Glossy PVC reflects camera flash and creates hot spots in photos.",
      },
      {
        q: "Can a backdrop be reused for future events?",
        a: "Yes. Tension fabric frames are reusable, and only the printed fabric needs replacing when the design changes.",
      },
    ],
    related: ["wooden-backdrops", "pop-up-stands", "roll-up-banners", "neon-signs"],
  },
  {
    slug: "wooden-backdrops",
    name: "Wooden Backdrops",
    category: "Displays & Stands",
    section: "events-exhibitions",
    primaryKeyword: "wooden backdrop",
    seoTitle: "Custom Wooden Backdrops for Events & Stages",
    metaDescription:
      "Custom wooden backdrops for stages, weddings, launches and photo walls, with printed panels, 3D letters, neon and lighting, across the UAE, Qatar and GCC.",
    intro:
      "Wooden backdrops are built from timber frames and MDF or plywood panels, so they can take any shape: arches, cut-out logos, layered walls and panels that carry 3D letters, neon and lighting.",
    sections: [
      {
        heading: "Why choose a wooden backdrop",
        blocks: [
          ul([
            "Custom shapes that fabric and banner stands cannot make, such as arches, circles and cut-out frames.",
            "Strong enough to mount 3D letters, neon signs, shelves, flowers and screens.",
            "A solid, premium finish for stages, weddings and brand launches.",
            "Can be painted, wrapped in printed vinyl or clad in grass, flowers or fabric.",
          ]),
        ],
      },
      {
        heading: "Planning the build",
        blocks: [
          p("Wooden backdrops are built in sections in the workshop, then assembled and braced on site, so venue access, lift sizes and build-up time matter. Most hotel ballrooms and venues ask for fire-rated or treated materials and restrict build-up hours, so confirm venue rules before the design is final."),
        ],
      },
    ],
    faqs: [
      {
        q: "Is a wooden backdrop reusable?",
        a: "It can be, if it is designed in sections and stored properly. One-off designs for a specific event are usually dismantled after the event.",
      },
    ],
    related: ["backdrop-stands", "neon-signs", "3d-letter-signage"],
  },
  {
    slug: "acrylic-display-stands",
    name: "Acrylic Display Stands",
    category: "Displays & Stands",
    section: "events-exhibitions",
    primaryKeyword: "acrylic stand",
    seoTitle: "Acrylic Display Stands, Brochure Holders & Menu Stands",
    metaDescription:
      "Acrylic display stands, brochure holders, menu stands, product risers, cosmetic displays and sign holders, made to size for shops and events in the GCC.",
    intro:
      "Acrylic stands hold, raise and frame products and printed information without distracting from them: brochure holders on reception desks, menu stands on tables, risers in cosmetic counters and sign holders in shops.",
    sections: [
      {
        heading: "Common acrylic displays",
        blocks: [
          table(
            ["Item", "Typical use"],
            [
              ["Brochure and leaflet holders (A4, A5, DL)", "Reception desks, showrooms, clinics"],
              ["Menu and table stands (A5, A6)", "Restaurants, cafes, hotel rooms"],
              ["Product risers and blocks", "Jewellery, perfume, cosmetics"],
              ["Cosmetic and tester displays", "Beauty counters and gondolas"],
              ["Sign holders and T-stands", "Promotions, price signs, directions"],
              ["Lockable display cases", "Watches, electronics, collectibles"],
              ["Donation and ballot boxes", "Events, charities, surveys"],
            ],
          ),
        ],
      },
      {
        heading: "Branding acrylic stands",
        blocks: [
          p("Logos can be UV printed in full colour, engraved, or applied as cut vinyl. Clear acrylic keeps the focus on the product; frosted, black or coloured acrylic can match brand colours. Custom sizes are cut to fit specific products and shelves."),
        ],
      },
    ],
    faqs: [
      {
        q: "Can acrylic stands be made to a custom size?",
        a: "Yes. Acrylic is cut and bent to order, so stands can be sized for a specific product, brochure or shelf depth.",
      },
    ],
    related: ["acrylic-signage", "product-display-stands", "cosmetic-retail-branding"],
  },
  {
    slug: "product-display-stands",
    name: "Product & Shop Display Stands",
    category: "Displays & Stands",
    section: "fit-out",
    primaryKeyword: "display stand",
    seoTitle: "Shop Display Stands & Product Display Units",
    metaDescription:
      "Wooden, metal and acrylic shop display stands, gondolas, floor display units and counter displays for retail and supermarkets in the UAE, Qatar and GCC.",
    intro:
      "Display stands put products where shoppers decide: floor units at the end of an aisle, counter displays by the till, gondolas and wall bays. Most are made in MDF, metal and acrylic with printed branding.",
    sections: [
      {
        heading: "Types of display stands",
        blocks: [
          ul([
            "Floor display units (FSDU) at aisle ends and entrances.",
            "Counter-top display units (CDU) next to the till.",
            "Gondola and island units for supermarkets and pharmacies.",
            "Wall bays with shelves, hooks and lit headers.",
            "Wooden display stands for natural, organic and artisan brands.",
            "Cardboard displays for short promotions and product launches.",
          ]),
        ],
      },
      {
        heading: "Choosing materials",
        blocks: [
          table(
            ["Material", "Life", "Best for"],
            [
              ["Corrugated cardboard", "Weeks", "Promotions, supermarket campaigns"],
              ["MDF with laminate or lacquer", "Years", "Permanent in-store fixtures"],
              ["Metal", "Years", "Heavy products, high-traffic stores"],
              ["Acrylic", "Years", "Cosmetics, jewellery, electronics"],
              ["Solid wood or plywood", "Years", "Premium and natural brands"],
            ],
          ),
        ],
      },
    ],
    faqs: [
      {
        q: "Do supermarkets need approval for display stands?",
        a: "Yes, large retailers usually approve the size, position and design of third-party displays in advance. Build to their dimensions and safety rules.",
      },
    ],
    related: ["acrylic-display-stands", "retail-branding", "mall-kiosks"],
  },
  {
    slug: "flag-banners",
    name: "Flag Banners & Feather Flags",
    category: "Displays & Stands",
    section: "printing",
    primaryKeyword: "flag stands",
    seoTitle: "Feather Flags, Teardrop Flags & Flag Stands",
    metaDescription:
      "Feather, teardrop and rectangular flag banners with ground spikes, cross bases and water bases for outdoor events, showrooms and roadside promotion in the GCC.",
    intro:
      "Flag banners move in the wind and catch attention from a distance, which makes them useful at entrances, car showrooms, sports events, marathons and roadside promotions.",
    sections: [
      {
        heading: "Flag shapes",
        blocks: [
          ul([
            "Feather flag: tall, curved, the most visible from the side.",
            "Teardrop flag: rounded top, stays open in low wind.",
            "Rectangular flag: keeps text readable because the shape stays flat.",
            "Table flags and desk flags for meetings and national days.",
          ]),
        ],
      },
      {
        heading: "Bases for different ground",
        blocks: [
          table(
            ["Base", "Surface"],
            [
              ["Ground spike", "Sand, grass, soft ground"],
              ["Cross base with water bag", "Paved areas, indoors"],
              ["Heavy steel plate", "Showrooms, malls"],
              ["Car wheel base", "Car showrooms and forecourts"],
            ],
          ),
          p("Flags are printed on knitted polyester by dye sublimation, which lets the ink pass through so the reverse side reads in mirror image."),
        ],
      },
    ],
    faqs: [
      {
        q: "Do feather flags work in strong Gulf wind?",
        a: "Yes, with the right base and pole. Strong winds call for heavier bases or ground spikes, and flags should be taken down in sandstorms.",
      },
    ],
    related: ["roll-up-banners", "backdrop-stands"],
  },
  {
    slug: "foam-board-printing",
    name: "Foam Board & Rigid Board Printing",
    category: "Displays & Stands",
    section: "printing",
    primaryKeyword: "foam board",
    seoTitle: "Foam Board, Forex & Rigid Board Printing",
    metaDescription:
      "Printed foam board, Forex PVC, Dibond ACP and corrugated boards for signs, event displays, shell scheme graphics and point of sale in the UAE, Qatar and GCC.",
    intro:
      "Rigid boards turn a print into a sign that stands on an easel, hangs from a ceiling or fits into a shell scheme panel. The board you choose depends on how long it must last and whether it goes outdoors.",
    sections: [
      {
        heading: "Board options",
        blocks: [
          table(
            ["Board", "Weight", "Indoor or outdoor", "Use"],
            [
              ["Foam board (5 to 10 mm)", "Very light", "Indoor", "Easel signs, event boards, short-term displays"],
              ["Forex / PVC foam (3 to 10 mm)", "Light, rigid", "Indoor and sheltered outdoor", "Shell scheme graphics, retail signs, cut shapes"],
              ["ACP / Dibond (3 to 4 mm)", "Medium", "Outdoor", "Permanent outdoor signs, hoardings"],
              ["Corrugated plastic (Correx)", "Light", "Outdoor, short term", "Site signs, election and property boards"],
              ["Acrylic", "Medium", "Both", "Premium signs, menus"],
            ],
          ),
        ],
      },
      {
        heading: "Printing and cutting",
        blocks: [
          p("Boards are printed directly on UV flatbed printers or with laminated vinyl, then CNC cut to rectangles or custom shapes such as cut-out characters, arrows and product shapes."),
        ],
      },
    ],
    faqs: [
      {
        q: "Is foam board suitable outdoors?",
        a: "No. Foam board warps in heat and humidity. For outdoor use choose ACP, Forex in sheltered spots, or corrugated plastic for short-term signs.",
      },
    ],
    related: ["shell-scheme-branding", "roll-up-banners", "acrylic-signage"],
  },
];
