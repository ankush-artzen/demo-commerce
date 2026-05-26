"use client";

import CategoryNav from "components/store/category-nav";
import CollectionFilterModal from "components/store/collection-filter-modal";
import CollectionProductGrid from "components/store/collection-product-grid";
import Footer from "components/store/collections/footer";
import Logo from "components/store/logo";
import type { PageInfo, Product } from "lib/shopify/types";
import {
  applyCollectionFilters,
  defaultCollectionFilters,
  type CollectionFilters,
} from "lib/store/collection-filters";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<CollectionFilters>(
    defaultCollectionFilters,
  );

  const hasActiveFilters = !filters.showSoldOut || filters.sizes.length > 0;

  const clearFilters = () => {
    setFilters(defaultCollectionFilters);
  };

  return (
    <>
      <Logo onMenuOpenChange={setMenuOpen} />
      <div className="mx-auto w-full max-w-[1400px] mt-0 sm:mt-3 overflow-hidden bg-white min-h-0">      {/* <div className="mx-auto w-full max-w-352 min-h-0"> */}
        <CategoryNav
          menuOpen={menuOpen}
          activeCollection={collection}
          onFilterClick={() => setFilterOpen(true)}
          hasActiveFilters={hasActiveFilters}
        />

        <main
          role="main"
          id="mainContent"
          className="
  h-[calc(100vh-130px)]
  min-h-0
  overflow-y-scroll
  w-[73%]

  ease-out
  duration-300

  md:w-[75.2%]

  phone:h-auto
  phone:overflow-y-visible
  phone:float-none
  phone:mt-0
  phone:w-full
  phone:pr-0
  phone:-translate-x-0
"
          // className="h-[calc(100vh-130px)] min-h-0 overflow-y-auto mt-5 w-9/12 phone:h-auto phone:overflow-y-visible phone:float-none phone:mt-0 phone:w-full md:w-10/12 phone:-translate-x-0 ease-out duration-300"
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

        <Footer />
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
    </>
  );
}
