import type { LucideIcon } from "lucide-react";
import { Home, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { trustFeatures } from "@/app/src/medguard/constants/copy";
import { medGuardTheme } from "@/app/src/medguard/constants/theme";

const iconById: Record<string, LucideIcon> = {
  simple: ShieldCheck,
  "us-based": MapPin,
  "in-home": Home,
  gps: Navigation,
};

export default function MedGuardTrustGrid() {
  return (
    <section
      id="why-medguard"
      className="relative w-full min-w-0 overflow-hidden border-y border-stone-200/60 bg-[#f6f7f8] py-12 md:py-16 lg:py-17"
      aria-labelledby="medguard-trust-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.65),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 md:px-8">
        <h2 id="medguard-trust-heading" className="sr-only">
          Why MedGuard
        </h2>
        <div className="medguard-trust-grid grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {trustFeatures.map((f) => {
            const Icon = iconById[f.id];
            return (
              <div
                key={f.id}
                className={[
                  "medguard-trust-reveal group relative flex flex-col items-center gap-4 rounded-2xl px-4 py-6 text-center sm:px-5",
                  "border border-transparent bg-white/40 backdrop-blur-[2px]",
                  "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out",
                  "motion-safe:hover:-translate-y-1",
                  "hover:border-stone-200/90 hover:bg-white hover:shadow-[0_14px_44px_-14px_rgba(26,43,72,0.12)]",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-15 sm:w-15",
                    "border border-stone-200/80 bg-white",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_8px_rgba(15,23,42,0.05)]",
                    "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out",
                    "motion-safe:group-hover:scale-[1.06]",
                    "group-hover:border-stone-300/90 group-hover:shadow-[0_10px_28px_-10px_rgba(26,43,72,0.16)]",
                  ].join(" ")}
                >
                  {Icon && (
                    <Icon
                      className={`h-7 w-7 ${medGuardTheme.iconNavy} transition-transform duration-300 ease-out motion-safe:group-hover:scale-105`}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  )}
                </div>
                <h3
                  className={`text-[0.8125rem] font-extrabold uppercase leading-snug tracking-[0.06em] transition-colors duration-300 ${medGuardTheme.heading} group-hover:text-[#0c1424]`}
                >
                  {f.title}
                </h3>
                <p
                  className={`max-w-62 text-[0.8125rem] leading-relaxed transition-colors duration-300 ${medGuardTheme.body} group-hover:text-[#3d4a5c]`}
                >
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
