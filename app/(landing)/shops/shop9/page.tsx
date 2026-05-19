// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="Osaka Shop"
      image="/images/manorplace.avif"
      address={[
        "33 MANOR PLACE",
        "LONDON",
        "SE17 3BD",
        "",
        "OPEN FOR SELECT DROPS ONLY",
        "VISIT MANORPLACE.COM AND",
        "FOLLOW @PALACESKATEBOARDS FOR",
        "MORE INFORMATION ON DROPS",
      ]}
    />
  );
}
