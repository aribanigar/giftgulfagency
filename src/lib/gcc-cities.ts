/**
 * Local planning facts per city, used to write topic x city pages. Keep this
 * to things that are publicly verifiable (venue names, districts, malls,
 * weekends, national days, climate). Never add office addresses, response
 * times or claims about local staff: we deliver and install in these cities,
 * we are not "located" in them.
 */
export type CityVenue = { name: string; note: string };

export type GccCity = {
  slug: string; // matches src/lib/locations.ts
  city: string;
  country: string;
  venues: CityVenue[];
  businessDistricts: string[];
  malls: string[];
  industrialAreas: string[];
  weekend: string;
  nationalDay: string;
  climate: string;
  language: string;
  approvals: string;
};

export const gccCities: GccCity[] = [
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    venues: [
      { name: "Dubai World Trade Centre (DWTC)", note: "The city's main exhibition and conference halls, busy through the cooler months" },
      { name: "Dubai Exhibition Centre, Expo City Dubai", note: "Large modern halls on the Expo 2020 site, used by growing trade shows" },
      { name: "Hotel ballrooms on Sheikh Zayed Road, Downtown and Dubai Marina", note: "Conferences, launches, gala dinners and award nights" },
    ],
    businessDistricts: ["Business Bay", "DIFC", "Downtown Dubai", "Jumeirah Lake Towers (JLT)", "Dubai Marina", "Al Barsha", "Dubai Silicon Oasis"],
    malls: ["The Dubai Mall", "Mall of the Emirates", "Dubai Festival City Mall", "City Centre Deira", "Ibn Battuta Mall", "Dubai Hills Mall"],
    industrialAreas: ["Al Quoz", "Jebel Ali (JAFZA)", "Dubai Investments Park", "Ras Al Khor"],
    weekend: "Saturday and Sunday",
    nationalDay: "UAE National Day, 2 December",
    climate: "Hot and humid summers with coastal humidity; mild winters from November to March, which is also peak event season.",
    language: "English is the everyday business language, with Arabic expected on official and many commercial signs.",
    approvals:
      "Exterior signs usually need municipal approval, free zones such as DIFC, JLT and JAFZA apply their own rules, and malls and towers review signage and fit-out designs before work starts.",
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    venues: [
      { name: "ADNEC Centre Abu Dhabi", note: "The capital's main exhibition centre, host to large defence, energy and industry shows" },
      { name: "Venues on Yas Island and Saadiyat", note: "Concerts, sports and outdoor brand activations" },
      { name: "Hotels on the Corniche and Al Maryah Island", note: "Government and corporate conferences" },
    ],
    businessDistricts: ["Al Maryah Island (ADGM)", "Al Reem Island", "The Corniche", "Khalifa City", "Al Khalidiyah", "Masdar City"],
    malls: ["Yas Mall", "The Galleria Al Maryah Island", "Abu Dhabi Mall", "Marina Mall", "Dalma Mall", "Al Wahda Mall"],
    industrialAreas: ["Musaffah", "ICAD", "KEZAD"],
    weekend: "Saturday and Sunday",
    nationalDay: "UAE National Day, 2 December",
    climate: "Very hot summers with humidity along the coast; strong sun on open sites and car parks.",
    language: "English and Arabic, with government-linked clients often asking for Arabic first.",
    approvals:
      "Abu Dhabi municipality approves exterior signs, ADGM and other zones add their own rules, and many projects for government-linked clients carry extra brand and safety reviews.",
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    country: "UAE",
    venues: [
      { name: "Expo Centre Sharjah", note: "Trade and consumer shows, education fairs and the city's large book fair" },
      { name: "University City halls and campuses", note: "Education events and graduation branding" },
    ],
    businessDistricts: ["Al Majaz", "Al Khan", "Al Nahda", "Al Taawun", "Muwaileh", "University City"],
    malls: ["City Centre Sharjah", "Sahara Centre", "Mega Mall", "Matajer Al Juraina", "Zero 6 Mall"],
    industrialAreas: ["Sharjah Industrial Areas", "SAIF Zone", "Hamriyah Free Zone"],
    weekend: "Friday to Sunday for government offices; Saturday and Sunday for most private businesses",
    nationalDay: "UAE National Day, 2 December",
    climate: "Hot and humid summers similar to Dubai; dust on open industrial sites.",
    language: "Arabic and English; Sharjah applies conservative standards to advertising imagery and wording.",
    approvals:
      "Sharjah municipality approves exterior signs and outdoor advertising content, free zones such as SAIF Zone have their own processes, and imagery is reviewed against local standards.",
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    venues: [
      { name: "Doha Exhibition and Convention Center (DECC)", note: "Central halls in West Bay for trade and consumer exhibitions" },
      { name: "Qatar National Convention Centre (QNCC)", note: "Conferences and large exhibitions in Education City" },
      { name: "Venues in Lusail", note: "Sports, concerts and large public events" },
    ],
    businessDistricts: ["West Bay", "Lusail", "Msheireb Downtown", "The Pearl", "Al Sadd", "Old Airport area"],
    malls: ["Doha Festival City", "Mall of Qatar", "Villaggio Mall", "Place Vendome", "City Center Doha", "Lagoona Mall"],
    industrialAreas: ["Doha Industrial Area", "Birkat Al Awamer", "Umm Salal"],
    weekend: "Friday and Saturday",
    nationalDay: "Qatar National Day, 18 December",
    climate: "Very hot, humid summers; outdoor installation is often scheduled early morning or at night.",
    language: "Arabic is expected on commercial signage alongside English; check the current requirement before finalising artwork.",
    approvals:
      "Exterior signs and advertising need municipal licensing, and malls and developments such as Lusail, The Pearl and Msheireb apply their own design reviews.",
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    venues: [
      { name: "Riyadh International Convention and Exhibition Center", note: "Long-established exhibition halls for trade shows" },
      { name: "Riyadh Front Exhibition and Conference Center", note: "Modern halls near the airport road for large exhibitions" },
      { name: "Boulevard City and other Riyadh Season zones", note: "Entertainment season activations and pop-ups" },
    ],
    businessDistricts: ["Olaya", "King Abdullah Financial District (KAFD)", "Al Malqa", "Al Sulaymaniyah", "Diplomatic Quarter", "King Fahd Road"],
    malls: ["Riyadh Park", "Kingdom Centre", "Al Nakheel Mall", "Riyadh Gallery", "Granada Mall", "Panorama Mall"],
    industrialAreas: ["Second Industrial City", "Al Sulay", "Al Masanei"],
    weekend: "Friday and Saturday",
    nationalDay: "Saudi National Day, 23 September, and Founding Day, 22 February",
    climate: "Dry desert heat with dust and sandstorms in summer; cool winter nights.",
    language: "Arabic is required on commercial signage, with English allowed alongside it.",
    approvals:
      "Commercial signs need municipal permits, and malls, KAFD and large developments run their own design approvals. Arabic text size and placement are part of the review.",
  },
  {
    slug: "jeddah",
    city: "Jeddah",
    country: "Saudi Arabia",
    venues: [
      { name: "Jeddah Superdome", note: "Large-span venue for exhibitions, weddings and events" },
      { name: "Jeddah Center for Forums and Events", note: "Trade shows and conferences" },
      { name: "Event areas on the Corniche and in Al Balad", note: "Seasonal festivals and outdoor activations" },
    ],
    businessDistricts: ["Al Rawdah", "Al Andalus", "Prince Sultan Road", "Tahlia Street", "Al Zahra", "Obhur"],
    malls: ["Red Sea Mall", "Mall of Arabia", "Al Andalus Mall", "Roshan Mall", "Aziz Mall"],
    industrialAreas: ["Jeddah Industrial City", "Al Khumrah"],
    weekend: "Friday and Saturday",
    nationalDay: "Saudi National Day, 23 September, and Founding Day, 22 February",
    climate: "Hot and very humid on the Red Sea coast; salt air is hard on metal fixings and lighting.",
    language: "Arabic is required on commercial signage, with English allowed alongside it.",
    approvals:
      "Commercial signs need municipal permits, with mall and developer design reviews on top.",
  },
  {
    slug: "kuwait-city",
    city: "Kuwait City",
    country: "Kuwait",
    venues: [
      { name: "Kuwait International Fair, Mishref", note: "The country's main exhibition grounds" },
      { name: "Hotels in Kuwait City and Salmiya", note: "Conferences, launches and corporate events" },
    ],
    businessDistricts: ["Sharq", "Kuwait City centre", "Salmiya", "Hawalli", "Al Rai", "Mahboula"],
    malls: ["The Avenues", "360 Mall", "Marina Mall", "Al Kout Mall", "Gate Mall"],
    industrialAreas: ["Shuwaikh Industrial", "Al Rai", "Ardiya"],
    weekend: "Friday and Saturday",
    nationalDay: "Kuwait National Day, 25 February, and Liberation Day, 26 February",
    climate: "Some of the hottest summers in the region with frequent dust; exterior materials and LEDs need heat-rated specs.",
    language: "Arabic and English, with Arabic expected on commercial signage.",
    approvals:
      "Exterior signs need municipal permits, and malls such as The Avenues run strict design and installation reviews.",
  },
  {
    slug: "manama",
    city: "Manama",
    country: "Bahrain",
    venues: [
      { name: "Exhibition World Bahrain, Sakhir", note: "The kingdom's large modern exhibition centre" },
      { name: "Hotels in Seef, Juffair and Bahrain Bay", note: "Conferences and corporate events" },
    ],
    businessDistricts: ["Seef", "Bahrain Bay", "Bahrain Financial Harbour", "Diplomatic Area", "Juffair", "Adliya"],
    malls: ["City Centre Bahrain", "Seef Mall", "The Avenues Bahrain", "Bahrain Mall", "Oasis Mall Juffair"],
    industrialAreas: ["Sitra", "Salman Industrial City", "Hidd"],
    weekend: "Friday and Saturday",
    nationalDay: "Bahrain National Day, 16 December",
    climate: "Hot, humid island climate; humidity affects adhesives and outdoor prints.",
    language: "Arabic and English, with Arabic expected on commercial signage.",
    approvals:
      "Exterior signs need municipal permits, and malls and developments add their own design approvals.",
  },
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    venues: [
      { name: "Oman Convention and Exhibition Centre (OCEC)", note: "Main venue for exhibitions and conferences" },
      { name: "Hotels in Qurum, Al Khuwair and Shatti Al Qurum", note: "Corporate and government events" },
    ],
    businessDistricts: ["Qurum", "Al Khuwair", "Madinat Sultan Qaboos", "Ruwi", "Muscat Hills", "Al Mouj"],
    malls: ["Mall of Oman", "Muscat Grand Mall", "Oman Avenues Mall", "City Centre Qurum", "City Centre Muscat"],
    industrialAreas: ["Ghala", "Rusayl", "Al Misfah"],
    weekend: "Friday and Saturday",
    nationalDay: "Oman National Day, 20 November",
    climate: "Hot and humid on the coast with summer monsoon humidity; mild winters.",
    language: "Arabic and English, with Arabic expected on commercial signage.",
    approvals:
      "Muscat municipality approves exterior signs and advertising, and malls and developments add their own design approvals.",
  },
];

export function getGccCity(slug: string) {
  return gccCities.find((c) => c.slug === slug);
}
