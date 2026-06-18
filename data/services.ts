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
      "Tiled and slate re-roofs across Somerset, Bristol and selected Devon towns.",
    seoTitle: "New Roofs Somerset, Bristol & Devon | Quantock Roofing",
    seoDescription:
      "Complete new tiled and slate roofs across Somerset, Bristol and Devon. Free written quotes and 20-year workmanship guarantee.",
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
    image: "/images/projects/new-tiled-roof-grey-01.jpg",
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
    seoTitle: "Roof Repairs Somerset, Bristol & Devon | Quantock Roofing",
    seoDescription:
      "Roof repairs, leak tracing, slipped tiles, flashings and storm damage across Somerset, Bristol and Devon. Free advice and written quotes.",
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
    relatedServices: ["emergency-roof-repairs", "chimney-leadwork", "new-roofs"],
    image: "/images/projects/slate-re-roof-in-progress.jpg",
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
    seoTitle: "Flat Roofs Somerset, Bristol & Devon | EPDM Felt GRP",
    seoDescription:
      "Flat roof installation and replacement across Somerset, Bristol and Devon. EPDM rubber, felt and GRP systems. Free written quotes.",
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
    relatedServices: ["roof-repairs", "new-roofs", "fascias-soffits-guttering"],
    image: "/images/projects/epdm-rubber-flat-roof.jpg",
    icon: "layers",
    ctaText: "Get a flat roof quote",
    trustNote: "The system is chosen for the roof, not forced from a sales script.",
    bestFor: ["Extensions", "Garages", "Dormers and outbuildings"],
    commonQuestions: ["EPDM, felt or GRP?", "Does the deck need replacing?", "Can insulation be added?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Fascias, Soffits & Guttering",
    slug: "fascias-soffits-guttering",
    shortDescription:
      "Fascias, soffits, bargeboards, guttering and downpipes renewed neatly and safely.",
    description:
      "Roofline work protects the edge of the roof and controls rainwater. We replace tired fascias, soffits, bargeboards, guttering and downpipes with neat, low-maintenance systems.",
    heroTitle: "Roofline and guttering, tidied up properly",
    heroSubtitle:
      "Low-maintenance fascias, soffits and rainwater goods installed with the roof edge in mind.",
    seoTitle: "Fascias, Soffits & Guttering Somerset | Quantock Roofing",
    seoDescription:
      "Roofline, fascia, soffit and guttering replacement across Somerset, Bristol and Devon. Free written quotes from Quantock Roofing.",
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
    relatedServices: ["roof-repairs", "dry-ridge-dry-verge", "flat-roofs"],
    image: "/images/projects/new-roofline-fascias-soffits-guttering.jpg",
    icon: "spark",
    ctaText: "Get a roofline quote",
    trustNote: "We check the edge detail, not just the plastic you can see.",
    bestFor: ["Rotten fascias", "Leaking guttering", "Low-maintenance upgrades"],
    commonQuestions: ["Can gutters be repaired?", "Will ventilation be affected?", "What colours are available?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Tiled Roofs",
    slug: "tiled-roofs",
    shortDescription:
      "Concrete and clay tiled roof installation, replacement and repairs with neat ridge, verge and valley details.",
    description:
      "Tiled roofs need the right tile, fixing specification and detailing for the property and exposure. Quantock Roofing installs and repairs concrete and clay tiled roofs across Somerset, Bristol and Devon, with clear advice before anything is booked.",
    heroTitle: "Tiled roofs installed with care",
    heroSubtitle:
      "Concrete and clay tiled roof work for replacements, repairs and upgrades across Somerset, Bristol and Devon.",
    seoTitle: "Tiled Roofs Somerset, Bristol & Devon | Quantock Roofing",
    seoDescription:
      "Concrete and clay tiled roof installation, replacement and repair across Somerset, Bristol and Devon. Free written tiled roof quotes.",
    benefits: [
      "Concrete and clay tile options explained",
      "Correct battens, membrane, fixings and ventilation",
      "Dry ridge, dry verge, valley and flashing detailing",
      "Useful advice on repair versus replacement",
    ],
    problemsSolved: [
      "Old tiled roofs reaching the end of their life",
      "Slipped, cracked or weathered tiles",
      "Failed mortar ridge or verge details",
      "Leaks caused by valleys, flashings or poor fixings",
    ],
    whatsIncluded: [
      "Tile roof inspection and written recommendation",
      "New tile installation or targeted tiled roof repair",
      "Ridge, verge, valley and flashing checks",
      "Waste removal and guarantee terms where included",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Can you match existing roof tiles?", answer: "Often, yes. We check the existing tile profile, colour and availability before advising whether a match or a broader replacement is sensible." },
      { question: "Are dry ridge and dry verge included?", answer: "They can be included where suitable. The quote explains exactly what ridge and verge detail is proposed." },
      { question: "Do tiled roofs need ventilation?", answer: "Ventilation depends on the roof build-up and current standards. We discuss it where it affects the specification." },
    ],
    relatedServices: ["new-roofs", "dry-ridge-dry-verge", "roof-repairs"],
    image: "/images/projects/new-tiled-roof-red-velux-02.jpg",
    icon: "home",
    ctaText: "Get a tiled roof quote",
    trustNote: "We specify the tiled roof around the property, exposure and budget.",
    bestFor: ["Concrete tile roofs", "Clay tile roofs", "Full tiled re-roofs"],
    commonQuestions: ["Can tiles be matched?", "Is the underlay failing?", "What details are included?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Slate Roofs",
    slug: "slate-roofs",
    shortDescription:
      "Natural and man-made slate roof repairs and replacements for older and modern homes.",
    description:
      "Slate roofing rewards careful setting out, fixings and leadwork. We handle slate repairs, slate replacements and full slate re-roofs with honest advice about the existing roof condition.",
    heroTitle: "Slate roofing with sharper details",
    heroSubtitle:
      "Slate roof repairs and re-roofs for homes across Somerset, Bristol and selected Devon towns.",
    seoTitle: "Slate Roofs Somerset, Bristol & Devon | Quantock Roofing",
    seoDescription:
      "Slate roof repairs and slate re-roofing across Somerset, Bristol and Devon. Natural and man-made slate options explained clearly.",
    benefits: [
      "Natural and man-made slate advice",
      "Careful coursing, fixings and roof junctions",
      "Leadwork and chimney details checked",
      "Repair-first guidance where possible",
    ],
    problemsSolved: [
      "Slipped or cracked slates",
      "Leaks around chimneys, valleys and abutments",
      "Tired older slate roofs needing replacement",
      "Poor previous repairs that keep failing",
    ],
    whatsIncluded: [
      "Slate roof inspection",
      "Repair or replacement recommendation",
      "Slate, underlay, batten and leadwork scope",
      "Written quote with clear guarantee terms",
    ],
    process: roofingProcess,
    faqs: [
      { question: "Can individual slates be replaced?", answer: "Yes, where the surrounding roof is sound enough. We explain when targeted slate repair is worthwhile." },
      { question: "Natural or man-made slate?", answer: "Both can be suitable. The right choice depends on the property, appearance, budget and specification." },
      { question: "Are slate roofs more complex?", answer: "They can be. Slate work needs careful setting out and fixing, especially around chimneys, valleys and roof edges." },
    ],
    relatedServices: ["new-roofs", "chimney-leadwork", "roof-repairs"],
    image: "/images/projects/slate-re-roof-in-progress.jpg",
    icon: "layers",
    ctaText: "Get a slate roof quote",
    trustNote: "We keep slate roof advice practical and property-specific.",
    bestFor: ["Slate repairs", "Slate re-roofs", "Older roof details"],
    commonQuestions: ["Can it be repaired?", "Which slate should I choose?", "Will leadwork be included?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Dry Ridge & Dry Verge",
    slug: "dry-ridge-dry-verge",
    shortDescription:
      "Mechanically fixed dry ridge and dry verge systems to replace failing mortar details.",
    description:
      "Old mortar ridges and verges crack, loosen and fall out over time. Dry ridge and dry verge systems use mechanical fixings for a cleaner, lower-maintenance finish.",
    heroTitle: "Mortar-free ridge and verge details",
    heroSubtitle:
      "Dry ridge and dry verge systems for tiled roofs where the old mortar details are failing.",
    seoTitle: "Dry Ridge & Dry Verge Somerset | Quantock Roofing",
    seoDescription:
      "Dry ridge and dry verge installation across Somerset, Bristol and Devon. Mechanically fixed systems for lower-maintenance roof edges.",
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
    relatedServices: ["roof-repairs", "new-roofs", "fascias-soffits-guttering"],
    image: "/images/projects/dry-ridge-tiled-roof.jpg",
    icon: "shield",
    ctaText: "Ask about dry ridge or verge",
    trustNote: "We fit systems only where they suit the roof detail.",
    bestFor: ["Failing mortar", "Gable edge repairs", "Lower-maintenance tiled roofs"],
    commonQuestions: ["Is my roof suitable?", "Can it be repaired instead?", "How long will it take?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Emergency Roof Repairs",
    slug: "emergency-roof-repairs",
    shortDescription:
      "Urgent leak, storm damage and make-safe enquiries handled as availability and conditions allow.",
    description:
      "When water is coming in or storm damage has left a roof unsafe, the priority is calm advice and a safe next step. Our emergency line accepts urgent roofing enquiries, with attendance subject to availability, weather, access and safety.",
    heroTitle: "Urgent roofing advice when it cannot wait",
    heroSubtitle:
      "Leak and storm-damage enquiries across the South West, with honest guidance and no guaranteed attendance claim.",
    seoTitle: "Emergency Roof Repairs Somerset, Bristol & Devon",
    seoDescription:
      "Emergency roofing enquiries for leaks and storm damage across Somerset, Bristol and Devon. Attendance subject to availability, access, weather and safety.",
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
    image: "/images/projects/dry-ridge-chimney-tiled-roof.jpg",
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
      "Chimney flashing, leadwork, valley and roof junction repairs across Somerset, Bristol and Devon. Free written quotes.",
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
    relatedServices: ["roof-repairs", "new-roofs", "emergency-roof-repairs"],
    image: "/images/projects/dry-ridge-chimney-tiled-roof.jpg",
    icon: "layers",
    ctaText: "Ask about leadwork repairs",
    trustNote: "We look for the real leak path, not just the most obvious mark.",
    bestFor: ["Chimney leaks", "Valleys and abutments", "Period roof details"],
    commonQuestions: ["Is it the flashing?", "Can it be repaired?", "Will scaffolding be needed?"],
    proofPoints: sharedProofPoints,
  },
  {
    name: "Roof Maintenance",
    slug: "roof-maintenance",
    shortDescription:
      "Roof inspections, preventative maintenance and early leak checks before small defects become expensive.",
    description:
      "Regular roof checks can catch slipped tiles, blocked gutters, failing mortar and early leak points before they become bigger problems. We offer practical roof inspection and maintenance advice with no pressure.",
    heroTitle: "Roof maintenance that prevents surprises",
    heroSubtitle:
      "Roof inspections and preventative maintenance across Somerset, Bristol and Devon.",
    seoTitle: "Roof Maintenance Somerset, Bristol & Devon | Quantock Roofing",
    seoDescription:
      "Roof inspections, preventative roof maintenance and early leak checks across Somerset, Bristol and Devon. Free advice and written quotes.",
    benefits: [
      "Early leak and defect checks",
      "Gutter and roofline issues identified",
      "Practical maintenance recommendations",
      "Clear written next steps",
    ],
    problemsSolved: [
      "Small leaks that are hard to trace",
      "Blocked or failing rainwater goods",
      "Loose ridge, verge, tile or slate details",
      "Uncertainty before buying or renovating a property",
    ],
    whatsIncluded: [
      "Visual roof condition check where access allows",
      "Photo-led advice where helpful",
      "Maintenance or repair recommendations",
      "Quote for any agreed remedial work",
    ],
    process: roofingProcess,
    faqs: [
      { question: "How often should a roof be checked?", answer: "After severe weather and periodically as the roof ages. Older roofs, exposed locations and flat roofs benefit from more regular checks." },
      { question: "Can you inspect from photos?", answer: "Photos can help us understand obvious issues, but some defects need a safe in-person inspection before quoting." },
      { question: "Do you clean gutters?", answer: "Where gutter or roofline maintenance is part of the agreed scope, we can advise on the right next step." },
    ],
    relatedServices: ["roof-repairs", "fascias-soffits-guttering", "dry-ridge-dry-verge"],
    image: "/images/projects/drone-survey-tiled-roof-03.jpg",
    icon: "wrench",
    ctaText: "Ask about roof maintenance",
    trustNote: "A small check now can save a much bigger repair later.",
    bestFor: ["Older roofs", "Pre-winter checks", "Early leak detection"],
    commonQuestions: ["Is this urgent?", "Can it wait?", "What should be maintained?"],
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
