import MedGuardLeadForm from "@/app/src/medguard/components/MedGuardLeadForm";
import { contactSectionCopy } from "@/app/src/medguard/constants/copy";

export default function MedGuardContactSection() {
  return (
    <section
      className="relative w-full min-w-0 border-t border-slate-200/80 py-16 sm:py-20 md:py-28"
      id="contact"
      aria-labelledby="medguard-contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,58,95,0.07),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full min-w-0 max-w-xl px-4 sm:px-6">
        <div className="mb-8 min-w-0 text-center sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:tracking-[0.35em]">
            {contactSectionCopy.overline}
          </p>
          <h2
            id="medguard-contact-heading"
            className="mt-3 break-words font-serif text-[clamp(1.375rem,4.5vw+0.2rem,1.875rem)] font-light tracking-tight text-slate-900 sm:text-3xl"
          >
            {contactSectionCopy.headline}
          </h2>
          <p className="mt-3 min-w-0 text-base leading-relaxed text-slate-600">{contactSectionCopy.subheadline}</p>
        </div>
        <MedGuardLeadForm
          showTitle={false}
          className="border-slate-200/80 shadow-[0_25px_80px_-12px_rgba(15,23,42,0.18)]"
        />
      </div>
    </section>
  );
}
