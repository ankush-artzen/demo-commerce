import { collectionCategories } from "lib/store/collection-categories";
import Link from "next/link";

const menuLinkClass =
  "block text-sm font-bold leading-[18px] no-underline transition duration-150 ease-in-out hover:text-amber-500 phone:py-2 text-black";

export default function CategoryNav({ menuOpen = false }: { menuOpen?: boolean }) {
  return (
    <nav
      id="category-menu"
      aria-label="category-menu"
      className={`float-left mr-2.5 mt-5 box-content inline-block w-[12%] text-right uppercase phone:fixed phone:z-10 phone:float-none phone:overflow-y-auto phone:mt-0 phone:h-[calc(100vh-64px)] phone:w-full phone:bg-white phone:px-5 phone:text-left phone:text-lg duration-300 ease-out ${
        menuOpen ? "phone:translate-x-0" : "phone:translate-x-full"
      }`}
    >
      <ul className="mb-2.5">
        {collectionCategories.map((item) => (
          <li key={item.handle} aria-label={`menu-item-${item.handle}`}>
            <Link href={`/collections/${item.handle}`} className={menuLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
        <li aria-label="menu-item-cart">
          <Link href="/cart" className={menuLinkClass}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
