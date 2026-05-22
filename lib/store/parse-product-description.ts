export function parseProductDescriptionLines(
  description: string,
  descriptionHtml: string,
): string[] {
  if (descriptionHtml) {
    const matches = descriptionHtml.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (matches?.length) {
      return matches.map((item) =>
        item
          .replace(/<\/?li[^>]*>/gi, "")
          .replace(/<[^>]+>/g, "")
          .trim(),
      );
    }
  }

  return description
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}
