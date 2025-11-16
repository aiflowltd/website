import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { authors } from "@/data/team";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    document.title = "AI Flow | Team";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're a team of AI engineers and full-stack developers with a decade
            of combined experience building production AI systems for companies
            ranging from startups to Fortune 500 enterprises.
          </p>
        </div>

        {/* Team Members */}
        <div className="max-w-6xl mx-auto space-y-8 mb-20">
          {Object.values(authors).map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>

        {/* Our Story */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="bg-card border-border p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AI Flow was founded on a simple belief: AI should be practical,
                profitable, and built on solid fundamentals—not hype.
              </p>
              <p>
                With nearly a decade of experience at companies like Google and
                BP, we've seen firsthand how AI can transform businesses when
                implemented correctly. We've also seen the costly mistakes that
                come from chasing trends without understanding the fundamentals.
              </p>
              <p>
                That's why we started AI Flow—to help companies build AI systems
                that actually work in production, scale efficiently, and deliver
                measurable business value. We don't do vaporware or
                proof-of-concepts that never ship. We build production-ready
                systems that our clients use to run their businesses.
              </p>
              <p>
                From materials science to legal tech, from Oil & Gas to fintech,
                we've helped companies across industries leverage AI to automate
                processes, reduce costs, and gain competitive advantages. Our
                approach is always the same: understand the business problem
                first, then apply the right technology to solve it.
              </p>
            </div>
          </Card>
        </div>

        {/* Our Values */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Fundamentals First
              </h3>
              <p className="text-muted-foreground">
                We prioritize solid engineering fundamentals over flashy demos.
                Clean data, robust pipelines, and scalable architecture are the
                foundation of every project we build.
              </p>
            </Card>
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Production-Ready
              </h3>
              <p className="text-muted-foreground">
                We don't do POCs that gather dust. Everything we build is
                designed to run in production, handle real users, and scale with
                your business from day one.
              </p>
            </Card>
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Transparent Partnership
              </h3>
              <p className="text-muted-foreground">
                We communicate openly, document thoroughly, and ensure you
                understand every technical decision. Your success is our
                success, and we're committed to building long-term partnerships.
              </p>
            </Card>
          </div>
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
