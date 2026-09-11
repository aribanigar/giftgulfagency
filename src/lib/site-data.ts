import {
  Signpost,
  Sticker,
  Package,
  Gift,
  Presentation,
  Hammer,
  Share2,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  pillar: "production" | "digital";
  icon: LucideIcon;
  short: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "signage",
    name: "Signage",
    pillar: "production",
    icon: Signpost,
    short: "Indoor & outdoor signage that gets a brand noticed.",
    description:
      "3D and LED signs, illuminated and non-illuminated boards, wayfinding systems, and storefront branding — designed, fabricated, and installed in-house.",
    capabilities: [
      "3D & LED signage",
      "Acrylic & metal fabrication",
      "Wayfinding systems",
      "Storefront & retail branding",
    ],
  },
  {
    slug: "stickers-labels",
    name: "Stickers & Labels",
    pillar: "production",
    icon: Sticker,
    short: "Custom stickers, decals, and product labels, any material.",
    description:
      "Vinyl, PVC, kraft, foil, and clear stickers cut to any shape and size — for products, packaging, promotions, and vehicle branding.",
    capabilities: [
      "Vinyl & PVC stickers",
      "Foil & metallic finishes",
      "Product & packaging labels",
      "Vehicle branding decals",
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    pillar: "production",
    icon: Package,
    short: "Custom packaging that carries the brand off the shelf.",
    description:
      "Retail and corporate packaging — boxes, sleeves, inserts, and bags — designed and printed to match the rest of a brand's visual identity.",
    capabilities: [
      "Custom box & sleeve design",
      "Retail-ready packaging",
      "Branded bags & inserts",
      "Small and bulk print runs",
    ],
  },
  {
    slug: "corporate-gifts",
    name: "Corporate Gifts",
    pillar: "production",
    icon: Gift,
    short: "Branded gifts for clients, staff, and events.",
    description:
      "Curated and custom-branded gift items for corporate occasions, client relationships, and employee recognition, sourced and personalised in-house.",
    capabilities: [
      "Custom branding & personalisation",
      "Bulk corporate orders",
      "Gift sets & hampers",
      "Event & conference giveaways",
    ],
  },
  {
    slug: "events-exhibitions",
    name: "Events & Exhibitions",
    pillar: "production",
    icon: Presentation,
    short: "Exhibition stands and event branding, start to finish.",
    description:
      "Exhibition booth design and build, event branding, backdrops, banners, and on-site production for conferences, trade shows, and activations.",
    capabilities: [
      "Exhibition stand design & build",
      "Event branding & backdrops",
      "Banners & signage on-site",
      "Trade show & activation support",
    ],
  },
  {
    slug: "fit-outs",
    name: "Fit-Outs",
    pillar: "production",
    icon: Hammer,
    short: "Retail and commercial interior fit-outs.",
    description:
      "Interior fit-out for retail, office, and hospitality spaces — from concept and joinery to final installation, coordinated alongside signage and branding.",
    capabilities: [
      "Retail & commercial fit-out",
      "Joinery & carpentry",
      "Project management",
      "Branded interior elements",
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    pillar: "digital",
    icon: Share2,
    short: "Content and campaigns that build a following.",
    description:
      "Social media strategy, content production, and campaign management across the platforms a brand's audience actually uses.",
    capabilities: [
      "Content planning & production",
      "Paid social campaigns",
      "Community management",
      "Performance reporting",
    ],
  },
  {
    slug: "web-software",
    name: "Website & Software",
    pillar: "digital",
    icon: Code2,
    short: "Websites and custom software, built to grow with the business.",
    description:
      "Websites, e-commerce, and custom software development — built on modern stacks and designed to work as hard as the rest of the brand.",
    capabilities: [
      "Website design & development",
      "E-commerce platforms",
      "Custom software & tools",
      "Ongoing support & maintenance",
    ],
  },
];

export const servicesByPillar = {
  production: services.filter((s) => s.pillar === "production"),
  digital: services.filter((s) => s.pillar === "digital"),
};

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
