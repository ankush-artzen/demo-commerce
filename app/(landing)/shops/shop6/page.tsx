// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="Hongdae Shop"
      image="/images/shop6.avif"
      address={[
        "30 Hongik-ro 5-gil",
        "Mapo-gu",
        "Seoul",

        "02-337-8331",

        "Mon-Sun: 12-8",

        "ENTRY RAFFLE SYSTEM: CLICK HERE",
      ]}
    />
  );
}
