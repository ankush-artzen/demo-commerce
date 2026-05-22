export type AdviceFeedItem = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

export const adviceFeed: AdviceFeedItem[] = [
  {
    id: 1,
    title: "PALACE SHANGHAI",
    image: "/images/advice-1.avif",
    slug: "palace-shanghai",
  },
  {
    id: 2,
    title: "PALACE UGG",
    image: "/images/advice-2.avif",
    slug: "palace-ugg",
  },
  {
    id: 3,
    title: "PALACE NIKE",
    image: "/images/advice-3.avif",
    slug: "palace-nike",
  },
];

export function getAdviceFeed(origin: string): AdviceFeedItem[] {
  return adviceFeed.map((item) => ({
    ...item,
    image: item.image.startsWith("http")
      ? item.image
      : `${origin}${item.image}`,
  }));
}

export function getAdviceBySlug(
  slug: string,
  origin: string,
): AdviceFeedItem | undefined {
  return getAdviceFeed(origin).find((item) => item.slug === slug);
}
