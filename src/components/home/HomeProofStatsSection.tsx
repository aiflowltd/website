import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";

export function HomeProofStatsSection() {
  return (
    <Section id="measurable-outcomes" scrollMargin>
      <div className="bg-[#0E1015] rounded-xl px-8 md:px-16 py-14 md:py-20">
        <SectionHeader
          title="Spend on growth. Not on fines."
          subtitle="Regulatory findings delay expansion and surface in fundraising conversations. Fixed infrastructure keeps the reputation solid and the budget where it belongs."
          titleClassName="text-3xl md:text-4xl text-white"
          subtitleClassName="max-w-2xl text-white/50"
          className="mb-12"
        />

        <div className="w-full">
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 text-center">
            <div className="flex min-w-0 flex-col items-center justify-center border-white/10 pb-10 md:pb-0 md:border-r md:pr-6 lg:pr-10 border-b md:border-b-0">
              <p
                className="font-extralight tracking-[-0.03em] leading-none text-success"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                15h
              </p>
              <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Saved per person, per week
              </p>
            </div>
            <div className="flex min-w-0 flex-col items-center justify-center py-10 md:py-0 md:px-6 lg:px-10 border-b md:border-b-0 md:border-r border-white/10">
              <p
                className="font-extralight tracking-[-0.03em] leading-none text-success"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
              >
                ~$2M
              </p>
              <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                In avoided losses from fines and regulatory findings
              </p>
            </div>
            <div className="flex min-w-0 flex-col items-center justify-center pt-10 md:pt-0 md:pl-6 lg:pl-10">
              <p
                className="flex flex-col gap-0.5 items-center font-extralight tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
              >
                <span className="whitespace-nowrap text-white/25 line-through decoration-white/20">
                  11 days
                </span>
                <span className="whitespace-nowrap text-success">4 hours</span>
              </p>
              <p className="mt-3 max-w-[16rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Audit preparation time
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
