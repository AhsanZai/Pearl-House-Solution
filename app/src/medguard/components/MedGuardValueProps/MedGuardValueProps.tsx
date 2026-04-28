import { Ambulance, HandCoins, Headphones, Map } from "lucide-react";
import { valueProps } from "@/app/src/medguard/constants/copy";
import { medGuardTheme } from "@/app/src/medguard/constants/theme";

const iconMap = {
  "us-monitoring": Headphones,
  medicaid: Map,
  response: Ambulance,
  "no-cost": HandCoins,
} as const;

export default function MedGuardValueProps() {
  return (
    <section
      className="w-full min-w-0 border-b border-stone-200/50 bg-white py-12 md:py-16 lg:py-17"
      aria-label="Key benefits"
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {valueProps.map((item) => {
            const Icon = iconMap[item.id as keyof typeof iconMap];
            return (
              <div
                key={item.id}
                className={[
                  "group relative flex flex-col items-center gap-4 rounded-2xl px-4 py-6 text-center sm:px-5",
                  "border border-transparent bg-transparent",
                  "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out",
                  "motion-safe:hover:-translate-y-1",
                  "hover:border-stone-200/80 hover:bg-stone-50/90",
                  "hover:shadow-[0_14px_44px_-14px_rgba(26,43,72,0.14)]",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-15 sm:w-15",
                    medGuardTheme.iconBg,
                    "border border-slate-200/60",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(26,43,72,0.06)]",
                    "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out",
                    "motion-safe:group-hover:scale-[1.06]",
                    "group-hover:border-slate-300/80 group-hover:bg-[#e3eefc]",
                    "group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_-10px_rgba(26,43,72,0.2)]",
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
                <h2
                  className={`text-[0.8125rem] font-extrabold uppercase leading-snug tracking-[0.06em] transition-colors duration-300 ${medGuardTheme.heading} group-hover:text-[#0c1424]`}
                >
                  {item.title}
                </h2>
                <p
                  className={`max-w-62 text-[0.8125rem] leading-relaxed transition-colors duration-300 ${medGuardTheme.body} group-hover:text-[#3d4a5c]`}
                >
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
