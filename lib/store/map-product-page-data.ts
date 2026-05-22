import type { Product, ProductVariant } from "lib/shopify/types";
import { parseProductDescriptionLines } from "lib/store/parse-product-description";
import type {
  ProductPageClientProps,
  ProductPageImage,
  ProductPageRelated,
  ProductPageVariant,
} from "components/store/product-page-client";

function formatVariantPrice(variant: ProductVariant): string {
  const { amount, currencyCode } = variant.price;

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(amount));
}

function mapProductImages(
  product: Product,
  handle: string,
): ProductPageImage[] {
  const sources =
    product.images.length > 0
      ? product.images
      : product.featuredImage.url
        ? [product.featuredImage]
        : [];

  return sources.map((image, index) => ({
    src: image.url,
    zoom: image.url,
    label: `${handle}-image-${index}`,
  }));
}

export function mapProductPageData(
  product: Product,
  recommendations: Product[],
): ProductPageClientProps {
  const images = mapProductImages(product, product.handle);

  const variants: ProductPageVariant[] = product.variants.map((variant) => ({
    id: variant.id,
    label: variant.title,
    price: formatVariantPrice(variant),
    priceAmount: variant.price.amount,
  }));

  const relatedProducts: ProductPageRelated[] = recommendations
    .filter((item) => item.featuredImage?.url)
    .slice(0, 4)
    .map((item) => ({
      handle: item.handle,
      alt: item.title,
      image: item.featuredImage.url,
      active: item.handle === product.handle,
    }));

  if (
    relatedProducts.length === 0 &&
    product.featuredImage?.url &&
    !relatedProducts.some((item) => item.handle === product.handle)
  ) {
    relatedProducts.push({
      handle: product.handle,
      alt: product.title,
      image: product.featuredImage.url,
      active: true,
    });
  }

  return {
    productId: product.id,
    handle: product.handle,
    title: product.title,
    descriptionLines: parseProductDescriptionLines(
      product.description,
      product.descriptionHtml,
    ),
    images,
    variants,
    relatedProducts,
  };
}
