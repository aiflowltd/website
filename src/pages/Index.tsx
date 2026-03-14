import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { EngagementSection } from "@/components/EngagementSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "AI Flow | We build AI products";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ClientsCarousel />
      <ServicesSection />
      <HowWeWorkSection />
      <EngagementSection />
      <IndustriesSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;
