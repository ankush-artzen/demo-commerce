type DastNode = {
  type?: string;
  value?: string;
  url?: string;
  children?: DastNode[];
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(text: string): string {
  return escapeHtml(text).replace(/'/g, "&#39;");
}

const linkAttrs = 'target="_blank" rel="noopener"';

function isUrlOnlyLink(link: DastNode): boolean {
  if (link.type !== "link" || !link.url) return false;
  const label = inlineNodesToHtml(link.children).trim();
  return !label || label === link.url.trim();
}

/** DatoCMS often stores label text in a span and the URL again inside the link node. */
function paragraphToHtml(children: DastNode[] | undefined): string {
  if (!children?.length) return "";

  const last = children[children.length - 1];
  if (
    last?.type === "link" &&
    last.url &&
    isUrlOnlyLink(last) &&
    children.length > 1
  ) {
    const label = children
      .slice(0, -1)
      .map((node) => {
        if (node.type === "span" && typeof node.value === "string") {
          return node.value;
        }
        return inlineNodesToHtml([node]);
      })
      .join("");

    if (label.trim()) {
      return `<a href="${escapeAttr(last.url)}" ${linkAttrs}>${escapeHtml(label)}</a>`;
    }
  }

  return inlineNodesToHtml(children);
}

function inlineNodesToHtml(nodes: DastNode[] | undefined): string {
  if (!nodes) return "";

  let html = "";
  for (const node of nodes) {
    if (node.type === "span" && typeof node.value === "string") {
      html += escapeHtml(node.value);
      continue;
    }

    if (node.type === "link" && node.url) {
      const label = inlineNodesToHtml(node.children) || escapeHtml(node.url);
      html += `<a href="${escapeAttr(node.url)}" ${linkAttrs}>${label}</a>`;
      continue;
    }

    if (node.children) {
      html += inlineNodesToHtml(node.children);
    }
  }

  return html;
}

function walkDast(nodes: DastNode[] | undefined, parts: string[]) {
  if (!nodes) return;

  for (const node of nodes) {
    if (node.type === "paragraph") {
      const content = paragraphToHtml(node.children);
      if (content) parts.push(`<p>${content}</p>`);
      continue;
    }

    if (node.type === "heading") {
      const content = inlineNodesToHtml(node.children);
      if (content) parts.push(`<h2>${content}</h2>`);
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
