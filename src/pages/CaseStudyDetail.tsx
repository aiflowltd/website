import { Navigation } from "@/components/Navigation";
import { Tag } from "@/components/Tag";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Building,
  Users,
  Quote,
} from "lucide-react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getCaseStudy } from "@/data/caseStudies";
import { useEffect } from "react";
import { Section } from "@/components/Section";
import { SiteButton } from "@/components/SiteButton";

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

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero: back, title, meta, image */}
      <Section padding="hero" maxWidth="default">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 mb-8 text-grey hover:text-foreground transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to case studies</span>
        </button>

        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag: string, idx: number) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-alternates mb-3">
          {study.title}
        </h1>
        <p className="text-lg text-grey max-w-3xl mb-8">
          How we delivered measurable impact for {study.client || "our client"}.
        </p>

        <div className="flex flex-wrap gap-6 text-grey mb-10">
          {study.client && (
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-grey" />
              <span>{study.client}</span>
            </div>
          )}
          {study.duration && (
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-grey" />
              <span>{study.duration}</span>
            </div>
          )}
          {study.teamSize && (
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-grey" />
              <span>{study.teamSize}</span>
            </div>
          )}
        </div>

        <div className="relative h-96 rounded-2xl overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold font-alternates mb-3 text-foreground">
              Challenge
            </h2>
            <p className="text-grey mb-6 max-w-2xl">
              The problem we were asked to solve.
            </p>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-grey leading-relaxed">
                {study.challengeDetail}
              </p>
            </Card>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold font-alternates mb-3 text-foreground">
              Solution
            </h2>
            <p className="text-grey mb-6 max-w-2xl">
              How we approached it and what we built.
            </p>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-grey leading-relaxed mb-6">
                {study.solutionDetail}
              </p>
              {study.solutionPoints && (
                <ul className="space-y-4">
                  {study.solutionPoints.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-grey flex-shrink-0 mt-1" />
                      <span className="text-grey">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </section>

          {/* Technical Approach */}
          {study.technicalApproach && study.technicalApproach.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold font-alternates mb-6 text-foreground">
                Technical approach
              </h2>
              <p className="text-grey mb-6 max-w-2xl">
                The architecture and methods we used to deliver this outcome.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {study.technicalApproach.map((tech: any, idx: number) => (
                  <Card
                    key={idx}
                    className="bg-card border-border p-6 hover:border-primary transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                    <p className="text-grey text-m">{tech.description}</p>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold font-alternates mb-3 text-foreground">
              Results and impact
            </h2>
            <p className="text-grey mb-6 max-w-2xl">
              Measurable outcomes and lasting value delivered.
            </p>
            <div className="space-y-6">
              {study.results.map((result: any, idx: number) => (
                <Card key={idx} className="bg-card border-border p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground flex-shrink-0">
                      {result.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {result.label}
                      </h3>
                      {result.detail && (
                        <p className="text-grey">{result.detail}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {study.additionalResults &&
                study.additionalResults.length > 0 && (
                  <Card className="bg-card border-border p-8">
                    <h3 className="text-xl font-bold font-alternates mb-4">
                      Additional outcomes
                    </h3>
                    <ul className="space-y-3">
                      {study.additionalResults.map(
                        (result: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-grey flex-shrink-0 mt-0.5" />
                            <span className="text-grey">{result}</span>
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
                  <div className="text-6xl text-grey mb-4">"</div>
                  <p className="text-xl md:text-2xl font-semibold mb-6 italic">
                    {study.testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="font-bold text-lg">
                      {study.testimonial.author}
                    </p>
                    <p className="text-grey">{study.testimonial.company}</p>
                  </div>
                  {study.interviewId && (
                    <div className="mt-6">
                      <Link to={`/interviews/${study.interviewId}`}>
                        <SiteButton variant="secondary">
                          <Quote className="mr-2 w-4 h-4" />
                          Read full interview
                        </SiteButton>
                      </Link>
                    </div>
                  )}
                </div>
              </Card>
            </section>
          )}

          {/* CTA */}
          <section>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-4">
                Ready to achieve similar results?
              </h2>
              <p className="text-lg text-grey mb-8 max-w-3xl mx-auto">
                Discuss your project with our team. We deliver AI systems that
                scale and drive real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <SiteButton variant="primary" arrow="up-right">
                    Start your project
                  </SiteButton>
                </Link>
                <Link to="/case-studies">
                  <SiteButton variant="secondary">View more case studies</SiteButton>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
