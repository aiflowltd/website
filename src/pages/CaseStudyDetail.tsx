import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Zap, CheckCircle2, Calendar, Building } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudies: Record<string, any> = {
    "supply-chain-optimization": {
      title: "AI-Powered Supply Chain Optimization",
      client: "Fortune 500 Manufacturer",
      industry: "Manufacturing",
      image: caseStudy1,
      duration: "8 months",
      teamSize: "6 engineers",
      challenge: "Manual supply chain management leading to inefficiencies and high costs",
      challengeDetail: "Our client, a leading global manufacturer, was struggling with outdated supply chain management processes. Their inventory management system relied heavily on manual forecasting, leading to frequent stockouts, overstocking issues, and significant capital tied up in excess inventory. The lack of real-time visibility across their global supply chain meant decision-makers were often working with outdated information, resulting in missed opportunities and increased costs.",
      solution: "Implemented ML-powered demand forecasting and automated inventory optimization",
      solutionDetail: "We developed a comprehensive AI solution that transformed their supply chain operations. The system included:",
      solutionPoints: [
        "Advanced ML models for demand forecasting using historical sales data, seasonality patterns, and external factors",
        "Real-time inventory optimization algorithms to maintain optimal stock levels across all warehouses",
        "Automated reordering system with supplier integration for seamless procurement",
        "Dashboard and analytics platform for supply chain visibility and decision support",
        "Integration with existing ERP and warehouse management systems",
      ],
      technicalApproach: [
        {
          title: "Data Pipeline",
          description: "Built a robust ETL pipeline processing data from 50+ sources including sales, inventory, suppliers, and market data.",
        },
        {
          title: "ML Models",
          description: "Developed ensemble forecasting models combining LSTM neural networks, XGBoost, and ARIMA for different product categories.",
        },
        {
          title: "Optimization Engine",
          description: "Created a multi-objective optimization system balancing inventory costs, service levels, and working capital.",
        },
        {
          title: "Real-time Processing",
          description: "Implemented Apache Kafka for real-time data streaming and event-driven architecture.",
        },
      ],
      results: [
        { icon: <TrendingUp />, label: "40% reduction in inventory costs", detail: "Saved $12M annually through optimized inventory levels" },
        { icon: <Zap />, label: "60% faster decision-making", detail: "Real-time insights replaced weekly manual reports" },
        { icon: <Users />, label: "95% forecast accuracy", detail: "Up from 68% with previous manual methods" },
      ],
      additionalResults: [
        "Reduced stockouts by 75%, improving customer satisfaction",
        "Decreased excess inventory write-offs by $3M annually",
        "Improved supplier relationship management and negotiation leverage",
        "Enabled 24/7 automated operations with minimal human intervention",
      ],
      tags: ["Machine Learning", "Supply Chain", "Optimization", "Python", "TensorFlow", "AWS"],
      testimonial: {
        quote: "The AI solution transformed our supply chain operations beyond our expectations. We're now operating with unprecedented efficiency and visibility.",
        author: "Chief Supply Chain Officer",
        company: "Fortune 500 Manufacturer",
      },
    },
    "fraud-detection-system": {
      title: "Real-Time Fraud Detection System",
      client: "Global Financial Institution",
      industry: "Finance",
      image: caseStudy2,
      duration: "10 months",
      teamSize: "8 engineers",
      challenge: "Rising fraud incidents causing millions in losses and customer trust issues",
      challengeDetail: "A major financial institution was facing an escalating fraud crisis. Their rule-based fraud detection system was outdated, generating high false positive rates (45%) while missing sophisticated fraud patterns. Annual fraud losses exceeded $50M, and customer complaints about legitimate transactions being blocked were damaging their reputation. The system couldn't adapt to new fraud tactics and took 3-5 seconds to process transactions, creating poor user experience.",
      solution: "Built real-time ML fraud detection system with anomaly detection algorithms",
      solutionDetail: "We designed and deployed a next-generation fraud detection platform that leverages advanced machine learning and real-time processing:",
      solutionPoints: [
        "Real-time transaction scoring using ensemble ML models with <100ms latency",
        "Behavioral analytics tracking user patterns and detecting anomalies",
        "Graph neural networks identifying fraud rings and related accounts",
        "Adaptive learning system that improves from fraud analyst feedback",
        "Multi-layered security approach combining ML, rules, and manual review",
      ],
      technicalApproach: [
        {
          title: "Streaming Architecture",
          description: "Built on Apache Flink for real-time stream processing handling 50,000 transactions per second.",
        },
        {
          title: "ML Pipeline",
          description: "Deployed gradient boosting models (XGBoost), neural networks, and isolation forests for anomaly detection.",
        },
        {
          title: "Graph Analytics",
          description: "Implemented graph algorithms to detect fraud networks and account takeover patterns.",
        },
        {
          title: "Feature Engineering",
          description: "Created 500+ real-time features including transaction velocity, device fingerprinting, and behavioral signals.",
        },
      ],
      results: [
        { icon: <TrendingUp />, label: "$50M+ in fraud prevented annually", detail: "ROI of 800% in first year" },
        { icon: <Zap />, label: "<100ms detection time", detail: "Real-time scoring with no impact on user experience" },
        { icon: <Users />, label: "99.7% accuracy rate", detail: "False positive rate reduced from 45% to 0.3%" },
      ],
      additionalResults: [
        "Detected and prevented 15+ organized fraud rings",
        "Reduced customer service complaints by 80%",
        "Improved customer satisfaction scores by 25 points",
        "Enabled expansion into new high-risk markets safely",
      ],
      tags: ["AI/ML", "Fraud Detection", "Real-time Processing", "Python", "Apache Flink", "GCP"],
      testimonial: {
        quote: "This system is a game-changer. We've not only saved millions but also improved our customer experience dramatically. The AI adapts faster than fraudsters can.",
        author: "Head of Fraud Prevention",
        company: "Global Financial Institution",
      },
    },
    "customer-service-platform": {
      title: "Intelligent Customer Service Platform",
      client: "E-commerce Leader",
      industry: "E-commerce",
      image: caseStudy3,
      duration: "6 months",
      teamSize: "5 engineers",
      challenge: "Overwhelming customer support volume with long response times",
      challengeDetail: "A rapidly growing e-commerce platform was struggling to scale their customer support operations. They were receiving 100,000+ support inquiries monthly, with average response times of 24 hours and resolution times of 3-5 days. Customer satisfaction was declining, support costs were skyrocketing (40% of operating expenses), and the quality of responses varied significantly across their 200+ support agents.",
      solution: "Developed AI chatbot with natural language understanding and sentiment analysis",
      solutionDetail: "We built an intelligent customer service platform that combines AI automation with human expertise:",
      solutionPoints: [
        "Advanced NLP chatbot handling common inquiries automatically with 90% accuracy",
        "Sentiment analysis for prioritizing urgent or frustrated customers",
        "Smart ticket routing to appropriate specialists based on inquiry type",
        "Knowledge base with semantic search powered by embeddings",
        "Agent assist tools providing suggested responses and relevant documentation",
      ],
      technicalApproach: [
        {
          title: "NLP Pipeline",
          description: "Fine-tuned BERT models for intent classification and entity extraction, achieving 92% accuracy on customer inquiries.",
        },
        {
          title: "Conversational AI",
          description: "Built multi-turn dialogue system with context awareness and personalization based on customer history.",
        },
        {
          title: "Sentiment Analysis",
          description: "Implemented real-time sentiment tracking to escalate negative experiences and celebrate positive ones.",
        },
        {
          title: "Knowledge Management",
          description: "Created vector search system for instant retrieval of relevant articles and solutions from 10,000+ documents.",
        },
      ],
      results: [
        { icon: <TrendingUp />, label: "70% reduction in support costs", detail: "Automated 65% of inquiries, saving $8M annually" },
        { icon: <Zap />, label: "24/7 instant responses", detail: "Average response time reduced from 24 hours to <1 minute" },
        { icon: <Users />, label: "90% customer satisfaction", detail: "Up from 62% before AI implementation" },
      ],
      additionalResults: [
        "Support team refocused on complex, high-value interactions",
        "Multilingual support added for 12 languages at no extra cost",
        "Resolution time decreased from 3-5 days to <2 hours",
        "Enabled 24/7 global coverage without increasing headcount",
      ],
      tags: ["NLP", "Chatbot", "Customer Service", "Python", "BERT", "AWS"],
      testimonial: {
        quote: "The AI chatbot handles routine inquiries better than humans while freeing our team to provide exceptional service on complex issues. It's the perfect balance.",
        author: "VP of Customer Experience",
        company: "E-commerce Leader",
      },
    },
  };

  const study = id ? caseStudies[id] : null;

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link to="/case-studies">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Case Studies
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {study.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              <span>{study.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{study.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>{study.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 max-w-5xl mx-auto">
          <img
            src={study.image}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">The Challenge</h2>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.challengeDetail}
              </p>
            </Card>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Solution</h2>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {study.solutionDetail}
              </p>
              <ul className="space-y-4">
                {study.solutionPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Technical Approach */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Technical Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.technicalApproach.map((tech: any, idx: number) => (
                <Card key={idx} className="bg-card border-border p-6 hover:border-primary transition-all">
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Results & Impact</h2>
            <div className="space-y-6">
              {study.results.map((result: any, idx: number) => (
                <Card key={idx} className="bg-card border-border p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {result.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{result.label}</h3>
                      <p className="text-muted-foreground">{result.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-4">Additional Outcomes</h3>
                <ul className="space-y-3">
                  {study.additionalResults.map((result: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Testimonial */}
          <section>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12">
              <div className="text-center">
                <div className="text-6xl text-primary mb-4">"</div>
                <p className="text-xl md:text-2xl font-semibold mb-6 italic">
                  {study.testimonial.quote}
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-bold text-lg">{study.testimonial.author}</p>
                  <p className="text-muted-foreground">{study.testimonial.company}</p>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <section>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Similar Results?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve transformative outcomes with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyDetail;

