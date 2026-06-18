export interface Faq {
  question: string;
  answer: string;
}

export interface FaqGroup {
  group: string;
  items: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    group: "Getting started",
    items: [
      {
        question: "How do I get a roofing quote?",
        answer:
          "Call, WhatsApp photos, book an inspection or use the quote form. We will ask a few practical questions, then arrange the right next step for a free written quote.",
      },
      {
        question: "Is the quote really free?",
        answer:
          "Yes. Quotes are free and there is no obligation. You can take your time to decide, and we will not pressure you.",
      },
      {
        question: "Can I send roof photos first?",
        answer:
          "Yes. Photos by WhatsApp are useful for leaks, storm damage, slipped tiles, roofline issues and flat roofs. Take them safely from the ground or a window; do not climb onto the roof.",
      },
      {
        question: "Do you offer emergency roofing help?",
        answer:
          "Urgent roofing enquiries are welcomed on the mobile line. Attendance is subject to availability, weather, access and safety, so we will never guarantee an arrival time we cannot safely deliver.",
      },
    ],
  },
  {
    group: "Quotes & pricing",
    items: [
      {
        question: "How is the price worked out?",
        answer:
          "Roofing prices depend on access, scaffold requirements, roof size, pitch, materials, detailing and the condition found during inspection. Your quote sets out the scope clearly before work is booked.",
      },
      {
        question: "Are there hidden costs?",
        answer:
          "No. Your written quote explains what is included. If hidden timber damage or extra work is discovered once a roof is opened, we show you and agree the next step before carrying on.",
      },
      {
        question: "Do roof repairs have a call-out charge?",
        answer:
          "Standard quotation visits are free. Emergency, make-safe or investigative work may be priced separately, and any cost is agreed before work starts.",
      },
    ],
  },
  {
    group: "The work itself",
    items: [
      {
        question: "How soon can you start?",
        answer:
          "Lead times depend on the job, weather and current workload. Urgent leaks are prioritised where practical, and planned work is scheduled with a realistic timescale in writing.",
      },
      {
        question: "Will I need scaffolding?",
        answer:
          "For full roofs and many roofline jobs, usually yes. Where scaffolding is needed, it is included in the written quotation so there are no surprises.",
      },
      {
        question: "What guarantee do you provide?",
        answer:
          "New tiled and slate roofs carry a 20-year workmanship guarantee. Flat roofs, roofline and repairs have guarantee terms appropriate to the work and existing roof condition, confirmed in writing.",
      },
      {
        question: "Do you clean up afterwards?",
        answer:
          "Yes. Waste removal, tidy working and a final check are part of the quoted scope unless we agree something different in writing.",
      },
    ],
  },
  {
    group: "Coverage",
    items: [
      {
        question: "Which areas do you cover?",
        answer:
          "We are based near Bridgwater and cover Somerset, Bristol and selected parts of Devon.",
      },
      {
        question: "Do you have branch offices in every town?",
        answer:
          "No. We are one local team near Bridgwater and travel to the areas listed. We do not claim fake offices in towns where we do not have premises.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[2],
  faqGroups[1].items[1],
  faqGroups[3].items[0],
];
