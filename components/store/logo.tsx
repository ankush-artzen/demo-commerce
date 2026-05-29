"use client";

import StoreCart from "components/store/store-cart";
import { TriFergSvg } from "components/store/tri-ferg-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function shouldShowStoreCart(pathname: string) {
  return (
    pathname.startsWith("/product/") ||
    pathname.startsWith("/collections/") ||
    pathname === "/cart"
  );
}

const TRI_FERG_MARK_CLASS = "ml-1.5 inline-block w-20 phone:w-12";

const TRI_FERG_MARKS = [
  { id: "grey", fillClass: "fill-tri-ferg-grey" },
  { id: "blue", fillClass: "fill-tri-ferg-blue" },
  { id: "red", fillClass: "fill-tri-ferg-red" },
] as const;

function shuffleMarks<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

export default function Logo({
  onMenuOpenChange,
  showCart: showCartProp,
}: {
  onMenuOpenChange?: (open: boolean) => void;
  /** When omitted, cart shows on /product/*, /collections/*, and /cart */
  showCart?: boolean;
}) {
  const pathname = usePathname();
  const showCart = showCartProp ?? shouldShowStoreCart(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => {
      const next = !open;
      onMenuOpenChange?.(next);
      return next;
    });
  };
  const [marks, setMarks] = useState(() => [...TRI_FERG_MARKS]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarks(shuffleMarks(TRI_FERG_MARKS));
    }, 750);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      role="banner"
      id="header"
      aria-label="header"
      className="mx-auto flex max-w-(--breakpoint-xl) py-2.5 text-center ease-out duration-300 phone:sticky phone:top-0 phone:z-50 phone:w-full phone:py-1.5 phone:pb-4 md:w-[90%] md:pb-4 desktop:w-[70%]"
    >
      <div className="w-4/12 phone:invisible phone:hidden" />

      <div className="w-4/12 phone:w-1/2 phone:text-left">
        <Link
          href="/"
          id="header-fergs"
          aria-label="header-fergs"
          className="mx-auto flex cursor-pointer phone:ml-4"
        >
          {marks.map((mark) => (
            <div
              key={mark.id}
              aria-label="tri-ferg"
              className={`${TRI_FERG_MARK_CLASS} ${mark.fillClass}`}
            >
              <TriFergSvg />
            </div>
          ))}
        </Link>
      </div>

      <div className="w-4/12 phone:w-1/2">
        {/* <div className="float-right flex translate-y-1/2 items-start gap-1"> */}
        <div className="float-right flex translate-y-1/2">
          {showCart ? <StoreCart /> : null}
          {/* <button
            type="button"
            className="ml-auto pl-2.5 md:invisible md:hidden desktop:invisible desktop:hidden"
            aria-label="mobile-menu-btn"
            id="mobile-menu-btn"
            data-menu-open={menuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <div
              className="group right-0 mr-5 flex h-5 flex-col"
              aria-label="hamburger-button"
            >
              <div
                className={`my-[2.5px] w-[22px] bg-black pb-0.5 transition ease-in-out duration-200 transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <div
                className={`my-[2.5px] w-[22px] bg-black pb-0.5 transition ease-in-out duration-200 transform ${menuOpen ? "opacity-0" : ""}`}
              />
              <div
                className={`my-[2.5px] w-[22px] bg-black pb-0.5 transition ease-in-out duration-200 transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button> */}
          <button
  type="button"
  className="ml-auto pl-2.5 tablet:invisible tablet:hidden desktop:invisible desktop:hidden"
  aria-label="mobile-menu-btn"
  id="mobile-menu-btn"
  data-menu-open={menuOpen ? "true" : "false"}
  onClick={toggleMenu}
>
  <div
    className="group right-0 mr-5 flex h-5 flex-col"
    aria-label="hamburger-button"
  >
    <div
      className={`pb-0.5 w-[22px] my-[3px] bg-black transition ease-in-out transform duration-200 ${
        menuOpen
          ? "translate-y-2 rotate-45 group-hover:opacity-100"
          : ""
      }`}
    />

    <div
      className={`pb-0.5 w-[22px] my-[3px] bg-black transition ease-in-out transform duration-200 ${
        menuOpen ? "opacity-0" : ""
      }`}
    />

    <div
      className={`pb-0.5 w-[22px] my-[3px] bg-black transition ease-in-out transform duration-200 ${
        menuOpen
          ? "-translate-y-2 -rotate-45 group-hover:opacity-100"
          : ""
      }`}
    />
  </div>
</button>
        </div>
      </div>
    </header>
  );
}
