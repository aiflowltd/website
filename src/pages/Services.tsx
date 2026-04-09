import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { DatacardsEmbedPanel } from "@/components/DatacardsEmbedPanel";
import { LineGridCta } from "@/components/LineGridCta";
import { useEffect, useState } from "react";
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
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    document.title = "AI Flow | Services";
  }, []);

  const activeService = services[activeServiceIndex];

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
            className="mb-10"
          />

          {/* Tab bar */}
          <div className={cn("border-b", editorialLine)}>
            <div className="flex overflow-x-auto">
              {services.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveServiceIndex(index)}
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-4 text-sm border-b-2 transition-colors whitespace-nowrap",
                    activeServiceIndex === index
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active service panel */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column */}
            <div
              className={cn(
                "py-10 md:py-12 md:pr-12 lg:pr-16",
                "border-b md:border-b-0 md:border-r",
                editorialLine,
              )}
            >
              {activeService.tagline && (
                <p className="text-base font-semibold text-foreground/80 mb-4">
                  {activeService.tagline}
                </p>
              )}
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.65] mb-8">
                {activeService.description}
              </p>
              {activeService.features && activeService.features.length > 0 && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/40 mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {activeService.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-[0.4em] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className="py-10 md:py-12 md:pl-12 lg:pl-16 flex flex-col gap-8">
              {activeService.outcomes && activeService.outcomes.length > 0 && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/40 mb-4">
                    Outcomes
                  </p>
                  <ul className="space-y-3">
                    {activeService.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeService.typicalTimeline && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/40 mb-2">
                    Typical timeline
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activeService.typicalTimeline}
                  </p>
                </div>
              )}

              {activeService.idealFor && activeService.idealFor.length > 0 && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/40 mb-4">
                    Best for
                  </p>
                  <ul className="space-y-2.5">
                    {activeService.idealFor.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-2">
                <Link to="/contact#calendly">
                  <SiteButton variant="primary" arrow="up-right">
                    Discuss this engagement
                  </SiteButton>
                </Link>
              </div>
            </div>
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
