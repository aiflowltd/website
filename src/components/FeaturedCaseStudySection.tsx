import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import caseStudy2 from "@/assets/case-study-2.jpg";

export const FeaturedCaseStudySection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex-1 flex items-center gap-2 ml-4 px-3 py-1.5 rounded-md bg-background/80 border border-border text-xs text-muted-foreground font-mono max-w-full min-w-0">
              <span className="truncate">aiflow.ltd/case-studies</span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
          </div>

          <div className="min-h-[380px] flex flex-col">
            <div className="relative h-36 sm:h-44 shrink-0 overflow-hidden bg-muted">
              <img
                src={caseStudy2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-bold font-alternates mb-2 line-clamp-3">
                Automating Audit Preparation for a UK Payment Institution
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                Mapped four data sources to PSD2 and AML reporting obligations.
                Built an automated audit package pipeline that runs on schedule
                and produces validated, submission-ready documentation.
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Link to="/case-studies">
                  <SiteButton variant="primary" arrow={false}>
                    Read full case study →
                  </SiteButton>
                </Link>
                <span className="text-xs text-muted-foreground">
                  4 weeks · 2 engineers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
