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
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </Card>
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </Card>
          <Card className="bg-card border-border p-6 hover:border-primary transition-all text-center">
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">AI Agents Delivered</div>
          </Card>
        </div>

        {/* Additional Info Grid */}
        <div className="mt-4 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Technology Word Cloud */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "TypeScript",
                "TensorFlow",
                "React",
                "Next.js",

                "PyTorch",
                "AWS",
                "Azure",
                "GCP",
                "Databricks",
                "Spark",
                "Kubernetes",
                "Docker",
                "PostgreSQL",
                "... many more",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Average Project Duration */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Average Project Duration</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">3-12</div>
                <div className="text-muted-foreground">Months</div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground">
                      3 months
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      12 months
                    </span>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/60"></div>
                  <div className="absolute left-0 top-0 h-full w-[25%] bg-primary"></div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>MVP</span>
                  <span>Enterprise</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Most projects range from 3 months for MVP development to 12
                months for comprehensive enterprise solutions.
              </p>
            </div>
          </Card>

          {/* Types of Teams */}
          <Card className="bg-card border-border p-6 hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-4">Team Configurations</h3>
            <div className="grid grid-cols-2">
              <div className="p-4 border-r border-b border-border">
                <span className="text-sm text-muted-foreground">
                  Hourly part-time consultants
                </span>
              </div>
              <div className="p-4 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  Dedicated part-time teams
                </span>
              </div>
              <div className="p-4 border-r border-border">
                <span className="text-sm text-muted-foreground">
                  Full-time teams of 2-3 engineers
                </span>
              </div>
              <div className="p-4">
                <span className="text-sm text-muted-foreground">
                  Full-time teams of 3-4+ people
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
