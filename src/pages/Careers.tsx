import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllJobs } from "@/data/jobs";

const Careers = () => {
  const openPositions = getAllJobs();

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Projects",
      description: "Work on real AI products for industry leaders, not just research papers.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "World-Class Team",
      description: "Collaborate with experienced AI/ML engineers and researchers.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth & Learning",
      description: "Continuous learning budget, conferences, and mentorship programs.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and generous time off.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build the future of AI with a team that's been in the game since before it was cool. 
            We're looking for talented individuals who are passionate about creating real AI products.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Work at <span className="text-primary">AI Flow</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 text-center hover:border-primary transition-all duration-300 group"
              >
                <div className="text-primary mb-4 inline-block group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Open <span className="text-primary">Positions</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our growing team and work on challenging AI projects with real-world impact.
          </p>
          
          <div className="space-y-6 max-w-6xl mx-auto">
            {openPositions.map((position) => (
              <Link key={position.id} to={`/careers/${position.id}`} className="block space-y-6">
                <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {position.shortDescription}
                      </p>
                    </div>
                    
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-background font-semibold whitespace-nowrap"
                      asChild
                    >
                      <span>
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center max-w-6xl mx-auto border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're always looking for talented people. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

