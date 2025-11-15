import mihaiImage from "@/assets/mihai.png";
import irinaImage from "@/assets/irina.png";

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  website?: string;
}

export const authors: Record<string, Author> = {
  "mihai-anton": {
    id: "mihai-anton",
    name: "Mihai Anton",
    role: "Founder & Lead Engineer",
    bio: "Mihai has nearly a decade of experience in AI and machine learning, having worked at Google on feature selection tools and at BP on production ML pipelines. He specializes in building scalable AI solutions and has helped companies from startups to Fortune 500 enterprises leverage AI effectively.",
    image: mihaiImage,
    linkedin: "https://www.linkedin.com/in/mihaianton98/",
    website: "https://antonmih.ai/",
  },
  "irina-barbos": {
    id: "irina-barbos",
    name: "Irina Barbos",
    role: "Co-Founder & AI Solutions Consultant",
    bio: "Irina brings deep expertise in full-stack development and system architecture. She has led the development of complex web platforms and specializes in building scalable, production-ready systems with modern technologies like Next.js, React, and cloud infrastructure.",
    image: irinaImage,
    linkedin: "https://www.linkedin.com/in/irina-barbos/",
    website: "https://irinabarbos.com/",
  },
};

export const getAuthor = (authorId: string): Author => {
  return authors[authorId] || authors["mihai-anton"];
};

