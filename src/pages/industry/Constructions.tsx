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
  Building,
  Building2,
  Package,
  Layers,
  ClipboardCheck,
  FileText,
  Shield,
  Workflow,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Target,
  Calendar,
  Users,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { JourneySection } from "@/components/JourneySection";
import { journeySteps } from "@/data/journey";
import { getCaseStudy } from "@/data/caseStudies";
import { Card } from "@/components/ui/card";

const agentIdeas = [
  {
    icon: Building,
    label: "Project Planning",
    description: "Blueprint analysis",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: ClipboardCheck,
    label: "Safety Compliance",
    description: "Regulatory checks",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: Package,
    label: "Material Tracking",
    description: "Inventory management",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: Calendar,
    label: "Schedule Optimization",
    description: "Timeline management",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
  },
  {
    icon: FileText,
    label: "Documentation",
    description: "Progress reports",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: Users,
    label: "Team Coordination",
    description: "Workforce management",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: AlertTriangle,
    label: "Risk Assessment",
    description: "Hazard detection",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
  },
  {
    icon: Layers,
    label: "Workflow",
    description: "Process automation",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
];

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

            const scale = isCenter ? 1 : distance === 1 ? 0.75 : 0.5;
            const opacity = isCenter ? 1 : distance === 1 ? 0.7 : 0.4;

            const iconSize = isCenter
              ? "52px"
              : distance === 1
              ? "40px"
              : "32px";

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
                      "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <div className="relative">
                    <div
                      className="relative rounded-xl p-3"
                      style={{
                        backgroundColor: isCenter ? agent.bg : "transparent",
                        border: isCenter ? `2px solid ${agent.border}` : "none",
                        transition:
                          "all 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
                            "all 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-10 text-center"
                    style={{
                      opacity: isCenter ? 1 : 0,
                      height: "70px",
                      minHeight: "70px",
                      transition:
                        "opacity 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

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

const Constructions = () => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [randomPositions, setRandomPositions] = useState(() => {
    const positions: Array<{ x: number; y: number; rotate: number; size: number }> = [];
    for (let i = 0; i < 12; i++) {
      positions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
        size: 20 + Math.random() * 15,
      });
    }
    return positions;
  });

  const resetAnimation = () => {
    setIsAssembled(false);
    setAnimationComplete(false);

    const newPositions: Array<{ x: number; y: number; rotate: number; size: number }> = [];
    for (let i = 0; i < 12; i++) {
      newPositions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
        size: 20 + Math.random() * 15,
      });
    }
    setRandomPositions(newPositions);

    setTimeout(() => {
      setIsAssembled(true);
    }, 100);
  };

  useEffect(() => {
    document.title = "AI Flow | AI Agents for Construction Teams";

    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAssembled) {
      const completeTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 5000);
      return () => clearTimeout(completeTimer);
    } else {
      setAnimationComplete(false);
    }
  }, [isAssembled]);

  const buildingStructure = [
    { x: 120, y: 200, size: 25, color: colors.primary },
    { x: 150, y: 200, size: 25, color: colors.primary },
    { x: 180, y: 200, size: 25, color: colors.primary },
    { x: 210, y: 200, size: 25, color: colors.primary },
    { x: 135, y: 170, size: 25, color: colors.success },
    { x: 165, y: 170, size: 25, color: colors.success },
    { x: 195, y: 170, size: 25, color: colors.success },
    { x: 150, y: 140, size: 25, color: colors.secondary },
    { x: 180, y: 140, size: 25, color: colors.secondary },
    { x: 165, y: 110, size: 25, color: colors.warning },
  ];

  const agentTypes = [
    {
      icon: Building2,
      title: "Project Planning & Blueprint Agents",
      subtitle: "Agents",
      description: "Transform blueprints into actionable workflows.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      features: [
        "Parse architectural drawings and extract key specifications",
        "Generate task breakdowns from project plans",
        "Identify dependencies and critical path items",
        "Automate resource allocation based on project scope",
        "Track progress against original blueprints",
      ],
      effect:
        "Projects start with clear, actionable plans. Teams know exactly what to build and when.",
    },
    {
      icon: Package,
      title: "Material Tracking & Inventory Agents",
      subtitle: "Agents",
      description: "Keep materials flowing without manual tracking.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      features: [
        "Monitor material deliveries and inventory levels",
        "Predict material needs based on project timeline",
        "Alert on shortages before they cause delays",
        "Automate reordering for critical supplies",
        "Track material costs and budget compliance",
      ],
      effect:
        "No more waiting for materials. Projects stay on schedule with proactive inventory management.",
    },
    {
      icon: Shield,
      title: "Safety Compliance & Risk Agents",
      subtitle: "Agents",
      description: "Prevent incidents before they happen.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      features: [
        "Monitor safety checklists and compliance requirements",
        "Identify potential hazards from site photos and reports",
        "Automate safety training reminders and certifications",
        "Track incident reports and generate insights",
        "Ensure regulatory compliance across all sites",
      ],
      effect:
        "Safer sites with fewer incidents. Compliance becomes automatic, not reactive.",
    },
    {
      icon: Calendar,
      title: "Schedule Optimization & Coordination Agents",
      subtitle: "Agents",
      description: "Keep projects on track despite complexity.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      features: [
        "Optimize crew schedules across multiple projects",
        "Reschedule automatically when delays occur",
        "Coordinate subcontractor availability",
        "Predict completion dates based on current progress",
        "Balance workloads to prevent bottlenecks",
      ],
      effect:
        "Projects finish on time. Schedules adapt to reality without manual intervention.",
    },
  ];

  const benefits = [
    {
      icon: Building,
      title: "Built for real construction sites",
      description:
        "Agents integrate with your existing tools, from Procore to Bluebeam, and work with your current workflows.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Workflow,
      title: "Fits your construction processes",
      description:
        "We align to your project management style, safety protocols, reporting requirements, and team structure.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Sparkles,
      title: "Full implementation ownership",
      description: "We architect, build, deploy, and monitor - not just advise.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
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
        "Project planning time reduced by 50%",
        "Material delays cut by 60%",
        "Safety compliance checks automated",
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
        "Projects stay on schedule 40% more often",
        "Material waste reduced by 30%",
        "Fewer safety incidents and compliance issues",
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
        "Higher project margins through efficiency",
        "Improved client satisfaction and repeat business",
        "Competitive advantage in bidding and execution",
      ],
    },
  ];

  const painPoints = [
    "Projects fall behind because planning takes too long",
    "Material shortages cause unexpected delays",
    "Scheduling conflicts across multiple projects create bottlenecks",
    "Customer inquiries take hours to convert into quotations, delaying sales",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    style={{
                      letterSpacing: "-0.02em",
                      color: colors.lightGrey,
                    }}
                  >
                    AI Agents for Construction Teams.
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
                      Build smarter, faster.
                    </span>
                  </h1>
                  <p
                    className="text-lg md:text-xl max-w-xl"
                    style={{ color: colors.grey, lineHeight: "1.6" }}
                  >
                    Purpose-built AI that manages projects, tracks materials, ensures safety, and keeps construction on schedule.
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

              <div className="relative">
                <div
                  className="relative rounded-2xl p-8 backdrop-blur-xl border"
                  style={{
                    backgroundColor: colors.mediumGrey + "40",
                    borderColor: colors.grey + "30",
                    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
                  }}
                >
                  <div className="relative h-80 flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 450 300"
                      style={{ overflow: "visible" }}
                    >
                      <defs>
                        <linearGradient
                          id="blockGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{
                              stopColor: colors.primary,
                              stopOpacity: 0.15,
                            }}
                          />
                          <stop
                            offset="100%"
                            style={{
                              stopColor: colors.secondary,
                              stopOpacity: 0.15,
                            }}
                          />
                        </linearGradient>
                        <filter id="blockShadow">
                          <feGaussianBlur
                            stdDeviation="3"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <g>
                        {buildingStructure.map((block, i) => {
                          const randomPos = randomPositions[i] || randomPositions[0];
                          const currentX = isAssembled ? block.x : randomPos.x;
                          const currentY = isAssembled ? block.y : randomPos.y;
                          const currentRotate = isAssembled ? 0 : randomPos.rotate;
                          const currentSize = isAssembled ? block.size : randomPos.size;

                          return (
                            <g
                              key={`block-${i}`}
                              style={{
                                transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRotate}deg)`,
                                transition: isAssembled
                                  ? "transform 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                  : "none",
                                transitionDelay: isAssembled
                                  ? `${i * 0.15}s`
                                  : "0s",
                              }}
                            >
                              <rect
                                x={-currentSize / 2}
                                y={-currentSize / 2}
                                width={currentSize}
                                height={currentSize}
                                rx="2"
                                fill={block.color + (isAssembled ? "30" : "20")}
                                stroke={block.color}
                                strokeWidth="2"
                                opacity={isAssembled ? 0.9 : 0.7}
                                style={{
                                  filter: "url(#blockShadow)",
                                  animation: isAssembled
                                    ? `blockPulse ${4 + i * 0.3}s ease-in-out infinite`
                                    : "none",
                                  animationDelay: isAssembled
                                    ? `${i * 0.3}s`
                                    : "0s",
                                  transition: "opacity 0.5s ease-out",
                                }}
                              />
                            </g>
                          );
                        })}

                        <g opacity="0.18">
                          {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
                            <line
                              key={`grid-h-${i}`}
                              x1="10"
                              y1={150 + i * 40}
                              x2="440"
                              y2={150 + i * 40}
                              stroke={colors.primary}
                              strokeWidth="1"
                              strokeDasharray="2,4"
                            />
                          ))}
                          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
                            <line
                              key={`grid-v-${i}`}
                              x1={225 + i * 40}
                              y1="10"
                              x2={225 + i * 40}
                              y2="290"
                              stroke={colors.primary}
                              strokeWidth="1"
                              strokeDasharray="2,4"
                            />
                          ))}
                        </g>
                      </g>
                    </svg>

                    <div className="absolute top-2 left-0 right-0 text-center">
                      <div
                        className="text-xs uppercase tracking-wider font-semibold"
                        style={{ color: colors.primary }}
                      >
                        Organized. Structured. Built.
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      <div className="text-xs" style={{ color: colors.grey }}>
                        AI-powered project coordination
                      </div>
                    </div>
                  </div>

                  <style>{`
                    @keyframes blockPulse {
                      0%, 100% {
                        transform: translateY(0px) scale(1);
                      }
                      50% {
                        transform: translateY(-8px) scale(1.05);
                      }
                    }
                  `}</style>
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
                Construction projects struggle with{" "}
                <span style={{ color: colors.primary }}>coordination</span>
                {" "}and{" "}
                <span style={{ color: colors.primary }}>unexpected delays.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
                {painPoints.map((point, idx) => {
                  const icons = [Building2, Package, Shield, Calendar, MessageSquare];
                  const iconColors = [
                    colors.primary,
                    colors.success,
                    colors.warning,
                    colors.secondary,
                    colors.primary,
                  ];
                  const IconComponent = icons[idx];
                  return (
                    <div
                      key={idx}
                      className="group relative p-4 rounded-lg border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: colors.darkGrey + "60",
                        borderColor: colors.grey + "30",
                        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          iconColors[idx] + "60";
                        e.currentTarget.style.boxShadow = `0 8px 24px ${iconColors[idx]}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = colors.grey + "30";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${iconColors[idx]}10, transparent)`,
                        }}
                      />
                      <div className="relative flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: iconColors[idx] + "20",
                            border: `1px solid ${iconColors[idx]}40`,
                          }}
                        >
                          <IconComponent
                            className="w-4 h-4"
                            style={{ color: iconColors[idx] }}
                          />
                        </div>
                        <p
                          className="text-sm flex-1"
                          style={{ color: colors.grey }}
                        >
                          {point}
                        </p>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r transition-all duration-500 group-hover:h-1"
                        style={{
                          width: "0%",
                          background: `linear-gradient(90deg, ${iconColors[idx]}, ${iconColors[idx]}80)`,
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
                AI Agents eliminate these bottlenecks.
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
                Where AI Agents Strengthen{" "}
                <span style={{ color: colors.primary }}>Construction Operations</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{
                        background: `linear-gradient(90deg, ${agent.iconColor}, ${agent.iconColor}80)`,
                        opacity: 0.7,
                      }}
                    />
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
                Why Construction Teams Choose{" "}
                <span style={{ color: colors.primary }}>AI Flow</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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

        <section className="py-20 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  construction operations. Each agent handles a distinct workflow stage.
                </p>
              </div>

              <div className="relative w-full overflow-hidden">
                <AgentCarousel />
              </div>
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

        <JourneySection steps={journeySteps} />

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
                Real{" "}
                <span style={{ color: colors.primary }}>Construction Results</span>
              </h2>
            </div>

            {(() => {
              const caseStudy = getCaseStudy("construction-materials-retailer");
              if (!caseStudy) return null;

              return (
                <Card
                  className="overflow-hidden border"
                  style={{
                    backgroundColor: colors.mediumGrey + "40",
                    borderColor: colors.grey + "30",
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div
                      className="relative h-64 md:h-auto bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${caseStudy.image})`,
                      }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40)`,
                        }}
                      />
                    </div>

                    <div className="p-8 md:p-12">
                      <div className="mb-4">
                        <span
                          className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full inline-block"
                          style={{
                            backgroundColor: colors.primary + "20",
                            color: colors.primary,
                          }}
                        >
                          {caseStudy.industry}
                        </span>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{
                          letterSpacing: "-0.02em",
                          color: colors.lightGrey,
                        }}
                      >
                        {caseStudy.title}
                      </h3>

                      <p
                        className="text-base mb-6 leading-relaxed"
                        style={{ color: colors.grey }}
                      >
                        {caseStudy.challenge}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {caseStudy.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="text-center p-4 rounded-lg"
                            style={{
                              backgroundColor: colors.darkGrey + "60",
                            }}
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                              style={{
                                backgroundColor: colors.primary + "20",
                                color: colors.primary,
                              }}
                            >
                              {result.icon}
                            </div>
                            <div
                              className="text-sm font-semibold mb-1"
                              style={{ color: colors.lightGrey }}
                            >
                              {result.label}
                            </div>
                            {result.detail && (
                              <div
                                className="text-xs"
                                style={{ color: colors.grey }}
                              >
                                {result.detail}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {caseStudy.metrics && (
                        <div
                          className="mb-6 p-4 rounded-lg border"
                          style={{
                            backgroundColor: colors.primary + "10",
                            borderColor: colors.primary + "30",
                          }}
                        >
                          <div className="grid grid-cols-3 gap-4 text-center">
                            {caseStudy.metrics.map((metric, idx) => (
                              <div key={idx}>
                                <div
                                  className="text-lg font-bold mb-1"
                                  style={{ color: colors.primary }}
                                >
                                  {metric.value}
                                </div>
                                <div
                                  className="text-xs"
                                  style={{ color: colors.grey }}
                                >
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link to={`/case-studies/${caseStudy.id}`}>
                        <Button
                          className="w-full font-semibold"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                            color: "#FAFAFA",
                            border: "none",
                          }}
                        >
                          Read Full Case Study
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                letterSpacing: "-0.02em",
                color: colors.lightGrey,
              }}
            >
              AI Agents That Elevate{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Construction Execution
              </span>
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: colors.grey }}
            >
              Expert systems that manage projects, track materials, ensure safety, and keep construction on schedule.
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

export default Constructions;
