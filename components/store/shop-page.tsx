// components/store/ShopPage.tsx

import Footer from "./footer";
import Header from "./header";

interface ShopPageProps {
  name: string;
  image: string;
  address: string[];
  phone?: string;
  timing?: string;
}

export default function ShopPage({
  name,
  image,
  address,
  phone,
  timing,
}: ShopPageProps) {
  return (
    <main className="bg-white text-black">
      <Header />

      <section className="mx-auto flex w-full max-w-[1059px] px-5">
        <div className="w-full font-bold uppercase">
          <div className="flex justify-between px-16 pb-6 phone:px-0">
            {/* Shop Name */}
            <div className="text-xl phone:text-md">{name}</div>

            {/* Address + Details */}
            <div className="text-[11px] font-bold phone:text-xs">
              <div>
                {address.map((line, index) => (
                  <p key={index}>{line || <span>&nbsp;</span>}</p>
                ))}
              </div>

              {phone && <p>{phone}</p>}

              {timing && <div>{timing}</div>}
            </div>
          </div>
          {/* Top Info */}
          {/* <div className="flex justify-between px-16 pb-6">
            {/* Shop Name */}
          {/* <div className="text-[20px] leading-none">{name}</div> */}

          {/* Address */}
          {/* <div className="text-start text-[13px] leading-[18px]">
              {address.map((line, index) => (
                <p key={index}>{line || <span>&nbsp;</span>}</p>
              ))}
            </div>
          </div> */}

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt={name}
              className="
                w-full
                max-w-[812px]"
              // object-contain
              // duration-75
              // ease-in
              // hover:opacity-30
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
