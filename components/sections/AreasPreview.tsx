import Link from "next/link";
import { priorityAreas } from "@/data/serviceAreas";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AreaMapAbstract } from "@/components/visuals/AreaMapAbstract";

/** Priority areas + coverage reassurance + WhatsApp coverage check */
export function AreasPreview() {
  return (
    <section className="section-pad cv-auto bg-surface" aria-label="Areas we cover">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Areas covered"
              title="Local to you, across the region"
              description="Serving customers across these areas and the surrounding towns. Not sure if you're covered? A quick WhatsApp gets you an answer in minutes."
              align="left"
            />
            <ul className="grid grid-cols-2 gap-3">
              {priorityAreas.map((area, i) => (
                <li key={area.slug}>
                  <Reveal delay={i * 60}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="card-premium flex items-center gap-3 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Icon name="map-pin" className="h-4.5 w-4.5 text-primary" />
                      <span className="text-sm font-semibold">{area.name}</span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/areas" variant="outline" trackLabel="all_areas" trackLocation="areas_preview">
                See all areas
              </Button>
              <Button
                href={createWhatsAppLink({
                  message:
                    "Hi, could you check if you cover my area? My postcode is: ",
                  page: "areas_preview",
                })}
                variant="whatsapp"
                intent="whatsapp"
                trackLocation="areas_preview"
                trackLabel="coverage_check"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Check my postcode
              </Button>
            </div>
          </div>
          <Reveal className="hidden lg:block">
            <AreaMapAbstract />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
