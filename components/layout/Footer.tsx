import Link from "next/link";
import { site } from "@/data/site";
import { footerNav } from "@/data/navigation";
import { services } from "@/data/services";
import { priorityAreas } from "@/data/serviceAreas";
import { Container } from "@/components/ui/Container";
import { ContactActions } from "@/components/ui/ContactActions";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <p className="text-2xl font-black tracking-tight text-foreground">
              {site.businessName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.tagline} Serving customers across {priorityAreas[0]?.name}{" "}
              and the surrounding areas.
            </p>
            <ContactActions location="footer" className="mt-6" />
            <div className="mt-6">
              <p className="text-sm font-semibold">Opening hours</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {site.openingHours.map((slot) => (
                  <li key={slot.days} className="flex justify-between gap-6 max-w-xs">
                    <span>{slot.days}</span>
                    <span>{slot.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-label="Footer areas">
            <p className="text-sm font-semibold">Areas covered</p>
            <ul className="mt-4 space-y-2.5">
              {priorityAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  All areas →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Link groups */}
          <div className="space-y-10">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={`Footer ${group.heading}`}>
                <p className="text-sm font-semibold">{group.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
            
          </p>
          <p>{site.defaultReassurance}</p>
        </div>
      </Container>
    </footer>
  );
}
