import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpandableCard } from "@/components/ui/ExpandableCard";
import { Reveal } from "@/components/ui/Reveal";
import type { IconName } from "@/components/ui/Icon";

export function WhyChooseUs() {
  return (
    <section className="section-pad cv-auto bg-surface" aria-label="Why choose us">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Built around clear, careful roofing decisions"
          description="No pressure tactics. No vague promises. Just the things that matter when you are choosing who to trust with the roof over your head."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.trustPoints.map((point, i) => (
            <Reveal key={point.title} delay={(i % 3) * 80}>
              <ExpandableCard
                title={point.title}
                summary="Tap for details."
                icon={point.icon as IconName}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.detail}
                </p>
              </ExpandableCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
