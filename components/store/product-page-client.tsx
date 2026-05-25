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
      <div className="mx-auto   w-full max-w-320  pr-0 sm:pr-26 min-h-0">
        {/* <div className="mx-auto w-full max-w-[1108px] min-h-0"> */}
        <CategoryNav menuOpen={menuOpen} />

        <main
          role="main"
          id="mainContent"
          className="h-[calc(100vh-130px)] min-h-0 overflow-y-auto mt-5 w-9/12 phone:h-auto phone:overflow-y-visible phone:float-none phone:mt-0 phone:w-full tablet:w-10/12 phone:-translate-x-0 ease-out duration-300"
        >
          <div
            aria-label="product-view"
            className="relative overflow-hidden phone:flex phone:flex-col"
            id="product-view"
          >
            <div
              aria-label="product-header"
              className="float-right w-[30%] select-none pr-5 uppercase phone:order-first phone:float-none phone:mb-1 phone:mt-3 phone:w-full phone:px-5 tablet:w-[35%] tablet:pr-2.5"
              id="product-header"
            >
              <h1
                aria-label="product-title"
                id="product-title"
                className="text-[32px] font-bold italic leading-none phone:pb-0 phone:text-[1.5em] tablet:m-0 tablet:text-[1.75em]"
              >
                {title}
              </h1>
              <h3
                aria-label="product-price"
                id="product-price"
                className="text-[15px] font-bold phone:mt-1 phone:text-[0.9em] phone:leading-none"
              >
                <span>
                  <div>{selectedVariant?.price ?? ""}</div>
                </span>
              </h3>
            </div>

            {images.length > 0 ? (
              <div className="float-left mr-[2%] block w-[68%] cursor-zoom-in phone:float-none phone:m-0 phone:mt-2 phone:w-full phone:pb-2 tablet:mr-[3%] tablet:w-[62%] desktop:pb-4">
                <div id="slider" className="m-auto mt-0">
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
                              className="invisible absolute bottom-1/2 left-0 mx-3 cursor-pointer visible!"
                              onClick={() => scrollToImage(selectedImage - 1)}
                            >
                              <CarouselArrow direction="left" />
                            </button>
                            <button
                              type="button"
                              aria-label="right-slide-button"
                              className="invisible absolute bottom-1/2 right-0 mx-3 cursor-pointer visible!"
                              onClick={() => scrollToImage(selectedImage + 1)}
                            >
                              <CarouselArrow direction="right" />
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {descriptionLines.length > 0 ? (
              <div
                id="product-description"
                aria-label="product-description"
                className="float-right mb-2.5 mt-5 list-item w-[30%] select-none list-disc pr-5 text-sm font-normal uppercase leading-4.5 phone:order-5 phone:float-none phone:w-full phone:px-5 tablet:clear-right tablet:w-[35%] tablet:pr-6.25 desktop:clear-right"
              >
                <ul>
                  {descriptionLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* <div
              id="product-description"
              aria-label="product-description"
              className="
    float-right
    mb-2.5
    mt-5
    list-item
    w-[30%]
    select-none
    list-disc
    pr-5
    text-sm
    font-normal
    uppercase
    leading-[18px]

    phone:order-5
    phone:float-none
    phone:w-full
    phone:px-5

    tablet:clear-right
    tablet:w-[35%]
    tablet:pr-[25px]

    desktop:clear-right
  "
            >
              <ul className="space-y-1 list-disc">
                <li>100%</li>
                <li>GET CLASSY</li>
              </ul>
            </div> */}
            <button
              type="button"
              className="flex justify-start text-sm uppercase cursor-pointer underline hover:text-gray-300 hover:no-underline phone:order-6 phone:mb-0 phone:ml-5"
              aria-label="product-technical-details"
            >
              Technical Details
            </button>

            <button
              type="button"
              className="flex justify-start text-sm uppercase cursor-pointer underline hover:text-gray-300 hover:no-underline phone:order-7 phone:ml-5"
              aria-label="product-size-chart"
            >
              Size Chart
            </button>
{/* 
            {variants.length > 0 ? (
              <div
                aria-label="product-actions-wrapper"
                className="float-right my-5 grid w-[30%] pr-5 phone:order-1 phone:float-none phone:my-2.5 phone:mr-0 phone:mt-1 phone:w-full phone:items-center phone:grid-cols-2 phone:px-5 tablet:clear-right tablet:w-[35%] tablet:grid-cols-2 tablet:grid-rows-2 tablet:pr-2.5 desktop:clear-right desktop:mt-2 desktop:grid-flow-col desktop:grid-cols-2"
              >
                <div
                  aria-label="product-variant-select-wrapper"
                  className="block w-full phone:mr-[2%] phone:mt-0 tablet:w-full"
                >
                  <div className="w-full phone:mr-[2%]">
                    <select
                      id="variant-selector"
                      aria-label="product-select"
                      role="combobox"
                      value={selectedVariantId}
                      onChange={(event) =>
                        setSelectedVariantId(event.target.value)
                      }
                      className="mt-2.5 h-7 w-[90%] cursor-pointer appearance-none overflow-auto border-2 border-black bg-[image:var(--background-image-selector-icon)] bg-[top_50%_left_95%] bg-no-repeat pl-2 text-sm uppercase outline-hidden hover:bg-white hover:text-black focus:ring-0 phone:mt-0 phone:h-8 phone:w-[98%] phone:py-1 phone:text-base tablet:w-full"
                    >
                      {variants.map((variant) => (
                        <option
                          key={variant.id}
                          value={variant.id}
                          id={variant.id}
                          className="uppercase"
                        >
                          {variant.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <form method="post" action="/cart" className="w-full min-w-0">
                  <input
                    type="hidden"
                    name="cartFormInput"
                    value={JSON.stringify({
                      action: "LinesAdd",
                      inputs: {
                        lines: [
                          {
                            merchandiseId: selectedVariantId,
                            quantity: 1,
                          },
                        ],
                        buyerIdentity: { countryCode: "GB" },
                      },
                    })}
                  />
                  <input
                    type="hidden"
                    name="analytics"
                    value={JSON.stringify({
                      products: [
                        {
                          productGid: productId,
                          variantGid: selectedVariantId,
                          name: title,
                          variantName: selectedVariant?.label ?? "",
                          brand: "Palace Skateboards",
                          price: selectedVariant?.priceAmount ?? "0",
                          quantity: 1,
                        },
                      ],
                      totalValue: Number(selectedVariant?.priceAmount ?? 0),
                    })}
                  />
                  <button
                    type="submit"
                    className="mt-2.5 flex h-7 w-full cursor-pointer items-center justify-center whitespace-nowrap border-2 border-black bg-black px-4 text-center text-sm font-bold uppercase text-white hover:bg-white hover:text-black phone:my-1 phone:h-8 phone:py-1 phone:text-base"
                    aria-label={`add-${selectedVariant?.label ?? "item"}-to-cart`}
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            ) : null} */}
{variants.length > 0 ? (
  <div
    aria-label="product-actions-wrapper"
    className="
      float-right
      my-5
      grid
      w-[30%]
      grid-cols-2
      gap-2
      pr-5

      phone:order-1
      phone:float-none
      phone:my-2.5
      phone:w-full
      phone:grid-cols-2
      phone:px-5

      tablet:w-[35%]
      tablet:pr-2.5
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
      className="flex h-7 w-full items-center justify-center border-2 border-black bg-black px-4 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60 phone:h-8 phone:text-base"
    />
  </div>
) : null}
            {relatedProducts.length > 0 ? (
              <div
                aria-label="product-selector-grid"
                id="product-selector-grid"
                className="tablet:float-right tablet:mb-2 tablet:w-[35%] desktop:float-right desktop:my-4 desktop:w-[30%] phone:order-2"
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
                        className="w-full aspect-square object-cover"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {images.length > 1 ? (
              <div
                aria-label="product-images-grid"
                id="product-images-grid"
                className="float-left mr-px w-[65%] pt-0 phone:mt-0 phone:hidden phone:w-full phone:px-5 tablet:mb-4 tablet:w-3/5 tablet:pr-[5%] desktop:mb-4"
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
                        className="w-full aspect-square object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
