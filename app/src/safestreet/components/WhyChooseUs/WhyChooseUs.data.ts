import { ShieldCheck, Wrench, Headphones, LucideIcon } from "lucide-react";

export interface WhyChooseUsCard {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const cards: WhyChooseUsCard[] = [
  {
    id: "why-theft",
    icon: ShieldCheck,
    title: "Theft Protection\nGuarantee*",
    desc: "(Certain restrictions apply) Our security systems are designed to help protect your home and loved ones with reliable technology.",
  },
  {
    id: "why-installation",
    icon: Wrench,
    title: "Professional Installation",
    desc: "Our trained experts ensure your system is installed properly for maximum safety and performance.",
  },
  {
    id: "why-monitoring",
    icon: Headphones,
    title: "24/7 Monitoring",
    desc: "Your home is monitored around the clock, providing peace of mind day and night.",
  },
];
