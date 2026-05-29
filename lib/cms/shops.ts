import type { DatoResponsiveImage, DatoShopRecord } from "lib/cms/datocms";

export type ShopGalleryImage = {
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
};

function responsiveToSlide(
  responsive: DatoResponsiveImage | null | undefined,
): ShopGalleryImage | null {
  if (!responsive?.src) return null;
  return {
    src: responsive.src,
    srcSet: responsive.srcSet,
    width: responsive.width,
    height: responsive.height,
  };
}

/** Cover image first, then gallery (no duplicates). */
export function shopGallerySlides(shop: DatoShopRecord): ShopGalleryImage[] {
  const slides: ShopGalleryImage[] = [];
  const seen = new Set<string>();

  const add = (slide: ShopGalleryImage | null) => {
    if (!slide || seen.has(slide.src)) return;
    seen.add(slide.src);
    slides.push(slide);
  };

  add(responsiveToSlide(shop.coverImage?.responsiveImage));
  for (const item of shop.galleryImages) {
    add(responsiveToSlide(item.responsiveImage));
  }

  return slides;
}

export function shopCoverSrc(shop: DatoShopRecord): string | null {
  const cover = shop.coverImage?.responsiveImage?.src;
  if (cover) return cover;

  for (const item of shop.galleryImages) {
    const src = item.responsiveImage?.src;
    if (src) return src;
  }

  return null;
}

export function parseShopAddress(address: string | null): string[] {
  if (!address?.trim()) return [];
  return address
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}
