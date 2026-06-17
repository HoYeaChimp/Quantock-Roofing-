export interface TrustPoint {
  title: string;
  detail: string;
  todo: boolean;
  icon: string;
}

export const site = {
  businessName: "Quantock Roofing",
  legalName: "Quantock Paving Ltd",
  tagline: "New roofs, roof repairs and flat roofing across the South West.",
  description:
    "Quantock Roofing is a local roofing team based near Bridgwater, installing new tiled and slate roofs, repairing leaks, renewing flat roofs and handling roofline work across Somerset, Bristol, Bath, North Somerset and selected areas of Devon.",
  domain: "quantockroofing.co.uk",
  siteUrl:
    (process.env.NEXT_PUBLIC_SITE_URL || "https://quantockroofing.co.uk").replace(/\/$/, ""),

  phone: "+441823729604",
  phoneDisplay: "01823 729604",
  whatsapp: "+447379046388",
  email: "quantockroofing@gmail.com",

  address: {
    street: "Halcyon, Fowls Mead",
    locality: "Stretcholt",
    region: "Somerset",
    postalCode: "TA6 4SR",
    country: "GB",
    isPublic: false,
  },

  openingHours: [
    { days: "Monday - Friday", hours: "8:00am - 6:00pm" },
    { days: "Saturday", hours: "8:00am - 2:00pm" },
    { days: "Sunday", hours: "Closed" },
  ],

  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  googleBusinessProfile: "",

  primaryCTA: "Get a Free Roofing Quote",
  secondaryCTA: "WhatsApp Photos",
  tertiaryCTA: "Call Now",
  bookingCTA: "Book an Inspection",
  supportCTA: "Send Enquiry",

  defaultReassurance:
    "No obligation. No pressure. Just honest roofing advice and a clear next step.",

  trustPoints: [
    {
      title: "Local roofing team",
      detail:
        "Based near Bridgwater and covering Somerset, Bristol, Bath, North Somerset and selected Devon towns.",
      todo: false,
      icon: "map-pin",
    },
    {
      title: "Free written quotes",
      detail:
        "Every roof is assessed properly and quoted clearly before work is booked.",
      todo: false,
      icon: "file-text",
    },
    {
      title: "Repair-first advice",
      detail:
        "If a sensible repair will do the job, we will say so. Full replacement is recommended only when it is the better long-term answer.",
      todo: false,
      icon: "chat",
    },
    {
      title: "Workmanship guarantees",
      detail:
        "New tiled and slate roofs carry a 20-year workmanship guarantee, with flat roofs and roofline work covered by clear written terms.",
      todo: false,
      icon: "shield",
    },
    {
      title: "Emergency enquiries",
      detail:
        "Urgent leak and storm enquiries can be left on the mobile line. Attendance depends on availability, weather, access and safety.",
      todo: false,
      icon: "bolt",
    },
    {
      title: "Straight communication",
      detail:
        "Photos are welcome by WhatsApp, quotes are put in writing, and the next step is kept clear.",
      todo: false,
      icon: "star",
    },
  ] satisfies TrustPoint[],

  brandWords: ["premium", "honest", "local", "careful", "clear", "reliable"],

  coordinates: null as { lat: number; lng: number } | null,
  sameAs: [] as string[],

  companyRegistration: "16165417",
  vatNumber: "",
  priceRange: "",
  serviceRadius: "Somerset, Bristol, Bath, North Somerset and selected areas of Devon",
};

export type Site = typeof site;
