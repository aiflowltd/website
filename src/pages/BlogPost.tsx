import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { SiteButton } from "@/components/SiteButton";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getAuthor } from "@/data/team";
import { getBlogPostById } from "@/data/blogPosts";
import { useEffect } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { LineGridCta } from "@/components/LineGridCta";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
              className="mb-10 text-lg leading-loose text-foreground"
            >
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h2
              key={index}
              className="mb-8 mt-16 font-alternates text-3xl font-bold text-foreground md:text-4xl"
            >
              {block.text}
            </h2>
          );
        case "list":
          return (
            <ul
              key={index}
              className="mb-10 ml-8 list-disc space-y-5 marker:text-xl marker:text-muted-foreground"
            >
              {block.items.map((item: string, idx: number) => (
                <li key={idx} className="pl-2 text-lg text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <Card
              key={index}
              className="my-8 border border-border border-l-4 border-l-border bg-muted p-6"
            >
              <p className="mb-2 text-lg italic text-foreground">
                &ldquo;{block.text}&rdquo;
              </p>
              {block.author && (
                <p className="text-sm text-muted-foreground">
                  - {block.author}
                </p>
              )}
            </Card>
          );
        case "code":
          return (
            <Card
              key={index}
              className="my-6 overflow-x-auto border border-border bg-card p-6"
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
              className="my-6 overflow-x-auto border border-border bg-card p-6 rounded-lg"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {block.headers.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        className="p-3 text-left font-bold text-foreground"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row: string[], rowIdx: number) => (
                    <tr
                      key={rowIdx}
                      className={
                        rowIdx < block.rows.length - 1
                          ? "border-b border-border/50"
                          : undefined
                      }
                    >
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
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero" className="!pb-12" maxWidth="default">
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="group mb-8 inline-flex cursor-pointer items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to blog</span>
          </button>

          <article>
            <h1 className="mb-6 font-alternates text-4xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mb-8 flex flex-wrap gap-6 border-b border-border pb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 shrink-0" />
                <span>{getAuthor(post.authorId).name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 shrink-0" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 shrink-0" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {post.image && (
              <div className="relative mb-12 h-96 overflow-hidden rounded-lg border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
          </article>
        </Section>

        <Section padding="default" maxWidth="default">
          <div className="prose prose-lg max-w-none text-foreground">
            {renderContent(post.content)}
          </div>
        </Section>

        <Section padding="default" maxWidth="default">
          <AuthorCard author={getAuthor(post.authorId)} />
        </Section>

        <Section padding="default">
          <LineGridCta showRules={false}>
            <SectionHeader
              title="Need help with AI implementation?"
              subtitle="Let's discuss how we can help you build production-ready AI systems that deliver real business value."
              variant="centered"
              titleClassName="mb-4 font-alternates text-3xl font-bold text-foreground md:text-4xl"
              subtitleClassName="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground"
              className="mb-0"
              action={
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact">
                    <SiteButton variant="primary" arrow="up-right">
                      Get in touch
                    </SiteButton>
                  </Link>
                  <Link to="/blog">
                    <SiteButton variant="secondary">
                      Read more articles
                    </SiteButton>
                  </Link>
                </div>
              }
            />
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
