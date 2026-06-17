import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadActionCard } from "@/components/ui/LeadActionCard";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Four lead paths, each explained for a different kind of customer.
 * Multiple paths = more conversions: talkers call, texters WhatsApp,
 * planners use forms, busy people book callbacks.
 */
export function LeadPathSection() {
  return (
    <section className="section-pad cv-auto" aria-label="Ways to get in touch">
      <Container>
        <SectionHeading
          eyebrow="Get in touch your way"
          title="Choose whichever feels easiest"
          description="Every option gets the same honest advice and a clear next step. Pick the one that suits how you like to communicate."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <LeadActionCard
              icon="phone"
              title="Call us"
              description="Best when you want answers right now, or the job is urgent."
              href={telHref()}
              cta={`Call ${site.phoneDisplay}`}
              intent="phone"
              location="lead_paths"
            />
          </Reveal>
          <Reveal delay={80}>
            <LeadActionCard
              icon="whatsapp"
              title="WhatsApp us"
              description="Best when you'd rather message — send photos and get a quick reply."
              href={createWhatsAppLink({ page: "lead_paths" })}
              cta="Start a chat"
              intent="whatsapp"
              location="lead_paths"
            />
          </Reveal>
          <Reveal delay={160}>
            <LeadActionCard
              icon="file-text"
              title="Get a quote"
              description="Best when you know what you need and want a clear written price."
              href="/quote"
              cta="Get a Free Quote"
              intent="quote"
              location="lead_paths"
            />
          </Reveal>
          <Reveal delay={240}>
            <LeadActionCard
              icon="calendar"
              title="Book a callback"
              description="Best when you're busy — pick a time and we'll call you."
              href="/booking"
              cta="Book a Callback"
              intent="booking"
              location="lead_paths"
            />
          </Reveal>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {site.defaultReassurance}
        </p>
      </Container>
    </section>
  );
}
