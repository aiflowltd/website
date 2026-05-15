import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function parseBold(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={`${keyPrefix}-b-${i}`}
          className="font-semibold text-foreground"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part || null;
  });
}

/** Parses `**bold**` and `[label](url)` in blog paragraph and list text. */
export function parseBlogInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let linkIndex = 0;
  const re = new RegExp(LINK_RE.source, "g");
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        ...parseBold(text.slice(lastIndex, match.index), `t-${linkIndex}`),
      );
    }
    nodes.push(
      <a
        key={`l-${linkIndex}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {match[1]}
      </a>,
    );
    linkIndex += 1;
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(...parseBold(text.slice(lastIndex), `t-end`));
  }

  return nodes.length > 0 ? nodes : text;
}
