import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadActionCard } from "@/components/ui/LeadActionCard";
import { Reveal } from "@/components/ui/Reveal";

/** Compact contact action cards — used near the end of pages */
export function ContactCTA() {
  return (
    <section className="section-pad cv-auto" aria-label="Contact options">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Prefer to just talk to someone?"
          description="Reach us however suits you — we're easy to get hold of."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <LeadActionCard
              icon="phone"
              title="Call"
              description={`Speak to us directly on ${site.phoneDisplay}.`}
              href={telHref()}
              cta="Call now"
              intent="phone"
              location="contact_cta"
            />
          </Reveal>
          <Reveal delay={80}>
            <LeadActionCard
              icon="whatsapp"
              title="WhatsApp"
              description="Message us — photos welcome, quick replies."
              href={createWhatsAppLink({ page: "contact_cta" })}
              cta="Start a chat"
              intent="whatsapp"
              location="contact_cta"
            />
          </Reveal>
          <Reveal delay={160}>
            <LeadActionCard
              icon="file-text"
              title="Free quote"
              description="The 60-second form — clear written price, no pressure."
              href="/quote"
              cta="Get a quote"
              intent="quote"
              location="contact_cta"
            />
          </Reveal>
          <Reveal delay={240}>
            <LeadActionCard
              icon="calendar"
              title="Callback"
              description="Pick a time and we'll call you — no waiting on hold."
              href="/booking"
              cta="Book a callback"
              intent="booking"
              location="contact_cta"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
