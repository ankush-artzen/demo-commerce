import Link from "next/link";

export type AdviceCardProps = {
  title: string;
  href: string;
  image: string;
  srcSet?: string;
  width: number;
  height: number;
};

export function AdviceCard({
  title,
  href,
  image,
  srcSet,
  width,
  height,
}: AdviceCardProps) {
  const aspectRatio = width / height;

  return (
    <div className="pt-0">
      <div className="group relative p-2.5 text-center uppercase phone:mb-0 phone:flex phone:flex-col phone:content-center">
        <Link href={href}>
          <div
            className="phone:inline-block transition-opacity duration-150 ease-in-out group-hover:opacity-10"
            style={{
              overflow: "hidden",
              position: "relative",
              width: "100%",
              maxWidth: 800,
              aspectRatio,
            }}
          >
            {srcSet ? (
              <picture>
                <source
                  srcSet={srcSet}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <img
                  alt=""
                  src={image}
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute left-0 top-0 block h-full w-full max-h-none max-w-none object-cover"
                  style={{ opacity: 1 }}
                />
              </picture>
            ) : (
              <img
                alt=""
                src={image}
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-auto w-full object-cover"
              />
            )}
          </div>

          <div className="absolute left-0 top-2/4 inline-block w-full -translate-y-1/2 text-center text-sm font-bold opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
            <div className="float-none w-full duration-150 ease-in-out group-hover:transition-colors phone:text-[0.9em]">
              <h3 className="m-0" aria-label="advice-feed">
                {title}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
