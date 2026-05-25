"use client";

import { useCart } from "components/cart/cart-context";
import Price from "components/price";
import Link from "next/link";

function formatItemCount(quantity: number) {
  if (quantity === 0) {
    return "0 Items";
  }
  if (quantity === 1) {
    return "1 Item";
  }
  return `${quantity} Items`;
}

export default function StoreCart() {
  const { cart } = useCart();

  const quantity = cart?.totalQuantity ?? 0;
  const totalAmount = cart?.cost?.totalAmount;

  if (quantity === 0) {
    return null;
  }

  return (
    <>
      <div
        aria-label="cart"
        className="ml-2 hidden select-none text-[11px] leading-[15px] font-normal md:block"
        // className="ml-2 hidden select-none text-xs phone:hidden md:block"
      >
        <Link
          href="/cart"
          aria-label="cart-heading"
          className="block w-full bg-black px-3 py-0.5 text-center uppercase text-white no-underline"
        >
          Cart
        </Link>
        <div
          id="cart-footer"
          className="block border border-black px-1.5 py-0.5 text-left uppercase"
        >
          <span id="cart-msg" className="flex items-center gap-2">
            <span aria-label="cart-count" id="cart-count">
              {formatItemCount(quantity)}
            </span>
            {totalAmount ? (
              <span aria-label="cart-amount" className="inline-block">
                <Price
                  amount={totalAmount.amount}
                  currencyCode={totalAmount.currencyCode}
                  className="inline text-[11px] leading-[15px] font-normal"
                  currencyCodeClassName="hidden"
                />
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <Link
        href="/cart"
        aria-label="mobile-cart-heading"
        className="ml-px pt-0.5 text-sm uppercase text-black no-underline md:hidden"
      >
        <span
          aria-label="cart-label"
          className="border-2 border-x-8 border-black bg-black px-1 text-white"
        >
          Cart
        </span>
        <span
          aria-label="cart-count"
          className="ml-px border-2 border-x-8 border-black bg-black px-1 text-white"
        >
          {quantity}
        </span>
      </Link>
    </>
  );
}
