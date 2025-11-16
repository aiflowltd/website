import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredCaseStudies } from "@/data/caseStudies";

export const CaseStudiesSection = () => {

  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from our AI implementations
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {featuredCaseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{
                      filter: "saturate(0.9) brightness(0.8)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                  <div className="absolute inset-0 bg-background/20" />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{study.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {study.client}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.solution}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.slice(0, 3).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                            {result.icon}
                          </div>
                          <div className="text-xs text-muted-foreground leading-tight">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                    >
                      View Full Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold"
            >
              Read More Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
