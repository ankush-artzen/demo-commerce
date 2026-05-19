// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="New York Shop"
      image="/images/new-york-1.avif"
      address={[
        "17 Apgujeong-Ro 50-Gil",
        "Gangnam-Gu",
        "Seoul",
        "02-541-0847",
        "Mon-Sun: 12-8",
        "ENTRY RAFFLE SYSTEM: CLICK HERE",
      ]}
    />
  );
}
