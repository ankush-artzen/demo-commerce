import Footer from "../../../components/store/footer";
import Header from "../../../components/store/header";
import { AdviceFeedGrid } from "../../../components/advice/advice-feed-grid";
import { getAdviceFeed } from "lib/get-advice-feed";

export default async function AdvicePage() {
  const { adviceFeed, adviceFeedMetadata } = await getAdviceFeed();

  return (
    <>
      <Header />

      <main
        role="main"
        id="mainContent"
        className="flex flex-1 grow justify-center"
      >
        <div className="mx-5 flex w-full max-w-5xl">
          <div className="block w-full">
            <AdviceFeedGrid
              initialFeed={adviceFeed}
              initialMetadata={adviceFeedMetadata}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
