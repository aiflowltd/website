import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy2 from "@/assets/case-study-2.jpg";
import {
  CASE_STUDY_FRAUD_DETECTION_SYSTEM,
  CASE_STUDY_GOOGLE,
  CASE_STUDY_LEGAL_INTELLIGENCE_PLATFORM,
  CASE_STUDY_MATERIALS_SCIENCE_PROPERTY_PREDICTION,
  CASE_STUDY_SALES_INTELLIGENCE_PLATFORM,
  CASE_STUDY_SUPPLY_CHAIN_OPTIMIZATION,
} from "@/constants/images";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "oil-gas-invoice-automation",
      title: "Oil & Gas Invoice Automation with Databricks & Azure",
      client: "Top-5 Oil & Gas Firm",
      industry: "Oil & Gas",
      image: CASE_STUDY_SUPPLY_CHAIN_OPTIMIZATION,
      challenge:
        "Tens of thousands of unstructured invoices from various sources needed automation",
      solution:
        "Built end-to-end ETL pipeline with Databricks on Azure, AI document intelligence, and Power BI",
      results: [
        { icon: <TrendingUp />, label: "Millions in cost savings" },
        { icon: <Zap />, label: "Automated document processing" },
        { icon: <Users />, label: "Thousands of documents daily" },
      ],
      tags: ["Databricks", "Azure", "ETL", "Document Intelligence"],
    },
    {
      id: "exomatter-automl",
      title: "AutoML for Materials Science Property Prediction",
      client: "ExoMatter",
      industry: "Materials Science",
      image: CASE_STUDY_MATERIALS_SCIENCE_PROPERTY_PREDICTION,
      challenge:
        "Building ML models for material property prediction took 3-4 months per model",
      solution:
        "Implemented AutoML pipeline using Google's Vertex AI for rapid model development",
      results: [
        { icon: <Zap />, label: "Overnight model training" },
        { icon: <TrendingUp />, label: "Equal or better accuracy" },
        { icon: <Users />, label: "95% time reduction" },
      ],
      tags: ["AutoML", "Vertex AI", "Materials Science"],
    },
    {
      id: "google-ml-pipeline-optimization",
      title: "Reducing 65% of ML Pipeline Time at Google",
      client: "Google",
      industry: "Tech",
      image: CASE_STUDY_GOOGLE,
      challenge:
        "High dimensionality in ML systems causing long training times and resource-intensive models",
      solution:
        "Built advanced feature selection tool with Sequential Attention, reducing features by 64% while maintaining performance",
      results: [
        { icon: <Zap />, label: "65% pipeline time reduction" },
        { icon: <TrendingUp />, label: "64% feature reduction" },
        { icon: <Users />, label: "90% smaller models" },
      ],
      tags: ["ML", "Feature Selection", "Optimization"],
    },
    {
      id: "legal-intelligence-platform",
      title: "Legal Intelligence Platform with RAG & GPT-4o",
      client: "Law Firm",
      industry: "Legal",
      image: CASE_STUDY_LEGAL_INTELLIGENCE_PLATFORM,
      challenge:
        "Parsing gigabytes of mixed-format case files to predict case value in real-time",
      solution:
        "Built RAG pipeline with Pinecone and GPT-4o for legal document intelligence and chatbot",
      results: [
        { icon: <Zap />, label: "<1 second response time" },
        { icon: <TrendingUp />, label: "75% storage reduction" },
        { icon: <Users />, label: "Delivered in 3 weeks" },
      ],
      tags: ["RAG", "GPT-4o", "Legal", "Pinecone"],
    },
    {
      id: "sales-intelligence-platform",
      title: "AI-Powered Sales Intelligence Platform",
      client: "Sales Intelligence Company",
      industry: "SaaS",
      image: CASE_STUDY_SALES_INTELLIGENCE_PLATFORM,
      challenge:
        "Manually tracking job postings and hiring signals across thousands of companies wasn't scalable",
      solution:
        "Built AI platform to detect tech hiring signals and purchase intent through automated job analysis",
      results: [
        { icon: <Zap />, label: "Real-time lead intelligence" },
        { icon: <TrendingUp />, label: "Automated buying intent detection" },
        { icon: <Users />, label: "Thousands of companies monitored" },
      ],
      tags: ["Web Scraping", "LLM", "Sales Intelligence"],
    },
    {
      id: "ai-legal-risk-detection",
      title: "AI Legal Risk Detection with LLM + RAG",
      client: "Legal Tech Company",
      industry: "Legal Tech",
      image: CASE_STUDY_FRAUD_DETECTION_SYSTEM,
      challenge:
        "Manual legal content review was tedious, costly, and struggled to scale across hundreds of pages",
      solution:
        "Built AI system using GPT-4 and RAG to automatically flag legal risks per page with structured justifications",
      results: [
        { icon: <Zap />, label: "Automated page-by-page analysis" },
        { icon: <TrendingUp />, label: "Structured risk categorization" },
        { icon: <Users />, label: "Scalable for large documents" },
      ],
      tags: ["LLM", "RAG", "GPT-4", "Legal Tech"],
    },
    {
      id: "student-financing-platform",
      title: "Rebuilding a Scalable Student Financing Platform",
      client: "deineStudienfinanzierung",
      industry: "Fintech",
      image: caseStudy2,
      challenge:
        "Outdated platform with deprecated technologies needed complete rewrite for scalability",
      solution:
        "Built modern full-stack platform with Next.js, React, Apollo GraphQL, and Prisma",
      results: [
        { icon: <Zap />, label: "Delivered in 3 months" },
        { icon: <Users />, label: "Thousands of users migrated" },
        { icon: <TrendingUp />, label: "Zero downtime launch" },
      ],
      tags: ["Next.js", "Full-Stack", "Fintech"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world AI success stories. See how we've helped leading
            companies transform their businesses with cutting-edge AI solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                  <p className="text-muted-foreground mb-6">
                    {study.client} • {study.industry}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          {result.icon}
                        </div>
                        <span className="font-semibold">{result.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/case-studies/${study.id}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-background font-semibold">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center max-w-6xl mx-auto mt-20 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results with
            AI-powered solutions.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
