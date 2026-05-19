// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="Los Angeles Shop"
      image="/images/los-angeles-10.avif"
      address={[
        "5-9-20 Jingumae",
        "Shibuya-Ku",
        "Tokyo 150-0001",
        "03-6427-2587",
        "Mon-Fri: 12-8 Sat: 11-8 Sun: 12-7",
      ]}
    />
  );
}
