import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpandableCard } from "@/components/ui/ExpandableCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Expanding service cards — summary first, depth on demand */
export function ServicesPreview() {
  return (
    <section className="section-pad cv-auto" aria-label="Our services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Help with exactly what you need"
          description="Clear scope, honest advice, written quotes. Expand any service to see what's included."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ExpandableCard
                title={service.name}
                summary={service.shortDescription}
                icon={service.icon as IconName}
              >
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Best for
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.bestFor[0]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button
                    href={`/services/${service.slug}`}
                    size="sm"
                    trackLabel={`service_${service.slug}`}
                    trackLocation="services_preview"
                  >
                    Learn more
                  </Button>
                  <Button
                    href="/quote"
                    size="sm"
                    variant="outline"
                    intent="quote"
                    trackLocation="services_preview"
                  >
                    Get a quote
                  </Button>
                </div>
              </ExpandableCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="ghost" trackLabel="all_services" trackLocation="services_preview">
            Explore all services
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
