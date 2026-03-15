import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/caseStudies";
import { Tag } from "@/components/Tag";
import { SiteButton } from "@/components/SiteButton";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-white/20 hover:shadow-lg transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-auto">
          <img
            src={study.image}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex gap-2 mb-4 flex-wrap">
            {study.tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
          <p className="text-grey mb-6">
            {study.client} • {study.industry}
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
              <p className="text-grey">{study.challenge}</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Solution</h4>
              <p className="text-grey">{study.solution}</p>
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
