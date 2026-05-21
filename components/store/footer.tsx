// const footerLinks = [
//   "INSTAGRAM",
//   "TIKTOK",
//   "APPLE MUSIC",
//   "YOUTUBE",
//   "WECHAT",
//   "WEIBO",
//   "MAILING LIST",
//   "BORING STUFF",
// ];

// export default function Footer() {
//   return (
//     // <footer className="pb-10 pt-6">
//     //   <div className="mx-auto max-w-[1200px] px-6">
//     //     <div className="grid grid-cols-2 gap-y-4 text-center md:flex md:flex-wrap md:justify-center md:gap-8">
//     //       {footerLinks.map((item) => (
//     //         <Link
//     //           key={item}
//     //           href="/"
//     //           className="text-[13px] font-black uppercase hover:underline"
//     //         >
//     //           {item}
//     //         </Link>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </footer>
//     <footer className="w-full mt-0 px-6 pb-7 sm:mt-28 md:mt-20">
//       <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center uppercase md:flex md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-3">
//         {footerLinks.map((item, index) => (
//           <button
//             key={index}
//             className="
//           whitespace-nowrap
//           font-bold
//           text-[9px]
//           tracking-[-0.05em]
//           transition-opacity
//           duration-200
//           hover:opacity-50
//           sm:text-[10px]
//           md:text-[11.7px]
//           lg:text-[11.7px]
//         "
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </footer>
//   );
// }

// components/store/footer.tsx

import Link from "next/link";

const footerLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/palaceskateboards",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@palaceskateboards",
  },
  {
    label: "Apple Music",
    href: "https://apple.co/palace",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCADVAEBl9ZZ9gFOwURmm2kA",
  },
  {
    label: "WeChat",
    href: "/wechat",
  },
  {
    label: "Weibo",
    href: "https://weibo.com/u/7322458413",
  },
  {
    label: "Mailing List",
    href: "https://mailing-list.palaceskateboards.com",
  },
  {
    label: "Boring Stuff",
    href: "https://boring.palaceskateboards.com/",
  },
];

export default function Footer() {
  return (
    <footer
      aria-label="footer"
      className="
        mx-5
        flex
        justify-center
        pt-4
        uppercase
        phone:block
        phone:max-h-44
        phone:pt-6
      "
    >
      <div className="w-full max-w-5xl pb-8 phone:block phone:pb-2">
        <ul
          className="
            flex
            justify-center
            text-sm
            font-bold
            phone:grid
            phone:grid-cols-2
            phone:text-xs
          "
        >
          {footerLinks.map((item, index) => (
            <li
              key={index}
              className="
                flex
                justify-center
                px-3
                hover:underline
                phone:w-full
                phone:p-0
                phone:pb-3
              "
            >
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export function Footer2() {
  return (
    <footer
      aria-label="footer"
      className="
        pt-72
        mt-18
        mx-5
        flex
        justify-center
        uppercase
        phone:block
        phone:max-h-44
        sm:pt-4
        sm:mt-7
      "
    >
      <div className="w-full max-w-5xl pb-8 phone:block sm:pb-8">
        <ul
          className="
            flex
            justify-center
            text-sm
            font-bold
            phone:grid
            phone:grid-cols-2
            phone:text-xs
          "
        >
          {footerLinks.map((item, index) => (
            <li
              key={index}
              className="
                flex
                justify-center
                px-3
                hover:underline
                phone:w-full
                phone:p-0
                phone:pb-3
              "
            >
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
