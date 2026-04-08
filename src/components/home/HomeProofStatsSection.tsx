import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";

export function HomeProofStatsSection() {
  return (
    <Section id="measurable-outcomes" scrollMargin>
      <SectionHeader
        title="Outcomes you can take to your board and your regulator."
        subtitle="Once the first pipeline was live, these are the numbers that changed."
        titleClassName="text-3xl md:text-4xl"
        subtitleClassName="max-w-2xl"
        className="mb-12"
      />

      <div className="mx-auto w-full max-w-5xl px-6">
        {/* Equal 50/50 columns so the divider sits on the true horizontal center of this block */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 text-center">
          <div className="flex min-w-0 flex-col items-center justify-center border-border pb-10 md:pb-0 md:border-r md:pr-6 lg:pr-10 border-b md:border-b-0">
            <p
              className="flex flex-col gap-0.5 items-center font-extralight tracking-[-0.03em] leading-none text-foreground"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              <span className="whitespace-nowrap text-foreground line-through decoration-foreground/40">
                11 days
              </span>
              <span className="whitespace-nowrap text-success">4 hours</span>
            </p>
            <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Audit preparation time
            </p>
          </div>
          <div className="flex min-w-0 flex-col items-center justify-center pt-10 md:pt-0 md:pl-6 lg:pl-10">
            <p
              className="font-extralight tracking-[-0.03em] leading-none text-success"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
            >
              100% automated
            </p>
            <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Recurring regulatory filings, post-deployment
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
