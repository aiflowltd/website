import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Building,
  Users,
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getCaseStudy } from "@/data/caseStudies";
import { useEffect } from "react";

const CaseStudyDetail = () => {
  const { id } = useParams();
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link to="/case-studies">
          <Button
            variant="ghost"
            className="mb-8 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Case Studies
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            {study.client && (
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>{study.client}</span>
              </div>
            )}
            {study.duration && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{study.duration}</span>
              </div>
            )}
            {study.teamSize && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>{study.teamSize}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 max-w-7xl mx-auto">
          <img
            src={study.image}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              The Challenge
            </h2>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.challengeDetail}
              </p>
            </Card>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Our Solution
            </h2>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {study.solutionDetail}
              </p>
              {study.solutionPoints && (
                <ul className="space-y-4">
                  {study.solutionPoints.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </section>

          {/* Technical Approach */}
          {study.technicalApproach && study.technicalApproach.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Technical Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.technicalApproach.map((tech: any, idx: number) => (
                  <Card
                    key={idx}
                    className="bg-card border-border p-6 hover:border-primary transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {tech.description}
                    </p>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Results & Impact
            </h2>
            <div className="space-y-6">
              {study.results.map((result: any, idx: number) => (
                <Card key={idx} className="bg-card border-border p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {result.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {result.label}
                      </h3>
                      {result.detail && (
                        <p className="text-muted-foreground">{result.detail}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {study.additionalResults && study.additionalResults.length > 0 && (
                <Card className="bg-card border-border p-8">
                  <h3 className="text-xl font-bold mb-4">Additional Outcomes</h3>
                  <ul className="space-y-3">
                    {study.additionalResults.map(
                      (result: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      )
                    )}
                  </ul>
                </Card>
              )}
            </div>
          </section>

          {/* Testimonial */}
          {study.testimonial && (
            <section>
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12">
                <div className="text-center">
                  <div className="text-6xl text-primary mb-4">"</div>
                  <p className="text-xl md:text-2xl font-semibold mb-6 italic">
                    {study.testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="font-bold text-lg">
                      {study.testimonial.author}
                    </p>
                    <p className="text-muted-foreground">
                      {study.testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {/* CTA */}
          <section>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Similar Results?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help you achieve transformative
                outcomes with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-background font-semibold"
                  >
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
