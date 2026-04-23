import { Section } from "@/components/Section";

export const MarketQuoteSection = () => {
  return (
    <Section id="what-happens-in-the-market" scrollMargin>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-10">
        What happens in the market
      </p>

      <blockquote className="border-l-2 border-foreground/20 pl-6 md:pl-8 mb-8">
        <p className="font-alternates font-light text-2xl md:text-3xl text-foreground leading-snug">
          &ldquo;Monzo Bank Limited was fined £21.1m after rapid customer growth outpaced the maturity of its compliance infrastructure&rdquo;
        </p>
        <footer className="mt-4 font-sans text-sm text-muted-foreground">
          Fintech Global
        </footer>
      </blockquote>

      <p className="font-sans font-semibold text-base md:text-lg text-foreground leading-snug max-w-2xl">
        With our solutions you will be compliant in a couple of weeks, at a fraction of the exposure cost.
      </p>
    </Section>
  );
};
