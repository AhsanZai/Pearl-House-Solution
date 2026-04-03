import { Video, Activity, Moon, Bell, Mic, LucideIcon } from "lucide-react";

export interface FeatureRecord {
  icon: LucideIcon;
  label: string;
  id: string;
}

export const features: FeatureRecord[] = [
  { icon: Video, label: "HD Video", id: "feature-hd" },
  { icon: Activity, label: "24/7 Live Feed", id: "feature-live" },
  { icon: Moon, label: "Night Vision", id: "feature-night" },
  { icon: Bell, label: "Notification", id: "feature-notify" },
  { icon: Mic, label: "Two-Way Talk", id: "feature-two-way" },
];
