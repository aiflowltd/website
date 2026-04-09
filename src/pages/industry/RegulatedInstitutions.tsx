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
    label: "Geography",
    value: "EU · UK",
    detail: "UK, Benelux, and Nordics. Operating primarily in English, regulatory density is high.",
  },
  {
    label: "Team profile",
    value: "<10",
    detail: "Compliance team headcount. Responsible for obligations that scale faster than the team can grow.",
  },
  {
    label: "Buyer",
    value: "Head of Compliance",
    detail: "Budget authority sits with the CFO at larger institutions; at smaller ones the compliance lead buys directly.",
  },
  {
    label: "Regulatory scope",
    value: "PSD2 · MiFID II · DORA · AML",
    detail: "Multiple overlapping obligations with different cadences, templates, and supervisory expectations.",
  },
];

const problems = [
  {
    quote: "Audits arrive without warning and trigger days or weeks of manual document preparation.",
    resolution: "Audit readiness becomes the default, not the emergency.",
  },
  {
    quote: "Every filing is rebuilt from scratch — pulling data from multiple sources, transforming it into required formats, submitting under deadline.",
    resolution: "Run it once. Run it automatically.",
  },
  {
    quote: "Your data is scattered across departments with no unified source mapping it to your regulatory obligations.",
    resolution: "One pipeline connects every source to every obligation.",
  },
  {
    quote: "Your most experienced people are spending their time on data collection and document assembly instead of compliance analysis or risk assessment.",
    resolution: "The bottleneck is not expertise. It is manual work.",
  },
  {
    quote: "DORA penalties for inadequate incident reporting start at €1M. Regulatory findings lead to remediation programmes, negative media coverage, and client loss.",
    resolution: "Fix the infrastructure before the finding arrives.",
  },
];

const components = [
  "Data unification across operations, finance, risk, and technology",
  "Regulatory mapping against PSD2, MiFID II, DORA, GDPR, and AML templates",
  "Audit package generation — structured document packages in hours, not weeks",
  "Recurring report automation — validated, submission-ready on schedule",
  "Full audit trail — every data point, every mapping decision, every run logged",
];

export default function RegulatedInstitutions() {
  useEffect(() => {
    document.title = "AI Flow | Regulated Institutions";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        {/* Hero */}
        <Section padding="hero">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            RegFin Europe
          </p>
          <SectionHeader
            title="Regulated Institutions"
            subtitle="Banks, payment institutions, and other entities under direct supervisory authority within EU and UK frameworks. The compliance obligation stack grows. The team does not."
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
            subtitle="The compliance obligation stack in EU and UK institutions produces the same infrastructure problem — regardless of the regulation."
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
                We build the pipeline between your operational data and your regulatory output. The system connects to your existing data sources, unifies the data, and maps it against the specific requirements of each active obligation.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-4">
                Audit requests produce structured document packages in hours instead of weeks, with a full audit trail. Recurring reporting runs on schedule, producing validated reports ready for review and submission.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7]">
                Each new obligation adds an automated output. Audit readiness becomes the default, not the emergency.
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
