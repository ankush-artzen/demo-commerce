export type AdviceItem = {
  id: string;
  title: string;
  path: string;
  image: string;
  srcSet?: string;
  width: number;
  height: number;
  aspectRatio: number;
};

export type ParsedAdviceData = {
  items: AdviceItem[];
  totalCount: number;
};

type RefObject = Record<string, number>;

function parseResponsiveImage(
  responsive: RefObject,
  resolve: (index: number) => unknown,
) {
  const values = Object.values(responsive)
    .map((index) => resolve(index))
    .filter((value) => value !== -5 && value !== undefined);

  const src = values.find(
    (value): value is string =>
      typeof value === "string" &&
      value.includes("datocms-assets.com") &&
      value.includes("auto=format"),
  );

  if (!src) return null;

  const srcSet = values.find(
    (value): value is string =>
      typeof value === "string" && value.includes(" 200w,"),
  );

  const numbers = values.filter(
    (value): value is number => typeof value === "number",
  );
  const width = numbers.find((n) => n === 800) ?? 800;
  const nonWidthNumbers = numbers.filter((n) => n !== 800);
  const aspectRatio = nonWidthNumbers.find((n) => n > 0 && n <= 3) ?? 1;
  const height =
    nonWidthNumbers.find((n) => n > 100) ?? Math.round(width / aspectRatio);

  return { src, srcSet, width, height, aspectRatio };
}

/** Remix / React Router flat-array serialization */
export function parsePalaceAdviceData(raw: unknown): ParsedAdviceData {
  if (!Array.isArray(raw)) {
    return { items: [], totalCount: 0 };
  }

  const data = raw as unknown[];
  const resolve = (index: number): unknown => data[index];
  const resolveRef = (index: number | undefined): unknown =>
    index === undefined ? undefined : data[index];

  const feedKeyIndex = data.indexOf("adviceFeed");
  if (feedKeyIndex === -1) {
    return { items: [], totalCount: 0 };
  }

  const feedRefs = data[feedKeyIndex + 1];
  if (!Array.isArray(feedRefs)) {
    return { items: [], totalCount: 0 };
  }

  const countKeyIndex = data.indexOf("count");
  const totalCount =
    countKeyIndex !== -1 && typeof data[countKeyIndex + 1] === "number"
      ? (data[countKeyIndex + 1] as number)
      : feedRefs.length;

  const items = feedRefs.flatMap((ref): AdviceItem[] => {
    const record = resolve(ref as number);
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      return [];
    }

    const entry = record as RefObject;
    const title = resolveRef(entry._47);
    const path = resolveRef(entry._53);
    if (typeof title !== "string" || typeof path !== "string") {
      return [];
    }

    const imageRecord = resolveRef(entry._43);
    if (
      !imageRecord ||
      typeof imageRecord !== "object" ||
      Array.isArray(imageRecord)
    ) {
      return [];
    }

    const imageEntry = imageRecord as RefObject;
    const responsive = resolveRef(imageEntry._65);
    if (
      !responsive ||
      typeof responsive !== "object" ||
      Array.isArray(responsive)
    ) {
      return [];
    }

    const image = parseResponsiveImage(responsive as RefObject, resolve);
    if (!image) return [];

    return [
      {
        id: String(resolveRef(entry._41) ?? path),
        title,
        path,
        image: image.src,
        srcSet: image.srcSet,
        width: image.width,
        height: image.height,
        aspectRatio: image.aspectRatio,
      },
    ];
  });

  return { items, totalCount };
}
