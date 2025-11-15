import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "future-of-ai-enterprise-2025",
      title: "The Future of AI in Enterprise: Trends to Watch in 2025",
      excerpt: "Explore the emerging AI trends that will shape enterprise technology in the coming year, from generative AI to autonomous systems.",
      date: "November 10, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      tags: ["AI", "Enterprise", "Trends"],
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

  const categories = ["All", "AI Trends", "Machine Learning", "Engineering", "LLMs", "Strategy", "Edge Computing"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into AI, machine learning, and the future of technology. 
            Learn from our experience building AI products in the real world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-primary hover:bg-primary/90 text-background"
                  : "border-border hover:border-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {blogPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.id}`}>
              <Card
                className="bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer overflow-hidden h-full"
              >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <span className="text-primary hover:text-primary/80 font-semibold flex items-center">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center max-w-4xl mx-auto border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, tutorials, and AI industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;

