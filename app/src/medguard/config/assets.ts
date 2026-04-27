import heroLeft from "@/app/src/medguard/assets/hero/hero-bg-1.png";
import heroRight from "@/app/src/medguard/assets/hero/hero-bg-2.jpg";
import productWatch from "@/app/src/medguard/assets/section-2/watch.jpg";
import productInHome from "@/app/src/medguard/assets/section-2/mxd-box-1 1.png";
import productGps from "@/app/src/medguard/assets/section-2/pendt 1.png";
import logoMedGuard from "@/app/src/medguard/assets/logo/top-left-logo.png";

export const medGuardAssets = {
  logos: { medGuard: logoMedGuard },
  hero: { left: heroLeft, right: heroRight },
  products: { watch: productWatch, inHome: productInHome, gps: productGps },
} as const;
