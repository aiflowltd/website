import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";
import { Tag } from "@/components/Tag";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const CYCLE_INTERVAL_MS = 3500;
const UNPAUSE_DELAY_MS = 800;

const LINE = "border-[#E2E6F0]";
/** Matches ServicesSection horizontal rhythm for a 3-column row. */
const colPad3 = ["md:pr-10", "md:px-10", "md:pl-10"] as const;

function buildGroups(posts: BlogPost[], groupSize: number): BlogPost[][] {
  const groups: BlogPost[][] = [];
  for (let i = 0; i < posts.length; i += groupSize) {
    const chunk = posts.slice(i, i + groupSize);
    while (chunk.length < groupSize) {
      chunk.push(posts[chunk.length % posts.length]);
    }
    groups.push(chunk);
  }
  return groups;
}

function BlogPostInner({
  post,
  imageClassName,
}: {
  post: BlogPost;
  imageClassName?: string;
}) {
  return (
    <>
      {post.image && (
        <div className="w-full shrink-0 md:pt-12 md:pb-6 max-md:pb-4">
          <div className="w-full h-[120px] overflow-hidden shrink-0 bg-muted/30">
            <img
              src={post.image}
              alt={post.title}
              className={cn(
                "w-full h-full object-cover transition-transform duration-300",
                imageClassName,
              )}
            />
          </div>
        </div>
      )}
      <div className="min-w-0 flex-1 flex flex-col justify-center gap-1 md:pb-12">
        <h3 className="font-semibold text-[#0E1015] line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-xs text-[#555A66] flex flex-wrap items-center gap-2">
          <Tag>{post.category}</Tag>
          <span>
            {post.category} · {post.readTime}
          </span>
        </p>
      </div>
    </>
  );
}

export const BlogSection = () => {
  const posts = blogPosts.slice(0, 8);
  const groups = useMemo(() => buildGroups(posts, 3), [posts]);
  const numGroups = groups.length;

  const [state, setState] = useState({ groupIndex: 0, focusIndex: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const unpauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { groupIndex, focusIndex } = state;

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setState((s) => {
        const size = 3;
        if (s.focusIndex < size - 1) {
          return { ...s, focusIndex: s.focusIndex + 1 };
        }
        return {
          groupIndex: (s.groupIndex + 1) % numGroups,
          focusIndex: 0,
        };
      });
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, numGroups]);

  const handleCardEnter = (cardIndex: number) => {
    if (unpauseTimeoutRef.current) {
      clearTimeout(unpauseTimeoutRef.current);
      unpauseTimeoutRef.current = null;
    }
    setIsPaused(true);
    setState((s) => ({ ...s, focusIndex: cardIndex }));
  };

  const handleSectionLeave = () => {
    unpauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      unpauseTimeoutRef.current = null;
    }, UNPAUSE_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (unpauseTimeoutRef.current) clearTimeout(unpauseTimeoutRef.current);
    };
  }, []);

  return (
    <Section overflowHidden onMouseLeave={handleSectionLeave}>
      <SectionHeader
        title="Latest thinking..."
        subtitle="Notes from the field, grounded in production work."
        action={
          <Link to="/blog">
            <SiteButton variant="secondary">Explore our blog</SiteButton>
          </Link>
        }
        className="mb-12"
      />

      <hr className="border-t border-[#E2E6F0]" />

      {/* Mobile: single column, same line treatment as ServicesSection */}
      <div className="grid grid-cols-1 gap-0 md:hidden">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className={cn(
              LINE,
              index < posts.length - 1 && "border-b",
              "block py-10 max-md:px-4 transition-opacity duration-200 hover:opacity-75",
            )}
          >
            <BlogPostInner post={post} imageClassName="scale-110" />
          </Link>
        ))}
      </div>

      {/* Desktop: carousel of 3-column rows, gap-0 + vertical rules like Services */}
      <div className="hidden md:block overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${numGroups * 100}%`,
            transform: `translateX(-${groupIndex * (100 / numGroups)}%)`,
          }}
        >
          {groups.map((group, g) => (
            <div
              key={g}
              className="flex shrink-0 gap-0 min-w-0 min-h-[280px]"
              style={{ width: `${100 / numGroups}%` }}
            >
              {group.map((post, cardIndex) => {
                const isFocused = focusIndex === cardIndex;
                const widthPct = isFocused ? 50 : 25;
                return (
                  <div
                    key={`${post.id}-${g}-${cardIndex}`}
                    className="shrink-0 min-w-0 h-full transition-[flex] duration-300 ease-out"
                    style={{ flex: `0 0 ${widthPct}%` }}
                    onMouseEnter={() => handleCardEnter(cardIndex)}
                  >
                    <Link
                      to={`/blog/${post.id}`}
                      className={cn(
                        "group flex flex-col h-full min-h-[260px]",
                        LINE,
                        cardIndex > 0 && "border-l",
                        colPad3[cardIndex],
                        "transition-opacity duration-300",
                        isFocused
                          ? "opacity-100"
                          : "opacity-[0.65] hover:opacity-100",
                      )}
                    >
                      <BlogPostInner
                        post={post}
                        imageClassName={isFocused ? "scale-100" : "scale-110"}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-[#E2E6F0]" />
    </Section>
  );
};
