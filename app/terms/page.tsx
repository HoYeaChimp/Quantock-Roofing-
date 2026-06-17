import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The basic terms that apply when using the Quantock Roofing website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Website terms for enquiries, quotes and general information."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Terms", path: "/terms" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />
      <section className="section-pad">
        <Container size="narrow" className="space-y-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            These terms are a practical website summary and should be reviewed
            professionally for the final business documents.
          </p>

          <div>
            <h2 className="text-title text-foreground">Website information</h2>
            <p className="mt-3">
              The information on this website is provided for general guidance.
              It is not a substitute for a roof inspection or a written quote
              based on your property, access, materials and roof condition.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Quotes and bookings</h2>
            <p className="mt-3">
              Quotes are free and no-obligation unless stated otherwise. Work is
              booked only once the scope, price, access assumptions and any
              relevant guarantee terms have been agreed.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Emergency enquiries</h2>
            <p className="mt-3">
              Emergency roofing enquiries are accepted, but attendance is
              subject to availability, weather, access and safety. Do not climb
              onto a roof to inspect damage.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Company details</h2>
            <p className="mt-3">
              Quantock Roofing is a trading name of {site.legalName}, company
              number {site.companyRegistration}. Contact:{" "}
              <strong>{site.email}</strong>.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
