import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TrustIllustration } from "@/components/visuals/TrustIllustration";
import { AppleDepthCards } from "@/components/visuals/AppleDepthCards";

export const metadata: Metadata = buildMetadata({
  title: "About Quantock Roofing | Local Roofing Team Near Bridgwater",
  description:
    "About Quantock Roofing: a local roofing team near Bridgwater serving Somerset, Bristol and selected Devon towns.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="About"
        title="A local roofing team built on straight answers"
        subtitle="Quantock Roofing is based near Bridgwater and helps homeowners make clear, practical decisions about repairs, re-roofs, flat roofs and roofline work."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      <section className="section-pad" aria-label="Our story">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <AppleDepthCards>
                <p className="text-eyebrow mb-3">Our approach</p>
                <p className="text-title text-balance">
                  Repair what can be repaired. Replace what has genuinely
                  reached the end of its life. Put the advice in plain English.
                </p>
              </AppleDepthCards>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Roofing work without the runaround"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <p>
                  Quantock Roofing works from a base near Bridgwater, covering
                  Somerset, Bristol and selected areas of
                  Devon. The site is set up around the way roofing decisions
                  actually happen: something leaks, something looks tired, or a
                  roof has reached the point where the homeowner needs a clear
                  answer.
                </p>
                <p>
                  That answer should not be wrapped in pressure. We inspect,
                  explain what we can see, and give a written quote with the
                  scope and guarantee terms set out before work starts.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="Values"
        title="What we hold ourselves to"
        description="The basics matter most: safe access, honest advice, tidy work and a written scope."
        features={[
          {
            icon: "chat",
            title: "Straight answers",
            description:
              "If a repair is sensible, we say so. If replacement is the better answer, we explain why.",
          },
          {
            icon: "shield",
            title: "Workmanship guarantees",
            description:
              "New tiled and slate roofs carry a 20-year workmanship guarantee, with other work covered by written terms.",
          },
          {
            icon: "clock",
            title: "Respect your time",
            description:
              "Quotes, timings and next steps are communicated clearly so you are not left chasing.",
          },
          {
            icon: "map-pin",
            title: "Genuinely local",
            description:
              "One team near Bridgwater serving the South West. No fake branch-office claims.",
          },
          {
            icon: "file-text",
            title: "Everything in writing",
            description:
              "Scope, materials, exclusions and guarantee terms are set out before work starts.",
          },
          {
            icon: "star",
            title: "Proof over claims",
            description:
              "Reviews and project proof are added only when they are genuine and verifiable.",
          },
        ]}
      />

      <section className="section-pad bg-surface" aria-label="Trust points">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <TrustIllustration />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Trust"
                title="The practical details that matter"
                align="left"
                className="mb-6"
              />
              <ul className="space-y-4 text-[0.9375rem] text-muted-foreground">
                {site.trustPoints.map((point) => (
                  <li key={point.title}>
                    <p className="font-semibold text-foreground">{point.title}</p>
                    <p className="mt-1 text-sm">{point.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ComparisonSection />
      <ProcessSection />
      <FinalCTA context="about_page" />
    </PageShell>
  );
}
