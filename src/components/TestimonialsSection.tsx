import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders who have experienced our expertise
            firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group flex flex-col"
            >
              <div className="flex-1">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
