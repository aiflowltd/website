import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { DatacardsEmbedPanel } from "@/components/DatacardsEmbedPanel";
import { LineGridCta } from "@/components/LineGridCta";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const editorialLine = "border-[#E2E6F0]";

const trustPillars = [
  {
    kicker: "Recurring reporting",
    title: "Completed, validated reports ready for review and submission",
    body: "Each reporting cycle produces completed, validated reports ready for review and submission, with a full audit trail.",
  },
  {
    kicker: "Audit requests",
    title: "Structured document packages in hours instead of weeks",
    body: "Audit requests produce structured document packages in hours instead of weeks, with a full audit trail.",
  },
  {
    kicker: "New obligations",
    title: "Each new jurisdiction adds an automated output, not a manual process",
    body: "For fintechs entering new markets, the pipeline is built before the market launches. Each new obligation adds an automated output, not a manual process.",
  },
] as const;

function trustCellClass(index: number) {
  return cn(
    "flex flex-col gap-2 px-4 py-8 md:px-8 md:py-10",
    index < trustPillars.length - 1 &&
      cn("border-b md:border-b-0", editorialLine),
    index > 0 && cn("md:border-l", editorialLine),
  );
}

const Services = () => {
  useEffect(() => {
    document.title = "AI Flow | Services";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero">
          <SectionHeader
            title="We build the compliance pipeline between your operational data and its regulatory output."
            subtitle="The system connects to existing data sources, maps them to the regulatory templates for each jurisdiction, and runs automatically on schedule."
            titleClassName="text-3xl md:text-5xl"
            subtitleClassName="max-w-2xl text-base md:text-lg leading-relaxed"
          />
        </Section>

        <Section padding="compact" className="!pt-0">
          <hr className={cn("border-t", editorialLine)} />
          <div className="grid grid-cols-1 md:grid-cols-3">
            {trustPillars.map((pillar, index) => (
              <div key={pillar.kicker} className={trustCellClass(index)}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {pillar.kicker}
                </p>
                <p className="font-alternates text-lg font-semibold text-foreground md:text-xl">
                  {pillar.title}
                </p>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
          <hr className={cn("border-t", editorialLine)} />
        </Section>

        <Section padding="default">
          <SectionHeader
            title="Have questions before we start?"
            subtitle="Ask about fit, typical timelines, or how we'd approach your obligation stack. When you're ready, book a scoping call."
            titleClassName="text-2xl font-bold font-alternates text-foreground md:text-3xl"
            subtitleClassName="max-w-2xl text-muted-foreground"
            className="mb-8"
          />
          <DatacardsEmbedPanel fitContent className="rounded-xl p-6 md:p-8">
            <div className="flex w-full justify-center">
              <div className="h-[min(420px,70vh)] w-full max-w-[900px] min-h-[280px]">
                <iframe
                  title="Ask about AI Flow services"
                  className="block h-full w-full rounded-lg border-0 bg-transparent"
                  src="https://app.datacards.ai/a/aiflow/services?theme=dark&scale=0"
                />
              </div>
            </div>
          </DatacardsEmbedPanel>
        </Section>

        <Section padding="default">
          <SectionHeader
            title="Diagnostic first. Build when ready."
            subtitle="Most organisations start with the Diagnostic — so scope, risk, and ROI are explicit for leadership before a line of code is written."
            titleClassName="text-3xl md:text-4xl"
            subtitleClassName="max-w-2xl"
            className="mb-0"
          />

          <div
            className={cn(
              "mt-10 grid grid-cols-1 md:grid-cols-3 border-t",
              editorialLine,
            )}
          >
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={cn(
                  "flex flex-col gap-6 py-10 px-0",
                  index > 0 && cn("border-t md:border-t-0 md:border-l md:pl-10", editorialLine),
                  index < services.length - 1 && cn("md:pr-10"),
                )}
              >
                {/* Number + title */}
                <div>
                  <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-alternates text-xl font-bold text-foreground mt-2 leading-snug">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <p className="mt-1 text-sm font-medium text-foreground/60 leading-snug">
                      {service.tagline}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2.5 flex-1">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-[0.4em] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Timeline */}
                {service.typicalTimeline && (
                  <p
                    className={cn(
                      "text-xs font-medium text-muted-foreground/50 border-t pt-5",
                      editorialLine,
                    )}
                  >
                    {service.typicalTimeline}
                  </p>
                )}

                {/* CTA */}
                <Link to="/contact#calendly" className="mt-auto">
                  <SiteButton variant="secondary" arrow="up-right">
                    Discuss this engagement
                  </SiteButton>
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section padding="compact">
          <LineGridCta>
            <SectionHeader
              title="Start with the Diagnostic."
              subtitle="Book a scoping call with no obligation — or review case studies from compliance teams with similar constraints."
              variant="centered"
              titleClassName="font-alternates text-2xl text-foreground md:text-3xl"
              subtitleClassName="mx-auto mb-8 max-w-xl text-muted-foreground"
              action={
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact#calendly">
                    <SiteButton variant="primary" arrow="up-right">
                      Book a diagnostic call
                    </SiteButton>
                  </Link>
                  <Link to="/case-studies">
                    <SiteButton variant="secondary">
                      View case studies
                    </SiteButton>
                  </Link>
                </div>
              }
            />
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
