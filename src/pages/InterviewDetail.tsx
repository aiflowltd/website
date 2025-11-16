import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Quote, Building, Calendar, User } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getInterview } from "@/data/interviews";
import { useEffect } from "react";

const InterviewDetail = () => {
  const { id } = useParams();
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
        {/* Back Button */}
        <Link to={`/case-studies/${interview.caseStudyId}`}>
          <Button
            variant="ghost"
            className="mb-8 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Case Study
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Quote className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Client Interview
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Interview with <span className="text-primary">{interview.clientName}</span>
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span>
                {interview.clientRole} at {interview.clientCompany}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{interview.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              <Link
                to={`/case-studies/${interview.caseStudyId}`}
                className="text-primary hover:underline"
              >
                View Case Study
              </Link>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {interview.introduction}
          </p>
        </div>

        {/* Interview Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {interview.questions.map((qa, index) => (
            <Card key={index} className="bg-card border-border p-8">
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-primary">
                      {qa.question}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed ml-8">
                    {qa.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-background font-semibold"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link to={`/case-studies/${interview.caseStudyId}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Read Full Case Study
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InterviewDetail;

