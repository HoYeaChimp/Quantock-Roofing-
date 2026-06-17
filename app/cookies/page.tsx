import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Which cookies and local storage this site may use.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="How this website uses essential storage and optional tracking tools."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Cookies", path: "/cookies" },
            ]}
            className="justify-center [&>ol]:justify-center"
          />
        }
        compact
      />
      <section className="section-pad">
        <Container size="narrow" className="space-y-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-title text-foreground">Essential storage</h2>
            <p className="mt-3">
              The website may use local storage to remember your cookie
              preference and keep form or interface behaviour working smoothly.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Analytics</h2>
            <p className="mt-3">
              Analytics tools may be used to understand which pages are visited
              and how enquiries are generated, but only when configured and
              allowed by the consent setup.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Advertising measurement</h2>
            <p className="mt-3">
              The site supports advertising conversion measurement, such as
              Google Ads or Meta Pixel, when IDs are added by the site owner.
              These tools should be consent-controlled before going fully live.
            </p>
          </div>

          <div>
            <h2 className="text-title text-foreground">Managing preferences</h2>
            <p className="mt-3">
              You can change your browser cookie settings at any time. If a
              consent banner is shown, use it to accept or reject optional
              tracking.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
