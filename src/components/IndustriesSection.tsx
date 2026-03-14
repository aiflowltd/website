import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { SiteButton } from "@/components/SiteButton";
import { getCaseStudy } from "@/data/caseStudies";

const industries = [
  {
    title: "Construction",
    description: "Intake, quotation, and risk systems for complex projects.",
    href: "/industry/construction",
    caseStudyId: "automated-customer-intake",
  },
  {
    title: "Real Estate",
    description: "Lead qualification and data-driven decision workflows.",
    href: "/industry/real-estate",
    caseStudyId: "construction-materials-retailer",
  },
  {
    title: "Legal & Professional",
    description:
      "Document intelligence, compliance workflows, and risk-aware automation.",
    href: "/industry/legal",
    caseStudyId: "legal-intelligence-platform",
  },
  {
    title: "Energy & Industrial",
    description: "Enterprise automation and data pipelines at scale.",
    href: "/industry/agnostic",
    caseStudyId: "oil-gas-invoice-automation",
  },
  {
    title: "Finance & Fintech",
    description: "Decisioning platforms and production financial systems.",
    href: "/industry/agnostic",
    caseStudyId: "student-financing-platform",
  },
  {
    title: "Enterprise SaaS",
    description: "Embedded AI features and internal tooling.",
    href: "/industry/agnostic",
    caseStudyId: "sales-intelligence-platform",
  },
];

export const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const industryRefs = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const check = () => {
      const triggerY = window.innerHeight * 0.35;
      const refs = industryRefs.current.filter(
        (el): el is HTMLElement => el != null,
      );
      for (let i = refs.length - 1; i >= 0; i--) {
        const rect = refs[i].getBoundingClientRect();
        if (rect.top <= triggerY) {
          setActiveIndex(i);
          return;
        }
      }
      setActiveIndex(0);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const activeIndustry = industries[activeIndex];
  const caseStudy = activeIndustry
    ? getCaseStudy(activeIndustry.caseStudyId)
    : null;

  return (
    <section ref={sectionRef} className="relative py-24 px-6 w-full">
      <div className="container mx-auto max-w-6xl">
        {/* Title and subtitle above both columns and the browser */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-alternates mb-3">
            Proven across industries
          </h2>
          <p className="text-lg text-muted-foreground">
            AI systems built around real constraints, not generic templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: industry list, indented */}
          <div className="lg:col-span-5">
            <div className="space-y-0">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    industryRefs.current[index] = el;
                  }}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-start justify-between gap-4 py-6 text-left transition-opacity hover:opacity-100 ${
                      index === activeIndex ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl md:text-2xl font-bold font-alternates mb-1">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                    <ChevronRight
                      className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all mt-1"
                      aria-hidden
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/contact">
                <SiteButton variant="primary">
                  Discuss a similar project
                </SiteButton>
              </Link>
              <Link to="/case-studies">
                <SiteButton variant="secondary">
                  View all case studies
                </SiteButton>
              </Link>
            </div>
          </div>

          {/* Right: floating case study window — scrolls with section, then sticks under navbar until section ends */}
          <div className="lg:col-span-7 lg:self-start lg:sticky lg:top-24">
            <div className="relative rounded-xl border border-border bg-card shadow-xl overflow-hidden">
              {/* Browser-style chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 flex items-center gap-2 ml-4 px-3 py-1.5 rounded-md bg-background/80 border border-border text-xs text-muted-foreground font-mono max-w-full min-w-0">
                  <span className="truncate">
                    aiflow.ltd/case-studies/{caseStudy?.id ?? "..."}
                  </span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>

              <div className="min-h-[420px] flex flex-col">
                {caseStudy && (
                  <>
                    <div className="relative h-36 sm:h-44 shrink-0 overflow-hidden bg-muted">
                      <img
                        src={caseStudy.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-lg sm:text-xl font-bold font-alternates mb-2 line-clamp-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                        {caseStudy.solution}
                      </p>
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <Link to={`/case-studies/${caseStudy.id}`}>
                          <SiteButton variant="primary">
                            Read full case study
                          </SiteButton>
                        </Link>
                        {(caseStudy.duration || caseStudy.teamSize) && (
                          <span className="text-xs text-muted-foreground">
                            {[caseStudy.duration, caseStudy.teamSize]
                              .filter(Boolean)
                              .join(" • ")}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
