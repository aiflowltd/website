import { Navigation } from "@/components/Navigation";
import { Tag } from "@/components/Tag";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Building,
  Users,
  Quote,
} from "lucide-react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getCaseStudy, type TechnicalApproach } from "@/data/caseStudies";
import { useEffect } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";
import { LineGridCta } from "@/components/LineGridCta";
import { cn } from "@/lib/utils";
import { cell3Col, gridCols3, lineGrid } from "@/lib/lineGrid";

/** Matches ServicesSection hairline rules. */
const editorialGridLine = "border-[#E2E6F0]";

/** Desktop column count: 2 → one row; 3 → one row; 4 → 2×2; 5+ → 3-col wrap. */
function technicalApproachMdCols(total: number): 1 | 2 | 3 {
  if (total <= 1) return 1;
  if (total === 2) return 2;
  if (total === 3) return 3;
  if (total === 4) return 2;
  return 3;
}

/** Hairline grid: right rule when a same-row neighbor exists; bottom rule when not last row. */
function technicalApproachCellClass(
  index: number,
  total: number,
  mdCols: 1 | 2 | 3,
) {
  const row = Math.floor(index / mdCols);
  const lastRow = Math.floor((total - 1) / mdCols);
  const hasRightNeighbor =
    index + 1 < total &&
    Math.floor(index / mdCols) === Math.floor((index + 1) / mdCols);

  return cn(
    "flex min-w-0 flex-col p-6 md:p-8 lg:p-10",
    index < total - 1 &&
      cn("border-b md:border-b-0", editorialGridLine),
    hasRightNeighbor && cn("md:border-r", editorialGridLine),
    row < lastRow && cn("md:border-b", editorialGridLine),
  );
}

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = id ? getCaseStudy(id) : null;

  useEffect(() => {
    if (study) {
      document.title = `AI Flow | ${study.title}`;
    } else {
      document.title = "AI Flow | Case Study";
    }
  }, [study]);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/case-studies");
    }
  };

  const panelClass =
    "rounded-lg border border-border bg-background/80 p-8 text-muted-foreground md:p-10";

  const technicalApproach = study.technicalApproach;
  const technicalApproachColumns =
    technicalApproach && technicalApproach.length > 0
      ? technicalApproachMdCols(technicalApproach.length)
      : 1;

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero" maxWidth="default">
          <button
            type="button"
            onClick={handleBack}
            className="group mb-8 inline-flex cursor-pointer items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to case studies</span>
          </button>

          <div className="mb-6 flex flex-wrap gap-2">
            {study.tags.map((tag: string, idx: number) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>

          <h1 className="mb-3 font-alternates text-4xl font-bold md:text-6xl">
            {study.title}
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-muted-foreground">
            How we delivered measurable impact for {study.client || "our client"}.
          </p>

          <div className="mb-10 flex flex-wrap gap-6 text-muted-foreground">
            {study.client && (
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 shrink-0" />
                <span>{study.client}</span>
              </div>
            )}
            {study.duration && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 shrink-0" />
                <span>{study.duration}</span>
              </div>
            )}
            {study.teamSize && (
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 shrink-0" />
                <span>{study.teamSize}</span>
              </div>
            )}
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg border border-border">
            <img
              src={study.image}
              alt={study.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Section>

        <Section padding="default">
          <SectionHeader
            title="Challenge"
            subtitle="The problem we were asked to solve."
            titleClassName="text-3xl font-bold font-alternates text-foreground"
            subtitleClassName="max-w-2xl text-muted-foreground"
            className="mb-8"
          />
          <div className={cn(panelClass, "text-lg leading-relaxed")}>
            {study.challengeDetail}
          </div>
        </Section>

        <Section padding="default">
          <SectionHeader
            title="Solution"
            subtitle="How we approached it and what we built."
            titleClassName="text-3xl font-bold font-alternates text-foreground"
            subtitleClassName="max-w-2xl text-muted-foreground"
            className="mb-8"
          />
          <div className={cn(panelClass, "text-lg leading-relaxed")}>
            <p className="mb-6">{study.solutionDetail}</p>
            {study.solutionPoints && (
              <ul className="space-y-4 border-t border-border pt-6">
                {study.solutionPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>

        {technicalApproach && technicalApproach.length > 0 && (
          <Section padding="default">
            <SectionHeader
              title="Technical approach"
              subtitle="The architecture and methods we used to deliver this outcome."
              titleClassName="text-3xl font-bold font-alternates text-foreground"
              subtitleClassName="max-w-2xl text-muted-foreground"
              className="mb-8"
            />
            <div className="overflow-hidden rounded-lg border border-border bg-background/80">
              <div
                className={cn(
                  "grid grid-cols-1 gap-0",
                  technicalApproachColumns === 1 && "md:grid-cols-1",
                  technicalApproachColumns === 2 && "md:grid-cols-2",
                  technicalApproachColumns === 3 && "md:grid-cols-3",
                )}
              >
                {technicalApproach.map(
                  (tech: TechnicalApproach, idx: number, arr) => (
                    <div
                      key={idx}
                      className={technicalApproachCellClass(
                        idx,
                        arr.length,
                        technicalApproachColumns,
                      )}
                    >
                      <h3 className="mb-3 font-alternates text-xl font-bold text-foreground">
                        {tech.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {tech.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Section>
        )}

        <Section padding="default">
          <SectionHeader
            title="Results and impact"
            subtitle="Measurable outcomes and lasting value delivered."
            titleClassName="text-3xl font-bold font-alternates text-foreground"
            subtitleClassName="max-w-2xl text-muted-foreground"
            className="mb-8"
          />
          <div className={cn(lineGrid, gridCols3)}>
            {study.results.map((result, idx) => (
              <div
                key={idx}
                className={cn(
                  cell3Col(idx),
                  "flex flex-col items-center text-center",
                )}
              >
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground md:mb-5">
                  {result.icon}
                </div>
                <h3 className="mb-2 font-alternates text-xl font-bold text-foreground md:text-2xl">
                  {result.label}
                </h3>
                {result.detail && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {result.detail}
                  </p>
                )}
              </div>
            ))}
          </div>

          {study.additionalResults && study.additionalResults.length > 0 && (
            <div className="mt-12 md:mt-16">
              <h3 className="mb-4 font-alternates text-xl font-bold text-foreground md:text-2xl">
                Additional outcomes
              </h3>
              <ul className="space-y-3">
                {study.additionalResults.map((result: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>

        {study.testimonial && (
          <Section padding="default">
            <div className="rounded-lg border border-border bg-gradient-to-br from-background via-background to-primary/5 p-10 text-center md:p-12">
              <div className="text-6xl leading-none text-muted-foreground/40">
                &ldquo;
              </div>
              <p className="mb-6 text-xl font-semibold italic text-foreground md:text-2xl">
                {study.testimonial.quote}
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-lg font-bold text-foreground">
                  {study.testimonial.author}
                </p>
                <p className="text-muted-foreground">
                  {study.testimonial.company}
                </p>
              </div>
              {study.interviewId && (
                <div className="mt-6">
                  <Link to={`/interviews/${study.interviewId}`}>
                    <SiteButton variant="secondary">
                      <Quote className="mr-2 h-4 w-4" />
                      Read full interview
                    </SiteButton>
                  </Link>
                </div>
              )}
            </div>
          </Section>
        )}

        <Section padding="default">
          <LineGridCta showRules={false}>
            <SectionHeader
              title="Ready to achieve similar results?"
              subtitle="Discuss your project with our team. We deliver AI systems that scale and drive real impact."
              variant="centered"
              titleClassName="mb-4 font-alternates text-3xl font-bold text-foreground md:text-4xl"
              subtitleClassName="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground"
              className="mb-0"
              action={
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact">
                    <SiteButton variant="primary" arrow="up-right">
                      Start your project
                    </SiteButton>
                  </Link>
                  <Link to="/case-studies">
                    <SiteButton variant="secondary">
                      View more case studies
                    </SiteButton>
                  </Link>
                </div>
              }
            />
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
