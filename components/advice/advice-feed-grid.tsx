"use client";

import type { AdviceFeedItem, AdviceFeedMetadata } from "lib/advice-types";
import { useState } from "react";
import { AdviceCard, type AdviceCardProps } from "./advice-card";

function splitIntoColumns(items: AdviceCardProps[]) {
  const columns: AdviceCardProps[][] = [[], [], []];

  items.forEach((item, index) => {
    columns[index % 3]!.push(item);
  });

  return columns;
}

function toCardProps(item: AdviceFeedItem): AdviceCardProps {
  return {
    title: item.title,
    href: item.path,
    image: item.image,
    srcSet: item.srcSet,
    width: item.width,
    height: item.height,
  };
}

export function AdviceFeedGrid({
  initialFeed,
  initialMetadata,
}: {
  initialFeed: AdviceFeedItem[];
  initialMetadata: AdviceFeedMetadata;
}) {
  const [items, setItems] = useState(initialFeed);
  const [metadata, setMetadata] = useState(initialMetadata);
  const [loading, setLoading] = useState(false);

  const columns = splitIntoColumns(items.map(toCardProps));
  const hasMore = metadata.hasNextPage;

  async function loadMore() {
    if (!metadata.endCursor || loading) return;

    setLoading(true);
    try {
      const params = new URLSearchParams({ cursor: metadata.endCursor });
      const res = await fetch(`/api/advice?${params}`);
      if (!res.ok) return;

      const data = (await res.json()) as {
        adviceFeed: AdviceFeedItem[];
        adviceFeedMetadata: AdviceFeedMetadata;
      };

      setItems((prev) => {
        const seen = new Set(prev.map((item) => item.id));
        const next = data.adviceFeed.filter((item) => !seen.has(item.id));
        return [...prev, ...next];
      });
      setMetadata(data.adviceFeedMetadata);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        aria-label="advice-view"
        className="flex w-full md:mt-14 desktop:mt-14"
      >
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex-1 pl-0"
            style={{ flex: "1 1 0%", paddingLeft: 0 }}
          >
            {column.map((item) => (
              <AdviceCard key={item.href} {...item} />
            ))}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={loadMore}
        disabled={!hasMore || loading}
        className={`w-full cursor-pointer text-center text-sm font-bold uppercase hover:underline disabled:cursor-not-allowed disabled:invisible disabled:hidden ${
          hasMore ? "" : "invisible"
        }`}
      >
        {loading ? "Loading…" : "Load More"}
      </button>
    </>
  );
}
