import MedGuardContactSection from "@/app/src/medguard/components/MedGuardContactSection";
import MedGuardFooter from "@/app/src/medguard/components/MedGuardFooter";
import MedGuardHeroSection from "@/app/src/medguard/components/MedGuardHeroSection";
import MedGuardNavbar from "@/app/src/medguard/components/MedGuardNavbar";
import MedGuardProductSection from "@/app/src/medguard/components/MedGuardProductSection";
import MedGuardTrustGrid from "@/app/src/medguard/components/MedGuardTrustGrid";
import MedGuardValueProps from "@/app/src/medguard/components/MedGuardValueProps";

export default function MedGuardLandingPage() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip bg-white">
      <MedGuardNavbar />
      <main className="min-w-0 flex-1">
        <MedGuardHeroSection />
        <MedGuardValueProps />
        <MedGuardProductSection />
        <MedGuardTrustGrid />
        <MedGuardContactSection />
      </main>
      <MedGuardFooter />
    </div>
  );
}
