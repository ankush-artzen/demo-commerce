// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="DSM London Concession"
      image="/images/london.avif"
      address={[
        "18-22 Haymarket St",
        "London SW1Y 4DG",
        "020 7518 0680",
        "",
        "Mon-Sat: 12-7 Sun: 12-6",
      ]}
    />
  );
}
