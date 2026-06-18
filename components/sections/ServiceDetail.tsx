import Image from "next/image";
import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";

/** The core informational sections of a service page */
export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      {/* Problem → outcome */}
      <section className="section-pad" aria-label="The problem we solve">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="card-premium h-full p-8">
                <p className="text-eyebrow mb-3">The problem</p>
                <h2 className="text-title">What customers come to us with</h2>
                <ul className="mt-6 space-y-3.5">
                  {service.problemsSolved.map((problem) => (
                    <li key={problem} className="flex items-start gap-3 text-[0.9375rem] text-muted-foreground">
                      <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-danger/60" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-premium h-full border-success/30 p-8">
                <p className="text-eyebrow mb-3">The outcome</p>
                <h2 className="text-title">What you get instead</h2>
                <ul className="mt-6 space-y-3.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-[0.9375rem] text-muted-foreground">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What's included + who it's for */}
      <section className="section-pad bg-surface" aria-label="What's included">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What's included"
                title={`What ${service.name} covers`}
                description={service.description}
                align="left"
              />
              <ul className="space-y-3">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem]">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Best for
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.bestFor.map((item) => (
                    <li key={item}>
                      <Badge tone="primary">{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Proof points
                </p>
                <ul className="mt-3 space-y-2">
                  {service.proofPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-premium)]">
                <Image
                  src={service.image}
                  alt={`${service.name} roofing project image`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-pad" aria-label="How this service works">
        <Container>
          <SectionHeading
            eyebrow="The process"
            title="How it works, step by step"
            description={service.trustNote}
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="card-premium h-full p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
