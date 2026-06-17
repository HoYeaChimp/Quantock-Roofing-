import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

/** Generic premium feature grid */
export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  columns = 3,
}: FeatureGridProps) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-pad cv-auto">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className={`grid gap-5 ${cols}`}>
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % columns) * 80}>
              <div className="card-premium h-full p-7">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
