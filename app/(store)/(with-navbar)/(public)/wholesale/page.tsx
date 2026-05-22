import Footer from "components/layout/footer";
import Image from "next/image";

export const metadata = {
  title: "Wholesale Registration",
  description:
    "Apply for wholesale access to April Coffee. Coffee shops, restaurants, offices, and hotels worldwide.",
};

export default function WholesalePage() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-black">
        {/* <div className="absolute right-10 top-10 opacity-20">
          <Image
            src="/images/unnamed.jpg"
            alt=""
            width={140}
            height={140}
            className="object-cover"
            priority
          />
        </div> */}

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Wholesale Registration
            </p>

            <h1 className="mb-8 text-5xl font-light leading-tight md:text-6xl">
              Grow Together
            </h1>

            <div className="space-y-6 text-[15px] leading-8 text-neutral-700">
              <p>
                With April the idea is to grow together with our clients. We
                supply coffee shops, restaurants, offices and hotels around the
                world with roasted coffee.
              </p>

              <p>
                April Coffee is a Specialty Coffee Roastery based in Denmark
                with the vision to progress the way we roast and be a part of
                defining the modern coffee roastery. We are aiming to be one of
                the best in the world.
              </p>

              <p>
                Sourcing, roasting and then shipping out coffee worldwide. Fresh
                roasted, specialty grade coffee. Sustainably sourced coffee from
                around the world, roasted to perfection.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[500px] overflow-hidden border border-black">
            <Image
              src="/images/dsc09550-1646922963174.webp"
              alt="April Coffee roastery and coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Local Solutions */}
      <section className="border-b border-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          {/* Image */}
          <div className="relative order-2 min-h-[500px] overflow-hidden border border-black lg:order-1">
            <Image
              src="/images/Risteri_3_8a4749ea-5e58-4505-a746-d0d7b1775f73.webp"
              alt="Roastery"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Local Solutions
            </p>

            <h2 className="mb-8 text-4xl font-light md:text-5xl">
              Sustainable Delivery
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-neutral-700">
              <p>
                If you are based in Copenhagen, we offer a sustainable and
                personalized solution.
              </p>

              <p>
                You can get our coffee delivered in re-usable 2kg tins, with a
                custom branded label for your company.
              </p>

              <p>
                The coffee will be delivered straight from the roastery to you.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-2xl font-light">Wholesale Platform</h3>

              <p className="mb-8 max-w-xl text-[15px] leading-8 text-neutral-700">
                To make the ordering process the easiest possible, we have a
                wholesale platform dedicated to our B2B customers.
              </p>

              <p className="mb-10 max-w-xl text-[15px] leading-8 text-neutral-700">
                To request access to the platform, contact us through by
                clicking the button below.
              </p>

              <button className="border border-black px-10 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Registration Form
            </p>

            <h2 className="mb-6 text-4xl font-light md:text-5xl">
              Apply for Wholesale
            </h2>

            <p className="mx-auto max-w-2xl text-[15px] leading-8 text-neutral-700">
              You can also fill the form below and we will contact you when we
              receive your application.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  First Name
                </label>

                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent px-0 py-4 outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  Last Name
                </label>

                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent px-0 py-4 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full border-b border-black bg-transparent px-0 py-4 outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  Company
                </label>

                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent px-0 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                Business Type
              </label>

              <input
                type="text"
                placeholder="Coffee Shop / Restaurant / Office / Hotel"
                className="w-full border-b border-black bg-transparent px-0 py-4 outline-none"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                Message
              </label>

              <textarea
                rows={6}
                className="w-full border border-black bg-transparent p-4 outline-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="border border-black px-12 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
