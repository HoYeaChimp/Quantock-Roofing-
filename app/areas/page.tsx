import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { serviceAreas, priorityAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import { faqGroups } from "@/data/faqs";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AreaMapAbstract } from "@/components/visuals/AreaMapAbstract";

export const metadata: Metadata = buildMetadata({
  title: "Areas Covered | Somerset, Bristol & Devon",
  description:
    "Roofing services across Bridgwater, Taunton, Burnham-on-Sea, Weston-super-Mare, Bristol and selected Devon towns.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Coverage"
        title="Areas we cover"
        subtitle="Serving customers across the region. If you're close to any of these areas, you're almost certainly covered — and a quick WhatsApp confirms it in minutes."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Areas", path: "/areas" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      {/* Priority grid */}
      <section className="section-pad" aria-label="Main areas">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Main areas"
                title="Where we work most"
                align="left"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {priorityAreas.map((area, i) => (
                  <Reveal key={area.slug} delay={i * 60}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="card-premium block p-5 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon name="map-pin" className="h-4.5 w-4.5 text-primary" />
                        <span className="font-semibold">{area.name}</span>
                      </span>
                      <span className="mt-1.5 block pl-7 text-xs text-muted-foreground">
                        {area.region}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="hidden lg:block">
              <AreaMapAbstract />
            </Reveal>
          </div>

          <div className="mt-14">
            <h2 className="text-title">All areas</h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Not listed */}
      <section className="section-pad bg-surface" aria-label="Area not listed">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="text-headline">Don&apos;t see your area?</h2>
            <p className="text-lead mt-4">
              Coverage isn&apos;t a hard line on a map — it depends on the job
              and the schedule. Send your postcode and we&apos;ll give you a
              straight yes or no, usually within minutes.
            </p>
            <div className="mt-8">
              <Button
                href={createWhatsAppLink({
                  message:
                    "Hi, could you check if you cover my area? My postcode is: ",
                  page: "areas_page",
                })}
                variant="whatsapp"
                intent="whatsapp"
                trackLocation="areas_page"
                size="lg"
              >
                <Icon name="whatsapp" className="h-4.5 w-4.5" />
                Check my postcode on WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Service links */}
      <section className="section-pad" aria-label="Services across all areas">
        <Container>
          <SectionHeading
            eyebrow="Every area, every service"
            title="The same services, wherever you are"
          />
          <ul className="flex flex-wrap justify-center gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection items={faqGroups[3].items} title="Coverage questions" />
      <FinalCTA context="areas_page" />
    </PageShell>
  );
}
