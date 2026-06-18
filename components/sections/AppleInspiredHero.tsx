import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { PremiumBackground } from "@/components/visuals/PremiumBackground";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { Reveal } from "@/components/ui/Reveal";

export function AppleInspiredHero() {
  return (
    <section className="theme-dark relative overflow-hidden border-b border-white/10 pb-20 pt-32 md:pb-24 md:pt-40">
      <PremiumBackground variant="hero" intensity="low" />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-eyebrow mb-4 text-white/70">
                Local roofing contractors - based near Bridgwater
              </p>
              <h1 className="text-display text-balance">
                Professional roofers across{" "}
                <span className="text-primary">Somerset, Bristol & Devon</span>
              </h1>
              <p className="text-lead mt-6 max-w-lg text-pretty">
                New roofs, roof repairs, flat roofing and roofline work from a
                local team that gives clear advice, written quotes and careful
                workmanship without the sales pressure.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Button
                    href="/quote"
                    size="lg"
                    intent="quote"
                    trackLocation="hero"
                    trackLabel={site.primaryCTA}
                  >
                    {site.primaryCTA}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    href={createWhatsAppLink({ page: "hero" })}
                    size="lg"
                    variant="whatsapp"
                    intent="whatsapp"
                    trackLocation="hero"
                    trackLabel={site.secondaryCTA}
                  >
                    <Icon name="whatsapp" className="h-4.5 w-4.5" />
                    {site.secondaryCTA}
                  </Button>
                </Magnetic>
                <Button
                  href={telHref()}
                  size="lg"
                  variant="outline"
                  intent="phone"
                  trackLocation="hero"
                  trackLabel={site.tertiaryCTA}
                >
                  <Icon name="phone" className="h-4 w-4 text-primary" />
                  {site.tertiaryCTA}
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.defaultReassurance}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium sm:grid-cols-4">
                {[
                  { icon: "file-text", label: "Free quotes" },
                  { icon: "chat", label: "Clear advice" },
                  { icon: "shield", label: "Guaranteed work" },
                  { icon: "map-pin", label: "South West cover" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <Icon
                      name={item.icon as "file-text"}
                      className="h-4 w-4 text-primary"
                    />
                    <span className="text-muted-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:justify-self-end">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
