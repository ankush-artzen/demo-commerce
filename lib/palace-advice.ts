import {
  parsePalaceAdviceData,
  type AdviceItem,
} from "lib/parse-palace-advice-data";

const PALACE_ADVICE_DATA_URL = "https://palaceskateboards.com/advice.data";

export type AdviceFeedItem = AdviceItem & {
  slug: string;
};

export type PalaceAdviceFeedResponse = {
  adviceFeed: AdviceFeedItem[];
  adviceFeedMetadata: {
    count: number;
  };
};

function slugFromPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? path;
}

export async function fetchPalaceAdviceFeed(): Promise<PalaceAdviceFeedResponse> {
  const res = await fetch(PALACE_ADVICE_DATA_URL, {
    next: { revalidate: 300 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Palace advice fetch failed: ${res.status}`);
  }

  const raw: unknown = await res.json();
  const { items, totalCount } = parsePalaceAdviceData(raw);

  return {
    adviceFeed: items.map((item) => ({
      ...item,
      slug: slugFromPath(item.path),
    })),
    adviceFeedMetadata: { count: totalCount },
  };
}

export async function fetchPalaceAdviceBySlug(
  slug: string,
): Promise<AdviceFeedItem | undefined> {
  const { adviceFeed } = await fetchPalaceAdviceFeed();
  return adviceFeed.find((item) => item.slug === slug);
}
