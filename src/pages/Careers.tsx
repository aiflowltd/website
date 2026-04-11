import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Tag } from "@/components/Tag";
import {
  MapPin,
  Briefcase,
  Clock,
  Heart,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getAllJobs } from "@/data/jobs";
import { useEffect } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { LineGridCta } from "@/components/LineGridCta";
import { cn } from "@/lib/utils";
import {
  cell4Stats,
  gridCols4,
  lineGrid,
  lineHrClass,
} from "@/lib/lineGrid";

const Careers = () => {
  useEffect(() => {
    document.title = "AI Flow | Careers";
  }, []);
  const openPositions = getAllJobs();

  const benefits = [
    {
      icon: Zap,
      title: "Real production systems",
      description:
        "You'll ship into regulated financial institutions — not internal tools or proof-of-concepts. The work has stakes. Compliance failures cost real money and real reputation.",
    },
    {
      icon: Users,
      title: "AI-native from day one",
      description:
        "We use AI tools across everything — engineering, research, client work. If you've been waiting to work somewhere that treats AI as infrastructure rather than a feature, this is it.",
    },
    {
      icon: TrendingUp,
      title: "Hard problems, zero bureaucracy",
      description:
        "No committees, no layers. A senior team working directly with clients on technically demanding compliance pipelines across EU and US regulatory frameworks.",
    },
    {
      icon: Heart,
      title: "Remote and flexible",
      description:
        "100% remote. Freelance or full-time. We care about the quality of what you build, not where or when you build it.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero" className="!pb-20">
          <div className="text-center">
            <h1 className="mb-6 font-alternates text-5xl font-bold md:text-7xl">
              Build infrastructure that actually matters.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re a senior team building AI systems for regulated
              financial institutions — the kind of work where accuracy,
              traceability, and production reliability are requirements, not
              aspirations. If you&apos;re an engineer who uses AI to move faster
              and thinks seriously about the systems you build, we want to talk.
            </p>
          </div>
        </Section>

        <Section padding="compact">
          <SectionHeader
            title="Why work at AI Flow?"
            titleClassName="text-3xl font-bold font-alternates text-foreground md:text-4xl"
            subtitleClassName="max-w-2xl text-muted-foreground"
            variant="centered"
            className="mb-12"
          />
          <hr className={lineHrClass} />
          <div className={cn(lineGrid, gridCols4, "md:auto-rows-fr")}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className={cell4Stats(index)}>
                  <div className="mb-4 flex justify-center md:pt-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#E2E6F0] bg-muted/30 text-muted-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center font-alternates text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-muted-foreground md:pb-8">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className={lineHrClass} />
        </Section>

        <Section padding="compact">
          <SectionHeader
            title="Open roles"
            subtitle="At AI Flow, everyone works directly with clients, owns their deliverables, and is responsible for what ships. We care about the quality of the work and the people behind it — the interview reflects that."
            titleClassName="text-3xl font-bold font-alternates text-foreground md:text-4xl"
            subtitleClassName="max-w-2xl mx-auto text-center text-muted-foreground"
            variant="centered"
            className="mb-12"
          />
          <hr className={lineHrClass} />
          <div className="flex flex-col divide-y divide-border">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between md:gap-8"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="font-alternates text-2xl font-bold text-foreground">
                      {position.title}
                    </h3>
                    <Tag>{position.department}</Tag>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 shrink-0" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

                  <p className="leading-relaxed text-muted-foreground">
                    {position.shortDescription}
                  </p>
                </div>

                <Link to={`/careers/${position.id}`} className="shrink-0">
                  <SiteButton variant="primary" arrow="right">
                    View details
                  </SiteButton>
                </Link>
              </div>
            ))}
          </div>
          <hr className={lineHrClass} />
        </Section>

        <Section padding="compact">
          <LineGridCta>
            <h2 className="mb-4 font-alternates text-3xl font-bold text-foreground md:text-4xl">
              Don&apos;t see your role here?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              If you&apos;re an AI-first engineer and haven&apos;t seen a role
              that fits — send us a note anyway. We&apos;re always building
              the network for what&apos;s coming next.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <SiteButton variant="primary" arrow="up-right">
                  Get in touch
                </SiteButton>
              </Link>
            </div>
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
