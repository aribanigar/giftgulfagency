import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

export const signageTopics: Topic[] = [
  {
    slug: "3d-letter-signage",
    name: "3D Letter Signage",
    category: "Signage",
    section: "signages",
    primaryKeyword: "3d sign board",
    seoTitle: "3D Letter Signage & 3D Sign Boards",
    metaDescription:
      "3D letter sign boards in acrylic, stainless steel and aluminium, lit or non-lit, for shopfronts, malls and offices across the UAE, Qatar and GCC.",
    intro:
      "3D letters stand off the wall with real depth, so a logo reads from across a mall atrium or a busy road and casts its own shadow in daylight. They are the standard for shopfronts, reception walls and building facades.",
    cityPages: true,
    sections: [
      {
        heading: "Materials for 3D letters",
        blocks: [
          table(
            ["Material", "Depth", "Finish", "Where it works"],
            [
              ["Acrylic (cast)", "20 to 100 mm", "Any RAL or Pantone colour, gloss or matt", "Mall shopfronts, cosmetics, fashion, cafes"],
              ["Stainless steel", "20 to 80 mm", "Brushed, mirror, gold or rose gold", "Hotels, clinics, law firms, luxury retail"],
              ["Aluminium channel", "50 to 150 mm", "Powder coated returns with acrylic face", "Street-facing shops, large facade logos"],
              ["Brass", "15 to 50 mm", "Polished or patinated", "Heritage and premium hospitality"],
              ["PVC foam or Forex", "10 to 30 mm", "Painted", "Indoor, temporary, budget events"],
            ],
          ),
        ],
      },
      {
        heading: "Illumination options",
        blocks: [
          ul([
            "Front-lit: LEDs light a translucent acrylic face. Brightest and easiest to read at night.",
            "Back-lit (halo): a solid face with LEDs behind, washing light onto the wall around each letter.",
            "Front and back-lit: both effects together for flagship stores.",
            "Side-lit or edge-lit: light shows through the letter returns only.",
            "Non-lit: for indoor walls or where the facade has its own lighting.",
          ]),
          p("Outdoor lit letters in the Gulf need IP-rated LED modules and power supplies with space to vent heat. Cheaper modules fail early in summer temperatures."),
        ],
      },
      {
        heading: "How 3D letters are mounted",
        blocks: [
          ul([
            "Direct fix with studs into the wall, for a clean look.",
            "Stand-off mounting, letters held 20 to 50 mm off the wall, common for halo lighting.",
            "Raceway or box mounting, where wiring runs in a slim box behind the letters, often required by malls to avoid drilling many holes.",
            "Sub-frame on the facade for large rooftop and building signs.",
          ]),
        ],
      },
      {
        heading: "Sizing a 3D sign board",
        blocks: [
          p("A useful rule of thumb is about 25 mm of letter height for every 3 metres of viewing distance, so a sign meant to be read from 30 metres needs letters around 250 mm tall. Malls often set a maximum letter height and fascia band in their tenant guidelines, so the sign is designed inside those limits."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between a 3D sign board and a 2D sign board?",
        a: "A 2D sign is flat, such as vinyl on a panel or a printed light box face. A 3D sign board uses letters with physical depth, usually 20 to 100 mm or more, which stand off the wall and read from further away.",
      },
      {
        q: "Are acrylic or stainless steel 3D letters better?",
        a: "Acrylic can be made in any brand colour and lit from the front, which suits retail. Stainless steel suits premium, corporate and hospitality brands and is usually lit from behind for a halo effect.",
      },
      {
        q: "Do 3D signs need a permit?",
        a: "Outdoor signs usually need municipality approval, and signs in malls, towers or free zones need landlord or authority approval. We prepare the drawings needed for the application.",
      },
    ],
    related: ["2d-flat-cut-letters", "stainless-steel-letters", "acrylic-signage", "light-box-signs"],
  },
  {
    slug: "2d-flat-cut-letters",
    name: "2D Flat-Cut Letters & Logos",
    category: "Signage",
    section: "signages",
    primaryKeyword: "2d sign board",
    seoTitle: "2D Signage & Flat-Cut Letters",
    metaDescription:
      "2D signage and flat-cut acrylic, metal and wood letters for reception walls, offices and budget shopfronts in the UAE, Qatar and GCC.",
    intro:
      "Flat-cut letters are laser or CNC cut from a single sheet, usually 3 to 20 mm thick. They give a crisp, dimensional look at a fraction of the cost of built-up 3D letters, and they are the most common reception and office sign.",
    sections: [
      {
        heading: "Common 2D sign types",
        blocks: [
          table(
            ["Type", "Typical thickness", "Use"],
            [
              ["Flat-cut acrylic", "3 to 20 mm", "Reception walls, office doors, retail back walls"],
              ["Flat-cut aluminium or stainless", "2 to 6 mm", "Corporate lobbies, clinics"],
              ["Flat-cut wood or MDF", "6 to 18 mm", "Cafes, kids' spaces, natural brands"],
              ["Vinyl on ACP panel", "Panel 3 to 4 mm", "Budget shopfronts, warehouses, site hoarding"],
              ["Printed foam board or Forex", "3 to 10 mm", "Temporary and event signage"],
            ],
          ),
        ],
      },
      {
        heading: "When 2D is the right choice",
        blocks: [
          ul([
            "Indoor signs read from a few metres away, where deep letters add cost but little visibility.",
            "Office and door signage across many rooms, where a consistent flat style keeps costs down.",
            "Temporary shops, pop-ups and site signage.",
            "Walls where the building does not allow deep fixings.",
          ]),
          p("Flat-cut letters can be lifted off the wall with stand-off pins to add a shadow line, which gives much of the depth effect of a 3D sign."),
        ],
      },
    ],
    faqs: [
      {
        q: "Can 2D letters be lit?",
        a: "Flat-cut letters are normally non-lit, but they can be lit by wall washers or spotlights, or fixed to a back-lit panel. For letters that glow themselves, 3D channel letters or light boxes are used.",
      },
      {
        q: "How thick should flat-cut acrylic letters be?",
        a: "5 to 10 mm suits most office and reception signs. Larger logos over a metre wide often use 15 to 20 mm so they stay rigid and read well.",
      },
    ],
    related: ["3d-letter-signage", "acrylic-signage", "acrylic-name-plates"],
  },
  {
    slug: "acrylic-signage",
    name: "Acrylic Signage",
    category: "Signage",
    section: "signages",
    primaryKeyword: "acrylic sign board",
    seoTitle: "Acrylic Signs & Acrylic Sign Boards",
    metaDescription:
      "Acrylic sign boards, UV-printed acrylic panels, stand-off office signs and acrylic light boxes for businesses across the UAE, Qatar and GCC.",
    intro:
      "Acrylic is the most versatile sign material: clear, frosted, coloured or mirrored, it can be laser cut, UV printed, engraved, bent and lit. It covers everything from a reception panel to a menu board.",
    cityPages: true,
    sections: [
      {
        heading: "Types of acrylic sign",
        blocks: [
          ul([
            "Stand-off panel: a clear or frosted acrylic sheet with the logo printed on the back, held off the wall with metal pins. The classic reception sign.",
            "UV-printed acrylic: full-colour print directly on the acrylic, used for menus, directories and wall art.",
            "Acrylic light box: a printed or vinyl acrylic face in a lit frame.",
            "Layered acrylic: two or three sheets stacked for depth, often with a mirror or colour layer.",
            "Engraved acrylic: logos and text engraved and colour-filled, used for plaques and awards.",
          ]),
        ],
      },
      {
        heading: "Cast vs extruded acrylic",
        blocks: [
          p("Cast acrylic is stronger, cuts and engraves more cleanly, resists heat better and stays clear for longer outdoors. Extruded acrylic is cheaper and fine for indoor, short-life displays. For outdoor signs in Gulf sun, cast acrylic is the safer choice."),
          table(
            ["Thickness", "Typical use"],
            [
              ["3 mm", "Menu holders, small printed signs, stickers backing"],
              ["5 to 6 mm", "Door signs, name plates, directories"],
              ["8 to 10 mm", "Reception stand-off panels, logos"],
              ["15 to 20 mm", "Large logos, premium plaques, awards"],
            ],
          ),
        ],
      },
    ],
    faqs: [
      {
        q: "Is acrylic good for outdoor signs?",
        a: "Yes, if it is cast acrylic with UV-resistant inks or vinyl. Extruded acrylic and standard inks can yellow or crack faster in strong sun.",
      },
      {
        q: "What is a stand-off acrylic sign?",
        a: "A sheet of acrylic held a small distance off the wall with metal stand-off pins. The gap creates a shadow and a floating look, and it is the most common office reception sign.",
      },
    ],
    related: ["acrylic-name-plates", "acrylic-display-stands", "2d-flat-cut-letters", "light-box-signs"],
  },
  {
    slug: "acrylic-name-plates",
    name: "Acrylic Name Plates & Door Signs",
    category: "Signage",
    section: "signages",
    primaryKeyword: "acrylic name plate",
    seoTitle: "Acrylic Name Plates & Office Door Signs",
    metaDescription:
      "Acrylic and metal name plates, office door signs, desk plates and room numbers, made to match your brand, for offices across the UAE, Qatar and GCC.",
    intro:
      "Name plates and door signs are the small signs that make an office look finished: room names, staff names, desk plates and floor directories, all in one consistent style.",
    sections: [
      {
        heading: "Options",
        blocks: [
          table(
            ["Style", "Material", "Notes"],
            [
              ["Door plate", "Acrylic, 3 to 6 mm", "UV printed or engraved, fixed with tape or stand-offs"],
              ["Slide-in name plate", "Aluminium frame with paper insert", "Names change without a new sign"],
              ["Desk plate", "Acrylic block or wood", "Printed or engraved, freestanding"],
              ["Villa and house plate", "Stainless steel, brass or acrylic", "Weatherproof for outdoor walls"],
              ["Braille and tactile signs", "Acrylic with raised text", "For accessible buildings and healthcare"],
            ],
          ),
        ],
      },
      {
        heading: "Ordering many at once",
        blocks: [
          p("Office projects usually need dozens of plates. Send a simple list of room names and numbers in a spreadsheet, and the same layout is applied to every plate so spacing and sizes stay consistent. Slide-in systems are worth considering where staff change often."),
        ],
      },
    ],
    faqs: [
      {
        q: "Can names be changed later?",
        a: "With slide-in or magnetic insert systems, yes. Printed or engraved acrylic plates need a new plate when a name changes.",
      },
    ],
    related: ["acrylic-signage", "2d-flat-cut-letters", "stainless-steel-letters"],
  },
  {
    slug: "stainless-steel-letters",
    name: "Stainless Steel & Metal Letters",
    category: "Signage",
    section: "signages",
    primaryKeyword: "stainless steel letter sign board",
    seoTitle: "Stainless Steel Letters & Metal Signage",
    metaDescription:
      "Brushed, mirror and gold stainless steel letters, halo-lit metal signs and brass lettering for hotels, clinics, offices and luxury retail in the GCC.",
    intro:
      "Metal letters carry weight, literally and visually. Brushed, mirror or gold-finish stainless steel is the choice for hotels, clinics, corporate lobbies and luxury brands that want a sign to feel permanent.",
    sections: [
      {
        heading: "Finishes",
        blocks: [
          table(
            ["Finish", "Look", "Care"],
            [
              ["Brushed (hairline)", "Soft, directional grain", "Hides fingerprints and light scratches"],
              ["Mirror polish", "Reflective, high impact", "Shows fingerprints, best out of reach"],
              ["Gold or rose gold (PVD)", "Warm, premium", "Coating bonded to steel, durable"],
              ["Black titanium", "Dark, modern", "PVD coating, strong contrast on light walls"],
              ["Painted steel or aluminium", "Any colour", "Powder coated for outdoor use"],
            ],
          ),
        ],
      },
      {
        heading: "Lighting metal letters",
        blocks: [
          p("Because metal faces are solid, they are usually halo-lit: LEDs sit behind each letter and light the wall around it. Letters can also have a lit acrylic face inside a metal return, which combines metal edges with a bright face."),
        ],
      },
    ],
    faqs: [
      {
        q: "Grade 304 or 316 stainless steel?",
        a: "Grade 304 suits most indoor and sheltered outdoor signs. Grade 316 resists corrosion better and is preferred near the sea, for example on waterfront and marina buildings.",
      },
    ],
    related: ["3d-letter-signage", "acrylic-name-plates", "pylon-totem-signs"],
  },
  {
    slug: "light-box-signs",
    name: "Light Box Signs",
    category: "Signage",
    section: "signages",
    primaryKeyword: "light box sign",
    seoTitle: "Light Box Signs & Backlit Displays",
    metaDescription:
      "Single and double-sided light boxes, fabric SEG light boxes, projecting signs and backlit menu boards for shops and restaurants in the UAE, Qatar and GCC.",
    intro:
      "A light box is a frame lit from inside with a printed face on the front. It is the most economical way to make a large logo or image glow, and the easiest to update because only the face changes.",
    cityPages: true,
    sections: [
      {
        heading: "Light box types",
        blocks: [
          ul([
            "Acrylic face light box: vinyl or UV print on acrylic, rigid and durable, common for shop fascias.",
            "Flex face light box: a printed PVC flex stretched on a frame, used for very large facade signs.",
            "Fabric (SEG) light box: printed fabric with a silicone edge pressed into a slim aluminium frame, even lighting, easy face changes; popular in malls and exhibitions.",
            "Double-sided projecting sign: sticks out from the facade so it is seen by people walking along the street.",
            "Shaped or cut-out light box: the box follows the logo shape instead of a rectangle.",
            "Menu light boxes: backlit menu boards above counters in cafes and quick-service restaurants.",
          ]),
        ],
      },
      {
        heading: "Getting even light",
        blocks: [
          p("Hot spots and dark corners come from LED spacing and box depth. Edge-lit boxes can be as slim as 30 to 40 mm; back-lit boxes usually need 80 to 150 mm depth for even light. Backlit film or fabric printed with extra ink density keeps colours rich when the lights are on."),
        ],
      },
    ],
    faqs: [
      {
        q: "Can the graphic in a light box be changed?",
        a: "Yes. Fabric SEG and snap-frame light boxes are designed for quick changes, which suits seasonal campaigns and changing menus.",
      },
      {
        q: "How long do LED light boxes last?",
        a: "Good quality LED modules are rated for tens of thousands of hours. In practice the power supply and heat management decide lifespan, so outdoor boxes need proper ventilation.",
      },
    ],
    related: ["neon-signs", "3d-letter-signage", "acrylic-signage"],
  },
  {
    slug: "neon-signs",
    name: "LED Neon Signs",
    category: "Signage",
    section: "signages",
    primaryKeyword: "neon signs",
    seoTitle: "Custom LED Neon Signs",
    metaDescription:
      "Custom LED neon signs for cafes, salons, events and feature walls, in any colour, English or Arabic script, across the UAE, Qatar and GCC.",
    intro:
      "LED neon uses flexible silicone tubing with LEDs inside to recreate the glow of glass neon, without the fragility, heat or high voltage. It has become the go-to feature sign for cafes, salons, gyms and event walls.",
    cityPages: true,
    sections: [
      {
        heading: "LED neon vs glass neon",
        blocks: [
          table(
            ["", "LED neon flex", "Glass neon"],
            [
              ["Durability", "Flexible, does not shatter", "Fragile glass"],
              ["Power and heat", "Low voltage, runs cool", "High voltage, warm"],
              ["Colours", "Wide range, RGB colour-changing available", "Set by gas and glass"],
              ["Cost", "Lower", "Higher, specialist work"],
              ["Look", "Very close to glass, slightly more even", "Classic, slight variation"],
            ],
          ),
        ],
      },
      {
        heading: "Design tips",
        blocks: [
          ul([
            "Script and handwriting fonts suit neon because they form continuous lines.",
            "Arabic calligraphy works well; letters are bent to follow the strokes.",
            "Very small details under about 30 mm get lost; simplify logos for neon.",
            "A clear or black acrylic backboard holds the tubing and hides wiring.",
            "Dimmers and timers are useful for venues with changing moods.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "Can neon signs be used outdoors?",
        a: "Yes, with outdoor-rated neon flex and a waterproof power supply. Indoor-grade neon should stay indoors or in covered areas.",
      },
      {
        q: "Can you make a neon sign in Arabic?",
        a: "Yes. Arabic letterforms and calligraphy can be traced and bent in neon flex, and bilingual signs are common.",
      },
    ],
    related: ["light-box-signs", "3d-letter-signage", "wooden-backdrops"],
  },
  {
    slug: "pylon-totem-signs",
    name: "Pylon & Totem Signs",
    category: "Signage",
    section: "signages",
    primaryKeyword: "pylon signs",
    seoTitle: "Pylon, Totem & Monument Signs",
    metaDescription:
      "Freestanding pylon, totem and monument signs for petrol stations, malls, compounds, hospitals and business parks across the UAE, Qatar and GCC.",
    intro:
      "Pylons and totems are freestanding signs that announce a site from the road: tenant lists at malls and business parks, fuel prices at stations, entrance signs at hospitals, schools and residential compounds.",
    sections: [
      {
        heading: "Types",
        blocks: [
          ul([
            "Monument sign: low, wide sign at an entrance, often in stone, ACP or concrete cladding.",
            "Totem: a tall slim freestanding sign, one or two sided, often lit.",
            "Pylon: a large, tall structure visible from highways, often listing several tenants.",
            "Directional totems: wayfinding inside large sites, car parks and campuses.",
          ]),
        ],
      },
      {
        heading: "Engineering and approvals",
        blocks: [
          p("Tall pylons are structures, not just signs. They need foundations, a steel frame designed for wind load, and usually structural calculations and municipality approval before work starts. Allow for civil works and underground cabling in the programme."),
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a pylon sign take?",
        a: "Small monument signs can be quick, but tall pylons take longer because of approvals, foundations and fabrication. The approval step is usually the longest part.",
      },
    ],
    related: ["3d-letter-signage", "stainless-steel-letters", "light-box-signs"],
  },
];
