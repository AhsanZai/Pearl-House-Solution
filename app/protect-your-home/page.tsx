import Navbar from "@/app/src/components/landing/Navbar";
import HeroSection from "@/app/src/components/landing/HeroSection";
import SmartHomeFeatures from "@/app/src/components/landing/SmartHomeFeatures";
import SystemIncludes from "@/app/src/components/landing/SystemIncludes";
import WhyChooseUs from "@/app/src/components/landing/WhyChooseUs";
import FooterDisclaimer from "@/app/src/components/landing/FooterDisclaimer";

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
