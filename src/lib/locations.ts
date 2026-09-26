import type { Faq } from "@/lib/site-data";

export type Location = {
  slug: string;
  city: string;
  country: string;
  /** One-line hero summary. */
  blurb: string;
  /** "Serving {city}" definition paragraph — grounded, non-duplicated per page. */
  definition: string;
  /** Real districts, industrial areas or free zones a job in this city actually gets planned around. */
  keyAreas: string[];
  /** Generic, honest approvals note — avoids stating a specific department name we can't verify per city. */
  approvalNote: string;
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    blurb: "Printing, signage, exhibitions, packaging, gifting and social media for Dubai brands, from Deira to Dubai Marina.",
    definition:
      "Dubai is our home market: production, fabrication and the team that handles a Dubai brief day to day are all based in the UAE, so turnaround for signage installs, print runs and exhibition builds across the city doesn't depend on shipping work in from elsewhere.",
    keyAreas: ["Deira", "Al Quoz", "Business Bay", "Sheikh Zayed Road", "Jumeirah Lake Towers (JLT)", "Dubai Marina", "Downtown Dubai"],
    approvalNote:
      "Signage, fit-out and outdoor branding in Dubai typically need sign-off from the relevant municipal or free-zone authority, and malls and business towers usually add their own approval process on top. That sequencing is factored into the project timeline from the brief stage, not discovered midway through.",
    faqs: [
      {
        q: "Do you have a production team based in Dubai, or is work shipped in?",
        a: "Production and fabrication are based in the UAE, so Dubai signage, printing and exhibition work is handled locally rather than shipped in from another country.",
      },
      {
        q: "Can you handle a signage install in a specific Dubai free zone or mall?",
        a: "Yes. Free zones (like DIFC or JLT) and mall landlords each have their own sign-off process on top of the standard municipal approval, and that's accounted for at the brief stage for whichever location applies.",
      },
      {
        q: "What's a realistic turnaround for a Dubai exhibition stand or store fit-out?",
        a: "Timeline depends on scope, size and approval requirements. Share the venue, target date and brief when requesting a quote and we'll confirm what's achievable for that specific job.",
      },
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    blurb: "Signage, printing, corporate gifting and exhibition support for Abu Dhabi businesses, from Mussafah to Yas Island.",
    definition:
      "Abu Dhabi work runs through the same UAE production team as Dubai, with signage approvals, fit-out and exhibition builds planned around the capital's own municipal process rather than treated as an afterthought to a Dubai-first brief.",
    keyAreas: ["Mussafah", "Al Reem Island", "Khalifa City", "Corniche", "Yas Island", "Al Raha"],
    approvalNote:
      "Abu Dhabi's municipal signage and fit-out approval route differs from Dubai's, and government or semi-government tenants often add their own building-management sign-off. Fabrication timelines account for whichever route the site and use case fall under.",
    faqs: [
      {
        q: "Is Abu Dhabi signage approval the same process as Dubai's?",
        a: "No. Abu Dhabi runs its own municipal approval route, separate from Dubai's, and building or landlord sign-off (common for towers and government-adjacent sites) sits on top of that.",
      },
      {
        q: "Do you serve corporate clients on Abu Dhabi's islands, like Reem Island or Yas Island?",
        a: "Yes. Signage, fit-out and corporate gifting work is delivered across Abu Dhabi, including Reem Island, Yas Island and the mainland business districts.",
      },
      {
        q: "Can an exhibition stand for an Abu Dhabi venue like ADNEC be built and installed by your team?",
        a: "Yes. Stand design, fabrication and on-site installation for Abu Dhabi's exhibition and conference venues, including ADNEC, are handled directly.",
      },
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    country: "United Arab Emirates",
    blurb: "Printing, packaging and signage production for Sharjah's industrial and retail businesses.",
    definition:
      "Sharjah's Industrial Area is home to a large share of the UAE's manufacturing and wholesale businesses, so packaging, bulk printing and warehouse or facility signage briefs from Sharjah get planned around industrial-zone access and delivery, not just retail storefront rules.",
    keyAreas: ["Industrial Area", "Al Nahda", "Al Majaz", "Sharjah Media City (Shams)", "Muweilah"],
    approvalNote:
      "Sharjah Municipality governs signage and outdoor branding approvals for the emirate, with a separate process for industrial-zone facilities versus retail storefronts in areas like Al Majaz or Al Nahda.",
    faqs: [
      {
        q: "Do you produce packaging and bulk print runs for businesses in Sharjah's Industrial Area?",
        a: "Yes. Sharjah's Industrial Area is a common base for the wholesale, manufacturing and F&B businesses we produce packaging and bulk print runs for, with delivery planned around industrial-zone access.",
      },
      {
        q: "Can you install storefront signage for a retail unit in Sharjah?",
        a: "Yes. Storefront and retail signage is designed, fabricated and installed across Sharjah, including Al Nahda and Al Majaz, following Sharjah Municipality's approval process.",
      },
    ],
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    blurb: "Printing, signage, exhibitions and social media for Doha businesses, from West Bay to The Pearl.",
    definition:
      "Doha work is delivered as a genuine local service, not a cross-border add-on: signage, exhibition stands, print and social media are briefed, produced and installed for Doha clients with Qatar's own approval routes and exhibition calendar (DECC, QNCC) in mind.",
    keyAreas: ["West Bay", "Al Sadd", "The Pearl", "Msheireb", "Doha Industrial Area"],
    approvalNote:
      "Signage and outdoor branding approvals in Doha run through Qatar's municipal authorities, and malls and mixed-use developments such as The Pearl typically layer their own landlord sign-off on top.",
    faqs: [
      {
        q: "Do you deliver signage and printing projects in Doha, or only the UAE?",
        a: "Doha and wider Qatar are served directly, alongside the UAE. Signage, printing, exhibitions, packaging, gifting and social media are all available for Doha-based clients.",
      },
      {
        q: "Can you build an exhibition stand for DECC or QNCC in Doha?",
        a: "Yes. Stand design, fabrication and on-site installation are handled for Doha's exhibition and conference venues, including DECC and QNCC.",
      },
      {
        q: "Do you handle signage approvals for a mall unit in Doha, such as at The Pearl?",
        a: "Mall and mixed-use developments in Doha add their own landlord sign-off on top of Qatar's municipal approval process, and both are factored into the project timeline from the brief stage.",
      },
    ],
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    blurb: "Signage, printing, exhibition stands and corporate gifting for Riyadh businesses.",
    definition:
      "Riyadh is Saudi Arabia's largest business market, and briefs from the city cover the same range as our UAE and Qatar work: storefront and corporate signage, large-format printing, exhibition stands for Riyadh's conference calendar, and corporate gifting for Saudi National Day and other peak periods.",
    keyAreas: ["Olaya", "King Fahd Road", "Al Malaz", "Riyadh's second industrial city"],
    approvalNote:
      "Signage and outdoor branding in Riyadh go through the relevant municipal approval route, with malls and business towers typically adding a landlord sign-off process on top.",
    faqs: [
      {
        q: "Do you deliver signage and printing projects in Riyadh?",
        a: "Yes. Riyadh is served alongside our UAE and Qatar markets, covering signage, printing, exhibition stands, packaging, corporate gifting and social media.",
      },
      {
        q: "Can you produce corporate gifts for Saudi National Day campaigns in Riyadh?",
        a: "Yes. Corporate gifting is planned around regional peak periods, including Saudi National Day, for Riyadh-based clients.",
      },
    ],
  },
  {
    slug: "jeddah",
    city: "Jeddah",
    country: "Saudi Arabia",
    blurb: "Printing, signage and packaging support for Jeddah's retail and trade businesses.",
    definition:
      "Jeddah's retail corridors and trade links make signage, packaging and printing a constant need for the city's businesses, and that work is delivered under the same brief-to-installation process used across our other GCC markets. Quotes for Jeddah are priced in Saudi Riyals (SAR) at the Kingdom's standard 15% VAT rate, not simply converted from an AED quote, since Saudi VAT sits well above the UAE's 5% and needs to be budgeted for separately.",
    keyAreas: ["Al Hamra", "Tahlia Street", "King Abdulaziz Road", "Jeddah Industrial City", "Jeddah Islamic Port"],
    approvalNote:
      "Signage and outdoor branding approvals in Jeddah run through the city's municipal authority, with retail landlords along corridors like Tahlia Street adding their own sign-off.",
    faqs: [
      {
        q: "Do you produce retail signage for businesses on Jeddah's main retail streets?",
        a: "Yes. Storefront and retail signage is designed, fabricated and installed for Jeddah businesses, including along corridors such as Tahlia Street, following the city's municipal approval process.",
      },
      {
        q: "What currency and VAT rate applies to a Jeddah order?",
        a: "Jeddah quotes are issued in Saudi Riyals (SAR) at Saudi Arabia's standard 15% VAT rate, which has applied since July 2020 and is materially higher than the UAE's 5% rate, so a Jeddah budget shouldn't be planned as a straight AED-to-SAR conversion of a UAE quote.",
      },
      {
        q: "How does material or stock coming through Jeddah Islamic Port affect lead time?",
        a: "Jeddah Islamic Port is Saudi Arabia's busiest container port, and imported material or products cleared through it typically need a valid SABER certificate; clearance with complete documentation generally runs a few business days, longer if a shipment is selected for physical inspection. That's factored into the project timeline at brief stage for any Jeddah order that relies on imported stock rather than locally held material.",
      },
      {
        q: "Can corporate gifting and signage orders for Jeddah be combined with a Riyadh order?",
        a: "Yes. Businesses with locations in both Jeddah and Riyadh commonly brief both cities as one order, with delivery split by site, so branding and invoicing stay consistent across the Kingdom rather than run as two separate jobs.",
      },
    ],
  },
  {
    slug: "kuwait-city",
    city: "Kuwait City",
    country: "Kuwait",
    blurb: "Signage, printing and exhibition support for businesses across Kuwait City.",
    definition:
      "Kuwait City briefs run through the same production process as our other GCC markets: signage design and installation, large-format and offset printing, and exhibition stand builds for Kuwait's trade show calendar.",
    keyAreas: ["Sharq", "Salmiya", "Shuwaikh Industrial Area"],
    approvalNote:
      "Signage and outdoor branding approvals in Kuwait City run through the relevant municipal authority, with malls and commercial towers typically adding their own landlord sign-off.",
    faqs: [
      {
        q: "Do you deliver signage and printing projects in Kuwait City?",
        a: "Yes. Kuwait City is served alongside our other GCC markets, covering signage, printing, exhibition stands, packaging, gifting and social media.",
      },
    ],
  },
  {
    slug: "manama",
    city: "Manama",
    country: "Bahrain",
    blurb: "Printing, signage and corporate gifting for businesses in Manama.",
    definition:
      "Manama's business districts and retail areas are served with the same signage, printing, packaging and gifting capabilities delivered across the rest of the GCC, briefed and produced with Bahrain's own approval process in mind.",
    keyAreas: ["Seef District", "Adliya", "Manama Souq", "Sitra Industrial Area"],
    approvalNote:
      "Signage and outdoor branding approvals in Manama run through the relevant municipal authority, with malls such as those in the Seef District adding their own landlord sign-off.",
    faqs: [
      {
        q: "Do you deliver signage and printing projects in Manama?",
        a: "Yes. Manama is served alongside our other GCC markets, covering signage, printing, exhibition stands, packaging, gifting and social media.",
      },
    ],
  },
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    blurb: "Signage, printing and exhibition support for businesses across Muscat.",
    definition:
      "Muscat work covers the same range delivered elsewhere in the GCC: signage design and installation, printing, exhibition stand builds and corporate gifting, produced with Oman's own municipal approval process in mind.",
    keyAreas: ["Al Khuwair", "Ghala Industrial Area", "Qurum", "Muttrah"],
    approvalNote:
      "Signage and outdoor branding approvals in Muscat run through the relevant municipal authority, with malls and commercial developments typically adding their own landlord sign-off.",
    faqs: [
      {
        q: "Do you deliver signage and printing projects in Muscat?",
        a: "Yes. Muscat is served alongside our other GCC markets, covering signage, printing, exhibition stands, packaging, gifting and social media.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
