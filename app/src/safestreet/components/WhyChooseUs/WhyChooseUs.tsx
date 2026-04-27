import { cards } from "@/app/src/safestreet/components/WhyChooseUs/WhyChooseUs.data";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6 text-center" id="why-choose-us">
      <h2 className="text-2xl font-extrabold text-[#1e3a5f] mb-10 tracking-tight">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-10 flex flex-col items-center gap-5 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#4a90d9]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm">
              <card.icon className="w-8 h-8 text-[#4a90d9] stroke-[1.5]" />
            </div>

            <h3 className="text-[16px] font-bold text-[#1e3a5f] leading-snug text-center whitespace-pre-line">
              {card.title}
            </h3>

            <p className="text-[13px] text-gray-500 leading-relaxed text-center">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
