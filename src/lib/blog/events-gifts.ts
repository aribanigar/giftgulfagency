import { p, table, ul } from "@/lib/content-types";
import type { BlogPost } from "@/lib/blog-data";

const D = "2026-09-22";

export const eventsGiftsPosts: BlogPost[] = [
  {
    slug: "lanyard-guide",
    title: "Custom lanyards: widths, attachments and printing methods",
    metaDescription: "Custom lanyard guide: 10 to 25 mm widths, standard length, hooks and clips, safety breakaways, and screen, sublimation or woven printing.",
    category: "Gift Items",
    excerpt: "Width, length, hook and print method: everything to decide before ordering lanyards.",
    coverStat: "15 to 20 mm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Most custom lanyards are 15 or 20 mm wide and about 90 cm long in total (roughly 45 cm drop), with a metal hook or clip at the end. Logos are screen printed, sublimated in full colour, or woven into the fabric. Add a safety breakaway at the neck for workplaces and events.",
    tags: ["lanyard", "lanyards", "custom lanyards", "badge holder", "event lanyards"],
    relatedTopics: ["corporate-uniforms", "exhibition-booth-design"],
    intro: "Lanyards carry ID cards, event badges and keys, and put a logo at chest height on every wearer.",
    sections: [
      {
        heading: "Widths and printing",
        blocks: [
          table(
            ["Width", "Look", "Printing"],
            [
              ["10 mm", "Slim, discreet", "Short text or small logo"],
              ["15 mm", "Standard", "Logo repeated along the length"],
              ["20 mm", "Most popular for events", "Logo plus website or event name"],
              ["25 mm", "Bold", "Large logos and sponsor lists"],
            ],
          ),
          ul([
            "Screen printed polyester: solid logo colours, economical.",
            "Sublimated: full colour and gradients, edge to edge.",
            "Woven: logo woven into the strap, durable and premium.",
            "Tubular: soft and economical for large events.",
          ]),
        ],
      },
      {
        heading: "Attachments",
        blocks: [
          ul([
            "Lobster claw or dog clip for badge holders.",
            "J-hook or bulldog clip for quick changes.",
            "Key ring for keys and USB drives.",
            "Detachable buckle so the card can be removed without taking the lanyard off.",
            "Safety breakaway at the neck, recommended for workplaces.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "What is the standard lanyard width?", a: "15 or 20 mm; 20 mm is the most common for events." },
      { q: "What is a breakaway lanyard?", a: "A lanyard with a safety clasp at the neck that releases under pressure, so it cannot choke the wearer if caught." },
    ],
  },
  {
    slug: "custom-medals-guide",
    title: "Custom medals for races and sports days: sizes, finishes and ribbons",
    metaDescription: "Custom medals guide: die-cast zinc alloy, 50 to 80 mm sizes, gold, silver and bronze plating, soft and hard enamel, and printed ribbons.",
    category: "Gift Items",
    excerpt: "How custom race and sports medals are made, and what to specify for size, finish and ribbon.",
    coverStat: "50 to 80 mm",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Custom medals are usually die-cast zinc alloy, 50 to 80 mm across, plated gold, silver, bronze or antique finishes, and coloured with soft or hard enamel. Printed ribbons around 20 to 25 mm wide carry the event name and sponsors.",
    tags: ["medals", "custom medals", "race medals", "sports day medals", "awards"],
    relatedTopics: ["custom-jerseys", "custom-t-shirt-printing"],
    intro: "Finisher and winner medals are kept for years, so marathons, school sports days and corporate tournaments invest in custom designs.",
    sections: [
      {
        heading: "Medal options",
        blocks: [
          table(
            ["Option", "Choices"],
            [
              ["Material", "Die-cast zinc alloy (custom shapes), iron or brass for simple stamped designs"],
              ["Size", "50 to 80 mm; finisher medals often larger"],
              ["Plating", "Gold, silver, bronze, antique, black nickel, rainbow"],
              ["Colour", "Soft enamel (textured) or hard enamel (smooth, polished)"],
              ["Extras", "Cut-outs, spinners, bottle openers, 3D relief, back engraving"],
            ],
          ),
        ],
      },
      {
        heading: "Ribbons and timing",
        blocks: [
          p("Ribbons are usually sublimation printed in full colour with the event name, year and sponsors. Custom die-cast medals need moulds, so allow several weeks; stock medals with a custom insert are the fast option for short deadlines."),
        ],
      },
    ],
    faqs: [
      { q: "How long do custom medals take?", a: "Custom die-cast medals typically take several weeks because a mould is made. Stock medals with printed inserts are faster." },
      { q: "What is the difference between soft and hard enamel?", a: "Soft enamel sits below the metal lines for a textured feel; hard enamel is polished flat and smooth." },
    ],
  },
  {
    slug: "custom-keychain-types",
    title: "Custom keychains: metal, acrylic, PVC and leather compared",
    metaDescription: "Custom keychain types compared: metal, acrylic, soft PVC, leather and multi-tool keychains, branding methods and which suits your giveaway.",
    category: "Gift Items",
    excerpt: "Metal for premium, PVC for fun, acrylic for full colour: choosing a branded keychain.",
    coverStat: "Keychains",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Metal keychains (engraved or enamelled) feel premium, acrylic keychains show full-colour prints, soft PVC keychains suit playful shapes, and leather keychains with debossed logos suit car dealers and real estate. Choose by budget and how long you want it kept.",
    tags: ["customize keychain", "custom keychain", "keyring rings", "keychains dubai", "promotional gifts"],
    relatedTopics: ["custom-printed-boxes"],
    intro: "Keychains travel everywhere with their owner, which makes them an efficient branded gift for property handovers, car deliveries and events.",
    sections: [
      {
        heading: "Types",
        blocks: [
          table(
            ["Type", "Branding", "Best for"],
            [
              ["Metal", "Laser engraving, enamel, die-cast shapes", "Real estate, automotive, premium gifts"],
              ["Acrylic", "Full-colour print, custom shapes", "Events, retail, fan merchandise"],
              ["Soft PVC", "Moulded colours and 3D shapes", "Kids, mascots, brand characters"],
              ["Leather or PU", "Debossed or foil logo", "Car dealers, hotels, executive gifts"],
              ["Multi-tool", "Engraving", "Bottle openers, trolley coins, torches"],
            ],
          ),
        ],
      },
    ],
    faqs: [
      { q: "Which keychain lasts longest?", a: "Metal keychains with engraving are the most durable." },
    ],
  },
  {
    slug: "branded-water-bottles-guide",
    title: "Branded water bottles: stainless, plastic and glass compared",
    metaDescription: "Branded water bottle guide: insulated stainless steel, BPA-free plastic and glass bottles, sizes, and engraving, UV and screen printing options.",
    category: "Gift Items",
    excerpt: "The bottles that get used every day in Gulf heat, and how to brand each type.",
    coverStat: "500 ml",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Double-wall insulated stainless steel bottles keep drinks cold in Gulf heat and are the most valued branded bottle. BPA-free plastic bottles suit sports events and large giveaways, and glass bottles suit offices and wellness brands. Common sizes are 500 to 750 ml.",
    tags: ["water bottles dubai", "water bottle uae", "customized water bottle", "corporate gifts"],
    relatedTopics: ["custom-t-shirt-printing"],
    intro: "A bottle that keeps water cold through a hot day gets carried everywhere, which is why insulated bottles are among the most requested branded gifts in the region.",
    sections: [
      {
        heading: "Bottle types",
        blocks: [
          table(
            ["Type", "Strength", "Branding"],
            [
              ["Insulated stainless steel", "Keeps drinks cold for hours, durable", "Laser engraving, UV print, screen print"],
              ["Single-wall aluminium", "Light, economical", "Screen or UV print"],
              ["BPA-free plastic (Tritan)", "Light, shatter-resistant", "Screen print, full-colour wrap"],
              ["Glass with sleeve", "Clean taste, premium", "Print on sleeve or glass"],
              ["Sports squeeze bottle", "Cheap, for events", "Screen print"],
            ],
          ),
        ],
      },
      {
        heading: "Branding tips",
        blocks: [
          ul([
            "Laser engraving on coated steel is permanent and looks premium.",
            "Keep logos on one side so they face out when held.",
            "Personalised names increase how often bottles are kept and used.",
            "Hand wash recommendations extend the life of printed finishes.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Which branded bottle keeps water cold longest?", a: "Double-wall vacuum insulated stainless steel bottles." },
    ],
  },
  {
    slug: "branded-pens-guide",
    title: "Branded pens: plastic, metal and eco pens and how they are printed",
    metaDescription: "Branded pen guide: plastic, metal, bamboo and recycled pens, pad printing, laser engraving and UV printing, and premium pen gift sets.",
    category: "Gift Items",
    excerpt: "Which pen suits a giveaway and which suits a client gift, and how each is branded.",
    coverStat: "Branded pens",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Plastic pens with pad-printed logos suit large events and giveaways, metal pens with laser engraving suit staff and client gifts, and bamboo or recycled pens suit eco messaging. Premium pens in gift boxes work for executive gifting.",
    tags: ["branding pens", "branded pens", "custom pens", "promotional pens"],
    relatedTopics: ["custom-printed-boxes"],
    intro: "Pens are the classic promotional item because they are cheap, useful and handed around from person to person.",
    sections: [
      {
        heading: "Types and branding",
        blocks: [
          table(
            ["Pen", "Branding", "Use"],
            [
              ["Plastic ballpoint", "Pad print, 1 to 2 colours", "Events, hotels, mass giveaways"],
              ["Metal", "Laser engraving, UV print", "Staff kits, client gifts"],
              ["Bamboo or recycled", "Laser engraving, pad print", "Eco campaigns"],
              ["Stylus pens", "Pad print, engraving", "Tech brands"],
              ["Premium pens in boxes", "Engraving on pen and box", "Executive gifts"],
            ],
          ),
        ],
      },
    ],
    faqs: [
      { q: "Which pen branding lasts longest?", a: "Laser engraving on metal pens does not wear off." },
    ],
  },
  {
    slug: "usb-flash-drive-branding",
    title: "Branded USB flash drives: styles, capacities and data preloading",
    metaDescription: "Branded USB flash drive guide: card, swivel, metal and wooden styles, choosing capacity, preloading brochures, and printing or engraving.",
    category: "Gift Items",
    excerpt: "Card, swivel or metal: branded USB drives, capacity choices and preloading your content.",
    coverStat: "USB drives",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Branded USB drives come as swivel, credit-card, metal, wooden and custom-shaped styles, printed or laser engraved. Choose capacity by what you preload: company profiles and presentations need very little space. Preloaded content can be locked so it cannot be deleted.",
    tags: ["usb sticks", "branded usb", "usb flash drive", "corporate gifts"],
    relatedTopics: ["brochure-printing"],
    intro: "USB drives are still used to hand out press kits, company profiles and conference presentations, especially where internet access is unreliable.",
    sections: [
      {
        heading: "Styles",
        blocks: [
          ul([
            "Swivel: the most common, logo printed on the metal clip.",
            "Credit card: fits in a wallet, full-colour print both sides.",
            "Metal: engraved, premium feel.",
            "Wooden or bamboo: engraved, suits eco brands.",
            "Custom PVC shapes: products, mascots or logos.",
            "USB-C or dual connector for phones and new laptops.",
          ]),
        ],
      },
      {
        heading: "Preloading content",
        blocks: [
          p("Drives can be supplied with your files already on them: presentations, brochures, videos or catalogues. Content can be set as read-only so it cannot be deleted. Real capacity is always slightly below the labelled size because of formatting."),
        ],
      },
    ],
    faqs: [
      { q: "Can USB drives be preloaded with our files?", a: "Yes, and the content can be locked as read-only." },
    ],
  },
  {
    slug: "branded-umbrellas-guide",
    title: "Branded umbrellas: golf, standard and outdoor umbrellas for the Gulf",
    metaDescription: "Branded umbrella guide: 23-inch standard, 30-inch golf, auto-open, UV-coated and large outdoor patio umbrellas for cafes, events and gifts.",
    category: "Gift Items",
    excerpt: "Umbrellas in the Gulf are for sun as much as rain. Which type to brand for gifts, events and cafes.",
    coverStat: "23 or 30 inch",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Handheld branded umbrellas are usually 23-inch (standard) or 30-inch (golf), with auto-open and UV-coated canopies useful for sun in the Gulf. Outdoor patio and market umbrellas, often 2 to 3 m across, brand cafe terraces, beach clubs and events.",
    tags: ["outdoor umbrellas", "outdoor umbrella", "umbrellas in dubai", "branded umbrellas"],
    relatedTopics: ["flag-banners", "retail-branding"],
    intro: "In the Gulf, umbrellas shade people from the sun for most of the year, which makes them practical branded items for outdoor events, schools, hotels and cafes.",
    sections: [
      {
        heading: "Types",
        blocks: [
          table(
            ["Type", "Size", "Use"],
            [
              ["Standard handheld", "About 23 inch rib", "Staff and client gifts"],
              ["Golf", "About 30 inch rib", "Golf days, hotels, doormen"],
              ["Foldable", "Compact", "Travel and bag gifts"],
              ["Patio or market umbrella", "2 to 3 m canopy", "Cafe terraces, beach clubs"],
              ["Event umbrellas", "Varies", "Outdoor activations and queues"],
            ],
          ),
          p("Silver or UV-coated canopy undersides reduce heat. Logos are screen printed on panels or digitally printed for full-colour designs."),
        ],
      },
    ],
    faqs: [
      { q: "What size is a golf umbrella?", a: "Usually around a 30-inch rib, giving a much larger canopy than a standard 23-inch umbrella." },
    ],
  },
  {
    slug: "table-cloth-printing-events",
    title: "Printed table covers for events: fitted, stretch and throw",
    metaDescription: "Printed event table covers: throw, fitted and stretch styles, sizes for 4, 6 and 8 ft tables, dye-sublimation printing and care.",
    category: "Events",
    excerpt: "Branded table covers for exhibitions and registration desks: styles, sizes and printing.",
    coverStat: "6 ft table",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "events-exhibitions",
    quickAnswer: "Event table covers come as throw (drapes to the floor), fitted (tailored box shape) and stretch (spandex that hugs the table) styles. The most common size fits a 6 ft (about 183 x 76 cm) table. Full-colour logos are dye-sublimated into polyester.",
    tags: ["table cloth", "table cloth tablecloth", "table cloth design", "event table covers"],
    relatedTopics: ["promotional-counters", "shell-scheme-branding", "roll-up-banners"],
    intro: "A branded table cover turns a plain folding table into a proper registration desk or exhibition counter in seconds.",
    sections: [
      {
        heading: "Styles and sizes",
        blocks: [
          table(
            ["Style", "Look", "Note"],
            [
              ["Throw", "Drapes loosely to the floor", "Hides storage underneath, most versatile"],
              ["Fitted", "Tailored, box-shaped", "Clean, formal look"],
              ["Stretch", "Hugs the frame and legs", "Modern; legs visible"],
              ["Table runner", "Strip across the table", "Economical branding over plain cloth"],
            ],
          ),
          ul([
            "4 ft table: about 122 x 76 cm.",
            "6 ft table: about 183 x 76 cm, the most common.",
            "8 ft table: about 244 x 76 cm.",
          ]),
        ],
      },
      {
        heading: "Printing and care",
        blocks: [
          p("Dye sublimation dyes the logo into polyester fabric so it does not crack. Covers are washable and can be pressed on low heat. Tell the printer whether the back should be open for seated staff."),
        ],
      },
    ],
    faqs: [
      { q: "What size table cover fits a 6 ft table?", a: "A cover made for a 183 x 76 cm table, usually designed to drop to the floor on three or four sides." },
    ],
  },
  {
    slug: "gala-dinner-branding-checklist",
    title: "Gala dinner branding checklist: from entrance to stage",
    metaDescription: "Gala dinner branding checklist: welcome signage, step-and-repeat, stage backdrop, table numbers, menus, place cards, awards and giveaways.",
    category: "Events",
    excerpt: "Every branded item a gala dinner or awards night typically needs, in the order guests see them.",
    coverStat: "Gala dinner",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "events-exhibitions",
    quickAnswer: "A gala dinner usually needs entrance and welcome signage, a step-and-repeat photo wall, a stage backdrop and lectern branding, table numbers and seating plans, printed menus and place cards, award trophies and certificates, and branded giveaways for guests.",
    tags: ["gala dinner", "awards night", "corporate events", "event branding"],
    relatedTopics: ["backdrop-stands", "wooden-backdrops", "roll-up-banners", "neon-signs"],
    intro: "At a gala, the branding tells the story of the evening in photos. Planning it in the order guests experience it keeps nothing forgotten.",
    sections: [
      {
        heading: "Checklist",
        blocks: [
          table(
            ["Zone", "Items"],
            [
              ["Arrival", "Welcome board, directional signs, registration desk with branded cover, lanyards"],
              ["Reception", "Step-and-repeat or photo wall, neon sign, roll-ups"],
              ["Ballroom", "Stage backdrop, lectern panel, screen frames, sponsor walls"],
              ["Tables", "Table numbers, seating plan board, menus, place cards, centrepiece tags"],
              ["Awards", "Trophies, certificates, award folders"],
              ["Departure", "Gift bags and branded giveaways"],
            ],
          ),
        ],
      },
      {
        heading: "Timing tips",
        blocks: [
          ul([
            "Lock the guest list before printing place cards and seating plans.",
            "Hotels set strict set-up windows and rules on fixing to walls.",
            "Engraved awards need final winner names days in advance.",
            "Keep spare blank place cards and a label printer for last-minute changes.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "How early should gala branding be ordered?", a: "Two to four weeks for printed items, longer for custom stage builds and engraved awards." },
    ],
  },
  {
    slug: "x-banner-vs-roll-up-banner",
    title: "X-banner vs roll-up banner: which portable stand to choose",
    metaDescription: "X-banner vs roll-up banner compared: sizes, set-up, stability, graphic storage, cost and which suits short events, retail and exhibitions.",
    category: "Events",
    excerpt: "The cheaper X-banner or the tidier roll-up? How the two portable stands compare.",
    coverStat: "X-banner vs roll-up",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "events-exhibitions",
    quickAnswer: "An X-banner is a light, low-cost stand where the graphic hooks onto an X-shaped frame, commonly 60 x 160 or 80 x 180 cm. A roll-up stores the graphic inside a base, sets up faster, looks tidier and protects the print, so it lasts longer for repeated use.",
    tags: ["banner standee", "x banner", "roll up banner", "sign stands"],
    relatedTopics: ["roll-up-banners", "pop-up-stands", "flag-banners"],
    intro: "Both stands give you a tall printed graphic for events and shop entrances. The difference shows after the fifth event.",
    sections: [
      {
        heading: "Comparison",
        blocks: [
          table(
            ["", "X-banner", "Roll-up"],
            [
              ["Common sizes", "60 x 160, 80 x 180 cm", "85 x 200, 100 x 200 cm"],
              ["Set-up", "Hook graphic onto frame corners", "Pull up and clip, under a minute"],
              ["Graphic storage", "Rolled separately", "Protected inside the base"],
              ["Stability", "Light; can tip in drafts", "Heavier base"],
              ["Cost", "Lower", "Higher"],
              ["Best for", "One-off and short events", "Repeated use, exhibitions, lobbies"],
            ],
          ),
        ],
      },
    ],
    faqs: [
      { q: "Is an X-banner cheaper than a roll-up?", a: "Usually yes, but the graphic is less protected, so roll-ups last longer with repeated use." },
    ],
  },
  {
    slug: "acrylic-photo-frames",
    title: "Acrylic photo frames: block, magnetic and wall-mounted styles",
    metaDescription: "Acrylic photo frames: freestanding block, magnetic, L-shaped and standoff wall frames, thickness, printed acrylic and uses as corporate gifts.",
    category: "Gift Items",
    excerpt: "Freestanding blocks, magnetic frames and printed acrylic photos for desks, walls and gifts.",
    coverStat: "Acrylic frames",
    readTime: "3 min read",
    publishedAt: D,
    relatedSectionSlug: "gift-items",
    quickAnswer: "Acrylic photo frames come as solid freestanding blocks, magnetic two-piece frames, L-shaped desk stands and wall frames on standoffs. You can insert a print, or have the photo printed directly on the back of the acrylic for a glossy, glass-like look.",
    tags: ["acrylic photo frames", "acrylic photo frame", "acrylic frames", "corporate gifts"],
    relatedTopics: ["acrylic-display-stands", "acrylic-signage"],
    intro: "Acrylic frames give photos depth and a clean modern finish, and they are lighter and safer than glass.",
    sections: [
      {
        heading: "Styles",
        blocks: [
          table(
            ["Style", "Use"],
            [
              ["Solid block (often 10 to 20 mm thick)", "Desk frames, awards, team photos"],
              ["Magnetic two-piece", "Easy photo swaps"],
              ["L-shaped stand", "Desk signs, menus, certificates"],
              ["Wall frame on standoffs", "Offices, clinics, galleries"],
              ["Printed acrylic photo", "Premium wall art and gifts"],
            ],
          ),
          p("Engraved logos or messages turn frames into corporate gifts and long-service awards."),
        ],
      },
    ],
    faqs: [
      { q: "Are acrylic frames better than glass?", a: "They are lighter and shatter-resistant, and clear cast acrylic looks very close to glass." },
    ],
  },
  {
    slug: "custom-neon-sign-guide",
    title: "Custom LED neon signs: sizes, power and indoor vs outdoor",
    metaDescription: "Custom LED neon sign guide: LED neon vs glass neon, sizes, acrylic backing styles, dimmers, power, and indoor vs outdoor waterproofing.",
    category: "Signage",
    excerpt: "What to decide when ordering a custom neon sign for a cafe, salon, office or event.",
    coverStat: "LED neon",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "signages",
    quickAnswer: "Most custom neon signs today are LED neon flex mounted on clear or coloured acrylic, running on a low-voltage adapter. They are lighter, cooler and more durable than glass neon. Outdoor signs need waterproof LED neon and sealed connections.",
    tags: ["custom neon sign", "neon signs", "neon sign", "sharjah neon"],
    relatedTopics: ["neon-signs", "backdrop-stands", "retail-branding"],
    intro: "Neon signs are the backdrop of countless cafe interiors, salon walls, weddings and brand activations, and one of the most photographed signs a business can own.",
    sections: [
      {
        heading: "LED neon vs glass neon",
        blocks: [
          table(
            ["", "LED neon", "Glass neon"],
            [
              ["Material", "Flexible silicone LED strip", "Hand-bent glass tubes with gas"],
              ["Weight", "Light", "Heavier and fragile"],
              ["Heat and power", "Low voltage, runs cool", "High voltage transformer"],
              ["Look", "Even line of light", "Classic glow with fine detail"],
              ["Best for", "Most interiors, events, shopfronts", "Heritage and specialist projects"],
            ],
          ),
        ],
      },
      {
        heading: "Things to decide",
        blocks: [
          ul([
            "Size: the longest side, often 50 to 150 cm for interiors.",
            "Backing: cut to shape, rectangle, or no backing (letters only).",
            "Mounting: wall screws, hanging chains or a stand.",
            "Controls: dimmer, remote, or colour-changing RGB.",
            "Outdoor use: waterproof neon and sealed connectors, plus any signage approval.",
            "Fonts: script fonts need enough height to keep loops readable.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Can LED neon signs be used outdoors?", a: "Yes, if made with waterproof LED neon and sealed power connections. Exterior signs may also need approval." },
      { q: "Do LED neon signs get hot?", a: "No. LED neon runs at low voltage and stays cool to the touch." },
    ],
  },
  {
    slug: "wayfinding-signage-types",
    title: "Wayfinding signage: the four sign types every building needs",
    metaDescription: "Wayfinding signage explained: identification, directional, informational and regulatory signs, and how to plan a system for offices, malls and hospitals.",
    category: "Signage",
    excerpt: "How to plan signs that get visitors from the car park to the right room without asking.",
    coverStat: "Wayfinding",
    readTime: "4 min read",
    publishedAt: D,
    relatedSectionSlug: "signages",
    quickAnswer: "A wayfinding system uses four sign types: identification (names a place), directional (arrows to places), informational (maps, directories, opening hours) and regulatory (safety and rules). They are placed at every decision point along a visitor's route.",
    tags: ["wayfinding signage", "office signage", "office signs", "directional signs"],
    relatedTopics: ["acrylic-signage", "floor-graphics", "pylon-totem-signs"],
    intro: "Good wayfinding is invisible: people simply find their way. Bad wayfinding shows up as confused visitors and receptionists repeating directions all day.",
    sections: [
      {
        heading: "The four sign types",
        blocks: [
          table(
            ["Type", "Job", "Examples"],
            [
              ["Identification", "Tells you that you have arrived", "Room names, building signs, department signs"],
              ["Directional", "Points the way", "Arrows at corridors, lifts and car parks"],
              ["Informational", "Explains the space", "Directories, floor maps, opening hours"],
              ["Regulatory", "Sets rules and safety", "Fire exits, no entry, PPE required"],
            ],
          ),
        ],
      },
      {
        heading: "Planning a system",
        blocks: [
          ul([
            "Walk every visitor route and mark each decision point.",
            "Use consistent colours, fonts, pictograms and heights.",
            "Bilingual Arabic and English text where visitors expect it.",
            "Floor graphics help in large spaces such as warehouses and hospitals.",
            "Plan for changes: modular signs with replaceable inserts.",
          ]),
        ],
      },
    ],
    faqs: [
      { q: "Where should directional signs go?", a: "At every decision point: entrances, lift lobbies, corridor junctions and car park exits." },
    ],
  },
];
