import {
  Printer,
  Signpost,
  Presentation,
  Package,
  Gift,
  Share2,
  type LucideIcon,
} from "lucide-react";

export type Faq = { q: string; a: string };
export type QuickFact = { label: string; value: string };

export type Section = {
  slug: string;
  name: string;
  code: string;
  icon: LucideIcon;
  short: string;
  description: string;
  definition: string;
  quickFacts: QuickFact[];
  regionalNote: string;
  capabilities: string[];
  faqs: Faq[];
};

export const sections: Section[] = [
  {
    slug: "printing",
    name: "Printing",
    code: "PRT-01",
    icon: Printer,
    short: "Large-format printing, stickers, screen printing and banners.",
    description:
      "Large-format and digital printing, custom stickers and decals, screen-printed T-shirts and merchandise, and flags and banners. All of it is produced in-house for retail, events and promotions across the UAE and Qatar.",
    definition:
      "Printing covers the large-format, digital and specialty print work a brand needs to show up physically. That includes banners, stickers, decals, screen-printed merchandise, flags and vehicle graphics, produced to hold up outdoors in Gulf conditions.",
    quickFacts: [
      { label: "Typical output", value: "Banners, stickers, decals, T-shirts, flags, vehicle graphics" },
      { label: "Materials", value: "Vinyl, PVC, foil, fabric, canvas" },
      { label: "Built for", value: "Outdoor UAE and Qatar heat and UV exposure" },
      { label: "Order sizes", value: "Single banners to bulk merchandise runs" },
    ],
    regionalNote:
      "Gulf summers push surface temperatures well past 45°C on outdoor prints, stickers and banners from Sharjah's industrial zones to Doha's corniche, so materials and finishes are chosen to hold up to that heat and UV load, not just to look right on day one.",
    capabilities: [
      "Large-format & digital printing",
      "Custom stickers & decals (vinyl, PVC, foil)",
      "Screen printing & custom T-shirts",
      "Flags, banners & feather flags",
      "Vehicle branding decals",
      "Bulk & small-batch runs",
    ],
    faqs: [
      {
        q: "Do you handle both large-format printing and small merchandise runs?",
        a: "Yes. From large-format banners and stickers to screen-printed T-shirts and event merchandise, everything is produced in-house rather than farmed out to different shops.",
      },
      {
        q: "Are your prints and stickers durable enough for UAE and Qatar outdoor conditions?",
        a: "Materials are selected for outdoor use in high heat and UV exposure, which is a standard consideration for anything printed for this region.",
      },
      {
        q: "Can flags, banners or stickers be produced for a same-week event?",
        a: "Turnaround depends on quantity and finish. Share your event date when you request a quote and we'll confirm what's achievable.",
      },
      {
        q: "What is the difference between large-format and digital printing?",
        a: "Large-format printing covers oversized outputs like banners and vehicle wraps. Digital printing covers smaller-run, print-on-demand jobs like stickers and flyers. Both are handled in-house, so a single order can mix the two.",
      },
      {
        q: "Can printing be matched to an existing brand's colours?",
        a: "Yes. Colour matching against existing brand guidelines or Pantone references is standard practice for repeat print orders.",
      },
      {
        q: "Why do materials matter more for outdoor printing in the UAE and Qatar?",
        a: "Gulf summers push outdoor surface temperatures well past 45°C, from Sharjah's industrial zones to Doha's corniche. Materials and finishes for banners, stickers and vehicle graphics are chosen to hold up to that heat and UV load long-term, not just to look right on day one.",
      },
    ],
  },
  {
    slug: "signages",
    name: "Signages",
    code: "SIG-02",
    icon: Signpost,
    short: "Indoor & outdoor signage that gets a storefront noticed.",
    description:
      "3D and LED signboards, illuminated and non-illuminated boards, wayfinding systems, and laser-cut acrylic lettering and displays, designed, fabricated and installed for retail, F&B and corporate premises across the UAE and Qatar.",
    definition:
      "Signage is the physical signboard, wayfinding and display work that identifies a business. That includes illuminated and non-illuminated boards, 3D and LED lettering, and acrylic displays, fabricated and installed on site.",
    quickFacts: [
      { label: "Typical output", value: "Illuminated boards, 3D/LED lettering, wayfinding signs, acrylic displays" },
      { label: "Materials", value: "Acrylic, aluminium composite, LED modules" },
      { label: "Approvals", value: "Municipality and mall sign-off, varies by emirate and city" },
      { label: "Service", value: "Design, fabrication and installation as one project" },
    ],
    regionalNote:
      "Signboard approvals run through different authorities depending on the emirate, or through Qatar's municipalities, and mall landlords add their own sign-off process on top. Design and fabrication account for the relevant approval route from the start, whether the install is a Dubai mall unit, an Abu Dhabi corniche-facing shopfront, or a Doha retail strip.",
    capabilities: [
      "3D & LED signboards",
      "Illuminated & non-illuminated boards",
      "Wayfinding systems",
      "Laser-cut acrylic lettering & displays",
      "Storefront & retail branding",
      "Acrylic awards & trophies",
    ],
    faqs: [
      {
        q: "Do you handle signboard installation as well as design?",
        a: "Yes. Signboards are designed, fabricated and installed as one project, so there's a single point of contact from concept to the board going up.",
      },
      {
        q: "Can you match signage to municipality or mall approval requirements?",
        a: "We design signage with local approval processes across UAE emirates and Qatar in mind; requirements vary by municipality and by mall or landlord, so specifics are confirmed at brief stage.",
      },
      {
        q: "What finishes are available on acrylic signage and displays?",
        a: "Options include clear, frosted, coloured and mirrored acrylic, with laser-cut or CNC-routed edges depending on the design.",
      },
      {
        q: "How long does a signboard typically take from design to installation?",
        a: "Timeline depends on size, illumination and approval requirements. Share the brief and target date when requesting a quote for a specific estimate.",
      },
      {
        q: "Do you remove and dispose of old signage during a replacement?",
        a: "Yes. Removal of existing signage is typically included as part of a replacement installation.",
      },
      {
        q: "Why do signage approvals vary between Dubai, Abu Dhabi and Doha?",
        a: "Signboard approvals run through different authorities depending on the emirate, or through Qatar's municipalities, and mall landlords add their own sign-off process on top. Design and fabrication account for the relevant approval route from the start, whether the install is a Dubai mall unit, an Abu Dhabi corniche-facing shopfront, or a Doha retail strip.",
      },
    ],
  },
  {
    slug: "events-exhibitions",
    name: "Events & Exhibitions",
    code: "EVT-03",
    icon: Presentation,
    short: "Exhibition stands, event branding and kiosks, start to finish.",
    description:
      "Exhibition booth design and build, event branding, backdrops, and custom kiosks for malls, events and pop-ups, produced and installed for conferences, trade shows and activations across the UAE and Qatar's exhibition calendar.",
    definition:
      "Events and exhibitions covers the design, build and installation of exhibition stands, event branding, backdrops and custom kiosks for conferences, trade shows, malls and activations.",
    quickFacts: [
      { label: "Typical output", value: "Exhibition stands, event backdrops, custom kiosks, branded booths" },
      { label: "Venues", value: "Dubai World Trade Centre, Abu Dhabi ADNEC, Doha DECC and QNCC" },
      { label: "Service", value: "Design, build, on-site installation and breakdown" },
      { label: "Timeline", value: "Planned around each venue's exhibition calendar" },
    ],
    regionalNote:
      "Exhibition and conference activity runs on a busy calendar across Dubai World Trade Centre, Abu Dhabi's ADNEC, and Doha's DECC and QNCC, so booth and kiosk builds are planned around that calendar and a stand is ready before the doors open, wherever the show is.",
    capabilities: [
      "Exhibition stand design & build",
      "Event branding & backdrops",
      "Custom kiosk design & build",
      "On-site production support",
      "Trade show & activation support",
    ],
    faqs: [
      {
        q: "Do you build exhibition stands for venues in both the UAE and Qatar?",
        a: "Yes. Exhibition and event work is delivered across major UAE venues and Qatar's exhibition and conference calendar.",
      },
      {
        q: "Do you design and build mall kiosks, or only exhibition stands?",
        a: "Both. The same team builds standalone kiosks for malls and pop-up activations alongside full exhibition stands.",
      },
      {
        q: "Can you handle a booth build with a short lead time before a trade show?",
        a: "Lead time depends on stand size and complexity. Share the show dates and stand brief and we'll confirm what's achievable.",
      },
      {
        q: "Do you handle stand breakdown and storage after an event?",
        a: "Breakdown is typically included. Reusable stand components can be stored and reused for future events on request.",
      },
      {
        q: "Can an exhibition stand be reused across multiple shows?",
        a: "Yes. Modular stand designs are commonly built for reuse across a season's worth of trade shows.",
      },
      {
        q: "Which exhibition venues do you build stands and kiosks for?",
        a: "Primarily Dubai World Trade Centre, Abu Dhabi's ADNEC, and Doha's DECC and QNCC. Builds are planned around each venue's exhibition calendar so a stand is ready before the doors open, wherever the show is.",
      },
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    code: "PKG-04",
    icon: Package,
    short: "Custom packaging that carries the brand off the shelf.",
    description:
      "Retail and corporate packaging, including boxes, sleeves, inserts and bags, designed and printed to match the rest of a brand's visual identity, for businesses across the UAE and Qatar.",
    definition:
      "Packaging covers the custom boxes, sleeves, inserts and bags that carry a brand's identity from the shelf to the customer, designed and printed to match the rest of a brand's visual identity.",
    quickFacts: [
      { label: "Typical output", value: "Custom boxes, sleeves, inserts, branded bags" },
      { label: "Materials", value: "Recycled and biodegradable stock available" },
      { label: "Order sizes", value: "Small retail-ready runs to bulk production" },
      { label: "Service", value: "Structural design through to print" },
    ],
    regionalNote:
      "Retail packaging for a Dubai flagship, an Abu Dhabi boutique, or a Doha concept store all needs to survive the same handling and shipping conditions across the region, so structural design accounts for that before the print run starts.",
    capabilities: [
      "Custom box & sleeve design",
      "Retail-ready packaging",
      "Branded bags & inserts",
      "Small and bulk print runs",
    ],
    faqs: [
      {
        q: "Can packaging match branding used on signage and gifts?",
        a: "Yes. Since production runs through the same team, packaging can be kept visually consistent with a brand's signage, stickers and gifting.",
      },
      {
        q: "Do you offer eco-friendly packaging materials?",
        a: "Recycled and biodegradable stock options are available. Specify sustainability requirements when requesting a quote.",
      },
      {
        q: "Can packaging be designed to protect products during shipping?",
        a: "Yes. Structural design accounts for handling and shipping conditions, not just the printed graphics.",
      },
      {
        q: "Do you offer packaging samples before a full production run?",
        a: "Sample or prototype runs can be arranged before committing to bulk production. Mention this when requesting a quote.",
      },
      {
        q: "Does packaging need to handle different shipping conditions across the region?",
        a: "Retail packaging for a Dubai flagship, an Abu Dhabi boutique, or a Doha concept store all needs to survive the same handling and shipping conditions across the region, so structural design accounts for that before the print run starts.",
      },
    ],
  },
  {
    slug: "gift-items",
    name: "Gift Items",
    code: "GFT-05",
    icon: Gift,
    short: "UV-printed and personalised branding on corporate gift items.",
    description:
      "Direct UV printing onto gift items, including pens, bottles, tech accessories, awards and hampers, plus curated corporate gifting for client relationships, staff recognition and event giveaways, across the UAE and Qatar.",
    definition:
      "Gift items covers UV-printed and personalised branding on corporate gifts such as pens, bottles and tech accessories, plus curated gifting for client relationships, staff recognition and event giveaways.",
    quickFacts: [
      { label: "Typical output", value: "UV-printed pens, bottles, tech accessories, awards, hampers" },
      { label: "Method", value: "Direct UV printing onto hard surfaces" },
      { label: "Peak periods", value: "UAE and Qatar National Day, Ramadan, year-end" },
      { label: "Service", value: "Sourcing, personalisation and bulk fulfilment" },
    ],
    regionalNote:
      "Corporate gifting spikes around UAE National Day and Qatar National Day, plus year-end and Ramadan gifting across both markets, so UV printing and gift sourcing are planned with those peak periods in mind.",
    capabilities: [
      "UV printing on gift items",
      "Custom branding & personalisation",
      "Bulk corporate orders",
      "Gift sets & hampers",
    ],
    faqs: [
      {
        q: "What items can you UV print on for corporate gifts?",
        a: "UV printing works on most hard surfaces, including pens, bottles, tech accessories, acrylic and wood items, so branding can be applied directly rather than via a sticker.",
      },
      {
        q: "Do you help source the gift items, or only print on items we supply?",
        a: "Both. We can source and curate gift items to a brief, or print and personalise items a client already has.",
      },
      {
        q: "What's the difference between UV printing and screen printing for merchandise?",
        a: "UV printing suits smaller runs on hard items like pens, bottles and plaques. Screen printing suits bulk runs on fabric like T-shirts. We offer both and can advise which fits a given order.",
      },
      {
        q: "Is there a minimum order quantity for personalised gift items?",
        a: "Both small and bulk corporate gift orders are handled. Share the quantity when requesting a quote.",
      },
      {
        q: "Can gift items be branded with a different design per recipient?",
        a: "Yes. Personalised per-recipient branding, such as individual names, is possible for suitable item types.",
      },
      {
        q: "When does corporate gifting peak in the UAE and Qatar?",
        a: "Corporate gifting spikes around UAE National Day and Qatar National Day, plus year-end and Ramadan gifting across both markets. UV printing and gift sourcing are planned with those peak periods in mind, so ordering ahead of them is worth factoring into a gifting brief.",
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    code: "SOC-06",
    icon: Share2,
    short: "Content, campaigns, and the website and search behind them.",
    description:
      "Social media strategy, content production, and paid campaign management across the platforms UAE and Qatar audiences actually use, backed by the website and search engine work that turns followers into leads.",
    definition:
      "Social media covers content planning, production and paid campaign management across the platforms UAE and Qatar audiences use, backed by website and search engine work that turns followers into leads.",
    quickFacts: [
      { label: "Typical output", value: "Content calendars, paid campaigns, community management, reports" },
      { label: "Platforms", value: "Instagram, Facebook, TikTok, LinkedIn, Snapchat" },
      { label: "Paired with", value: "Website design and SEO support" },
      { label: "Reporting", value: "Regular performance reporting included" },
    ],
    regionalNote:
      "Retail and F&B brands in Dubai and Abu Dhabi live on Instagram and TikTok. Doha's market leans more heavily on WhatsApp and Snapchat alongside them. Content and paid strategy is built around where each city's audience actually spends time, not a one size template.",
    capabilities: [
      "Content planning & production",
      "Paid social campaigns",
      "Community management",
      "Performance reporting",
      "Website design & SEO support",
    ],
    faqs: [
      {
        q: "Which social platforms do you manage?",
        a: "We plan and manage content and paid campaigns across Instagram, Facebook, TikTok, LinkedIn and Snapchat, choosing the mix based on where a brand's UAE or Qatar audience is most active.",
      },
      {
        q: "Do you also build websites and handle SEO, or only social media?",
        a: "Both. Website development and search engine optimisation run alongside social media, so the platform, the site and search visibility are planned as one system rather than separate projects.",
      },
      {
        q: "Can social media work alongside signage and print campaigns?",
        a: "Yes. Because production and digital sit under one roof, a single campaign, like a store opening, exhibition, or product launch, can be planned across signage, print and social from the same brief.",
      },
      {
        q: "How is success measured for a social media campaign?",
        a: "Performance reporting covers reach, engagement and conversion metrics relevant to the campaign's goal, agreed at the start of the brief.",
      },
      {
        q: "Do you write captions in both English and Arabic?",
        a: "Content can be produced in English, Arabic, or both, depending on the audience the campaign is targeting.",
      },
      {
        q: "Do social platform priorities differ between the UAE and Qatar?",
        a: "Yes. Retail and F&B brands in Dubai and Abu Dhabi live on Instagram and TikTok. Doha's market leans more heavily on WhatsApp and Snapchat alongside them. Content and paid strategy is built around where each city's audience actually spends time, not a one size template.",
      },
    ],
  },
];

export function getSection(slug: string) {
  return sections.find((s) => s.slug === slug);
}

export const navLinks = [
  { href: "/about", label: "About Us" },
  ...sections.map((s) => ({ href: `/${s.slug}`, label: s.name })),
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
    q: "What services does Gifts Gulf Advertising offer?",
    a: "Gifts Gulf Advertising covers printing (large-format, stickers, screen printing, flags), signages, events and exhibitions, packaging, gift items, and social media, plus the website and SEO work behind it, delivered across the UAE and Qatar.",
  },
  {
    q: "Does Gifts Gulf Advertising serve clients in both the UAE and Qatar?",
    a: "Yes. Gifts Gulf Advertising works with businesses across the UAE (Dubai, Abu Dhabi, Sharjah) and Qatar (Doha).",
  },
  {
    q: "Can one project include both physical branding and digital marketing?",
    a: "Yes. That's the core of how Gifts Gulf Advertising works. A single brief can cover a shop's signage and printing alongside its website and social media, instead of splitting the work across separate vendors.",
  },
  {
    q: "What's the difference between Gifts Gulf Advertising and a single-service printer, signage company or digital agency?",
    a: "Most printers, signage companies and digital agencies in the UAE and Qatar specialise in one thing. Gifts Gulf Advertising runs all of it, printing, signage, events, packaging, gifting and social media, all under one brief, one point of contact, and one consistent brand across every touchpoint.",
  },
  {
    q: "Do I need to hire separate companies for signage, printing and marketing?",
    a: "No. That's the problem Gifts Gulf Advertising is built to remove. Instead of briefing a signage company, a separate printer, and a digital agency, all of it runs through one team.",
  },
  {
    q: "Does Gifts Gulf Advertising handle both small orders and large corporate contracts?",
    a: "Yes. From single sign installs and small merchandise runs to multi-service corporate and exhibition contracts.",
  },
  {
    q: "How do I get a quote from Gifts Gulf Advertising?",
    a: "Use the contact form, or email or call directly with the service, quantity and timeline, and the team will follow up with next steps.",
  },
];
