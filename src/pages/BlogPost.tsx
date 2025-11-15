import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Linkedin, Twitter } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts: Record<string, any> = {
    "future-of-ai-enterprise-2025": {
      title: "The Future of AI in Enterprise: Trends to Watch in 2025",
      excerpt: "Explore the emerging AI trends that will shape enterprise technology in the coming year, from generative AI to autonomous systems.",
      author: "Mihai Badea",
      date: "November 10, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      tags: ["AI", "Enterprise", "Trends", "2025"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "As we approach 2025, the enterprise AI landscape is evolving at an unprecedented pace. After over a decade in the AI/ML space, I've witnessed countless technology waves come and go. What we're seeing now is different – it's not hype, it's transformation."
        },
        {
          type: "heading",
          text: "1. Generative AI Moves to Production"
        },
        {
          type: "paragraph",
          text: "2024 was the year of experimentation with generative AI. 2025 will be the year it goes to production at scale. We're already seeing enterprises move from proof-of-concepts to production deployments, but with a critical difference: they're doing it responsibly."
        },
        {
          type: "paragraph",
          text: "Key developments to watch:"
        },
        {
          type: "list",
          items: [
            "RAG (Retrieval-Augmented Generation) becoming the standard for enterprise LLM applications",
            "Fine-tuning smaller, specialized models rather than relying solely on massive general-purpose LLMs",
            "AI governance frameworks becoming mandatory for regulated industries",
            "Cost optimization through model distillation and efficient inference"
          ]
        },
        {
          type: "heading",
          text: "2. AI Agents and Autonomous Systems"
        },
        {
          type: "paragraph",
          text: "The evolution from chatbots to AI agents is one of the most significant shifts we'll see. These aren't simple question-answering systems – they're autonomous agents that can plan, reason, and execute complex multi-step tasks."
        },
        {
          type: "paragraph",
          text: "We're building these systems for clients right now, and the results are remarkable. Imagine a customer service agent that doesn't just answer questions but can actually solve problems end-to-end: checking order status, processing refunds, escalating to humans only when necessary."
        },
        {
          type: "quote",
          text: "AI agents will handle 60% of enterprise knowledge work by 2027. The question isn't if, but how quickly companies can adapt.",
          author: "Gartner Research, 2024"
        },
        {
          type: "heading",
          text: "3. Multimodal AI Becomes Standard"
        },
        {
          type: "paragraph",
          text: "Text-only AI is already feeling dated. The future is multimodal – systems that can understand and generate text, images, audio, and video simultaneously. GPT-4V and Gemini are just the beginning."
        },
        {
          type: "paragraph",
          text: "Practical applications we're seeing:"
        },
        {
          type: "list",
          items: [
            "Visual inspection systems that combine computer vision with natural language explanations",
            "Document understanding that processes text, tables, images, and charts holistically",
            "Voice-first interfaces that understand context and emotion",
            "Video analysis for training, compliance, and quality assurance"
          ]
        },
        {
          type: "heading",
          text: "4. The Rise of Small Language Models"
        },
        {
          type: "paragraph",
          text: "Bigger isn't always better. While everyone chased 100B+ parameter models, something interesting happened: smaller, specialized models started outperforming them on specific tasks while being 10-100x more efficient."
        },
        {
          type: "paragraph",
          text: "We're seeing companies deploy 7B-13B parameter models fine-tuned for their specific domain, running on their own infrastructure, maintaining full control over their data and costs."
        },
        {
          type: "heading",
          text: "5. AI + Human: The Winning Combination"
        },
        {
          type: "paragraph",
          text: "The companies winning with AI aren't replacing humans – they're augmenting them. The most successful implementations we've built combine AI automation with human expertise in the loop."
        },
        {
          type: "paragraph",
          text: "This 'human-in-the-loop' approach delivers the best of both worlds: AI handles the repetitive, data-intensive work while humans focus on judgment, creativity, and complex decision-making."
        },
        {
          type: "heading",
          text: "What This Means for Your Business"
        },
        {
          type: "paragraph",
          text: "If you're leading an enterprise, here's what you should be doing now:"
        },
        {
          type: "list",
          items: [
            "Start with a clear use case, not the technology. Find your biggest pain points.",
            "Build your data infrastructure. AI is only as good as your data.",
            "Invest in AI literacy across your organization, not just your tech team.",
            "Think platform, not projects. Build reusable AI capabilities.",
            "Focus on ROI from day one. AI isn't R&D anymore – it needs to deliver value."
          ]
        },
        {
          type: "paragraph",
          text: "The AI revolution isn't coming – it's here. The question is whether you'll lead it or follow it."
        }
      ]
    },
    "production-ml-pipelines": {
      title: "Building Production-Ready ML Pipelines: A Complete Guide",
      excerpt: "Learn best practices for creating robust, scalable ML pipelines that can handle real-world production demands.",
      author: "Irina Badea",
      date: "November 5, 2024",
      readTime: "12 min read",
      category: "Machine Learning",
      tags: ["ML", "DevOps", "Engineering", "MLOps"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=600&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Getting an ML model to work in a Jupyter notebook is one thing. Getting it to production and keeping it there is an entirely different challenge. After building production ML systems for Fortune 500 companies, here's what actually works."
        },
        {
          type: "heading",
          text: "The Production ML Gap"
        },
        {
          type: "paragraph",
          text: "87% of machine learning projects never make it to production. Why? Because teams focus on model accuracy and ignore everything else: data pipelines, model serving, monitoring, retraining, and failure handling."
        },
        {
          type: "paragraph",
          text: "The harsh truth: a 95% accurate model that's unreliable in production is worthless. A 90% accurate model that's stable, fast, and maintainable is invaluable."
        },
        {
          type: "heading",
          text: "Core Components of Production ML"
        },
        {
          type: "paragraph",
          text: "A production ML pipeline has six critical components:"
        },
        {
          type: "list",
          items: [
            "Data ingestion and validation",
            "Feature engineering and storage",
            "Model training and experimentation",
            "Model evaluation and validation",
            "Model deployment and serving",
            "Monitoring and retraining"
          ]
        },
        {
          type: "paragraph",
          text: "Miss any of these, and you're building a house of cards."
        },
        {
          type: "heading",
          text: "1. Data Pipeline: The Foundation"
        },
        {
          type: "paragraph",
          text: "Your ML model is only as good as your data pipeline. We use a strict validation approach:"
        },
        {
          type: "code",
          language: "python",
          code: `# Data validation example
import great_expectations as ge

def validate_input_data(df):
    # Schema validation
    assert df.schema == expected_schema
    
    # Data quality checks
    expect(df.column('user_id').to_not_be_null())
    expect(df.column('timestamp').to_be_between(
        min_value=yesterday, 
        max_value=now
    ))
    
    # Statistical validation
    expect(df.column('purchase_amount').mean()).to_be_between(
        min_value=historical_mean * 0.8,
        max_value=historical_mean * 1.2
    )
    
    return validated_df`
        },
        {
          type: "paragraph",
          text: "Every piece of data gets validated before it touches your model. No exceptions."
        },
        {
          type: "heading",
          text: "2. Feature Store: Don't Rebuild Features"
        },
        {
          type: "paragraph",
          text: "Feature stores solve a critical problem: training-serving skew. Your training features must match your serving features exactly, or your model will fail silently in production."
        },
        {
          type: "paragraph",
          text: "We use Feast or Tecton to maintain a centralized feature store:"
        },
        {
          type: "list",
          items: [
            "Features computed once, used everywhere",
            "Point-in-time correct feature values for training",
            "Low-latency feature serving in production",
            "Feature versioning and lineage tracking"
          ]
        },
        {
          type: "heading",
          text: "3. Model Training: Reproducibility is King"
        },
        {
          type: "paragraph",
          text: "Every model training run must be 100% reproducible. We track everything with MLflow:"
        },
        {
          type: "code",
          language: "python",
          code: `import mlflow

with mlflow.start_run():
    # Log parameters
    mlflow.log_params({
        'learning_rate': 0.01,
        'batch_size': 32,
        'optimizer': 'adam'
    })
    
    # Train model
    model = train_model(params)
    
    # Log metrics
    mlflow.log_metrics({
        'train_accuracy': train_acc,
        'val_accuracy': val_acc,
        'inference_latency_p99': p99_latency
    })
    
    # Log model
    mlflow.sklearn.log_model(model, 'model')
    
    # Log artifacts
    mlflow.log_artifact('feature_importance.png')`
        },
        {
          type: "heading",
          text: "4. Model Validation: Beyond Accuracy"
        },
        {
          type: "paragraph",
          text: "Accuracy isn't enough. Before deploying, we validate:"
        },
        {
          type: "list",
          items: [
            "Performance metrics: accuracy, precision, recall, F1",
            "Fairness metrics: bias across demographic groups",
            "Business metrics: ROI, revenue impact",
            "Operational metrics: latency, throughput, resource usage",
            "Robustness: performance on edge cases and adversarial inputs"
          ]
        },
        {
          type: "heading",
          text: "5. Model Serving: Fast and Reliable"
        },
        {
          type: "paragraph",
          text: "We deploy models with multiple serving patterns based on requirements:"
        },
        {
          type: "paragraph",
          text: "Real-time serving (REST API): For low-latency predictions (<100ms). We use FastAPI with model caching and batch prediction optimization."
        },
        {
          type: "paragraph",
          text: "Batch serving (Spark): For high-throughput offline scoring. Process millions of predictions efficiently."
        },
        {
          type: "paragraph",
          text: "Streaming serving (Kafka): For real-time event-driven predictions. Essential for fraud detection and recommendation systems."
        },
        {
          type: "heading",
          text: "6. Monitoring: Catch Issues Before Users Do"
        },
        {
          type: "paragraph",
          text: "Models degrade over time. Your monitoring must catch this immediately:"
        },
        {
          type: "list",
          items: [
            "Data drift: input distribution changes",
            "Concept drift: relationship between features and target changes",
            "Prediction drift: output distribution changes",
            "Performance metrics: accuracy, latency, error rates",
            "Business metrics: conversion, revenue, user satisfaction"
          ]
        },
        {
          type: "paragraph",
          text: "Set up alerts for any anomalies and automate model retraining when drift is detected."
        },
        {
          type: "heading",
          text: "Key Takeaways"
        },
        {
          type: "paragraph",
          text: "Production ML is software engineering first, data science second. Focus on:"
        },
        {
          type: "list",
          items: [
            "Reliability over accuracy",
            "Automation over manual processes",
            "Monitoring over hoping",
            "Simplicity over complexity",
            "Business value over technical perfection"
          ]
        },
        {
          type: "paragraph",
          text: "Build systems that work in the real world, not just in notebooks."
        }
      ]
    },
    "rag-vs-finetuning": {
      title: "RAG vs Fine-tuning: Choosing the Right Approach for Your LLM",
      excerpt: "Understanding the trade-offs between Retrieval-Augmented Generation and fine-tuning for large language model applications.",
      author: "Mihai Badea",
      date: "October 20, 2024",
      readTime: "15 min read",
      category: "LLMs",
      tags: ["LLM", "RAG", "Fine-tuning", "AI"],
      image: "https://images.unsplash.com/photo-1655721530774-c3b96fdb8d3d?w=1200&h=600&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Every company building LLM applications faces this question: should we use RAG or fine-tune our model? After implementing both approaches for dozens of clients, here's the truth: it's not either-or. Let me explain."
        },
        {
          type: "heading",
          text: "What is RAG?"
        },
        {
          type: "paragraph",
          text: "Retrieval-Augmented Generation (RAG) combines your base LLM with a retrieval system. When a user asks a question, you:"
        },
        {
          type: "list",
          items: [
            "Search your knowledge base for relevant documents",
            "Retrieve the top-k most relevant chunks",
            "Pass those chunks as context to the LLM",
            "Generate a response based on the retrieved context"
          ]
        },
        {
          type: "paragraph",
          text: "Think of it as giving the LLM a targeted open-book exam instead of relying on its memorized knowledge."
        },
        {
          type: "heading",
          text: "What is Fine-tuning?"
        },
        {
          type: "paragraph",
          text: "Fine-tuning means continuing to train a pre-trained model on your specific data. You're teaching the model new behaviors, knowledge, or output formats."
        },
        {
          type: "paragraph",
          text: "It's like sending the LLM to specialized training school focused on your domain."
        },
        {
          type: "heading",
          text: "When to Use RAG"
        },
        {
          type: "paragraph",
          text: "Use RAG when:"
        },
        {
          type: "list",
          items: [
            "Your knowledge changes frequently (documentation, policies, product info)",
            "You need explainability and source citations",
            "You have limited ML engineering resources",
            "You need to update information without retraining",
            "Data privacy requires keeping information external to the model"
          ]
        },
        {
          type: "paragraph",
          text: "Example: A customer support chatbot for a SaaS product. Product features change weekly – you can't retrain constantly. RAG lets you update your knowledge base and get immediate results."
        },
        {
          type: "heading",
          text: "When to Use Fine-tuning"
        },
        {
          type: "paragraph",
          text: "Use fine-tuning when:"
        },
        {
          type: "list",
          items: [
            "You need consistent output format or style",
            "You're teaching domain-specific reasoning",
            "You want to compress knowledge into the model",
            "You need extremely low latency (no retrieval overhead)",
            "You have stable, specialized knowledge"
          ]
        },
        {
          type: "paragraph",
          text: "Example: A medical diagnosis assistant. The medical knowledge is stable, reasoning patterns are consistent, and you want the model to think like a doctor – that's fine-tuning territory."
        },
        {
          type: "heading",
          text: "The Hybrid Approach (What We Actually Use)"
        },
        {
          type: "paragraph",
          text: "Here's what most production systems actually do: both."
        },
        {
          type: "list",
          items: [
            "Fine-tune for: output format, domain language, reasoning patterns, and stable core knowledge",
            "Use RAG for: current information, specific facts, dynamic data, and source attribution"
          ]
        },
        {
          type: "paragraph",
          text: "Real example: We built a legal research assistant that uses a fine-tuned model to understand legal reasoning and output format, combined with RAG to retrieve relevant case law and statutes. Best of both worlds."
        },
        {
          type: "heading",
          text: "Cost Comparison"
        },
        {
          type: "paragraph",
          text: "RAG costs: embedding storage + vector search + base model inference. Typical: $0.01-0.05 per query."
        },
        {
          type: "paragraph",
          text: "Fine-tuning costs: one-time training ($100-10,000) + ongoing inference (same as base model). Better economics at scale."
        },
        {
          type: "heading",
          text: "Performance Considerations"
        },
        {
          type: "paragraph",
          text: "RAG latency: retrieval (20-100ms) + generation (500-2000ms) = 520-2100ms total."
        },
        {
          type: "paragraph",
          text: "Fine-tuned model latency: generation only (500-2000ms)."
        },
        {
          type: "paragraph",
          text: "If sub-second latency is critical, fine-tuning has the advantage."
        },
        {
          type: "heading",
          text: "Our Recommendation Framework"
        },
        {
          type: "paragraph",
          text: "Start with RAG if:"
        },
        {
          type: "list",
          items: [
            "This is your first LLM project",
            "Your knowledge base changes frequently",
            "You need to ship quickly",
            "You have limited ML resources"
          ]
        },
        {
          type: "paragraph",
          text: "Add fine-tuning when:"
        },
        {
          type: "list",
          items: [
            "RAG isn't delivering the output quality you need",
            "You've identified clear patterns to teach the model",
            "You have the resources to iterate on training",
            "You need better latency or lower per-query costs"
          ]
        },
        {
          type: "paragraph",
          text: "The best systems evolve. Start simple with RAG, measure everything, and add fine-tuning strategically where it delivers clear value."
        }
      ]
    }
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {block.text}
            </p>
          );
        case 'heading':
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary">
              {block.text}
            </h2>
          );
        case 'list':
          return (
            <ul key={index} className="space-y-3 mb-6 ml-6">
              {block.items.map((item: string, idx: number) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        case 'quote':
          return (
            <Card key={index} className="bg-primary/5 border-primary/20 p-6 my-8 border-l-4 border-l-primary">
              <p className="text-lg italic text-foreground mb-2">"{block.text}"</p>
              {block.author && (
                <p className="text-sm text-muted-foreground">— {block.author}</p>
              )}
            </Card>
          );
        case 'code':
          return (
            <Card key={index} className="bg-card border-border p-6 my-6 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-primary">{block.code}</code>
              </pre>
            </Card>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground">Share:</span>
            <Button variant="outline" size="sm" className="gap-2">
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Copy Link
            </Button>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-12 pt-12 border-t border-border">
            <Tag className="w-5 h-5 text-primary" />
            {post.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.author === "Mihai Badea" 
                    ? "Co-founder and CTO at AI Flow. Over 10 years of experience building AI/ML systems for Fortune 500 companies. Passionate about making AI practical and profitable."
                    : "Co-founder and CEO at AI Flow. Deep expertise in AI strategy and implementation. Focused on delivering business value through intelligent automation."}
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Twitter className="w-4 h-4" />
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with AI Implementation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build production-ready AI systems that deliver real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </Card>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;

