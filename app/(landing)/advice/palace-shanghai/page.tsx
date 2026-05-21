// import Image from "next/image";
// import Footer from "../../../components/store/footer";
// import Header from "../../../components/store/header";

// const images = [
//   "/images/advice/advice-1.avif",
//   "/images/advice/advice-2.avif",
//   "/images/advice/advice-3.avif",
//   "/images/advice/advice-4.avif",
//   "/images/advice/advice-5.avif",
//   "/images/advice/advice-6.avif",
//   "/images/advice/advice-7.avif",
//   "/images/advice/advice-8.avif",
//   "/images/advice/advice-9.avif",
//   "/images/advice/advice-10.avif",

//   "/images/advice/advice-11.avif",
//   "/images/advice/advice-12.avif",
//   "/images/advice/advice-13.avif",
//   "/images/advice/advice-14.avif",
//   "/images/advice/advice-15.avif",
//   "/images/advice/advice-16.avif",
//   "/images/advice/advice-17.avif",
//   "/images/advice/advice-18.avif",
//   "/images/advice/advice-19.avif",
//   "/images/advice/advice-20.avif",
//   "/images/advice/advice-21.avif",
// ];

// export default function PalaceShanghaiPage() {
//   return (
//     <>
//       <Header />

//       {/* <main role="main" className="flex flex-1 grow justify-center uppercase">
//         <div className="mx-12 flex w-full max-w-5xl"> */}
//       <main role="main" className="flex flex-1 grow justify-center uppercase">
//         <div className="w-full max-w-5xl mx-auto px-2.5">
//           <div className="w-full pb-4">
//             {/* Heading */}
//             <div className="flex flex-row font-bold max-md:flex-col">
//               {/* <h1 className="w-3/4 py-2 text-md tracking-wide max-md:w-full">
//                 PALACE SHANGHAI
//               </h1> */}
//               <h1 className="w-3/4 py-2 max-md:w-full text-[18px] font-[700] leading-[26px] tracking-wide text-black">
//                 PALACE SHANGHAI
//               </h1>
//               {/* <div className="w-1/4 whitespace-pre-line text-sm max-md:w-full max-md:text-xs">
//                 <p>
//                   • OPENING SATURDAY MAY 23rd
//                   {"\n"}• Unit W1-1A, Zhangyuan, 280 Maoming North Road
//                   {"\n"}• Jing’an District
//                   {"\n"}• Shanghai
//                 </p>

//               </div> */}
//               <div className="w-1/4 text-sm leading-[1.4] max-md:w-full max-md:text-xs">
//                 <p>• OPENING SATURDAY MAY 23rd</p>
//                 <p className="whitespace-nowrap">
//                   • Unit W1-1A, Zhangyuan, 280 Maoming North Road
//                 </p>
//                 <p>• Jing’an District</p>
//                 <p>• Shanghai</p>
//               </div>
//             </div>

//             {/* Video */}
//             {/* <div className="relative mt-5 h-0 pb-[56.25%]">
//               <iframe
//                 className="absolute left-0 top-0 h-full w-full"
//                 src="https://www.youtube.com/embed/3S5djeOeDgA?autoplay=0&rel=0&controls=0"
//                 title="PALACE SHANGHAI"
//                 allowFullScreen
//               />
//             </div> */}
//             <div className="relative mt-5 aspect-video  w-full overflow-hidden">
//               <iframe
//                 className="absolute inset-0 h-full w-full"
//                 src="https://www.youtube.com/embed/3S5djeOeDgA?vq=hd1080&rel=0&controls=0"
//                 title="PALACE SHANGHAI"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>

//             {/* Images */}
//             <div className="mt-5 grid grid-cols-3 max-md:grid-cols-1">
//               {images.map((image, index) => (
//                 <div key={index} className="p-2.5 max-md:pt-2.5">
//                   <div className="relative aspect-square w-full overflow-hidden">
//                     <Image
//                       src={image}
//                       alt={`Palace Shanghai ${index + 1}`}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       priority={index < 3}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

import Image from "next/image";
import Footer from "../../../../components/store/footer";
import Header from "../../../../components/store/header";

const images = [
  "/images/advice/advice-1.avif",
  "/images/advice/advice-2.avif",
  "/images/advice/advice-3.avif",
  "/images/advice/advice-4.avif",
  "/images/advice/advice-5.avif",
  "/images/advice/advice-6.avif",
  "/images/advice/advice-7.avif",
  "/images/advice/advice-8.avif",
  "/images/advice/advice-9.avif",
  "/images/advice/advice-10.avif",
  "/images/advice/advice-11.avif",
  "/images/advice/advice-12.avif",
  "/images/advice/advice-13.avif",
  "/images/advice/advice-14.avif",
  "/images/advice/advice-15.avif",
  "/images/advice/advice-16.avif",
  "/images/advice/advice-17.avif",
  "/images/advice/advice-18.avif",
  "/images/advice/advice-19.avif",
  "/images/advice/advice-20.avif",
  "/images/advice/advice-21.avif",
];

export default function PalaceShanghaiPage() {
  return (
    <>
      <Header />

      <main role="main" className="flex flex-1 grow justify-center uppercase">
        {/* EXACT PALACE CONTAINER */}
        <div className="mx-5 flex w-full max-w-5xl">
          <div className="w-full pb-4">
            {/* Heading */}
            <div className="flex flex-row font-bold max-md:flex-col">
              <h1 className="w-3/4 py-2 text-[18px] font-[700] leading-[26px] tracking-wide text-black max-md:w-full">
                PALACE SHANGHAI
              </h1>

              <div className="w-1/4 text-sm leading-[1.4] max-md:w-full max-md:text-xs">
                <p>• OPENING SATURDAY MAY 23rd</p>

                <p className="whitespace-nowrap">
                  • Unit W1-1A, Zhangyuan, 280 Maoming North Road
                </p>

                <p>• Jing’an District</p>
                <p>• Shanghai</p>
              </div>
            </div>

            {/* EXACT PALACE VIDEO */}
            <div className="relative mt-5 mx-2.5 h-0 pb-[56.25%]">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/3S5djeOeDgA?autoplay=0&rel=0&controls=0"
                title="PALACE SHANGHAI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Images */}
            <div className="mt-5 grid grid-cols-3 max-md:grid-cols-1">
              {images.map((image, index) => (
                <div key={index} className="p-2.5 max-md:pt-2.5">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={`Palace Shanghai ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
