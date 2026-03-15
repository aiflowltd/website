import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Quote, Building, Calendar, User } from "lucide-react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getInterview } from "@/data/interviews";
import { useEffect } from "react";

const InterviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const interview = id ? getInterview(id) : null;

  useEffect(() => {
    if (interview) {
      document.title = `AI Flow | Interview with ${interview.clientName}`;
    } else {
      document.title = "AI Flow | Client Interview";
    }
  }, [interview]);

  if (!interview) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate(`/case-studies/${interview.caseStudyId}`)}
            className="inline-flex items-center gap-2 mb-8 text-grey hover:text-foreground transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to case study</span>
          </button>

          {/* Hero Section */}
          <div className="mb-12">
          <div className="flex items-center gap-2 text-grey mb-4">
            <Quote className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Client interview
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-alternates mb-6 text-foreground">
            Interview with {interview.clientName}
          </h1>

          <div className="flex flex-wrap gap-6 text-grey mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-grey" />
              <span>
                {interview.clientRole} at {interview.clientCompany}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-grey" />
              <span>{interview.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-grey" />
              <Link
                to={`/case-studies/${interview.caseStudyId}`}
                className="text-grey hover:text-foreground hover:underline"
              >
                View case study
              </Link>
            </div>
          </div>

          <p className="text-lg text-grey leading-relaxed">
            {interview.introduction}
          </p>
          </div>

          {/* Interview Content */}
          <div className="space-y-8">
          {interview.questions.map((qa, index) => (
            <Card key={index} className="bg-card border-border p-8">
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <Quote className="w-5 h-5 text-grey flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold font-alternates text-foreground">
                      {qa.question}
                    </h3>
                  </div>
                  <p className="text-grey leading-relaxed ml-8">
                    {qa.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
          <Card className="bg-gradient-to-br from-card via-card to-muted/50 border border-border p-12 text-center">
            <h2 className="text-3xl font-bold font-alternates mb-4 text-foreground">
              Ready to achieve similar results?
            </h2>
            <p className="text-lg text-grey mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <SiteButton variant="primary" arrow="up-right">
                  Get in touch
                </SiteButton>
              </Link>
              <Link to={`/case-studies/${interview.caseStudyId}`}>
                <SiteButton variant="secondary">Read full case study</SiteButton>
              </Link>
            </div>
          </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InterviewDetail;

