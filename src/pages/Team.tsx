import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { teamMembers } from "@/data/team";
import { useEffect } from "react";
import { Target, Rocket, Shield, Cpu, Building2 } from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years experience",
    description: "Building and shipping AI, ML, and data systems end to end",
  },
  {
    value: "50+",
    label: "Projects delivered",
    description: "Across startups, scale-ups, and enterprise",
  },
  {
    value: "20+",
    label: "Enterprise clients",
    description: "Including Google, Bloomberg, and Fortune 500 environments",
  },
  {
    value: "250+",
    label: "AI agents delivered",
    description: "Production systems supporting real users and workflows",
  },
];

const values = [
  {
    icon: Target,
    title: "Fundamentals first",
    description:
      "Solid engineering over flashy demos. Clean data, robust pipelines, scalable architecture.",
  },
  {
    icon: Rocket,
    title: "Production-ready",
    description:
      "No POCs that gather dust. We ship systems that run in production and scale from day one.",
  },
  {
    icon: Shield,
    title: "Transparent delivery",
    description:
      "Clear communication, thorough documentation, and a single point of accountability.",
  },
];

const technologies = [
  "Python",
  "TypeScript",
  "TensorFlow",
  "PyTorch",
  "AWS",
  "Azure",
  "GCP",
  "Databricks",
  "Spark",
  "Kubernetes",
];

const industries = [
  "Real estate",
  "Legal",
  "Oil & gas",
  "E‑commerce",
  "Healthcare",
  "Manufacturing",
  "Construction",
  "PropTech",
  "Marketing",
];

const Team = () => {
  useEffect(() => {
    document.title = "AI Flow | Team";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero */}
        <Section padding="hero" className="!pb-20">
          <div className="text-center mb-16">
            <div className="inline-block">
              <p className="mb-1 text-5xl md:text-7xl  text-muted-foreground">
                Senior expertise.
              </p>
              <h2 className="text-5xl md:text-7xl  font-bold font-alternates">
                Real-world results.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 text-center leading-relaxed">
              The team behind AI Flow brings deep engineering and strategy
              experience from Google, Bloomberg, and the NYU innovation
              ecosystem. We build AI systems that scale - for enterprises and
              high-growth teams alike.
            </p>
          </div>
        </Section>

        {/* Leadership */}
        <Section padding="compact">
          <SectionHeader
            title="Leadership"
            subtitle="Two founders. One standard: delivery that goes from discovery to production without shortcuts."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {Object.values(teamMembers).map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0 border border-border"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold font-alternates text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-grey font-medium text-sm mb-4">
                      {member.role}
                    </p>
                    <p className="text-grey leading-relaxed text-sm mb-6">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <SiteButton variant="secondary" arrow="up-right">
                        LinkedIn
                      </SiteButton>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* By the numbers */}
        <Section padding="compact">
          <SectionHeader
            title="Track record"
            subtitle="Numbers that matter to enterprises: experience, delivery, and production systems."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold font-alternates text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </p>
                  <p className="text-sm text-grey mt-1 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* How we work */}
        <Section padding="compact">
          <SectionHeader
            title="How we work"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-grey" />
                  </div>
                  <h3 className="text-lg font-bold font-alternates text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-grey text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Capabilities */}
        <Section padding="compact">
          <SectionHeader
            title="Technologies & industries"
            subtitle="We work with the stack that fits your environment and the sectors where we have proven delivery."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 mt-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-grey" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg border border-border bg-muted/50 text-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-grey" />
                  Industries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="text-xs px-3 py-1.5 rounded-lg border border-border bg-muted/50 text-foreground font-medium"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section padding="compact">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-16 text-center">
            <SectionHeader
              title="Let's build something that scales"
              subtitle="Ready to work with a team that ships production AI? Get in touch for a scoping call."
              variant="centered"
              titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
              subtitleClassName="text-grey max-w-xl mx-auto mb-8"
              action={
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#calendly">
                    <SiteButton variant="primary" arrow="up-right">
                      Book a scoping call
                    </SiteButton>
                  </Link>
                  <Link to="/case-studies">
                    <SiteButton variant="secondary">View our work</SiteButton>
                  </Link>
                </div>
              }
            />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
