import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl  font-bold font-alternates mb-2">
              What clients say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stories from teams we&apos;ve worked with
            </p>
          </div>

          {/* Page indicators: 01 ------ 02 03 04, line marks current in sight */}
          <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground shrink-0">
            {(() => {
              const n = testimonials.length;
              const size = 4;
              const start = Math.max(0, Math.min(current - 1, n - size));
              const indices = Array.from(
                { length: size },
                (_, i) => start + i,
              ).filter((i) => i < n);
              return (
                <>
                  {indices.map((i) => (
                    <span key={i} className="contents">
                      <button
                        type="button"
                        onClick={() => setCurrent(i)}
                        className={`transition-colors ${
                          i === current
                            ? "text-foreground font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </button>
                      {i === current && (
                        <div
                          className="w-8 sm:w-12 h-px bg-foreground shrink-0"
                          aria-hidden
                        />
                      )}
                    </span>
                  ))}
                </>
              );
            })()}
          </div>
        </div>

        {/* Testimonial content — fixed height so prev/next don't jump */}
        <div className="min-h-[260px] md:min-h-[280px] flex flex-col">
          <blockquote className="text-3xl md:text-4xl lg:text-4xl leading-relaxed mb-12 text-foreground/90 font-light flex-1 min-h-[180px] md:min-h-[200px]">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between flex-shrink-0 min-h-[3.5rem]">
            <div className="flex items-center gap-4 min-h-14">
              {t.avatar ? (
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-14 h-14 shrink-0 rounded-lg object-cover"
                />
              ) : t.author ? (
                <div className="w-14 h-14 shrink-0 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">
                    {t.author.charAt(0)}
                  </span>
                </div>
              ) : null}
              <div className="min-h-[3.5rem] flex flex-col justify-center">
                {t.author && (
                  <p className="font-semibold text-lg">{t.author}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  {t.role}
                  {t.role && t.company ? " at " : ""}
                  {t.company}
                </p>
                {t.caseStudyLink && t.caseStudyText && (
                  <Link
                    to={`/case-studies/${t.caseStudyLink}`}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    {t.caseStudyText} →
                  </Link>
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
