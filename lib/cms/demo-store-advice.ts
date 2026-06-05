import type { AdviceArticleDetail } from "lib/advice-article";
import type { AdviceFeedItem, AdviceFeedResponse } from "lib/advice-types";
import {
  getAllArticles,
  getArticleBySlug,
  isDatoCmsConfigured,
  type DatoArticleRecord,
  type DatoResponsiveImage,
} from "lib/cms/datocms";
import { structuredTextToHtml } from "lib/cms/structured-text";

export { isDatoCmsConfigured };

function firstImage(
  record: DatoArticleRecord,
): DatoResponsiveImage | null {
  for (const item of record.images) {
    if (item.responsiveImage) return item.responsiveImage;
  }
  return null;
}

function recordToFeedItem(record: DatoArticleRecord): AdviceFeedItem | null {
  const image = firstImage(record);
  if (!image) return null;

  const width = image.width || 800;
  const height = image.height || 800;

  return {
    id: record.id,
    title: record.title,
    path: `/advice/${record.slug}`,
    slug: record.slug,
    image: image.src,
    srcSet: image.srcSet,
    width,
    height,
    aspectRatio: width / height,
    contentType: "advice",
    publishedAt: record.updatedAt ?? undefined,
  };
}

function sortByNewest(
  records: DatoArticleRecord[],
): DatoArticleRecord[] {
  return [...records].sort((a, b) => {
    const aTime = a.updatedAt ? Date.parse(a.updatedAt) : 0;
    const bTime = b.updatedAt ? Date.parse(b.updatedAt) : 0;
    return bTime - aTime;
  });
}

export async function fetchDatoAdviceFeed(): Promise<AdviceFeedResponse> {
  const records = sortByNewest(await getAllArticles());
  const adviceFeed = records.flatMap((record) => {
    const item = recordToFeedItem(record);
    return item ? [item] : [];
  });

  return {
    adviceFeed,
    adviceFeedMetadata: {
      count: adviceFeed.length,
      totalCount: adviceFeed.length,
      hasNextPage: false,
      endCursor: null,
    },
  };
}

export async function fetchDatoAdviceBySlug(
  slug: string,
): Promise<AdviceFeedItem | undefined> {
  const record = await getArticleBySlug(slug);
  if (!record) return undefined;
  return recordToFeedItem(record) ?? undefined;
}

export async function fetchDatoAdviceDetail(
  slug: string,
): Promise<AdviceArticleDetail | null> {
  const record = await getArticleBySlug(slug);
  if (!record) return null;

  const hero = firstImage(record);
  const contentHtml = structuredTextToHtml(
    record.textDescriptionField?.value,
  );
  const info = record.info?.trim() || undefined;

  const galleryImages = record.images.flatMap((item) => {
    const image = item.responsiveImage;
    if (!image) return [];
    return [
      {
        url: image.src,
        srcSet: image.srcSet,
        width: image.width,
        height: image.height,
      },
    ];
  });

  return {
    title: record.title,
    image: hero
      ? { url: hero.src, altText: record.title }
      : undefined,
    info,
    contentHtml,
    youtubeVideoId: record.youtubeVideoId,
    galleryImages,
  };
}
