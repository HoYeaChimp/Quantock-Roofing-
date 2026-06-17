import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumBackground } from "@/components/visuals/PremiumBackground";

interface FinalCTAProps {
  title?: string;
  description?: string;
  /** context appended to the WhatsApp message */
  context?: string;
}

/** Dark premium closing band — every lead path in one place */
export function FinalCTA({
  title = "Ready for a clear next step?",
  description = "Tell us what you need. We'll point you in the right direction — even if that's not us.",
  context,
}: FinalCTAProps) {
  return (
    <section className="theme-dark relative overflow-hidden" aria-label="Get started">
      <PremiumBackground variant="cta" intensity="medium" />
      <Container className="section-pad relative text-center">
        <Reveal>
          <h2 className="text-headline mx-auto max-w-2xl text-balance">
            {title}
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-xl">{description}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Button
                href="/quote"
                size="lg"
                intent="quote"
                trackLocation="final_cta"
                trackLabel={site.primaryCTA}
              >
                {site.primaryCTA}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                href={createWhatsAppLink({ page: context || "final_cta" })}
                size="lg"
                variant="whatsapp"
                intent="whatsapp"
                trackLocation="final_cta"
                trackLabel={site.secondaryCTA}
              >
                <Icon name="whatsapp" className="h-4.5 w-4.5" />
                {site.secondaryCTA}
              </Button>
            </Magnetic>
            <Button
              href={telHref()}
              size="lg"
              variant="glass"
              intent="phone"
              trackLocation="final_cta"
              trackLabel={site.tertiaryCTA}
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </Button>
            <Button
              href="/booking"
              size="lg"
              variant="glass"
              intent="booking"
              trackLocation="final_cta"
              trackLabel={site.bookingCTA}
            >
              <Icon name="calendar" className="h-4 w-4" />
              {site.bookingCTA}
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {site.defaultReassurance}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
