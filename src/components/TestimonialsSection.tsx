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
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-10 gap-4"
            style={{ gridAutoRows: "minmax(200px, auto)" }}
          >
            {testimonials.map((testimonial, index) => {
              // Speciaql layout: Josua Vieten is 60% width (6 columns), CEO creative tech fits below
              if (testimonial.id === "exomatter") {
                // Josua Vieten: 60% width (6 columns out of 10), spans 2 rows
                return (
                  <Card
                    key={testimonial.id}
                    className="bg-card border-border p-6 md:p-8 hover:border-primary transition-all duration-300 group flex flex-col md:col-span-6 md:row-span-2 md:col-start-1 md:row-start-1"
                  >
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {testimonial.quote.startsWith('"')
                          ? testimonial.quote
                          : `"${testimonial.quote}"`}
                      </p>
                    </div>
                    <div className="border-t border-border pt-4 space-y-2">
                      {(testimonial.author ||
                        testimonial.role ||
                        testimonial.company) && (
                        <div className="text-sm text-muted-foreground">
                          {testimonial.author && (
                            <>
                              <span className="font-semibold text-foreground">
                                {testimonial.author}
                              </span>
                              {(testimonial.role || testimonial.company) &&
                                ", "}
                            </>
                          )}
                          {testimonial.role && (
                            <span>
                              {testimonial.role}
                              {testimonial.company && " "}
                            </span>
                          )}
                          {testimonial.company && (
                            <span>{testimonial.company}</span>
                          )}
                        </div>
                      )}
                      {testimonial.caseStudyLink &&
                        testimonial.caseStudyText && (
                          <Link
                            to={`/case-studies/${testimonial.caseStudyLink}`}
                            className="inline-block text-primary hover:text-primary/80 transition-colors text-sm font-semibold mt-2"
                          >
                            {testimonial.caseStudyText}
                          </Link>
                        )}
                    </div>
                  </Card>
                );
              }

              if (testimonial.id === "user-flows-ceo") {
                // CEO in creative tech space: fits below Josua, also 60% width (6 columns)
                return (
                  <Card
                    key={testimonial.id}
                    className="bg-card border-border p-6 md:p-8 hover:border-primary transition-all duration-300 group flex flex-col md:col-span-6 md:row-span-1 md:col-start-1 md:row-start-3"
                  >
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {testimonial.quote.startsWith('"')
                          ? testimonial.quote
                          : `"${testimonial.quote}"`}
                      </p>
                    </div>
                    <div className="border-t border-border pt-4 space-y-2">
                      {(testimonial.author ||
                        testimonial.role ||
                        testimonial.company) && (
                        <div className="text-sm text-muted-foreground">
                          {testimonial.author && (
                            <>
                              <span className="font-semibold text-foreground">
                                {testimonial.author}
                              </span>
                              {(testimonial.role || testimonial.company) &&
                                ", "}
                            </>
                          )}
                          {testimonial.role && (
                            <span>
                              {testimonial.role}
                              {testimonial.company && " "}
                            </span>
                          )}
                          {testimonial.company && (
                            <span>{testimonial.company}</span>
                          )}
                        </div>
                      )}
                      {testimonial.caseStudyLink &&
                        testimonial.caseStudyText && (
                          <Link
                            to={`/case-studies/${testimonial.caseStudyLink}`}
                            className="inline-block text-primary hover:text-primary/80 transition-colors text-sm font-semibold mt-2"
                          >
                            {testimonial.caseStudyText}
                          </Link>
                        )}
                    </div>
                  </Card>
                );
              }

              // Remaining testimonials fill the right 40% (4 columns)
              const layouts = [
                {
                  cols: "md:col-span-4",
                  rows: "md:row-span-1",
                  start: "md:col-start-7",
                  rowStart: "md:row-start-1",
                }, // Marcus Drewes: Top-right
                {
                  cols: "md:col-span-2",
                  rows: "md:row-span-1",
                  start: "md:col-start-7",
                  rowStart: "md:row-start-2",
                }, // automl-ceo: Middle-right-top
                {
                  cols: "md:col-span-2",
                  rows: "md:row-span-1",
                  start: "md:col-start-9",
                  rowStart: "md:row-start-2",
                }, // mihai-ambitious: Middle-right-bottom
              ];

              const remainingIndices = [1, 2, 3]; // Marcus, automl-ceo, mihai-ambitious
              const layoutIndex = remainingIndices.indexOf(index);
              const layout =
                layoutIndex >= 0 ? layouts[layoutIndex] : layouts[0];

              return (
                <Card
                  key={testimonial.id}
                  className={`bg-card border-border p-6 md:p-8 hover:border-primary transition-all duration-300 group flex flex-col ${layout.cols} ${layout.rows} ${layout.start} ${layout.rowStart}`}
                >
                  <div className="flex-1">
                    <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {testimonial.quote.startsWith('"')
                        ? testimonial.quote
                        : `"${testimonial.quote}"`}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4 space-y-2">
                    {(testimonial.author ||
                      testimonial.role ||
                      testimonial.company) && (
                      <div className="text-sm text-muted-foreground">
                        {testimonial.author && (
                          <>
                            <span className="font-semibold text-foreground">
                              {testimonial.author}
                            </span>
                            {(testimonial.role || testimonial.company) && ", "}
                          </>
                        )}
                        {testimonial.role && (
                          <span>
                            {testimonial.role}
                            {testimonial.company && " "}
                          </span>
                        )}
                        {testimonial.company && (
                          <span>{testimonial.company}</span>
                        )}
                      </div>
                    )}
                    {testimonial.caseStudyLink && testimonial.caseStudyText && (
                      <Link
                        to={`/case-studies/${testimonial.caseStudyLink}`}
                        className="inline-block text-primary hover:text-primary/80 transition-colors text-sm font-semibold mt-2"
                      >
                        {testimonial.caseStudyText}
                      </Link>
                    )}
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
