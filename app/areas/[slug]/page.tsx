import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { getArea, serviceAreas } from "@/data/serviceAreas";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { areaWhatsAppMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AreaDetail } from "@/components/sections/AreaDetail";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.seoTitle,
    description: area.seoDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const whatsappHref = createWhatsAppLink({
    message: areaWhatsAppMessage(area.name),
    page: `area_${area.slug}`,
  });

  return (
    <PageShell>
      <Hero
        eyebrow={`${area.name}, ${area.region}`}
        title={`Serving customers across ${area.name}`}
        subtitle={area.intro}
        align="left"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Areas", path: "/areas" },
              { name: area.name, path: `/areas/${area.slug}` },
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
              trackLocation={`area_${area.slug}`}
              trackLabel={site.primaryCTA}
            >
              {site.primaryCTA}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Magnetic>
          <Button
            href={whatsappHref}
            size="lg"
            variant="whatsapp"
            intent="whatsapp"
            trackLocation={`area_${area.slug}`}
          >
            <Icon name="whatsapp" className="h-4.5 w-4.5" />
            WhatsApp us
          </Button>
          <Button
            href={telHref()}
            size="lg"
            variant="outline"
            intent="phone"
            trackLocation={`area_${area.slug}`}
          >
            <Icon name="phone" className="h-4 w-4 text-primary" />
            {site.phoneDisplay}
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {site.defaultReassurance}
        </p>
      </Hero>

      <AreaDetail area={area} />

      {/* Quote form */}
      <section className="section-pad" aria-label={`Get a quote in ${area.name}`}>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Next step"
              title={`Get a free quote in ${area.name}`}
              description={`Tell us what you need and where you are in ${area.name}. We'll reply with a clear next step — no pressure, no obligation.`}
              align="left"
              className="mb-0"
            />
            <Reveal delay={100}>
              <LeadForm
                formName="area_lead_form"
                context={area.name}
                title={`Free quote — ${area.name}`}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection items={area.faqs} title={`${area.name} — common questions`} />

      <FinalCTA
        title={`Need help in ${area.name}?`}
        context={`area_${area.slug}`}
      />

      {/* LocalBusiness schema with areaServed from real data */}
      <JsonLd data={[localBusinessSchema(), faqSchema(area.faqs)]} />
    </PageShell>
  );
}
