import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/caseStudies";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BeforeAfterPlaceholder } from "@/components/visuals/BeforeAfterPlaceholder";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Recent Roofing Work | Quantock Roofing",
  description:
    "Recent Quantock Roofing work: new tiled roofs, slate roofing and flat roof examples from verified own-job project photos.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Recent work"
        title="Roofing work we can stand behind"
        subtitle="A small selection of own-job examples from the project image set. More projects can be added as new photos and permissions are verified."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Results", path: "/results" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      <section className="section-pad" aria-label="Case studies">
        <Container>
          <div className="space-y-10">
            {caseStudies.map((study, i) => (
              <Reveal key={study.title} delay={i * 60}>
                <article className="card-premium grid gap-8 p-7 sm:p-9 lg:grid-cols-2">
                  <BeforeAfterPlaceholder
                    beforeLabel={study.beforeLabel}
                    afterLabel={study.afterLabel}
                  />
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge tone="primary">{study.service}</Badge>
                      <Badge>{study.area}</Badge>
                    </div>
                    <h2 className="mt-4 text-title">{study.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {study.summary}
                    </p>
                    <dl className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                      <div>
                        <dt className="font-semibold text-foreground">The challenge</dt>
                        <dd className="mt-1">{study.challenge}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">Our approach</dt>
                        <dd className="mt-1">{study.approach}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">The outcome</dt>
                        <dd className="mt-1">{study.outcome}</dd>
                      </div>
                    </dl>
                    <div className="mt-6">
                      <Button
                        href="/quote"
                        intent="quote"
                        trackLocation="results_page"
                        trackLabel="similar_result"
                      >
                        Ask about similar roofing work
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA title="Want your roof looked at next?" context="results_page" />
    </PageShell>
  );
}
