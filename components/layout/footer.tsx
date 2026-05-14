// import Link from "next/link";

// import FooterMenu from "components/layout/footer-menu";
// import LogoSquare from "components/logo-square";
// import { getMenu } from "lib/shopify";
// import { Suspense } from "react";

// const { COMPANY_NAME, SITE_NAME } = process.env;

// export default async function Footer() {
//   const currentYear = new Date().getFullYear();
//   const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
//   const skeleton =
//     "w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700";
//   const menu = await getMenu("next-js-frontend-footer-menu");
//   const copyrightName = COMPANY_NAME || SITE_NAME || "";

//   return (
//     <footer className="text-sm text-neutral-500 dark:text-neutral-400">
//       <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
//         <div>
//           <Link
//             className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
//             href="/"
//           >
//             <LogoSquare size="sm" />
//             <span className="uppercase">{SITE_NAME}</span>
//           </Link>
//         </div>
//         <Suspense
//           fallback={
//             <div className="flex h-[188px] w-[200px] flex-col gap-2">
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//             </div>
//           }
//         >
//           <FooterMenu menu={menu} />
//         </Suspense>
//         {/* <div className="md:ml-auto">
//           <a
//             className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
//             aria-label="Deploy on Vercel"
//             href="https://vercel.com/templates/next.js/nextjs-commerce"
//           >
//             <span className="px-3">▲</span>
//             <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
//             <span className="px-3">Deploy</span>
//           </a>
//         </div> */}
//       </div>
//       <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
//         {/* <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
//           <p>
//             &copy; {copyrightDate} {copyrightName}
//             {copyrightName.length && !copyrightName.endsWith(".")
//               ? "."
//               : ""}{" "}
//             All rights reserved.
//           </p>
//           <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
//           <p>
//             <a href="https://github.com/vercel/commerce">View the source</a>
//           </p>
//           <p className="md:ml-auto">
//             <a href="https://vercel.com" className="text-black dark:text-white">
//               Created by ▲ Vercel
//             </a>
//           </p>
//         </div> */}
//       </div>
//     </footer>
//   );
// }
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
const { COMPANY_NAME } = process.env;
const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/search" },
      { label: "New Arrivals", href: "/search?q=the" },
      { label: "Best Sellers", href: "/search?q=t" },
      { label: "Sale", href: "/search?q=the" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/" },
      { label: "Contact", href: "/" },
      { label: "FAQs", href: "/" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Track Order", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300">
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
              {COMPANY_NAME}
            </h2>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500 dark:text-neutral-400">
            Discover premium products with modern style, trusted quality, and
            fast delivery. Built for a smooth shopping experience.
          </p>

          {/* Contact */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>245 Market Street, San Francisco, CA 94103, USA</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>+1 (415) 555-0123</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>info@commerceapp.com</span>
            </div>
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              {section.title}
            </h3>

            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 lg:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Join our newsletter
            </h3>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Get updates about new collections and exclusive offers.
            </p>
          </div>

          <form className="flex w-full max-w-md overflow-hidden rounded-full border border-neutral-300 dark:border-neutral-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-5 py-3 text-sm outline-none"
            />

            <button
              type="submit"
              className="bg-black px-6 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500 md:flex-row dark:text-neutral-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-black dark:hover:text-white">
              Privacy
            </Link>

            <Link href="/" className="hover:text-black dark:hover:text-white">
              Terms
            </Link>

            <Link href="/" className="hover:text-black dark:hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
