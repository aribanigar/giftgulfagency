import {
  Shirt,
  Coffee,
  ShoppingBag,
  IdCard,
  Umbrella,
  Backpack,
  Gift,
  KeyRound,
  LayoutGrid,
  Package,
  NotebookPen,
  GlassWater,
  PenTool,
  Award,
  PartyPopper,
  Usb,
  type LucideIcon,
} from "lucide-react";
import type { Faq, QuickFact } from "@/lib/site-data";

export type Product = {
  slug: string;
  name: string;
  /** Slug of the Section this product rolls up to, for breadcrumb & cross-links. */
  parentSection: string;
  icon: LucideIcon;
  primaryKeyword: string;
  short: string;
  metaDescription: string;
  definition: string;
  options: string[];
  quickFacts: QuickFact[];
  faqs: Faq[];
};

export const products: Product[] = [
  {
    slug: "branded-apparel",
    name: "Branded Apparel",
    parentSection: "printing",
    icon: Shirt,
    primaryKeyword: "shirt printing",
    short: "Custom-printed T-shirts, polos, hoodies and uniforms for staff, events and merchandise.",
    metaDescription:
      "Custom T-shirt, polo, hoodie and uniform printing via DTF and screen printing, for staff, events and merchandise across the UAE and Qatar.",
    definition:
      "Branded apparel covers custom-printed T-shirts, polos, hoodies and staff uniforms, produced via DTF for detailed, full-colour designs on smaller runs, or screen printing for bulk, uniform-colour orders. Both methods are used side by side depending on the design and order size.",
    options: [
      "T-shirts & polo shirts",
      "Hoodies & sweatshirts",
      "Staff & event uniforms",
      "DTF full-colour printing",
      "Screen printing for bulk runs",
      "Event & activation merchandise",
    ],
    quickFacts: [
      { label: "Methods", value: "DTF (direct-to-film) and screen printing" },
      { label: "Best for", value: "Staff uniforms, event merchandise, retail apparel" },
      { label: "Order sizes", value: "Single samples to bulk uniform runs" },
    ],
    faqs: [
      {
        q: "Should a T-shirt order use DTF or screen printing?",
        a: "DTF suits detailed, full-colour or photo-style designs on smaller runs, since there's no per-colour set-up cost. Screen printing is more cost-effective for large, uniform-colour orders like staff T-shirts or event giveaways, once quantities are high enough to offset the set-up.",
      },
      {
        q: "Can you print hoodies as well as T-shirts?",
        a: "Yes. Hoodies, sweatshirts and polo shirts are printed using the same DTF and screen printing methods as T-shirts.",
      },
      {
        q: "What's the turnaround for a bulk staff uniform order?",
        a: "Turnaround depends on quantity, garment sourcing and number of colours. Share the headcount, garment type and target date when requesting a quote.",
      },
    ],
  },
  {
    slug: "custom-mugs",
    name: "Custom Mugs",
    parentSection: "gift-items",
    icon: Coffee,
    primaryKeyword: "printed mugs",
    short: "UV-printed and sublimated mugs for corporate branding, gifting and retail merchandise.",
    metaDescription:
      "Custom-printed ceramic, magic and travel mugs for corporate gifting and merchandise across the UAE and Qatar.",
    definition:
      "Custom mugs cover ceramic, magic (colour-change) and travel mug printing, branded with a logo, message or full-colour design for corporate gifting, staff recognition or retail merchandise.",
    options: [
      "Ceramic mugs",
      "Magic (colour-change) mugs",
      "Travel & thermal mugs",
      "Two-tone & inner-colour mugs",
      "Bulk corporate branding",
    ],
    quickFacts: [
      { label: "Print method", value: "Sublimation and UV printing" },
      { label: "Best for", value: "Corporate gifting, staff recognition, retail merchandise" },
      { label: "Order sizes", value: "Sample runs to bulk corporate orders" },
    ],
    faqs: [
      {
        q: "What's the minimum order for printed mugs?",
        a: "Both small sample runs and bulk corporate orders are handled. Share the quantity when requesting a quote.",
      },
      {
        q: "Can a mug design use full colour and photos, or only a logo?",
        a: "Full-colour designs and photos print cleanly via sublimation, alongside simple single-colour logo branding.",
      },
      {
        q: "Do you offer magic (colour-change) mugs?",
        a: "Yes. Magic mugs, which reveal a design when filled with a hot drink, are available alongside standard ceramic and travel mugs.",
      },
    ],
  },
  {
    slug: "paper-bags-packaging",
    name: "Paper Bags & Packaging",
    parentSection: "packaging",
    icon: ShoppingBag,
    primaryKeyword: "paper bag suppliers uae",
    short: "Kraft and laminated paper bag manufacturing and printing, custom sized for retail and F&B.",
    metaDescription:
      "Custom kraft and laminated paper bag manufacturing and printing for retail and F&B businesses across the UAE and Qatar.",
    definition:
      "Paper bags and packaging covers the manufacturing and printing of kraft, laminated and die-cut handle paper bags, sized and finished to a brand's specification rather than picked from a generic stock range.",
    options: [
      "Kraft paper bags",
      "Laminated & glossy-finish bags",
      "Die-cut handle bags",
      "Custom sizes & finishes",
      "Bulk manufacturing runs",
    ],
    quickFacts: [
      { label: "Materials", value: "Kraft paper, laminated stock, custom handles" },
      { label: "Service", value: "In-house manufacturing and printing, not outsourced" },
      { label: "Suited to", value: "Retail, F&B and delivery-driven businesses" },
    ],
    faqs: [
      {
        q: "Are you a paper bag manufacturer, or only a printer?",
        a: "Both. Paper bags are manufactured and printed in-house, from stock sizes to fully custom dimensions and finishes, rather than outsourced to a separate bag supplier.",
      },
      {
        q: "What's the minimum order for custom paper bags?",
        a: "Both sample runs and bulk manufacturing orders are handled. Share the size, quantity and finish when requesting a quote.",
      },
      {
        q: "Can paper bags be printed in a brand's exact colours?",
        a: "Yes. Colour matching against existing branding or Pantone references is standard practice for paper bag orders.",
      },
    ],
  },
  {
    slug: "lanyards-badges",
    name: "Lanyards & Badges",
    parentSection: "gift-items",
    icon: IdCard,
    primaryKeyword: "name badges",
    short: "Woven and printed lanyards, ID cards and name badges for staff, offices and events.",
    metaDescription:
      "Custom lanyards, ID card printing and name badges for staff, offices and events across the UAE and Qatar.",
    definition:
      "Lanyards and badges covers woven and printed lanyards, ID card printing, name badges and event or conference badges, produced for offices, staff identification and one-off events.",
    options: [
      "Woven & printed lanyards",
      "ID card printing",
      "Name badges & tags",
      "Event & conference badges",
      "Retractable badge reels",
    ],
    quickFacts: [
      { label: "Typical output", value: "Staff lanyards, ID cards, name badges, event badges" },
      { label: "Best for", value: "Offices, staff identification, conferences & events" },
      { label: "Order sizes", value: "Single ID cards to bulk staff or event batches" },
    ],
    faqs: [
      {
        q: "Can you print ID cards and lanyards for our whole staff at once?",
        a: "Yes. Bulk staff ID card and lanyard orders are handled, along with single-card replacements as needed.",
      },
      {
        q: "How quickly can event badges be ready before a conference?",
        a: "Turnaround depends on quantity and design complexity. Share the attendee count and event date when requesting a quote.",
      },
      {
        q: "Do you supply the ID card printer, or only the printed cards?",
        a: "Printed ID cards and badges are produced to order; equipment supply can be discussed separately if a client needs on-site printing capability.",
      },
    ],
  },
  {
    slug: "custom-umbrellas",
    name: "Custom Umbrellas",
    parentSection: "gift-items",
    icon: Umbrella,
    primaryKeyword: "outdoor umbrellas",
    short: "Branded golf, compact and garden umbrellas for corporate gifting and outdoor use.",
    metaDescription:
      "Custom-branded golf, compact and garden umbrellas for corporate gifting across the UAE and Qatar.",
    definition:
      "Custom umbrellas cover golf, compact and garden/patio umbrellas, printed with a logo or design on the canopy panels for corporate gifting, staff giveaways or outdoor branding.",
    options: [
      "Golf umbrellas",
      "Compact & folding umbrellas",
      "Garden & patio umbrellas",
      "Full-canopy branding",
    ],
    quickFacts: [
      { label: "Typical output", value: "Golf, compact and garden/patio umbrellas" },
      { label: "Branding", value: "Logo or full-panel canopy printing" },
      { label: "Best for", value: "Corporate gifting, staff giveaways, outdoor branding" },
    ],
    faqs: [
      {
        q: "Can a logo be printed across multiple umbrella panels?",
        a: "Yes. Branding can run across a single panel for a simple logo placement, or across multiple canopy panels for a larger design.",
      },
      {
        q: "Are the umbrellas durable enough for regular outdoor use in the Gulf?",
        a: "Materials are selected for outdoor durability, which is a standard consideration for umbrellas used in this region's sun and occasional wind.",
      },
      {
        q: "What's the minimum order for branded umbrellas?",
        a: "Both smaller corporate orders and bulk giveaway quantities are handled. Share the quantity when requesting a quote.",
      },
    ],
  },
  {
    slug: "custom-tote-bags",
    name: "Custom Tote & Eco Bags",
    parentSection: "gift-items",
    icon: Backpack,
    primaryKeyword: "non woven bags",
    short: "Non-woven, canvas and cotton tote bags, printed for events, retail and eco-friendly gifting.",
    metaDescription:
      "Custom non-woven, canvas and cotton tote bags for events, retail and eco-friendly corporate gifting across the UAE and Qatar.",
    definition:
      "Tote and eco bags cover non-woven, canvas, cotton and drawstring bags, printed with a logo or design for event giveaways, retail merchandise or eco-conscious corporate gifting.",
    options: [
      "Non-woven bags",
      "Canvas tote bags",
      "Cotton bags",
      "Drawstring bags",
      "Eco-friendly & reusable materials",
    ],
    quickFacts: [
      { label: "Materials", value: "Non-woven fabric, canvas, cotton" },
      { label: "Best for", value: "Event giveaways, retail merchandise, eco-conscious gifting" },
      { label: "Order sizes", value: "Sample runs to bulk event quantities" },
    ],
    faqs: [
      {
        q: "What eco-friendly bag materials are available?",
        a: "Non-woven fabric, canvas and cotton are all reusable, lower-impact alternatives to plastic bags, and are the standard materials used for this category.",
      },
      {
        q: "Can tote bags be printed for a large event giveaway?",
        a: "Yes. Bulk tote and drawstring bag orders are a common request for conferences, retail launches and event giveaways.",
      },
      {
        q: "How is the design printed onto the bag?",
        a: "Screen printing is typically used for bulk, uniform-colour designs on fabric bags, matching the same method used for apparel printing.",
      },
    ],
  },
  {
    slug: "corporate-gifts-dubai",
    name: "Corporate Gifts",
    parentSection: "gift-items",
    icon: Gift,
    primaryKeyword: "corporate gifts",
    short: "Curated corporate gifting for client relationships, staff recognition and seasonal campaigns.",
    metaDescription:
      "Curated corporate gifts for client relationships, staff recognition, onboarding and seasonal campaigns across the UAE and Qatar.",
    definition:
      "Corporate gifts covers the sourcing, branding and bulk fulfilment of gift items for a specific business occasion, client relationship gifting, staff recognition, employee onboarding, or a seasonal campaign around National Day, Ramadan, Eid or year-end, rather than a single product in isolation.",
    options: [
      "Client relationship gifts",
      "Staff recognition & milestone gifts",
      "Employee onboarding kits",
      "National Day & seasonal campaigns",
      "Ramadan & Eid hampers",
      "Curated gift sets to a budget tier",
    ],
    quickFacts: [
      { label: "Service", value: "Sourcing, branding and bulk fulfilment as one order" },
      { label: "Occasions", value: "Client gifting, staff recognition, onboarding, seasonal campaigns" },
      { label: "Peak periods", value: "UAE & Qatar National Day, Ramadan, Eid, year-end" },
    ],
    faqs: [
      {
        q: "How do I choose what to gift without a fixed product in mind?",
        a: "Share the occasion, recipient type (clients, staff or both) and a rough budget per person, and a shortlist of suitable items, drinkware, bags, tech accessories or a curated set, is put together from there.",
      },
      {
        q: "Can corporate gifts be tiered by budget?",
        a: "Yes. Gift sets are commonly curated across a few budget tiers for the same campaign, so recognition gifts and client gifts can differ in value without differing in presentation quality.",
      },
      {
        q: "How far in advance should a National Day or Ramadan gifting campaign be planned?",
        a: "Peak periods across the UAE and Qatar compress lead times for sourcing and branding, so briefing a seasonal campaign several weeks ahead of the date gives the most flexibility on item choice.",
      },
    ],
  },
  {
    slug: "custom-keychains",
    name: "Custom Keychains",
    parentSection: "gift-items",
    icon: KeyRound,
    primaryKeyword: "personalised key chain",
    short: "Acrylic, metal and leather keychains, UV-printed or engraved with a logo or name.",
    metaDescription:
      "Custom acrylic, metal and leather keychains, UV-printed or engraved for corporate gifting across the UAE and Qatar.",
    definition:
      "Custom keychains cover acrylic, metal and leather keychains, branded via UV printing or engraving, for corporate giveaways, retail merchandise or personalised per-recipient gifting.",
    options: [
      "Acrylic keychains",
      "Metal keychains",
      "Leather keychains",
      "UV-printed logo branding",
      "Engraved personalisation",
    ],
    quickFacts: [
      { label: "Materials", value: "Acrylic, metal, leather" },
      { label: "Branding", value: "UV printing or engraving" },
      { label: "Order sizes", value: "Individual personalised pieces to bulk giveaways" },
    ],
    faqs: [
      {
        q: "Can each keychain be personalised with a different name?",
        a: "Yes. Individual, per-recipient personalisation, such as names or initials, is possible for suitable keychain materials.",
      },
      {
        q: "What's the minimum order for branded keychains?",
        a: "Both small personalised orders and bulk giveaway quantities are handled. Share the quantity when requesting a quote.",
      },
      {
        q: "Which material holds up best for daily use?",
        a: "Metal keychains are the most durable for daily use; acrylic gives the widest range of colour and shape options; leather suits a more premium corporate gift.",
      },
    ],
  },
  {
    slug: "promo-accessories",
    name: "Desk & Promo Accessories",
    parentSection: "gift-items",
    icon: LayoutGrid,
    primaryKeyword: "coasters",
    short: "Coasters, mouse pads and desk accessories, branded for offices and corporate giveaways.",
    metaDescription:
      "Custom-printed coasters, mouse pads and desk accessories for offices and corporate giveaways across the UAE and Qatar.",
    definition:
      "Desk and promo accessories covers smaller everyday branded items, coasters, mouse pads and desk organisers, produced in bulk for office giveaways, client gifting or retail merchandise.",
    options: [
      "Coasters (single & sets)",
      "Mouse pads",
      "Desk organisers",
      "Phone & tablet stands",
    ],
    quickFacts: [
      { label: "Typical output", value: "Coasters, mouse pads, desk organisers" },
      { label: "Best for", value: "Office giveaways, client gifting, retail merchandise" },
      { label: "Order sizes", value: "Small sets to bulk corporate orders" },
    ],
    faqs: [
      {
        q: "Can coasters be sold or gifted as a set?",
        a: "Yes. Coasters are produced individually or as branded sets, packaged together for gifting.",
      },
      {
        q: "What's the print method for mouse pads and coasters?",
        a: "UV and sublimation printing are used depending on the material, giving a durable, full-colour finish on both items.",
      },
      {
        q: "What's the minimum order for desk accessories?",
        a: "Both small sample runs and bulk office orders are handled. Share the quantity when requesting a quote.",
      },
    ],
  },
  {
    slug: "corporate-gift-boxes-sets",
    name: "Corporate Gift Boxes & Sets",
    parentSection: "gift-items",
    icon: Package,
    primaryKeyword: "corporate gift box",
    short: "Curated gift sets in custom-branded boxes, assembled and finished for corporate campaigns.",
    metaDescription:
      "Curated corporate gift sets in custom-branded boxes, assembled and finished for corporate campaigns across the UAE and Qatar.",
    definition:
      "Corporate gift boxes and sets cover the assembly and packaging side of gifting, multiple items curated into one branded box with ribbon, insert cards or other finishing, rather than a single product handed over loose.",
    options: [
      "Curated multi-item gift sets",
      "Custom-branded box packaging",
      "Ribbon & finishing details",
      "Insert cards & personalised notes",
      "Bulk assembly & fulfilment",
    ],
    quickFacts: [
      { label: "Service", value: "Curation, custom box packaging and assembly" },
      { label: "Best for", value: "Client gifting campaigns, staff recognition, seasonal gifting" },
      { label: "Order sizes", value: "Single curated boxes to bulk campaign fulfilment" },
    ],
    faqs: [
      {
        q: "Can items be curated into a set, or do we need to choose everything ourselves?",
        a: "A set can be curated to a brief and budget, or built from items a client has already chosen. Both approaches are handled.",
      },
      {
        q: "Can the box itself carry our branding, not just the items inside?",
        a: "Yes. The outer box is custom-printed with a brand's logo and colours, matching the same design standard as the items inside.",
      },
      {
        q: "How far ahead should a bulk gift box campaign be briefed?",
        a: "Lead time depends on item sourcing and quantity, and compresses further during peak gifting periods. Share the target delivery date and quantity when requesting a quote.",
      },
    ],
  },
  {
    slug: "custom-notebooks-diaries",
    name: "Custom Notebooks & Diaries",
    parentSection: "gift-items",
    icon: NotebookPen,
    primaryKeyword: "customized notebook",
    short: "A5 and A6 notebooks and hardcover diaries, custom-printed covers for corporate gifting.",
    metaDescription:
      "Custom A5 and A6 notebooks and hardcover diaries for corporate gifting and staff kits across the UAE and Qatar.",
    definition:
      "Custom notebooks and diaries cover A5 and A6 notebooks and hardcover diaries, with a custom-printed cover, for corporate gifting, staff onboarding kits or branded stationery sets.",
    options: [
      "A5 notebooks",
      "A6 notebooks",
      "Hardcover diaries",
      "Custom cover printing",
      "Branded stationery sets",
    ],
    quickFacts: [
      { label: "Sizes", value: "A5 and A6, plus hardcover diary formats" },
      { label: "Branding", value: "Custom cover printing, embossing on request" },
      { label: "Best for", value: "Staff onboarding kits, client gifting, event giveaways" },
    ],
    faqs: [
      {
        q: "Can notebook covers be fully custom-designed, not just a logo?",
        a: "Yes. Covers can carry a full custom design, colour and finish, not only a logo placement on a stock cover.",
      },
      {
        q: "Are notebooks available as part of a larger onboarding or gift kit?",
        a: "Yes. Notebooks and diaries are commonly bundled with pens, bags or drinkware into a single branded kit for onboarding or client gifting.",
      },
      {
        q: "What's the minimum order for branded notebooks?",
        a: "Both smaller batches and bulk corporate orders are handled. Share the quantity when requesting a quote.",
      },
    ],
  },
  {
    slug: "custom-water-bottles",
    name: "Custom Water Bottles",
    parentSection: "gift-items",
    icon: GlassWater,
    primaryKeyword: "customized water bottle",
    short: "Stainless steel bottles, sports bottles and insulated tumblers, branded for corporate gifting.",
    metaDescription:
      "Custom-branded stainless steel bottles, sports bottles and insulated tumblers for corporate gifting across the UAE and Qatar.",
    definition:
      "Custom water bottles and drinkware cover stainless steel bottles, sports bottles and insulated tumblers, branded via UV or laser engraving for corporate gifting, staff wellness initiatives or event giveaways.",
    options: [
      "Stainless steel bottles",
      "Sports & gym bottles",
      "Insulated tumblers",
      "UV printing or laser engraving",
    ],
    quickFacts: [
      { label: "Materials", value: "Stainless steel, insulated tumbler, sports-bottle plastics" },
      { label: "Branding", value: "UV printing or laser engraving" },
      { label: "Best for", value: "Corporate gifting, staff wellness, event giveaways" },
    ],
    faqs: [
      {
        q: "Does branding on a metal bottle wear off over time?",
        a: "Laser engraving is the most durable option for metal bottles, since it marks the surface rather than sitting on top of it. UV printing gives a full-colour finish but is better suited to items with lighter daily wear.",
      },
      {
        q: "Can bottles be branded for a staff wellness or fitness initiative?",
        a: "Yes. Sports and gym bottles branded for staff wellness campaigns are a common order alongside standard corporate gifting.",
      },
      {
        q: "What's the minimum order for branded water bottles?",
        a: "Both smaller batches and bulk corporate orders are handled. Share the quantity when requesting a quote.",
      },
    ],
  },
  {
    slug: "custom-pens",
    name: "Custom Pens",
    parentSection: "gift-items",
    icon: PenTool,
    primaryKeyword: "pens printed",
    short: "Plastic and metal executive pens, UV-printed or engraved with a logo for bulk giveaways.",
    metaDescription:
      "Custom-branded plastic and metal pens, UV-printed or engraved for bulk corporate giveaways across the UAE and Qatar.",
    definition:
      "Custom pens cover plastic branded pens and metal executive pens, printed or engraved with a logo, for bulk event giveaways, client gifting or everyday office branding.",
    options: [
      "Plastic branded pens",
      "Metal executive pens",
      "UV-printed logo branding",
      "Bulk giveaway quantities",
    ],
    quickFacts: [
      { label: "Types", value: "Plastic giveaway pens, metal executive pens" },
      { label: "Branding", value: "UV printing or engraving" },
      { label: "Order sizes", value: "Bulk giveaway quantities to executive gift batches" },
    ],
    faqs: [
      {
        q: "What's the minimum order for branded pens?",
        a: "Pens are typically ordered in bulk for events and giveaways, though smaller executive-gift batches are also handled. Share the quantity when requesting a quote.",
      },
      {
        q: "Can pens be ready in time for a specific event date?",
        a: "Turnaround depends on quantity and pen type. Share the event date when requesting a quote and we'll confirm what's achievable.",
      },
      {
        q: "What's the difference between plastic and metal executive pens?",
        a: "Plastic pens are the standard choice for bulk event and conference giveaways. Metal executive pens suit a smaller batch intended as a more premium client or leadership gift.",
      },
    ],
  },
  {
    slug: "awards-trophies",
    name: "Awards, Trophies & Medals",
    parentSection: "gift-items",
    icon: Award,
    primaryKeyword: "awards dubai",
    short: "Acrylic awards, metal trophies, engraved plaques and event medals, personalised per recipient.",
    metaDescription:
      "Custom acrylic awards, metal trophies, engraved plaques and event medals for corporate and sporting events across the UAE and Qatar.",
    definition:
      "Awards, trophies and medals cover acrylic awards, metal trophies, engraved plaques and event medals, personalised per recipient for staff recognition, corporate events, conferences and sporting competitions.",
    options: [
      "Acrylic awards",
      "Metal trophies",
      "Engraved plaques",
      "Event & sporting medals",
      "Per-recipient personalisation",
    ],
    quickFacts: [
      { label: "Materials", value: "Acrylic, metal, engraved plaque stock" },
      { label: "Best for", value: "Staff recognition, corporate events, sporting competitions" },
      { label: "Personalisation", value: "Individual name and title engraving per recipient" },
    ],
    faqs: [
      {
        q: "Can each award be engraved with a different recipient's name?",
        a: "Yes. Per-recipient engraving, names, titles and dates, is standard for awards, trophies and plaques ordered as a batch for an event.",
      },
      {
        q: "How far ahead of an award ceremony should we order?",
        a: "Turnaround depends on quantity and engraving detail. Share the event date and recipient count when requesting a quote.",
      },
      {
        q: "Do you supply medals for sporting events as well as corporate awards?",
        a: "Yes. Event and sporting medals are produced alongside corporate acrylic awards, metal trophies and engraved plaques.",
      },
    ],
  },
  {
    slug: "seasonal-corporate-gifts",
    name: "Seasonal & Festive Gifts",
    parentSection: "gift-items",
    icon: PartyPopper,
    primaryKeyword: "national day gifts",
    short: "Gift sets and hampers for National Day, Ramadan, Eid and year-end campaigns.",
    metaDescription:
      "Custom gift sets and hampers for UAE & Qatar National Day, Ramadan, Eid and year-end corporate campaigns.",
    definition:
      "Seasonal and festive gifts cover the gift sets and hampers built around a specific date on the regional calendar, UAE and Qatar National Day, Ramadan and Eid, and year-end or New Year gifting, rather than a standing, year-round gift catalogue.",
    options: [
      "National Day gift sets",
      "Ramadan & Eid hampers",
      "Year-end & New Year gifts",
      "Custom seasonal packaging",
    ],
    quickFacts: [
      { label: "Occasions", value: "UAE & Qatar National Day, Ramadan, Eid, year-end" },
      { label: "Service", value: "Curated sets, hampers and custom seasonal packaging" },
      { label: "Lead time", value: "Books up fastest around National Day and Ramadan" },
    ],
    faqs: [
      {
        q: "How early should a National Day or Ramadan gifting order be placed?",
        a: "These are the busiest gifting periods across the UAE and Qatar, so sourcing and branding lead times compress. Briefing several weeks ahead of the date gives the most flexibility on item choice.",
      },
      {
        q: "Can a seasonal gift set be packaged in a brand's own colours, not standard festive packaging?",
        a: "Yes. Seasonal hampers and gift sets can be packaged in a brand's own colours and branding rather than generic festive designs.",
      },
      {
        q: "Do you handle year-end and New Year corporate gifting as well as National Day and Ramadan?",
        a: "Yes. Year-end and New Year gift sets are handled alongside National Day, Ramadan and Eid campaigns.",
      },
    ],
  },
  {
    slug: "tech-gifts",
    name: "Tech Gifts",
    parentSection: "gift-items",
    icon: Usb,
    primaryKeyword: "custom usb",
    short: "Branded USB drives, power banks and wireless chargers for corporate gifting.",
    metaDescription:
      "Custom-branded USB drives, power banks and wireless chargers for corporate gifting across the UAE and Qatar.",
    definition:
      "Tech gifts cover branded USB drives, power banks and wireless chargers, UV-printed or engraved with a logo, for corporate gifting where a practical, higher-perceived-value item is preferred over standard drinkware or stationery.",
    options: [
      "Branded USB drives",
      "Power banks",
      "Wireless chargers",
      "Tech accessory gift sets",
    ],
    quickFacts: [
      { label: "Typical output", value: "USB drives, power banks, wireless chargers" },
      { label: "Branding", value: "UV printing or laser engraving" },
      { label: "Best for", value: "Client gifting, leadership gifts, tech-forward brands" },
    ],
    faqs: [
      {
        q: "What USB storage capacities are available for branded drives?",
        a: "A range of standard storage capacities is available; share the intended use (files, presentations, giveaways) when requesting a quote to confirm the right size.",
      },
      {
        q: "Can power banks and wireless chargers be branded with a logo?",
        a: "Yes. Power banks and wireless chargers are UV-printed or engraved with a logo, in line with the same branding standard used across other gift items.",
      },
      {
        q: "What's the minimum order for branded tech gifts?",
        a: "Both smaller executive-gift batches and bulk corporate orders are handled. Share the quantity when requesting a quote.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsForSection(sectionSlug: string) {
  return products.filter((p) => p.parentSection === sectionSlug);
}
