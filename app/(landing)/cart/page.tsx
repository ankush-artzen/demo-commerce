import CartPageClient from "components/store/cart-page-client";
import { createCartAndSetCookie } from "components/cart/actions";
import { getCart } from "lib/shopify";

export const metadata = {
  title: "Cart",
};

export default async function CartPage() {
  if (!(await getCart())) {
    await createCartAndSetCookie();
  }

  return <CartPageClient />;
}
