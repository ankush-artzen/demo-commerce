import Footer from "../../../../components/store/footer";
import Header from "../../../../components/store/header";
import { ArticleDetail } from "../../../../components/advice/article-detail";
import { fetchShopifyArticleDetail } from "lib/shopify-advice";
import { notFound } from "next/navigation";

export default async function LookbookArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await fetchShopifyArticleDetail("lookbook", slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <ArticleDetail article={article} />
      <Footer />
    </>
  );
}
