import CollectionPageClient from "components/store/collection-page-client";
import Footer from "components/store/collections/footer";
import Logo from "components/store/logo";
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
    <>
      <Logo />

      <CollectionPageClient
        collection={collection}
        initialProducts={products}
        initialPageInfo={pageInfo}
      />
      <div>
        <Footer />
      </div>
    </>
  );
}
