// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="DSM LA Concession"
      image="/images/dsmla.avif"
      address={[
        "608 Imperial St",
        "Los Angeles, CA 90021",
        "310-427-7610",
        "Mon-Sat: 11-6 Sun: 12-5",
      ]}
    />
  );
}
