import ShopPage from "../../../../components/store/shop-page";
import { getAllShops, getShopBySlug } from "lib/cms/datocms";
import { parseShopAddress, shopGallerySlides } from "lib/cms/shops";
import { structuredTextToHtml } from "lib/cms/structured-text";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const shops = await getAllShops();
    return shops.map((shop) => ({ slug: shop.slug }));
  } catch {
    return [];
  }
}

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shop = await getShopBySlug(slug);

  if (!shop) {
    notFound();
  }

  const images = shopGallerySlides(shop);

  return (
    <ShopPage
      name={shop.title}
      images={images}
      address={parseShopAddress(shop.address)}
      timing={shop.openingHours ?? undefined}
      miscInformationHtml={structuredTextToHtml(shop.miscInformation)}
    />
  );
}
