import { Card } from "@/components/ui/card";
import { Code2, Brain, TrendingUp, Zap, Database, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import client logos
import bitdefenderLogo from "@/assets/clients/bitdefender.png";
import bloombergLogo from "@/assets/clients/bloomberg.png";
import boschLogo from "@/assets/clients/bosch.png";
import bpLogo from "@/assets/clients/bp.png";
import exomatterLogo from "@/assets/clients/exomatter.png";
import googleLogo from "@/assets/clients/google.png";
import metaphysicLogo from "@/assets/clients/metaphysic.png";
import metroLogo from "@/assets/clients/metro.png";
import upliftLogo from "@/assets/clients/uplift.png";
import accesaLogo from "@/assets/clients/accesa.png";
import upcLogo from "@/assets/clients/upc.png";

export const ServicesSection = () => {
  const clients = [
    { name: "Google", logo: googleLogo },
    { name: "Bitdefender", logo: bitdefenderLogo },
    { name: "Bloomberg", logo: bloombergLogo },
    { name: "Bosch", logo: boschLogo },
    { name: "BP", logo: bpLogo },
    { name: "Exomatter", logo: exomatterLogo },
    { name: "Metaphysic", logo: metaphysicLogo },
    { name: "Metro", logo: metroLogo },
    { name: "Uplift", logo: upliftLogo },
    { name: "Accesa", logo: accesaLogo },
    { name: "UPC", logo: upcLogo },
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence products built for your specific business needs and challenges.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Advanced ML models and algorithms to unlock insights from your data and automate processes.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Strategy",
      description: "Strategic consulting to help you navigate the AI landscape and maximize ROI.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Prototyping",
      description: "Fast iteration and proof-of-concept development to validate your AI ideas quickly.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to power your AI initiatives.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing products and workflows.",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Clients Carousel Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with some of the world's most innovative companies
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {clients.map((client, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <div className="p-4">
                      <Card className="bg-card border-border p-8 flex items-center justify-center h-32 hover:border-primary transition-all duration-300 group cursor-pointer">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
