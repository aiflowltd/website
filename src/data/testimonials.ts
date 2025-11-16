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
    id: "exomatter",
    quote:
      "I had the feeling that you could get things done quickly. [...] I trusted you to give a good result, and that's what happened. [...] I could not have wished for anything better",
    author: "Josua Vieten",
    role: "CEO",
    company: "ExoMatter",
    caseStudyLink: "exomatter-automl",
    caseStudyText: "Read THE CASE STUDY",
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
    id: "automl-ceo",
    quote:
      "AutoML is becoming big in the IT industry. AI Flow is a competent and resilient team. I trust Mihai he can make progress fast and make a business of this.",
    author: "",
    role: "CEO of",
    company: "software agency",
  },
  {
    id: "mihai-ambitious",
    quote:
      "Mihai is ambitious and a quick learner. A strong team leader who can make product recommendations and put them into practice.",
    author: "",
    role: "",
    company: "",
  },
  {
    id: "user-flows-ceo",
    quote:
      "You did a FANTASTIC job on the user flows! Everything makes clear, logical sense and it's pretty much exactly as I imagined it. Thank you!",
    author: "",
    role: "CEO in the",
    company: "creative tech space",
  },
];
