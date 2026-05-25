import CollectionPageClient from "components/store/collection-page-client";
import type { PageInfo, Product } from "lib/shopify/types";

export default function CollectionPageLayout({
  collection,
  products,
  pageInfo,
}: {
  collection: string;
  products: Product[];
  pageInfo: PageInfo;
}) {
  return (
    <CollectionPageClient
      collection={collection}
      initialProducts={products}
      initialPageInfo={pageInfo}
    />
  );
}
