import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

export const exhibitionTopics: Topic[] = [
  {
    slug: "exhibition-booth-design",
    name: "Exhibition Booth Design & Build",
    category: "Exhibitions & Kiosks",
    section: "events-exhibitions",
    primaryKeyword: "exhibition stand design",
    seoTitle: "Exhibition Booth Design & Stand Build",
    metaDescription:
      "Custom exhibition booth design and stand build for trade shows at DWTC, ADNEC, Expo City, DECC and other GCC venues: sizes, stand types, timelines and approvals.",
    intro:
      "An exhibition booth has one job: stop people walking the aisle and give your team a place to talk to them. Good stand design starts with the floor plan, the open sides and the organiser's rules, then builds the brand around them.",
    cityPages: true,
    sections: [
      {
        heading: "Stand types by open sides",
        blocks: [
          table(
            ["Stand type", "Open sides", "Design notes"],
            [
              ["Inline (row)", "1", "Back wall carries the brand; keep the front open and uncluttered"],
              ["Corner", "2", "Two approaches; place the reception counter at the corner"],
              ["Peninsula", "3", "Back wall plus three open fronts, good for demos"],
              ["Island", "4", "No back wall; use hanging banners and a central structure"],
            ],
          ),
        ],
      },
      {
        heading: "Common booth sizes",
        blocks: [
          ul([
            "9 sq m (3 x 3 m): usually shell scheme, one counter and a back-wall graphic.",
            "18 sq m (6 x 3 m): room for a small meeting table or product display.",
            "36 sq m (6 x 6 m): custom build with storage, meeting area and a feature wall.",
            "54 sq m and above: two-level structures, hanging signs, private meeting rooms.",
          ]),
          p("Most organisers set a minimum space for a custom (space-only) build, and limit wall height, overhead rigging and double-decker structures. These rules are in the exhibitor manual."),
        ],
      },
      {
        heading: "Typical design and build timeline",
        blocks: [
          table(
            ["When", "Step"],
            [
              ["10 to 12 weeks out", "Brief, floor plan, 3D concept and budget"],
              ["8 weeks out", "Design sign-off, materials and graphics list"],
              ["6 weeks out", "Submit stand drawings to the organiser for approval"],
              ["3 to 4 weeks out", "Workshop fabrication and print"],
              ["Build-up days", "On-site assembly, electrics, graphics and cleaning"],
              ["After the show", "Dismantling within the breakdown window, storage if reusable"],
            ],
          ),
        ],
      },
      {
        heading: "What organisers usually require",
        blocks: [
          ul([
            "Stand drawings with dimensions, elevations and materials, submitted by the deadline.",
            "Fire-rated or treated materials and a registered stand contractor.",
            "Contractor insurance, method statements and risk assessments.",
            "Electrical orders placed through the official venue supplier.",
            "Rigging requests for anything hung from the ceiling.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "How early should I start an exhibition stand?",
        a: "For a custom stand, 10 to 12 weeks before the show is comfortable. Shell scheme graphics can be done in 2 to 3 weeks, but the organiser's artwork deadlines still apply.",
      },
      {
        q: "What is the difference between shell scheme and space only?",
        a: "Shell scheme is a ready-made booth with walls, fascia and basic lighting supplied by the organiser. Space only is bare floor where you build a custom stand.",
      },
      {
        q: "Can an exhibition stand be reused?",
        a: "Yes, if it is designed modular. Modular systems and reusable panels can be reconfigured for different booth sizes and shows.",
      },
    ],
    related: ["shell-scheme-branding", "promotional-counters", "pop-up-stands", "backdrop-stands"],
  },
  {
    slug: "shell-scheme-branding",
    name: "Shell Scheme Branding",
    category: "Exhibitions & Kiosks",
    section: "events-exhibitions",
    primaryKeyword: "shell scheme graphics",
    seoTitle: "Shell Scheme Graphics & Booth Branding",
    metaDescription:
      "Shell scheme graphics, panel sizes, fascia names and quick booth branding for exhibitions in the UAE, Qatar and GCC. Printing and installation.",
    intro:
      "A shell scheme booth comes as a white box of panels with a fascia board and spotlights. Branding it well means covering those panels edge to edge, adding a counter and one or two stands, and keeping the name readable from the aisle.",
    sections: [
      {
        heading: "How shell scheme walls are built",
        blocks: [
          p("Most shell schemes use an aluminium frame (often called Octanorm or similar systems) with white melamine panels roughly 1 m wide and 2.5 m high. The visible area inside each panel is slightly smaller than the frame, so graphics are printed to the visible panel size in the exhibitor manual, not the frame size."),
          table(
            ["Graphic option", "How it fits", "Notes"],
            [
              ["Printed vinyl on panels", "Stuck directly to panels", "Check the organiser allows adhesive on walls"],
              ["Printed Forex or foam board", "Slotted or hung between frames", "Easy to remove, reusable for small shows"],
              ["Fabric (SEG) graphics", "Silicone edge in a frame", "Seamless look, reusable"],
              ["Full-wall hanging banner", "Hung from the top rail", "Covers several panels in one print"],
            ],
          ),
        ],
      },
      {
        heading: "A simple shell scheme kit",
        blocks: [
          ul([
            "Back-wall graphics across all panels.",
            "Side-wall graphics if the booth has closed sides.",
            "A branded counter with a lockable storage shelf.",
            "One roll-up banner at the front edge.",
            "A brochure stand and screen bracket if needed.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "Can I stick vinyl on shell scheme panels?",
        a: "Some organisers allow low-tack vinyl, others ban adhesive on walls. Check the exhibitor manual; removable boards or fabric are the safe choice.",
      },
    ],
    related: ["exhibition-booth-design", "foam-board-printing", "promotional-counters", "roll-up-banners"],
  },
  {
    slug: "mall-kiosks",
    name: "Mall Kiosks",
    category: "Exhibitions & Kiosks",
    section: "fit-out",
    primaryKeyword: "mall kiosk design",
    seoTitle: "Mall Kiosk Design & Fabrication",
    metaDescription:
      "Mall kiosk design and fabrication for coffee, perfume, cosmetics, phone accessories and pop-up retail: sizes, materials, mall approvals and installation.",
    intro:
      "A mall kiosk is a freestanding shop, usually between 2 x 2 m and 4 x 3 m, that sells from all sides in a walkway or atrium. It has to look finished from every angle, store stock, and pass the mall's design and safety review.",
    cityPages: true,
    sections: [
      {
        heading: "Kiosk types",
        blocks: [
          table(
            ["Type", "Typical use"],
            [
              ["RMU (retail merchandising unit)", "Small cart for accessories, phone cases, gifts"],
              ["Open kiosk", "Perfume, cosmetics, jewellery, sunglasses"],
              ["Food and coffee kiosk", "Needs water, drainage, extraction and food-safe finishes"],
              ["Pop-up promotion kiosk", "Short brand activations and sampling"],
              ["Digital or self-service kiosk", "Screens, ticketing, product finders"],
            ],
          ),
        ],
      },
      {
        heading: "Materials and build",
        blocks: [
          p("Kiosks are usually built on a timber or steel frame with MDF, laminate, Corian or solid surface counters, acrylic displays, glass showcases and LED lighting. Lockable storage underneath and a fold-down or roller shutter secure the kiosk after hours."),
        ],
      },
      {
        heading: "What malls review",
        blocks: [
          ul([
            "Design drawings, height limits and sight lines to nearby shops.",
            "Fire-rated materials and electrical drawings.",
            "Food kiosks: water, drainage and extraction plans plus food safety approvals.",
            "Contractor insurance, method statement and working hours for installation.",
            "Signage size and brightness.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to build a mall kiosk?",
        a: "Around 3 to 6 weeks for fabrication after design approval. Mall approval can add time, so submit drawings early.",
      },
      {
        q: "Can a kiosk be moved to another mall?",
        a: "Yes, if it is built in sections. Many brands reuse the same kiosk for rotating pop-up locations.",
      },
    ],
    related: ["promotional-counters", "product-display-stands", "retail-branding", "cosmetic-retail-branding"],
  },
  {
    slug: "promotional-counters",
    name: "Promotional Counters",
    category: "Exhibitions & Kiosks",
    section: "events-exhibitions",
    primaryKeyword: "promotional counter",
    seoTitle: "Promotional Counters & Branded Event Counters",
    metaDescription:
      "Portable promotion counters, branded reception desks and sampling counters for events, exhibitions and in-store activations in the UAE, Qatar and GCC.",
    intro:
      "A promotional counter gives a brand ambassador a place to stand, store samples and talk to shoppers. It is the anchor of most sampling campaigns, event registration desks and small exhibition booths.",
    sections: [
      {
        heading: "Counter options",
        blocks: [
          table(
            ["Counter", "Build", "Best for"],
            [
              ["Portable pop-up counter", "Folding frame with printed wrap", "Roadshows, supermarkets, quick events"],
              ["Fabric tension counter", "Aluminium frame with fabric cover", "Light, easy to ship, reusable"],
              ["MDF or wooden counter", "Built counter with shelf and lock", "Exhibitions, longer campaigns"],
              ["Acrylic or lit counter", "Backlit front panel", "Launches, premium brands"],
            ],
          ),
        ],
      },
      {
        heading: "Useful details",
        blocks: [
          ul([
            "A lockable shelf for samples, bags and personal items.",
            "Height around 90 to 100 cm for standing conversations.",
            "A top wide enough for a tablet or sample tray.",
            "Changeable front graphics so one counter serves several campaigns.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "Can the graphics on a promotional counter be changed?",
        a: "Yes. Pop-up and fabric counters use replaceable wraps, and built counters can take changeable panels or vinyl.",
      },
    ],
    related: ["mall-kiosks", "roll-up-banners", "exhibition-booth-design", "shell-scheme-branding"],
  },
];
