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
    caseStudyText: "Read The Case Study",
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
  {
    id: "bank-clutch",
    quote:
      "Irina provided immediate support with one of the most difficult technical issues we had. Literally don't know how she understood the issue, but we got to the root of the problem and were able to get an efficient solution. Massive thank you!",
    author: "",
    role: "Team at",
    company: "bank",
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
    id: "bank-resilience",
    quote:
      "Special kudos to Irina for her extraordinary resilience and commitment. After weeks of relentless effort and extraordinary focus, she figured out how to elegantly jump over the highest hurdles and buggy configurations we faced. Simply exceptional problem-solving under pressure.",
    author: "",
    role: "Team at",
    company: "bank",
  },
];
