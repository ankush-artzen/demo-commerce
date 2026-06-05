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
  onFilterClick,
}: {
  collection: string;
  initialProducts: Product[];
  initialPageInfo: PageInfo;
  filters?: CollectionFilters;
  applyFilters?: (products: Product[], filters: CollectionFilters) => Product[];
  onFilterClick?: () => void;
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

    if (!sentinel || !pageInfo.hasNextPage) {
      return;
    }

    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const scrollRoot = isPhone ? null : root;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { root: scrollRoot, rootMargin: "400px 0px", threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [loadMore, pageInfo.hasNextPage]);

  return (
    <>
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
              priority={index < 6}
            />
          ))}
        </div>

        {onFilterClick ? (
          <div
            id="grid-floating-container"
            className="pointer-events-none sticky bottom-4 z-50 hidden w-full phone:block"
          >
            <div className="flex justify-end pr-4">
              <div id="grid-floating-content" className="pointer-events-auto">
                <button
                  type="button"
                  aria-label="filter-button"
                  onClick={onFilterClick}
                  className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap border-2 border-black bg-black px-4 text-center text-sm font-bold uppercase text-white hover:bg-white hover:text-black desktop:mb-1 phone:my-0 phone:h-8 phone:py-1 phone:text-base"
                >
                  <span className="font-bold">Filter</span>
                </button>
              </div>
            </div>
          </div>
        ) : null}
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
    </>
  );
}
