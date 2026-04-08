import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { mainCaseStudies } from "@/data/caseStudies";
import { useEffect } from "react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";
import { LineGridCta } from "@/components/LineGridCta";
import { lineHrClass } from "@/lib/lineGrid";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "AI Flow | Case Studies";
  }, []);
  const caseStudies = mainCaseStudies;

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero">
          <SectionHeader
            title="Case Studies"
            subtitle="Real-world AI success stories. See how we've helped leading companies transform their businesses with cutting-edge AI solutions."
            variant="centered"
            titleClassName="text-5xl font-bold font-alternates md:text-7xl text-foreground"
            subtitleClassName="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed"
            className="mb-0"
          />
        </Section>

        <Section padding="compact" className="!pt-0">
          <hr className={lineHrClass} />
          <div className="flex flex-col divide-y divide-border">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} editorial />
            ))}
          </div>
          <hr className={lineHrClass} />
        </Section>

        <Section padding="compact">
          <LineGridCta>
            <SectionHeader
              title="Ready to write your success story?"
              subtitle="Let's discuss how we can help you achieve similar results with AI-powered solutions."
              variant="centered"
              titleClassName="mb-4 font-alternates text-3xl font-bold text-foreground md:text-4xl"
              subtitleClassName="mx-auto mb-8 max-w-3xl text-muted-foreground"
              className="mb-0"
              action={
                <Link to="/contact">
                  <SiteButton variant="primary" arrow="up-right">
                    Start your project
                  </SiteButton>
                </Link>
              }
            />
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
