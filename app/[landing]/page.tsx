import { notFound } from "next/navigation";
import LandingPage from "@/app/src/safestreet/components/LandingPage";
import {
  LANDING_ROUTE_CONFIG,
  LANDING_SLUGS,
  type LandingSlug,
} from "@/app/src/safestreet/components/config/landingRoutes";

type LandingRoutePageProps = {
  params: Promise<{
    landing: string;
  }>;
};

export function generateStaticParams() {
  return LANDING_SLUGS.map((landing) => ({ landing }));
}

export default async function LandingRoutePage({ params }: LandingRoutePageProps) {
  const { landing } = await params;
  const routeConfig = LANDING_ROUTE_CONFIG[landing as LandingSlug];

  if (!routeConfig) {
    notFound();
  }

  return <LandingPage heroVariant={routeConfig.heroVariant} />;
}
