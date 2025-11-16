import { Code2, Brain, TrendingUp, Zap, Database, Sparkles } from "lucide-react";
import { ReactElement } from "react";

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
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

