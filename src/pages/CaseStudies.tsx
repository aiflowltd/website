import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mainCaseStudies } from "@/data/caseStudies";
import { useEffect } from "react";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "AI Flow | Case Studies";
  }, []);
  const caseStudies = mainCaseStudies;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world AI success stories. See how we've helped leading
            companies transform their businesses with cutting-edge AI solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300"
            >
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
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                  <p className="text-muted-foreground mb-6">
                    {study.client} • {study.industry}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Solution
                      </h4>
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
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center max-w-6xl mx-auto mt-20 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results with
            AI-powered solutions.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
