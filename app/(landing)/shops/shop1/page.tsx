import Footer from "../../../../components/store/footer";
import Header from "../../../../components/store/header";

const galleryImages = [
  "/images/london-1.avif",
  "/images/london-2.avif",
  "/images/london-3.avif",
  "/images/london-4.avif",
  "/images/london-5.avif",
  "/images/london-6.avif",
  "/images/london-7.avif",
];

export default function Page() {
  return (
    <main className="bg-white text-black">
      <Header />

      <section className="mx-auto flex w-full  max-w-[1059px] px-5">
        <div className="w-full uppercase font-bold">
          {/* Top Info */}
          <div className="flex justify-between px-16 pb-6">
            {/* Title */}
            <div className="text-[20px] leading-none">London Shop</div>

            {/* Address */}
            <div className="text-[13px] leading-[18px] text-start">
              <p>26 Brewer Street</p>
              <p>London W1F 0SW</p>

              <p>020 7287 5048</p>
              <p>Mon-Sat: 11-7 Sun: 12-6</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="flex justify-center">
            <img
              src={galleryImages[0]}
              alt="London Shop"
              className="
                w-full
                max-w-[812px]
                object-contain
                duration-75
                ease-in
                hover:opacity-30
              "
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
