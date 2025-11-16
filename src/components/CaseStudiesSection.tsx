import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import clientTechGlobal from "@/assets/client-techglobal.png";
import clientRetailCo from "@/assets/client-retailco.png";
import clientManufact from "@/assets/client-manufact.png";
import {
  CASE_STUDY_SUPPLY_CHAIN_OPTIMIZATION,
  CASE_STUDY_CUSTOMER_SERVICE_PLATFORM,
  CASE_STUDY_FRAUD_DETECTION_SYSTEM,
} from "@/constants/images";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: "supply-chain-optimization",
      title: "AI-Powered Supply Chain Optimization",
      client: "Fortune 500 Manufacturer",
      clientLogo: clientManufact,
      image: CASE_STUDY_SUPPLY_CHAIN_OPTIMIZATION,
      description:
        "Implemented ML-powered demand forecasting and automated inventory optimization system that reduced costs by 40% and improved forecast accuracy to 95%.",
      metrics: [
        { label: "Inventory Costs", value: "-40%" },
        { label: "Decision Speed", value: "60%" },
        { label: "Forecast Accuracy", value: "95%" },
      ],
      tags: ["Machine Learning", "Supply Chain", "Optimization"],
    },
    {
      id: "customer-service-platform",
      title: "Intelligent Customer Service Platform",
      client: "E-commerce Leader",
      clientLogo: clientRetailCo,
      image: CASE_STUDY_CUSTOMER_SERVICE_PLATFORM,
      description:
        "Developed AI chatbot with natural language understanding and sentiment analysis that handles 24/7 customer support with 90% satisfaction rate.",
      metrics: [
        { label: "Support Costs", value: "-70%" },
        { label: "Response Time", value: "<1 min" },
        { label: "Satisfaction", value: "90%" },
      ],
      tags: ["NLP", "Chatbot", "Customer Service"],
    },
    {
      id: "fraud-detection-system",
      title: "Real-Time Fraud Detection System",
      client: "Global Financial Institution",
      clientLogo: clientTechGlobal,
      image: CASE_STUDY_FRAUD_DETECTION_SYSTEM,
      description:
        "Built real-time ML fraud detection system with <100ms detection time, preventing $50M+ in fraud annually with 99.7% accuracy.",
      metrics: [
        { label: "Fraud Prevented", value: "$50M+" },
        { label: "Detection Time", value: "<100ms" },
        { label: "Accuracy", value: "99.7%" },
      ],
      tags: ["AI/ML", "Fraud Detection", "Real-time"],
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
                    style={{
                      filter: "saturate(0.9) brightness(0.8)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                  <div className="absolute inset-0 bg-background/20" />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={study.clientLogo}
                        alt={study.client}
                        className="w-12 h-12 rounded-xl bg-background/50 p-2"
                      />
                      <div>
                        <h3 className="text-2xl font-bold">{study.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {study.client}
                        </p>
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

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                    >
                      View Full Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
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
