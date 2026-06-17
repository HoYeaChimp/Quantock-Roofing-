import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Compact proof strip under the hero.
 */
export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-10" aria-label="Why customers trust us">
      <Container>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {site.trustPoints.map((point, i) => (
            <li key={point.title}>
              <Reveal delay={i * 60} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={point.icon as IconName} className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-snug">
                  {point.title}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
