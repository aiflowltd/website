import { teamMembers } from "@/data/team";

const stats = [
  { value: "10+", label: "Years of combined experience" },
  { value: "50+", label: "Projects delivered" },
  { value: "20+", label: "Enterprise clients" },
  { value: "250+", label: "AI models deployed" },
];

const quotes = [
  {
    text: "Mihai Anton - Founder & Lead AI/ML Engineer. Ex-Google, Bloomberg.",
  },
  {
    text: "Irina Barbos - Founder & AI Solutions Consultant.",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - stats */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-4">
              Senior expertise that
              <br />
              <span className="text-primary">yields results.</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - team credibility */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                  <img
                    src={teamMembers.mihai.photo}
                    alt={teamMembers.mihai.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{teamMembers.mihai.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Founder & Lead AI/ML Engineer
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ex-Google, Bloomberg. 9+ years building ML systems end-to-end,
                from data pipelines to production deployment.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                  <img
                    src={teamMembers.irina.photo}
                    alt={teamMembers.irina.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{teamMembers.irina.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Founder & AI Solutions Consultant
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built AI products for startups and enterprises across the U.S.
                and Europe, including NYU's innovation ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
