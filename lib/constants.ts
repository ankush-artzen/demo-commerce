export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE";
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: "RELEVANCE",
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];

export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
export const COLLECTION_PRODUCTS_PAGE_SIZE = 30;
export const DEFAULT_OPTION = "Default Title";
export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";

/** Read at call time so production env (e.g. Vercel) is applied, not only build-time values. */
export function getShopifyHomeFeaturedCollectionHandle(): string {
  return (
    process.env.SHOPIFY_HOME_FEATURED_COLLECTION_HANDLE?.trim() ||
    "hidden-homepage-featured-items"
  );
}

export function getShopifyHomeCarouselCollectionHandle(): string {
  return (
    process.env.SHOPIFY_HOME_CAROUSEL_COLLECTION_HANDLE?.trim() ||
    "hidden-homepage-carousel"
  );
}
