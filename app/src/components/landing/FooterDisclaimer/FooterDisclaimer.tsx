import { footerLegalText, photoAttribution, visaRewardDisclaimer, theftProtectionDisclaimer } from "@/app/src/components/landing/FooterDisclaimer/FooterDisclaimer.constants";

export default function FooterDisclaimer() {
  return (
    <footer id="legal-terms" className="bg-white border-t border-gray-100 py-10 px-6 sm:px-10 mt-auto">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
          {visaRewardDisclaimer}
        </p>
        <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
          {footerLegalText}
        </p>

        <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
          {theftProtectionDisclaimer}
        </p>

        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.05em]">
          {photoAttribution}
        </p>
      </div>
    </footer>
  );
}
