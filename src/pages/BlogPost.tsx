import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { SiteButton } from "@/components/SiteButton";
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
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getAuthor } from "@/data/team";
import { getBlogPostById } from "@/data/blogPosts";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
            <p key={index} className="text-lg leading-loose mb-10">
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h2
              key={index}
              className="text-3xl md:text-4xl font-bold font-alternates mb-8 mt-16 text-foreground"
            >
              {block.text}
            </h2>
          );
        case "list":
          return (
            <ul
              key={index}
              className="space-y-5 mb-10 ml-8 list-disc marker:text-grey marker:text-xl"
            >
              {block.items.map((item: string, idx: number) => (
                <li key={idx} className="text-lg pl-2">
                  {item}
                </li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <Card
              key={index}
              className="bg-muted border-border p-6 my-8 border-l-4 border-l-grey"
            >
              <p className="text-lg italic text-foreground mb-2">
                "{block.text}"
              </p>
              {block.author && (
                <p className="text-sm text-grey">
                  - {block.author}
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
                <code className="text-foreground">{block.code}</code>
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
                        className="text-left p-3 font-bold text-foreground"
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
                        <td key={cellIdx} className="p-3 text-grey">
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
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 mb-8 text-grey hover:text-foreground transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to blog</span>
          </button>

          {/* Article */}
          <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-grey mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-grey mb-8 pb-8 border-border">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-grey" />
              <span>{getAuthor(post.authorId).name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-grey" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-grey" />
              <span>{post.readTime}</span>
            </div>
          </div>
          {/* Share Buttons */}
          {/* <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground">Share:</span>
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Copy Link
            </Button>
          </div> */}
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

          {/* Author Card */}
          <div className="mt-12">
            <AuthorCard author={getAuthor(post.authorId)} />
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-card via-card to-muted/50 border border-border p-12 text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-4">
              Need help with AI implementation?
            </h2>
            <p className="text-lg text-grey mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you build production-ready AI
              systems that deliver real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <SiteButton variant="primary" arrow="up-right">
                  Get in touch
                </SiteButton>
              </Link>
              <Link to="/blog">
                <SiteButton variant="secondary">Read more articles</SiteButton>
              </Link>
            </div>
          </Card>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
