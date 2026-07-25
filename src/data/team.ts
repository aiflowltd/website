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
    role: "Co‑founder & AI Solutions Consultant",
    bio: "Irina spent four years inside financial services compliance - private banking, wealth, and asset management - living the manual reporting problem firsthand: data scattered across departments, manually assembled into regulatory reports every cycle. She founded AI Flow to build the infrastructure that closes that gap, bringing an engineering mindset to compliance strategy and execution.",
    photo: irinaImage,
    linkedin: "https://www.linkedin.com/in/irina-barbos",
    github: "https://github.com/irinalarisabarbos",
    email: "irina@aiflow.ltd",
    website: "https://irinabarbos.com/",
  },
  mihai: {
    id: "mihai-anton",
    name: "Mihai Anton",
    role: "Co‑founder & AI Solutions Consultant",
    bio: "Mihai has spent 10 years in AI and production systems - ex-Bloomberg (regulated financial data), ex-Google (ML tooling), and multiple startups. He founded AI Flow after seeing companies with large volumes of operations data and clear outcomes, but no clear process to get from data to results. He focuses on first-principles design, clean architecture, and delivery that goes from discovery to production without shortcuts.",
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
  tagline: "The AI-native operating layer for regulated financial institutions.",
  email: "contact@aiflow.ltd",
  meetingLink: "/contact",
  linkedinCompany: "https://www.linkedin.com/company/ai-flow",
} as const;
