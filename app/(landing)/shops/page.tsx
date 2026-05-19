import Link from "next/link";
import Footer from "../../../components/store/footer";
import Header from "../../../components/store/header";
const navItems = [
  "SUMMER 2026 RANGE",
  "SUMMER 2026 LOOKBOOK",
  "SHOPS",
  "WEB SHOP",
  "ADVICE",
  "MANOR PLACE",
];

const shops = [
  {
    title: "London Shop",
    image: "/images/london-1.avif",
    link: "/shops/shop1",
  },
  {
    title: "New York Shop",
    image: "/images/new-york-1.avif",
    link: "/shops/shop2",
  },
  {
    title: "Tokyo Shop",
    image: "/images/tokyo-1.avif",
    link: "/shops/shop3",
  },
  {
    title: "Los Angeles Shop",
    image: "/images/los-angeles-10.avif",
    link: "/shops/shop4",
  },
  {
    title: "Apgujeong Shop",
    image: "/images/apgujeong-2.avif",
    link: "/shops/shop5",
  },
  {
    title: "Hongdae Shop",
    image: "/images/hongdae-4.avif",
    link: "/shops/shop6",
  },
  {
    title: "Osaka Shop",
    image: "/images/osaka-6.avif",
    link: "/shops/shop7",
  },
  {
    title: "Fukuoka Shop",
    image: "/images/fukuoka.avif",
    link: "/shops/shop8",
  },
  {
    title: "Manor Place Shop",
    image: "/images/manorplace.avif",
    link: "/shops/shop9",
  },
  {
    title: "Hong Kong Shop",
    image: "/images/hongkong.avif",
    link: "/shops/shop10",
  },
  {
    title: "DSM London Concession",
    image: "/images/london.avif",
    link: "/shops/shop11",
  },
  {
    title: "DSM LA Concession",
    image: "/images/dsmla.avif",
    link: "/shops/shop12",
  },
  {
    title: "DSM Ginza Concession",
    image: "/images/dsmginza.avif",
    link: "/shops/shop13",
  },
];

const footerLinks = [
  "Instagram",
  "TikTok",
  "Apple Music",
  "YouTube",
  "WeChat",
  "Weibo",
  "Mailing List",
  "Boring Stuff",
];

export default function Page() {
  return (
    // <main className=" mt-0 pt-0 bg-white text-black">
    <main className="flex flex-col bg-white text-black">
      <Header />
      {/* Shops Grid */}
      <section className="mx-auto max-w-[1059px] px-6 pt-0 ">
        {" "}
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
          {shops.map((shop) => (
            <div key={shop.title} className="group">
              <div className="overflow-hidden bg-[#e9e9e9]">
                <Link href={shop.link}>
                  <img
                    src={shop.image}
                    alt={shop.title}
                    className="h-[260px] w-full object-cover duration-75 ease-in hover:opacity-30 md:h-[320px]"
                  />
                </Link>
              </div>

              <h2 className="mt-3 text-center text-[14px] font-black uppercase tracking-tight">
                {shop.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="-mt-10 pt-0">
          <Footer />
        </div>
      </section>
      {/* Footer */}
    </main>
  );
}
