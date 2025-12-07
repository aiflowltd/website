import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What are our <span className="text-primary">clients saying?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients we've helped transform with AI
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              // Featured testimonials (with case studies) span 2 columns
              const isFeatured = testimonial.caseStudyLink;
              
              return (
                <Card
                  key={testimonial.id}
                  className={`
                    relative overflow-hidden
                    bg-gradient-to-br from-card via-card to-card/50
                    border-border
                    p-8
                    hover:border-primary hover:shadow-lg hover:shadow-primary/10
                    transition-all duration-500
                    group
                    flex flex-col
                    ${isFeatured ? 'lg:col-span-2' : ''}
                    hover:scale-[1.02]
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex-1 flex flex-col">
                    {/* Quote icon */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-10 h-10 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    </div>

                    {/* Quote text */}
                    <p className="text-base leading-relaxed mb-6 flex-1 text-foreground/90 group-hover:text-foreground transition-colors">
                      {testimonial.quote.startsWith('"')
                        ? testimonial.quote
                        : `"${testimonial.quote}"`}
                    </p>

                    {/* Author info */}
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      {(testimonial.author || testimonial.role || testimonial.company) && (
                        <div className="flex items-center gap-3">
                          {/* Avatar placeholder */}
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">
                              {testimonial.author 
                                ? testimonial.author.charAt(0)
                                : testimonial.company.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            {testimonial.author && (
                              <p className="font-semibold text-foreground">
                                {testimonial.author}
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role && <span>{testimonial.role} </span>}
                              {testimonial.company && <span>{testimonial.company}</span>}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Case study link */}
                      {testimonial.caseStudyLink && testimonial.caseStudyText && (
                        <Link
                          to={`/case-studies/${testimonial.caseStudyLink}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold group/link"
                        >
                          <span>{testimonial.caseStudyText}</span>
                          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
