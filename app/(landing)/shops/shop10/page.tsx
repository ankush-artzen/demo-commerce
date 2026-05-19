// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="Hong Kong Shop"
      image="/images/hongkong.avif"
      address={[
        "G/F, 42 Leighton Road",
        "Causeway Bay",
        "Hong Kong",
        "",
        "2633-1908",
        "",
        "MON-SUN: 11-9",
      ]}
    />
  );
}
