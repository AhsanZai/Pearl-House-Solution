import { Tablet, Radio, Camera, LucideIcon } from "lucide-react";

export interface SystemItem {
  icon: LucideIcon;
  label: string;
  id: string;
}

export const items: SystemItem[] = [
  {
    icon: Tablet,
    label: "Control Panel",
    id: "system-control-panel",
  },
  {
    icon: Radio,
    label: "Sensor",
    id: "system-sensor",
  },
  {
    icon: Camera,
    label: "Cameras",
    id: "system-cameras",
  },
];
