import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Linkedin,
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getAuthor } from "@/data/team";
import { getBlogPostById } from "@/data/blogPosts";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  
  // Get blog post with all content from centralized data
  const post = id ? getBlogPostById(id) : null;

  useEffect(() => {
    if (post) {
      document.title = `AI Flow | ${post.title}`;
    } else {
      document.title = "AI Flow | Blog";
    }
  }, [post]);

  if (!post || !post.content) {
    return <Navigate to="/blog" replace />;
  }

  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p
              key={index}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h2
              key={index}
              className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary"
            >
              {block.text}
            </h2>
          );
        case "list":
          return (
            <ul key={index} className="space-y-3 mb-6 ml-6">
              {block.items.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className="text-muted-foreground flex items-start gap-3"
                >
                  <span className="text-primary mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <Card
              key={index}
              className="bg-primary/5 border-primary/20 p-6 my-8 border-l-4 border-l-primary"
            >
              <p className="text-lg italic text-foreground mb-2">
                "{block.text}"
              </p>
              {block.author && (
                <p className="text-sm text-muted-foreground">
                   -  {block.author}
                </p>
              )}
            </Card>
          );
        case "code":
          return (
            <Card
              key={index}
              className="bg-card border-border p-6 my-6 overflow-x-auto"
            >
              <pre className="text-sm">
                <code className="text-primary">{block.code}</code>
              </pre>
            </Card>
          );
        case "table":
          return (
            <Card
              key={index}
              className="bg-card border-border p-6 my-6 overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {block.headers.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        className="text-left p-3 font-bold text-primary"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="border-b border-border/50">
                      {row.map((cell: string, cellIdx: number) => (
                        <td key={cellIdx} className="p-3 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
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
          <Button
            variant="ghost"
            className="mb-8 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="max-w-6xl mx-auto">
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
              <span>{getAuthor(post.authorId).name}</span>
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
          <div className="mt-12">
            <AuthorCard author={getAuthor(post.authorId)} />
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with AI Implementation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you build production-ready AI
              systems that deliver real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-background font-semibold"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link to="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Read More Articles
                </Button>
              </Link>
            </div>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
