import type { Article } from "lib/shopify/types";

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <main
      role="main"
      id="mainContent"
      className="flex flex-1 grow justify-center uppercase"
    >
      <div className="mx-5 w-full max-w-5xl px-2.5 pb-8 md:mt-14 desktop:mt-14">
        <div className="flex flex-row font-bold max-md:flex-col">
          <h1 className="w-3/4 py-2 text-[18px] font-bold leading-[26px] tracking-wide max-md:w-full">
            {article.title}
          </h1>
        </div>

        {article.image?.url ? (
          <div className="relative mt-5 w-full overflow-hidden">
            <img
              src={article.image.url}
              alt={article.image.altText || article.title}
              className="block h-auto w-full object-cover"
            />
          </div>
        ) : null}

        {article.contentHtml ? (
          <div
            className="prose prose-sm mt-6 max-w-none normal-case"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        ) : article.excerpt ? (
          <p className="mt-6 normal-case text-sm leading-relaxed">
            {article.excerpt}
          </p>
        ) : null}
      </div>
    </main>
  );
}
