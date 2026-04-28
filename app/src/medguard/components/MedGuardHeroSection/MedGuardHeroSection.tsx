import { Cormorant_Garamond } from "next/font/google";
import { medGuardAssets } from "@/app/src/medguard/config/assets";
import { heroCopy } from "@/app/src/medguard/constants/copy";
import MedGuardHeroImageFrame from "./MedGuardHeroImageFrame";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function MedGuardHeroSection() {
  return (
    <section
      className="relative overflow-x-clip border-b border-stone-200/80 bg-linear-to-b from-stone-100 via-[#f4f1eb] to-stone-100"
      id="hero"
      aria-labelledby="medguard-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(28,25,23,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_100%,rgba(30,58,95,0.05),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,1280px)] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-8 lg:gap-y-0 xl:gap-10">
          <div className="order-2 flex min-w-0 justify-center sm:order-2 lg:order-1 lg:col-span-3 lg:justify-end">
            <MedGuardHeroImageFrame
              src={medGuardAssets.hero.left}
              alt="Care professional with a patient at home"
              priority
              side="left"
            />
          </div>

          <div className="order-1 min-w-0 space-y-5 text-balance text-center sm:order-1 sm:space-y-6 lg:order-2 lg:col-span-6 lg:space-y-8 lg:px-2">
            <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-stone-500 max-[380px]:tracking-[0.14em] sm:text-[0.65rem] sm:tracking-[0.32em]">
              {heroCopy.eyebrow}
            </p>
            <div
              className="mx-auto h-px w-10 bg-linear-to-r from-transparent via-stone-400/60 to-transparent"
              aria-hidden
            />
            <h1
              id="medguard-hero-heading"
              className={`${display.className} break-words text-balance text-stone-900`}
            >
              <span className="block text-[clamp(1.4rem,5.5vw+0.4rem,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] sm:leading-[1.12]">
                {heroCopy.titleLines[0]}
              </span>
              <span className="mt-2 block text-[clamp(1.1rem,3.2vw+0.5rem,1.875rem)] font-medium italic leading-snug text-stone-600/95">
                {heroCopy.titleLines[1]}
              </span>
            </h1>
            <p className="mx-auto max-w-md text-pretty text-[0.9375rem] leading-[1.75] text-stone-600 sm:max-w-lg sm:text-base">
              {heroCopy.body}
            </p>
          </div>

          <div className="order-3 flex min-w-0 justify-center sm:order-3 lg:order-3 lg:col-span-3 lg:justify-start">
            <MedGuardHeroImageFrame
              src={medGuardAssets.hero.right}
              alt="Group of adults using a smartphone together"
              side="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
