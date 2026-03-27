import Image from "next/image";
import leftLogo from "@/app/src/assets/logo/Left.png";
import pearlLogo from "@/app/src/assets/logo/pearl logo.png";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav
        className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-white max-w-7xl mx-auto"
        aria-label="Main navigation"
      >
        {/* Left: Identity */}
        <div className="flex-shrink-0">
          <Image
            src={leftLogo}
            alt="Logo"
            width={250}
            height={50}
            className="object-contain w-[140px] sm:w-[200px] md:w-[250px] h-auto"
            priority
          />
        </div>

        {/* Right: Company Identity with Logo */}
        <div className="flex items-center gap-1 md:gap-1.5 flex-shrink-0">
          <Image
            src={pearlLogo}
            alt="Pearl"
            width={50}
            height={40}
            className="object-contain w-[30px] sm:w-[40px] md:w-[50px] h-auto"
          />
          <div className="flex flex-col items-start leading-none group">
            <span className="text-sm sm:text-lg md:text-[21px] font-black text-[#1b3a6b] tracking-tighter uppercase transition-all duration-300">
              PEARL
            </span>
            <span className="text-[7px] sm:text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 whitespace-nowrap">
              Home Solutions
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
