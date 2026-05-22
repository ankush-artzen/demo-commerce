import { TriFergSvg } from "components/store/tri-ferg-svg";
import Link from "next/link";
import Footer from "../../components/store/footer";

const navItems = [
  {
    title: "Shops",
    href: "/shops",
    fillClass: "fill-tri-ferg-red",
    ariaLabel: "shops-tri-ferg-link",
  },
  {
    title: "Web Shop",
    href: "/collections/all",
    fillClass: "fill-tri-ferg-grey",
    ariaLabel: "web-shop-tri-ferg-link",
  },
  {
    title: "PALACE SHANGHAI",
    href: "/advice/palace-shanghai",
    fillClass: "fill-tri-ferg-blue",
    ariaLabel: "latest-advice-tri-ferg-link",
  },
  {
    title: "Advice",
    href: "/advice",
    fillClass: "",
    ariaLabel: "advice-tri-ferg-link",
  },
  {
    title: "Manor Place",
    href: "https://manorplace.com",
    fillClass: "fill-tri-ferg-lime-green",
    ariaLabel: "manor-place-tri-ferg-link",
    external: true,
  },
] as const;

export default function PalaceLandingPage() {
  return (
    <>
      <main
        role="main"
        id="mainContent"
        className="flex flex-1 grow justify-center"
      >
        <div className="mx-5 flex w-full max-w-5xl">
          <div
            className="relative flex w-full flex-1 grow flex-col justify-center px-5 phone:px-0"
            aria-label="index-view"
          >
            <nav className="flex flex-row justify-center space-x-10 pt-5 font-bold uppercase phone:flex-col phone:items-center phone:space-x-0 phone:space-y-2 phone:pt-0">
              {navItems.map((item) => (
                <Link
                  key={item.ariaLabel}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={
                    "external" in item && item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group relative block w-56 phone:w-24 ${item.fillClass}`}
                >
                  <div
                    className="w-full transition-opacity duration-150 ease-in-out desktop:group-hover:opacity-20"
                    aria-label="tri-ferg"
                  >
                    <TriFergSvg />
                  </div>
                  <h2 className="text-center text-xl phone:mt-2 phone:text-xs tablet:text-md desktop:absolute desktop:inset-0 desktop:flex desktop:w-full desktop:items-center desktop:justify-center desktop:opacity-0 desktop:transition-opacity desktop:duration-150 desktop:ease-in-out desktop:group-hover:opacity-100">
                    {item.title}
                  </h2>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
