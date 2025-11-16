export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
  github?: string;
  email: string;
}

// Team member data - Single source of truth
export const teamMembers = {
  irina: {
    name: "Irina Barbos",
    role: "Co-Founder & CEO",
    bio: "AI researcher and entrepreneur with 10+ years building production ML systems for Fortune 500 companies.",
    linkedin: "https://www.linkedin.com/in/irina-barbos",
    github: "https://github.com/irinalarisabarbos",
    email: "irina@aiflow.ltd",
  },
  mihai: {
    name: "Mihai Anton",
    role: "Co-Founder & CTO",
    bio: "Full-stack AI engineer specializing in scalable ML infrastructure and real-time AI applications.",
    linkedin: "https://www.linkedin.com/in/mihaianton98/",
    github: "https://github.com/mihaianton",
    email: "mihai@aiflow.ltd",
  },
} as const;

// Array for easy iteration
export const teamArray: TeamMember[] = [
  {
    ...teamMembers.irina,
    photo: "/src/assets/irina.png", // Will be replaced with actual import in components
  },
  {
    ...teamMembers.mihai,
    photo: "/src/assets/mihai.png", // Will be replaced with actual import in components
  },
];

// Company information
export const companyInfo = {
  name: "AI Flow",
  tagline: "Building AI-powered products. In AI & ML before the wave. Building products, not hype.",
  email: "contact@aiflow.ltd",
  website: "https://aiflow.ltd",
  meetingLink: "https://aiflow.ltd/meet",
  linkedinCompany: "https://www.linkedin.com/company/aiflow-ltd",
} as const;

