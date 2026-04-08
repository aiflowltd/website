export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  caseStudyLink?: string;
  caseStudyText?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "bank-resilience",
    quote:
      "Special kudos to Irina for her extraordinary resilience and commitment. After weeks of relentless effort and extraordinary focus, she figured out how to elegantly jump over the highest hurdles and buggy configurations we faced. Simply exceptional problem-solving under pressure.",
    author: "",
    role: "Team at",
    company: "bank",
  },
  {
    id: "bank-clutch",
    quote:
      "Simply exceptional problem-solving under pressure. She found a critical issue and resolved it with laser-sharp focus.",
    author: "",
    role: "Senior team",
    company: "European bank (under NDA)",
  },
  {
    id: "mobile-app",
    quote:
      "Irina supported our AI setup with unmatched perseverance and professionalism. She found a critical issue on our side with laser-sharp focus. Absolute massive kudos for the problem-solving skills!",
    author: "",
    role: "Team at",
    company: "consulting company",
  },
  {
    id: "marcus-drewes",
    quote:
      "I really had the confidence to trust in you to make the right decision. I wouldn't doubt any technical decision that we have made in the last months.",
    author: "Marcus Drewes",
    role: "Lead developer",
    company: "",
    caseStudyLink: "student-financing-platform",
    caseStudyText: "Read The Case Study",
  },
  {
    id: "exomatter",
    quote:
      "I trusted you to give a good result, and that's what happened. I could not have wished for anything better.",
    author: "Josua Vieten",
    role: "CEO",
    company: "ExoMatter",
    caseStudyLink: "exomatter-automl",
    caseStudyText: "Read The Case Study",
  },
];
