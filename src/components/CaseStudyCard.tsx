import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/caseStudies";
import { Tag } from "@/components/Tag";
import { SiteButton } from "@/components/SiteButton";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  study: CaseStudy;
  /** List layout with parent `divide-y` (Case Studies index). */
  editorial?: boolean;
}

export const CaseStudyCard = ({ study, editorial }: CaseStudyCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300",
        editorial
          ? "rounded-none border-0 bg-transparent py-10 shadow-none md:py-14"
          : "border-border bg-card hover:border-primary/30",
      )}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-auto">
          <img
            src={study.image}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex gap-2 mb-4 flex-wrap">
            {study.tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>

          <h2 className="mb-2 font-alternates text-3xl font-bold text-foreground">
            {study.title}
          </h2>
          <p className="mb-6 text-muted-foreground">
            {study.client} • {study.industry}
          </p>

          <div className="mb-8 space-y-4">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Challenge</h4>
              <p className="text-muted-foreground">{study.challenge}</p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">Solution</h4>
              <p className="text-muted-foreground">{study.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6">
            {study.results.map((result, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground flex-shrink-0">
                  {result.icon}
                </div>
                <span className="font-semibold">{result.label}</span>
              </div>
            ))}
          </div>

          <Link to={`/case-studies/${study.id}`}>
            <SiteButton variant="primary" arrow="up-right">
              Read full case study
            </SiteButton>
          </Link>
        </div>
      </div>
    </Card>
  );
};
