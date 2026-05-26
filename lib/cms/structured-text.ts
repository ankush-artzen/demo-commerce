type DastNode = {
  type?: string;
  value?: string;
  children?: DastNode[];
};

function walkDast(nodes: DastNode[] | undefined, parts: string[]) {
  if (!nodes) return;

  for (const node of nodes) {
    if (node.type === "span" && typeof node.value === "string") {
      parts.push(node.value);
      continue;
    }

    if (node.type === "paragraph") {
      const paragraph: string[] = [];
      walkDast(node.children, paragraph);
      if (paragraph.length) parts.push(`<p>${paragraph.join("")}</p>`);
      continue;
    }

    if (node.type === "heading") {
      const heading: string[] = [];
      walkDast(node.children, heading);
      if (heading.length) parts.push(`<h2>${heading.join("")}</h2>`);
      continue;
    }

    walkDast(node.children, parts);
  }
}

export function structuredTextToHtml(
  value: unknown,
): string | undefined {
  if (!value || typeof value !== "object") return undefined;

  const document = (value as { document?: DastNode }).document;
  if (!document?.children) return undefined;

  const parts: string[] = [];
  walkDast(document.children, parts);
  return parts.length ? parts.join("") : undefined;
}
