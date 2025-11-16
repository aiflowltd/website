import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { authors, teamMembers } from "@/data/team";
import { useEffect } from "react";
import {
  Users,
  Code,
  Brain,
  TrendingUp,
  Building2,
  Globe,
  Zap,
  Shield,
  Rocket,
  Target,
  Award,
  Clock,
  Database,
  Cloud,
  Layers,
  Cpu,
  GitBranch,
  CheckCircle2,
  Star,
  BarChart3,
} from "lucide-react";

const Team = () => {
  useEffect(() => {
    document.title = "AI Flow | Team";
  }, []);

  // Small spec cards
  const smallSpecs = [
    { value: "10+", label: "Years Experience", icon: Clock },
    { value: "2", label: "Co-Founders", icon: Users },
    { value: "100%", label: "Production-Ready", icon: Rocket },
    { value: "Fortune 500", label: "Enterprise Clients", icon: Building2 },
    { value: "Google & BP", label: "Previous Companies", icon: Award },
    { value: "29+", label: "Languages Supported", icon: Globe },
    { value: "24/7", label: "Remote Team", icon: Globe },
    { value: "End-to-End", label: "Product Development", icon: Code },
  ];

  // Medium feature cards
  const mediumFeatures = [
    {
      title: "Machine Learning",
      description: "Production ML pipelines, model training, and deployment",
      icon: Brain,
      metrics: ["TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      title: "Full-Stack Development",
      description: "React, Next.js, TypeScript, and modern web technologies",
      icon: Code,
      metrics: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS, Azure, GCP, and scalable system architecture",
      icon: Cloud,
      metrics: ["AWS", "Azure", "GCP"],
    },
    {
      title: "Data Engineering",
      description: "ETL pipelines, data processing, and analytics",
      icon: Database,
      metrics: ["Databricks", "Spark", "Airflow"],
    },
  ];

  // Large feature cards
  const largeFeatures = [
    {
      title: "AI/ML Specialization",
      description:
        "Deep expertise in building production AI systems. From computer vision to NLP, from recommendation engines to fraud detection.",
      icon: Brain,
      highlights: [
        "Production ML pipelines",
        "Model training & deployment",
        "Real-time inference",
        "MLOps & monitoring",
      ],
    },
    {
      title: "Enterprise Experience",
      description:
        "Proven track record working with Fortune 500 companies and startups alike. We understand both enterprise scale and startup speed.",
      icon: Building2,
      highlights: [
        "Fortune 500 clients",
        "Startup to enterprise",
        "Scalable architectures",
        "Compliance & security",
      ],
    },
  ];

  const technologies = [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "TensorFlow",
    "PyTorch",
    "AWS",
    "Azure",
    "GCP",
    "Databricks",
    "Spark",
    "Kubernetes",
  ];

  const industries = [
    "Oil & Gas",
    "Legal Tech",
    "Fintech",
    "E-commerce",
    "Materials Science",
    "Healthcare",
  ];

  const achievements = [
    { label: "Production Systems", value: "100%" },
    { label: "On-Time Delivery", value: "100%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Team <span className="text-primary">Specs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade of combined experience building production AI systems
          </p>
        </div>

        {/* Dense Grid Layout - Apple Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {/* Small Spec Cards */}
          {smallSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-4 md:p-5 text-center hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-2 flex justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {spec.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {spec.label}
                </div>
              </Card>
            );
          })}

          {/* Achievement Cards */}
          {achievements.map((achievement, index) => (
            <Card
              key={`achievement-${index}`}
              className="bg-card border-border p-4 md:p-5 text-center hover:border-primary/50 transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold mb-1 text-primary">
                {achievement.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Large Feature Cards - Span 2 columns */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {largeFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-6 md:p-8 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Medium Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {mediumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-4 md:p-5 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {feature.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Team Members - Span 2 columns each */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {Object.values(teamMembers).map((member) => (
            <Card
              key={member.id}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies & Industries - Side by side */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <Card className="bg-card border-border p-6 hover:border-primary/50 transition-all">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover:border-primary/50 transition-all">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Industries
            </h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Values - 3 columns */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <Card className="bg-card border-border p-5 hover:border-primary/50 transition-all">
            <div className="text-primary mb-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Fundamentals First</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solid engineering fundamentals over flashy demos. Clean data,
              robust pipelines, scalable architecture.
            </p>
          </Card>
          <Card className="bg-card border-border p-5 hover:border-primary/50 transition-all">
            <div className="text-primary mb-3">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Production-Ready</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No POCs that gather dust. Everything runs in production, handles
              real users, scales from day one.
            </p>
          </Card>
          <Card className="bg-card border-border p-5 hover:border-primary/50 transition-all">
            <div className="text-primary mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Transparent</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open communication, thorough documentation. Your success is our
              success.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your business with AI? Get in touch and let's
            discuss how we can help.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-semibold px-8"
              >
                Book a Call
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold px-8"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
