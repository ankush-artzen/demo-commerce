import type { AdviceArticleDetail } from "lib/advice-article";
import Image from "next/image";

function articleImages(article: AdviceArticleDetail) {
  const heroUrl = article.image?.url;
  const gallery =
    article.galleryImages?.filter((img) => img.url !== heroUrl) ?? [];

  return [...(article.image ? [article.image] : []), ...gallery];
}

export function ArticleDetail({
  article,
}: {
  article: AdviceArticleDetail;
}) {
  const allImages = articleImages(article);
  const editorialImages = allImages.slice(0, 6);
  const productImages = allImages.slice(6);
  const sidebarText = article.info ?? article.excerpt;

  return (
    <main
      role="main"
      id="mainContent"
      className="flex flex-1 grow justify-center"
    >
      <div className="mx-5 flex w-full max-w-5xl">
        <div
          aria-label="advice-item-view"
          className="w-full pb-4 uppercase"
        >
          <div className="flex flex-row font-bold phone:flex-col">
            <h1
              aria-label="advice-item-title"
              className="w-3/4 py-2 text-md phone:w-full"
            >
              {article.title}
            </h1>

            <div className="w-1/4 whitespace-pre text-sm phone:w-auto phone:text-xs tablet:w-auto">
              {sidebarText ? (
                <p aria-label="advice-item-description">{sidebarText}</p>
              ) : null}
            </div>
          </div>

          {article.youtubeVideoId ? (
            <div
              aria-label="youtube-video-player"
              className="relative mt-5 mx-2.5 h-0 pb-[56.25%]"
            >
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                frameBorder="0"
                allowFullScreen
                title={article.title}
                src={`https://www.youtube.com/embed/${article.youtubeVideoId}?autoplay=0&rel=0&controls=0`}
              />
            </div>
          ) : null}

          {editorialImages.length ? (
            <div className="sm:mt-7.5 mt-2.5 grid grid-cols-3 gap-[20px] sm:px-2.5 px-0 phone:grid-cols-1">
              {editorialImages.map((image, index) => (
                <div key={image.url || index}>
                  <Image
                    src={image.url}
                    alt={article.title}
                    width={800}
                    height={1000}
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="block h-auto w-full"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          ) : null}

          {productImages.length ? (
            <div className="mt-14 grid grid-cols-3 gap-y-20 gap-x-10 px-8 phone:grid-cols-2 phone:gap-x-5 phone:gap-y-10">
              {productImages.map((image, index) => (
                <div
                  key={image.url || index}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={image.url}
                    alt={article.title}
                    width={420}
                    height={420}
                    sizes="(max-width:768px) 50vw, 33vw"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ) : null}

          {article.contentHtml ? (
            <div
              className="mt-10 normal-case"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
}
