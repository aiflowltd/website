import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { mainCaseStudies } from "@/data/caseStudies";
import { useEffect } from "react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "AI Flow | Case Studies";
  }, []);
  const caseStudies = mainCaseStudies;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page title */}
      <Section padding="hero">
        <SectionHeader
          title="Case Studies"
          subtitle="Real-world AI success stories. See how we've helped leading companies transform their businesses with cutting-edge AI solutions."
          variant="centered"
          titleClassName="text-5xl md:text-7xl font-alternates"
          subtitleClassName="text-xl text-grey max-w-3xl mx-auto"
          className="mb-0"
        />
      </Section>

      {/* Case studies list */}
      <Section>
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section maxWidth="narrow">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/50 p-10 md:p-16 text-center">
          <SectionHeader
            title="Ready to write your success story?"
            subtitle="Let's discuss how we can help you achieve similar results with AI-powered solutions."
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates mb-4"
            subtitleClassName="text-grey max-w-3xl mx-auto mb-8"
            className="mb-0"
            action={
              <Link to="/contact">
                <SiteButton variant="primary" arrow="up-right">
                  Start your project
                </SiteButton>
              </Link>
            }
          />
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
