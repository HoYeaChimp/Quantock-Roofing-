import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { bookingWhatsAppMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BookingForm } from "@/components/forms/BookingForm";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Book a Callback | Pick a Time That Suits You",
  description:
    "Book a roofing inspection or callback with Quantock Roofing at a time that suits you. No obligation and no pressure.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Callback"
        title="Book a callback that suits you"
        subtitle="Tell us when works and how you'd like to be contacted — we'll do the rest. No waiting on hold."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Book a Callback", path: "/booking" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      <section className="section-pad" aria-label="Booking form">
        <Container>
          <div className="mx-auto max-w-xl">
            <Reveal>
              <BookingForm />
            </Reveal>
            <div className="mt-10 text-center">
              <p className="text-sm font-semibold text-muted-foreground">
                Need to talk sooner?
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Button
                  href={createWhatsAppLink({
                    message: bookingWhatsAppMessage(),
                    page: "booking_page",
                  })}
                  variant="whatsapp"
                  intent="whatsapp"
                  trackLocation="booking_page"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Arrange it on WhatsApp
                </Button>
                <Button
                  href={telHref()}
                  variant="outline"
                  intent="phone"
                  trackLocation="booking_page"
                >
                  <Icon name="phone" className="h-4 w-4 text-primary" />
                  Call {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Prefer a quote first?"
        description="Get a free written quote before booking anything."
        context="booking_page"
      />
    </PageShell>
  );
}
