import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ResultsPreview() {
  return (
    <section className="section-pad cv-auto" aria-label="Recent results">
      <Container>
        <SectionHeading
          eyebrow="Recent work"
          title="Roofing work with the details kept honest"
          description="A small selection of real own-job examples from the project image set. More photographed projects can be added as they are verified."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((study, i) => (
            <Reveal key={study.title} delay={i * 100}>
              <article className="card-premium flex h-full flex-col p-6 sm:p-7">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge tone="primary">{study.service}</Badge>
                  <Badge>{study.area}</Badge>
                </div>
                <h3 className="mt-4 font-semibold tracking-tight">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {study.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/results" variant="outline" trackLabel="all_results" trackLocation="results_preview">
            See more work
          </Button>
        </div>
      </Container>
    </section>
  );
}
