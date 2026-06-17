import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const withUs = [
  "A written quote before any commitment",
  "One reliable point of contact",
  "Honest advice — even if it means less work for us",
  "Clear timelines, confirmed in writing",
  "Tidy work and proper aftercare",
];

const without = [
  "Vague verbal estimates that change later",
  "Chasing people who don't call back",
  "Upselling you things you don't need",
  "\"We'll be there sometime next week\"",
  "Disappearing once the invoice is paid",
];

/** Honest expectation-setting comparison — no named competitors, no fake claims */
export function ComparisonSection() {
  return (
    <section className="section-pad cv-auto" aria-label="What to expect">
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title="What working with us should feel like"
          description="The bar for local services is often low. Here's what we hold ourselves to instead."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-premium h-full border-success/30 p-7 sm:p-8">
              <h3 className="font-semibold tracking-tight text-success">
                With us
              </h3>
              <ul className="mt-5 space-y-3.5">
                {withUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-premium h-full p-7 opacity-80 sm:p-8">
              <h3 className="font-semibold tracking-tight text-muted-foreground">
                What we hear too often elsewhere
              </h3>
              <ul className="mt-5 space-y-3.5">
                {without.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-danger/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
