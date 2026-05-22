import { formatProductPrice } from "lib/format-product-price";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  priority,
}: {
  product: Product;
  priority?: boolean;
}) {
  const price = formatProductPrice(product);
  const imageUrl = product.featuredImage.url;

  return (
    <Link
      href={`/product/${product.handle}`}
      className="group relative mb-10 block text-center uppercase phone:mb-0 phone:flex phone:flex-col phone:content-center tablet:max-w-[178px] desktop:max-w-[178px]"
      prefetch={true}
    >
      <div className="relative flex justify-center phone:float-left">
        <Image
          src={imageUrl}
          alt={product.title}
          width={200}
          height={200}
          priority={priority}
          sizes="(min-width: 45em) 50vw, 100vw"
          className="w-full max-w-[178px] h-auto object-contain transition-opacity duration-150 ease-in-out phone:inline-block tablet:group-hover:opacity-40 desktop:group-hover:opacity-40 select-none"
          style={{ aspectRatio: "1 / 1" }}
        />
      </div>

      <div className="absolute left-0 top-2/4 inline-block w-full -translate-y-1/2 text-center text-sm font-bold opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 phone:relative phone:block phone:translate-y-0 phone:pl-4 phone:text-left phone:text-sm phone:opacity-100 pointer-events-none">
        <div className="float-none w-full duration-150 ease-in-out group-hover:transition-colors phone:w-4/5 phone:text-[0.9em]">
          <h3 className="m-0 text-[13px] leading-[16px] lg:text-sm">
            {product.title}
          </h3>
        </div>
        <div
          aria-label="price-label"
          className="mt-1 duration-150 ease-in-out group-hover:transition-colors phone:text-[0.9em] text-[13px] font-bold lg:text-sm"
        >
          {price}
        </div>
      </div>
    </Link>
  );
}
