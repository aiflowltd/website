import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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
import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { JourneySection } from "@/components/JourneySection";
import { journeySteps } from "@/data/journey";

const Agnostic = () => {
  useEffect(() => {
    document.title = "AI Flow | AI Systems for Complex Operations";
  }, []);

  const recognitionStatements = [
    "Too much depends on people knowing what to do.",
    "We can’t scale this without hiring.",
    "Automation breaks on edge cases.",
    "Our data exists, but it doesn’t help execution.",
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
      title: "Understand what’s coming in",
      description:
        "Requests, messages, documents, events — usually messy and inconsistent.",
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
        "Ensure required steps aren’t skipped",
        "Surface edge cases early",
      ],
    },
    {
      title: "Improve over time",
      description: "Operations generate signals. Most teams don’t see them.",
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
        "We don’t sell templates or features. We design systems around your workflows, data, and constraints.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Shield,
      title: "Built for production from day one",
      description:
        "These systems run every day, under load, with real consequences.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Sparkles,
      title: "End-to-end ownership",
      description:
        "We design, build, deploy, monitor, and evolve the system. You’re not left stitching pieces together.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
    },
    {
      icon: Workflow,
      title: "Strong fit for high-stakes operations",
      description:
        "The more complex and consequential the work, the more value these systems deliver.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
    },
  ];

  const outcomes = [
    {
      period: "Short term",
      timeframe: "first 30 days",
      icon: Clock,
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
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
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
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
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      uplift: [
        "Predictable execution at scale",
        "Data-driven operational decisions",
        "Systems that grow with the business",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{
                      letterSpacing: "-0.02em",
                      color: colors.lightGrey,
                    }}
                  >
                    AI Systems for Complex Operations
                    <br />
                    <span
                      className="bg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Built where execution matters
                    </span>
                  </h1>
                  <p
                    className="text-lg md:text-xl"
                    style={{ color: colors.lightGrey, lineHeight: "1.6" }}
                  >
                    Not every business fits a neat industry label. But many face
                    the same challenge: operations that don’t scale because
                    coordination is manual, context is fragmented, and execution
                    depends on people holding things together.
                  </p>
                  <p
                    className="text-lg md:text-xl"
                    style={{ color: colors.lightGrey, lineHeight: "1.6" }}
                  >
                    AI Flow builds AI systems that run inside real operations —
                    understanding inputs, maintaining context, and executing
                    work reliably, at scale.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link to="/contact#calendly" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="text-base px-4 py-6 h-auto w-full sm:w-auto font-semibold hover:opacity-90 transition-opacity inline-flex"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: "#FAFAFA",
                        border: "none",
                      }}
                    >
                      Talk to us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  letterSpacing: "-0.02em",
                  color: colors.lightGrey,
                }}
              >
                Who this is for
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: colors.lightGrey }}
              >
                This page is for teams who recognize themselves in statements
                like:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
                {recognitionStatements.map((point) => (
                  <div
                    key={point}
                    className="group relative p-4 rounded-lg border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: colors.darkGrey + "60",
                      borderColor: colors.grey + "30",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary + "60";
                      e.currentTarget.style.boxShadow = `0 8px 24px ${colors.primary}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.grey + "30";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}10, transparent)`,
                      }}
                    />
                    <p
                      className="text-m relative"
                      style={{ color: colors.lightGrey }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="text-lg font-semibold mt-6"
                style={{ color: colors.lightGrey }}
              >
                If that sounds familiar, the industry label matters less than
                the operational reality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  letterSpacing: "-0.02em",
                  color: colors.lightGrey,
                }}
              >
                The pattern we see across industries
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: colors.lightGrey }}
              >
                Across logistics, energy, healthcare operations, finance,
                enterprise platforms, and internal systems, the same issues
                repeat:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
                {recurringIssues.map((point) => (
                  <div
                    key={point}
                    className="group relative p-4 rounded-lg border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: colors.darkGrey + "60",
                      borderColor: colors.grey + "30",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary + "60";
                      e.currentTarget.style.boxShadow = `0 8px 24px ${colors.primary}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.grey + "30";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}10, transparent)`,
                      }}
                    />
                    <p
                      className="text-m relative"
                      style={{ color: colors.lightGrey }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="text-lg font-semibold mt-6"
                style={{ color: colors.lightGrey }}
              >
                These aren’t industry problems. They’re execution problems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  letterSpacing: "-0.02em",
                  color: colors.lightGrey,
                }}
              >
                How AI Flow approaches{" "}
                <span style={{ color: colors.primary }}>any domain</span>
              </h2>
              <p className="text-lg" style={{ color: colors.lightGrey }}>
                We don’t start with “AI use cases.” We start with how work
                actually moves through your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {approach.map((step) => (
                <div
                  key={step.title}
                  className="group relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: colors.mediumGrey + "50",
                    borderColor: colors.grey + "30",
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary + "60";
                    e.currentTarget.style.boxShadow = `0 12px 40px rgba(26, 136, 255, 0.25), 0 0 0 1px ${colors.primary}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.grey + "30";
                    e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`;
                  }}
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.lightGrey }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-m mb-4" style={{ color: colors.primary }}>
                    {step.description}
                  </p>
                  <div
                    className="space-y-3 pt-4 border-t"
                    style={{ borderColor: colors.grey + "20" }}
                  >
                    {step.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{
                            backgroundColor: colors.success,
                            boxShadow: `0 0 6px ${colors.success}60`,
                          }}
                        />
                        <span
                          className="text-m leading-relaxed"
                          style={{ color: colors.lightGrey }}
                        >
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  letterSpacing: "-0.02em",
                  color: colors.lightGrey,
                }}
              >
                What makes{" "}
                <span style={{ color: colors.primary }}>AI Flow</span> different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl p-6 border"
                    style={{
                      backgroundColor: colors.mediumGrey + "30",
                      borderColor: colors.grey + "20",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                      style={{
                        backgroundColor: item.iconBg,
                        borderColor: item.iconBorder,
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: item.iconColor }}
                      />
                    </div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: colors.lightGrey }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-m leading-relaxed"
                      style={{ color: colors.lightGrey }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  letterSpacing: "-0.02em",
                  color: colors.lightGrey,
                }}
              >
                Typical outcomes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {outcomes.map((result) => {
                const IconComponent = result.icon;
                return (
                  <div
                    key={result.period}
                    className="rounded-2xl p-6 border"
                    style={{
                      backgroundColor: colors.mediumGrey + "40",
                      borderColor: colors.grey + "30",
                      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px ${colors.grey}20`,
                    }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                        style={{
                          backgroundColor: result.iconBg,
                          borderColor: result.iconBorder,
                        }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{ color: result.iconColor }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{ color: colors.lightGrey }}
                        >
                          {result.period}
                        </h3>
                        <p
                          className="text-xs font-medium"
                          style={{ color: colors.lightGrey }}
                        >
                          {result.timeframe}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div
                        className="pt-4 border-t"
                        style={{ borderColor: colors.grey + "20" }}
                      >
                        <div className="space-y-2.5">
                          {result.uplift.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 p-2 rounded-lg"
                              style={{
                                backgroundColor: colors.darkGrey + "60",
                              }}
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{
                                  backgroundColor: colors.primary,
                                  boxShadow: `0 0 4px ${colors.primary}60`,
                                }}
                              />
                              <span
                                className="text-m leading-relaxed"
                                style={{ color: colors.lightGrey }}
                              >
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
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div
              className="rounded-2xl border p-8 md:p-10 text-center"
              style={{
                backgroundColor: colors.mediumGrey + "30",
                borderColor: colors.grey + "20",
              }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: colors.lightGrey }}
              >
                When AI Flow is a good fit
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                <div
                  className="rounded-xl border p-6"
                  style={{
                    backgroundColor: colors.darkGrey + "60",
                    borderColor: colors.grey + "30",
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: colors.primary }}
                  >
                    We’re a strong fit if:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Your operations are complex or high-volume",
                      "Mistakes are costly",
                      "Manual coordination is a bottleneck",
                      "Reliability and ROI matter",
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-m"
                        style={{ color: colors.lightGrey }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-xl border p-6"
                  style={{
                    backgroundColor: colors.darkGrey + "60",
                    borderColor: colors.grey + "30",
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: colors.primary }}
                  >
                    We’re probably not a fit if:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "You want a plug-and-play chatbot",
                      "The problem is mostly UI or marketing",
                      "Execution complexity is low",
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-m"
                        style={{ color: colors.lightGrey }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <JourneySection steps={journeySteps} />

        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                letterSpacing: "-0.02em",
                color: colors.lightGrey,
              }}
            >
              AI systems that scale{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                real work
              </span>
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: colors.lightGrey }}
            >
              No matter the industry. If your challenge is execution,
              coordination, and scale — we should talk.
            </p>
            <Link to="/contact#calendly">
              <Button
                size="lg"
                className="text-base px-8 py-6 h-auto font-semibold hover:opacity-90 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: "#FAFAFA",
                  border: "none",
                }}
              >
                Talk to us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agnostic;
