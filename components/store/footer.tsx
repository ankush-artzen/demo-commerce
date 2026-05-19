const footerLinks = [
  "INSTAGRAM",
  "TIKTOK",
  "APPLE MUSIC",
  "YOUTUBE",
  "WECHAT",
  "WEIBO",
  "MAILING LIST",
  "BORING STUFF",
];

export default function Footer() {
  return (
    // <footer className="pb-10 pt-6">
    //   <div className="mx-auto max-w-[1200px] px-6">
    //     <div className="grid grid-cols-2 gap-y-4 text-center md:flex md:flex-wrap md:justify-center md:gap-8">
    //       {footerLinks.map((item) => (
    //         <Link
    //           key={item}
    //           href="/"
    //           className="text-[13px] font-black uppercase hover:underline"
    //         >
    //           {item}
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </footer>
    <footer className="w-full mt-0 px-6 pb-7 sm:mt-28 md:mt-20">
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center uppercase md:flex md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-3">
        {footerLinks.map((item, index) => (
          <button
            key={index}
            className="
          whitespace-nowrap
          font-bold
          text-[9px]
          tracking-[-0.05em]
          transition-opacity
          duration-200
          hover:opacity-50
          sm:text-[10px]
          md:text-[11.7px]
          lg:text-[11.7px]
        "
          >
            {item}
          </button>
        ))}
      </div>
    </footer>
  );
}
