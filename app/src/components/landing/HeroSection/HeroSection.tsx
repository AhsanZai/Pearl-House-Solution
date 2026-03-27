"use client";

import Image from "next/image";
import { useHeroSection } from "@/app/src/hooks/heroSection/useHeroSection";
import LeadForm from "@/app/src/components/landing/LeadForm";
import { slides } from "@/app/src/components/landing/HeroSection/HeroSection.data";

export default function HeroSection() {
  const { current, goToSlide } = useHeroSection({
    slidesCount: slides.length,
    autoPlayInterval: 5000,
  });

  return (
    <section className="relative w-full overflow-hidden" id="hero">
      {/* ── Slider Images ── */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Gradient overlay — dark on left, fades right */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a1f45]/85 via-[#0a1f45]/50 to-transparent z-[1]" />
        {/* Extra bottom fade */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-[1]" />
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

          {/* Orange CTA badge — clickable button */}
          <button
            type="button"
            onClick={() => {}}
            className="inline-flex flex-col items-start bg-[#f47b20] text-white rounded-lg shadow-xl shadow-orange-600/30 px-7 py-3.5 w-fit cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 border-none"
          >
            <span className="text-[16px] font-extrabold uppercase tracking-widest leading-tight text-left">
              FREE* HOME SYSTEM
            </span>
            <span className="text-[12px] font-normal mt-1 opacity-90 tracking-wide text-left">
              with $99 installation
            </span>
            <span className="text-[11px] font-light italic mt-0.5 opacity-75 tracking-normal text-left">
              *As a Visa gift card
            </span>
          </button>
        </div>

        {/* RIGHT: Floating Lead Form — pinned to the right */}
        <div className="lg:self-center w-full sm:w-auto flex justify-center lg:justify-end shrink-0">
          <LeadForm />
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
