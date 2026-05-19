// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="New York Shop"
      image="/images/new-york-1.avif"
      address={[
        "49 Howard Street",
        "New York, NY 10013",
        "212-933-1573",
        "Mon-Sat: 11-7 Sun: 12-6",
      ]}
    />
  );
}
