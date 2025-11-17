import { Card } from "@/components/ui/card";
import {
  Linkedin,
  Github,
  Mail,
  Clock,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { teamArray, type TeamMember } from "@/data/team";
import { AI_FLOW_LOGO_SYMBOL } from "@/constants/images";
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
      { threshold: 0.5 }
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

    // Calculate duration based on target number (larger numbers = longer duration)
    const duration = Math.min(2500, Math.max(1200, target * 15));
    const startTime = Date.now();
    const startValue = 1;

    // Easing function for smooth animation
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      const currentValue = Math.floor(
        startValue + (target - startValue) * easedProgress
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
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}
      {suffix}
    </div>
  );
};

export const TeamSection = () => {
  const team: TeamMember[] = teamArray;

  return (
    <section id="team" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry veterans with deep expertise in AI/ML, having built
            products for Google, Bloomberg, and more
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Team Members and Logo Layout */}
          <div className="relative">
            {/* Top Row: Two Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className={`bg-card border-border p-8 hover:border-primary transition-all duration-300 group relative z-0 ${
                    member.id === "mihai-anton"
                      ? "order-1 md:order-2"
                      : "order-2 md:order-1"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Photo */}
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-32 h-32 rounded-full overflow-hidden group-hover:border-primary transition-colors">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <div className="text-primary font-semibold mb-4">
                      {member.role}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group/icon"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5 text-primary group-hover/icon:text-background transition-colors" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group/icon"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="w-5 h-5 text-primary group-hover/icon:text-background transition-colors" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group/icon"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5 text-primary group-hover/icon:text-background transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {/* AI Flow Logo - At intersection (bottom corners of top boxes, top middle of bottom box) */}
              <div className="hidden md:block absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 z-20">
                <div className="bg-background p-3 rounded-full border-4 border-primary shadow-lg group/logo cursor-pointer">
                  <img
                    src={AI_FLOW_LOGO_SYMBOL}
                    alt="AI Flow"
                    className="w-12 h-12 md:w-16 md:h-16 object-contain animate-logo-spin"
                  />
                </div>
              </div>
            </div>

            {/* Additional team members */}
            <div className="mt-4 relative z-0">
              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-center">
                  <div className="hidden md:flex items-center pl-2">
                    <div className="group relative z-20 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          GB
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          MS
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          AD
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          FB
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          CE
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          CE
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          AD
                        </span>
                      </div>
                    </div>
                    <div className="group relative -ml-4 z-30 hover:z-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center">
                        <span className="text-xl text-muted-foreground">
                          DM
                        </span>
                      </div>
                    </div>
                    <span className="text-xl ml-2 text-foreground">
                      {" "}
                      <p className="text-muted-foreground leading-relaxed">
                        + other senior ML, AI & Data engineers.
                      </p>
                    </span>
                  </div>
                  <div className="md:hidden">
                    <p className="text-muted-foreground leading-relaxed text-xl">
                      + other senior ML, AI & Data engineers.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <AnimatedCounter target={10} suffix="+" />
            <div className="text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <AnimatedCounter target={50} suffix="+" />
            <div className="text-muted-foreground">Projects Delivered</div>
          </Card>
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <AnimatedCounter target={20} suffix="+" />
            <div className="text-muted-foreground">Enterprise Clients</div>
          </Card>
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <AnimatedCounter target={250} suffix="+" />
            <div className="text-muted-foreground">AI Agents Delivered</div>
          </Card>
        </div>

        {/* How We Work */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="text-primary">Work</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible engagement models and proven processes <br /> to deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Technology Word Cloud */}
            <Card className="relative bg-gradient-to-br from-card via-card to-card/50 border-border p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  <span>Technologies</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TypeScript",
                    "TensorFlow",
                    "PyTorch",
                    "React",
                    "Next.js",
                    "GCP",
                    "LangChain",
                    "OpenAI",
                    "Kubernetes",
                    "Pinecone",
                    "Azure",
                    "Databricks",
                    "AWS",
                    "Docker",
                    "FastAPI",
                    "Node.js",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "Claude",
                    "Hugging Face",
                    "... many more",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium hover:bg-primary hover:text-background transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Average Project Duration */}
            <Card className="relative bg-gradient-to-br from-card via-card to-card/50 border-border p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Project Timeline</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      1-12+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Months (avg 3-6)
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs text-muted-foreground">
                          1 month
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          12 months
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/60"></div>
                      <div className="absolute left-0 top-0 h-full w-[10%] bg-primary animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs font-medium text-foreground/70">
                      <span>MVP/POC</span>
                      <span>Enterprise</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From rapid MVPs to comprehensive enterprise solutions, we
                    adapt to your timeline.
                  </p>
                </div>
              </div>
            </Card>

            {/* Flexible Team Configurations */}
            <Card className="relative bg-gradient-to-br from-card via-card to-card/50 border-border p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Flexible Engagement</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Choose the option that works best for your needs
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 transition-all cursor-default group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-foreground">
                        Hourly Consultants
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        On-demand expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 transition-all cursor-default group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-foreground">
                        Dedicated Engineers
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Full/part-time capacity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 transition-all cursor-default group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-foreground">
                        Small Teams (2-3)
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Agile squads
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 transition-all cursor-default group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-foreground">
                        Self-Managed Teams
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        End-to-end delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
