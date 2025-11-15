import { Card } from "@/components/ui/card";
import { Code2, Brain, TrendingUp, Zap, Database, Sparkles } from "lucide-react";

export const ServicesSection = () => {
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
      </div>
    </section>
  );
};
