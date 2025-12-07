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

// Team member data - Single source of truth
export const teamMembers = {
  irina: {
    id: "irina-barbos",
    name: "Irina Barbos",
    role: "Founder & AI Solutions Consultant",
    bio: "Irina has built AI-focused products for organizations in the U.S. and Europe, including startups developed within NYU’s innovation ecosystem. With a strong engineering background, she designs scalable architectures and helps teams implement production-ready AI aligned with operational needs.",
    photo: irinaImage,
    linkedin: "https://www.linkedin.com/in/irina-barbos",
    github: "https://github.com/irinalarisabarbos",
    email: "irina@aiflow.ltd",
    website: "https://irinabarbos.com/",
  },
  mihai: {
    id: "mihai-anton",
    name: "Mihai Anton",
    role: "Founder & Lead AI/ML Engineer",
    bio: "Mihai is an AI, ML and software engineer with nine years of hands-on experience building ML systems end to end. After working at Google, Bloomberg, and multiple startups, he founded AI Flow to help companies turn data into real, scalable products built with first principles and technical rigor.",
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
    "Building AI-powered products. In AI & ML before the wave. Building products, not hype.",
  email: "contact@aiflow.ltd",
  meetingLink: "/contact",
  linkedinCompany: "https://www.linkedin.com/company/ai-flow/",
} as const;
