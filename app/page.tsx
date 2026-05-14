import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Homepage from "components/homepage";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Homepage />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
