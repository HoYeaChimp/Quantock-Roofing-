export interface CaseStudy {
  title: string;
  service: string;
  area: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  beforeLabel: string;
  afterLabel: string;
  isPlaceholder: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Grey tiled roof replacement",
    service: "New Roofs",
    area: "Somerset",
    summary:
      "A full tiled roof replacement using verified own-job photography from the existing Quantock Roofing project gallery.",
    challenge:
      "The old roof covering had reached the point where repeated repairs were no longer the sensible long-term answer.",
    approach:
      "The roof was stripped, prepared with membrane and battens, then retiled with careful ridge, verge and flashing details.",
    outcome:
      "A clean, weather-ready tiled roof finish, with workmanship guarantee terms confirmed as part of the quoted work.",
    beforeLabel: "Before",
    afterLabel: "Finished tiled roof",
    isPlaceholder: false,
  },
  {
    title: "Slate re-roof in progress",
    service: "Slate Roofs",
    area: "Somerset",
    summary:
      "A slate roofing project showing the careful setting out and roof preparation that sits behind the finished result.",
    challenge:
      "Slate roofs need neat coursing, suitable fixings and careful junction details to perform as well as they look.",
    approach:
      "The roof was prepared in stages, with the slate work and details handled methodically rather than rushed.",
    outcome:
      "A sharper, more durable roof covering suited to the character of the property.",
    beforeLabel: "During works",
    afterLabel: "Slate re-roof detail",
    isPlaceholder: false,
  },
  {
    title: "Flat roof renewal",
    service: "Flat Roofs",
    area: "South West",
    summary:
      "A flat roof renewal example from the project image set, used to show the kind of practical flat roof work available.",
    challenge:
      "Flat roofs often fail at edges, outlets or old coverings, so the system and deck condition need checking before replacement.",
    approach:
      "The roof was assessed, prepared and renewed with a suitable flat roof covering and tidy edge details.",
    outcome:
      "A cleaner, more reliable flat roof surface with the specification explained before work was agreed.",
    beforeLabel: "Before",
    afterLabel: "Renewed flat roof",
    isPlaceholder: false,
  },
];
