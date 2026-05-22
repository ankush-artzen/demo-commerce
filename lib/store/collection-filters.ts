import type { Product } from "lib/shopify/types";

export type CollectionFilters = {
  showSoldOut: boolean;
  sizes: string[];
};

export const defaultCollectionFilters: CollectionFilters = {
  showSoldOut: true,
  sizes: [],
};

export const filterSizeOptions = [
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "2X-Large",
  "30",
  "32",
  "34",
  "36",
] as const;

const SIZE_OPTION_NAMES = new Set(["size", "taille"]);

function productHasAvailableSize(product: Product, sizes: string[]) {
  return product.variants.some(
    (variant) =>
      variant.availableForSale &&
      variant.selectedOptions.some(
        (option) =>
          SIZE_OPTION_NAMES.has(option.name.toLowerCase()) &&
          sizes.includes(option.value),
      ),
  );
}

function isProductSoldOut(product: Product) {
  return (
    !product.availableForSale ||
    product.variants.every((variant) => !variant.availableForSale)
  );
}

export function applyCollectionFilters(
  products: Product[],
  filters: CollectionFilters,
): Product[] {
  return products.filter((product) => {
    if (!filters.showSoldOut && isProductSoldOut(product)) {
      return false;
    }

    if (filters.sizes.length > 0 && !productHasAvailableSize(product, filters.sizes)) {
      return false;
    }

    return true;
  });
}
