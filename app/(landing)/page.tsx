import { TriFergSvg } from "components/store/tri-ferg-svg";
import Footer from "components/store/footer";
import Header from "components/store/header";
import { getLandingPageData } from "lib/get-landing-page";
import Link from "next/link";

export default async function PalaceLandingPage() {
  const { triFergNav, headerLinks, footerLinks } = await getLandingPageData();

  return (
    <>
      <div className="block sm:hidden">
        <Header navItems={headerLinks} />
      </div>
      <main
        role="main"
        id="mainContent"
        className="flex flex-1 grow justify-center"
      >
        <div className="mx-5 flex w-full max-w-5xl">
          <div
            className="relative flex w-full mt-10 sm:mt-0 flex-1 grow flex-col justify-center px-5 phone:px-0"
            aria-label="index-view"
          >
            <nav className="flex flex-row justify-center space-x-10 pt-5 font-bold uppercase phone:flex-col phone:items-center phone:space-x-0 phone:space-y-2 phone:pt-0">
              {triFergNav.map((item) => (
                <Link
                  key={item.ariaLabel}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`group relative block w-56 phone:w-24 ${item.fillClass}`}
                >
                  <div
                    className="w-full transition-opacity duration-150 ease-in-out desktop:group-hover:opacity-20"
                    aria-label="tri-ferg"
                  >
                    <TriFergSvg />
                  </div>
                  <h2 className="text-center text-xl phone:mt-2 phone:text-xs md:text-md desktop:absolute desktop:inset-0 desktop:flex desktop:w-full desktop:items-center desktop:justify-center desktop:opacity-0 desktop:transition-opacity desktop:duration-150 desktop:ease-in-out desktop:group-hover:opacity-100">
                    {item.title}
                  </h2>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </main>
      <div className="mt-15.5 sm:mt-0">
        <Footer links={footerLinks} />
      </div>
    </>
  );
}
