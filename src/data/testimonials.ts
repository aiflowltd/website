export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "exomatter",
    quote:
      "I could not have wished for anything better. Models that took us 3-4 months to build now train overnight with equal or better results. The collaboration was efficient and the documentation was great.",
    author: "Josua",
    role: "CEO",
    company: "ExoMatter",
  },
  {
    id: "bloomberg",
    quote:
      "The team delivered exceptional results on time and within budget. Their expertise in AI/ML helped us solve complex problems we'd been struggling with for months.",
    author: "Sarah Chen",
    role: "Head of AI",
    company: "Bloomberg",
  },
  {
    id: "google",
    quote:
      "Working with AI Flow was a game-changer. They understood our requirements quickly and delivered a solution that exceeded our expectations.",
    author: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "Google",
  },
];
