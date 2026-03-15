import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart,
  Building,
  Clock,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { colors } from "@/constants/colors";
import { JourneySection } from "@/components/JourneySection";
import { journeySteps } from "@/data/journey";

const PropTech = () => {
  useEffect(() => {
    document.title = "AI Flow | AI Agents for PropTech Platforms";
  }, []);

  const painPoints = [
    "Requests arrive incomplete, unclear, and inconsistent",
    "Context is split across tenants, units, contracts, and buildings",
    "Execution depends on people knowing what usually happens next",
    "Scaling volume means scaling support and operations teams",
  ];

  const frictionAreas = [
    {
      icon: MessageSquare,
      title: "Faster request handling",
      subtitle: "No more reading, guessing, or rerouting",
      description:
        "Inbound requests arrive via email, portals, chat, and forms, often missing key details.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      bullets: [
        "Understand request intent and urgency",
        "Identify the relevant tenant, unit, and contract",
        "Create clear summaries and next steps",
        "Route work immediately to the right operational flow",
      ],
      result: "Result: faster response times without increasing headcount.",
    },
    {
      icon: Workflow,
      title: "Consistent execution at scale",
      subtitle: "Every request handled the right way",
      description:
        "As teams grow, similar requests lead to different actions depending on who handles them.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      bullets: [
        "Ensure similar requests follow the same execution path",
        "Prevent steps from being skipped",
        "Flag edge cases early instead of letting them escalate",
        "Reduce dependency on individual experience",
      ],
      result:
        "Result: predictable operations, fewer errors, fewer escalations.",
    },
    {
      icon: TrendingUp,
      title: "Lower operational cost per unit",
      subtitle: "Scale volume, not coordination",
      description:
        "PropTech platforms grow customers faster than operations can keep up.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      bullets: [
        "Absorb coordination work that usually forces new hires",
        "Reduce back-and-forth between teams",
        "Minimize manual handoffs and follow-ups",
        "Let smaller teams handle higher volume reliably",
      ],
      result: "Result: growth without linear cost increases.",
    },
    {
      icon: Users,
      title: "Better tenant and owner experience",
      subtitle: "Clear communication, fewer surprises",
      description: "Delays and unclear updates erode trust.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      bullets: [
        "Acknowledge requests faster",
        "Keep stakeholders informed on status",
        "Reduce “what’s happening with my case?” messages",
        "Maintain consistent tone and clarity",
      ],
      result: "Result: higher satisfaction without extra support effort.",
    },
    {
      icon: BarChart,
      title: "Operational insight from everyday activity",
      subtitle: "Turn execution into intelligence",
      description:
        "Your platform already contains valuable signals - they’re just not connected.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      bullets: [
        "Identify recurring issues by asset or category",
        "Surface vendor performance problems",
        "Highlight bottlenecks in resolution times",
        "Support better prioritization and planning",
      ],
      result:
        "Result: decisions backed by real operational data, not intuition.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Designed for operational reality",
      description:
        "We build systems that handle ambiguity, partial information, and edge cases - because that’s the norm in property operations.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Workflow,
      title: "Built into your platform",
      description:
        "AI runs inside your existing architecture, workflows, and compliance constraints. No disruption to how your teams work.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Sparkles,
      title: "End-to-end ownership",
      description:
        "We design, build, deploy, monitor, and improve the system. You get working infrastructure, not a concept.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
    },
    {
      icon: Layers,
      title: "Modular and scalable",
      description:
        "Each system is composed of focused components that expand as your platform grows.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
    },
  ];

  const results = [
    {
      period: "Immediate improvements",
      timeframe: "first 30 days",
      icon: Clock,
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      uplift: [
        "Faster first response times",
        "Less manual triage",
        "Cleaner, structured operational data",
      ],
    },
    {
      period: "Mid-term gains",
      timeframe: "60–90 days",
      icon: TrendingUp,
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      uplift: [
        "Lower cost per unit",
        "Fewer escalations and SLA breaches",
        "Teams handle higher volume with less stress",
      ],
    },
    {
      period: "Long-term advantage",
      timeframe: "90+ days",
      icon: Target,
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      uplift: [
        "Predictable, scalable operations",
        "Continuous improvement through data",
        "A platform that grows without operational drag",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Section padding="hero" className="overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-alternates leading-tight text-foreground">
                  AI agents for PropTech platforms
                </h1>
                <p className="text-lg md:text-xl max-w-xl text-grey leading-relaxed">
                  PropTech platforms sit at the center of real estate
                  operations. Every day, they absorb requests, messages,
                  documents, and decisions from tenants, owners, vendors, and
                  internal teams.
                </p>
                <p className="text-lg md:text-xl max-w-xl text-grey leading-relaxed">
                  AI systems remove that friction by understanding requests,
                  maintaining context, and executing workflows automatically -
                  inside your platform.
                </p>
              </div>
              <div className="flex gap-4 max-w-xl">
                <Link to="/contact#calendly" className="w-1/2">
                  <SiteButton
                    variant="primary"
                    arrow="up-right"
                    className="w-full"
                  >
                    Talk to us
                  </SiteButton>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="relative rounded-2xl p-8 bg-card border border-border shadow-xl">
                <div className="relative h-80 flex items-center justify-center">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 360 260"
                    style={{ overflow: "visible" }}
                  >
                    <defs>
                      <linearGradient
                        id="proptechFlowGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: colors.primary }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: colors.secondary }}
                        />
                      </linearGradient>
                      <filter id="proptechGlow">
                        <feGaussianBlur stdDeviation="3" result="glow" />
                        <feMerge>
                          <feMergeNode in="glow" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <radialGradient id="coreGlow" r="70%" cx="50%" cy="50%">
                        <stop
                          offset="0%"
                          style={{
                            stopColor: colors.primary,
                            stopOpacity: 0.5,
                          }}
                        />
                        <stop
                          offset="60%"
                          style={{
                            stopColor: colors.secondary,
                            stopOpacity: 0.2,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: colors.secondary,
                            stopOpacity: 0,
                          }}
                        />
                      </radialGradient>
                    </defs>

                    <circle
                      cx="180"
                      cy="130"
                      r="60"
                      fill="url(#coreGlow)"
                      opacity="0.7"
                      style={{
                        animation: "coreGlow 4s ease-in-out infinite",
                      }}
                    />
                    <rect
                      x="120"
                      y="95"
                      width="120"
                      height="70"
                      rx="12"
                      fill={colors.darkGrey + "90"}
                      stroke={colors.primary + "60"}
                      strokeWidth="1.5"
                      style={{
                        animation: "corePulse 3.6s ease-in-out infinite",
                      }}
                    />
                    <text
                      x="180"
                      y="125"
                      textAnchor="middle"
                      fontSize="11"
                      fill={colors.lightGrey}
                      style={{ letterSpacing: "0.08em" }}
                    >
                      PROPTECH CORE
                    </text>
                    <text
                      x="180"
                      y="142"
                      textAnchor="middle"
                      fontSize="10"
                      fill={colors.lightGrey}
                    >
                      AI orchestration
                    </text>

                    {[
                      { x: 50, y: 40, label: "Tenant" },
                      { x: 290, y: 40, label: "Owner" },
                      { x: 50, y: 190, label: "Vendor" },
                      { x: 290, y: 190, label: "Ops" },
                    ].map((node, idx) => (
                      <g key={node.label}>
                        <rect
                          x={node.x}
                          y={node.y}
                          width="48"
                          height="48"
                          rx="10"
                          fill={
                            (idx % 2 === 0
                              ? colors.primary
                              : colors.secondary) + "2A"
                          }
                          stroke={
                            idx % 2 === 0
                              ? colors.primary + "70"
                              : colors.secondary + "70"
                          }
                          strokeWidth="1.5"
                          filter="url(#proptechGlow)"
                          style={{
                            filter: `drop-shadow(0 10px 20px ${
                              idx % 2 === 0 ? colors.primary : colors.secondary
                            }40)`,
                          }}
                        />
                        <text
                          x={node.x + 24}
                          y={node.y + 66}
                          textAnchor="middle"
                          fontSize="11"
                          fill={colors.lightGrey}
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}

                    {[
                      "M 74 64 C 110 64, 130 85, 160 110",
                      "M 286 64 C 250 64, 230 85, 200 110",
                      "M 74 214 C 110 214, 130 190, 160 150",
                      "M 286 214 C 250 214, 230 190, 200 150",
                    ].map((path, idx) => (
                      <path
                        key={`path-${idx}`}
                        d={path}
                        fill="none"
                        stroke="url(#proptechFlowGradient)"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        opacity="0.7"
                        style={{
                          animation: `flowDash ${
                            3 + idx * 0.3
                          }s linear infinite`,
                        }}
                      />
                    ))}

                    {[
                      "M 74 64 C 110 64, 130 85, 160 110",
                      "M 286 64 C 250 64, 230 85, 200 110",
                      "M 74 214 C 110 214, 130 190, 160 150",
                      "M 286 214 C 250 214, 230 190, 200 150",
                    ].map((path, idx) => (
                      <circle
                        key={`particle-${idx}`}
                        r="3"
                        fill={colors.warning}
                        style={{
                          filter: `drop-shadow(0 0 6px ${colors.warning})`,
                        }}
                      >
                        <animateMotion
                          dur={`${3 + idx * 0.4}s`}
                          repeatCount="indefinite"
                          path={path}
                        />
                      </circle>
                    ))}
                  </svg>

                  <div className="absolute top-2 left-0 right-0 text-center">
                    <div className="uppercase tracking-wider font-semibold text-grey text-[13px]">
                      Context stays connected
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-grey text-[13px]">
                    Requests flow into structured execution
                  </div>
                </div>

                <style>{`
                    @keyframes flowDash {
                      to {
                        stroke-dashoffset: -20;
                      }
                    }
                    @keyframes corePulse {
                      0%, 100% {
                        stroke: ${colors.primary}90;
                      }
                      50% {
                        stroke: ${colors.secondary}90;
                      }
                    }
                    @keyframes coreGlow {
                      0%, 100% {
                        transform: scale(0.98);
                        opacity: 0.55;
                      }
                      50% {
                        transform: scale(1.05);
                        opacity: 0.9;
                      }
                    }
                  `}</style>
              </div>
            </div>
          </div>
        </Section>

        <Section maxWidth="narrow">
          <SectionHeader
            title="Built for real-world property operations"
            subtitle="AI Flow builds AI systems designed for this exact operating environment."
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-3xl mx-auto mt-6"
          />
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <p className="text-lg max-w-3xl mx-auto text-grey">
              Messy inputs. High volume. Zero room for failure.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="group relative p-4 rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="relative flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-muted border border-border">
                      <MessageSquare className="w-4 h-4 text-grey" />
                    </div>
                    <p className="text-m flex-1 text-grey">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title={
              <>
                Where AI <span className="text-primary">removes</span> friction
                in PropTech
              </>
            }
            subtitle="Faster request handling, consistent execution, and lower cost per unit."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {frictionAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className="group relative rounded-2xl p-8 border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-muted" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                        <IconComponent className="w-7 h-7 text-grey group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold font-alternates mb-2 text-foreground">
                          {area.title}
                        </h3>
                        <p className="text-m mb-3 font-medium text-grey">
                          {area.subtitle}
                        </p>
                        <p className="text-grey leading-relaxed text-sm">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3 mt-6 pt-6 border-t border-border">
                      {area.bullets.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-grey" />
                          <span className="text-grey leading-relaxed text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                      <div className="pt-4 mt-4 border-t border-border">
                        <p className="text-grey leading-relaxed text-sm">
                          {area.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Why PropTech teams work with AI Flow"
            subtitle="We design for how property operations actually work - at scale."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group rounded-xl p-6 border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-grey group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-alternates mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-grey leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="What results look like"
            subtitle="From immediate wins to long-term advantage."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {results.map((result) => {
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

        <JourneySection steps={journeySteps} />

        <Section>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-16 text-center">
            <SectionHeader
              title="AI systems that make PropTech platforms scalable"
              subtitle="Let your platform understand, coordinate, and act - automatically."
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

export default PropTech;
