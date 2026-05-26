// import type { AdviceArticleDetail } from "lib/advice-article";

// export function ArticleDetail({ article }: { article: AdviceArticleDetail }) {
//   return (
//     <main
//       role="main"
//       id="mainContent"
//       className="flex flex-1 grow justify-center uppercase"
//     >
//       <div className="mx-5 w-full max-w-5xl px-2.5 pb-8 md:mt-14 desktop:mt-14">
//         <div className="flex flex-row font-bold max-md:flex-col">
//           <h1 className="w-3/4 py-2 text-[18px] font-bold leading-[26px] tracking-wide max-md:w-full">
//             {article.title}
//           </h1>
//         </div>

//         {article.youtubeVideoId ? (
//           <div className="relative mt-5 aspect-video w-full overflow-hidden">
//             <iframe
//               title={article.title}
//               src={`https://www.youtube.com/embed/${article.youtubeVideoId}`}
//               className="absolute inset-0 h-full w-full"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//         ) : null}

//         {article.image?.url ? (
//           <div className="relative mt-5 w-full overflow-hidden">
//             <img
//               src={article.image.url}
//               alt={article.image.altText || article.title}
//               className="block h-auto w-full object-cover"
//             />
//           </div>
//         ) : null}

//         {article.galleryImages && article.galleryImages.length > 1
//           ? article.galleryImages.slice(1).map((image) => (
//               <div
//                 key={image.url}
//                 className="relative mt-5 w-full overflow-hidden"
//               >
//                 <img
//                   src={image.url}
//                   alt=""
//                   srcSet={image.srcSet}
//                   sizes="(min-width: 768px) 800px, 100vw"
//                   className="block h-auto w-full object-cover"
//                 />
//               </div>
//             ))
//           : null}

//         {article.contentHtml ? (
//           <div
//             className="prose prose-sm mt-6 max-w-none normal-case"
//             dangerouslySetInnerHTML={{ __html: article.contentHtml }}
//           />
//         ) : article.excerpt ? (
//           <p className="mt-6 normal-case text-sm leading-relaxed">
//             {article.excerpt}
//           </p>
//         ) : null}
//       </div>
//     </main>
//   );
// }

import type { AdviceArticleDetail } from "lib/advice-article";
import Image from "next/image";

export function ArticleDetail({
  article,
}: {
  article: AdviceArticleDetail;
}) {
  const allImages = [
    ...(article.image ? [article.image] : []),
    ...(article.galleryImages || []),
  ];

  const editorialImages = allImages.slice(0, 6);

  const productImages = allImages.slice(6);

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
          {/* HEADER */}
          <div className="flex flex-row font-bold phone:flex-col">
            <h1
              aria-label="advice-item-title"
              className="w-3/4 py-2 text-md phone:w-full"
            >
              {article.title}
            </h1>

            <div className="w-1/4 whitespace-pre text-sm phone:w-auto phone:text-xs tablet:w-auto">
              {article.excerpt ? (
                <p className="normal-case">
                  {article.excerpt}
                </p>
              ) : null}
            </div>
          </div>

          {/* VIDEO */}
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

          {/* TOP EDITORIAL GRID */}
          {editorialImages.length ? (
            <div className="mt-2.5 grid grid-cols-3 gap-[10px] px-2.5 phone:grid-cols-1">
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

          {/* PRODUCT GRID */}
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

          {/* OPTIONAL CONTENT */}
          {article.contentHtml ? (
            <div
              className="mt-10 normal-case"
              dangerouslySetInnerHTML={{
                __html: article.contentHtml,
              }}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
}