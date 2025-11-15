import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { StarfieldBackground } from "@/components/StarfieldBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarfieldBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ServicesSection />
        <CaseStudiesSection />
      </div>
    </div>
  );
};

export default Index;
