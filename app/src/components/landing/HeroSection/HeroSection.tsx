"use client";

import Image from "next/image";
import { useHeroSection } from "@/app/src/hooks/heroSection/useHeroSection";
import LeadForm from "@/app/src/components/landing/LeadForm";
import { slides } from "@/app/src/components/landing/HeroSection/HeroSection.data";

interface HeroSectionProps {
  variant?: "full" | "short";
}

export default function HeroSection({ variant = "full" }: HeroSectionProps) {
  const { current, goToSlide } = useHeroSection({
    slidesCount: slides.length,
    autoPlayInterval: 5000,
  });

  return (
    <section className="relative w-full overflow-hidden" id="hero">
      {/* ── Slider Images ── */}
      <div className="absolute inset-0 bg-[#0a1f45]">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background 'Ghost' layer - fills space with blurred colors, preventing any 'zooming' of the subject */}
            <Image
              src={slide.src}
              alt=""
              fill
              className="object-cover blur-3xl opacity-30 scale-110 transform-gpu"
              aria-hidden="true"
            />
            {/* Focal layer - uses object-contain to ensure NO ZOOMING occurs on the actual subject */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-contain" // Preserves full frame without ever zooming the subject
              sizes="100vw"
            />
          </div>
        ))}

        {/* Cinematic Gradient overlay — refined for ADT branding */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a1f45]/90 via-[#0a1f45]/40 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#0a1f45]/60 to-transparent z-[1]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 md:px-10 min-h-[480px] lg:min-h-[520px] flex flex-col lg:flex-row items-center lg:items-stretch gap-6 py-10">

        {/* LEFT: Hero Text — takes all remaining width on desktop */}
        <div className="flex-1 flex flex-col justify-center lg:pr-8">
          <h1 className="text-white font-black uppercase leading-[1.2] tracking-wide drop-shadow-lg mb-6 text-[clamp(20px,3vw,36px)]">
            HELP PROTECT{" "}
            <span className="text-[#93c5fd]">WHAT</span>
            <br />
            MATTERS MOST WITH
            <br />
            AN{" "}
            <span className="text-[#93c5fd]">ADT-MONITORED</span>
            <br />
            SYSTEM
          </h1>

          {/* Orange CTA Container */}
          <div
            onClick={() => {}}
            className="group flex flex-col items-start bg-[#f47b20] text-white rounded-[10px] px-6 sm:px-7 py-5 w-full max-w-[440px] cursor-pointer hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] shadow-lg shadow-orange-900/20 border border-white/20"
          >
            <span className="text-[18px] sm:text-[20px] font-black uppercase tracking-widest leading-tight mb-3">
              FREE* HOME SYSTEM
            </span>
            
            <div className="w-full h-px bg-white/30 mb-3" />
            
            <p className="text-[13px] font-medium leading-[1.5] tracking-wide text-white/95">
              *With <span className="font-bold text-white">$99 installation</span> charge and new monitoring agreement starting at <span className="font-bold text-white">$49.99 per month</span>. Early termination fee applies.{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('legal-terms')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="underline underline-offset-[3px] decoration-white/60 hover:decoration-white transition-colors cursor-pointer bg-transparent border-none p-0 inline font-inherit text-white"
              >
                See terms for details.
              </button>
            </p>
          </div>

          {/* Connector — dot + line */}
          <div className="flex items-stretch pl-6 mt-1">
            <div className="flex flex-col items-center mr-2.5">
              <div className="w-px h-3 bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/30 my-px" />
            </div>
          </div>

          {/* Visa disclaimer pill */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit self-start mb-2.5 mt-1">
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <rect width="28" height="18" rx="3" fill="white" />
              <text x="5" y="13" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" fill="#1A1F71" letterSpacing="0.5">VISA</text>
            </svg>
            <span className="text-[12px] text-white/80 italic whitespace-nowrap">
               Visa gift card of $100** from SafeStreets
            </span>
          </div>
      </div>

        {/* RIGHT: Floating Lead Form — pinned to the right */}
        <div className="lg:self-center w-full sm:w-auto flex justify-center lg:justify-end shrink-0">
          <LeadForm variant={variant} />
        </div>
      </div>

      {/* ── Slider Dots ── */}
      <div className="absolute bottom-4 left-6 md:left-10 z-3 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            id={`hero-dot-${idx}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-all duration-300 ${
              idx === current
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
