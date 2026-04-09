import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";
import { cn } from "@/lib/utils";

const LINE = "border-[#E2E6F0]";

const profileFacts = [
  {
    label: "Stage",
    value: "Series B / C",
    detail: "VC-backed, operating across multiple states in payments and lending.",
  },
  {
    label: "Team profile",
    value: "<10",
    detail: "Compliance team headcount. Responsible for an expanding set of state and federal filings.",
  },
  {
    label: "Buyer",
    value: "Head / VP of Compliance",
    detail: "At companies under 80 people where compliance reports to the founder, the buyer is the CEO or COO.",
  },
  {
    label: "Regulatory scope",
    value: "FinCEN · CFPB · State MTLs",
    detail: "Each new state adds a money transmitter licence and another reporting template.",
  },
];

const problems = [
  {
    quote: "Every regulatory framework has its own reporting templates, deadlines, and data requirements. Reports are assembled manually from multiple data streams every cycle.",
    resolution: "Run it once. Run it automatically.",
  },
  {
    quote: "Nothing changes except the dates and the numbers. Yet it is rebuilt from scratch every time.",
    resolution: "The pipeline runs on schedule. The team reviews the output, not the data.",
  },
  {
    quote: "Operating across five or more states means five or more sets of obligations, each with different formats and timelines. Adding a new state adds a new manual process.",
    resolution: "Each new jurisdiction adds an automated output, not a manual process.",
  },
  {
    quote: "Every week your compliance team spends building reporting infrastructure manually in a new market is a week you are not generating revenue there.",
    resolution: "Compliance is a gate to growth. We build the pipeline before the market launches.",
  },
  {
    quote: "Inaccurate reporting to FinCEN or state regulators triggers investigations, fines, and licence suspension. A compliance failure in one jurisdiction can delay expansion into others.",
    resolution: "Fix the infrastructure before the finding arrives.",
  },
];

const components = [
  "Data integration across existing operational sources",
  "Template mapping to FinCEN, CFPB, and state-specific reporting formats",
  "Scheduled execution — every obligation runs on time, every cycle",
  "Jurisdiction expansion — each new state adds a module, not a manual process",
  "Full audit trail — every filing traceable from source data to submission",
];

export default function GrowthFintechs() {
  useEffect(() => {
    document.title = "AI Flow | Growth Fintechs";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        {/* Hero */}
        <Section padding="hero">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            US FinTech
          </p>
          <SectionHeader
            title="Growth Fintechs"
            subtitle="VC-backed, Series B or C, operating across multiple states in payments and lending. Your compliance obligations are scaling faster than the team and the tooling."
            titleClassName="text-3xl md:text-5xl"
            subtitleClassName="max-w-2xl text-base md:text-lg leading-relaxed"
          />
        </Section>

        {/* Profile strip */}
        <Section padding="compact" className="!pt-0">
          <hr className={cn("border-t", LINE)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {profileFacts.map((fact, index) => (
              <div
                key={fact.label}
                className={cn(
                  "flex flex-col gap-2 px-0 py-8 md:px-6",
                  index > 0 && cn("border-t sm:border-t-0 sm:border-l", LINE),
                )}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.label}
                </p>
                <p className="font-alternates text-lg font-bold text-foreground leading-snug">
                  {fact.value}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground/70">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
          <hr className={cn("border-t", LINE)} />
        </Section>

        {/* Problems */}
        <Section padding="default">
          <SectionHeader
            title="Does this sound familiar?"
            subtitle="The same manual reporting infrastructure problem shows up at every growth-stage fintech — regardless of which states you operate in."
            titleClassName="text-3xl md:text-4xl"
            subtitleClassName="max-w-2xl"
            className="mb-12"
          />

          <hr className={cn("border-t", LINE)} />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {problems.map((problem, index) => {
              const isRight = index % 2 === 1;
              const isLast = index === problems.length - 1;
              const lastRowStart = problems.length % 2 === 0 ? problems.length - 2 : problems.length - 1;
              const isLastRow = index >= lastRowStart;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col gap-4 py-10",
                    isRight ? "md:pl-10" : "md:pr-10",
                    !isLast && cn("border-b", LINE),
                    isLastRow && "md:border-b-0",
                    isRight && cn("md:border-l", LINE),
                  )}
                >
                  <p className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-foreground/25">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-sans text-xl font-light leading-snug text-foreground md:text-2xl flex-1">
                    &ldquo;{problem.quote}&rdquo;
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {problem.resolution}
                  </p>
                </div>
              );
            })}
          </div>

          <hr className={cn("border-t", LINE)} />
        </Section>

        {/* How we help */}
        <Section padding="default">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <SectionHeader
                title="How we help"
                subtitle={null}
                titleClassName="text-3xl md:text-4xl"
                className="mb-6"
              />
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-4">
                We build the compliance pipeline between your operational data and your regulatory output. The system connects to your existing data sources, maps them to the templates required for each jurisdiction, and runs automatically on schedule.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-4">
                Each reporting cycle produces completed, validated reports ready for review and submission, with a full audit trail. For fintechs entering new markets, the pipeline is built before the market launches.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7]">
                Each new jurisdiction adds an automated output, not a manual process. The compliance team stops assembling data and starts doing compliance.
              </p>
            </div>

            <div>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                The core components
              </p>
              <ul className="space-y-4">
                {components.map((component, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                    {component}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section padding="compact">
          <hr className={cn("border-t", LINE)} />
          <div className="flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-alternates text-2xl font-bold text-foreground md:text-3xl">
                Start with a diagnostic call.
              </p>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                We map where your compliance hours are going and what it would cost to automate the assembly. No obligation.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link to="/contact#calendly">
                <SiteButton variant="primary" arrow="up-right">
                  Book a diagnostic call
                </SiteButton>
              </Link>
              <Link to="/services">
                <SiteButton variant="secondary">
                  See how we work
                </SiteButton>
              </Link>
            </div>
          </div>
          <hr className={cn("border-t", LINE)} />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
