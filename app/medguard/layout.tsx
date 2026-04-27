import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MedGuard Alert & Pearl Home Solutions | Personal Medical Alert",
  description:
    "24/7 personal safety with MedGuard Alert, in partnership with Pearl Home Solutions. U.S.-based monitoring, in-home and on-the-go options.",
};

export default function MedGuardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
