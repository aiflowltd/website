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
  FileText,
  Search,
  ClipboardCheck,
  FileSearch,
  Shield,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Clock,
  TrendingUp,
  Target,
  Scale,
  Gavel,
  BookOpen,
  Layers,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";

// Agent Ideas for Carousel
const agentIdeas = [
  {
    icon: FileText,
    label: "Case Intake",
    description: "Automated file opening",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: ClipboardCheck,
    label: "Contract Review",
    description: "Redline & compliance",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: Search,
    label: "Research",
    description: "Precedent retrieval",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: FileSearch,
    label: "Due Diligence",
    description: "Document review",
    color: colors.warning,
    bg: colors.warning + "20",
    border: colors.warning + "40",
  },
  {
    icon: Scale,
    label: "Compliance",
    description: "Regulatory checks",
    color: colors.primary,
    bg: colors.primary + "20",
    border: colors.primary + "40",
  },
  {
    icon: Gavel,
    label: "Case Analysis",
    description: "Legal strategy",
    color: colors.secondary,
    bg: colors.secondary + "20",
    border: colors.secondary + "40",
  },
  {
    icon: BookOpen,
    label: "Knowledge Base",
    description: "Internal precedents",
    color: colors.success,
    bg: colors.success + "20",
    border: colors.success + "40",
  },
  {
    icon: Layers,
    label: "Workflow",
    description: "Process automation",
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

            // Scale: center = 1, adjacent = 0.75, far = 0.5
            const scale = isCenter ? 1 : distance === 1 ? 0.75 : 0.5;
            const opacity = isCenter ? 1 : distance === 1 ? 0.7 : 0.4;

            // Icon sizes: center = 52px, adjacent = 40px, far = 32px
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
                  {/* Icon with square background */}
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
                  {/* Label - always rendered with consistent height */}
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

// Journey Animation Component
const JourneyAnimation = () => {
  const journeySteps = [
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
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slower autoplay - 6 seconds per step
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        setPreviousStep(prev);
        return (prev + 1) % journeySteps.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [journeySteps.length, isPaused]);

  const handleNext = () => {
    setIsPaused(true);
    setPreviousStep(currentStep);
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setPreviousStep(currentStep);
    setCurrentStep(
      (prev) => (prev - 1 + journeySteps.length) % journeySteps.length
    );
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Calculate X position for current step (0 to 900 in viewBox coordinates)
  const getStepX = (index: number) => {
    const totalSteps = journeySteps.length;
    return 50 + (index * 900) / (totalSteps - 1);
  };

  return (
    <div className="relative w-full">
      {/* Top annotation */}
      <div className="text-center mb-8">
        <div
          className="text-sm uppercase tracking-wider font-semibold mb-2"
          style={{ color: colors.primary }}
        >
          Your Journey With AI Flow
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: colors.mediumGrey + "60",
            borderColor: colors.grey + "40",
            color: colors.lightGrey,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primary;
            e.currentTarget.style.backgroundColor = colors.primary + "20";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.grey + "40";
            e.currentTarget.style.backgroundColor = colors.mediumGrey + "60";
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {journeySteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? "w-8" : ""
              }`}
              style={{
                backgroundColor:
                  index === currentStep
                    ? colors.primary
                    : index < currentStep
                    ? colors.primary + "60"
                    : colors.grey + "40",
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: colors.mediumGrey + "60",
            borderColor: colors.grey + "40",
            color: colors.lightGrey,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primary;
            e.currentTarget.style.backgroundColor = colors.primary + "20";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.grey + "40";
            e.currentTarget.style.backgroundColor = colors.mediumGrey + "60";
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Roadmap SVG */}
      <div className="relative h-80 w-full mb-8">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 300"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient
              id="roadmapPathGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
              <stop
                offset="50%"
                stopColor={colors.secondary}
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor={colors.primary}
                stopOpacity="0.4"
              />
            </linearGradient>
            <filter id="milestoneGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Road path - curved path */}
          <path
            id="journeyPath"
            d="M 50 150 Q 200 100, 350 120 T 650 120 T 950 150"
            fill="none"
            stroke="url(#roadmapPathGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Step labels below the path */}
          {journeySteps.map((step, index) => {
            const x = getStepX(index);
            const y =
              150 -
              Math.sin((index / (journeySteps.length - 1)) * Math.PI) * 30;
            const isActive = index === currentStep;

            return (
              <text
                key={index}
                x={x}
                y={y + 50}
                textAnchor="middle"
                fill={isActive ? colors.lightGrey : colors.grey}
                fontSize="14"
                fontWeight={isActive ? "700" : "500"}
                style={{
                  transition: "all 0.8s ease-in-out",
                }}
              >
                {step.label}
              </text>
            );
          })}

          {/* Single yellow dot moving along the path */}
          <circle
            key={`dot-${currentStep}-${previousStep}`}
            r="6"
            fill={colors.warning}
            style={{
              filter: `drop-shadow(0 0 8px ${colors.warning})`,
            }}
          >
            <animateMotion
              dur="1.5s"
              fill="freeze"
              path="M 50 150 Q 200 100, 350 120 T 650 120 T 950 150"
              keyPoints={`${previousStep / (journeySteps.length - 1)};${
                currentStep / (journeySteps.length - 1)
              }`}
              keyTimes="0;1"
              calcMode="linear"
            />
          </circle>
        </svg>
      </div>

      {/* Dynamic description text */}
      <div className="text-center min-h-[100px] flex items-center justify-center">
        <div
          key={currentStep}
          className="max-w-3xl mx-auto"
          style={{
            animation: "fadeInUp 0.6s ease-out",
          }}
        >
          <p
            className="text-lg font-semibold mb-2"
            style={{ color: colors.lightGrey }}
          >
            {journeySteps[currentStep].label}
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: colors.grey }}
          >
            {journeySteps[currentStep].description}
          </p>
        </div>
      </div>

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

const Legal = () => {
  const [isOrganized, setIsOrganized] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [randomPositions, setRandomPositions] = useState(() => {
    const positions: Array<{ x: number; y: number; rotate: number }> = [];
    // Left stack (4 docs)
    for (let i = 0; i < 4; i++) {
      positions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
      });
    }
    // Center stack (5 docs)
    for (let i = 0; i < 5; i++) {
      positions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
      });
    }
    // Right stack (4 docs)
    for (let i = 0; i < 4; i++) {
      positions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
      });
    }
    return positions;
  });

  const resetAnimation = () => {
    setIsOrganized(false);
    setAnimationComplete(false);

    // Generate new random positions
    const newPositions: Array<{ x: number; y: number; rotate: number }> = [];
    // Left stack (4 docs)
    for (let i = 0; i < 4; i++) {
      newPositions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
      });
    }
    // Center stack (5 docs)
    for (let i = 0; i < 5; i++) {
      newPositions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
      });
    }
    // Right stack (4 docs)
    for (let i = 0; i < 4; i++) {
      newPositions.push({
        x: 50 + Math.random() * 350,
        y: 30 + Math.random() * 200,
        rotate: (Math.random() - 0.5) * 60,
      });
    }
    setRandomPositions(newPositions);

    // Start organization animation immediately
    setTimeout(() => {
      setIsOrganized(true);
    }, 100);
  };

  useEffect(() => {
    document.title = "AI Flow | AI Agents for Legal Teams";

    // Start organization animation immediately
    const timer = setTimeout(() => {
      setIsOrganized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Track when animation completes (after all transitions finish)
  useEffect(() => {
    if (isOrganized) {
      // Wait for all animations to complete (longest delay + duration)
      // Longest delay is ~1.65s (1.2 + 0.45) + transition duration 2.5s = ~4.15s
      const completeTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 5000);
      return () => clearTimeout(completeTimer);
    } else {
      setAnimationComplete(false);
    }
  }, [isOrganized]);

  const agentTypes = [
    {
      icon: FileText,
      title: "Intake & Case-Opening Agents",
      subtitle: "Agents",
      description: "Make file opening immediate and consistent.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      features: [
        "Extract parties, dates, jurisdictions, and key obligations",
        "Classify matter type",
        "Surface urgency indicators",
        "Route to the correct team",
        "Generate structured intake records",
      ],
      effect:
        "Cases activate earlier, and teams begin with full context—not scattered documents.",
    },
    {
      icon: ClipboardCheck,
      title: "Contract Review & Redline Agents",
      subtitle: "Agents",
      description: "Accelerate review without sacrificing scrutiny.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      features: [
        "Compare drafts against your playbooks",
        "Detect deviations",
        "Generate compliant alternatives",
        "Justify revisions based on past decisions",
      ],
      effect:
        "Review cycles shorten naturally; partners review refined positions rather than raw drafts.",
    },
    {
      icon: Search,
      title: "Research & Precedent Retrieval Agents",
      subtitle: "Agents",
      description: "Turn past matters into living knowledge.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
      features: [
        "Search internal repositories",
        "Extract relevant clauses and reasoning",
        "Assemble concise research briefs",
        "Maintain links to original sources",
      ],
      effect:
        "Junior lawyers start closer to final answers; teams avoid duplicating prior research.",
    },
    {
      icon: FileSearch,
      title: "Due Diligence & Document Review Agents",
      subtitle: "Agents",
      description: "Prioritise risk instead of reacting to volume.",
      iconColor: colors.warning,
      iconBg: colors.warning + "20",
      iconBorder: colors.warning + "40",
      features: [
        "Ingest bulk documents",
        "Identify red flags, exceptions, and obligations",
        "Cluster related material",
        "Produce review packs",
      ],
      effect:
        "Material issues become visible while timeline is still flexible.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Built for real matters, not demonstration",
      description:
        "Agents operate with audit trails, versioned outputs, and explicit escalation boundaries.",
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Workflow,
      title: "Fits existing workflows",
      description:
        "We align to matter-opening policies, playbooks, confidentiality restrictions, billing rules, and partner approvals.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Sparkles,
      title: "Full implementation ownership",
      description: "We architect, build, deploy, and monitor—not just advise.",
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
      items: [
        "Faster case opening",
        "Automated contract review",
        "Earlier access to key facts",
        "Reduced manual intake steps",
      ],
      uplift: [
        "Cases activate 2-3x faster",
        "Review cycles shorten by 40-60%",
        "Junior time redirected to higher-value work",
      ],
    },
    {
      period: "Mid-term gains",
      timeframe: "60–90 days",
      icon: TrendingUp,
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
      items: [
        "Precedent retrieval automated",
        "Research briefs generated automatically",
        "Document review prioritized by risk",
      ],
      uplift: [
        "Research time reduced by 50%+",
        "Better consistency across matters",
        "Partners review refined positions",
      ],
    },
    {
      period: "Long-term advantage",
      timeframe: "90+ days",
      icon: Target,
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
      items: [
        "Knowledge base continuously updated",
        "Workflow bottlenecks eliminated",
        "Audit trails maintained automatically",
      ],
      uplift: [
        "Higher throughput without headcount",
        "Improved client satisfaction",
        "Competitive advantage in speed and quality",
      ],
    },
  ];

  const painPoints = [
    "Delays at case opening because information arrives incomplete",
    "Contract drafts circulating longer than they should",
    "Repeated research even when precedent already exists",
    "Junior time allocated to manual review and summarisation",
  ];

  const diagnosticAreas = [
    "Repeated drafting",
    "Manual intake steps",
    "Research loops",
    "Delayed access to key facts",
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
                    AI Agents for Legal Teams.
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
                      Elevate legal execution.
                    </span>
                  </h1>
                  <p
                    className="text-lg md:text-xl max-w-xl"
                    style={{ color: colors.grey, lineHeight: "1.6" }}
                  >
                    Purpose-built AI that performs routine legal work reliably,
                    securely, and under supervision.
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

              {/* Right: Visual/Graphic - Professional Legal Document Organization */}
              <div className="relative">
                <div
                  className="relative rounded-2xl p-8 backdrop-blur-xl border"
                  style={{
                    backgroundColor: colors.mediumGrey + "40",
                    borderColor: colors.grey + "30",
                    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
                  }}
                >
                  {/* Professional Document Organization Visualization */}
                  <div className="relative h-80 flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 450 300"
                      style={{ overflow: "visible" }}
                    >
                      <defs>
                        <linearGradient
                          id="documentGradient"
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
                        <filter id="documentShadow">
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

                      {/* Organized Document Stacks */}
                      <g>
                        {/* Left Stack - Case Files */}
                        <g>
                          {/* Document layers with organization animation */}
                          {[0, 1, 2, 3].map((i) => {
                            // Organized position
                            const orgX = 90 + i * 2.5;
                            const orgY = 180 - i * 4;
                            const orgRotate = -0.8;

                            // Random initial position from stable array
                            const randomPos = randomPositions[i];
                            const randomX = randomPos.x;
                            const randomY = randomPos.y;
                            const randomRotate = randomPos.rotate;

                            const currentX = isOrganized ? orgX : randomX;
                            const currentY = isOrganized ? orgY : randomY;
                            const currentRotate = isOrganized
                              ? orgRotate
                              : randomRotate;

                            return (
                              <g
                                key={`left-${i}`}
                                style={{
                                  transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRotate}deg)`,
                                  transition: isOrganized
                                    ? "transform 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                    : "none",
                                  transitionDelay: isOrganized
                                    ? `${i * 0.15}s`
                                    : "0s",
                                }}
                              >
                                <rect
                                  x="-40"
                                  y="-55"
                                  width="80"
                                  height="110"
                                  rx="3"
                                  fill={
                                    colors.primary + (i === 0 ? "25" : "15")
                                  }
                                  stroke={colors.primary}
                                  strokeWidth="2"
                                  opacity={isOrganized ? 0.9 - i * 0.15 : 0.7}
                                  style={{
                                    filter: "url(#documentShadow)",
                                    animation: isOrganized
                                      ? `documentFloatLeft ${
                                          4.5 + i * 0.6
                                        }s ease-in-out infinite`
                                      : "none",
                                    animationDelay: isOrganized
                                      ? `${i * 0.5}s`
                                      : "0s",
                                    transition: "opacity 0.5s ease-out",
                                  }}
                                />
                              </g>
                            );
                          })}
                        </g>

                        {/* Center Stack - Contracts */}
                        <g>
                          {[0, 1, 2, 3, 4].map((i) => {
                            // Organized position
                            const orgX = 220 + i * 2;
                            const orgY = 160 - i * 3;
                            const orgRotate = 0;

                            // Random initial position from stable array (offset by 4 for center stack)
                            const randomPos = randomPositions[4 + i];
                            const randomX = randomPos.x;
                            const randomY = randomPos.y;
                            const randomRotate = randomPos.rotate;

                            const currentX = isOrganized ? orgX : randomX;
                            const currentY = isOrganized ? orgY : randomY;
                            const currentRotate = isOrganized
                              ? orgRotate
                              : randomRotate;

                            return (
                              <g
                                key={`center-${i}`}
                                style={{
                                  transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRotate}deg)`,
                                  transition: isOrganized
                                    ? "transform 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                    : "none",
                                  transitionDelay: isOrganized
                                    ? `${0.6 + i * 0.15}s`
                                    : "0s",
                                }}
                              >
                                <rect
                                  x="-40"
                                  y="-65"
                                  width="80"
                                  height="130"
                                  rx="3"
                                  fill={
                                    colors.success + (i === 0 ? "25" : "15")
                                  }
                                  stroke={colors.success}
                                  strokeWidth="2"
                                  opacity={isOrganized ? 0.9 - i * 0.12 : 0.7}
                                  style={{
                                    filter: "url(#documentShadow)",
                                    animation: isOrganized
                                      ? `documentFloatCenter ${
                                          5 + i * 0.5
                                        }s ease-in-out infinite`
                                      : "none",
                                    animationDelay: isOrganized
                                      ? `${i * 0.4}s`
                                      : "0s",
                                    transition: "opacity 0.5s ease-out",
                                  }}
                                />
                              </g>
                            );
                          })}
                        </g>

                        {/* Right Stack - Research */}
                        <g>
                          {[0, 1, 2, 3].map((i) => {
                            // Organized position
                            const orgX = 350 + i * 2.5;
                            const orgY = 170 - i * 4;
                            const orgRotate = 0.8;

                            // Random initial position from stable array (offset by 9 for right stack)
                            const randomPos = randomPositions[9 + i];
                            const randomX = randomPos.x;
                            const randomY = randomPos.y;
                            const randomRotate = randomPos.rotate;

                            const currentX = isOrganized ? orgX : randomX;
                            const currentY = isOrganized ? orgY : randomY;
                            const currentRotate = isOrganized
                              ? orgRotate
                              : randomRotate;

                            return (
                              <g
                                key={`right-${i}`}
                                style={{
                                  transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRotate}deg)`,
                                  transition: isOrganized
                                    ? "transform 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                    : "none",
                                  transitionDelay: isOrganized
                                    ? `${1.2 + i * 0.15}s`
                                    : "0s",
                                }}
                              >
                                <rect
                                  x="-40"
                                  y="-60"
                                  width="80"
                                  height="120"
                                  rx="3"
                                  fill={
                                    colors.secondary + (i === 0 ? "25" : "15")
                                  }
                                  stroke={colors.secondary}
                                  strokeWidth="2"
                                  opacity={isOrganized ? 0.9 - i * 0.15 : 0.7}
                                  style={{
                                    filter: "url(#documentShadow)",
                                    animation: isOrganized
                                      ? `documentFloatRight ${
                                          4.8 + i * 0.6
                                        }s ease-in-out infinite`
                                      : "none",
                                    animationDelay: isOrganized
                                      ? `${i * 0.5}s`
                                      : "0s",
                                    transition: "opacity 0.5s ease-out",
                                  }}
                                />
                              </g>
                            );
                          })}
                        </g>

                        {/* Professional grid overlay - dotted and centered */}
                        <g opacity="0.18">
                          {/* Horizontal lines - centered around y=150 */}
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
                          {/* Vertical lines - centered around x=225 */}
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

                    {/* Top annotation */}
                    <div className="absolute top-2 left-0 right-0 text-center">
                      <div
                        className="text-xs uppercase tracking-wider font-semibold"
                        style={{ color: colors.primary }}
                      >
                        Organized. Structured. Efficient.
                      </div>
                    </div>

                    {/* Bottom annotation */}
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      <div className="text-xs" style={{ color: colors.grey }}>
                        AI-powered document management
                      </div>
                    </div>
                  </div>

                  {/* CSS Animations */}
                  <style>{`
                    @keyframes documentFloatLeft {
                      0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(-0.8deg);
                      }
                      50% {
                        transform: translateY(-18px) translateX(-3px) rotate(1.2deg);
                      }
                    }
                    @keyframes documentFloatCenter {
                      0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                      }
                      50% {
                        transform: translateY(-20px) translateX(2px) rotate(-1.5deg);
                      }
                    }
                    @keyframes documentFloatRight {
                      0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0.8deg);
                      }
                      50% {
                        transform: translateY(-18px) translateX(3px) rotate(-1.2deg);
                      }
                    }
                    @keyframes linePulse {
                      0%, 100% {
                        opacity: 0.2;
                      }
                      50% {
                        opacity: 0.5;
                      }
                    }
                  `}</style>

                  {/* Refresh Button - Bottom Right */}
                  <Button
                    onClick={resetAnimation}
                    disabled={!animationComplete}
                    variant="outline"
                    size="icon"
                    className="absolute bottom-4 right-4 rounded-full w-10 h-10 p-0"
                    style={{
                      backgroundColor: animationComplete
                        ? colors.mediumGrey + "60"
                        : colors.darkGrey + "40",
                      borderColor: animationComplete
                        ? colors.grey + "40"
                        : colors.grey + "20",
                      color: animationComplete
                        ? colors.lightGrey
                        : colors.grey + "60",
                      cursor: animationComplete ? "pointer" : "not-allowed",
                      opacity: animationComplete ? 1 : 0.5,
                    }}
                  >
                    <RefreshCw
                      className="w-5 h-5"
                      style={{
                        color: animationComplete
                          ? colors.primary
                          : colors.grey + "60",
                      }}
                    />
                  </Button>
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
                Modern legal practice doesn't struggle with{" "}
                <span style={{ color: colors.primary }}>expertise</span>
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: colors.grey }}
              >
                It struggles with volume, turnaround time, and fragmented
                information.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
                {painPoints.map((point, idx) => {
                  const icons = [FileText, ClipboardCheck, Search, FileSearch];
                  const iconColors = [
                    colors.primary,
                    colors.success,
                    colors.secondary,
                    colors.warning,
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
                      {/* Animated background gradient on hover */}
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
                      {/* Animated progress bar */}
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
                style={{ color: colors.primary }}
              >
                AI Agents eliminate these bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* Client Journey Animation */}
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
              <JourneyAnimation />
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
                <span style={{ color: colors.primary }}>Legal Workflows</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentTypes.map((agent, index) => {
                const IconComponent = agent.icon;
                const isLarge = index === 0 || index === 2;
                return (
                  <div
                    key={index}
                    className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                      isLarge ? "lg:col-span-2" : ""
                    }`}
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
                Why Legal Teams Choose{" "}
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
                  legal practice. Each agent handles a distinct workflow stage.
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
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider font-semibold mb-3"
                          style={{ color: colors.primary }}
                        >
                          Outcomes
                        </p>
                        <div className="space-y-2.5">
                          {result.items.map((item, idx) => (
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
                                  backgroundColor: colors.success,
                                  boxShadow: `0 0 4px ${colors.success}60`,
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
                      <div
                        className="pt-4 border-t"
                        style={{ borderColor: colors.grey + "20" }}
                      >
                        <p
                          className="text-xs uppercase tracking-wider font-semibold mb-3"
                          style={{ color: colors.secondary }}
                        >
                          Performance lift
                        </p>
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

        {/* How Teams Begin - Minimal */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  letterSpacing: "-0.02em",
                  color: colors.lightGrey,
                }}
              >
                A Practical Way to{" "}
                <span style={{ color: colors.primary }}>Begin</span>
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: colors.grey }}
              >
                Most teams start with a short diagnostic conversation focused on
                where execution slows: repeated drafting, manual intake steps,
                research loops, delayed access to key facts.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-12 border"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
                borderColor: colors.primary + "30",
              }}
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: colors.primary + "20",
                    }}
                  >
                    <CheckCircle2
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: colors.lightGrey }}
                  >
                    Clear scope
                  </p>
                </div>
                <div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: colors.primary + "20",
                    }}
                  >
                    <CheckCircle2
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: colors.lightGrey }}
                  >
                    Measurable operational uplift
                  </p>
                </div>
                <div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: colors.primary + "20",
                    }}
                  >
                    <CheckCircle2
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: colors.lightGrey }}
                  >
                    Defined risk and supervision boundaries
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: colors.lightGrey }}
              >
                No disruption. No platform rollout.
              </p>
              <p className="text-base" style={{ color: colors.grey }}>
                Just targeted, working systems that increase throughput and
                consistency.
              </p>
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
              AI Agents That Elevate{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Legal Execution
              </span>
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: colors.grey }}
            >
              Expert systems that perform routine legal work reliably, securely,
              and under supervision.
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

export default Legal;
