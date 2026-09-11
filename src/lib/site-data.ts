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
    short: "UV and DTF printing, large-format, stickers, magazines and books, banners.",
    description:
      "UV printing for rigid items and promotional products, DTF printing for full-colour apparel, plus large-format and digital printing, custom stickers and decals, magazine and book printing, and flags and banners. All of it is produced in-house for retail, publishing, events and promotions across the UAE and Qatar.",
    definition:
      "Printing covers the UV, DTF, large-format and digital print work a brand or publisher needs. UV printing cures ink directly onto rigid items and promotional products; DTF (direct-to-film) printing transfers full-colour designs onto apparel without the set-up cost of screen printing. Alongside those, banners, stickers, decals, magazines, books and vehicle graphics are all produced in-house rather than outsourced.",
    quickFacts: [
      { label: "Typical output", value: "UV-printed items, DTF apparel, banners, stickers, magazines, books" },
      { label: "Methods", value: "UV printing, DTF transfer, large-format digital, screen printing" },
      { label: "Built for", value: "Outdoor UAE and Qatar heat and UV exposure" },
      { label: "Order sizes", value: "Single items to bulk merchandise and print runs" },
    ],
    regionalNote:
      "Gulf summers push surface temperatures well past 45°C on outdoor prints, stickers and banners from Sharjah's industrial zones to Doha's corniche, so materials and finishes are chosen to hold up to that heat and UV load, not just to look right on day one.",
    capabilities: [
      "UV printing on rigid & promotional items",
      "DTF printing for full-colour apparel",
      "Large-format & digital printing",
      "Custom stickers & decals (vinyl, PVC, foil)",
      "Magazine & book printing",
      "Flags, banners & feather flags",
      "Vehicle branding decals",
    ],
    faqs: [
      {
        q: "Do you offer UV printing?",
        a: "Yes. UV printing cures ink directly onto rigid items and promotional products with a UV light as it prints, giving a durable, scratch-resistant finish without a separate curing step.",
      },
      {
        q: "What is DTF printing and do you offer it?",
        a: "Yes. DTF (direct-to-film) printing transfers a full-colour design onto a special film, then heat-presses it onto apparel. It handles detailed, multi-colour designs on small to medium runs without the set-up cost of screen printing.",
      },
      {
        q: "Do you print magazines and books?",
        a: "Yes. Magazine and book printing runs in-house alongside UV, DTF and large-format print work, from single proof copies to full circulation and print runs.",
      },
      {
        q: "Do you handle both large-format printing and small merchandise runs?",
        a: "Yes. From large-format banners and stickers to DTF-printed apparel and event merchandise, everything is produced in-house rather than farmed out to different shops.",
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
        q: "Can printing be matched to an existing brand's colours?",
        a: "Yes. Colour matching against existing brand guidelines or Pantone references is standard practice for repeat print orders.",
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
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    code: "PKG-04",
    icon: Package,
    short: "Custom boxes, cups, hardboard boxes and carry bags, designed and printed in-house.",
    description:
      "Custom packaging: takeaway and retail boxes, hot and cold cups, hardboard boxes and kraft carry bags, designed and printed in-house with a brand's logo and colours, and specified to hold up to Gulf handling, shipping and delivery conditions.",
    definition:
      "Packaging covers the boxes, cups, hardboard boxes and carry bags a brand hands a customer at the point of sale or delivery. Gifts Gulf Advertising designs and prints all of it in-house, so packaging stays as consistent as a brand's signage and other print work.",
    quickFacts: [
      { label: "Typical output", value: "Takeaway & retail boxes, hot/cold cups, hardboard boxes, carry bags" },
      { label: "Materials", value: "Food-grade kraft, corrugated hardboard, grease-resistant lining" },
      { label: "Suited to", value: "Retail, F&B and delivery-driven businesses" },
      { label: "Order sizes", value: "Sample runs to bulk production" },
    ],
    regionalNote:
      "Delivery apps and online ordering drive a large share of retail and food orders across Dubai, Abu Dhabi, Sharjah and Doha, so packaging spends longer in transit and handling than it would for a straight over-the-counter sale. Boxes and carry bags are specified with sturdy handles, and food-facing items with grease-resistant lining, with that in mind, not just printed to look right on the shelf.",
    capabilities: [
      "Custom-printed takeaway & retail boxes",
      "Branded hot & cold cups",
      "Hardboard boxes for bulk orders",
      "Kraft & paper carry bags",
      "Grease-resistant, food-safe stock",
      "Sample runs before bulk production",
    ],
    faqs: [
      {
        q: "Do you make custom boxes, cups and carry bags for businesses?",
        a: "Yes. Takeaway and retail boxes, hot and cold cups, hardboard boxes and carry bags are all designed and printed in-house for retail, F&B and delivery-driven businesses across the UAE and Qatar.",
      },
      {
        q: "Can you print a brand's logo on packaging boxes, cups and bags?",
        a: "Yes. Boxes, cups, hardboard boxes and carry bags can all carry a brand's logo, colours and messaging, kept consistent with its signage and other print work.",
      },
      {
        q: "Is your food packaging food-safe and grease-resistant?",
        a: "Yes. Food-facing items use food-grade kraft and corrugated hardboard with grease-resistant lining, specified for items that spend time in delivery transit as well as counter service.",
      },
      {
        q: "What's the minimum order for branded boxes or carry bags?",
        a: "Both sample runs and bulk production orders are handled. Share the item, quantity and timeline when requesting a quote.",
      },
      {
        q: "Do you supply hardboard boxes for bulk orders?",
        a: "Yes. Hardboard boxes are available for bulk orders and larger deliveries, alongside standard takeaway boxes and carry bags.",
      },
      {
        q: "Can packaging match a brand's existing colours?",
        a: "Yes. Boxes, cups, hardboard boxes and carry bags are colour-matched against existing branding or Pantone references, produced by the same team that handles signage and print.",
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
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    code: "SOC-06",
    icon: Share2,
    short: "Content, campaigns, and the website and search behind them.",
    description:
      "Social media strategy, in-house content production, paid campaign management, community management and influencer coordination across the platforms UAE and Qatar audiences actually use, backed by social commerce setup and the website and search engine work that turns followers into leads.",
    definition:
      "Social media covers everything from content strategy and in-house photography or video production to paid advertising, community management and influencer coordination, plus social commerce integration and the website and SEO work that turns an engaged following into actual enquiries.",
    quickFacts: [
      { label: "Typical output", value: "Content calendars, Reels & UGC, paid campaigns, monthly reports" },
      { label: "Platforms", value: "Instagram, TikTok, Facebook, LinkedIn, Snapchat" },
      { label: "Paired with", value: "Website design, SEO and social commerce setup" },
      { label: "Reporting", value: "Monthly performance reporting against agreed KPIs" },
    ],
    regionalNote:
      "Retail and F&B brands in Dubai and Abu Dhabi live on Instagram and TikTok. Doha's market leans more heavily on WhatsApp and Snapchat alongside them. Content and paid strategy is built around where each city's audience actually spends time, not a one size template.",
    capabilities: [
      "Social media strategy & content pillars",
      "In-house photography, video & Reels production",
      "Graphic design & bilingual copywriting",
      "Paid social advertising (Meta & TikTok Ads)",
      "Community management & review monitoring",
      "Influencer sourcing & UGC coordination",
      "Social commerce setup (Instagram & TikTok Shop)",
      "Monthly analytics & performance reporting",
      "Ramadan & National Day campaign planning",
      "Website design & SEO support",
    ],
    faqs: [
      {
        q: "Which social platforms do you manage?",
        a: "We plan and manage content and paid campaigns across Instagram, Facebook, TikTok, LinkedIn and Snapchat, choosing the mix based on where a brand's UAE or Qatar audience is most active.",
      },
      {
        q: "Do you produce content in-house or only manage existing material?",
        a: "Content is produced in-house, photography, video and Reels, graphic design and copywriting, rather than relying only on a client's existing assets, so posting frequency and quality don't depend on what's supplied from elsewhere.",
      },
      {
        q: "Do you run paid social advertising, or only organic content?",
        a: "Both. Paid campaigns on Meta and TikTok Ads run alongside organic content for brands that need a specific result, like store visits during a promotion or leads for a launch, on top of ongoing content and community management.",
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
        a: "Monthly reporting covers reach, engagement rate and conversion metrics relevant to the campaign's goal, such as enquiries or store visits, agreed at the start of the brief rather than judged on follower count alone.",
      },
      {
        q: "Do you write captions in both English and Arabic?",
        a: "Content can be produced in English, Arabic, or both, depending on the audience the campaign is targeting.",
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
    a: "Gifts Gulf Advertising covers printing (UV, DTF, large-format, stickers, magazines, books, flags), signages, events and exhibitions, packaging (boxes, cups, hardboard boxes, carry bags), gift items, and social media, plus the website and SEO work behind it, delivered across the UAE and Qatar.",
  },
  {
    q: "What types of printing does Gifts Gulf Advertising offer?",
    a: "UV printing, which cures ink directly onto rigid surfaces like acrylic, PVC, wood, metal and glass for a scratch-resistant finish; DTF (direct-to-film) printing for full-colour, detailed designs on apparel without screen-printing set-up costs; screen printing for bulk uniform and T-shirt runs in solid spot colours; large-format digital printing for banners, mesh banners, roll-up standees and backlit media; and offset and digital printing for magazines, books and stationery. Sticker, label and flag printing run alongside all of it in-house.",
  },
  {
    q: "What's the difference between UV printing and DTF printing?",
    a: "UV printing cures ink directly onto a rigid item, such as a pen, plaque, acrylic panel or phone case, as it prints, giving a durable, scratch-resistant finish suited to hard surfaces. DTF printing transfers a full-colour design onto film first, then heat-presses it onto fabric, making it the better fit for apparel, uniforms and soft-goods branding. Gifts Gulf Advertising runs both, and recommends whichever suits the item and order size.",
  },
  {
    q: "What types of signage do you produce?",
    a: "Illuminated signage (LED-lit acrylic letters, backlit lightboxes and neon-style LED strip signs), non-illuminated flat-cut acrylic and ACP (aluminium composite panel) signs, 3D channel letters for storefront branding, monument and pylon signs for building entrances and compounds, indoor wayfinding and directional signage, engraved plaques, and window, glass and vehicle graphics. Every type is designed, fabricated and installed in-house.",
  },
  {
    q: "What kinds of large-format stickers and vinyl graphics are available?",
    a: "Printed vinyl stickers and decals in full colour, laminated for outdoor durability; die-cut stickers custom-shaped to a logo or design; static cling window stickers that use no adhesive; one-way vision perforated window film, visible as a graphic from outside while staying see-through from inside; floor graphics with anti-slip laminate for retail and mall use; large-format wall decals and murals; and vehicle wrap vinyl for fleet and car branding.",
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
    q: "Does Gifts Gulf Advertising handle both small orders and large corporate contracts?",
    a: "Yes. From single sign installs and small merchandise runs to multi-service corporate and exhibition contracts.",
  },
  {
    q: "How do I get a quote from Gifts Gulf Advertising?",
    a: "Use the contact form, or email or call directly with the service, quantity and timeline, and the team will follow up with next steps.",
  },
];
