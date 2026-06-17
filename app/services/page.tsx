import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { faqGroups } from "@/data/faqs";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { telHref } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Services | Roofing Services Across the South West",
  description:
    "New roofs, roof repairs, flat roofs, roofline, dry ridge, dry verge and emergency roofing enquiries across Somerset, Bristol, Bath and Devon.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Services"
        title="Help with exactly what you need"
        subtitle="Every service comes with the same promise: honest advice, a clear written quote, and no pressure to commit."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      <ServicesPreview />

      {/* Not sure section */}
      <section className="section-pad bg-surface" aria-label="Not sure what you need?">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="text-headline">Not sure what you need?</h2>
            <p className="text-lead mt-4">
              That&apos;s completely normal — most people aren&apos;t. Tell us
              what&apos;s going on and we&apos;ll help you work it out, with no
              obligation to book anything.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href={createWhatsAppLink({
                  message:
                    "Hi, I'm not sure which service I need. Could you point me in the right direction?",
                  page: "services_page",
                })}
                variant="whatsapp"
                intent="whatsapp"
                trackLocation="services_page"
                size="lg"
              >
                <Icon name="whatsapp" className="h-4.5 w-4.5" />
                Describe it on WhatsApp
              </Button>
              <Button
                href={telHref()}
                variant="outline"
                intent="phone"
                trackLocation="services_page"
                size="lg"
              >
                <Icon name="phone" className="h-4 w-4 text-primary" />
                Call {site.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProcessSection />
      <FaqSection
        items={faqGroups[0].items}
        title="Before you choose a service"
      />
      <FinalCTA context="services_page" />
    </PageShell>
  );
}
