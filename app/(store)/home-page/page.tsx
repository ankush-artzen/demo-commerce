import Footer from "components/layout/footer";

export const metadata = {
  title: "Home page",
  description: "Custom landing content.",
};

export default function HomePageContent() {
  return (
    <>
      <div className="mx-auto max-w-(--breakpoint-2xl) space-y-6 px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Home page
        </h1>
        <p className="mb-6 text-white/90">
          Get 10% off your first purchase and exclusive deals!
        </p>
      </div>
      <Footer />
    </>
  );
}
