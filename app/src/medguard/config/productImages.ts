import { medGuardAssets } from "@/app/src/medguard/config/assets";

export const productImageByKey = {
  watch: medGuardAssets.products.watch,
  inHome: medGuardAssets.products.inHome,
  gps: medGuardAssets.products.gps,
} as const;
