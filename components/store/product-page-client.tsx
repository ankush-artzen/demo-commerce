"use client";

import CategoryNav from "components/store/category-nav";
import Footer from "components/store/collections/footer";
import Logo from "components/store/logo";
import ProductPageAddToCart from "components/store/product-page-add-to-cart";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type ProductPageImage = {
  src: string;
  thumbSrc: string;
  zoom: string;
  label: string;
};

export type ProductPageVariant = {
  id: string;
  label: string;
  price: string;
  priceAmount: string;
};

export type ProductPageRelated = {
  handle: string;
  alt: string;
  image: string;
  active: boolean;
};

export type ProductPageClientProps = {
  product: Product;
  productId: string;
  handle: string;
  title: string;
  descriptionLines: string[];
  images: ProductPageImage[];
  variants: ProductPageVariant[];
  relatedProducts: ProductPageRelated[];
};

function CarouselArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      fill="#d1d5db"
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 123.96 123.96"
      strokeWidth={0}
      className={`hover:fill-black ${direction === "right" ? "rotate-180" : "rotate-0"}`}
    >
      <path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z" />
    </svg>
  );
}

export default function ProductPageClient({
  product,
  productId,
  title,
  descriptionLines,
  images,
  variants,
  relatedProducts,
}: ProductPageClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const [selectedVariantId, setSelectedVariantId] = useState(
    variants[0]?.id ?? "",
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const [galleryMode, setGalleryMode] = useState(false);
  
  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) ?? variants[0];

  const scrollToImage = (index: number) => {
    if (images.length === 0) return;

    const nextIndex = ((index % images.length) + images.length) % images.length;
    setSelectedImage(nextIndex);
    const container = carouselRef.current;
    if (container) {
      container.scrollTo({
        left: nextIndex * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Logo onMenuOpenChange={setMenuOpen} />
      <div className="mx-auto h-screen w-full max-w-[1400px] overflow-hidden bg-white">
      {/* <div className="mx-auto   w-full max-w-352  min-h-0"> */}
        {/* <div className="mx-auto w-full max-w-[1108px] min-h-0"> */}
        <CategoryNav menuOpen={menuOpen} />

        <main
          role="main"
          id="mainContent"
          className="
  h-[calc(100vh-130px)]
  min-h-0
  overflow-y-scroll
  mt-0
  // w-9/12
  w-[73%]
  sm:w-[7%]
  pr-[20px]

  ease-out
  duration-300

  sm:mt-8
  sm:w-[75.2%]

  phone:h-auto
  phone:overflow-y-visible
  phone:float-none
  phone:mt-0
  phone:w-full
  phone:pr-0
  phone:-translate-x-0
"
//           className="
//   h-[calc(100vh-130px)]
//   overflow-y-scroll
//   mt-0
//   sm:mt-8
//   w-9/12 
//   sm:w-[78%]
// "
       
//  className="h-[calc(100vh-130px)] min-h-0 overflow-y-auto mt-5 w-9/12 phone:h-auto phone:overflow-y-visible phone:float-none phone:mt-0 phone:w-full tablet:w-10/12 phone:-translate-x-0 ease-out duration-300"
        >
       <div
  aria-label="product-view"
  id="product-view"
  className="
    relative
    flex
    justify-between
    gap-[2%]

    phone:flex-col
  "
>
  {/* LEFT SIDE */}
  {images.length > 0 ? (
    // <div
    //   className="
    //     w-[68%]
    //     min-w-0
    //     cursor-zoom-in

    //     phone:w-full
    //   "
    // >
    <div
  className={`
    min-w-0
    phone:w-full

    ${
      galleryMode
        ? "w-full cursor-zoom-out"
        : "w-[68%] cursor-zoom-in"
    }
  `}
>
{!galleryMode ? (
  <>
    {/* NORMAL SLIDER */}
    <div
      id="slider"
      className="m-auto mt-0"
      onClick={() => setGalleryMode(true)}
    >
      <div aria-label="product-images-carousel">
        <div
          className="relative"
          aria-labelledby="nuka-carousel-heading"
          tabIndex={0}
          id="nuka-carousel"
        >
          <div className="relative">
            <div
              ref={carouselRef}
              className="grid auto-cols-[100%] grid-flow-col overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ touchAction: "pan-y" }}
              onScroll={(event) => {
                const container = event.currentTarget;

                const index = Math.round(
                  container.scrollLeft / container.clientWidth,
                );

                if (index !== selectedImage) {
                  setSelectedImage(index);
                }
              }}
            >
              {images.map((image, index) => (
                <div
                  key={image.label}
                  className="min-w-0 snap-start"
                >
                  <Image
                    alt={title}
                    src={image.src}
                    width={700}
                    height={700}
                    unoptimized
                    sizes="(min-width: 45em) 50vw, 100vw"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    aria-label={image.label}
                    data-zoom={image.zoom}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {images.length > 1 ? (
              <div>
                <button
                  type="button"
                  aria-label="left-slide-button"
                  className="absolute bottom-1/2 left-0 mx-3 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToImage(selectedImage - 1);
                  }}
                >
                  <CarouselArrow direction="left" />
                </button>

                <button
                  type="button"
                  aria-label="right-slide-button"
                  className="absolute bottom-1/2 right-0 mx-3 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToImage(selectedImage + 1);
                  }}
                >
                  <CarouselArrow direction="right" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>

    {/* THUMBNAILS */}
    {images.length > 1 ? (
      <div
        aria-label="product-images-grid"
        id="product-images-grid"
        className="
          mt-4
          w-full

          phone:hidden
        "
      >
        <div
          aria-label="photos-wrapper"
          className="m-auto grid max-w-[480px] grid-cols-5 text-center justify-center"
        >
          {images.map((image, index) => (
            <button
              key={image.label}
              type="button"
              aria-label="product-thumb"
              id={`product-thumb-${index}`}
              className={`p-0.5 transition duration-150 ease-in-out hover:cursor-pointer hover:opacity-40 ${
                index === selectedImage ? "opacity-40" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                scrollToImage(index);
              }}
            >
              <Image
                alt=""
                src={image.thumbSrc}
                width={90}
                height={90}
                unoptimized
                sizes="(min-width: 45em) 50vw, 100vw"
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    ) : null}
  </>
) : (
  /* ZOOM GALLERY */
  <div
    className="w-full cursor-zoom-out"
    aria-label="product-images-gallery"
    onClick={() => setGalleryMode(false)}
  >
    {images.map((image, index) => (
      <div
        key={image.label}
        aria-label={`${title}-image-${index}`}
        className="pb-4"
      >
        <Image
          alt={title}
          src={image.src}
          width={1500}
          height={1500}
          unoptimized
          loading="lazy"
          className="w-full object-cover"
        />
      </div>
    ))}
  </div>
)}

      {/* THUMBNAILS */}
      {images.length > 1 ? (
        <div
          aria-label="product-images-grid"
          id="product-images-grid"
          className="
            mt-4
            w-full

            phone:hidden
          "
        >
          <div
            aria-label="photos-wrapper"
            className="m-auto grid max-w-[480px] grid-cols-5 text-center justify-center"
          >
            {images.map((image, index) => (
              <button
                key={image.label}
                type="button"
                aria-label="product-thumb"
                id={`product-thumb-${index}`}
                className={`p-0.5 transition duration-150 ease-in-out hover:cursor-pointer hover:opacity-40 ${
                  index === selectedImage ? "opacity-40" : ""
                }`}
                onClick={() => scrollToImage(index)}
              >
                <Image
                  alt=""
                  src={image.thumbSrc}
                  width={90}
                  height={90}
                  unoptimized
                  sizes="(min-width: 45em) 50vw, 100vw"
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  ) : null}

  {/* RIGHT SIDE */}
  {/* <div
    className="
      w-[28%]
      min-w-0
      flex
      flex-col
      items-start

      phone:w-full
      phone:px-5
    "
  > */}
  {/* RIGHT SIDE */}
{!galleryMode && (
  <div
    className="
      w-[28%]
      min-w-0
      flex
      flex-col
      items-start

      phone:w-full
      phone:px-5
    "
  >
    {/* HEADER */}
    <div
      aria-label="product-header"
      className="
        w-full
        select-none
        uppercase
      "
      id="product-header"
    >
      <h1
        aria-label="product-title"
        id="product-title"
        className="
          text-[24px]
          font-bold
          italic
          leading-[24px]
          text-black

          sm:text-[32px]
          sm:leading-[32px]
        "
      >
        {title}
      </h1>

      <h3
        aria-label="product-price"
        id="product-price"
        className="mt-2 text-[15px] font-bold"
      >
        <span>{selectedVariant?.price ?? ""}</span>
      </h3>
    </div>

    {/* DESCRIPTION */}
    {descriptionLines.length > 0 ? (
      <div
        id="product-description"
        aria-label="product-description"
        className="
          mt-5
          w-full
          select-none
          text-sm
          font-normal
          uppercase
          leading-5
        "
      >
        <ul className="list-disc pl-4">
          {descriptionLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    ) : null}

    {/* LINKS */}
    <div className="mt-5 flex flex-col gap-1">
      <button
        type="button"
        className="text-sm uppercase underline hover:text-gray-300 hover:no-underline"
        aria-label="product-technical-details"
      >
        Technical Details
      </button>
</div>
<div className="flex flex-col gap-1">
      <button
        type="button"
        className="text-sm uppercase underline hover:text-gray-300 hover:no-underline"
        aria-label="product-size-chart"
      >
        Size Chart
      </button>
    </div>

    {/* ACTIONS */}
    {variants.length > 0 ? (
      <div
        aria-label="product-actions-wrapper"
        className="
          mt-6
          grid
          w-full
          grid-cols-2
          gap-2
        "
      >
        <div
          aria-label="product-variant-select-wrapper"
          className="w-full"
        >
          <select
            id="variant-selector"
            aria-label="product-select"
            role="combobox"
            value={selectedVariantId}
            onChange={(event) =>
              setSelectedVariantId(event.target.value)
            }
            className="
              h-7
              w-full
              cursor-pointer
              appearance-none
              border-2
              border-black
              bg-[image:var(--background-image-selector-icon)]
              bg-[top_50%_left_95%]
              bg-no-repeat
              pl-2
              text-sm
              uppercase
              outline-hidden

              hover:bg-white
              hover:text-black
              focus:ring-0

              phone:h-8
              phone:text-base
            "
          >
            {variants.map((variant) => (
              <option
                key={variant.id}
                value={variant.id}
                className="uppercase"
              >
                {variant.label}
              </option>
            ))}
          </select>
        </div>

        <ProductPageAddToCart
          product={product}
          selectedVariantId={selectedVariantId}
          variantLabel={selectedVariant?.label ?? "item"}
          className="flex h-7 w-full items-center justify-center border-2 border-black bg-black px-4 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black  phone:h-8 phone:text-base"
        />
      </div>
    ) : null}

    {/* RELATED PRODUCTS */}
    {relatedProducts.length > 0 ? (
      <div
        aria-label="product-selector-grid"
        id="product-selector-grid"
        className="mt-6 w-full"
      >
        <div className="grid grid-cols-4 text-center">
          {relatedProducts.map((product) => (
            <Link
              key={product.handle}
              href={`/product/${product.handle}`}
              aria-label={`product-selector-thumb-${product.handle}`}
              id={`product-selector-thumb-${product.handle}`}
              className={`transition duration-150 ease-in-out hover:cursor-pointer hover:opacity-40 ${
                product.active ? "opacity-40" : ""
              }`}
            >
              <Image
                alt={product.alt}
                src={product.image}
                width={90}
                height={90}
                unoptimized
                sizes="(min-width: 45em) 50vw, 100vw"
                className="aspect-square w-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    ) : null}
  </div>
)}
</div>
          <Footer />
        </main>

      </div>
      {/* <Footer /> */}

    </>
  );
}
