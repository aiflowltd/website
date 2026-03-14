import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/Tag";
import { SiteButton } from "@/components/SiteButton";

const CYCLE_INTERVAL_MS = 3500;
const UNPAUSE_DELAY_MS = 800;

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

export const BlogSection = () => {
  const posts = blogPosts.slice(0, 8);
  const groups = useMemo(() => buildGroups(posts, 3), [posts]);
  const numGroups = groups.length;

  const [state, setState] = useState({ groupIndex: 0, focusIndex: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const unpauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { groupIndex, focusIndex } = state;

  // Cycle: first focus 0→1→2 within group, then next group and focus 0
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
    <section
      className="relative py-24 px-6 overflow-hidden"
      onMouseLeave={handleSectionLeave}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-alternates mb-2">
              Latest thinking...
            </h2>
            <p className="text-muted-foreground">
              Notes from the field, grounded in production work.
            </p>
          </div>
          <Link to="/blog">
            <SiteButton variant="secondary">Explore our blog</SiteButton>
          </Link>
        </div>

        {/* Mobile: vertical stack, equal-sized cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block w-full">
              <Card className="bg-card overflow-hidden h-[260px] flex flex-col shrink-0 rounded-[25px] border border-dashed border-border">
                {post.image && (
                  <div className="flex shrink-0 p-4 pb-2">
                    <div className="w-full h-[120px] overflow-hidden rounded-[17px] shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                  </div>
                )}
                <div className="p-4 min-w-0 flex-1 min-h-0 flex flex-col justify-center gap-1">
                  <h3 className="font-semibold text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <Tag>{post.category}</Tag>
                    <span>
                      {post.category} · {post.readTime}
                    </span>
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Desktop: horizontal carousel with focus */}
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
                className="flex shrink-0 gap-4 min-w-0"
                style={{ width: `${100 / numGroups}%` }}
              >
                {group.map((post, cardIndex) => {
                  const isFocused = focusIndex === cardIndex;
                  const flexBasis = isFocused
                    ? "calc((100% - 2rem) / 2)"
                    : "calc((100% - 2rem) / 4)";
                  return (
                    <div
                      key={`${post.id}-${g}-${cardIndex}`}
                      className="shrink-0 min-w-0 transition-[flex-basis] duration-300 ease-out h-full"
                      style={{ flex: `0 0 ${flexBasis}` }}
                      onMouseEnter={() => handleCardEnter(cardIndex)}
                    >
                      <Link to={`/blog/${post.id}`} className="block h-full">
                        <Card
                          className={`
                            bg-card overflow-hidden h-[260px] flex flex-col shrink-0 rounded-[25px]
                            transition-all duration-300 ease-out
                            ${isFocused ? "border-2 border-border z-10 shadow-lg" : "border border-dashed border-border"}
                          `}
                        >
                          {post.image && (
                            <div className="flex shrink-0 p-4 pb-2">
                              <div className="w-full h-[120px] overflow-hidden rounded-[17px] shrink-0">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className={`
                                  w-full h-full object-cover transition-transform duration-300
                                  ${isFocused ? "scale-100" : "scale-110"}
                                `}
                                />
                              </div>
                            </div>
                          )}
                          <div className="p-4 min-w-0 flex-1 min-h-0 flex flex-col justify-center gap-1">
                            <h3 className="font-semibold text-foreground line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-xs text-muted-foreground flex items-center gap-2">
                              <Tag>{post.category}</Tag>
                              <span>
                                {post.category} · {post.readTime}
                              </span>
                            </p>
                          </div>
                        </Card>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
