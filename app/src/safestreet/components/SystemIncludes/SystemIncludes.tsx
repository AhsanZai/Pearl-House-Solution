import { items } from "@/app/src/safestreet/components/SystemIncludes/SystemIncludes.data";

export default function SystemIncludes() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-14 px-6 text-center">
      <h2 className="text-2xl font-extrabold text-[#1e3a5f] mb-10 tracking-tight">
        Your System Includes:
      </h2>

      <div className="flex flex-wrap justify-center gap-16 max-w-2xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="flex flex-col items-center gap-4 group cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:-translate-y-1 transform transition-transform duration-200">
              <item.icon className="w-8 h-8 text-[#1e3a5f] stroke-[1.5]" />
            </div>
            <span className="text-[14px] font-semibold text-[#1e3a5f]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
