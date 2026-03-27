import Image from "next/image";
import leftLogo from "@/app/src/assets/logo/Left.png";
import pearlLogo from "@/app/src/assets/logo/pearl logo.png";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav
        className="w-full px-6 py-4 flex items-center justify-between bg-white"
        aria-label="Main navigation"
      >
        {/* Left: Identity */}
        <Image
          src={leftLogo}
          alt="Logo"
          width={250}
          height={50}
          className="object-contain"
          priority
        />

        {/* Right: Company Identity with Logo */}
        <div className="flex items-center gap-1.5">
          <Image
            src={pearlLogo}
            alt="Pearl"
            width={50}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[21px] font-black text-[#1b3a6b] tracking-tighter uppercase">
              PEARL
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
              Home Solutions
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
