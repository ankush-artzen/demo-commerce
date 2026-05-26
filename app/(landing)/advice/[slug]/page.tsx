import { getAdviceDetail } from "lib/get-advice-detail";
import { notFound } from "next/navigation";
import { ArticleDetail } from "../../../../components/advice/article-detail";
import Footer from "../../../../components/store/footer";
import Header from "../../../../components/store/header";

export default async function AdviceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getAdviceDetail(slug);

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
