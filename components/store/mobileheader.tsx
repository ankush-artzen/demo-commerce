"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "SUMMER 2026 RANGE", href: "/range/summer-2026" },
  { label: "PALACE SHANGHAI", href: "/advice/palace-shanghai" },
  { label: "Shops", href: "/shops" },
  { label: "Web Shop", href: "/collections/all" },
  { label: "Advice", href: "/advice" },
  {
    label: "Manor Place",
    href: "https://manorplace.com",
    external: true,
  },
] as const;

const mobileLinkClass =
  "block py-2 text-sm font-bold leading-[1.125rem] no-underline";

function PalaceLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.7 31.9">
      <g>
        <polygon points="138.4,7.2 141.7,0.6 123.5,0.6 108,31.5 126.6,31.5 129.9,24.9 119.3,24.9 122.4,18.8 132,18.8 135.1,12.4 125.5,12.4 128.2,7.2" />
        <path d="M111.9,21.3l1.2-2.3h-7.8c-0.7,1.5-1.4,2.7-1.9,3.7c-0.6,1-1.1,1.7-1.5,2.3c-0.5,0.6-0.9,1-1.4,1.2c-0.4,0.2-0.9,0.4-1.4,0.4c-0.6,0-1-0.2-1.2-0.5c-0.2-0.3-0.2-0.9,0-1.7c0.2-0.8,0.6-1.9,1.3-3.3c0.6-1.4,1.5-3.1,2.5-5.2c1-2.1,1.9-3.8,2.7-5.2c0.7-1.4,1.4-2.5,2-3.3c0.6-0.8,1.1-1.4,1.7-1.7c0.5-0.3,1.1-0.5,1.7-0.5c0.8,0,1.2,0.3,1.2,0.9c0,0.6-0.4,1.8-1.3,3.6l-0.9,1.7h7.8l1-1.9c0.8-1.5,1.2-2.8,1.5-4c0.2-1.2,0.2-2.2-0.2-3.1c-0.4-0.9-1.1-1.5-2.1-2c-1-0.5-2.5-0.7-4.3-0.7c-2.1,0-4,0.3-5.6,0.8c-1.7,0.6-3.3,1.5-4.8,2.7c-1.5,1.3-2.9,2.9-4.3,5c-1.4,2-2.8,4.5-4.3,7.5c-1.4,2.9-2.5,5.3-3.2,7.4c-0.7,2-1,3.7-0.8,5c0.2,1.3,0.8,2.2,2,2.7c1.2,0.5,2.9,0.8,5.1,0.8c1.3,0,2.6-0.1,4-0.4c1.4-0.3,2.7-0.8,4.1-1.6c1.3-0.8,2.7-1.9,3.9-3.3C109.6,25.3,110.8,23.5,111.9,21.3z" />
        <path d="M84.3,0.6L62.9,29.5l2.3-4.6h-9.9L67.5,0.6h-8L44,31.5h17.5h0.5h8l3.5-5.4h6.4l-1.9,5.4h8.6l8-30.9H84.3z M81.9,20h-4.5l8.8-13.1h0.1L81.9,20z" />
        <path d="M40.7,0.6L17.8,31.5h8.4l3.5-5.4h6.4l-1.9,5.4h8.6l8-30.9H40.7z M38.3,20h-4.5l8.8-13.1h0.1L38.3,20z" />
        <path d="M31.7,10.1c0.7-1.4,1.1-2.6,1.4-3.8c0.2-1.2,0.2-2.2-0.1-3c-0.3-0.9-0.9-1.5-1.8-2c-0.9-0.5-2.1-0.7-3.6-0.7H15.5L0,31.5h8l5.9-11.8h2.8c3.3,0,6.2-0.8,8.7-2.4C28,15.7,30.1,13.3,31.7,10.1z M23.4,10.2c-0.7,1.3-1.4,2.2-2.2,2.9c-0.8,0.6-1.8,0.9-2.8,0.9h-1.5l3.8-7.5h1.5C24.2,6.4,24.6,7.6,23.4,10.2z" />
      </g>
    </svg>
  );
}

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* MOBILE HEADER ONLY */}
      <header
        aria-label="mobile-header"
        className="flex min-h-20 justify-center uppercase md:hidden desktop:hidden"
      >
        <div className="mx-5 mt-2 flex w-full items-center">
          {/* LOGO */}
          <Link href="/" aria-label="palace-logo">
            <div
              className="block w-32 transition-opacity duration-150 ease-in-out hover:opacity-25"
              aria-label="logo"
            >
              <PalaceLogo />
            </div>
          </Link>

          {/* HAMBURGER */}
          <button
            type="button"
            className="ml-auto"
            aria-label="mobile-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="flex flex-col h-5 justify-between">
              <span className="block h-[2px] w-[22px] bg-black" />
              <span className="block h-[2px] w-[22px] bg-black" />
              <span className="block h-[2px] w-[22px] bg-black" />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <nav
        aria-label="mobile-menu"
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-white px-5 pt-24 uppercase transition-transform duration-300 md:hidden desktop:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              {"external" in item && item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
