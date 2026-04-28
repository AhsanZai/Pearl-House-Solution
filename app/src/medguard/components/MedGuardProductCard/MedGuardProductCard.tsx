import Image, { type StaticImageData } from "next/image";

type MedGuardProductCardProps = {
  title: string;
  imageSrc: StaticImageData;
  imageAlt: string;
};

export default function MedGuardProductCard({ title, imageSrc, imageAlt }: MedGuardProductCardProps) {
  return (
    <article className="group flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl border border-stone-200/70 bg-white transition-all duration-300 hover:border-stone-300/90 hover:shadow-[0_12px_48px_-16px_rgba(15,23,42,0.12)]">
      <div className="border-b border-stone-100 px-4 py-3.5 sm:px-5 sm:py-4">
        <h3 className="text-left text-[0.8125rem] font-medium leading-snug tracking-tight text-stone-800 sm:text-sm">
          {title}
        </h3>
      </div>
      <div className="flex flex-1 items-center justify-center bg-stone-50/70 px-4 py-5 sm:px-6 sm:py-7">
        <div className="relative aspect-4/3 w-full min-w-0 max-w-[min(100%,220px)] sm:max-w-[220px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 90vw, 220px"
          />
        </div>
      </div>
    </article>
  );
}
