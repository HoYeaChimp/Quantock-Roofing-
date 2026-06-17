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
  "roofline-guttering",
  "dry-ridge-verge",
  "emergency-roofing",
  "chimney-leadwork",
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
    "Bristol",
    "bristol",
    "Bristol",
    "We cover Bristol and the wider area from our Bridgwater base, including roof repairs, new roofs, flat roofs and leadwork on Victorian terraces, modern estates and mixed commercial-residential streets.",
    ["bath", "weston-super-mare", "bridgwater"],
    true,
  ),
  area(
    "Bath",
    "bath",
    "Bath",
    "Bath's older stone homes, slate roofs and detailed junctions need careful roofing work. We quote repairs, slate work, flat roofs and roofline renewal across Bath and surrounding towns.",
    ["bristol", "wells", "taunton"],
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
