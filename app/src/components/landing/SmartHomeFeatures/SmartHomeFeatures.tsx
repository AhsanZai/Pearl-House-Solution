import { features } from "@/app/src/components/landing/SmartHomeFeatures/SmartHomeFeatures.data";

export default function SmartHomeFeatures() {
  return (
    <section className="bg-white py-14 px-6 text-center" id="features">
      <h2 className="text-2xl font-extrabold text-[#1e3a5f] mb-10 tracking-tight">
        A Safer and Smarter Home
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-3xl mx-auto">
        {features.map((f) => (
          <div
            key={f.id}
            id={f.id}
            className="flex flex-col items-center gap-3 min-w-[80px] group cursor-default"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 group-hover:-translate-y-1 transform transition-transform shadow-sm">
              <f.icon className="w-7 h-7 text-[#1e3a5f] stroke-[1.5]" />
            </div>
            <span className="text-[13px] font-semibold text-[#1e3a5f] leading-tight">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
