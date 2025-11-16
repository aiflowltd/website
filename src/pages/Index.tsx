import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { TeamSection } from "@/components/TeamSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ServicesSection />
        <ClientsCarousel />
        <TeamSection />
        <CaseStudiesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
