import { Section } from "@/components/Section";

export const MarketQuoteSection = () => {
  return (
    <Section id="what-happens-in-the-market" scrollMargin>
      <div className="bg-[#0E1015] rounded-xl px-8 md:px-16 py-14 md:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-10">
          What happens in the market
        </p>

        <blockquote className="mb-10">
          <p className="font-alternates font-semibold text-2xl md:text-3xl lg:text-4xl text-white leading-snug max-w-4xl">
            &ldquo;Monzo Bank Limited was fined £21.1m after rapid customer growth outpaced the maturity of its compliance infrastructure&rdquo;
          </p>
          <footer className="mt-6 font-sans text-sm text-white/40">
            Fintech Global
          </footer>
        </blockquote>

        <p className="font-sans font-semibold text-base md:text-lg text-white leading-snug max-w-2xl border-t border-white/10 pt-8">
          With our solutions you will be compliant in a couple of weeks, at a fraction of the exposure cost.
        </p>
      </div>
    </Section>
  );
};
