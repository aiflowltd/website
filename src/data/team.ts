import mihaiImage from "@/assets/mihai.png";
import irinaImage from "@/assets/irina.png";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
  github?: string;
  email: string;
  website?: string;
}

// Team member data - single source of truth
export const teamMembers = {
  irina: {
    id: "irina-barbos",
    name: "Irina Barbos",
    role: "Co‑founder & AI Strategy",
    bio: "Irina designs and delivers AI systems for organisations in the US and Europe. She brings an engineering mindset to strategy and execution: scalable architecture, clear product logic, and production-ready AI that fits how teams actually work. Prior to AI Flow she built AI-focused products in the NYU innovation ecosystem and advised teams on implementation and governance.",
    photo: irinaImage,
    linkedin: "https://www.linkedin.com/in/irina-barbos",
    github: "https://github.com/irinalarisabarbos",
    email: "irina@aiflow.ltd",
    website: "https://irinabarbos.com/",
  },
  mihai: {
    id: "mihai-anton",
    name: "Mihai Anton",
    role: "Co‑founder & Lead AI/ML Engineer",
    bio: "Mihai has spent over nine years building ML systems end to end - at Google, Bloomberg, and multiple startups. He founded AI Flow to help companies turn data and requirements into real, scalable AI products. He focuses on first-principles design, clean architecture, and delivery that goes from discovery to production without shortcuts.",
    photo: mihaiImage,
    linkedin: "https://www.linkedin.com/in/mihaianton98/",
    github: "https://github.com/mihaianton",
    email: "mihai@aiflow.ltd",
    website: "https://antonmih.ai/",
  },
} as const;

// Array for easy iteration
export const teamArray: TeamMember[] = [teamMembers.irina, teamMembers.mihai];

// Author lookup by ID (for blog posts)
export const authors: Record<string, TeamMember> = {
  "irina-barbos": teamMembers.irina,
  "mihai-anton": teamMembers.mihai,
};

export const getAuthor = (authorId: string): TeamMember => {
  return authors[authorId] || teamMembers.mihai;
};

// Legacy alias for backwards compatibility
export type Author = TeamMember;

// Company information
export const companyInfo = {
  name: "AI Flow",
  tagline:
    "Your deep tech engineering partner. We build AI systems that actually scale - real delivery, no hype.",
  email: "contact@aiflow.ltd",
  meetingLink: "/contact",
  linkedinCompany: "https://www.linkedin.com/company/ai-flow",
} as const;
