export const collectionCategories = [
  { label: "All", handle: "all" },
  { label: "New", handle: "new" },
  { label: "Jackets", handle: "jackets" },
  { label: "Shirting", handle: "shirting" },
  { label: "Tops", handle: "tops" },
  { label: "Bottoms", handle: "bottoms" },
  { label: "Shorts", handle: "shorts" },
  { label: "Tracksuits", handle: "tracksuits" },
  { label: "Hoods", handle: "hoods" },
  { label: "Sweatshirts", handle: "sweatshirts" },
  { label: "T-Shirts", handle: "t-shirts" },
  { label: "Hats", handle: "hats" },
  { label: "Underwear", handle: "underwear" },
  { label: "Footwear", handle: "footwear" },
  { label: "Bags", handle: "bags" },
  { label: "Accessories", handle: "accessories" },
  { label: "Hardware", handle: "hardware" },
] as const;

export type CollectionCategoryHandle =
  (typeof collectionCategories)[number]["handle"];
