import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Brain, TrendingUp, Zap, Database, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence products built for your specific business needs and challenges.",
      features: [
        "End-to-end AI product development",
        "Custom model training and fine-tuning",
        "Integration with existing systems",
        "Scalable cloud-native architecture",
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Machine Learning",
      description: "Advanced ML models and algorithms to unlock insights from your data and automate processes.",
      features: [
        "Predictive analytics and forecasting",
        "Computer vision solutions",
        "Natural language processing",
        "Recommendation systems",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "AI Strategy & Consulting",
      description: "Strategic consulting to help you navigate the AI landscape and maximize ROI.",
      features: [
        "AI readiness assessment",
        "Technology stack recommendations",
        "ROI analysis and business case",
        "Implementation roadmap",
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Rapid Prototyping",
      description: "Fast iteration and proof-of-concept development to validate your AI ideas quickly.",
      features: [
        "MVP development in 4-6 weeks",
        "Quick validation of AI concepts",
        "Iterative feedback loops",
        "Production-ready architecture",
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to power your AI initiatives.",
      features: [
        "Data pipeline design and implementation",
        "ETL/ELT process optimization",
        "Data warehouse architecture",
        "Real-time data processing",
      ],
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing products and workflows.",
      features: [
        "API design and development",
        "Legacy system integration",
        "Microservices architecture",
        "Performance optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions to transform your business. From strategy to implementation, 
            we deliver end-to-end AI products that drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center max-w-4xl mx-auto border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals. 
            Book a free consultation call with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;

