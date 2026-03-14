import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { SiteLink } from "@/components/SiteLink";

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
    question: "What if I'm not sure what AI solution I need?",
    answer:
      "That's exactly why we're here. We often start with a discovery consultation to explore your business challenges and brainstorm how AI might help. Even if you don't have a clear use case yet, we'll guide you through possibilities and identify the best opportunities for impact. Our approach is flexible — we meet you wherever you are in your AI journey.",
  },
  {
    question: "How do you price your projects?",
    answer:
      "Pricing depends on scope, complexity, and engagement model. We offer advisory sessions, team augmentation, and full delivery teams. After a discovery call, we provide a transparent estimate with clear milestones.",
  },
  {
    question: "Do you offer off-the-shelf AI products?",
    answer:
      "We primarily build custom AI systems tailored to your needs. However, we also develop DataCards — a tool for converting large volumes of data into agents with knowledge — which can be deployed as a product.",
  },
  {
    question: "Can I really chat with an AI on your website?",
    answer:
      "Yes! Our website features an AI assistant that can answer questions about our services, approach, and capabilities. It's a live example of what we build for our clients.",
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
          <div className="md:text-right">
            <p className="mb-1 text-muted-foreground">
              Not finding what you need?
            </p>
            <SiteLink to="/contact" arrow="up-right">
              Reach out and we'll help
            </SiteLink>
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
