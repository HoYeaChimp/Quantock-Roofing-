export interface AreaFaq {
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  slug: string;
  region: string;
  intro: string;
  nearbyAreas: string[];
  priority: boolean;
  seoTitle: string;
  seoDescription: string;
  localProof: string;
  commonNeeds: string[];
  servicesAvailable: string[];
  faqs: AreaFaq[];
  internalLinks: { label: string; href: string }[];
  noOfficeClaim: boolean;
}

const allServices = [
  "new-roofs",
  "roof-repairs",
  "flat-roofs",
  "tiled-roofs",
  "slate-roofs",
  "fascias-soffits-guttering",
  "dry-ridge-dry-verge",
  "emergency-roof-repairs",
  "chimney-leadwork",
  "roof-maintenance",
];

function area(
  name: string,
  slug: string,
  region: string,
  intro: string,
  nearbyAreas: string[],
  priority = false,
): ServiceArea {
  return {
    name,
    slug,
    region,
    intro,
    nearbyAreas,
    priority,
    seoTitle: `Roofers in ${name} | Quantock Roofing`,
    seoDescription: `New roofs, roof repairs, flat roofs, roofline and emergency roofing enquiries in ${name}. Free written quotes from Quantock Roofing.`,
    localProof:
      "We serve this area from our Bridgwater base and can discuss recent comparable roofing work when you enquire.",
    commonNeeds: [
      "Leak tracing and repair after heavy rain",
      "New tiled and slate roof quotations",
      "Flat roof replacement on extensions and garages",
      "Fascia, soffit and guttering renewal",
    ],
    servicesAvailable: allServices,
    faqs: [
      {
        question: `Do you have an office in ${name}?`,
        answer:
          "No. Quantock Roofing is one team based near Bridgwater; we travel to customers across the South West and never pretend to have branch offices we do not have.",
      },
      {
        question: `Can you quote roofing work in ${name}?`,
        answer:
          "Yes. Send your postcode and photos if you have them, and we will confirm the best next step for a free written quote.",
      },
    ],
    internalLinks: [
      { label: "Get a free quote", href: "/quote" },
      { label: "Roof repairs", href: "/services/roof-repairs" },
      { label: "New roofs", href: "/services/new-roofs" },
    ],
    noOfficeClaim: true,
  };
}

export const serviceAreas: ServiceArea[] = [
  area(
    "Somerset",
    "somerset",
    "County hub",
    "Somerset is the core coverage area for Quantock Roofing. From our base near Bridgwater we quote new roofs, roof repairs, flat roofs, roofline, dry ridge, dry verge and leadwork across towns, villages and coastal properties throughout the county.",
    ["bridgwater", "taunton", "burnham-on-sea"],
    true,
  ),
  area(
    "Bristol",
    "bristol",
    "Regional hub",
    "We cover Bristol and nearby towns from our Bridgwater base, quoting roof repairs, new roofs, flat roofs and leadwork for terraces, older properties, extensions and modern homes without pretending to have a city office.",
    ["clifton", "bedminster", "keynsham"],
    true,
  ),
  area(
    "Devon",
    "devon",
    "County hub",
    "Quantock Roofing covers selected Devon roofing work by appointment, including roof repairs, new roof quotes, flat roofs and roofline work where the scope, access and schedule make sense.",
    ["exeter", "tiverton", "honiton"],
    true,
  ),
  area(
    "Bridgwater",
    "bridgwater",
    "Somerset",
    "Bridgwater is our closest major town. From Stretcholt we cover roof repairs, new roofs, flat roofs and roofline work across Bridgwater, Wembdon, Hamp, North Petherton and the surrounding villages.",
    ["taunton", "highbridge", "burnham-on-sea"],
    true,
  ),
  area(
    "Taunton",
    "taunton",
    "Somerset",
    "We cover Taunton and nearby villages with new roof quotations, leak repairs, leadwork, flat roofs and roofline renewal for period homes, estates and newer developments.",
    ["bridgwater", "wellington", "wells"],
    true,
  ),
  area(
    "Burnham-on-Sea",
    "burnham-on-sea",
    "Somerset",
    "Coastal roofs around Burnham-on-Sea need secure fixings, sound flashings and materials chosen for exposed weather. We handle storm repairs, roofline renewal and re-roofs across the town and nearby villages.",
    ["highbridge", "bridgwater", "weston-super-mare"],
    true,
  ),
  area(
    "Highbridge",
    "highbridge",
    "Somerset",
    "Highbridge is a short run from our base, making it practical for inspections, roof repairs, flat roofs and roofline quotes across the town and surrounding villages.",
    ["burnham-on-sea", "bridgwater", "weston-super-mare"],
    true,
  ),
  area(
    "Weston-super-Mare",
    "weston-super-mare",
    "North Somerset",
    "We quote roofing work across Weston-super-Mare, Worle and nearby villages, with particular care for coastal exposure, wind-driven rain and low-maintenance roofline upgrades.",
    ["burnham-on-sea", "bristol", "highbridge"],
    true,
  ),
  area(
    "Wells",
    "wells",
    "Somerset",
    "We cover Wells and the Mendip villages with roof repairs, slate work, leadwork, new roof quotes and roofline renewal for both older and modern homes.",
    ["taunton", "bath", "bridgwater"],
    false,
  ),
  area(
    "Wellington",
    "wellington",
    "Somerset",
    "Wellington and the surrounding villages are covered for leak repairs, new tiled roofs, chimney and flashing work, flat roofs and guttering.",
    ["taunton", "bridgwater", "wells"],
    false,
  ),
  area(
    "Exeter",
    "exeter",
    "Devon",
    "We cover selected Devon work including Exeter, where exposed weather, older roof details and flat roofs often need careful assessment and clear written quotes.",
    ["taunton", "wellington", "bristol"],
    false,
  ),
  area("Glastonbury", "glastonbury", "Somerset", "We quote roof repairs, new tiled roofs, flat roofs and leadwork in Glastonbury, with practical advice for older roofs, weather exposure and roofline maintenance.", ["street", "wells", "bridgwater"]),
  area("Street", "street", "Somerset", "Street is covered for roofing quotes, roof repairs, flat roofs and fascia, soffit and guttering work from our Bridgwater base.", ["glastonbury", "wells", "somerton"]),
  area("Yeovil", "yeovil", "Somerset", "We cover selected roofing work in Yeovil, including new roofs, repairs, flat roofs and roofline renewal where the scope and schedule are practical.", ["chard", "ilminster", "somerton"]),
  area("Chard", "chard", "Somerset", "Chard homeowners can contact us for clear roofing advice, written quotes, leak repairs, tiled roofs and roofline work.", ["ilminster", "yeovil", "taunton"]),
  area("Ilminster", "ilminster", "Somerset", "We quote roofing work in Ilminster, including roof repairs, slate and tiled roofs, leadwork and flat roof replacement.", ["chard", "taunton", "yeovil"]),
  area("Frome", "frome", "Somerset", "Frome is covered for selected roofing enquiries, especially repairs, slate roof advice, roofline and written new roof quotes.", ["wells", "shepton-mallet", "bath"]),
  area("Shepton Mallet", "shepton-mallet", "Somerset", "We serve Shepton Mallet for roof repairs, leadwork, flat roofs, roofline and written roofing quotations.", ["wells", "frome", "glastonbury"]),
  area("Cheddar", "cheddar", "Somerset", "Cheddar properties can need careful roofline, guttering and storm-exposure checks; we quote repairs, new roofs and flat roofs by appointment.", ["wells", "highbridge", "bridgwater"]),
  area("Clevedon", "clevedon", "North Somerset", "Coastal exposure around Clevedon makes sound fixings, flashings and gutters important. We quote roof repairs, roofline and new roofs by appointment.", ["portishead", "nailsea", "bristol"]),
  area("Portishead", "portishead", "North Somerset", "We cover Portishead for selected roofing work, including storm repairs, flat roofs, new roof quotes and low-maintenance roofline.", ["clevedon", "bristol", "nailsea"]),
  area("Nailsea", "nailsea", "North Somerset", "Nailsea homeowners can ask us about roof repairs, tiled roofs, fascias, soffits, guttering and flat roof replacement.", ["clevedon", "portishead", "bristol"]),
  area("Somerton", "somerton", "Somerset", "Somerton is covered for roof repairs, roof maintenance, flat roofs and written quotes for tiled or slate roof work.", ["street", "langport", "yeovil"]),
  area("Langport", "langport", "Somerset", "We quote roof repairs, roofline and maintenance work around Langport, with honest guidance on whether repair or replacement is sensible.", ["somerton", "taunton", "bridgwater"]),
  area("Clifton", "clifton", "Bristol", "Clifton roofing work often involves older roof details, slate, leadwork and access planning. We quote repairs and replacement work by appointment.", ["redland", "bristol", "southville"]),
  area("Redland", "redland", "Bristol", "We cover Redland for roof repairs, slate and tiled roof advice, chimney leadwork and flat roof enquiries.", ["clifton", "downend", "bristol"]),
  area("Bedminster", "bedminster", "Bristol", "Bedminster homeowners can contact us for roof repairs, flat roofs, roofline and written quotes for tiled or slate roof work.", ["southville", "totterdown", "bristol"]),
  area("Southville", "southville", "Bristol", "We quote roofing work in Southville, including repairs, leadwork, flat roofs and roofline upgrades.", ["bedminster", "clifton", "bristol"]),
  area("Totterdown", "totterdown", "Bristol", "Totterdown is covered for roof repairs, chimney and leadwork, flat roofs and written roofing quotations.", ["bedminster", "brislington", "bristol"]),
  area("Brislington", "brislington", "Bristol", "We cover Brislington for roof repairs, roofline, tiled roof quotes and flat roofing work by appointment.", ["totterdown", "keynsham", "bristol"]),
  area("Keynsham", "keynsham", "Bristol", "Keynsham customers can ask us for roof repairs, new roof advice, flat roofs and roofline quotations.", ["brislington", "kingswood", "bristol"]),
  area("Kingswood", "kingswood", "Bristol", "We quote roofing work in Kingswood, including repairs, tiled roofs, dry ridge and verge, and fascia, soffit and guttering work.", ["downend", "keynsham", "bristol"]),
  area("Filton", "filton", "Bristol", "Filton is covered for roof repairs, flat roofs, roofline and written roofing quotes from our Bridgwater-based team.", ["patchway", "bradley-stoke", "bristol"]),
  area("Patchway", "patchway", "Bristol", "We serve Patchway for roof repairs, maintenance checks, flat roofs and roofline work by appointment.", ["filton", "bradley-stoke", "stoke-gifford"]),
  area("Bradley Stoke", "bradley-stoke", "Bristol", "Bradley Stoke customers can contact us for roofing repairs, flat roofs, roofline and new roof quotes.", ["patchway", "stoke-gifford", "bristol"]),
  area("Stoke Gifford", "stoke-gifford", "Bristol", "We quote roof repairs, roofline and flat roof work in Stoke Gifford, with clear advice and no branch-office claim.", ["bradley-stoke", "filton", "patchway"]),
  area("Yate", "yate", "Bristol", "Yate is covered for selected roofing enquiries including repairs, tiled roofs, leadwork and guttering.", ["thornbury", "downend", "bristol"]),
  area("Thornbury", "thornbury", "Bristol", "We cover Thornbury for roofing quotes by appointment, including roof repairs, new roofs, dry ridge, dry verge and roofline.", ["yate", "bradley-stoke", "bristol"]),
  area("Emersons Green", "emersons-green", "Bristol", "Emersons Green homeowners can ask us about roof repairs, tiled roof quotes, flat roofs and roofline work.", ["downend", "kingswood", "bristol"]),
  area("Downend", "downend", "Bristol", "Downend is covered for roof repairs, roofline, chimney leadwork and written roofing quotations.", ["emersons-green", "kingswood", "bristol"]),
  area("Long Ashton", "long-ashton", "Bristol", "We quote roofing work in Long Ashton, including leak repairs, flat roofs, new roofs and fascias, soffits and guttering.", ["bristol", "nailsea", "bedminster"]),
  area("Plymouth", "plymouth", "Devon", "We cover selected Plymouth roofing enquiries by appointment, focusing on practical written quotes where the scope and schedule make sense.", ["exeter", "torquay", "tavistock"]),
  area("Torquay", "torquay", "Devon", "Coastal Devon roofs around Torquay can need careful attention to wind-driven rain, fixings and roofline. We quote selected work by appointment.", ["paignton", "newton-abbot", "exeter"]),
  area("Paignton", "paignton", "Devon", "Paignton is covered for selected roof repairs, flat roofs, roofline and new roof quotations where practical.", ["torquay", "newton-abbot", "totnes"]),
  area("Newton Abbot", "newton-abbot", "Devon", "We quote selected roofing work in Newton Abbot, including flat roofs, repairs, leadwork and roofline.", ["torquay", "teignmouth", "exeter"]),
  area("Barnstaple", "barnstaple", "Devon", "Barnstaple enquiries are handled by appointment for suitable roofing work, including repairs, new roofs and flat roofs.", ["bideford", "tiverton", "exeter"]),
  area("Bideford", "bideford", "Devon", "Bideford is covered for selected roofing quotes, with honest confirmation of availability before an inspection is booked.", ["barnstaple", "okehampton", "tiverton"]),
  area("Tiverton", "tiverton", "Devon", "Tiverton is a practical Devon coverage point for repairs, roofline, flat roofs and written new roof quotes.", ["exeter", "cullompton", "honiton"]),
  area("Cullompton", "cullompton", "Devon", "We cover Cullompton for roof repairs, roof maintenance, flat roofs and roofline work by appointment.", ["tiverton", "exeter", "honiton"]),
  area("Honiton", "honiton", "Devon", "Honiton customers can contact us for selected roofing quotes, including repairs, leadwork, flat roofs and roofline.", ["exeter", "sidmouth", "tiverton"]),
  area("Exmouth", "exmouth", "Devon", "Exmouth roofing work may involve coastal exposure and roofline issues; we quote selected repairs, flat roofs and replacement work.", ["sidmouth", "exeter", "dawlish"]),
  area("Sidmouth", "sidmouth", "Devon", "Sidmouth is covered for selected roof repairs, roofline, leadwork and flat roof enquiries by appointment.", ["exmouth", "honiton", "exeter"]),
  area("Dawlish", "dawlish", "Devon", "We quote selected roofing work in Dawlish, including storm-exposed roof repairs, flat roofs and roofline.", ["teignmouth", "exmouth", "newton-abbot"]),
  area("Teignmouth", "teignmouth", "Devon", "Teignmouth customers can ask about roof repairs, flat roofs, roofline and new roof quotations by appointment.", ["dawlish", "newton-abbot", "torquay"]),
  area("Okehampton", "okehampton", "Devon", "Okehampton is covered for selected roofing work where access and scheduling are practical, including repairs and written roof quotes.", ["tavistock", "crediton", "exeter"]),
  area("Tavistock", "tavistock", "Devon", "We quote selected roof repairs, flat roofs and roofline work in Tavistock by appointment.", ["okehampton", "plymouth", "ivybridge"]),
  area("Totnes", "totnes", "Devon", "Totnes is covered for selected roofing enquiries, including slate and tiled roof repairs, leadwork and flat roofs.", ["paignton", "ivybridge", "newton-abbot"]),
  area("Ivybridge", "ivybridge", "Devon", "Ivybridge customers can request written quotes for suitable roofing work including repairs, roofline and flat roofs.", ["plymouth", "totnes", "tavistock"]),
  area("Crediton", "crediton", "Devon", "Crediton is covered for selected roof repairs, maintenance checks, flat roofs and written roofing quotations.", ["exeter", "okehampton", "tiverton"]),
];

export function getArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearbyAreas
    .map((slug) => getArea(slug))
    .filter((a): a is ServiceArea => Boolean(a));
}

export const priorityAreas = serviceAreas.filter((a) => a.priority);
