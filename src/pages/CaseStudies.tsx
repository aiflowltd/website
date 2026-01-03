import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mainCaseStudies } from "@/data/caseStudies";
import { useEffect } from "react";
import { CaseStudyCard } from "@/components/CaseStudyCard";

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
            <CaseStudyCard key={index} study={study} />
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
