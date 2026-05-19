// app/store/new-york/page.tsx

import ShopPage from "../../../../components/store/shop-page";

export default function Page() {
  return (
    <ShopPage
      name="Osaka Shop"
      image="/images/osaka-6.avif"
      address={[
        "3-3-21 Minamisemba",
        "Chuo-Ku",
        "Osaka 542-0081",

        "06-4708-6770",

        "Mon-Fri: 12-8 Sat: 11-8 Sun: 12-7",
      ]}
    />
  );
}
