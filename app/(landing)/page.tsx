"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    image: "/images/red.png",
    title: "SHOPS",
    link: "/shops",
  },
  {
    image: "/images/white.png",
    title: "WEB SHOP",
    link: "/shops",
  },
  {
    image: "/images/blue.png",
    title: "SUMMER 2026 RANGE",
    link: "/search/hydrogen",
  },
  {
    image: "/images/black.png",
    title: "ADVICE",
    link: "#",
  },
  {
    image: "/images/green.png",
    title: "MANOR PLACE",
    link: "#",
  },
];

const footerLinks = [
  "INSTAGRAM",
  "TIKTOK",
  "APPLE MUSIC",
  "YOUTUBE",
  "WECHAT",
  "WEIBO",
  "MAILING LIST",
  "BORING STUFF",
];

export default function PalaceLandingPage() {
  return (
    <>
      <div className="flex flex-1 flex-col mb-0  sm:mb-10 overflow-hidden">
        <div className="flex flex-1 items-center justify-center px-4 py-10 md:py-20">
          <div className="flex w-full flex-col items-center gap-4 px-2 md:flex-row md:items-center md:justify-center md:gap-0 md:px-4 lg:px-6">
            {logos.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center"
              >
                {/* <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={220}
                  priority
                  className="h-auto w-[120px] object-contain transition-opacity duration-300 select-none group-hover:opacity-20 sm:w-[140px] md:w-[180px] lg:w-[210px] xl:w-[230px]"
                /> */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  priority
                  className="
    h-auto
    w-[110px]
    object-contain
    transition-opacity
    duration-300
    select-none
    group-hover:opacity-20

    sm:w-[130px]
    md:w-[165px]
    lg:w-[190px]
    xl:w-[205px]
  "
                />

                <span className="mt-2 block text-center text-[11px] leading-none font-black tracking-[-0.05em] text-black uppercase md:hidden">
                  {item.title}
                </span>

                <div className="pointer-events-none absolute inset-0 hidden items-center justify-center px-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <span className="text-center text-[16px] leading-none font-black tracking-[-0.05em] text-black uppercase lg:text-[18px] xl:text-[20px]">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <footer className="mt-auto w-full px-6 pb-8 md:pb-10"> */}
      <footer className="w-full mt:0 sm:mt-28 px-6 pb-7 md:pb-7 md:absolute md:bottom-0 md:left-0">
        {/* <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-[9px] font-black tracking-[-0.04em] uppercase sm:text-[10px] md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-6 md:gap-y-3 md:text-[11px] lg:text-[12px]"> */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-[9px] font-bold tracking-[-0.05em] uppercase sm:text-[7px] md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-3 md:text-[11.7px] lg:text-[11.7px]">
          {" "}
          {footerLinks.map((item, index) => (
            <button
              key={index}
              className="whitespace-nowrap transition-opacity duration-200 hover:opacity-50"
            >
              {item}
            </button>
          ))}
        </div>
      </footer>
    </>
  );
}
