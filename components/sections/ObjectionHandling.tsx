import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export interface Objection {
  objection: string;
  response: string;
}

const defaultObjections: Objection[] = [
  {
    objection: "“I don't want to be pressured into anything.”",
    response:
      "You won't be. Quotes are free, written, and yours to think about. We don't do follow-up pressure calls.",
  },
  {
    objection: "“I'm not sure what it should cost.”",
    response:
      "We'll explain what affects the price and put everything in writing before you decide anything.",
  },
  {
    objection: "“I've been let down by trades/providers before.”",
    response:
      "Understood. That is why the scope is put in writing and the next step is kept clear.",
  },
  {
    objection: "“I don't know if I even need this service.”",
    response:
      "Tell us what's going on and we'll tell you honestly — including when the answer is “you don't need us”.",
  },
];

interface ObjectionHandlingProps {
  items?: Objection[];
  title?: string;
}

/** Answers the doubts that stop people enquiring */
export function ObjectionHandling({
  items = defaultObjections,
  title = "Wondering if you should even enquire?",
}: ObjectionHandlingProps) {
  return (
    <section className="section-pad cv-auto bg-surface" aria-label="Common concerns">
      <Container>
        <SectionHeading
          eyebrow="No pressure"
          title={title}
          description="The concerns we hear most — answered straight."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.objection} delay={(i % 2) * 80}>
              <div className="card-premium h-full p-7">
                <p className="flex items-start gap-3 font-semibold tracking-tight">
                  <Icon name="chat" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item.objection}
                </p>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">
                  {item.response}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
