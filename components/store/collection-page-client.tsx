"use client";

import CollectionFilterModal from "components/store/collection-filter-modal";
import CollectionProductGrid from "components/store/collection-product-grid";
import type { PageInfo, Product } from "lib/shopify/types";
import { collectionCategories } from "lib/store/collection-categories";
import {
  applyCollectionFilters,
  defaultCollectionFilters,
  type CollectionFilters,
} from "lib/store/collection-filters";
import Link from "next/link";
import { useState } from "react";

export default function CollectionPageClient({
  collection,
  initialProducts,
  initialPageInfo,
}: {
  collection: string;
  initialProducts: Product[];
  initialPageInfo: PageInfo;
}) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<CollectionFilters>(
    defaultCollectionFilters,
  );

  const hasActiveFilters = !filters.showSoldOut || filters.sizes.length > 0;

  const clearFilters = () => {
    setFilters(defaultCollectionFilters);
  };

  return (
    <div className="mx-auto w-full max-w-7xl min-h-0 bg-white">
      <nav
        id="category-menu"
        aria-label="category-menu"
        className="float-left mr-2.5 mt-5 box-content hidden w-[12%] shrink-0 pt-5 pr-5 text-right uppercase lg:block"
      >
        <ul className="mb-2.5 space-y-[1px]">
          {collectionCategories.map((item) => {
            const isActive = item.handle === collection;
            const href = `/collections/${item.handle}`;

            return (
              <li key={item.handle} aria-label={`menu-item-${item.handle}`}>
                <Link
                  href={href}
                  className={`block text-sm font-bold leading-[18px] no-underline transition duration-150 ease-in-out hover:text-amber-500 ${
                    isActive ? "text-amber-500" : "text-black"
                  }`}
                  {...(isActive
                    ? { "data-selector": "category-menu-active" }
                    : {})}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li aria-label="menu-item-cart">
            <Link
              href="/search"
              className="block text-sm font-bold leading-[18px] text-black no-underline transition duration-150 ease-in-out hover:text-amber-500"
            >
              Cart
            </Link>
          </li>
          <li aria-label="menu-item-filter" className="pt-10">
            <button
              type="button"
              aria-label="filter-button"
              onClick={() => setFilterOpen(true)}
              className={`block w-full cursor-pointer text-right text-sm font-bold uppercase leading-[18px] no-underline transition duration-150 ease-in-out hover:text-amber-500 ${
                hasActiveFilters ? "text-amber-500" : "text-black"
              }`}
            >
              Filter
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <main
          role="main"
          id="mainContent"
          className="mt-5 h-[calc(100vh-130px)] min-h-0 w-full overflow-y-auto pr-4 pt-0 lg:w-[88%]"
        >
          {initialProducts.length === 0 ? (
            <p className="py-10 text-center text-sm font-bold uppercase">
              No products available. Check Shopify configuration.
            </p>
          ) : (
            <CollectionProductGrid
              collection={collection}
              initialProducts={initialProducts}
              initialPageInfo={initialPageInfo}
              filters={filters}
              applyFilters={applyCollectionFilters}
            />
          )}
        </main>
      </div>

      <CollectionFilterModal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        showSoldOut={filters.showSoldOut}
        onShowSoldOutChange={(showSoldOut) =>
          setFilters((current) => ({ ...current, showSoldOut }))
        }
        selectedSizes={filters.sizes}
        onToggleSize={(size) =>
          setFilters((current) => {
            const sizes = current.sizes.includes(size)
              ? current.sizes.filter((value) => value !== size)
              : [...current.sizes, size];
            return { ...current, sizes };
          })
        }
        onClear={clearFilters}
      />
    </div>
  );
}
