import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqGroups } from "@/data/faqs";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadFlowVisual } from "@/components/visuals/LeadFlowVisual";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = buildMetadata({
  title: "How It Works | From Enquiry to Done",
  description:
    "How Quantock Roofing works: send details, get honest advice, receive a written quote, then book roofing work clearly.",
  path: "/process",
});

const afterEnquiry = [
  {
    icon: "check" as const,
    title: "We confirm we've got it",
    description:
      "We'll acknowledge your enquiry and come back with the clearest next step as soon as practical.",
  },
  {
    icon: "chat" as const,
    title: "We ask the right questions",
    description:
      "Usually just two or three quick things — photos by WhatsApp often save a visit.",
  },
  {
    icon: "file-text" as const,
    title: "You get your quote or next step",
    description:
      "A written quote where possible, or a clear recommendation on what to do next.",
  },
  {
    icon: "calendar" as const,
    title: "You decide in your own time",
    description:
      "No chasing, no pressure calls. When you're ready, we book it in writing.",
  },
];

export default function ProcessPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="How it works"
        title="What actually happens when you enquire"
        subtitle="Most hesitation comes from not knowing what happens next. So here it is — the whole process, start to finish."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Process", path: "/process" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      >
        <div className="mt-10">
          <LeadFlowVisual />
        </div>
      </Hero>

      <ProcessSection showCta={false} />

      {/* After enquiry detail */}
      <section className="section-pad bg-surface" aria-label="After you enquire">
        <Container>
          <SectionHeading
            eyebrow="After you press send"
            title="What to expect once you've enquired"
            description="No black hole. Here's the exact sequence after your call, message, or form."
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {afterEnquiry.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="card-premium h-full p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon name={step.icon} className="h-5 w-5" />
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
          <Reveal className="mx-auto mt-12 max-w-xl text-center">
            <p className="text-lead">
              And if we&apos;re not the right fit for the job? We&apos;ll say
              so, and point you toward someone who is.
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqSection items={faqGroups[2].items} title="Booking & process questions" />
      <FinalCTA context="process_page" />
    </PageShell>
  );
}
