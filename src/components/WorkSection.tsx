import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCaseStudies } from "@/data/caseStudies";
import { Tag } from "@/components/Tag";

const industries = [
  {
    title: "Construction",
    description:
      "AI-powered tools for project management, safety compliance, cost estimation, and real-time site monitoring.",
    href: "/industry/construction",
  },
  {
    title: "Real estate",
    description:
      "Intelligent valuation models, tenant screening, market analysis, and portfolio optimization systems.",
    href: "/industry/real-estate",
  },
  {
    title: "Legal & Professional",
    description:
      "Document intelligence, contract analysis, due diligence automation, and risk detection platforms.",
    href: "/industry/legal",
  },
  {
    title: "Energy & Industrial",
    description:
      "Predictive maintenance, supply chain optimization, anomaly detection, and resource forecasting.",
    href: "/industry/agnostic",
  },
  {
    title: "Finance & Fintech",
    description:
      "Fraud detection, credit scoring, regulatory compliance automation, and algorithmic trading systems.",
    href: "/industry/agnostic",
  },
  {
    title: "Enterprise SaaS",
    description:
      "AI copilots, recommendation engines, intelligent search, and workflow automation for SaaS platforms.",
    href: "/industry/agnostic",
  },
];

export const WorkSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Industries */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-12">
            Proven across industries
          </h2>

          <Accordion type="single" collapsible className="space-y-2 max-w-4xl">
            {industries.map((industry, index) => (
              <AccordionItem
                key={index}
                value={`industry-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-primary py-5 hover:no-underline">
                  {industry.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <Link
                    to={industry.href}
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Case Studies */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Real results from our AI implementations
          </p>

          <div className="space-y-8">
            {featuredCaseStudies.slice(0, 2).map((study, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden aspect-video md:aspect-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: "saturate(0.9) brightness(0.8)" }}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {study.client}
                      </p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 4).map((tag, i) => (
                          <Tag key={i}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                    >
                      View Full Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold rounded-full"
              >
                Read More Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
