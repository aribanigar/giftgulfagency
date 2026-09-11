import {
  Globe,
  Share2,
  Search,
  Signpost,
  Sticker,
  Flag,
  Gem,
  Store,
  Presentation,
  Shirt,
  Sparkles,
  Package,
  type LucideIcon,
} from "lucide-react";

export type Pillar = "digital" | "signage" | "spaces" | "print";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  code: string;
  pillar: Pillar;
  icon: LucideIcon;
  short: string;
  description: string;
  capabilities: string[];
  faqs: Faq[];
};

export const pillars: Record<
  Pillar,
  { label: string; tagline: string }
> = {
  digital: {
    label: "Digital & Growth",
    tagline: "Get found, get followed, get leads.",
  },
  signage: {
    label: "Signage & Large Format",
    tagline: "Everything a storefront or campaign shows up as.",
  },
  spaces: {
    label: "Interiors & Experiences",
    tagline: "Spaces and booths built to be walked into.",
  },
  print: {
    label: "Print & Personalisation",
    tagline: "Merchandise, gifts and packaging, branded down to the detail.",
  },
};

export const pillarOrder: Pillar[] = ["digital", "signage", "spaces", "print"];

export const services: Service[] = [
  // Digital & Growth
  {
    slug: "website-development",
    name: "Website Development",
    code: "WEB-01",
    pillar: "digital",
    icon: Globe,
    short: "Fast, conversion-focused websites for UAE and Qatar businesses.",
    description:
      "Custom-built websites and e-commerce platforms designed to load fast, rank well, and turn visitors into leads — built for businesses trading across Dubai, Abu Dhabi, Sharjah and Doha.",
    capabilities: [
      "Custom website design & development",
      "E-commerce & online stores",
      "Landing pages for campaigns",
      "Ongoing maintenance & hosting support",
    ],
    faqs: [
      {
        q: "Do you build websites for businesses across the UAE and Qatar?",
        a: "Yes. We design and develop websites for clients based in Dubai, Abu Dhabi, Sharjah, and Doha, and build every site to perform well for local search in both markets.",
      },
      {
        q: "Can you redesign an existing website instead of starting from scratch?",
        a: "Yes — we can rebuild, redesign, or extend an existing website, migrating content and preserving search rankings where it matters.",
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Marketing",
    code: "SOC-02",
    pillar: "digital",
    icon: Share2,
    short: "Content and campaigns that build a following and drive orders.",
    description:
      "Social media strategy, content production, and paid campaign management across the platforms UAE and Qatar audiences actually use — built to turn followers into leads.",
    capabilities: [
      "Content planning & production",
      "Paid social campaigns",
      "Community management",
      "Performance reporting",
    ],
    faqs: [
      {
        q: "Which social platforms do you manage?",
        a: "We plan and manage content and paid campaigns across Instagram, Facebook, TikTok, LinkedIn and Snapchat, choosing the mix based on where a brand's UAE or Qatar audience is most active.",
      },
      {
        q: "Can social media work alongside signage and print campaigns?",
        a: "Yes — because production and digital sit under one roof, a single campaign, like a store opening, exhibition, or product launch, can be planned across signage, print and social from the same brief.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    code: "SEO-03",
    pillar: "digital",
    icon: Search,
    short: "Search visibility built for UAE and Qatar buyers, not just traffic.",
    description:
      "Search engine optimisation focused on the terms UAE and Qatar customers actually search — local SEO, on-page optimisation, and content built to rank and to be cited by AI answer engines.",
    capabilities: [
      "Local SEO for UAE & Qatar",
      "On-page & technical SEO",
      "Content & keyword strategy",
      "AI / answer-engine optimisation (AEO)",
    ],
    faqs: [
      {
        q: "What is AEO and why does it matter alongside SEO?",
        a: "AEO (answer engine optimisation) structures content so AI tools like Google AI Overviews, ChatGPT and Perplexity can find and cite it directly, not just so it ranks in a list of blue links. We build both into every page.",
      },
      {
        q: "Do you optimise for Arabic and English search?",
        a: "Yes — search behaviour across the UAE and Qatar spans both languages, and content strategy accounts for how each market searches.",
      },
    ],
  },

  // Signage & Large Format
  {
    slug: "signboards",
    name: "Signboards & Signage",
    code: "SIG-04",
    pillar: "signage",
    icon: Signpost,
    short: "Indoor & outdoor signage that gets a storefront noticed.",
    description:
      "3D and LED signboards, illuminated and non-illuminated boards, wayfinding systems and storefront branding — designed, fabricated and installed for retail, F&B and corporate premises across the UAE and Qatar.",
    capabilities: [
      "3D & LED signboards",
      "Illuminated & non-illuminated boards",
      "Wayfinding systems",
      "Storefront & retail branding",
    ],
    faqs: [
      {
        q: "Do you handle signboard installation as well as design?",
        a: "Yes — signboards are designed, fabricated and installed as one project, so there's a single point of contact from concept to the board going up.",
      },
      {
        q: "Can you match signage to municipality or mall approval requirements?",
        a: "We design signage with local approval processes across UAE emirates and Qatar in mind; requirements vary by municipality and by mall or landlord, so specifics are confirmed at brief stage.",
      },
    ],
  },
  {
    slug: "stickers-decals",
    name: "Stickers & Decals",
    code: "STK-05",
    pillar: "signage",
    icon: Sticker,
    short: "Custom stickers, decals and vehicle branding, any material.",
    description:
      "Vinyl, PVC, kraft, foil and clear stickers cut to any shape and size — for products, packaging, promotions, shopfronts and vehicle branding, printed for outdoor durability in Gulf climate conditions.",
    capabilities: [
      "Vinyl & PVC stickers",
      "Foil & metallic finishes",
      "Product & packaging labels",
      "Vehicle branding decals",
    ],
    faqs: [
      {
        q: "Are your stickers durable enough for UAE and Qatar outdoor conditions?",
        a: "Materials are selected for outdoor use in high heat and UV exposure, which is a standard consideration for signage and stickers produced for this region.",
      },
      {
        q: "What's the minimum order size for custom stickers?",
        a: "We handle both small-batch and bulk sticker orders — tell us the quantity and we'll confirm the right production route.",
      },
    ],
  },
  {
    slug: "flags-banners",
    name: "Flags & Banners",
    code: "FLG-06",
    pillar: "signage",
    icon: Flag,
    short: "Flags, banners and feather flags for events and storefronts.",
    description:
      "Teardrop and feather flags, pole banners, PVC banners and fabric backdrops for retail promotions, events, exhibitions and roadside branding across the UAE and Qatar.",
    capabilities: [
      "Teardrop & feather flags",
      "PVC & fabric banners",
      "Pole & street banners",
      "Event backdrops",
    ],
    faqs: [
      {
        q: "Can flags and banners be produced for a same-week event?",
        a: "Turnaround depends on quantity and finish — share your event date when you request a quote and we'll confirm what's achievable.",
      },
      {
        q: "Do you supply the flag poles and bases as well as the print?",
        a: "Yes — flags, banners, poles and bases can be supplied as a complete kit, not just the printed graphic.",
      },
    ],
  },
  {
    slug: "acrylic-products",
    name: "Acrylic Products",
    code: "ACR-07",
    pillar: "signage",
    icon: Gem,
    short: "Custom acrylic fabrication for signage, displays and gifting.",
    description:
      "Laser-cut and fabricated acrylic — signage lettering, retail displays, awards, corporate gifting boxes and point-of-sale — produced in-house for precise finishing.",
    capabilities: [
      "Laser-cut acrylic lettering",
      "Retail & POS displays",
      "Acrylic awards & trophies",
      "Custom acrylic gift boxes",
    ],
    faqs: [
      {
        q: "Can you produce acrylic awards and trophies for corporate events?",
        a: "Yes — custom acrylic awards, plaques and trophies are a standard part of the acrylic production line, often paired with corporate gifting orders.",
      },
      {
        q: "What finishes are available on acrylic signage?",
        a: "Options include clear, frosted, coloured and mirrored acrylic, with laser-cut or CNC-routed edges depending on the design.",
      },
    ],
  },

  // Interiors & Experiences
  {
    slug: "fitout-kiosks",
    name: "Interior Fit-Out & Kiosks",
    code: "FIT-08",
    pillar: "spaces",
    icon: Store,
    short: "Retail fit-outs and custom kiosks, from concept to install.",
    description:
      "Interior fit-out for retail, F&B and office spaces, plus custom-built kiosks for malls, events and pop-ups — concept, joinery and installation coordinated alongside signage and branding.",
    capabilities: [
      "Retail & commercial fit-out",
      "Custom kiosk design & build",
      "Joinery & carpentry",
      "Branded interior elements",
    ],
    faqs: [
      {
        q: "Do you design and build mall kiosks, or only shop interiors?",
        a: "Both — the fit-out team builds full shop interiors and standalone kiosks for malls, events and pop-up activations.",
      },
      {
        q: "Can fit-out and signage be delivered as one project?",
        a: "Yes — that's the point of having both under one roof. A shop fit-out and its signage can be briefed, produced and installed together.",
      },
    ],
  },
  {
    slug: "events-exhibitions",
    name: "Events & Exhibition Booths",
    code: "EVT-09",
    pillar: "spaces",
    icon: Presentation,
    short: "Exhibition stands and event branding, start to finish.",
    description:
      "Exhibition booth design and build, event branding, backdrops and on-site production for conferences, trade shows and activations across the UAE and Qatar's exhibition calendar.",
    capabilities: [
      "Exhibition stand design & build",
      "Event branding & backdrops",
      "On-site production support",
      "Trade show & activation support",
    ],
    faqs: [
      {
        q: "Do you build exhibition stands for venues in both the UAE and Qatar?",
        a: "Yes — exhibition and event work is delivered across major UAE venues and Qatar's exhibition and conference calendar.",
      },
      {
        q: "Can you handle a booth build with a short lead time before a trade show?",
        a: "Lead time depends on stand size and complexity — share the show dates and stand brief and we'll confirm what's achievable.",
      },
    ],
  },

  // Print & Personalisation
  {
    slug: "screen-printing",
    name: "Screen Printing & T-Shirts",
    code: "SCR-10",
    pillar: "print",
    icon: Shirt,
    short: "Screen printing and custom T-shirts for teams and events.",
    description:
      "Screen-printed T-shirts, uniforms and merchandise for corporate teams, events and promotions, with bulk and small-batch runs handled in-house.",
    capabilities: [
      "Screen printing (single & multi-colour)",
      "Custom T-shirts & uniforms",
      "Event & team merchandise",
      "Bulk & small-batch runs",
    ],
    faqs: [
      {
        q: "Can you print T-shirts for a corporate event with a tight deadline?",
        a: "Share the quantity, design and event date when requesting a quote and we'll confirm the fastest achievable turnaround.",
      },
      {
        q: "What's the difference between screen printing and UV printing for merchandise?",
        a: "Screen printing suits bulk runs on fabric like T-shirts; UV printing suits smaller runs on hard items like pens, bottles and plaques. We offer both and can advise which fits a given order.",
      },
    ],
  },
  {
    slug: "uv-printing-gifts",
    name: "UV Printing & Corporate Gifts",
    code: "UVG-11",
    pillar: "print",
    icon: Sparkles,
    short: "UV printing and personalised branding on corporate gift items.",
    description:
      "Direct UV printing onto gift items — pens, bottles, tech accessories, awards and hampers — plus curated corporate gifting for client relationships, staff recognition and event giveaways.",
    capabilities: [
      "UV printing on gift items",
      "Custom branding & personalisation",
      "Bulk corporate orders",
      "Gift sets & hampers",
    ],
    faqs: [
      {
        q: "What items can you UV print on for corporate gifts?",
        a: "UV printing works on most hard surfaces — pens, bottles, tech accessories, acrylic and wood items — so branding can be applied directly rather than via a sticker.",
      },
      {
        q: "Do you help source the gift items, or only print on items we supply?",
        a: "Both — we can source and curate gift items to a brief, or print and personalise items a client already has.",
      },
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    code: "PKG-12",
    pillar: "print",
    icon: Package,
    short: "Custom packaging that carries the brand off the shelf.",
    description:
      "Retail and corporate packaging — boxes, sleeves, inserts and bags — designed and printed to match the rest of a brand's visual identity.",
    capabilities: [
      "Custom box & sleeve design",
      "Retail-ready packaging",
      "Branded bags & inserts",
      "Small and bulk print runs",
    ],
    faqs: [
      {
        q: "Can packaging match branding used on signage and gifts?",
        a: "Yes — since production runs through the same team, packaging can be kept visually consistent with a brand's signage, stickers and gifting.",
      },
      {
        q: "Do you offer eco-friendly packaging materials?",
        a: "Recycled and biodegradable stock options are available — specify sustainability requirements when requesting a quote.",
      },
    ],
  },
];

export const servicesByPillar: Record<Pillar, Service[]> = {
  digital: services.filter((s) => s.pillar === "digital"),
  signage: services.filter((s) => s.pillar === "signage"),
  spaces: services.filter((s) => s.pillar === "spaces"),
  print: services.filter((s) => s.pillar === "print"),
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const sectors = [
  "Retail",
  "Hospitality",
  "Corporate",
  "Events",
  "Government",
  "Healthcare",
];

export const markets = ["Dubai", "Abu Dhabi", "Sharjah", "Doha"];

export const siteFaqs: Faq[] = [
  {
    q: "What services does Gifts Gulf offer?",
    a: "Gifts Gulf combines digital marketing — websites, SEO and social media — with large-format printing and branding (signage, stickers, flags, acrylic), interior fit-outs and kiosks, exhibition booths, and print personalisation (screen printing, T-shirts, UV-printed gifts and packaging), delivered across the UAE and Qatar.",
  },
  {
    q: "Does Gifts Gulf serve clients in both the UAE and Qatar?",
    a: "Yes — Gifts Gulf works with businesses across the UAE (Dubai, Abu Dhabi, Sharjah) and Qatar (Doha).",
  },
  {
    q: "Can one project include both physical branding and digital marketing?",
    a: "Yes — that's the core of how Gifts Gulf works. A single brief can cover a shop's signage and fit-out alongside its website and social media, instead of splitting the work across separate vendors.",
  },
  {
    q: "Does Gifts Gulf handle both small orders and large corporate contracts?",
    a: "Yes — from single sign installs and small merchandise runs to multi-service corporate and exhibition contracts.",
  },
  {
    q: "How do I get a quote from Gifts Gulf?",
    a: "Use the contact form, or email or call directly with the service, quantity and timeline, and the team will follow up with next steps.",
  },
];
