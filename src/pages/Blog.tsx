import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/Tag";
import { SiteButton } from "@/components/SiteButton";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import {
  categories,
  getBlogPostsByCategory,
  getAllBlogPosts,
} from "@/data/blogPosts";

const Blog = () => {
  useEffect(() => {
    document.title = "AI Flow | Blog";
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = getBlogPostsByCategory(selectedCategory);

  // Only show categories that have at least one post
  const activeCategories = useMemo(() => {
    const allPosts = getAllBlogPosts();
    const categoriesWithPosts = new Set(allPosts.map((post) => post.category));
    return categories.filter(
      (category) => category === "All" || categoriesWithPosts.has(category)
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold font-alternates mb-6 pb-5">
            Blog & Insights
          </h1>
          <p className="text-xl text-grey max-w-3xl mx-auto">
            Deep dives into AI, machine learning, and the future of technology.
            Learn from our experience building AI products in the real world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {filteredPosts.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-grey">
                No posts found in this category. Try selecting a different
                filter.
              </p>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.id}`}>
                <Card className="bg-card border-border hover:border-white/20 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden h-full">
                  <div className="h-48 relative overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: "40% 35%" }}
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-grey mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-grey mb-4">
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
                        <Tag key={idx}>{tag}</Tag>
                      ))}
                    </div>

                    {/* <span className="text-primary hover:text-primary/80 font-semibold flex items-center">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span> */}
                  </div>
                </Card>
              </Link>
            ))
          )}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-card via-card to-muted/50 rounded-2xl p-12 text-center max-w-6xl mx-auto border border-border">
          <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-4">
            Stay updated with AI insights
          </h2>
          <p className="text-lg text-grey mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest articles, tutorials, and
            AI industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <SiteButton type="button" variant="primary">
              Subscribe
            </SiteButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
