import Image from "next/image";
import adtLogo from "@/app/src/assets/Group 1.png";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav
        className="w-full px-6 py-5 flex items-center bg-white"
        aria-label="Main navigation"
      >
        {/* Left: ADT Identity */}
          <Image
            src={adtLogo}
            alt="ADT"
            width={120}
            height={120}
            className="object-contain"
            priority
          />

        {/* Separator */}
        <div className="h-10 w-px bg-gray-300 mx-3 shrink-0" />

        {/* Right: Company Identity (2 lines) */}
        <div className="flex flex-col leading-none">
          <span className="text-[21px] font-black text-[#1b3a6b] tracking-tighter">
            Pearl
          </span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
            Housing Solution
          </span>
        </div>
      </nav>
    </header>
  );
}
