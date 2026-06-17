import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { faqGroups } from "@/data/faqs";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Your Questions, Answered Honestly",
  description:
    "Answers to common questions about roofing quotes, repairs, pricing, guarantees, scaffolding, coverage and what happens after you enquire.",
  path: "/faq",
});

const allFaqs = faqGroups.flatMap((group) => group.items);

export default function FaqPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="FAQ"
        title="Questions, answered honestly"
        subtitle="If your question isn't here, a quick WhatsApp usually gets an answer within minutes."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      <section className="section-pad" aria-label="All questions">
        <Container size="narrow">
          {faqGroups.map((group, i) => (
            <Reveal key={group.group} className="mb-12">
              <h2 className="text-title mb-5">{group.group}</h2>
              <Accordion items={group.items} />
              {i === faqGroups.length - 1 ? null : (
                <div className="mt-6 text-center">
                  <Button
                    href="/quote"
                    variant="ghost"
                    size="sm"
                    intent="quote"
                    trackLocation="faq_page"
                  >
                    Ready to start? Get a free quote
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </Reveal>
          ))}

          <Reveal className="text-center">
            <p className="text-lead">Still wondering about something?</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button
                href={createWhatsAppLink({
                  message: "Hi, I have a quick question:",
                  page: "faq_page",
                })}
                variant="whatsapp"
                intent="whatsapp"
                trackLocation="faq_page"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Ask on WhatsApp
              </Button>
              <Button href="/contact" variant="outline" trackLabel="contact" trackLocation="faq_page">
                Contact us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA context="faq_page" />

      {/* schema matches every FAQ visibly rendered above */}
      <JsonLd data={faqSchema(allFaqs)} />
    </PageShell>
  );
}
