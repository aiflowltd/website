import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tag } from "@/components/Tag";
import { SiteButton } from "@/components/SiteButton";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import {
  categories,
  getBlogPostsByCategory,
  getAllBlogPosts,
  type BlogPost,
} from "@/data/blogPosts";
import { LineGridCta } from "@/components/LineGridCta";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import {
  colPad3,
  editorialHrClass,
  editorialLine,
} from "@/lib/lineGrid";

function chunkPosts<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

function BlogPagePostInner({ post }: { post: BlogPost }) {
  return (
    <>
      {post.image ? (
        <div className="w-full shrink-0 md:pt-12 md:pb-6 max-md:pb-4">
          <div className="h-[120px] w-full shrink-0 overflow-hidden bg-muted/30 md:h-[120px]">
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 scale-110 group-hover:scale-105"
            />
          </div>
        </div>
      ) : (
        <div className="w-full shrink-0 md:pt-12 md:pb-6 max-md:pb-4">
          <div className="h-[120px] w-full bg-muted/30 md:h-[120px]" />
        </div>
      )}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-2 md:pb-12">
        <h3 className="line-clamp-2 font-semibold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm font-light leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {post.readTime}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.slice(0, 4).map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </div>
      </div>
    </>
  );
}

const Blog = () => {
  useEffect(() => {
    document.title = "AI Flow | Blog";
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = getBlogPostsByCategory(selectedCategory);

  const activeCategories = useMemo(() => {
    const allPosts = getAllBlogPosts();
    const categoriesWithPosts = new Set(allPosts.map((post) => post.category));
    return categories.filter(
      (category) => category === "All" || categoriesWithPosts.has(category),
    );
  }, []);

  const rows = useMemo(() => chunkPosts(filteredPosts, 3), [filteredPosts]);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero" className="!pb-12">
          <SectionHeader
            variant="centered"
            title="Blog & Insights"
            subtitle="Deep dives into AI, machine learning, and the future of technology. Learn from our experience building AI products in the real world."
            titleClassName="text-5xl md:text-7xl font-bold font-alternates text-foreground"
            subtitleClassName="max-w-3xl text-lg text-muted-foreground mx-auto leading-relaxed"
          />
        </Section>

        <Section padding="compact" className="!pt-0">
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            {activeCategories.map((category) => (
              <SiteButton
                key={category}
                type="button"
                variant={selectedCategory === category ? "primary" : "secondary"}
                arrow={false}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "" : "bg-transparent"}
              >
                {category}
              </SiteButton>
            ))}
          </div>
        </Section>

        <Section padding="compact" className="!pt-0">
          <hr className={editorialHrClass} />

          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No posts found in this category. Try selecting a different
                filter.
              </p>
            </div>
          ) : (
            <>
              {/* Mobile: same line treatment as BlogSection / ServicesSection */}
              <div className="grid grid-cols-1 gap-0 md:hidden">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className={cn(
                      editorialLine,
                      index < filteredPosts.length - 1 && "border-b",
                      "block py-10 transition-opacity duration-200 hover:opacity-75 max-md:px-4",
                    )}
                  >
                    <BlogPagePostInner post={post} />
                  </Link>
                ))}
              </div>

              {/* Desktop: 3-column rows, gap-0 + vertical rules like BlogSection */}
              <div className="hidden md:flex md:flex-col md:divide-y md:divide-[#E2E6F0]">
                {rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex min-h-[260px] w-full gap-0"
                  >
                    {row.map((post, cardIndex) => (
                      <div
                        key={post.id}
                        className="min-h-[260px] min-w-0 flex-1 basis-0"
                      >
                        <Link
                          to={`/blog/${post.id}`}
                          className={cn(
                            "group flex h-full min-h-[260px] flex-col",
                            editorialLine,
                            cardIndex > 0 && "border-l",
                            row.length === 1
                              ? "md:px-10"
                              : colPad3[cardIndex as 0 | 1 | 2],
                            "transition-opacity duration-200 hover:opacity-75",
                          )}
                        >
                          <BlogPagePostInner post={post} />
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}

          <hr className={editorialHrClass} />
        </Section>

        <Section padding="compact">
          <LineGridCta>
            <h2 className="mb-4 font-alternates text-3xl font-bold text-foreground md:text-4xl">
              Stay updated with AI insights
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              Subscribe to our newsletter for the latest articles, tutorials,
              and AI industry insights delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <SiteButton type="button" variant="primary">
                Subscribe
              </SiteButton>
            </div>
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
