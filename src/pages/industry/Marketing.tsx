import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  MessageSquare,
  FileText,
  BarChart,
  Shield,
  Workflow,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Target,
  Users,
  Palette,
  Layers,
  PieChart,
  Rocket,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { JourneyAnimation } from "@/components/JourneyAnimation";

// Agent Ideas for Carousel
const agentIdeas = [
  {
    icon: FileText,
    label: "Content Production",
    description: "Copy & creative variants",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: MessageSquare,
    label: "Lead Qualification",
    description: "Instant response & routing",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: Users,
    label: "Personalization",
    description: "Segmentation & targeting",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: Palette,
    label: "Creative Optimization",
    description: "Performance-driven variants",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
  },
  {
    icon: BarChart,
    label: "Analytics & Attribution",
    description: "Automated insights",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: Rocket,
    label: "Campaign Coordination",
    description: "Launch & execution",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: Filter,
    label: "Funnel Agent",
    description: "Journey optimization",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: PieChart,
    label: "Reporting Agent",
    description: "Automated insights",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
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
              Math.abs(index - selectedIndex - agentIdeas.length)
            );

            // More dynamic scaling for marketing - larger range
            const scale = isCenter ? 1 : distance === 1 ? 0.8 : 0.55;
            const opacity = isCenter ? 1 : distance === 1 ? 0.75 : 0.35;

            // Icon sizes with more variation
            const iconSize = isCenter
              ? "56px"
              : distance === 1
              ? "42px"
              : "28px";

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
                      "transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Icon with square background */}
                  <div className="relative">
                    <div
                      className="relative rounded-xl p-3"
                      style={{
                        backgroundColor: isCenter ? agent.bg : "transparent",
                        border: isCenter ? `2px solid ${agent.border}` : "none",
                        transition:
                          "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: isCenter ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <IconComponent
                        style={{
                          color: agent.color,
                          width: iconSize,
                          height: iconSize,
                          filter: isCenter
                            ? `drop-shadow(0 8px 20px ${agent.color}70) brightness(1.2)`
                            : distance === 1
                            ? `drop-shadow(0 4px 10px ${agent.color}40)`
                            : `drop-shadow(0 2px 5px ${agent.color}20)`,
                          transition:
                            "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                      />
                    </div>
                  </div>
                  {/* Label - always rendered with consistent height for smooth transitions */}
                  <div
                    className="mt-10 text-center"
                    style={{
                      opacity: isCenter ? 1 : 0,
                      height: "70px",
                      minHeight: "70px",
                      transition:
                        "opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    <div
                      className="text-sm uppercase tracking-wider font-semibold mb-2"
                      style={{ color: colors.lightGrey }}
                    >
                      {agent.label}
                    </div>
                    <div
                      className="text-xs px-2"
                      style={{ color: colors.grey }}
                    >
                      {agent.description}
                    </div>
                    {/* Animated metric indicator for center */}
                    {isCenter && (
                      <div
                        className="mt-2 text-xs font-semibold"
                        style={{
                          color: agent.color,
                          animation: "fadeInUp 0.9s ease-out",
                        }}
                      >
                        <TrendingUp className="inline w-3 h-3 mr-1" />
                        Active
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const Marketing = () => {
  useEffect(() => {
    document.title = "AI Flow | AI Agents for Marketing Teams";
  }, []);

  const agentTypes = [
    {
      icon: FileText,
      title: "Content Production",
      subtitle: "Agents",
      description: "Ship more tests with less effort.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      features: [
        "Convert briefs into ready-to-launch copy",
        "Produce versions for persona, channel, funnel stage",
        "Generate visual variants and resize formats",
        "Repurpose long-form content into micro-assets",
      ],
      effect:
        "Faster go-live cycles, brand tone consistency, increased testing volume.",
    },
    {
      icon: MessageSquare,
      title: "Lead Qualification and Routing",
      subtitle: "Agents",
      description: "Engage while intent is still high.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      features: [
        "Respond instantly to inbound leads",
        "Score intent based on interaction and behavior",
        "Ask for missing info",
        "Push into CRM with structured fields",
      ],
      effect:
        "Higher conversion to meeting, sales works warm leads only, no lost opportunities due to delayed response.",
    },
    {
      icon: Users,
      title: "Personalization & Segmentation",
      subtitle: "Agents",
      description: "Increase relevance automatically.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      features: [
        "Cluster users into behavioral segments",
        "Personalize content blocks",
        "Trigger timing based on micro-events",
        "Recommend next actions (resend, switch channel, escalate)",
      ],
      effect:
        "Increased open & click rates, better sequencing of messaging, increased lifetime value.",
    },
    {
      icon: Palette,
      title: "AI Creative Optimization",
      subtitle: "Agents",
      description:
        "Let creatives iterate continuously - even when the team is busy.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      features: [
        "Pull performance data",
        "Identify winning angles and formats",
        "Produce optimized ad sets and variants",
        "Send suggested creative replacements",
      ],
      effect: "Lower CAC, higher CTR, more controlled experiments.",
    },
    {
      icon: BarChart,
      title: "Analytics & Attribution",
      subtitle: "Agents",
      description: "Insights that arrive automatically, not weeks later.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      features: [
        "Read dashboards and channel data",
        "Detect week-over-week anomalies",
        "Attribute spend to performance outcomes",
        "Create short reports for leadership",
      ],
      effect:
        "Faster decision cycles, better clarity on what drives revenue, no manual reporting workload.",
    },
    {
      icon: Rocket,
      title: "Campaign Coordination",
      subtitle: "Agents",
      description: "Launch faster. Launch cleanly.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      features: [
        "Turn ideas into tasks and dependencies",
        "Track approvals",
        "Follow up with stakeholders",
        "Notify when assets are ready",
      ],
      effect:
        "No bottlenecks, no forgotten deliverables, smooth cross-team execution.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Built for execution",
      description:
        "These agents live inside the workflows that matter: copy approval, funnel mapping, analytics review, targeting decisions, content scheduling. Not side tools. Not experiments. Actual delivery engines.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Workflow,
      title: "Works within your existing platforms",
      description:
        "Agents integrate directly with HubSpot, Salesforce, Webflow, Google Ads, Meta Ads Manager, Google Analytics, Notion, Slack, Email automation tools, FIGMA files, brand asset libraries. Your workflow stays familiar. Your team stops manually filling the gaps.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Sparkles,
      title: "Full build, not suggestions",
      description:
        "We design, deploy, monitor, and refine. You get: working agents, measurable outcomes, clear adoption plan, real performance tracking.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
    },
    {
      icon: Layers,
      title: "Modular agent architecture",
      description:
        "You can start with one agent - then extend: Funnel Agent, Content Agent, Personalization Agent, Reporting Agent, Reallocation Agent. Each agent handles one stage of your growth engine.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
    },
  ];

  const results = [
    {
      period: "Immediate wins",
      timeframe: "first 30 days",
      icon: Clock,
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      uplift: [
        "More meetings booked",
        "Higher early-touch conversion",
        "More assets live weekly",
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
        "Lower CAC",
        "Increased qualified pipeline",
        "Growth content delivered on time",
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
        "Higher LTV",
        "De-risked ad spend",
        "Better conversion from same budget",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* Hero Section - Split Screen */}
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Headline + Value */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    style={{
                      letterSpacing: "-0.02em",
                      color: colors.lightGrey,
                    }}
                  >
                    AI Agents for Marketing.
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
                      Turn campaigns into continuous execution.
                    </span>
                  </h1>
                  <p
                    className="text-lg md:text-xl max-w-xl"
                    style={{ color: colors.grey, lineHeight: "1.6" }}
                  >
                    Increase conversions, compress launch cycles, and remove the
                    operational drag slowing growth.
                  </p>
                </div>
                <div className="flex gap-4 max-w-xl">
                  <Link to="/contact#calendly" className="w-1/2">
                    <Button
                      size="lg"
                      className="text-base px-4 py-6 h-auto w-full font-semibold hover:opacity-90 transition-opacity inline-flex"
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

              {/* Right: Visual/Graphic - Marketing Funnel Network */}
              <div className="relative">
                <div
                  className="relative rounded-2xl p-8 backdrop-blur-xl border"
                  style={{
                    backgroundColor: colors.mediumGrey + "40",
                    borderColor: colors.grey + "30",
                    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
                  }}
                >
                  {/* Marketing Workflow Graph */}
                  <div className="relative h-80">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 500 320"
                      style={{ overflow: "visible" }}
                    >
                      <defs>
                        <linearGradient
                          id="workflowGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{
                              stopColor: colors.primary,
                              stopOpacity: 0.8,
                            }}
                          />
                          <stop
                            offset="50%"
                            style={{
                              stopColor: colors.success,
                              stopOpacity: 0.6,
                            }}
                          />
                          <stop
                            offset="100%"
                            style={{
                              stopColor: colors.secondary,
                              stopOpacity: 0.8,
                            }}
                          />
                        </linearGradient>
                        <filter id="nodeGlow">
                          <feGaussianBlur
                            stdDeviation="2"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Workflow nodes and connections */}
                      <g>
                        {/* Top tier: Input nodes */}
                        {/* Ideas */}
                        <g>
                          <rect
                            x="50"
                            y="30"
                            width="80"
                            height="45"
                            rx="8"
                            fill={colors.primary + "20"}
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#nodeGlow)"
                            style={{
                              animation: "pulse 2.5s ease-in-out infinite",
                            }}
                          />
                          <text
                            x="90"
                            y="57"
                            textAnchor="middle"
                            fill={colors.primary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Ideas
                          </text>
                        </g>

                        {/* BrandingMaterials */}
                        <g>
                          <rect
                            x="210"
                            y="30"
                            width="80"
                            height="45"
                            rx="8"
                            fill={colors.primary + "20"}
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#nodeGlow)"
                            style={{
                              animation: "pulse 2.5s ease-in-out infinite 0.3s",
                            }}
                          />
                          <text
                            x="250"
                            y="57"
                            textAnchor="middle"
                            fill={colors.primary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Branding
                          </text>
                        </g>

                        {/* TrendingPosts */}
                        <g>
                          <rect
                            x="370"
                            y="30"
                            width="80"
                            height="45"
                            rx="8"
                            fill={colors.primary + "20"}
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#nodeGlow)"
                            style={{
                              animation: "pulse 2.5s ease-in-out infinite 0.6s",
                            }}
                          />
                          <text
                            x="410"
                            y="57"
                            textAnchor="middle"
                            fill={colors.primary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Trending
                          </text>
                        </g>

                        {/* Middle: Automated Post Creation */}
                        <g>
                          <rect
                            x="180"
                            y="120"
                            width="140"
                            height="60"
                            rx="10"
                            fill={colors.success + "20"}
                            stroke={colors.success}
                            strokeWidth="2.5"
                            filter="url(#nodeGlow)"
                            style={{
                              animation: "pulse 2s ease-in-out infinite 0.2s",
                            }}
                          />
                          <text
                            x="250"
                            y="145"
                            textAnchor="middle"
                            fill={colors.success}
                            fontSize="12"
                            fontWeight="700"
                          >
                            Automated Post
                          </text>
                          <text
                            x="250"
                            y="165"
                            textAnchor="middle"
                            fill={colors.success}
                            fontSize="12"
                            fontWeight="700"
                          >
                            Creation
                          </text>
                        </g>

                        {/* Bottom tier: Output nodes */}
                        {/* Campaign creation */}
                        <g>
                          <rect
                            x="80"
                            y="240"
                            width="120"
                            height="50"
                            rx="8"
                            fill={colors.secondary + "20"}
                            stroke={colors.secondary}
                            strokeWidth="2"
                            filter="url(#nodeGlow)"
                            style={{
                              animation: "pulse 1.8s ease-in-out infinite",
                            }}
                          />
                          <text
                            x="140"
                            y="265"
                            textAnchor="middle"
                            fill={colors.secondary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Campaign
                          </text>
                          <text
                            x="140"
                            y="280"
                            textAnchor="middle"
                            fill={colors.secondary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Creation
                          </text>
                        </g>

                        {/* Automated Scheduling */}
                        <g>
                          <rect
                            x="300"
                            y="240"
                            width="120"
                            height="50"
                            rx="8"
                            fill={colors.secondary + "20"}
                            stroke={colors.secondary}
                            strokeWidth="2"
                            filter="url(#nodeGlow)"
                            style={{
                              animation: "pulse 1.8s ease-in-out infinite 0.4s",
                            }}
                          />
                          <text
                            x="360"
                            y="265"
                            textAnchor="middle"
                            fill={colors.secondary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Automated
                          </text>
                          <text
                            x="360"
                            y="280"
                            textAnchor="middle"
                            fill={colors.secondary}
                            fontSize="11"
                            fontWeight="600"
                          >
                            Scheduling
                          </text>
                        </g>

                        {/* Connection lines with animated flow */}
                        <g>
                          {/* Ideas → Automated Post Creation */}
                          <line
                            x1="90"
                            y1="75"
                            x2="220"
                            y2="120"
                            stroke={colors.primary}
                            strokeWidth="2"
                            opacity="0.5"
                            style={{
                              strokeDasharray: "6,6",
                              animation: "dashFlow 2.5s linear infinite",
                            }}
                          />
                          {/* BrandingMaterials → Automated Post Creation */}
                          <line
                            x1="250"
                            y1="75"
                            x2="250"
                            y2="120"
                            stroke={colors.primary}
                            strokeWidth="2"
                            opacity="0.5"
                            style={{
                              strokeDasharray: "6,6",
                              animation: "dashFlow 2.5s linear infinite 0.5s",
                            }}
                          />
                          {/* TrendingPosts → Automated Post Creation */}
                          <line
                            x1="410"
                            y1="75"
                            x2="280"
                            y2="120"
                            stroke={colors.primary}
                            strokeWidth="2"
                            opacity="0.5"
                            style={{
                              strokeDasharray: "6,6",
                              animation: "dashFlow 2.5s linear infinite 1s",
                            }}
                          />
                          {/* Automated Post Creation → Campaign creation */}
                          <line
                            x1="220"
                            y1="180"
                            x2="140"
                            y2="240"
                            stroke={colors.success}
                            strokeWidth="2.5"
                            opacity="0.6"
                            style={{
                              strokeDasharray: "8,8",
                              animation: "dashFlow 2s linear infinite",
                            }}
                          />
                          {/* Automated Post Creation → Automated Scheduling */}
                          <line
                            x1="280"
                            y1="180"
                            x2="360"
                            y2="240"
                            stroke={colors.success}
                            strokeWidth="2.5"
                            opacity="0.6"
                            style={{
                              strokeDasharray: "8,8",
                              animation: "dashFlow 2s linear infinite 0.8s",
                            }}
                          />
                        </g>

                        {/* Animated data particles flowing - one per line */}
                        {/* Ideas → Automated Post Creation */}
                        <circle
                          r="3"
                          fill={colors.warning}
                          opacity="0.9"
                          style={{
                            filter: `drop-shadow(0 0 4px ${colors.warning})`,
                          }}
                        >
                          <animateMotion dur="2.5s" repeatCount="indefinite">
                            <mpath href="#path-ideas-post" />
                          </animateMotion>
                        </circle>

                        {/* BrandingMaterials → Automated Post Creation */}
                        <circle
                          r="3"
                          fill={colors.warning}
                          opacity="0.9"
                          style={{
                            filter: `drop-shadow(0 0 4px ${colors.warning})`,
                          }}
                        >
                          <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          >
                            <mpath href="#path-branding-post" />
                          </animateMotion>
                        </circle>

                        {/* TrendingPosts → Automated Post Creation */}
                        <circle
                          r="3"
                          fill={colors.warning}
                          opacity="0.9"
                          style={{
                            filter: `drop-shadow(0 0 4px ${colors.warning})`,
                          }}
                        >
                          <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            begin="1s"
                          >
                            <mpath href="#path-trending-post" />
                          </animateMotion>
                        </circle>

                        {/* Automated Post Creation → Campaign creation */}
                        <circle
                          r="4"
                          fill={colors.success}
                          opacity="0.9"
                          style={{
                            filter: `drop-shadow(0 0 5px ${colors.success})`,
                          }}
                        >
                          <animateMotion dur="2s" repeatCount="indefinite">
                            <mpath href="#path-post-campaign" />
                          </animateMotion>
                        </circle>

                        {/* Automated Post Creation → Automated Scheduling */}
                        <circle
                          r="4"
                          fill={colors.success}
                          opacity="0.9"
                          style={{
                            filter: `drop-shadow(0 0 5px ${colors.success})`,
                          }}
                        >
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.8s"
                          >
                            <mpath href="#path-post-scheduling" />
                          </animateMotion>
                        </circle>

                        {/* Hidden paths for animation */}
                        <path
                          id="path-ideas-post"
                          d="M 90 75 L 220 120"
                          fill="none"
                          stroke="none"
                        />
                        <path
                          id="path-branding-post"
                          d="M 250 75 L 250 120"
                          fill="none"
                          stroke="none"
                        />
                        <path
                          id="path-trending-post"
                          d="M 410 75 L 280 120"
                          fill="none"
                          stroke="none"
                        />
                        <path
                          id="path-post-campaign"
                          d="M 220 180 L 140 240"
                          fill="none"
                          stroke="none"
                        />
                        <path
                          id="path-post-scheduling"
                          d="M 280 180 L 360 240"
                          fill="none"
                          stroke="none"
                        />
                      </g>
                    </svg>

                    {/* Top left annotation */}
                    <div className="absolute top-0 left-0">
                      <div
                        className="text-xs uppercase tracking-wider font-semibold"
                        style={{ color: colors.primary }}
                      >
                        AI Agents to boost productivity
                      </div>
                    </div>

                    {/* Bottom right annotation */}
                    <div className="absolute bottom-1 right-1">
                      <div className="text-xs" style={{ color: colors.grey }}>
                        Automated end-to-end
                      </div>
                    </div>
                  </div>

                  {/* CSS Animations */}
                  <style>{`
                    @keyframes dashFlow {
                      0% {
                        stroke-dashoffset: 0;
                      }
                      100% {
                        stroke-dashoffset: 20;
                      }
                    }
                    @keyframes fadeInUp {
                      from {
                        opacity: 0;
                        transform: translateY(20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement - Minimal */}
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
                Most marketing teams fall behind because of{" "}
                <span style={{ color: colors.primary }}>delayed reporting</span>
                {" "}and{" "}
                <span style={{ color: colors.primary }}>fragmented data.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
                {[
                  {
                    text: "Campaign ideas wait for creative assets",
                    delay: 0,
                    icon: FileText,
                    color: colors.primary,
                  },
                  {
                    text: "Reporting waits for data cleanup",
                    delay: 0.1,
                    icon: BarChart,
                    color: colors.secondary,
                  },
                  {
                    text: "Leads wait for qualification",
                    delay: 0.2,
                    icon: MessageSquare,
                    color: colors.success,
                  },
                  {
                    text: "Personalization waits for segmentation",
                    delay: 0.3,
                    icon: Users,
                    color: colors.warning,
                  },
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative p-4 rounded-lg border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: colors.darkGrey + "60",
                        borderColor: colors.grey + "30",
                        animation: `fadeInUp 0.6s ease-out ${item.delay}s both`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = item.color + "60";
                        e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = colors.grey + "30";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Animated background gradient on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                        }}
                      />
                      <div className="relative flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: item.color + "20",
                            border: `1px solid ${item.color}40`,
                          }}
                        >
                          <IconComponent
                            className="w-4 h-4"
                            style={{ color: item.color }}
                          />
                        </div>
                        <p
                          className="text-sm flex-1"
                          style={{ color: colors.grey }}
                        >
                          {item.text}
                        </p>
                      </div>
                      {/* Animated progress bar */}
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r transition-all duration-500 group-hover:h-1"
                        style={{
                          width: "0%",
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.width = "100%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.width = "0%";
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <p
                className="text-lg font-semibold mt-6"
                style={{ color: colors.lightGrey }}
              >
                AI Agents remove those delays.
              </p>
            </div>
          </div>
        </section>

        {/* Agent Types - Bento Grid */}
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
                Where AI Agents Strengthen{" "}
                <span style={{ color: colors.primary }}>
                  Your Marketing Operation
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {agentTypes.map((agent, index) => {
                const IconComponent = agent.icon;
                return (
                  <div
                    key={index}
                    className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02]`}
                    style={{
                      backgroundColor: colors.mediumGrey + "50",
                      borderColor: colors.grey + "30",
                      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
                      position: "relative",
                      overflow: "hidden",
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
                    {/* Gradient line decoration - always visible but subtle */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{
                        background: `linear-gradient(90deg, ${agent.iconColor}, ${agent.iconColor}80)`,
                        opacity: 0.7,
                      }}
                    />
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at center, ${agent.iconColor}15, transparent 70%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start gap-5 mb-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: agent.iconBg,
                            borderColor: agent.iconBorder,
                            boxShadow: `0 0 0 0 ${agent.iconColor}40`,
                            transition: "all 0.3s ease-out",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 20px ${agent.iconColor}50`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 0 0 ${agent.iconColor}40`;
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300"
                            style={{ color: agent.iconColor }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xl font-bold mb-2"
                            style={{ color: colors.lightGrey }}
                          >
                            {agent.title}
                          </h3>
                          <p
                            className="text-sm mb-3 font-medium"
                            style={{ color: colors.primary }}
                          >
                            {agent.subtitle}
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: colors.grey }}
                          >
                            {agent.description}
                          </p>
                        </div>
                      </div>
                      <div
                        className="space-y-3 mt-6 pt-6 border-t"
                        style={{ borderColor: colors.grey + "20" }}
                      >
                        <p
                          className="text-xs uppercase tracking-wider font-semibold mb-2"
                          style={{ color: colors.primary }}
                        >
                          Agents:
                        </p>
                        {agent.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{
                                backgroundColor: colors.success,
                                boxShadow: `0 0 6px ${colors.success}60`,
                              }}
                            />
                            <span
                              className="text-sm leading-relaxed"
                              style={{ color: colors.grey }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                        <div
                          className="pt-4 mt-4 border-t"
                          style={{ borderColor: colors.grey + "20" }}
                        >
                          <p
                            className="text-xs uppercase tracking-wider font-semibold mb-2"
                            style={{ color: colors.secondary }}
                          >
                            Impact:
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: colors.grey }}
                          >
                            {agent.effect}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose AI Flow - Compact */}
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
                Why Marketing Leaders Choose{" "}
                <span style={{ color: colors.primary }}>AI Flow</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl p-6 border"
                    style={{
                      backgroundColor: colors.mediumGrey + "30",
                      borderColor: colors.grey + "20",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                      style={{
                        backgroundColor: benefit.iconBg,
                        borderColor: benefit.iconBorder,
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: benefit.iconColor }}
                      />
                    </div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: colors.lightGrey }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: colors.grey }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Agent Ideas Carousel */}
        <section className="py-20 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <div className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    letterSpacing: "-0.02em",
                    color: colors.lightGrey,
                  }}
                >
                  Flexible agent{" "}
                  <span style={{ color: colors.primary }}>workflows</span>
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: colors.grey }}
                >
                  Create custom AI agents to automate specific tasks in your
                  marketing pipeline. Each agent handles a distinct workflow
                  stage.
                </p>
              </div>

              {/* Right: Carousel */}
              <div className="relative w-full overflow-hidden">
                <AgentCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Results - Timeline Style */}
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
                What{" "}
                <span style={{ color: colors.primary }}>Results Look Like</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <div
                    key={index}
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
                          style={{ color: colors.grey }}
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
                          {result.uplift.map((item, idx) => (
                            <div
                              key={idx}
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
                                className="text-sm leading-relaxed"
                                style={{ color: colors.grey }}
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
          <div className="container mx-auto max-w-7xl">
            <div
              className="relative rounded-2xl p-8 md:p-12 border"
              style={{
                backgroundColor: colors.mediumGrey + "40",
                borderColor: colors.grey + "30",
                boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
              }}
            >
              <JourneyAnimation
                steps={[
                  {
                    label: "Discovery",
                    description:
                      "We start with a diagnostic conversation to understand your workflow bottlenecks, pain points, and where execution slows down.",
                  },
                  {
                    label: "Workshop",
                    description:
                      "Together, we map out your current processes and identify specific areas where AI agents can deliver immediate value.",
                  },
                  {
                    label: "Roadmap",
                    description:
                      "We create a clear implementation plan with prioritized agents, expected outcomes, and a timeline for rollout.",
                  },
                  {
                    label: "Implementation",
                    description:
                      "Our team builds, integrates, and deploys working agents directly into your existing workflows and systems.",
                  },
                  {
                    label: "Maintenance",
                    description:
                      "We monitor performance, refine agents based on real usage, and ensure they continue to deliver value over time.",
                  },
                  {
                    label: "Follow ups",
                    description:
                      "Regular check-ins to optimize agents, add new capabilities, and ensure your team is getting maximum value.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                letterSpacing: "-0.02em",
                color: colors.lightGrey,
              }}
            >
              AI Agents That Grow Your{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Marketing Engine
              </span>
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: colors.grey }}
            >
              Your team focuses on strategy, positioning, and creative
              direction. Agents handle repetitive execution.
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

export default Marketing;
