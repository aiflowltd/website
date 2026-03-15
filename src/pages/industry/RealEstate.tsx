import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  MessageSquare,
  Home,
  DollarSign,
  Calendar,
  FileText,
  Building,
  BarChart,
  Shield,
  Workflow,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Target,
  Users,
  Search,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { JourneySection } from "@/components/JourneySection";
import { journeySteps } from "@/data/journey";

// Agent Ideas for Carousel
const agentIdeas = [
  {
    icon: MessageSquare,
    label: "Lead Response",
    description: "Instant lead qualification",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: Search,
    label: "Property Search",
    description: "MLS & inventory matching",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: DollarSign,
    label: "Pricing Analysis",
    description: "CMA generation",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
  },
  {
    icon: Calendar,
    label: "Scheduling",
    description: "Appointment coordination",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: FileText,
    label: "Listing Creation",
    description: "Marketing content",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: Bell,
    label: "Notifications",
    description: "Status updates",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
  },
  {
    icon: Users,
    label: "Client Matching",
    description: "Preference analysis",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: BarChart,
    label: "Portfolio Analysis",
    description: "Investment insights",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
];

// Carousel Component
const AgentCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative h-80 overflow-hidden pt-12 w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          duration: 50,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 pt-5 w-full">
          {agentIdeas.map((agent, index) => {
            const IconComponent = agent.icon;
            const isCenter = index === selectedIndex;
            const distance = Math.min(
              Math.abs(index - selectedIndex),
              Math.abs(index - selectedIndex + agentIdeas.length),
              Math.abs(index - selectedIndex - agentIdeas.length),
            );

            // Scale: center = 1, 2nd/4th = 0.75, 1st/5th = 0.5
            const scale = isCenter ? 1 : distance === 1 ? 0.75 : 0.5;
            const opacity = isCenter ? 1 : distance === 1 ? 0.7 : 0.4;

            // Icon sizes: center = 48px, 2nd/4th = 36px, 1st/5th = 24px
            const iconSize = isCenter
              ? "48px"
              : distance === 1
                ? "40px"
                : "36px";

            return (
              <CarouselItem
                key={`${agent.label}-${index}`}
                className="pl-2 md:pl-4 basis-1/5"
              >
                <div
                  className="flex flex-col items-center justify-center"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    transition:
                      "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {/* Just the icon */}
                  <div className="relative">
                    <IconComponent
                      style={{
                        color: agent.color,
                        width: iconSize,
                        height: iconSize,
                        filter: isCenter
                          ? `drop-shadow(0 8px 16px ${agent.color}60)`
                          : distance === 1
                            ? `drop-shadow(0 4px 8px ${agent.color}40)`
                            : `drop-shadow(0 2px 4px ${agent.color}20)`,
                        transition:
                          "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    />
                  </div>
                  {/* Label - always rendered with consistent height */}
                  <div
                    className="mt-8 text-center"
                    style={{
                      opacity: isCenter ? 1 : 0,
                      height: "80px",
                      minHeight: "80px",
                      transition:
                        "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div
                      className="text-m uppercase tracking-wider font-semibold mb-2"
                      style={{ color: colors.lightGrey }}
                    >
                      {agent.label}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.lightGrey }}
                    >
                      {agent.description}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const RealEstate = () => {
  useEffect(() => {
    document.title = "AI Flow | AI Agents for Real Estate Teams";
  }, []);

  const agentTypes = [
    {
      icon: MessageSquare,
      title: "Lead Qualification",
      subtitle: "Follow-Up Agents",
      description: "Respond faster. Convert more.",
      iconColor: colors.success, // Green for growth, incoming leads
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      features: [
        "Answer inbound leads instantly",
        "Pre-qualify based on budget, location, timing, financing",
        "Score intent based on interaction",
        "Create structured summaries",
        "Push qualified leads into your CRM",
      ],
      effect:
        "Agents spend time on conversations that convert. Lead-to-appointment rates rise without increasing ad spend.",
    },
    {
      icon: Home,
      title: "Property Matching",
      subtitle: "Recommendation Agents",
      description: "Send relevant options - not generic lists.",
      iconColor: colors.primary, // Blue for trust, intelligence
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      features: [
        "Capture preferences from calls, emails, and messages",
        "Search MLS and private inventory",
        "Track price changes, new listings, expirations",
        "Notify clients instantly when something matches",
      ],
      effect: "Clients feel taken care of and time-on-market decreases.",
    },
    {
      icon: DollarSign,
      title: "CMA & Pricing",
      subtitle: "Intelligence Agents",
      description:
        "Present pricing that is backed by real comps, not guesswork.",
      iconColor: colors.warning, // Yellow for value, money, pricing
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      features: [
        "Pull comps from relevant geographies",
        "Incorporate recent sales velocity",
        "Highlight rental potential",
        "Generate CMA packets with clear rationale",
      ],
      effect: "You win more listings because clients trust your pricing logic.",
    },
    {
      icon: Calendar,
      title: "Transaction Coordination",
      subtitle: "Agents",
      description:
        "Keep deals moving, without relying on memory or manual reminders.",
      iconColor: colors.secondary, // Violet for process, workflow
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      features: [
        "Schedule inspections, showings, appraisals",
        "Send reminders for missing docs",
        "Track conditions and deadlines",
        "Notify clients on status changes",
      ],
      effect: "Deals close smoother, deadlines stay visible, stress goes down.",
    },
    {
      icon: FileText,
      title: "Listing Creation",
      subtitle: "Marketing Agents",
      description: "Get listings live faster.",
      iconColor: colors.success, // Green for visibility, growth
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      features: [
        "Draft SEO-optimised descriptions",
        "Recommend top photos",
        "Produce variations for portals and email campaigns",
        "Generate ad copy that speaks to buyer motivation",
      ],
      effect:
        "Listings go live earlier, visibility improves, engagement increases.",
    },
    {
      icon: Building,
      title: "Property Management",
      subtitle: "Agents",
      description: "Recover time lost in repetitive admin.",
      iconColor: colors.primary, // Blue for operations, stability
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      features: [
        "Triage maintenance issues",
        "Assign contractors based on urgency",
        "Send rent reminders",
        "Provide updates to owners and tenants",
      ],
      effect:
        "Better occupancy, predictable rent roll, fewer back-and-forth calls.",
    },
    {
      icon: BarChart,
      title: "Investor & Portfolio",
      subtitle: "Agents",
      description: "Make faster decisions with clearer financial visibility.",
      iconColor: colors.secondary, // Violet for analytics, data
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      features: [
        "Analyse deals (IRR, NOI, cap rate, break-even, exit estimates)",
        "Surface value-add opportunities",
        "Flag underperforming properties",
        "Run hold-sell scenarios",
      ],
      effect: "Investors stop guessing and make moves earlier in the cycle.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Built for execution",
      description:
        "These agents are plugged into your operations - not side tools or demos. They align with lead workflows, listing approval processes, document steps, escrow and closing rules, owner reporting, and regional compliance obligations.",
      iconColor: colors.primary, // Blue for security, reliability
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Workflow,
      title: "Works inside your existing setup",
      description:
        "Agents can run through WhatsApp, SMS, Email, Slack, Web forms, and CRM. Your workflow remains familiar. Your team just stops doing repetitive work.",
      iconColor: colors.secondary, // Violet for integration, workflow
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Sparkles,
      title: "Full build, not advice",
      description:
        "We take responsibility for architecture, integration, deployment, monitoring, and rollout to the team. You get working systems - not instructions.",
      iconColor: colors.warning, // Yellow for magic, transformation
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
    },
  ];

  const results = [
    {
      period: "Immediate wins",
      timeframe: "first 30 days",
      icon: Clock,
      iconColor: colors.warning, // Yellow for time, urgency
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      uplift: [
        "Conversion increase from first-touch automation",
        "4–7 hours per week recovered per agent",
        "More listings won due to clear pricing logic",
      ],
    },
    {
      period: "Mid-term wins",
      timeframe: "60–90 days",
      icon: TrendingUp,
      iconColor: colors.success, // Green for growth, progress
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      uplift: [
        "Lower fallout rates",
        "Coordinators handle more volume with less stress",
        "Higher occupancy rate and recurring revenue",
      ],
    },
    {
      period: "Long-term advantage",
      timeframe: "90+ days",
      icon: Target,
      iconColor: colors.primary, // Blue for precision, goals
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      uplift: [
        "Stronger NOI via fewer delays and missed events",
        "Faster investment decisions",
        "Higher lifetime client value",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="relative">
        <Section padding="hero" className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-alternates leading-tight text-foreground">
                  AI agents for real estate
                </h1>
                <p className="text-lg md:text-xl max-w-xl text-grey leading-relaxed">
                  Increase closing rates, shorten deal cycles, and remove
                  operational drag across your pipeline.
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

            <div className="relative">
              <div className="relative rounded-2xl p-8 bg-card border border-border shadow-xl">
                {/* Flow visualization */}
                <div className="relative h-80">
                  {/* Curved flow line */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 250"
                    style={{ overflow: "visible" }}
                  >
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient
                        id="flowGradient"
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
                    </defs>
                    {/* Flow curve - thicker and more prominent */}
                    <path
                      d="M 20 120 Q 100 60, 200 90 T 380 120"
                      fill="none"
                      stroke="url(#flowGradient)"
                      strokeWidth="3"
                      style={{
                        filter: "drop-shadow(0 0 12px rgba(26, 136, 255, 0.6))",
                      }}
                    />
                    {/* AI Agent indicators along the flow */}
                    <g>
                      {/* Agent at start */}
                      <circle
                        cx="20"
                        cy="120"
                        r="6"
                        fill={colors.success}
                        style={{
                          filter: `drop-shadow(0 0 8px ${colors.success})`,
                          animation: "pulse 2s ease-in-out infinite",
                        }}
                      />
                      {/* Agent in middle */}
                      <circle
                        cx="200"
                        cy="90"
                        r="6"
                        fill={colors.primary}
                        style={{
                          filter: `drop-shadow(0 0 8px ${colors.primary})`,
                          animation: "pulse 2s ease-in-out infinite 0.5s",
                        }}
                      />
                      {/* Agent at end */}
                      <circle
                        cx="380"
                        cy="120"
                        r="6"
                        fill={colors.secondary}
                        style={{
                          filter: `drop-shadow(0 0 8px ${colors.secondary})`,
                          animation: "pulse 2s ease-in-out infinite 1s",
                        }}
                      />
                    </g>
                    {/* Animated particles moving along the flow */}
                    <circle
                      r="3"
                      fill={colors.warning}
                      style={{
                        filter: `drop-shadow(0 0 6px ${colors.warning})`,
                        animation: "flowMove 3s linear infinite",
                      }}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 20 120 Q 100 60, 200 90 T 380 120"
                      />
                    </circle>
                  </svg>
                  {/* Top annotation labels */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <div className="uppercase tracking-wider font-semibold text-grey text-[13px]">
                      AI agents guide your flow
                    </div>
                    <div className="font-medium text-grey text-[13px]">
                      Lead → Qualify → Close
                    </div>
                  </div>
                  {/* Agent names positioned below the dots */}
                  <div className="absolute top-[48%] left-[5%] w-[90%]">
                    <div className="flex justify-between items-start px-2">
                      <div className="text-center w-[20%]">
                        <div className="font-semibold mt-10 text-grey text-[13px]">
                          Inbound Agent
                        </div>
                      </div>
                      <div className="text-center w-[20%] -mt-[30px]">
                        <div className="font-semibold mt-10 text-grey text-[13px]">
                          Qualification Agent
                        </div>
                      </div>
                      <div className="text-center mt-10 w-[20%]">
                        <div className="font-semibold text-grey text-[13px]">
                          Closing Agent
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom annotation */}
                  <div className="absolute bottom-4 right-4">
                    <div className="text-xs text-grey text-[13px]">
                      Automated at every step
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section maxWidth="narrow">
          <SectionHeader
            title="Most real estate businesses lose deals because of slow follow-up, manual coordination, and fragmented information"
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
          />
        </Section>

        <Section>
          <SectionHeader
            title={
              <>
                Where AI agents <span className="text-primary">strengthen</span>{" "}
                real estate operations
              </>
            }
            subtitle="Purpose-built workflows for leads, qualification, and closing."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {agentTypes.map((agent, index) => {
              const IconComponent = agent.icon;
              const isLarge = index === 0 || index === 3;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-8 border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg overflow-hidden ${isLarge ? "lg:col-span-2" : ""}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-muted" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted border border-border">
                        <IconComponent className="w-7 h-7 text-grey" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold font-alternates mb-2 text-foreground">
                          {agent.title}
                        </h3>
                        <p className="text-m mb-3 font-medium text-grey">
                          {agent.subtitle}
                        </p>
                        <p className="text-grey leading-relaxed text-sm">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3 mt-6 pt-6 border-t border-border">
                      {agent.features
                        .slice(0, isLarge ? 4 : 3)
                        .map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-grey" />
                            <span className="text-grey leading-relaxed text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Why real estate leaders choose AI Flow"
            subtitle="We design for how real estate actually works - pipelines, coordination, and closing."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
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

        <Section className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-alternates text-foreground">
                Flexible agent workflows
              </h2>
              <p className="text-lg text-grey leading-relaxed max-w-xl">
                Create custom AI agents to automate specific tasks in your real
                estate pipeline. Each agent handles a distinct workflow stage.
              </p>
            </div>
            <div className="relative w-full overflow-hidden">
              <AgentCarousel />
            </div>
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
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div
                  key={index}
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
                        {result.uplift.map((item, idx) => (
                          <div
                            key={idx}
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
              title="AI agents that grow your pipeline"
              subtitle="Let your team focus on conversations, negotiations, and closing while AI handles the busy-work."
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

export default RealEstate;
