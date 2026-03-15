import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Sparkles,
  Workflow,
  Shield,
  Clock,
  TrendingUp,
  Target,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { JourneySection } from "@/components/JourneySection";
import { journeySteps } from "@/data/journey";

const Agnostic = () => {
  useEffect(() => {
    document.title = "AI Flow | AI Systems for Complex Operations";
  }, []);

  const recognitionStatements = [
    "Too much depends on people knowing what to do.",
    "We can't scale this without hiring.",
    "Automation breaks on edge cases.",
    "Our data exists, but it doesn't help execution.",
    "Things fall through the cracks when volume increases.",
  ];

  const recurringIssues = [
    "Inputs arrive unstructured and incomplete",
    "Context is scattered across tools and teams",
    "Execution relies on tribal knowledge",
    "Exceptions grow faster than rules",
    "Scale increases coordination cost",
  ];

  const approach = [
    {
      title: "Understand what's coming in",
      description:
        "Requests, messages, documents, events - usually messy and inconsistent.",
      bullets: [
        "Interpret intent and urgency",
        "Extract what matters",
        "Handle ambiguity instead of failing",
      ],
    },
    {
      title: "Rebuild operational context",
      description: "Most decisions require more than one data point.",
      bullets: [
        "Connect inputs to history and entities",
        "Maintain context across time",
        "Reduce back-and-forth clarification",
      ],
    },
    {
      title: "Execute consistently",
      description:
        "Once the system understands the situation, execution should be predictable.",
      bullets: [
        "Trigger the right workflow automatically",
        "Ensure required steps aren't skipped",
        "Surface edge cases early",
      ],
    },
    {
      title: "Improve over time",
      description: "Operations generate signals. Most teams don't see them.",
      bullets: [
        "Turn daily execution into insight",
        "Highlight bottlenecks and inefficiencies",
        "Support continuous improvement",
      ],
    },
  ];

  const differentiators = [
    {
      icon: Layers,
      title: "Industry-agnostic, not generic",
      description:
        "We don't sell templates or features. We design systems around your workflows, data, and constraints.",
    },
    {
      icon: Shield,
      title: "Built for production from day one",
      description:
        "These systems run every day, under load, with real consequences.",
    },
    {
      icon: Sparkles,
      title: "End-to-end ownership",
      description:
        "We design, build, deploy, monitor, and evolve the system. You're not left stitching pieces together.",
    },
    {
      icon: Workflow,
      title: "Strong fit for high-stakes operations",
      description:
        "The more complex and consequential the work, the more value these systems deliver.",
    },
  ];

  const outcomes = [
    {
      period: "Short term",
      timeframe: "first 30 days",
      icon: Clock,
      uplift: [
        "Faster handling of requests and exceptions",
        "Less manual coordination",
        "Clearer operational visibility",
      ],
    },
    {
      period: "Medium term",
      timeframe: "60–90 days",
      icon: TrendingUp,
      uplift: [
        "Lower cost per unit or case",
        "More consistent outcomes",
        "Teams scale without burnout",
      ],
    },
    {
      period: "Long term",
      timeframe: "90+ days",
      icon: Target,
      uplift: [
        "Predictable execution at scale",
        "Data-driven operational decisions",
        "Systems that grow with the business",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Section padding="hero">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-alternates leading-tight text-foreground">
              AI systems for complex operations
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-grey leading-relaxed">
              Not every business fits a neat industry label. But many face the
              same challenge: operations that don't scale because coordination
              is manual, context is fragmented, and execution depends on people
              holding things together.
            </p>
            <p className="text-lg md:text-xl max-w-3xl text-grey leading-relaxed">
              AI Flow builds AI systems that run inside real operations -
              understanding inputs, maintaining context, and executing work
              reliably, at scale.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <Link to="/contact#calendly" className="w-full sm:w-auto">
              <SiteButton
                variant="primary"
                arrow="up-right"
                className="w-full sm:w-auto"
              >
                Talk to us
              </SiteButton>
            </Link>
          </div>
        </Section>

        <Section maxWidth="narrow">
          <SectionHeader
            title="Who this is for"
            subtitle="If that sounds familiar, the industry label matters less than the operational reality."
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-3xl mx-auto mt-6"
          />
          <p className="text-lg max-w-3xl mx-auto text-center text-grey mb-8">
            This page is for teams who recognise themselves in statements like:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {recognitionStatements.map((point) => (
              <div
                key={point}
                className="p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-m relative text-grey">{point}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section maxWidth="narrow">
          <SectionHeader
            title="The pattern we see across industries"
            subtitle="These aren't industry problems. They're execution problems."
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-3xl mx-auto mt-6"
          />
          <p className="text-lg max-w-3xl mx-auto text-center text-grey mb-8">
            Across logistics, energy, healthcare operations, finance, enterprise
            platforms, and internal systems, the same issues repeat:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {recurringIssues.map((point) => (
              <div
                key={point}
                className="p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-m relative text-grey">{point}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title={
              <>
                How AI Flow <span className="text-primary">approaches</span> any
                domain
              </>
            }
            subtitle={
              'We don\'t start with "AI use cases." We start with how work actually moves through your organisation.'
            }
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {approach.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl p-8 border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold font-alternates mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-m mb-4 text-grey">{step.description}</p>
                <div className="space-y-3 pt-4 border-t border-border">
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-grey" />
                      <span className="text-grey leading-relaxed text-sm">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="What makes AI Flow different"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {differentiators.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl p-6 border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-grey group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-alternates mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-grey leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Typical outcomes"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {outcomes.map((result) => {
              const IconComponent = result.icon;
              return (
                <div
                  key={result.period}
                  className="group rounded-2xl p-6 border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-grey group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-alternates mb-1 text-foreground">
                        {result.period}
                      </h3>
                      <p className="text-xs font-medium text-grey">
                        {result.timeframe}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="pt-4 border-t border-border">
                      <div className="space-y-2.5">
                        {result.uplift.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 p-2 rounded-lg bg-muted/50"
                          >
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-grey" />
                            <span className="text-grey leading-relaxed text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section maxWidth="narrow">
          <SectionHeader
            title="When AI Flow is a good fit"
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
          />
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 mt-12">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="rounded-xl border border-border p-6 bg-muted/30">
                <h3 className="text-lg font-semibold font-alternates mb-3 text-foreground">
                  We're a strong fit if:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Your operations are complex or high-volume",
                    "Mistakes are costly",
                    "Manual coordination is a bottleneck",
                    "Reliability and ROI matter",
                  ].map((item) => (
                    <li key={item} className="text-m text-grey">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border p-6 bg-muted/30">
                <h3 className="text-lg font-semibold font-alternates mb-3 text-foreground">
                  We're probably not a fit if:
                </h3>
                <ul className="space-y-2">
                  {[
                    "You want a plug-and-play chatbot",
                    "The problem is mostly UI or marketing",
                    "Execution complexity is low",
                  ].map((item) => (
                    <li key={item} className="text-m text-grey">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <JourneySection steps={journeySteps} />

        <Section>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-16 text-center">
            <SectionHeader
              title="AI systems that scale real work"
              subtitle="No matter the industry. If your challenge is execution, coordination, and scale - we should talk."
              variant="centered"
              titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
              subtitleClassName="text-grey max-w-xl mx-auto mb-8"
              action={
                <Link to="/contact#calendly">
                  <SiteButton variant="primary" arrow="up-right">
                    Talk to us
                  </SiteButton>
                </Link>
              }
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Agnostic;
