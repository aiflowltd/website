import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

/** Two-column buyer personas; matches line-grid / typography patterns used in EngagementSection. */
export const WhoWeServeSection = () => {
  return (
    <Section id="who-we-serve" scrollMargin>
      <SectionHeader
        title="Two buyers. One problem."
        subtitle="We serve regulated institutions in Europe and growth-stage fintechs in the United States. The obligation stacks are different. The underlying problem is identical."
        titleClassName="text-3xl md:text-4xl"
        subtitleClassName="max-w-2xl"
        className="mb-12"
      />

      <hr className="border-t border-[#E2E6F0]" />

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[#E2E6F0] gap-0">
        <div className="py-12 md:pr-10 max-md:border-b max-md:border-[#E2E6F0]">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-light-gray mb-3">
            EU - HEAD OF COMPLIANCE
          </p>
          <h3 className="font-sans font-semibold text-base text-[#0E1015] leading-snug mb-2">
            Banks, payment institutions, and financial firms in the UK, Benelux,
            and Nordics.
          </h3>
          <p className="text-[13px] text-[#555A66] mb-4">
            PSD2 · MiFID II · DORA · AML
          </p>
          <p className="font-sans font-light text-[15px] leading-[1.6] text-[#555A66]">
            The pressure is audit readiness. The fear is a regulatory finding
            that triggers remediation and public scrutiny. The team is too small
            to handle an expanding obligation stack manually.
          </p>
        </div>
        <div className="py-12 md:pl-10">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-light-gray mb-3">
            US - VP OF COMPLIANCE
          </p>
          <h3 className="font-sans font-semibold text-base text-[#0E1015] leading-snug mb-2">
            Series B and C fintechs in payments and lending, operating across
            multiple states.
          </h3>
          <p className="text-[13px] text-[#555A66] mb-4">
            FinCEN · CFPB · State banking authorities
          </p>
          <p className="font-sans font-light text-[15px] leading-[1.6] text-[#555A66]">
            The pressure is speed to new markets. The fear is a compliance
            failure that delays expansion and surfaces in a fundraising
            conversation. Every week spent on manual reporting is a week of
            delayed revenue.
          </p>
        </div>
      </div>

      <hr className="border-t border-[#E2E6F0]" />
    </Section>
  );
};
