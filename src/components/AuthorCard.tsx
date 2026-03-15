import { Card } from "@/components/ui/card";
import { SiteButton } from "@/components/SiteButton";
import { Linkedin, Globe } from "lucide-react";
import { Author } from "@/data/team";

interface AuthorCardProps {
  author: Author;
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <Card className="bg-card border-border p-6">
      <div className="flex items-start gap-4">
        <img
          src={author.photo}
          alt={author.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{author.name}</h3>
          <p className="text-grey text-sm mb-3">{author.role}</p>
          <p className="text-grey text-sm mb-4">{author.bio}</p>
          <div className="flex gap-2">
            {author.linkedin && (
              <SiteButton
                type="button"
                variant="secondary"
                arrow={false}
                className="gap-2"
                onClick={() => window.open(author.linkedin, "_blank")}
              >
                <Linkedin className="w-4 h-4" />
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
                <Globe className="w-4 h-4" />
                Website
              </SiteButton>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
