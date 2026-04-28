import { footerCopy } from "@/app/src/medguard/constants/copy";

export default function MedGuardFooter() {
  return (
    <footer
      className="mt-auto w-full min-w-0 border-t border-gray-100 bg-white px-4 py-8 sm:px-6 md:px-8"
      id="legal"
    >
      <div className="mx-auto max-w-4xl min-w-0 text-center">
        <p className="text-balance text-[10px] font-medium leading-relaxed text-gray-400 sm:text-[11px]">
          {footerCopy.disclaimer}
        </p>
      </div>
    </footer>
  );
}
