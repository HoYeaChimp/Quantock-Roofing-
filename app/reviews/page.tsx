import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Reviews | Quantock Roofing",
  description:
    "Quantock Roofing review policy. Genuine customer reviews will be added only when they are verified and sourced.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Reviews"
        title="Genuine reviews only"
        subtitle="This site does not publish made-up reviews, fake names or invented star ratings. Verified customer reviews will be added here once collected."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Reviews", path: "/reviews" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />

      <section className="section-pad" aria-label="Customer reviews">
        <Container>
          {testimonials.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.name + i} delay={(i % 2) * 80}>
                  <figure className="card-premium flex h-full flex-col p-7 sm:p-8">
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
              <div className="card-premium mx-auto max-w-2xl p-8 text-center">
                <Icon name="star" className="mx-auto h-9 w-9 text-primary/50" />
                <h2 className="mt-4 text-title">Reviews coming soon</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Quantock Roofing will add real reviews only when they can be
                  linked to a genuine source. Until then, no aggregate rating
                  schema is used.
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <FinalCTA title="Need honest roofing advice?" context="reviews_page" />
    </PageShell>
  );
}
