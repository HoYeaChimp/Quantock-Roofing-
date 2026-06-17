import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getRelatedServices, getService, services } from "@/data/services";
import { priorityAreas } from "@/data/serviceAreas";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink, serviceWhatsAppMessage } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { ObjectionHandling } from "@/components/sections/ObjectionHandling";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const whatsappHref = createWhatsAppLink({
    message: serviceWhatsAppMessage(service.name),
    page: `service_${service.slug}`,
  });

  return (
    <PageShell>
      <Hero
        eyebrow={service.name}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        align="left"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ]}
          />
        }
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Magnetic>
            <Button
              href="/quote"
              size="lg"
              intent="quote"
              trackLocation={`service_${service.slug}`}
              trackLabel={service.ctaText}
            >
              {service.ctaText}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Magnetic>
          <Button
            href={whatsappHref}
            size="lg"
            variant="whatsapp"
            intent="whatsapp"
            trackLocation={`service_${service.slug}`}
          >
            <Icon name="whatsapp" className="h-4.5 w-4.5" />
            WhatsApp us
          </Button>
          <Button
            href={telHref()}
            size="lg"
            variant="outline"
            intent="phone"
            trackLocation={`service_${service.slug}`}
          >
            <Icon name="phone" className="h-4 w-4 text-primary" />
            {site.phoneDisplay}
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{service.trustNote}</p>
      </Hero>

      <ServiceDetail service={service} />

      <ObjectionHandling
        title={`Hesitating about ${service.name.toLowerCase()}?`}
      />

      {/* Quote form + booking */}
      <section className="section-pad" aria-label="Request a quote">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Next step"
                title={`Get your free ${service.name} quote`}
                description="Tell us the basics — we'll come back with a clear written quote or the right next step."
                align="left"
              />
              <ul className="space-y-3 text-[0.9375rem] text-muted-foreground">
                {service.commonQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <Icon name="chat" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {q}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/booking"
                  variant="outline"
                  intent="booking"
                  trackLocation={`service_${service.slug}`}
                >
                  <Icon name="calendar" className="h-4 w-4 text-primary" />
                  Prefer a callback? Book one
                </Button>
              </div>
            </div>
            <Reveal delay={100}>
              <LeadForm
                formName="service_lead_form"
                context={service.name}
                title={`Free ${service.name} quote`}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Related services + areas */}
      <section className="section-pad bg-surface" aria-label="Related links">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-title">Related services</h2>
              <ul className="mt-5 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="card-premium flex items-center justify-between gap-4 p-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {r.name}
                      <Icon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-title">Where we offer {service.name}</h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {priorityAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon name="map-pin" className="h-3.5 w-3.5 text-primary" />
                      {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/areas"
                    className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:underline"
                  >
                    All areas
                    <Icon name="arrow-right" className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        items={service.faqs}
        title={`${service.name} — common questions`}
      />

      <FinalCTA
        title={`Ready to sort ${service.name.toLowerCase()}?`}
        context={`service_${service.slug}`}
      />

      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />
    </PageShell>
  );
}
