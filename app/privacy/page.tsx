import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Quantock Roofing collects, uses and protects enquiry information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="A plain-English summary of how enquiry information is handled on this website."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Privacy", path: "/privacy" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />
      <section className="section-pad">
        <Container size="narrow" className="space-y-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            This policy should be reviewed by a legal professional before heavy
            advertising or analytics use. It explains the intended handling of
            enquiries sent to Quantock Roofing through this website.
          </p>

          <div>
            <h2 className="text-title text-foreground">What we collect</h2>
            <p className="mt-3">
              When you contact us, request a quote or book a callback, we may
              collect your name, phone number, email address, postcode, enquiry
              details, preferred contact method and any photos or notes you
              choose to send.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">How we use it</h2>
            <p className="mt-3">
              We use enquiry information to respond to you, assess the roofing
              work, prepare quotes, arrange inspections and keep a record of
              customer communication.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Analytics and advertising</h2>
            <p className="mt-3">
              The site is built to support analytics and advertising tags only
              when configured. Where tracking is enabled, consent controls
              should be honoured before non-essential tags are loaded.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Sharing data</h2>
            <p className="mt-3">
              We may use trusted providers for hosting, email delivery, form
              handling, analytics or advertising measurement. We do not sell
              enquiry details.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Contact</h2>
            <p className="mt-3">
              Questions about privacy can be sent to <strong>{site.email}</strong>.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
