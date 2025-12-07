import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { colors } from "@/constants/colors";

export interface JourneyStep {
  label: string;
  description: string;
}

interface JourneyAnimationProps {
  steps: JourneyStep[];
  title?: string;
}

export const JourneyAnimation = ({ steps, title = "Your Journey With AI Flow" }: JourneyAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slower autoplay - 6 seconds per step
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        setPreviousStep(prev);
        return (prev + 1) % steps.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [steps.length, isPaused]);

  const handleNext = () => {
    setIsPaused(true);
    setPreviousStep(currentStep);
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setPreviousStep(currentStep);
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Calculate X position for current step (0 to 900 in viewBox coordinates)
  const getStepX = (index: number) => {
    const totalSteps = steps.length;
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
          {title}
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
          {steps.map((_, index) => (
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
          {steps.map((step, index) => {
            const x = getStepX(index);
            const y =
              150 -
              Math.sin((index / (steps.length - 1)) * Math.PI) * 30;
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
              keyPoints={`${previousStep / (steps.length - 1)};${
                currentStep / (steps.length - 1)
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
            {steps[currentStep].label}
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: colors.grey }}
          >
            {steps[currentStep].description}
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

