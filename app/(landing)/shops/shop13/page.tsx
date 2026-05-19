// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="DSM Ginza Concession"
      image="/images/dsmginza.avif"
      address={[
        "Ginza Komatsu West",
        "6-9-5 , Ginza",
        "Chuo-Ku, Tokyo",
        "104-0061",
        "03-6228-5080",
        "Mon-Sun: 11-8",
      ]}
    />
  );
}
