"use client";

import Image from "next/image";
import Link from "next/link";
import type { LandingLink } from "lib/landing-types";
import { useEffect, useState } from "react";

const defaultNavItems: LandingLink[] = [
  { label: "SUMMER 2026 RANGE", href: "/range/summer-2026", external: false },
  { label: "Shops", href: "/shops", external: false },
  { label: "Web Shop", href: "/collections/all", external: false },
  { label: "Advice", href: "/advice", external: false },
  {
    label: "Manor Place",
    href: "https://manorplace.com",
    external: true,
  },
];

const mobileLinkClass =
  "block py-2 text-[14px] font-bold leading-[1.125rem] no-underline text-black";

function menuItemTestId(label: string) {
  return `menu-item-${label.toLowerCase()}`;
}

type HeaderProps = {
  landing?: boolean;
  navItems?: LandingLink[];
};

export default function Header({
  landing = false,
  navItems = defaultNavItems,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuElevated, setMenuElevated] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMenuElevated(true);
    }
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleMenuTransitionEnd(
    event: React.TransitionEvent<HTMLElement>,
  ) {
    if (event.propertyName !== "transform" || menuOpen) {
      return;
    }
    setMenuElevated(false);
  }

  return (
    <>
      <header
        aria-label="header"
        className={`flex min-h-24 justify-center uppercase phone:min-h-20 ${
          landing
            ? "md:invisible md:hidden desktop:invisible desktop:hidden"
            : ""
        } ${menuElevated ? "relative z-30 bg-white" : ""}`}
      >
        <div className="mx-5 mt-3.5 flex w-full max-w-5xl items-start phone:items-center phone:mt-1.5 phone:mb-2.5">
          <Link href="/" aria-label="black-april-logo">
            <div
              className="relative bottom-[2px] block h-[71px] w-44 transition-opacity duration-150 ease-in-out hover:opacity-25 sm:bottom-[12px]"
              aria-label="logo"
            >
              <Image
                src="/images/black-april-logo.png"
                alt="Black April Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
          <nav className="header-main-nav">
            {navItems.map((item) => (
              <h1 key={item.href} className="header-nav-item">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </h1>
            ))}
          </nav>
          <button
            type="button"
            className="relative z-10 ml-auto shrink-0 overflow-visible p-2 md:hidden"
            aria-label="mobile-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div
              className="relative flex h-[26px] w-[22px] flex-col justify-center overflow-visible"
              aria-label="hamburger-button"
            >
              <div
                className={`h-[2.5px] w-[22px] shrink-0 bg-black transition-all duration-200 ease-in-out ${
                  menuOpen
                    ? "translate-y-[2.5px] rotate-45"
                    : "my-[3px]"
                }`}
              />
              <div
                className={`h-[2.5px] w-[22px] shrink-0 bg-black transition-all duration-200 ease-in-out ${
                  menuOpen ? "opacity-0" : "my-[3px] opacity-100"
                }`}
              />
              <div
                className={`h-[2.5px] w-[22px] shrink-0 bg-black transition-all duration-200 ease-in-out ${
                  menuOpen
                    ? "-translate-y-[2.5px] -rotate-45"
                    : "my-[3px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <nav
        id="mobile-menu"
        aria-label="mobile-menu"
        aria-hidden={!menuOpen}
        onTransitionEnd={handleMenuTransitionEnd}
        className={`
          fixed
          top-20
          right-0
          bottom-0
          left-0
          z-20
          overflow-hidden
          bg-white
          px-5
          pt-4
          uppercase
          transition-transform
          duration-300
          ease-out
          will-change-transform
          md:hidden
          ${menuOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}
        `}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.href} data-testid={menuItemTestId(item.label)}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={mobileLinkClass}
                  onClick={closeMenu}
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
