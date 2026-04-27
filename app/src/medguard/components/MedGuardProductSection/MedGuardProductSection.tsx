import MedGuardProductCard from "@/app/src/medguard/components/MedGuardProductCard";
import { productImageByKey } from "@/app/src/medguard/config/productImages";
import { productItems, productsShowcaseCopy } from "@/app/src/medguard/constants/copy";

const altByKey = {
  watch: "Personal 4G care watch with display and 4G connectivity",
  inHome: "In-home medical alert base unit with help button and wrist transmitter",
  gps: "Personal GPS alert pendants in white and black",
} as const;

export default function MedGuardProductSection() {
  return (
    <section
      className="w-full min-w-0 border-t border-stone-200/60 bg-stone-50/40 py-12 sm:py-16 md:py-20"
      id="products"
      aria-labelledby="products-showcase-title"
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 md:px-8">
        <header className="mb-8 text-center sm:mb-12 md:mb-14">
          <h2
            id="products-showcase-title"
            className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-stone-500 sm:tracking-[0.24em]"
          >
            {productsShowcaseCopy.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg min-w-0 px-1 text-sm leading-relaxed text-stone-600 sm:px-0 md:text-[0.9375rem]">
            {productsShowcaseCopy.subtitle}
          </p>
        </header>

        <ul className="grid list-none min-w-0 grid-cols-1 gap-6 md:grid-cols-3 md:gap-8" role="list">
          {productItems.map((p) => (
            <li key={p.id} className="min-w-0">
              <MedGuardProductCard
                title={p.title}
                imageSrc={productImageByKey[p.imageKey]}
                imageAlt={altByKey[p.imageKey]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
