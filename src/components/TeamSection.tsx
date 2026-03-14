import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";

import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = Math.min(2500, Math.max(1200, target * 15));
    const startTime = Date.now();
    const startValue = 1;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.floor(
        startValue + (target - startValue) * easedProgress,
      );
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count}
      {suffix}
    </div>
  );
};

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "years experience",
    description: "building and shipping AI, ML, and data systems end to end",
  },
  {
    value: 50,
    suffix: "+",
    label: "projects delivered",
    description: "across startups, scale-ups, and enterprise environments",
  },
  {
    value: 20,
    suffix: "+",
    label: "enterprise clients",
    description:
      "including teams connected to Google, Bloomberg, and leading industry players",
  },
  {
    value: 250,
    suffix: "+",
    label: "AI agents delivered",
    description: "– production systems supporting real users and workflows",
  },
];

const TeamIllustration = () => (
  <svg
    width={251}
    height={251}
    viewBox="0 0 251 251"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M167.333 188.25L188.25 209.167L230.083 167.333M125.5 156.875H83.6665C64.1746 156.875 54.4287 156.875 46.7409 160.059C36.4906 164.305 28.3467 172.449 24.1009 182.699C20.9165 190.387 20.9165 200.133 20.9165 219.625M162.104 34.4159C177.435 40.6217 188.25 55.652 188.25 73.2083C188.25 90.7646 177.435 105.795 162.104 112.001M141.187 73.2083C141.187 96.3122 122.458 115.042 99.354 115.042C76.2501 115.042 57.5207 96.3122 57.5207 73.2083C57.5207 50.1044 76.2501 31.375 99.354 31.375C122.458 31.375 141.187 50.1044 141.187 73.2083Z"
      stroke="#555A66"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="6 6"
    />
  </svg>
);

export const TeamSection = () => {
  return (
    <section id="team" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/25 via-card to-card p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Title spans full width */}
          <div className="relative z-10 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-2">
              Senior expertise. Real-world results.
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivery experience across complex systems and global teams
            </p>
          </div>

          <div className="relative z-10 lg:max-w-[55%]">
            <div>
              <div className="border-t border-border pt-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                      <p className="text-sm text-foreground mt-1">
                        <span className="font-semibold">{stat.label}</span>{" "}
                        <span className="text-muted-foreground">
                          {stat.description}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-10 whitespace-nowrap">
                <Link to="/team">
                  <SiteButton variant="primary" arrow="up-right">
                    Discover more about us
                  </SiteButton>
                </Link>
                <Link to="/careers">
                  <SiteButton variant="secondary">
                    Careers at AI Flow
                  </SiteButton>
                </Link>
              </div>
            </div>

            {/* Mobile: simplified team display */}
            <div className="lg:hidden flex flex-wrap gap-2 justify-center mt-8">
              <div className="w-full max-w-[280px] mx-auto">
                <TeamIllustration />
              </div>
            </div>
          </div>

          {/* Right: Network SVG illustration */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[30%] hidden lg:block pointer-events-none">
            <TeamIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
