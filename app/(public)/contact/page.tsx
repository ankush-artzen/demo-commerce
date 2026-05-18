import Image from "next/image";
import Link from "next/link";

export default function InfoRecipesPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="border-b border-neutral-200 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/images/3-dots-2.svg"
              alt="Decorative"
              width={42}
              height={42}
            />

            <h1 className="text-5xl font-light tracking-tight">
              Info & Recipes
            </h1>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-neutral-700">
            On this page you can find information and brewing guides to all
            coffees that we are currently working with and that are available in
            our shop, along with information on the farms we are partnering
            with. We believe in diversifying the brewing approach to get the
            best out of each coffee.
          </p>
        </div>
      </section>

      {/* April Selection */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl font-light">April Selection Beans</h2>

            <p className="mt-4 text-neutral-600">Filter, Espresso & Limited</p>
          </div>

          {/* Before Brewing */}
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-medium">Before Brewing</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-2 text-lg font-medium">Resting</h4>

                  <p className="leading-7 text-neutral-700">
                    We recommend you let your beans rest for at least 14 days
                    before brewing. This is what we use in our stores and
                    roastery, as it offers a better flavor clarity and balance
                    in the cup.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-medium">Water</h4>

                  <p className="leading-7 text-neutral-700">
                    We use a reverse osmosis system, with a PPM usually between
                    25 and 50.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-medium">Particle Size</h4>

                  <p className="leading-7 text-neutral-700">
                    All filter recipes are based on a Mahlkonig EK43 and the
                    espresso recipes on a Mahlkonig E80.
                  </p>
                </div>
              </div>
            </div>

            {/* Filter Brew */}
            <div className="rounded-3xl border border-neutral-200 p-8">
              <h3 className="mb-6 text-2xl font-medium">Brew Filter</h3>

              <p className="mb-6 text-neutral-600">
                Base recipe with the April Hybrid Brewer
              </p>

              <div className="space-y-3 text-neutral-700">
                <p>
                  <strong>Dose:</strong> 14g
                </p>

                <p>
                  <strong>Water:</strong> 240g
                </p>

                <p>
                  <strong>Pour 1:</strong> 00:00 - 00:10 — 40g in a circle
                </p>

                <p>
                  <strong>Pour 2:</strong> 00:40 - 00:50 — 100g divided into 60g
                  circle and 40g center
                </p>

                <p>
                  <strong>Pour 3:</strong> 01:20 - 01:30 — 100g divided into 60g
                  circle and 40g center
                </p>

                <p>
                  <strong>Total Brew Time:</strong> no longer than 3:00 min
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-medium">Pouring Structure</h4>

                <ul className="space-y-2 text-neutral-700">
                  <li>1. 40g Circle Pour - 60g Center Pour (0:00)</li>

                  <li>2. 40g Circle Pour - 60g Center Pour (0:30)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Espresso */}
          <div className="mt-20 rounded-3xl border border-neutral-200 p-10">
            <h3 className="mb-6 text-3xl font-light">Brew Espresso</h3>

            <p className="mb-8 text-neutral-600">
              Base recipe based on a Modbar (6 bar)
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  Dose (In)
                </p>

                <p className="mt-2 text-lg">
                  19g for April Selection, 18g for SP
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  Dose (Out)
                </p>

                <p className="mt-2 text-lg">
                  56–58g for April Selection, 48–50g for SP
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  Brew Time
                </p>

                <p className="mt-2 text-lg">20–25s</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  Grind Setting
                </p>

                <p className="mt-2 text-lg">0.5 – 0.7</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  Target TDS
                </p>

                <p className="mt-2 text-lg">6.5 – 8</p>
              </div>
            </div>
          </div>

          {/* Coffee Lists */}
          <div className="mt-24 grid gap-16 lg:grid-cols-2">
            <div>
              <Image
                src="/images/fil-esp.jpg"
                alt="Filter and Espresso Coffees"
                width={900}
                height={700}
                className="rounded-3xl object-cover"
              />

              <h3 className="mt-8 mb-6 text-2xl font-medium">
                Filter & Espresso Coffees
              </h3>

              <ul className="space-y-3 text-neutral-700">
                <li>Costa Rica - Volcan Azul</li>
                <li>Bolivia - Finca Alasitas</li>
                <li>Ethiopia - Regassa</li>
                <li>Ethiopia - Tadesse</li>
                <li>Guatemala - El Socorro</li>
                <li>Kenya - Kamavindi</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/limited.jpg"
                alt="Limited Coffees"
                width={900}
                height={700}
                className="rounded-3xl object-cover"
              />

              <h3 className="mt-8 mb-6 text-2xl font-medium">
                Limited Coffees
              </h3>

              <ul className="space-y-3 text-neutral-700">
                <li>Guatemala - El Socorro</li>
                <li>Guatemala - El Morito</li>
                <li>Panama - Esmeralda</li>
                <li>Panama - Finca Deborah</li>
                <li>Bolivia - Finca Alasitas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Profile */}
      <section className="bg-neutral-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-light">
            Sustainable Profile & Organic Coffee Beans
          </h2>

          <p className="mt-8 max-w-4xl leading-8 text-neutral-700">
            For the coffees in our House Coffee line, we aimed to create a
            standard no matter the origin. These coffees are made to be used on
            a large variety of equipment, and you should adjust the recipes so
            they suit your taste and brewing goals.
          </p>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8">
              <h3 className="mb-6 text-2xl font-medium">Brew Filter</h3>

              <div className="space-y-3 text-neutral-700">
                <p>
                  <strong>Dose:</strong> 13g
                </p>

                <p>
                  <strong>Water:</strong> 200g at 94°C
                </p>

                <p>
                  <strong>Grind Size:</strong> 9
                </p>

                <p>
                  <strong>Brew Time:</strong> 2–3 min
                </p>

                <p>
                  <strong>Target TDS:</strong> 1.25 – 1.35
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-medium">Pouring Structure</h4>

                <ul className="space-y-2 text-neutral-700">
                  <li>1. 60g Circle Pour - 40g Center Pour (0:00)</li>

                  <li>2. 60g Circle Pour - 40g Center Pour (0:30)</li>

                  <li>Alternative: 100g Circle Pour</li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <h3 className="mb-6 text-2xl font-medium">Brew Espresso</h3>

              <div className="space-y-3 text-neutral-700">
                <p>
                  <strong>Dose:</strong> 18g
                </p>

                <p>
                  <strong>Output:</strong> 48g
                </p>

                <p>
                  <strong>Grind Setting:</strong> 4.2
                </p>

                <p>
                  <strong>Brew Time:</strong> 23–25s
                </p>

                <p>
                  <strong>Target TDS:</strong> 6.5 – 8
                </p>
              </div>
            </div>
          </div>

          {/* Lots */}
          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <div>
              <Image
                src="/images/sp-lots.jpg"
                alt="SP Lots"
                width={900}
                height={700}
                className="rounded-3xl"
              />

              <ul className="mt-8 space-y-3 text-neutral-700">
                <li>SP Costa Rica</li>
                <li>SP Guatemala</li>
                <li>SP Kenya</li>
                <li>SP Colombia</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/organic-lots.jpg"
                alt="Organic Lots"
                width={900}
                height={700}
                className="rounded-3xl"
              />

              <ul className="mt-8 space-y-3 text-neutral-700">
                <li>Organic Ethiopia - Kayon Mountain</li>
                <li>Organic Peru - Milton Fernandez</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Drip Packs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Image
              src="/images/drip-pack-boxes.jpg"
              alt="Drip Packs"
              width={900}
              height={700}
              className="rounded-3xl"
            />

            <div>
              <h2 className="text-4xl font-light">Drip Packs</h2>

              <p className="mt-6 text-lg leading-8 text-neutral-700">
                Find the brew guides for our Drip Packs below.
              </p>

              <Link
                href="/recipes/drip-packs"
                className="mt-8 inline-flex border border-black px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-black hover:text-white"
              >
                View Brew Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capsules */}
      <section className="border-t border-neutral-200 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-light">Capsules</h2>

              <p className="mt-6 text-lg leading-8 text-neutral-700">
                Find the brew guides for our Capsules below.
              </p>

              <Link
                href="/recipes/capsules"
                className="mt-8 inline-flex border border-black px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-black hover:text-white"
              >
                View Brew Guides
              </Link>
            </div>

            <Image
              src="/images/all-capsules.jpg"
              alt="Capsules"
              width={900}
              height={700}
              className="rounded-3xl"
            />
          </div>

          <div className="mt-24 flex justify-center">
            <Image
              src="/images/3-dots-2.svg"
              alt="Decorative"
              width={42}
              height={42}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
