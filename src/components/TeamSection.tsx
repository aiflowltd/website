import { Card } from "@/components/ui/card";
import { Linkedin, Github, Mail } from "lucide-react";
import { teamMembers, type TeamMember } from "@/data/team";
import irinaPhoto from "@/assets/irina.png";
import mihaiPhoto from "@/assets/mihai.png";

export const TeamSection = () => {
  const team: (TeamMember & { photo: string })[] = [
    {
      ...teamMembers.irina,
      photo: irinaPhoto,
    },
    {
      ...teamMembers.mihai,
      photo: mihaiPhoto,
    },
  ];

  return (
    <section id="team" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry veterans with deep expertise in AI/ML, having built
            products for Google, Bloomberg, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden group-hover:border-primary transition-colors">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group/icon"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover/icon:text-background transition-colors" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group/icon"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-5 h-5 text-primary group-hover/icon:text-background transition-colors" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group/icon"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-primary group-hover/icon:text-background transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Optional: Stats or achievements */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};
