import Link from "next/link";
import type { ServiceArea } from "@/data/serviceAreas";
import { getNearbyAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { AreaMapAbstract } from "@/components/visuals/AreaMapAbstract";

/** Core informational sections of a local area page */
export function AreaDetail({ area }: { area: ServiceArea }) {
  const availableServices = services.filter((s) =>
    area.servicesAvailable.includes(s.slug)
  );
  const nearby = getNearbyAreas(area);

  return (
    <>
      {/* Coverage + services available */}
      <section className="section-pad" aria-label={`Services available in ${area.name}`}>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={`Serving ${area.name}`}
                title={`Services available in ${area.name}`}
                description={`We serve customers across ${area.name} and the surrounding parts of ${area.region} — there's no call-out runaround, just a clear next step.`}
                align="left"
              />
              <ul className="space-y-3">
                {availableServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-premium flex items-center justify-between gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <span className="flex items-center gap-3 text-sm font-semibold">
                        <Icon name="check" className="h-4 w-4 text-success" />
                        {service.name}
                      </span>
                      <Icon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Reveal className="hidden lg:block">
                <AreaMapAbstract className="mb-8" />
              </Reveal>
              <Reveal delay={80}>
                <div className="card-premium p-7">
                  <h3 className="font-semibold tracking-tight">
                    Common needs in {area.name}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {area.commonNeeds.map((need) => (
                      <li key={need} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Icon name="spark" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {need}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-sm font-semibold">Local proof</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{area.localProof}</p>
                    <Badge tone="warning" className="mt-3">
                      Local examples available on request
                    </Badge>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Coverage reassurance + nearby areas */}
      <section className="section-pad bg-surface" aria-label="Coverage reassurance">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="text-title">
              On the edge of {area.name}? You&apos;re probably still covered.
            </h2>
            <p className="text-lead mt-4">
              Coverage isn&apos;t a hard line on a map. If you&apos;re near{" "}
              {area.name}, send a quick message with your postcode and
              we&apos;ll give you a straight yes or no — usually within minutes.
            </p>
          </Reveal>
          {nearby.length > 0 && (
            <Reveal delay={100}>
              <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Nearby areas we also cover
              </p>
              <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/areas/${n.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon name="map-pin" className="h-3.5 w-3.5 text-primary" />
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Container>
      </section>
    </>
  );
}
