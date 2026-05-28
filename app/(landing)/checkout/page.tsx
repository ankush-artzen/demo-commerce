import { createCartAndSetCookie } from "components/cart/actions";
import CheckoutPageClient from "components/store/checkout-page-client";
import { getCart } from "lib/shopify";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Checkout",
};

export default async function CheckoutPage() {
  let cart = await getCart();
  if (!cart) {
    await createCartAndSetCookie();
    cart = await getCart();
  }

  if (!cart || cart.lines.length === 0) {
    redirect("/cart");
  }

  return <CheckoutPageClient />;
}
