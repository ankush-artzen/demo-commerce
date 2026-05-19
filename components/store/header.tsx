// // "use client";

// // import Link from "next/link";

// // const navItems = [
// //   {
// //     label: "SUMMER 2026 RANGE",
// //     href: "/",
// //   },
// //   {
// //     label: "SUMMER 2026 LOOKBOOK",
// //     href: "/",
// //   },
// //   {
// //     label: "SHOPS",
// //     href: "/",
// //   },
// //   {
// //     label: "WEB SHOP",
// //     href: "/",
// //   },
// //   {
// //     label: "ADVICE",
// //     href: "/",
// //   },
// //   {
// //     label: "MANOR PLACE",
// //     href: "/",
// //   },
// // ];

// // export default function Header() {
// //   return (
// //     <header className="w-full bg-white">
// //       <div className="mx-auto flex w-full max-w-[1059px] items-center justify-between px-5   md:px-6">
// //         {" "}
// //         {/* Logo */}
// //         <Link href="/" className="block">
// //           <img
// //             src="/images/april_logo.webp"
// //             alt="Palace"
// //             className="w-[100px] md:w-[110px]"
// //           />
// //         </Link>
// //         {/* Desktop Nav */}
// //         {/* <nav className="hidden items-center gap-7 lg:flex">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.label}
// //               href={item.href}
// //               className="text-[14px] font-black uppercase tracking-tight transition hover:opacity-60"
// //             >
// //               {item.label}
// //             </Link>
// //           ))}
// //         </nav> */}
// //         <nav className="hidden items-center gap-5 lg:flex">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.label}
// //               href={item.href}
// //               className="text-[17px] font-black uppercase tracking-[-0.5px] uppercase transition-opacity duration-150 ease-in-out hover:opacity-25"
// //             >
// //               {item.label}
// //             </Link>
// //           ))}
// //         </nav>
// //         {/* Mobile Menu */}
// //         <button className="flex flex-col gap-[4px] lg:hidden">
// //           <span className="h-[2px] w-6 bg-black"></span>
// //           <span className="h-[2px] w-6 bg-black"></span>
// //           <span className="h-[2px] w-6 bg-black"></span>
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }

// "use client";

// import Link from "next/link";

// const navItems = [
//   {
//     label: "SUMMER 2026 RANGE",
//     href: "/",
//   },
//   {
//     label: "SUMMER 2026 LOOKBOOK",
//     href: "/",
//   },
//   {
//     label: "SHOPS",
//     href: "/",
//   },
//   {
//     label: "WEB SHOP",
//     href: "/",
//   },
//   {
//     label: "ADVICE",
//     href: "/",
//   },
//   {
//     label: "MANOR PLACE",
//     href: "/",
//   },
// ];

// export default function Header() {
//   return (
//     <header className="flex min-h-24 justify-center uppercase">
//       <div className="mx-5 mt-3.5 flex w-full max-w-[1030px] phone:items-center phone:mt-1.5 phone:mb-2.5">
//         {/* Logo */}
//         <Link href="/" aria-label="palace-logo" className="block">
//           <img
//             src="/images/april_logo.webp"
//             alt="Logo"
//             className="w-[110px] transition-opacity duration-150 ease-in-out hover:opacity-25"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="ml-auto hidden lg:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="ml-5 mt-3.5 font-bold text-[18px] leading-[28px] text-black-500 transition-opacity duration-150 ease-in-out hover:opacity-25" //   className="ml-5 mt-3.5  text-[16.5px] text-black font-bold transition-opacity duration-150 ease-in-out hover:opacity-25"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu */}
//         <button className="ml-auto pl-2.5 lg:hidden">
//           <div className="flex flex-col">
//             <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
//             <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
//             <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";

const navItems = [
  "SUMMER 2026 RANGE",
  "SUMMER 2026 LOOKBOOK",
  "SHOPS",
  "WEB SHOP",
  "ADVICE",
  "MANOR PLACE",
];

export default function Header() {
  return (
    // <header className="flex min-h-[92px] justify-center bg-white uppercase">
    //   <div className="mx-5 mt-[14px] flex w-full max-w-[1030px]">
    //     {/* Logo */}
    //     <Link
    //       href="/"
    //       aria-label="logo"
    //       className="block transition-opacity duration-150 ease-in-out hover:opacity-25"
    //     >
    //       <img
    //         src="/images/palace1.png"
    //         alt="Logo"
    //         className="w-[340px] pt-0"
    //       />
    //     </Link>

    //     {/* Desktop Navigation */}
    //     <nav className="ml-auto hidden lg:flex">
    //       {navItems.map((item) => (
    //         <Link
    //           key={item}
    //           href="/"
    //           className="
    //             nav-font
    //             ml-5
    //             mt-[14px]
    //             whitespace-nowrap
    //             text-[18px]
    //             leading-[28px]
    //             font-[700]
    //             tracking-[-0.6px]
    //             text-black
    //             transition-opacity
    //             duration-150
    //             ease-in-out
    //             hover:opacity-25
    //           "
    //         >
    //           {item}
    //         </Link>
    //       ))}
    //     </nav>

    //     {/* Mobile Menu */}
    //     <button className="ml-auto pl-2.5 lg:hidden">
    //       <div className="flex flex-col">
    //         <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
    //         <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
    //         <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
    //       </div>
    //     </button>
    //   </div>
    // </header>
    <header className="flex min-h-[92px] justify-center bg-white uppercase">
      <div className="mx-5 mt-[14px] flex w-full max-w-[1019px]">
        {/* Logo Wrapper */}
        <div className="-mt-4 flex items-start">
          <Link
            href="/"
            aria-label="logo"
            className="block transition-opacity duration-150 ease-in-out hover:opacity-25"
          >
            <img
              src="/images/april_logo.webp"
              alt="Logo"
              className="w-[110px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="ml-auto hidden lg:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="
             nav-font
             ml-3.5
             mt-[14px]
             font-bold
             whitespace-nowrap
             text-[18px]
             leading-[28px]
             tracking-[-0.6px]
             text-black
             transition-opacity
             duration-150
             ease-in-out
             hover:opacity-25
           "
            >
              {item}
            </Link>
          ))}
        </nav> */}
        <nav className="ml-auto hidden lg:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="ml-5 mt-3.5 whitespace-nowrap font-sans text-lg font-bold leading-7 tracking-[-0.6px] text-black transition-opacity duration-150 ease-in-out hover:opacity-25"
            >
              {item}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu */}
        <button className="ml-auto pl-2.5 lg:hidden">
          <div className="flex flex-col">
            <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
            <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
            <span className="my-[2.5px] h-[2px] w-[22px] bg-black"></span>
          </div>
        </button>
      </div>
    </header>
  );
}
