import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/data/site";
import { faqGroups } from "@/data/faqs";
import { telHref, mailHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LeadActionCard } from "@/components/ui/LeadActionCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ImagePlaceholder } from "@/components/visuals/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Call, WhatsApp, or Message",
  description:
    "Contact Quantock Roofing by phone, WhatsApp, email or form for roofing quotes across Somerset, Bristol, Bath and Devon.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Contact"
        title="Get in touch — however suits you"
        subtitle={site.defaultReassurance}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      {/* Contact method cards */}
      <section className="section-pad" aria-label="Contact methods">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <LeadActionCard
                icon="phone"
                title="Call"
                description={`Fastest for urgent jobs — ${site.phoneDisplay}.`}
                href={telHref()}
                cta="Call now"
                intent="phone"
                location="contact_page"
              />
            </Reveal>
            <Reveal delay={80}>
              <LeadActionCard
                icon="whatsapp"
                title="WhatsApp"
                description="Message us — photos welcome, quick replies."
                href={createWhatsAppLink({ page: "contact_page" })}
                cta="Start a chat"
                intent="whatsapp"
                location="contact_page"
              />
            </Reveal>
            <Reveal delay={160}>
              <LeadActionCard
                icon="file-text"
                title="Free quote"
                description="The 60-second quote form — clear written price."
                href="/quote"
                cta="Get a quote"
                intent="quote"
                location="contact_page"
              />
            </Reveal>
            <Reveal delay={240}>
              <LeadActionCard
                icon="calendar"
                title="Callback"
                description="Pick a time that suits and we'll call you."
                href="/booking"
                cta="Book a callback"
                intent="booking"
                location="contact_page"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form + details */}
      <section className="section-pad bg-surface" aria-label="Send a message">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <ContactForm />
            </Reveal>
            <div className="space-y-8">
              <div className="card-premium p-7">
                <h2 className="text-title">Contact details</h2>
                <ul className="mt-5 space-y-3.5 text-[0.9375rem]">
                  <li className="flex items-center gap-3">
                    <Icon name="phone" className="h-4.5 w-4.5 text-primary" />
                    <a href={telHref()} className="font-medium hover:text-primary">
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="mail" className="h-4.5 w-4.5 text-primary" />
                    <a href={mailHref()} className="font-medium hover:text-primary">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="map-pin" className="mt-0.5 h-4.5 w-4.5 text-primary" />
                    <span className="text-muted-foreground">
                      Based in {site.address.locality}, serving the surrounding
                      region.{" "}
                      
                    </span>
                  </li>
                </ul>
                <h3 className="mt-7 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Opening hours
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {site.openingHours.map((slot) => (
                    <li key={slot.days} className="flex max-w-xs justify-between gap-6">
                      <span>{slot.days}</span>
                      <span>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ImagePlaceholder
                label="Map / coverage image"
                aspect="aspect-[16/9]"
                icon="map-pin"
              />
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        items={faqGroups[0].items.slice(0, 3)}
        title="Quick answers before you ask"
      />
      <FinalCTA context="contact_page" />
      <JsonLd data={localBusinessSchema()} />
    </PageShell>
  );
}
