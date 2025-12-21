import { JourneyAnimation, JourneyStep } from "./JourneyAnimation";
import { colors } from "@/constants/colors";

interface JourneySectionProps {
  steps: JourneyStep[];
  title?: string;
}

export const JourneySection = ({ steps, title }: JourneySectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div
          className="relative rounded-2xl p-8 md:p-12 border"
          style={{
            backgroundColor: colors.mediumGrey + "40",
            borderColor: colors.grey + "30",
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.grey}20`,
          }}
        >
          <JourneyAnimation steps={steps} title={title} />
        </div>
      </div>
    </section>
  );
};

