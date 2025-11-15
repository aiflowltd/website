import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Globe } from "lucide-react";
import { Author } from "@/data/authors";

interface AuthorCardProps {
  author: Author;
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <Card className="bg-card border-border p-6">
      <div className="flex items-start gap-4">
        <img
          src={author.image}
          alt={author.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{author.name}</h3>
          <p className="text-primary text-sm mb-3">{author.role}</p>
          <p className="text-muted-foreground text-sm mb-4">{author.bio}</p>
          <div className="flex gap-2">
            {author.linkedin && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(author.linkedin, "_blank")}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            )}
            {author.website && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(author.website, "_blank")}
              >
                <Globe className="w-4 h-4" />
                Website
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

