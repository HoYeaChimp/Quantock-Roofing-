export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  benefits: string[];
  problemsSolved: string[];
  whatsIncluded: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedServices: string[];
  image: string;
  icon: string;
  ctaText: string;
  trustNote: string;
  bestFor: string[];
  commonQuestions: string[];
  proofPoints: string[];
}

const roofingProcess: ServiceProcessStep[] = [
  { title: "Tell us what is happening", description: "Call, WhatsApp photos, or use the form so we can understand the roof, access and urgency." },
  { title: "Roof inspection", description: "We inspect the roof safely and explain whether repair, replacement or further investigation is sensible." },
  { title: "Written quote", description: "You get a clear written quote with scope, materials, scaffolding assumptions and guarantee terms." },
  { title: "Work completed properly", description: "The job is planned around weather and access, completed tidily, then checked before handover." },
];

const sharedProofPoints = [
  "Free, no-obligation written quotations",
  "Workmanship guarantees confirmed in writing",
  "Based near Bridgwater and covering the wider South West",
];

export const services: Service[] = [
  {
    name: "New Roofs",
    slug: "new-roofs",
    shortDescription:
      "Complete tiled and slate roof replacements with proper membrane, battens, fixings and detailing.",
    description:
      "A new roof is one of the biggest investments you make in a home. Quantock Roofing installs complete tiled and slate roofs with breathable membrane, treated battens, correct fixings, careful flashing work and a 20-year workmanship guarantee.",
    heroTitle: "New roofs installed properly",
    heroSubtitle:
      "Tiled and slate re-roofs across Somerset, Bristol, Bath, North Somerset and selected Devon towns.",
    seoTitle: "New Roofs Somerset, Bristol, Bath & Devon | Quantock Roofing",
    seoDescription:
      "Complete new tiled and slate roofs across Somerset, Bristol, Bath and Devon. Free written quotes and 20-year workmanship guarantee.",
    benefits: [
      "Complete tiled or slate roof replacement",
      "Breathable membrane and treated battens",
      "Correct ridge, verge, valley and flashing details",
      "20-year workmanship guarantee",
    ],
    problemsSolved: [
      "Repeated leaks where patch repairs no longer add up",
      "Worn, sagging or storm-damaged roof coverings",
      "Failed underlay, tired battens and poor ventilation",
      "A roof that is letting the whole property down",
    ],
    whatsIncluded: [
      "Inspection and repair-vs-replace advice",
      "Strip and disposal where included in the quote",
      "New membrane, battens, tiles or slates",
      "Leadwork, flashings, ridge, verge and ventilation details",
      "Tidy handover and written guarantee terms",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Do I always need a full new roof?", answer: "No. Some roofs can be repaired sensibly. We explain the condition clearly and recommend a full replacement only when it is the better long-term answer." },
      { question: "How long does a new roof take?", answer: "Many house re-roofs take several days to around two weeks, depending on size, complexity, access and weather. Your quote includes a realistic timescale." },
      { question: "Will scaffolding be included?", answer: "Where scaffolding is needed, it is included in the written quote so the scope is clear before you decide." },
    ],
    relatedServices: ["tiled-roofs", "slate-roofs", "roof-repairs"],
    image: "/images/service-new-roofs.webp",
    icon: "home",
    ctaText: "Get a new roof quote",
    trustNote: "Clear scope, clear price, and no pressure to proceed.",
    bestFor: [
      "Roofs at the end of their serviceable life",
      "Homes suffering repeated leaks",
      "Renovations and long-term property upgrades",
    ],
    commonQuestions: ["Repair or replace?", "What tile or slate should I choose?", "What is included?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Roof Repairs",
    slug: "roof-repairs",
    shortDescription:
      "Leak tracing, slipped tiles, storm damage, flashings, ridges and targeted roof repairs.",
    description:
      "Not every roof problem needs a full replacement. We investigate leaks, repair slipped or broken tiles and slates, sort flashings and advise honestly when a targeted repair is the right move.",
    heroTitle: "Roof repairs without the guesswork",
    heroSubtitle:
      "Find the cause, fix what needs fixing, and avoid unnecessary replacement where repair is enough.",
    seoTitle: "Roof Repairs Somerset, Bristol, Bath & Devon | Quantock Roofing",
    seoDescription:
      "Roof repairs, leak tracing, slipped tiles, flashings and storm damage across Somerset, Bristol, Bath and Devon. Free advice and written quotes.",
    benefits: [
      "Repair-first advice where suitable",
      "Leak investigation and visible defect checks",
      "Tile, slate, ridge, verge and flashing repairs",
      "Emergency enquiries welcomed",
    ],
    problemsSolved: [
      "Water staining, damp patches and active leaks",
      "Slipped, cracked or missing roof tiles",
      "Failed leadwork or chimney flashings",
      "Storm damage that needs making safe",
    ],
    whatsIncluded: [
      "Initial advice from photos where useful",
      "Safe inspection where access allows",
      "Written repair scope before work",
      "Clear explanation if replacement is more sensible",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Can I send photos first?", answer: "Yes. WhatsApp photos can help us understand the roof and urgency before arranging the next step." },
      { question: "Do you guarantee repairs?", answer: "Repair guarantee terms depend on the condition of the surrounding roof and are confirmed in writing before work starts." },
      { question: "Can you attend emergencies?", answer: "Urgent enquiries are welcomed, but attendance depends on availability, weather, access and safety." },
    ],
    relatedServices: ["emergency-roofing", "chimney-leadwork", "new-roofs"],
    image: "/images/service-roof-repairs.webp",
    icon: "wrench",
    ctaText: "Ask about a roof repair",
    trustNote: "We will not dress a replacement job up as a repair, or a repair job up as a replacement.",
    bestFor: ["Leaks and damp patches", "Storm damage", "Slipped or broken tiles"],
    commonQuestions: ["Where is the leak coming from?", "Is it repairable?", "How urgent is it?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Flat Roofs",
    slug: "flat-roofs",
    shortDescription:
      "EPDM rubber, felt and GRP flat roof systems for extensions, garages, dormers and outbuildings.",
    description:
      "Flat roofs need the right system for the building, fall, detailing and budget. We install and renew EPDM rubber, felt and GRP flat roofs, with deck condition and insulation discussed clearly before work is booked.",
    heroTitle: "Flat roofs that are specified properly",
    heroSubtitle:
      "Practical flat roofing advice and tidy installation for extensions, garages, dormers and outbuildings.",
    seoTitle: "Flat Roofs Somerset, Bristol, Bath & Devon | EPDM Felt GRP",
    seoDescription:
      "Flat roof installation and replacement across Somerset, Bristol, Bath and Devon. EPDM rubber, felt and GRP systems. Free written quotes.",
    benefits: [
      "EPDM, felt and GRP options explained clearly",
      "Deck condition checked before covering",
      "Neat edge trims and drainage details",
      "10-year workmanship guarantee on new flat roofs",
    ],
    problemsSolved: [
      "Blistered, cracked or leaking old flat roofs",
      "Poor falls causing standing water",
      "Failed edges, trims or rooflight details",
      "Cold or poorly insulated extension roofs",
    ],
    whatsIncluded: [
      "Flat roof survey and system recommendation",
      "Deck and insulation discussion where relevant",
      "New covering, trims and outlet details",
      "Waste removal and written guarantee terms",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Which flat roof system is best?", answer: "There is no single best system. EPDM, felt and GRP all suit different roofs and budgets. We explain the trade-offs before quoting." },
      { question: "Will the deck need replacing?", answer: "Sometimes. If the deck is soft, rotten or unsuitable, it needs dealing with before a new covering goes on. We confirm this in the quote or after exposing the roof." },
      { question: "Can you insulate the flat roof?", answer: "Warm roof insulation can be discussed as part of the quote where the construction allows." },
    ],
    relatedServices: ["roof-repairs", "new-roofs", "roofline-guttering"],
    image: "/images/service-flat-roofs.webp",
    icon: "layers",
    ctaText: "Get a flat roof quote",
    trustNote: "The system is chosen for the roof, not forced from a sales script.",
    bestFor: ["Extensions", "Garages", "Dormers and outbuildings"],
    commonQuestions: ["EPDM, felt or GRP?", "Does the deck need replacing?", "Can insulation be added?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Roofline & Guttering",
    slug: "roofline-guttering",
    shortDescription:
      "Fascias, soffits, bargeboards, guttering and downpipes renewed neatly and safely.",
    description:
      "Roofline work protects the edge of the roof and controls rainwater. We replace tired fascias, soffits, bargeboards, guttering and downpipes with neat, low-maintenance systems.",
    heroTitle: "Roofline and guttering, tidied up properly",
    heroSubtitle:
      "Low-maintenance fascias, soffits and rainwater goods installed with the roof edge in mind.",
    seoTitle: "Fascias, Soffits & Guttering Somerset | Quantock Roofing",
    seoDescription:
      "Roofline, fascia, soffit and guttering replacement across Somerset, Bristol, Bath and Devon. Free written quotes from Quantock Roofing.",
    benefits: [
      "Fascia, soffit, bargeboard and gutter replacement",
      "Better protection at roof edges",
      "Cleaner appearance and lower maintenance",
      "12-month workmanship guarantee on roofline work",
    ],
    problemsSolved: [
      "Rotten timber fascias and peeling paint",
      "Leaking, blocked or sagging gutters",
      "Bird or pest access at roof edges",
      "Untidy rooflines that spoil the property frontage",
    ],
    whatsIncluded: [
      "Inspection of the roof edge and gutters",
      "Removal of old roofline where quoted",
      "New fascias, soffits, guttering and downpipes",
      "Ventilation checks where relevant",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Do fascias and soffits affect the roof?", answer: "Yes. The roofline protects the roof edge, supports guttering and helps manage ventilation where designed that way." },
      { question: "Can you just replace the gutters?", answer: "Often, yes. We will tell you if the fascia behind them is too tired to support a reliable gutter repair." },
      { question: "Do you remove the waste?", answer: "Yes, waste removal is included where it is part of the quoted scope." },
    ],
    relatedServices: ["roof-repairs", "dry-ridge-verge", "flat-roofs"],
    image: "/images/service-roofline.webp",
    icon: "spark",
    ctaText: "Get a roofline quote",
    trustNote: "We check the edge detail, not just the plastic you can see.",
    bestFor: ["Rotten fascias", "Leaking guttering", "Low-maintenance upgrades"],
    commonQuestions: ["Can gutters be repaired?", "Will ventilation be affected?", "What colours are available?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Dry Ridge & Dry Verge",
    slug: "dry-ridge-verge",
    shortDescription:
      "Mechanically fixed dry ridge and dry verge systems to replace failing mortar details.",
    description:
      "Old mortar ridges and verges crack, loosen and fall out over time. Dry ridge and dry verge systems use mechanical fixings for a cleaner, lower-maintenance finish.",
    heroTitle: "Mortar-free ridge and verge details",
    heroSubtitle:
      "Dry ridge and dry verge systems for tiled roofs where the old mortar details are failing.",
    seoTitle: "Dry Ridge & Dry Verge Somerset | Quantock Roofing",
    seoDescription:
      "Dry ridge and dry verge installation across Somerset, Bristol, Bath and Devon. Mechanically fixed systems for lower-maintenance roof edges.",
    benefits: [
      "Mechanically fixed systems",
      "Lower maintenance than exposed mortar",
      "Neat finish at ridge and gable edges",
      "Useful upgrade during repairs or re-roofs",
    ],
    problemsSolved: [
      "Cracked or missing ridge mortar",
      "Loose verge mortar falling from gable ends",
      "Recurring roof edge maintenance",
      "Storm-exposed ridges and verges",
    ],
    whatsIncluded: [
      "Assessment of existing ridge and verge condition",
      "Removal of failed mortar where needed",
      "Installation of suitable dry ridge or dry verge system",
      "Tidy finish and waste removal",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Is dry ridge better than mortar?", answer: "For many modern tiled roofs, a mechanically fixed dry ridge system is lower maintenance and more secure than exposed mortar." },
      { question: "Can dry verge be fitted to any roof?", answer: "It depends on the tile and edge detail. We check suitability before recommending it." },
      { question: "Can this be done with other repairs?", answer: "Yes. Dry ridge and verge upgrades are often sensible while other roof work is being done." },
    ],
    relatedServices: ["roof-repairs", "new-roofs", "roofline-guttering"],
    image: "/images/service-dry-ridge-verge.webp",
    icon: "shield",
    ctaText: "Ask about dry ridge or verge",
    trustNote: "We fit systems only where they suit the roof detail.",
    bestFor: ["Failing mortar", "Gable edge repairs", "Lower-maintenance tiled roofs"],
    commonQuestions: ["Is my roof suitable?", "Can it be repaired instead?", "How long will it take?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Emergency Roofing",
    slug: "emergency-roofing",
    shortDescription:
      "Urgent leak, storm damage and make-safe enquiries handled as availability and conditions allow.",
    description:
      "When water is coming in or storm damage has left a roof unsafe, the priority is calm advice and a safe next step. Our emergency line accepts urgent roofing enquiries, with attendance subject to availability, weather, access and safety.",
    heroTitle: "Urgent roofing advice when it cannot wait",
    heroSubtitle:
      "Leak and storm-damage enquiries across the South West, with honest guidance and no guaranteed attendance claim.",
    seoTitle: "Emergency Roof Repairs Somerset, Bristol, Bath & Devon",
    seoDescription:
      "Emergency roofing enquiries for leaks and storm damage across Somerset, Bristol, Bath and Devon. Attendance subject to availability, access, weather and safety.",
    benefits: [
      "Urgent leak and storm enquiries welcomed",
      "Photos by WhatsApp help us advise quickly",
      "Make-safe and repair options explained",
      "Safety-first approach in bad weather",
    ],
    problemsSolved: [
      "Active roof leaks",
      "Storm-damaged tiles, ridges or flashings",
      "Unsafe loose materials",
      "Unclear next steps during bad weather",
    ],
    whatsIncluded: [
      "Initial phone or WhatsApp advice",
      "Priority assessment where possible",
      "Make-safe or repair quote where appropriate",
      "Clear safety guidance if attendance is not possible immediately",
    ],
    process: [
      { title: "Call or WhatsApp", description: "Send photos if you can do so safely from the ground. Do not climb onto the roof." },
      { title: "Immediate guidance", description: "We advise on practical next steps and whether attendance may be possible." },
      { title: "Safe inspection", description: "If conditions allow, we inspect safely and explain repair or make-safe options." },
      { title: "Repair or follow-up", description: "Temporary or permanent work is agreed clearly before it starts." },
    ],
    faqs: [
      { question: "Do you guarantee emergency attendance?", answer: "No. Attendance depends on availability, weather, access and safety. We will still give the clearest advice we can when you contact us." },
      { question: "Should I climb up to inspect the leak?", answer: "No. Stay off the roof, keep away from electrics if water is entering, and call 999 if there is danger to life." },
      { question: "Can you do a temporary repair?", answer: "Where safe and suitable, a temporary make-safe may be possible before a permanent repair is quoted." },
    ],
    relatedServices: ["roof-repairs", "flat-roofs", "chimney-leadwork"],
    image: "/images/service-emergency-roofing.webp",
    icon: "bolt",
    ctaText: "Call about an urgent roof issue",
    trustNote: "Safety comes first. We will not promise attendance we cannot safely deliver.",
    bestFor: ["Active leaks", "Storm damage", "Loose or unsafe roof materials"],
    commonQuestions: ["What should I do now?", "Can you attend?", "Is it safe?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Chimney & Leadwork",
    slug: "chimney-leadwork",
    shortDescription:
      "Chimney flashing, leadwork and roof junction repairs where water often finds a way in.",
    description:
      "Chimneys, valleys, abutments and flashings are common leak points. We inspect the detail properly and quote for practical leadwork or junction repairs where needed.",
    heroTitle: "Leadwork and chimney details made watertight",
    heroSubtitle:
      "Careful repair of the roof junctions where many leaks actually start.",
    seoTitle: "Chimney Leadwork & Flashing Repairs Somerset | Quantock Roofing",
    seoDescription:
      "Chimney flashing, leadwork, valley and roof junction repairs across Somerset, Bristol, Bath and Devon. Free written quotes.",
    benefits: [
      "Chimney flashing and abutment checks",
      "Valley, step flashing and leadwork repairs",
      "Leak-focused diagnosis",
      "Clear written scope before work starts",
    ],
    problemsSolved: [
      "Leaks around chimneys",
      "Failed or lifted flashings",
      "Cracked mortar and weathered junctions",
      "Water ingress at roof abutments or valleys",
    ],
    whatsIncluded: [
      "Visual inspection of the suspect detail",
      "Repair recommendation explained in plain English",
      "Leadwork or associated repair where quoted",
      "Advice if broader roof condition is contributing",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Is every chimney leak a leadwork problem?", answer: "No. It may be flashings, pointing, the roof covering, the chimney itself or a combination. We inspect before assuming." },
      { question: "Can you repair leadwork without a full roof replacement?", answer: "Often, yes. If the surrounding roof is sound enough, targeted leadwork repairs can be sensible." },
      { question: "Do older roofs need different treatment?", answer: "Older roofs often need more careful detailing and sympathetic material choices. We explain options before quoting." },
    ],
    relatedServices: ["roof-repairs", "new-roofs", "emergency-roofing"],
    image: "/images/service-chimney-leadwork.webp",
    icon: "layers",
    ctaText: "Ask about leadwork repairs",
    trustNote: "We look for the real leak path, not just the most obvious mark.",
    bestFor: ["Chimney leaks", "Valleys and abutments", "Period roof details"],
    commonQuestions: ["Is it the flashing?", "Can it be repaired?", "Will scaffolding be needed?"],
    proofPoints: sharedProofPoints,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}
