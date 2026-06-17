import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProcessIllustration } from "@/components/visuals/ProcessIllustration";
import { site } from "@/data/site";

export interface ProcessStep {
  title: string;
  description: string;
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Tell us what you need",
    description:
      "Call, WhatsApp, or use the 60-second form — whichever is easiest for you.",
  },
  {
    title: "Get honest advice",
    description:
      "We listen first, then recommend the right option — not the most expensive one.",
  },
  {
    title: "Receive a clear quote",
    description:
      "A written quote or clear next step, with nothing hidden. Decide in your own time.",
  },
  {
    title: "Book the work",
    description:
      "Pick a time that suits you. Everything is confirmed in writing.",
  },
  {
    title: "Aftercare & follow-up",
    description:
      "We check everything is exactly right — and we're easy to reach afterwards.",
  },
];

interface ProcessSectionProps {
  steps?: ProcessStep[];
  showCta?: boolean;
}

/** The five-step path from enquiry to done — friction removal in section form */
export function ProcessSection({ steps = defaultSteps, showCta = true }: ProcessSectionProps) {
  return (
    <section className="section-pad cv-auto" aria-label="How it works">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from enquiry to done"
          description="You'll always know what happens next. No chasing, no surprises."
        />
        <Reveal className="mb-12 hidden md:block">
          <ProcessIllustration />
        </Reveal>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="card-premium h-full p-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        {showCta && (
          <div className="mt-12 text-center">
            <Button
              href="/quote"
              size="lg"
              intent="quote"
              trackLocation="process_section"
              trackLabel={site.primaryCTA}
            >
              Start with a free quote
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              {site.defaultReassurance}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
