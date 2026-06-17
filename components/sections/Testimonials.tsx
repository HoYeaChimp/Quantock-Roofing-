import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

interface TestimonialsProps {
  limit?: number;
  showCta?: boolean;
}

export function Testimonials({ limit, showCta = true }: TestimonialsProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="section-pad cv-auto bg-surface" aria-label="Customer reviews">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Genuine reviews will be added here"
          description="We are keeping this page honest: no made-up names, no fake star ratings, and no review schema until real, verifiable reviews are available."
        />
        {items.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 3).map((t, i) => (
              <Reveal key={t.name + i} delay={(i % 3) * 80}>
                <figure className="card-premium flex h-full flex-col p-7">
                  <Icon name="quote" className="h-6 w-6 text-primary/40" />
                  <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.location} - {t.service} - via {t.source}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="card-premium mx-auto max-w-2xl p-7 text-center">
              <Icon name="star" className="mx-auto h-8 w-8 text-primary/50" />
              <p className="mt-4 font-semibold">Reviews coming soon</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Quantock Roofing will publish only genuine customer reviews with
                a source the visitor can verify.
              </p>
            </div>
          </Reveal>
        )}
        {showCta && (
          <div className="mt-10 text-center">
            <Button href="/reviews" variant="ghost" trackLabel="all_reviews" trackLocation="testimonials">
              Review policy
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
