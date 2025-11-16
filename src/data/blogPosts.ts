export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "why-you-need-ai-consultant-2025",
    title: "Why You Need an AI Consultant in 2025",
    excerpt: "Building impactful AI products requires rigorous fundamentals. Learn why bringing in an AI consultant is no longer a luxury but a strategic necessity.",
    date: "November 22, 2024",
    readTime: "8 min read",
    category: "Strategy",
    tags: ["AI", "Consulting", "Business"],
  },
  {
    id: "understanding-ai-agents",
    title: "Understanding AI Agents: Intelligent Automation and the Power of Delegation",
    excerpt: "Beyond the hype: what AI agents really are, how they differ from simple automation, and whether they'll reshape how businesses build AI-driven products.",
    date: "November 20, 2024",
    readTime: "11 min read",
    category: "AI Trends",
    tags: ["AI Agents", "Automation", "AI"],
  },
  {
    id: "tech-giants-ai-acquisitions-2025",
    title: "How Tech Giants Leverage AI Acquisitions in 2025",
    excerpt: "Why large companies are on an AI buying spree and what smaller enterprises can learn from this strategic push to embed AI expertise into their business models.",
    date: "November 19, 2024",
    readTime: "10 min read",
    category: "Strategy",
    tags: ["AI", "Business", "Strategy"],
  },
  {
    id: "how-to-start-learning-ai-2025",
    title: "How to Start Learning AI in 2025",
    excerpt: "A practical guide for founders and tech leads on where to actually start learning AI, grounded in real-world experience building transformative AI systems.",
    date: "November 18, 2024",
    readTime: "9 min read",
    category: "AI Trends",
    tags: ["AI", "Learning", "Career"],
  },
  {
    id: "pruning-junk-tokens-llm-costs",
    title: "How We Saved 80% off LLM Inference Costs by Pruning 'Junk Tokens'",
    excerpt: "A practical guide to reducing your AI API bills by up to 85% through intelligent token pruning – and why this pattern works almost anywhere.",
    date: "November 15, 2024",
    readTime: "10 min read",
    category: "Engineering",
    tags: ["LLM", "Cost Optimization", "Engineering"],
  },
  {
    id: "production-ml-pipelines",
    title: "Building Production-Ready ML Pipelines: A Complete Guide",
    excerpt: "Learn best practices for creating robust, scalable ML pipelines that can handle real-world production demands.",
    date: "November 5, 2024",
    readTime: "12 min read",
    category: "Machine Learning",
    tags: ["ML", "DevOps", "Engineering"],
  },
  {
    id: "distributed-computing-optimization",
    title: "How We Reduced Model Training Time by 80% Using Distributed Computing",
    excerpt: "A deep dive into our approach to optimizing ML model training using distributed computing and smart resource allocation.",
    date: "October 28, 2024",
    readTime: "10 min read",
    category: "Engineering",
    tags: ["Performance", "ML", "Optimization"],
  },
  {
    id: "rag-vs-finetuning",
    title: "RAG vs Fine-tuning: Choosing the Right Approach for Your LLM",
    excerpt: "Understanding the trade-offs between Retrieval-Augmented Generation and fine-tuning for large language model applications.",
    date: "October 20, 2024",
    readTime: "15 min read",
    category: "LLMs",
    tags: ["LLM", "RAG", "Fine-tuning"],
  },
  {
    id: "roi-of-ai",
    title: "The ROI of AI: Measuring Success Beyond the Hype",
    excerpt: "A practical framework for measuring and demonstrating the real business value of AI initiatives in your organization.",
    date: "October 12, 2024",
    readTime: "7 min read",
    category: "Strategy",
    tags: ["ROI", "Business", "Strategy"],
  },
  {
    id: "edge-ai-iot",
    title: "Edge AI: Bringing Intelligence to IoT Devices",
    excerpt: "Discover how edge computing is enabling AI capabilities on resource-constrained IoT devices for real-time decision making.",
    date: "October 5, 2024",
    readTime: "9 min read",
    category: "Edge Computing",
    tags: ["Edge AI", "IoT", "Hardware"],
  },
];

export const categories = [
  "All",
  "AI Trends",
  "Machine Learning",
  "Engineering",
  "LLMs",
  "Strategy",
  "Edge Computing"
];

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") {
    return blogPosts;
  }
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

