import Navbar from "@/app/src/safestreet/components/Navbar";
import HeroSection from "@/app/src/safestreet/components/HeroSection";
import SmartHomeFeatures from "@/app/src/safestreet/components/SmartHomeFeatures";
import SystemIncludes from "@/app/src/safestreet/components/SystemIncludes";
import WhyChooseUs from "@/app/src/safestreet/components/WhyChooseUs";
import FooterDisclaimer from "@/app/src/safestreet/components/FooterDisclaimer";

export default function ProtectYourHome() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <HeroSection variant="short" />
        <SmartHomeFeatures />
        <SystemIncludes />
        <WhyChooseUs />
      </main>
      <FooterDisclaimer />
    </div>
  );
}
