import { footerLegalText, photoAttribution } from "@/app/src/components/landing/FooterDisclaimer/FooterDisclaimer.constants";

export default function FooterDisclaimer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6 sm:px-10 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
          {footerLegalText}
        </p>
        <p className="text-[11px] text-gray-500 font-bold mt-4 uppercase tracking-[0.05em]">
          {photoAttribution}
        </p>
      </div>
    </footer>
  );
}
