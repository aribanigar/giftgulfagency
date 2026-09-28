import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

const printMethods = table(
  ["Method", "Best for", "Minimums and notes"],
  [
    ["Screen printing", "Bold logos in a few colours on larger runs", "Setup per colour, cheaper per piece as quantity grows"],
    ["DTF (direct to film)", "Full-colour designs, small to medium runs, dark fabrics", "Low minimums, works on cotton and polyester"],
    ["DTG (direct to garment)", "Detailed artwork on cotton, one-offs", "No setup, best on light cotton"],
    ["Embroidery", "Logos on polos, caps, jackets, uniforms", "Premium, durable; small text and gradients do not stitch well"],
    ["Heat transfer vinyl", "Names and numbers, small batches", "Simple shapes and solid colours"],
    ["Sublimation", "All-over prints on white polyester", "Ink becomes part of the fabric; sportswear and jerseys"],
  ],
);

export const apparelTopics: Topic[] = [
  {
    slug: "custom-t-shirt-printing",
    name: "Custom T-Shirt Printing",
    category: "Apparel",
    section: "gift-items",
    primaryKeyword: "t shirt printing",
    seoTitle: "Custom T-Shirt Printing: Methods, Fabrics & Quantities",
    metaDescription:
      "Custom t-shirt printing for events, teams and brands: screen printing, DTF, DTG, embroidery and sublimation, fabric weights and sizing, across the UAE and GCC.",
    intro:
      "Printed t-shirts are the most requested branded item for events, marathons, company days and launches. The printing method, the fabric and the quantity together decide how the shirt looks after the tenth wash.",
    cityPages: true,
    sections: [
      { heading: "T-shirt printing methods", blocks: [printMethods] },
      {
        heading: "Fabric and weight",
        blocks: [
          ul([
            "100% cotton, 160 to 180 gsm: soft everyday tee, good for DTG and screen print.",
            "Heavier cotton, 200 gsm and up: premium, holds shape, suits merchandise.",
            "Polyester or dri-fit: light and sweat-wicking for outdoor events, runs and sports in Gulf heat; ideal for sublimation.",
            "Cotton-poly blends: less shrinkage, good middle ground.",
          ]),
        ],
      },
      {
        heading: "Planning an event t-shirt order",
        blocks: [
          p("Ask for a size split early; a typical adult mix leans on M, L and XL, with fewer S and XXL. Keep print placement consistent: front chest logo around 8 to 10 cm wide, full front around 25 to 30 cm, and back prints for sponsor lists. Allow extra time around busy seasons such as National Day and year-end events."),
        ],
      },
    ],
    faqs: [
      {
        q: "Which t-shirt printing method lasts longest?",
        a: "Screen printing and embroidery are the most durable. Sublimation never peels because the ink is inside polyester fibres.",
      },
      {
        q: "Is there a minimum order for printed t-shirts?",
        a: "DTF and DTG can print single pieces. Screen printing becomes economical from a few dozen pieces upward because each colour needs a screen.",
      },
    ],
    related: ["custom-hoodies", "custom-jerseys", "corporate-uniforms", "custom-caps"],
  },
  {
    slug: "custom-hoodies",
    name: "Custom Hoodies & Sweatshirts",
    category: "Apparel",
    section: "gift-items",
    primaryKeyword: "custom hoodies",
    seoTitle: "Custom Hoodies & Printed Sweatshirts",
    metaDescription:
      "Custom printed and embroidered hoodies and sweatshirts for teams, universities, winter events and staff merchandise across the UAE, Qatar and GCC.",
    intro:
      "Hoodies are worn for years, which makes them one of the longest-lasting branded items. In the Gulf they are popular for winter events, desert camps, air-conditioned offices and university merchandise.",
    sections: [
      {
        heading: "Styles",
        blocks: [
          ul([
            "Pullover hoodie with kangaroo pocket.",
            "Zip hoodie, easier to layer over uniforms.",
            "Crewneck sweatshirt for a smarter look.",
            "Lightweight fleece or French terry for mild Gulf winters.",
          ]),
        ],
      },
      {
        heading: "Decoration",
        blocks: [
          p("Embroidery suits chest logos and gives a premium finish. Screen printing and DTF work well for large back prints. Placement options include chest, full front, back, sleeve and hood. Heavier fleece around 280 to 350 gsm feels premium; lighter weights suit milder weather."),
        ],
      },
    ],
    faqs: [
      {
        q: "Embroidery or print on hoodies?",
        a: "Embroidery for small chest logos and a premium look; printing for large designs and full-colour artwork.",
      },
    ],
    related: ["custom-t-shirt-printing", "custom-caps", "corporate-uniforms"],
  },
  {
    slug: "custom-jerseys",
    name: "Custom Sports Jerseys",
    category: "Apparel",
    section: "gift-items",
    primaryKeyword: "custom jerseys",
    seoTitle: "Custom Sports Jerseys & Team Kits",
    metaDescription:
      "Custom sublimated jerseys and team kits for football, cricket, basketball, running and corporate sports days, with names and numbers, across the UAE and GCC.",
    intro:
      "Team jerseys are printed by sublimation, which dyes the design into polyester fabric so it never cracks or peels. That allows full-colour patterns, sponsor logos, names and numbers on every piece.",
    sections: [
      {
        heading: "Kits by sport",
        blocks: [
          table(
            ["Sport", "Typical kit"],
            [
              ["Football", "Jersey, shorts, socks, goalkeeper kit"],
              ["Cricket", "Coloured shirts and trousers, or whites with logos"],
              ["Basketball", "Sleeveless jersey and long shorts"],
              ["Running and marathons", "Light singlets or tees, often dri-fit"],
              ["Corporate sports days", "Team-coloured tees or jerseys per department"],
            ],
          ),
        ],
      },
      {
        heading: "Personalisation",
        blocks: [
          p("Supply a list of names, numbers and sizes per player. Sublimation prints each piece individually, so personalised kits cost little more than plain ones. Allow time for a sample in the final fabric before the full order."),
        ],
      },
    ],
    faqs: [
      {
        q: "Why sublimation for jerseys?",
        a: "The ink becomes part of the polyester, so designs stay bright, breathable and crack-free after repeated washing.",
      },
    ],
    related: ["custom-t-shirt-printing", "custom-caps", "custom-hoodies"],
  },
  {
    slug: "corporate-uniforms",
    name: "Corporate Uniforms",
    category: "Apparel",
    section: "gift-items",
    primaryKeyword: "corporate uniforms",
    seoTitle: "Corporate Uniforms & Branded Workwear",
    metaDescription:
      "Branded corporate uniforms and workwear for offices, hospitality, retail, healthcare and field teams: polos, shirts, aprons, coveralls, across the UAE and GCC.",
    intro:
      "Uniforms make staff easy to identify and present the brand in every interaction. The right fabric depends on where the team works: an air-conditioned showroom, a hot kitchen or an outdoor site in summer.",
    sections: [
      {
        heading: "Uniforms by sector",
        blocks: [
          table(
            ["Sector", "Common pieces"],
            [
              ["Office and reception", "Shirts, blouses, blazers, polos"],
              ["Hospitality and restaurants", "Chef coats, aprons, waiter shirts, caps"],
              ["Retail and cosmetics", "Tunics, polos, branded aprons, name badges"],
              ["Healthcare and clinics", "Scrubs, lab coats"],
              ["Field and construction", "Coveralls, high-visibility vests, breathable polos"],
              ["Events and promoters", "Branded tees, polos and caps"],
            ],
          ),
        ],
      },
      {
        heading: "What to plan",
        blocks: [
          ul([
            "Breathable, light fabrics for outdoor teams in summer.",
            "Embroidered logos for durability through daily washing.",
            "A size kit for staff to try before ordering.",
            "Reorder stock for new joiners in the same colour batch.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "Should uniform logos be printed or embroidered?",
        a: "Embroidery survives daily industrial washing better, so it is the usual choice for uniforms.",
      },
    ],
    related: ["custom-t-shirt-printing", "custom-caps", "custom-hoodies"],
  },
  {
    slug: "custom-caps",
    name: "Custom Caps",
    category: "Apparel",
    section: "gift-items",
    primaryKeyword: "custom caps",
    seoTitle: "Custom Caps & Embroidered Hats",
    metaDescription:
      "Custom embroidered and printed caps, trucker hats and bucket hats for events, outdoor teams and merchandise across the UAE, Qatar and GCC.",
    intro:
      "Caps are practical in the Gulf sun, which is why they are handed out at outdoor events, marathons, sports days and site visits. A clean embroidered logo keeps them in use long after the event.",
    sections: [
      {
        heading: "Cap styles",
        blocks: [
          ul([
            "Baseball cap, 5 or 6 panel, structured or unstructured.",
            "Trucker cap with mesh back, cooler in heat.",
            "Snapback and flat peak for merchandise.",
            "Bucket hat and sun hat with wider shade.",
            "Visors for sports and outdoor events.",
          ]),
        ],
      },
      {
        heading: "Decoration",
        blocks: [
          p("Flat embroidery is the standard; 3D puff embroidery adds raised depth. Printed transfers suit full-colour logos, and woven or rubber patches give a retail look. Side and back embroidery add a website or slogan."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is 3D puff embroidery?",
        a: "Embroidery stitched over a foam layer so the logo stands raised from the cap front.",
      },
    ],
    related: ["custom-t-shirt-printing", "corporate-uniforms", "custom-hoodies"],
  },
];
