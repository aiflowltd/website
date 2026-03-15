import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { SiteButton } from "@/components/SiteButton";

const faqIconPaths = [
  "/images/icons/faq-question.svg",
  "/images/icons/faq-pricing.svg",
  "/images/icons/faq-custom.svg",
  "/images/icons/faq-chat.svg",
];

// Different dot position per FAQ (percent of 251px icon), so it moves when question changes
const faqDotPositions: { left: number; top: number }[] = [
  { left: 14, top: 16 },
  { left: 78, top: 12 },
  { left: 82, top: 72 },
  { left: 18, top: 68 },
];

const faqs = [
  {
    question: "We're not sure where to start. What do you recommend?",
    answer:
      "That is exactly what the AI Clarity Session is for. In one focused session we map your processes, identify where AI creates measurable value, and give you a clear answer — including realistic cost and return. No obligation to continue after that.",
  },
  {
    question: "How do you price? We need to present this internally.",
    answer:
      "We price on scope and expected outcomes — not on days or headcount. The Clarity Session and Opportunity Audit are fixed-price with defined deliverables. Build engagements are scoped after the audit, with a clear budget range before any commitment. We are comfortable helping you build the business case for internal sign-off.",
  },
  {
    question: "We have sensitive data and strict security requirements. How do you handle that?",
    answer:
      "We work under NDA from the first conversation, as standard. Architecture, data access, and deployment environments are designed around your requirements — not a default template. We have experience with on-premise deployments and multi-jurisdiction data residency constraints.",
  },
  {
    question: "We have an internal data team. Where do you fit?",
    answer:
      "We work alongside internal teams, not instead of them. We provide the AI and ML engineering depth — model development, agent architecture, LLM integration, production deployment — that most internal data teams do not have in-house. Your team retains ownership. We accelerate delivery.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={cn(
        "absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200",
        open && "rotate-45",
      )}
      aria-hidden
    >
      <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-grey" />
      <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-grey" />
    </span>
  );
}

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState("faq-0");
  const openIndex = parseInt(openFaq.replace("faq-", ""), 10) || 0;

  return (
    <Section>
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-1 text-4xl text-muted-foreground md:text-5xl">
            Got questions?
          </p>
          <h2 className="text-4xl font-bold font-alternates md:text-5xl">
            Find answers.
          </h2>
        </div>
        <div className="flex flex-col gap-2 md:items-end md:text-right">
          <p className="text-muted-foreground">
            Not finding what you need?
          </p>
          <Link to="/contact">
            <SiteButton variant="primary" arrow="up-right" className="whitespace-nowrap">
              Reach out and we'll help
            </SiteButton>
          </Link>
        </div>
      </div>

      {/* FAQs row: FAQ list (584px) + icon (251px), gap 24px */}
      <div
        className="flex flex-row flex-wrap items-start justify-between gap-6 lg:flex-nowrap"
        style={{ isolation: "isolate" }}
      >
        {/* FAQ column */}
        <div className="flex w-full max-w-[584px] flex-none flex-col gap-6 lg:order-0 lg:z-0">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
            className="flex flex-col gap-6"
          >
            {faqs.map((faq, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`faq-${index}`}
                className="flex flex-col gap-6"
              >
                {/* Question row: pill + plus icon, gap 16px */}
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex max-w-[584px] flex-1 flex-row items-center gap-4",
                    )}
                  >
                    {/* Question pill */}
                    <span
                      className={cn(
                        "box-border flex flex-row items-center justify-center gap-2 rounded-[40px] border px-6 py-4",
                        "bg-card transition-colors",
                        openFaq === `faq-${index}`
                          ? "border-medium-grey"
                          : "border-dark-grey",
                      )}
                    >
                      <span
                        className={cn(
                          "flex items-center font-sans text-sm font-light leading-[1.5]",
                          openFaq === `faq-${index}`
                            ? "text-white"
                            : "text-grey",
                        )}
                      >
                        {faq.question}
                      </span>
                    </span>
                    {/* Plus icon container 24×24 */}
                    <span
                      className="relative box-border h-6 w-6 flex-none rounded-[40px] border border-[#1D1929] bg-[#0F0D15]"
                      aria-hidden
                    >
                      <PlusIcon open={openFaq === `faq-${index}`} />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                {/* Answer: pl-20, content box */}
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="flex flex-col gap-2 pl-[80px]">
                    <div className="box-border flex flex-row items-center justify-center self-stretch rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border border-[#1D1929] bg-dark-grey p-6">
                      <p className="flex flex-1 items-center font-sans text-sm font-light leading-[1.5] text-white">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>

        {/* Message Icon: 251×251, margin 0 auto, flex none, order 1, flex-grow 0, z-index 1 */}
        <div className="relative m-0 mx-auto h-[251px] w-[251px] flex-none grow-0 lg:order-1 lg:z-[1]">
          <img
            src={faqIconPaths[openIndex]}
            alt=""
            className="h-full w-full object-contain"
            aria-hidden
          />
          {/* Dot position changes per question */}
          <div
            className="absolute h-12 w-12 rounded-full bg-[#748DFC] opacity-20 transition-all duration-300"
            style={{
              left: `${faqDotPositions[openIndex].left}%`,
              top: `${faqDotPositions[openIndex].top}%`,
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </Section>
  );
};
