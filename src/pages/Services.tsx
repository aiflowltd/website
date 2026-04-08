import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceBlock } from "@/components/ServiceBlock";
import { services } from "@/data/services";
import { DatacardsEmbedPanel } from "@/components/DatacardsEmbedPanel";
import { LineGridCta } from "@/components/LineGridCta";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const editorialLine = "border-[#E2E6F0]";

const trustPillars = [
  {
    kicker: "No surprises",
    title: "Scope and outcome agreed before we start",
    body: "Deliverables, timeline, and acceptance criteria are defined before any work begins. You know exactly what you are getting before you commit.",
  },
  {
    kicker: "Delivery",
    title: "Senior engineers throughout",
    body: "The people who scope the work build it. No handoff to a junior team. Outputs are documented for your audit trail and for any future team that maintains the system.",
  },
  {
    kicker: "Independence",
    title: "Your data stays yours",
    body: "We build on the systems you already run. You retain full ownership of what we build. We hand over the runbook so your team can operate and extend the infrastructure without us.",
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
            title={
              <>
                Diagnostic.{" "}
                <span className="font-extralight">
                  Build. Operate.
                </span>
              </>
            }
            subtitle="We map where your compliance hours are going. We build the pipeline that automates the reports. We stay on as the obligation stack grows."
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
            subtitle="Ask about fit, typical timelines, or how we’d approach your obligation stack. When you’re ready, book a scoping call."
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
            className="mb-12"
          />

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={index > 0 ? "mt-24 md:mt-32" : undefined}
              >
                <ServiceBlock service={service} index={index} />
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
