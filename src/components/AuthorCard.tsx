import { SiteButton } from "@/components/SiteButton";
import { Linkedin, Globe } from "lucide-react";
import { Author } from "@/data/team";

interface AuthorCardProps {
  author: Author;
}

/** Matches Team leadership row + case-study panel framing (no floating Card chrome). */
export const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-background/80 p-6 md:p-8">
      <div className="flex flex-col gap-6 sm:flex-row">
        <img
          src={author.photo}
          alt={author.name}
          className="h-24 w-24 shrink-0 rounded-full border border-[#E2E6F0] object-cover"
        />
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 font-alternates text-xl font-bold text-foreground">
            {author.name}
          </h3>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {author.role}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {author.bio}
          </p>
          <div className="flex flex-wrap gap-2">
            {author.linkedin && (
              <SiteButton
                type="button"
                variant="secondary"
                arrow={false}
                className="gap-2"
                onClick={() => window.open(author.linkedin, "_blank")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </SiteButton>
            )}
            {author.website && (
              <SiteButton
                type="button"
                variant="secondary"
                arrow={false}
                className="gap-2"
                onClick={() => window.open(author.website, "_blank")}
              >
                <Globe className="h-4 w-4" />
                Website
              </SiteButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
