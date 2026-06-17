import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { faqGroups } from "@/data/faqs";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink, quoteWhatsAppMessage } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PremiumBackground } from "@/components/visuals/PremiumBackground";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Quote | 60-Second Form, No Obligation",
  description:
    "Request a free roofing quote from Quantock Roofing. New roofs, repairs, flat roofs and roofline across Somerset, Bristol, Bath and Devon.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <PremiumBackground variant="hero" intensity="medium" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Get a Quote", path: "/quote" },
              ]}
              className="justify-center [&>ol]:justify-center"
            />
            <p className="text-eyebrow mb-4">Free quote</p>
            <h1 className="text-display">Your quote, in about 60 seconds</h1>
            <p className="text-lead mt-5">
              Five quick steps — no account, no payment details, no pressure.{" "}
              {site.defaultReassurance}
            </p>
          </div>

          <Reveal delay={100} className="mx-auto mt-12 max-w-xl">
            <QuoteForm />
          </Reveal>

          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-sm font-semibold text-muted-foreground">
              Rather skip the form?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button
                href={createWhatsAppLink({
                  message: quoteWhatsAppMessage(),
                  page: "quote_page",
                })}
                variant="whatsapp"
                intent="whatsapp"
                trackLocation="quote_page"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                WhatsApp your details
              </Button>
              <Button
                href={telHref()}
                variant="outline"
                intent="phone"
                trackLocation="quote_page"
              >
                <Icon name="phone" className="h-4 w-4 text-primary" />
                Call {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        items={faqGroups[1].items}
        title="Quote & pricing questions"
      />
      <FinalCTA
        title="Still deciding? That's fine."
        description="Save this page and come back when you're ready — or ask us anything in the meantime."
        context="quote_page"
      />
    </PageShell>
  );
}
