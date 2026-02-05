import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/caseStudies";
import { Tag } from "@/components/Tag";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300">
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
          <p className="text-muted-foreground mb-6">
            {study.client} • {study.industry}
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-semibold text-primary mb-2">Challenge</h4>
              <p className="text-muted-foreground">{study.challenge}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">Solution</h4>
              <p className="text-muted-foreground">{study.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6">
            {study.results.map((result, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {result.icon}
                </div>
                <span className="font-semibold">{result.label}</span>
              </div>
            ))}
          </div>

          <Link to={`/case-studies/${study.id}`}>
            <Button className="bg-primary hover:bg-primary/90 text-background font-semibold">
              Read Full Case Study
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
