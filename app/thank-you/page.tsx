import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { priorityAreas } from "@/data/serviceAreas";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumBackground } from "@/components/visuals/PremiumBackground";
import { ThankYouTracker } from "@/components/ThankYouTracker";

export const metadata: Metadata = buildMetadata({
  title: "Thank You | We've Got Your Enquiry",
  description: "Your enquiry has been received — here's what happens next.",
  path: "/thank-you",
  noIndex: true,
});

const nextSteps = [
  {
    icon: "check" as const,
    title: "Your enquiry is in",
    description: "It's gone straight to the team — not into a black hole.",
  },
  {
    icon: "chat" as const,
    title: "We review it properly",
    description:
      "We read what you sent and work out the most useful way to respond.",
  },
  {
    icon: "phone" as const,
    title: "You hear back from us",
    description:
      "With a clear quote, inspection option or practical next step.",
  },
];

export default function ThankYouPage() {
  return (
    <PageShell>
      <ThankYouTracker />
      <section className="relative overflow-hidden pb-20 pt-40">
        <PremiumBackground variant="hero" intensity="medium" />
        <Container className="relative text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success text-white shadow-[var(--shadow-premium)]">
            <Icon name="check" className="h-8 w-8" />
          </span>
          <h1 className="text-display mt-7">Thank you — it&apos;s with us</h1>
          <p className="text-lead mx-auto mt-5 max-w-xl">
            Your enquiry has been received. {site.defaultReassurance}
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="card-premium h-full p-6 text-left">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-semibold tracking-tight">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button
              href={createWhatsAppLink({ page: "thank_you" })}
              variant="whatsapp"
              intent="whatsapp"
              trackLocation="thank_you"
              size="lg"
            >
              <Icon name="whatsapp" className="h-4.5 w-4.5" />
              Need it faster? WhatsApp us
            </Button>
            <Button
              href={telHref()}
              variant="outline"
              intent="phone"
              trackLocation="thank_you"
              size="lg"
            >
              <Icon name="phone" className="h-4 w-4 text-primary" />
              Call {site.phoneDisplay}
            </Button>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-left">
            <h2 className="text-center text-title">While you wait</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Explore services
                </p>
                <ul className="mt-3 space-y-2">
                  {services.slice(0, 4).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Areas we cover
                </p>
                <ul className="mt-3 space-y-2">
                  {priorityAreas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/areas/${a.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
