import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";

export function HomeProofStatsSection() {
  return (
    <Section id="measurable-outcomes" scrollMargin>
      <SectionHeader
        title="Outcomes you can take to your board and your regulator."
        subtitle="Key people stop assembling data and start doing compliance. These are the numbers that change."
        titleClassName="text-3xl md:text-4xl"
        subtitleClassName="max-w-2xl"
        className="mb-12"
      />

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="flex min-w-0 flex-col items-center justify-center border-border pb-10 md:pb-0 md:border-r md:pr-6 lg:pr-10 border-b md:border-b-0">
            <p
              className="font-extralight tracking-[-0.03em] leading-none text-success"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              15h
            </p>
            <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Saved per person, per week
            </p>
          </div>
          <div className="flex min-w-0 flex-col items-center justify-center py-10 md:py-0 md:px-6 lg:px-10 border-b md:border-b-0 md:border-r border-border">
            <p
              className="font-extralight tracking-[-0.03em] leading-none text-success"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
            >
              ~$2M
            </p>
            <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              In avoided losses from fines and regulatory findings
            </p>
          </div>
          <div className="flex min-w-0 flex-col items-center justify-center pt-10 md:pt-0 md:pl-6 lg:pl-10">
            <p
              className="flex flex-col gap-0.5 items-center font-extralight tracking-[-0.03em] leading-none text-foreground"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
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
        </div>
      </div>
    </Section>
  );
}
