import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import clientTechGlobal from "@/assets/client-techglobal.png";
import clientRetailCo from "@/assets/client-retailco.png";
import clientManufact from "@/assets/client-manufact.png";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI-Powered Analytics Platform",
      client: "TechGlobal Inc.",
      clientLogo: clientTechGlobal,
      image: caseStudy1,
      description: "Developed a comprehensive analytics platform that processes millions of data points in real-time, providing actionable insights for business decisions.",
      metrics: [
        { label: "Revenue Increase", value: "45%" },
        { label: "Processing Speed", value: "10x" },
        { label: "Cost Reduction", value: "60%" },
      ],
      tags: ["Machine Learning", "Big Data", "Analytics"],
    },
    {
      title: "Customer Support Automation",
      client: "RetailCo",
      clientLogo: clientRetailCo,
      image: caseStudy2,
      description: "Implemented an intelligent chatbot system that handles customer inquiries 24/7, reducing support costs while improving customer satisfaction.",
      metrics: [
        { label: "Response Time", value: "-85%" },
        { label: "Customer Satisfaction", value: "92%" },
        { label: "Support Costs", value: "-40%" },
      ],
      tags: ["NLP", "Chatbots", "Automation"],
    },
    {
      title: "Predictive Maintenance System",
      client: "ManufactureX",
      clientLogo: clientManufact,
      image: caseStudy3,
      description: "Built a predictive maintenance solution using IoT sensors and machine learning to prevent equipment failures before they occur.",
      metrics: [
        { label: "Downtime Reduction", value: "70%" },
        { label: "Maintenance Costs", value: "-50%" },
        { label: "Equipment Lifespan", value: "+35%" },
      ],
      tags: ["IoT", "Predictive AI", "Manufacturing"],
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from our AI implementations
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={study.clientLogo}
                        alt={study.client}
                        className="w-12 h-12 rounded-lg bg-background/50 p-2"
                      />
                      <div>
                        <h3 className="text-2xl font-bold">{study.title}</h3>
                        <p className="text-muted-foreground text-sm">{study.client}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                      View Full Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
