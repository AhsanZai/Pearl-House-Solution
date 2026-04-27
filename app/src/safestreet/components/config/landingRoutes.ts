export type LandingSlug = "safestreet";

type LandingRouteConfig = {
  heroVariant: "full" | "short";
};

export const LANDING_ROUTE_CONFIG: Record<LandingSlug, LandingRouteConfig> = {
  safestreet: {
    heroVariant: "full",
  },
};

export const LANDING_SLUGS = Object.keys(LANDING_ROUTE_CONFIG) as LandingSlug[];
