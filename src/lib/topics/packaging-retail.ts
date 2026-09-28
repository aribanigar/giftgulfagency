import { p, table, ul } from "@/lib/content-types";
import type { Topic } from "./types";

export const packagingTopics: Topic[] = [
  {
    slug: "custom-printed-boxes",
    name: "Custom Printed Boxes",
    category: "Packaging",
    section: "packaging",
    primaryKeyword: "custom boxes",
    seoTitle: "Custom Printed Boxes: Styles, Board & Finishes",
    metaDescription:
      "Custom printed boxes: mailer, tuck-end, rigid, magnetic, drawer and corrugated shipping boxes with inserts and finishes for brands across the UAE and GCC.",
    intro:
      "A custom box protects the product, carries the brand and creates the unboxing moment. The box style, the board and the insert are chosen first; print and finishes come after.",
    cityPages: true,
    sections: [
      {
        heading: "Box styles",
        blocks: [
          table(
            ["Style", "Board", "Best for"],
            [
              ["Tuck-end folding carton", "Folding boxboard 300 to 400 gsm", "Cosmetics, supplements, retail products"],
              ["Mailer box", "E-flute corrugated", "E-commerce, subscription boxes"],
              ["Rigid box (lid and base)", "Greyboard wrapped in printed paper", "Gifts, perfume, jewellery, electronics"],
              ["Magnetic closure box", "Rigid board with magnet flap", "Premium gifts and PR boxes"],
              ["Drawer (sleeve) box", "Rigid or folding board", "Chocolates, accessories, gift sets"],
              ["Shipping carton", "Single or double wall corrugated", "Transport and bulk storage"],
              ["Window box", "Folding board with film window", "Food, toys, bakery"],
            ],
          ),
        ],
      },
      {
        heading: "Inserts and finishes",
        blocks: [
          ul([
            "Inserts: card, EVA foam, velvet-wrapped or moulded pulp to hold the product.",
            "Finishes: matt or soft-touch lamination, gold or silver foil, embossing, debossing and spot UV.",
            "Inside printing for a branded unboxing reveal.",
            "Ribbons, pull tabs and magnetic closures for gift boxes.",
          ]),
        ],
      },
      {
        heading: "From idea to boxes",
        blocks: [
          p("The usual sequence is: measure the product, choose the style, get a dieline (the flat template), design on the dieline, approve a white or printed sample, then run production. A sample is important for rigid boxes and inserts because a few millimetres decide whether the product sits snugly."),
        ],
      },
    ],
    faqs: [
      {
        q: "What is the minimum order for custom boxes?",
        a: "Digitally printed folding cartons can be made in small quantities; offset-printed and rigid boxes are more economical in larger runs because of setup and tooling.",
      },
      {
        q: "What is a dieline?",
        a: "The flat template of the box showing cuts, folds and glue areas. Artwork is designed on it so everything lines up after folding.",
      },
    ],
    related: ["cosmetic-packaging", "product-labels", "hologram-stickers"],
  },
  {
    slug: "cosmetic-packaging",
    name: "Cosmetic & Perfume Packaging",
    category: "Packaging",
    section: "packaging",
    primaryKeyword: "cosmetic packaging",
    seoTitle: "Cosmetic & Perfume Box Packaging",
    metaDescription:
      "Cosmetic and perfume box packaging: rigid perfume boxes, skincare cartons, lipstick boxes, gift sets and labels with foil and embossing for GCC beauty brands.",
    intro:
      "Beauty is sold on the shelf and on social media, so the box is part of the product. Perfume in the Gulf in particular is gifted often, which puts rigid boxes, gold foil and rich textures at the centre of cosmetic packaging.",
    sections: [
      {
        heading: "Packaging by product",
        blocks: [
          table(
            ["Product", "Common packaging"],
            [
              ["Perfume and oud", "Rigid or magnetic boxes with fitted inserts, foil and embossing"],
              ["Bakhoor and incense", "Rigid boxes, tins or drawer boxes"],
              ["Skincare", "Folding cartons with clean typography, recyclable board"],
              ["Lipstick and makeup", "Small tuck-end cartons and display trays"],
              ["Gift sets", "Rigid boxes with multi-cavity inserts, sleeves and ribbons"],
            ],
          ),
        ],
      },
      {
        heading: "Details that matter",
        blocks: [
          ul([
            "Bilingual English and Arabic text for GCC shelves.",
            "Ingredients, batch and expiry information where regulations require.",
            "Tamper-evident seals or hologram stickers for authenticity.",
            "Consistent colour across boxes, labels and bags in a range.",
          ]),
          p("A physical sample in the final board and finish is worth the time: foil and soft-touch look different on screen than in hand."),
        ],
      },
    ],
    faqs: [
      {
        q: "What box is best for perfume?",
        a: "Rigid or magnetic boxes with a fitted insert protect the bottle and feel premium, which suits gifting.",
      },
    ],
    related: ["custom-printed-boxes", "product-labels", "hologram-stickers", "cosmetic-retail-branding"],
  },
];

export const retailTopics: Topic[] = [
  {
    slug: "retail-branding",
    name: "Retail Store Branding",
    category: "Retail Branding",
    section: "fit-out",
    primaryKeyword: "retail branding",
    seoTitle: "Retail Store Branding: Signage, Displays & Graphics",
    metaDescription:
      "Retail store branding from shopfront signage and window graphics to displays, wall graphics and in-store promotions for shops and malls across the UAE and GCC.",
    intro:
      "Retail branding is everything a shopper sees from the walkway to the till: the shopfront sign, the windows, the displays, the walls and the bag they carry out. Planned together, these pieces make a store easy to recognise and easy to shop.",
    cityPages: true,
    sections: [
      {
        heading: "The layers of a branded store",
        blocks: [
          table(
            ["Zone", "Branding elements"],
            [
              ["Shopfront", "3D letter or light box sign, blade sign, window graphics"],
              ["Entrance", "Floor graphics, promotional stands, roll-ups"],
              ["Walls", "Wall graphics, lit headers, category signs"],
              ["Displays", "Gondolas, wall bays, acrylic stands, table displays"],
              ["Till", "Counter branding, card holders, impulse displays"],
              ["Take-home", "Paper bags, tissue, stickers and boxes"],
            ],
          ),
        ],
      },
      {
        heading: "Mall stores vs street stores",
        blocks: [
          p("Mall stores follow the mall's design guidelines for signage size, lighting and materials, and fit-out and signage both need mall approval. Street-facing stores need signage that reads from a moving car and survives sun, dust and heat, plus approvals from the municipality or landlord for exterior signs."),
        ],
      },
      {
        heading: "Seasonal refreshes",
        blocks: [
          ul([
            "Ramadan and Eid campaigns.",
            "National Day in each GCC country.",
            "Back to school, White Friday and year-end sales.",
            "Summer festivals and shopping festivals.",
          ]),
          p("Designing permanent fixtures with changeable graphic panels keeps seasonal refreshes quick and affordable."),
        ],
      },
    ],
    faqs: [
      {
        q: "What should I brand first in a new store?",
        a: "The shopfront sign and windows, because they bring people in. Then the displays and walls that help them shop.",
      },
    ],
    related: ["cosmetic-retail-branding", "window-graphics", "product-display-stands", "3d-letter-signage"],
  },
  {
    slug: "cosmetic-retail-branding",
    name: "Cosmetic & Beauty Retail Branding",
    category: "Retail Branding",
    section: "fit-out",
    primaryKeyword: "cosmetic store design",
    seoTitle: "Cosmetic Store Branding, Counters & Displays",
    metaDescription:
      "Branding for cosmetic, perfume and beauty retail: counters, tester displays, lit backwalls, mall kiosks and shop-in-shop units across the UAE, Qatar and GCC.",
    intro:
      "Beauty retail runs on light, mirrors and testers. Shoppers want to try the product, see the colour true to life and feel the brand in the materials, whether in a flagship store, a department store counter or a mall kiosk.",
    sections: [
      {
        heading: "Formats",
        blocks: [
          table(
            ["Format", "Notes"],
            [
              ["Flagship store", "Full fit-out, lit backwalls, consultation areas"],
              ["Shop-in-shop and department store counters", "Follow the host store's guidelines and heights"],
              ["Mall kiosk", "Open on all sides, lockable stock storage"],
              ["Pharmacy gondola and endcap", "Shelf headers, tester trays, lit panels"],
              ["Pop-up and launch activations", "Short-term, photo moments, sampling counters"],
            ],
          ),
        ],
      },
      {
        heading: "Details that sell",
        blocks: [
          ul([
            "High-CRI lighting so makeup shades look true.",
            "Tester units that are easy to clean and restock.",
            "Acrylic risers and trays sized to each product.",
            "Mirrors at the right height for seated and standing customers.",
            "Lit brand walls and 3D logos for photos and recognition.",
            "Perfume counters with secure display of high-value bottles.",
          ]),
        ],
      },
    ],
    faqs: [
      {
        q: "Why does lighting matter so much in cosmetic stores?",
        a: "Poor light changes how skin tones and shades look. High colour-rendering lighting helps customers choose the right product and reduces returns.",
      },
    ],
    related: ["retail-branding", "mall-kiosks", "acrylic-display-stands", "cosmetic-packaging"],
  },
];
