// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="Fukuoka Shop"
      image="/images/fukuoka.avif"
      address={[
        "1-1-31, DAIMYO",
        "CHUO-KU",
        "FUKUOKA 810-0041",
        "092-401-8108",
        "Mon-Fri: 12-8 Sat: 11-8 Sun: 12-7",
      ]}
    />
  );
}
