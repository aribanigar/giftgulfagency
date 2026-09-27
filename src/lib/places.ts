import type { Faq } from "@/lib/site-data";

/**
 * Area and venue pages under /locations/{city}/{place}. Copy is written per
 * place from publicly known facts (what the area is, its landmarks, the jobs
 * it generates). Wording is "we deliver and install in", never "located in".
 */
export type Place = {
  slug: string;
  citySlug: string;
  name: string;
  kind: "area" | "venue";
  summary: string;
  profile: string[];
  /** Topic slugs most relevant here, linked to city pages where they exist. */
  topics: string[];
  planning: string[];
  faqs: Faq[];
};

const exhibitionPlanning = (venue: string) => [
  `Download the exhibitor manual for your show at ${venue} early: it sets deadlines for stand drawings, rigging, electrics and graphics.`,
  "Space-only stands need drawings approved by the organiser, a registered contractor, insurance and a method statement.",
  "Shell scheme booths only need graphics to the visible panel sizes in the manual, plus any counters and stands you add.",
  "Build-up and breakdown windows are short and fixed, so everything is prefabricated and test-assembled before it reaches the venue.",
];

export const places: Place[] = [
  // Dubai areas
  {
    slug: "al-quoz",
    citySlug: "dubai",
    name: "Al Quoz",
    kind: "area",
    summary: "Dubai's industrial and creative district: warehouses, showrooms, workshops and the Alserkal Avenue galleries.",
    profile: [
      "Al Quoz sits between Sheikh Zayed Road and Al Khail Road and is split into industrial and residential sectors. It is where much of Dubai's making happens: joinery and metal workshops, print and fabrication units, car showrooms, furniture stores and warehouses.",
      "It is also a creative hub. Alserkal Avenue and the surrounding warehouses house galleries, studios, cafes and concept stores, which bring a steady demand for gallery signage, event backdrops and warehouse-scale wall graphics.",
    ],
    topics: ["3d-letter-signage", "light-box-signs", "wall-stickers-decals", "backdrop-stands", "product-display-stands"],
    planning: [
      "Showroom facades on the main roads are wide and set back, so signs need large letter heights and are often lit for evening traffic.",
      "Warehouse units have high walls and steel cladding, which suit large panel signs and printed graphics fixed to the cladding.",
      "Landlords of warehouse compounds usually approve exterior signage before municipal approval is applied for.",
    ],
    faqs: [
      { q: "Do you install signage in Al Quoz?", a: "Yes. We deliver and install shopfront, showroom and warehouse signage across Al Quoz, including the industrial sectors and Alserkal Avenue." },
      { q: "What kind of sign suits an Al Quoz showroom?", a: "Large lit 3D letters or a light box on the facade, sized to be read from the road, with window graphics for the showroom glass." },
    ],
  },
  {
    slug: "business-bay",
    citySlug: "dubai",
    name: "Business Bay",
    kind: "area",
    summary: "Office and residential towers along the Dubai Water Canal, next to Downtown Dubai.",
    profile: [
      "Business Bay is a dense district of office, hotel and residential towers built around the Dubai Water Canal and the Dubai Creek extension, directly south of Downtown Dubai. Thousands of companies lease offices here, from small business centres to full floors.",
      "Most branding work in Business Bay happens inside towers: reception walls, acrylic and stainless steel logos, frosted glass for meeting rooms, wayfinding and office wall graphics. Ground-floor retail and restaurants add shopfront signage and window graphics.",
    ],
    topics: ["3d-letter-signage", "acrylic-signage", "frosted-glass-stickers", "acrylic-name-plates", "wall-stickers-decals"],
    planning: [
      "Tower management usually approves any office signage and film that can be seen from lobbies or corridors, and sets installation hours.",
      "Contractors typically need building access passes, a method statement and insurance before work starts.",
      "Loading bays and service lifts are booked in advance, so large panels are sized to fit the lift.",
    ],
    faqs: [
      { q: "Can you install office signage in a Business Bay tower?", a: "Yes. We deliver and install reception signs, frosted film and wall graphics in Business Bay towers, working to each building's access rules and approved hours." },
      { q: "Do I need building approval for frosted glass film?", a: "Film on internal partitions usually needs only your landlord's consent. Anything visible from the corridor or facade often needs building management approval." },
    ],
  },
  {
    slug: "jlt",
    citySlug: "dubai",
    name: "Jumeirah Lake Towers (JLT)",
    kind: "area",
    summary: "The DMCC free zone's cluster of towers around artificial lakes, home to thousands of companies.",
    profile: [
      "Jumeirah Lake Towers is a free zone district run by DMCC, laid out as lettered clusters of towers around artificial lakes, across Sheikh Zayed Road from Dubai Marina. It hosts a very large number of small and mid-size companies, many in the commodities, trading and services sectors.",
      "Typical JLT work is office branding for new setups and relocations: reception logos, glass manifestation, directory boards and meeting room film, plus signage for the cafes, clinics and shops at the base of each cluster.",
    ],
    topics: ["acrylic-signage", "3d-letter-signage", "frosted-glass-stickers", "acrylic-name-plates", "window-graphics"],
    planning: [
      "Free zone and tower rules both apply to visible signage, so design approval comes before fabrication.",
      "Podium shops face the lake walkways, where signs need to read to pedestrians rather than traffic.",
      "Office moves often run to tight dates, so signage is planned alongside the fit-out handover.",
    ],
    faqs: [
      { q: "Do you work on JLT office setups?", a: "Yes. We deliver and install reception signage, glass film and office graphics for companies setting up or moving within JLT." },
    ],
  },
  {
    slug: "difc",
    citySlug: "dubai",
    name: "DIFC",
    kind: "area",
    summary: "Dubai International Financial Centre: banks, law firms, galleries and restaurants around Gate Village.",
    profile: [
      "DIFC is Dubai's financial free zone, next to Sheikh Zayed Road and Downtown. Banks, asset managers, law firms and consultancies occupy its towers, while Gate Village and the podium levels hold galleries, fine-dining restaurants and boutiques.",
      "Branding here leans premium and restrained: brushed or mirror stainless steel letters, back-lit halo logos, glass manifestation and discreet directional signs, all within the district's design standards.",
    ],
    topics: ["stainless-steel-letters", "3d-letter-signage", "acrylic-name-plates", "frosted-glass-stickers", "neon-signs"],
    planning: [
      "The free zone and building owners review signage designs and materials; restrained finishes get approved faster.",
      "Restaurant signage and neon need approval for size, brightness and position on the facade.",
      "Installation is usually scheduled outside business hours in occupied buildings.",
    ],
    faqs: [
      { q: "What sign materials suit a DIFC office?", a: "Stainless steel, brass or halo-lit letters and frosted or etched glass film suit the district's premium, understated look." },
    ],
  },
  {
    slug: "deira",
    citySlug: "dubai",
    name: "Deira",
    kind: "area",
    summary: "Dubai's historic trading centre: souks, street shops, hotels and wholesale markets.",
    profile: [
      "Deira, on the north side of Dubai Creek, is the city's older commercial heart. The Gold Souk, the Spice Souk, Al Rigga, Port Saeed and Naif are packed with street shops, wholesalers, hotels and restaurants, and the streets carry some of the densest shop signage in the city.",
      "Work in Deira is mostly shopfront signage, light boxes, bilingual fascia boards, window graphics and printed promotion material, often for retailers and wholesalers who refresh their fronts regularly.",
    ],
    topics: ["light-box-signs", "3d-letter-signage", "window-graphics", "acrylic-signage", "brochure-printing"],
    planning: [
      "Street fascia sizes and positions are set by municipal rules, so the sign is designed to the permitted area.",
      "Narrow streets and parking limits mean installs are often planned for early mornings.",
      "Arabic and English lines are usually both required on the fascia.",
    ],
    faqs: [
      { q: "Do you replace old shop signs in Deira?", a: "Yes. We remove old fascia signs and install new light boxes or 3D letters, after the new sign is approved." },
    ],
  },
  {
    slug: "dubai-marina",
    citySlug: "dubai",
    name: "Dubai Marina",
    kind: "area",
    summary: "Waterfront towers, Marina Walk restaurants and retail, next to JBR.",
    profile: [
      "Dubai Marina is a waterfront district of residential and hotel towers around a man-made marina, with restaurants and shops along Marina Walk and The Walk at JBR next door.",
      "Restaurants, cafes, gyms, salons and clinics make up most of the demand: neon and illuminated signs, shopfront letters, window graphics, menus and table stands, plus event backdrops for hotel functions.",
    ],
    topics: ["neon-signs", "3d-letter-signage", "window-graphics", "backdrop-stands", "acrylic-display-stands"],
    planning: [
      "Waterfront signage faces salt air and strong sun, so marine-grade fixings and UV-stable faces are specified.",
      "Towers and promenade management approve signage and restrict installation hours.",
    ],
    faqs: [
      { q: "Can you supply neon signs for a Dubai Marina restaurant?", a: "Yes. LED neon signs for indoor walls or approved facade positions, built to be safe in humid waterfront conditions." },
    ],
  },
  {
    slug: "jebel-ali",
    citySlug: "dubai",
    name: "Jebel Ali and JAFZA",
    kind: "area",
    summary: "Port, free zone and logistics hub: warehouses, factories and distribution centres.",
    profile: [
      "Jebel Ali is home to one of the region's largest ports and the Jebel Ali Free Zone (JAFZA), with thousands of companies running warehouses, factories and regional distribution centres.",
      "Branding here is practical and large: building signs visible from access roads, warehouse wall graphics, safety and wayfinding signs, fleet and vehicle branding, and packaging for goods moving through the port.",
    ],
    topics: ["3d-letter-signage", "light-box-signs", "custom-printed-boxes", "floor-graphics", "corporate-uniforms"],
    planning: [
      "Free zone approval is needed for exterior building signs.",
      "Warehouse floors and racks need durable, anti-slip floor graphics and safety signs.",
      "Large sites mean installs are planned with the site's HSE team and permit-to-work rules.",
    ],
    faqs: [
      { q: "Do you deliver packaging and signage to JAFZA?", a: "Yes. We deliver packaging and install signage for warehouses and offices across Jebel Ali and JAFZA." },
    ],
  },
  // Abu Dhabi areas
  {
    slug: "musaffah",
    citySlug: "abu-dhabi",
    name: "Musaffah",
    kind: "area",
    summary: "Abu Dhabi's main industrial area: workshops, warehouses, auto services and fabrication.",
    profile: [
      "Musaffah, on the mainland south of Abu Dhabi island, is the capital's largest industrial area. Its numbered sectors hold workshops, warehouses, auto garages, building material suppliers and fabrication yards.",
      "Businesses in Musaffah need hard-wearing signage: large panel and light box signs on workshop fronts, warehouse graphics, safety signs, vehicle branding, uniforms and printed packaging.",
    ],
    topics: ["light-box-signs", "3d-letter-signage", "corporate-uniforms", "custom-printed-boxes", "floor-graphics"],
    planning: [
      "Workshop fronts are exposed to dust and heat, so signs are built with sealed lighting and durable faces.",
      "Exterior signs need municipal approval before installation.",
    ],
    faqs: [
      { q: "Do you install workshop signs in Musaffah?", a: "Yes. We deliver and install workshop and warehouse signage across the Musaffah sectors." },
    ],
  },
  {
    slug: "al-maryah-island",
    citySlug: "abu-dhabi",
    name: "Al Maryah Island",
    kind: "area",
    summary: "Home to ADGM, The Galleria and premium offices, hotels and hospitals.",
    profile: [
      "Al Maryah Island is Abu Dhabi's financial district and the base of Abu Dhabi Global Market (ADGM). It combines office towers, The Galleria Al Maryah Island mall, hotels and a major hospital.",
      "Demand is for premium office branding, luxury retail shopfronts inside The Galleria, conference and event branding in the island's hotels, and corporate gifts and printed material for financial firms.",
    ],
    topics: ["stainless-steel-letters", "3d-letter-signage", "retail-branding", "backdrop-stands", "brochure-printing"],
    planning: [
      "ADGM and building owners review visible signage; the mall has its own design manual for tenants.",
      "Retail installs inside The Galleria run outside trading hours.",
    ],
    faqs: [
      { q: "Can you work on a shop inside The Galleria Al Maryah Island?", a: "Yes. We deliver and install shopfront signage and retail graphics to the mall's design guidelines and approved hours." },
    ],
  },
  {
    slug: "al-reem-island",
    citySlug: "abu-dhabi",
    name: "Al Reem Island",
    kind: "area",
    summary: "Mixed residential and commercial towers, with Reem Mall and a growing office base.",
    profile: [
      "Al Reem Island, next to Al Maryah Island, is a large mixed-use development of residential and commercial towers, with Shams Abu Dhabi and Reem Mall among its landmarks.",
      "Clinics, schools, nurseries, restaurants and offices at tower podiums create steady demand for shopfront signs, window graphics, wayfinding and office branding.",
    ],
    topics: ["3d-letter-signage", "acrylic-signage", "window-graphics", "frosted-glass-stickers", "mall-kiosks"],
    planning: [
      "Developers set design rules for podium signage, alongside municipal approval.",
      "Mall kiosks and pop-ups in Reem Mall go through the mall's own approval process.",
    ],
    faqs: [
      { q: "Do you install signage on Al Reem Island?", a: "Yes. We deliver and install shopfront, office and wayfinding signage across Al Reem Island." },
    ],
  },
  // Sharjah areas
  {
    slug: "sharjah-industrial-area",
    citySlug: "sharjah",
    name: "Sharjah Industrial Areas",
    kind: "area",
    summary: "Numbered industrial areas with workshops, warehouses, printing and fabrication businesses.",
    profile: [
      "Sharjah's numbered industrial areas stretch along the Dubai border and the main roads to the interior. They hold a large share of the UAE's workshops, warehouses, car services and light manufacturing.",
      "Businesses here need practical, durable signage, printed packaging, uniforms and product labels, and many supply other companies across the UAE.",
    ],
    topics: ["light-box-signs", "product-labels", "custom-printed-boxes", "corporate-uniforms", "3d-letter-signage"],
    planning: [
      "Exterior signs need municipal approval in Sharjah, and content is reviewed against local standards.",
      "Heavy traffic on the industrial roads makes early-morning installs the norm.",
    ],
    faqs: [
      { q: "Do you deliver to the Sharjah industrial areas?", a: "Yes. We deliver printing and packaging and install signage across the Sharjah industrial areas." },
    ],
  },
  {
    slug: "al-majaz",
    citySlug: "sharjah",
    name: "Al Majaz",
    kind: "area",
    summary: "Waterfront district around Khalid Lagoon with restaurants, offices and family attractions.",
    profile: [
      "Al Majaz lines Khalid Lagoon in central Sharjah. Al Majaz Waterfront, parks, cafes, restaurants and residential and office towers make it one of the city's busiest leisure districts.",
      "Restaurants, cafes and family businesses here need shopfront signs, illuminated letters, menus, window graphics and event branding for waterfront activations.",
    ],
    topics: ["3d-letter-signage", "light-box-signs", "window-graphics", "roll-up-banners", "backdrop-stands"],
    planning: [
      "Sharjah applies conservative standards to imagery and wording on signage and advertising.",
      "Waterfront locations need corrosion-resistant fixings and weather-sealed lighting.",
    ],
    faqs: [
      { q: "Is signage in Sharjah reviewed differently?", a: "Sharjah reviews exterior signs and advertising content against its own standards, so imagery and wording are checked at design stage." },
    ],
  },
  // Doha areas
  {
    slug: "west-bay",
    citySlug: "doha",
    name: "West Bay",
    kind: "area",
    summary: "Doha's skyline district of towers, hotels, ministries, City Center Doha and DECC.",
    profile: [
      "West Bay is Doha's central business district along the northern Corniche. Office towers, ministries, embassies and five-star hotels sit alongside City Center Doha and the Doha Exhibition and Convention Center.",
      "Work here spans corporate office branding, exhibition stands at DECC, hotel conference branding and printed material for government and corporate events.",
    ],
    topics: ["exhibition-booth-design", "3d-letter-signage", "backdrop-stands", "roll-up-banners", "book-printing"],
    planning: [
      "Arabic is expected on commercial signage alongside English.",
      "Tower and hotel management set access rules and installation hours.",
      "Event branding at DECC follows the organiser's exhibitor manual.",
    ],
    faqs: [
      { q: "Do you build exhibition stands at DECC in West Bay?", a: "Yes. We deliver and install stands and event branding for shows at DECC, following the organiser's rules." },
    ],
  },
  {
    slug: "lusail",
    citySlug: "doha",
    name: "Lusail",
    kind: "area",
    summary: "Qatar's newest planned city: Lusail Marina, Place Vendome, Lusail Boulevard and new towers.",
    profile: [
      "Lusail, north of Doha, is a planned city built around Lusail Marina, Lusail Boulevard and major venues. Place Vendome mall, new office towers, hotels and residential districts keep adding tenants.",
      "New tenants need full branding packages: shopfront and mall signage, office reception signs, window graphics and launch events, all to the developer's design standards.",
    ],
    topics: ["retail-branding", "3d-letter-signage", "mall-kiosks", "neon-signs", "backdrop-stands"],
    planning: [
      "Lusail's developer and mall landlords apply design guidelines on top of municipal licensing.",
      "Arabic is expected on commercial signage alongside English.",
    ],
    faqs: [
      { q: "Can you brand a new store in Place Vendome or Lusail?", a: "Yes. We deliver and install shopfront signage, displays and graphics for new stores in Lusail, to the landlord's guidelines." },
    ],
  },
  // Riyadh areas
  {
    slug: "olaya",
    citySlug: "riyadh",
    name: "Olaya",
    kind: "area",
    summary: "Riyadh's main commercial district around Kingdom Centre and Al Faisaliah Tower.",
    profile: [
      "Olaya is the commercial core of Riyadh, running along Olaya Street and King Fahd Road with Kingdom Centre and Al Faisaliah Tower as landmarks. It is dense with offices, hotels, malls, restaurants and flagship stores.",
      "Brands here invest in large illuminated shopfronts, mall store fit-outs, office branding and events in the district's hotels.",
    ],
    topics: ["3d-letter-signage", "light-box-signs", "retail-branding", "exhibition-booth-design", "roll-up-banners"],
    planning: [
      "Arabic is required on commercial signage, with English allowed alongside it.",
      "Commercial signs need municipal permits, and malls run their own design approvals.",
      "Dust and summer heat call for sealed lighting and durable faces on exterior signs.",
    ],
    faqs: [
      { q: "Does a shop sign in Olaya need Arabic?", a: "Yes. Commercial signage in Saudi Arabia must include Arabic; English can appear alongside it." },
    ],
  },
  {
    slug: "kafd",
    citySlug: "riyadh",
    name: "King Abdullah Financial District (KAFD)",
    kind: "area",
    summary: "Riyadh's planned financial district of towers, headquarters and retail.",
    profile: [
      "KAFD in north Riyadh is a master-planned financial district with office towers, corporate and regional headquarters, hotels and retail connected by walkways.",
      "Companies moving into KAFD need reception and wayfinding signage, glass manifestation, office graphics and corporate event branding, all within the district's design standards.",
    ],
    topics: ["stainless-steel-letters", "acrylic-signage", "frosted-glass-stickers", "backdrop-stands", "brochure-printing"],
    planning: [
      "The district's management reviews visible signage and sets contractor access rules.",
      "Arabic is required on commercial signage, with English alongside it.",
    ],
    faqs: [
      { q: "Can you handle office signage for a KAFD move?", a: "Yes. We deliver and install reception signs, glass film and office graphics for KAFD offices, working to the district's rules." },
    ],
  },
  // Venues
  {
    slug: "dubai-world-trade-centre",
    citySlug: "dubai",
    name: "Dubai World Trade Centre (DWTC)",
    kind: "venue",
    summary: "Dubai's long-established exhibition and conference halls on Sheikh Zayed Road.",
    profile: [
      "Dubai World Trade Centre hosts a packed calendar of trade shows, conferences and consumer exhibitions in its halls and arena, most of them between September and May.",
      "For exhibitors, that means shell scheme graphics, custom stands, pop-up walls, roll-ups, counters, printed brochures and giveaways, all delivered to the venue's tight build-up schedule.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "pop-up-stands", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("DWTC"),
    faqs: [
      { q: "Do you build stands at Dubai World Trade Centre?", a: "Yes. We design, build and install exhibition stands and shell scheme graphics for shows at DWTC, following each organiser's manual." },
    ],
  },
  {
    slug: "dubai-exhibition-centre",
    citySlug: "dubai",
    name: "Dubai Exhibition Centre, Expo City Dubai",
    kind: "venue",
    summary: "Large modern halls on the former Expo 2020 site in the south of Dubai.",
    profile: [
      "Dubai Exhibition Centre at Expo City Dubai offers large, modern halls on the former Expo 2020 site, and is taking on a growing share of the city's biggest trade shows.",
      "Its distance from central Dubai makes logistics planning important: delivery slots, crew transport and on-site storage are arranged in advance.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "backdrop-stands", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("Dubai Exhibition Centre"),
    faqs: [
      { q: "Do you deliver stands to Expo City Dubai?", a: "Yes. We deliver and install exhibition stands and graphics at Dubai Exhibition Centre, Expo City Dubai." },
    ],
  },
  {
    slug: "adnec",
    citySlug: "abu-dhabi",
    name: "ADNEC Centre Abu Dhabi",
    kind: "venue",
    summary: "The capital's main exhibition centre, host to major energy and defence shows.",
    profile: [
      "ADNEC Centre Abu Dhabi is the capital's largest exhibition venue, home to major international events such as ADIPEC for the energy sector and IDEX for defence, alongside consumer and industry shows.",
      "Stands at ADNEC often represent large national and international companies, with custom builds, double-deck structures, hanging signs and full meeting areas.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "backdrop-stands", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("ADNEC"),
    faqs: [
      { q: "Do you build exhibition stands at ADNEC?", a: "Yes. We design, build and install stands and graphics for shows at ADNEC Centre Abu Dhabi." },
    ],
  },
  {
    slug: "expo-centre-sharjah",
    citySlug: "sharjah",
    name: "Expo Centre Sharjah",
    kind: "venue",
    summary: "Sharjah's exhibition centre, known for its international book fair and trade shows.",
    profile: [
      "Expo Centre Sharjah, near Khalid Lagoon, hosts trade and consumer exhibitions throughout the year, including the Sharjah International Book Fair, as well as education, jewellery and industry shows.",
      "Book publishers, schools and retailers exhibiting here need stands, shelving displays, roll-ups and printed catalogues.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "book-printing", "roll-up-banners", "acrylic-display-stands"],
    planning: exhibitionPlanning("Expo Centre Sharjah"),
    faqs: [
      { q: "Can you prepare a publisher's stand for the Sharjah book fair?", a: "Yes. We build stands with shelving and graphics and can print catalogues and books for the show." },
    ],
  },
  {
    slug: "decc-doha",
    citySlug: "doha",
    name: "Doha Exhibition and Convention Center (DECC)",
    kind: "venue",
    summary: "Central exhibition halls in West Bay, Doha.",
    profile: [
      "The Doha Exhibition and Convention Center in West Bay hosts trade shows, consumer exhibitions and conferences in the heart of the city's business district.",
      "Its central location makes it convenient for visitors and for deliveries, although build-up still runs to fixed slots set by each organiser.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "pop-up-stands", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("DECC"),
    faqs: [
      { q: "Do you build stands at DECC Doha?", a: "Yes. We design, build and install exhibition stands and graphics for shows at DECC." },
    ],
  },
  {
    slug: "qncc",
    citySlug: "doha",
    name: "Qatar National Convention Centre (QNCC)",
    kind: "venue",
    summary: "Conference and exhibition venue in Education City, Doha.",
    profile: [
      "The Qatar National Convention Centre in Education City combines large exhibition halls with a theatre and many conference rooms, hosting international conferences and exhibitions.",
      "Conference-led events here need stage backdrops, registration counters, sponsor walls, wayfinding, printed programmes and exhibition stands.",
    ],
    topics: ["exhibition-booth-design", "backdrop-stands", "promotional-counters", "roll-up-banners", "brochure-printing"],
    planning: exhibitionPlanning("QNCC"),
    faqs: [
      { q: "Can you brand a conference at QNCC?", a: "Yes. We deliver stage backdrops, sponsor walls, registration counters, signage and printed material for conferences at QNCC." },
    ],
  },
  {
    slug: "riyadh-front",
    citySlug: "riyadh",
    name: "Riyadh Front Exhibition and Conference Center",
    kind: "venue",
    summary: "Modern exhibition halls near the airport road in north Riyadh.",
    profile: [
      "Riyadh Front Exhibition and Conference Center is one of the capital's modern venues for large exhibitions and conferences, as Saudi Arabia's events calendar grows quickly.",
      "Exhibitors here commonly need bilingual Arabic and English stand graphics, custom builds and printed material.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "backdrop-stands", "roll-up-banners", "promotional-counters"],
    planning: [...exhibitionPlanning("Riyadh Front"), "Plan stand graphics in Arabic and English from the start."],
    faqs: [
      { q: "Do you build exhibition stands at Riyadh Front?", a: "Yes. We design, build and install stands and graphics for shows at Riyadh Front." },
    ],
  },
  {
    slug: "riyadh-international-convention-exhibition-center",
    citySlug: "riyadh",
    name: "Riyadh International Convention and Exhibition Center",
    kind: "venue",
    summary: "Long-established exhibition halls in central Riyadh.",
    profile: [
      "The Riyadh International Convention and Exhibition Center is one of the city's long-running venues for trade shows and exhibitions.",
      "Stands here range from shell scheme booths to custom builds, with bilingual graphics expected throughout.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "pop-up-stands", "roll-up-banners", "promotional-counters"],
    planning: [...exhibitionPlanning("the Riyadh International Convention and Exhibition Center"), "Plan stand graphics in Arabic and English from the start."],
    faqs: [
      { q: "Can you supply shell scheme graphics for a Riyadh exhibition?", a: "Yes. We print and install shell scheme graphics, counters and stands to the organiser's panel sizes." },
    ],
  },
  {
    slug: "jeddah-superdome",
    citySlug: "jeddah",
    name: "Jeddah Superdome",
    kind: "venue",
    summary: "Large-span domed venue in Jeddah for exhibitions, conferences and events.",
    profile: [
      "Jeddah Superdome is a large column-free domed venue used for exhibitions, conferences, weddings and entertainment events.",
      "The open floor suits big custom builds and island stands, and humid coastal weather makes indoor build-up scheduling and material storage important.",
    ],
    topics: ["exhibition-booth-design", "backdrop-stands", "wooden-backdrops", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("Jeddah Superdome"),
    faqs: [
      { q: "Do you deliver stands to Jeddah Superdome?", a: "Yes. We design, build and install stands, backdrops and event branding at Jeddah Superdome." },
    ],
  },
  {
    slug: "kuwait-international-fair",
    citySlug: "kuwait-city",
    name: "Kuwait International Fair, Mishref",
    kind: "venue",
    summary: "Kuwait's main exhibition grounds in Mishref.",
    profile: [
      "The Kuwait International Fair grounds in Mishref host most of the country's trade and consumer exhibitions across several halls.",
      "Exhibitors need shell scheme graphics, custom stands, counters and printed material, planned around Kuwait's hot summers and busy winter event season.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "pop-up-stands", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("Kuwait International Fair"),
    faqs: [
      { q: "Do you build stands at the Kuwait International Fair?", a: "Yes. We design, build and install stands and graphics for exhibitions at Mishref." },
    ],
  },
  {
    slug: "exhibition-world-bahrain",
    citySlug: "manama",
    name: "Exhibition World Bahrain",
    kind: "venue",
    summary: "Bahrain's large modern exhibition centre in Sakhir.",
    profile: [
      "Exhibition World Bahrain in Sakhir is the kingdom's large, modern exhibition and convention centre, used for international trade shows and major events.",
      "Its location south of Manama means deliveries, crew transport and storage are planned in advance of build-up.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "backdrop-stands", "roll-up-banners", "promotional-counters"],
    planning: exhibitionPlanning("Exhibition World Bahrain"),
    faqs: [
      { q: "Do you build stands at Exhibition World Bahrain?", a: "Yes. We design, build and install stands and graphics for shows at Exhibition World Bahrain." },
    ],
  },
  {
    slug: "oman-convention-exhibition-centre",
    citySlug: "muscat",
    name: "Oman Convention and Exhibition Centre (OCEC)",
    kind: "venue",
    summary: "Muscat's main exhibition and conference venue near the international airport.",
    profile: [
      "The Oman Convention and Exhibition Centre, near Muscat International Airport, is the country's main venue for exhibitions, conferences and large events.",
      "Exhibitors need stands, shell scheme graphics, conference backdrops and bilingual printed material.",
    ],
    topics: ["exhibition-booth-design", "shell-scheme-branding", "backdrop-stands", "roll-up-banners", "brochure-printing"],
    planning: exhibitionPlanning("OCEC"),
    faqs: [
      { q: "Do you build stands at OCEC Muscat?", a: "Yes. We design, build and install stands and graphics for shows at the Oman Convention and Exhibition Centre." },
    ],
  },
];

export function placesForCity(citySlug: string) {
  return places.filter((p) => p.citySlug === citySlug);
}

export function getPlace(citySlug: string, slug: string) {
  return places.find((p) => p.citySlug === citySlug && p.slug === slug);
}
