import Image from "next/image";
import pearlMark from "@/app/src/safestreet/assets/logo/pearl logo.png";
import { medGuardAssets } from "@/app/src/medguard/config/assets";

const medGuardLogoClass =
  "h-7 w-auto max-w-full object-contain object-left sm:h-10 sm:max-w-[min(100%,220px)] md:h-11";

export default function MedGuardNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full min-w-0 border-b border-gray-200 bg-white shadow-sm">
      <nav
        className="flex w-full min-w-0 max-w-full items-center justify-between gap-2 sm:gap-4 md:gap-6 bg-white px-3 py-2.5 sm:px-5 sm:py-3.5 md:px-6 md:py-4"
        aria-label="Main navigation"
      >
        <div className="mr-2 flex min-w-0 max-w-[42%] flex-1 shrink items-center sm:mr-4 sm:max-w-none sm:flex-none md:mr-5">
          <Image
            src={medGuardAssets.logos.medGuard}
            alt="MedGuard Alert"
            width={200}
            height={40}
            className={medGuardLogoClass}
            priority
          />
        </div>
        <div className="ml-2 flex min-w-0 max-w-[58%] flex-1 shrink items-center justify-end gap-2 sm:ml-4 sm:max-w-none sm:gap-2.5 sm:flex-none md:ml-5 md:gap-3">
          <Image
            src={pearlMark}
            alt=""
            width={50}
            height={40}
            className="h-auto w-8 shrink-0 object-contain sm:w-10 sm:max-w-none md:w-12"
            aria-hidden
          />
          <div className="min-w-0 text-left leading-none">
            <span className="block text-sm font-black uppercase leading-none tracking-widest text-[#1b3a6b] sm:text-lg md:text-xl">
              PEARL
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[0.65rem] font-bold uppercase leading-tight tracking-widest text-gray-500 sm:text-[0.7rem] md:text-xs">
              Home Solutions
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
