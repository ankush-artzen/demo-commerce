"use client";

import ProductCard from "components/store/product-card";
import type { PageInfo, Product, ProductsPage } from "lib/shopify/types";
import type { CollectionFilters } from "lib/store/collection-filters";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function CollectionProductGrid({
  collection,
  initialProducts,
  initialPageInfo,
  filters,
  applyFilters,
}: {
  collection: string;
  initialProducts: Product[];
  initialPageInfo: PageInfo;
  filters?: CollectionFilters;
  applyFilters?: (products: Product[], filters: CollectionFilters) => Product[];
}) {
  const [products, setProducts] = useState(initialProducts);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const visibleProducts = useMemo(() => {
    if (!filters || !applyFilters) {
      return products;
    }
    return applyFilters(products, filters);
  }, [products, filters, applyFilters]);

  const loadMore = useCallback(async () => {
    if (!pageInfo.hasNextPage || !pageInfo.endCursor || loadingRef.current) {
      return;
    }

    loadingRef.current = true;
    setLoading(true);

    try {
      const params = new URLSearchParams({
        collection,
        cursor: pageInfo.endCursor,
      });
      const response = await fetch(`/api/collections/products?${params}`);

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as ProductsPage;

      setProducts((current) => {
        const seen = new Set(current.map((product) => product.id));
        const next = data.products.filter((product) => !seen.has(product.id));
        return [...current, ...next];
      });
      setPageInfo(data.pageInfo);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [collection, pageInfo.endCursor, pageInfo.hasNextPage]);

  useEffect(() => {
    const root = document.getElementById("mainContent");
    const sentinel = sentinelRef.current;

    if (!root || !sentinel || !pageInfo.hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { root, rootMargin: "400px 0px", threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [loadMore, pageInfo.hasNextPage]);

  return (
    <div className="relative">
      <div
        aria-label="grid"
        id="grid"
        className="grid phone:grid-cols-2 tablet:grid-cols-5 desktop:grid-cols-6"
      >
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 12}
          />
        ))}
      </div>

      <div
        aria-label="infinite-scroll-sentinel"
        ref={sentinelRef}
        className="flex min-h-24 items-center justify-center py-10"
      >
        {loading ? (
          <span className="text-sm font-bold uppercase">Loading…</span>
        ) : null}
      </div>
    </div>
  );
}
