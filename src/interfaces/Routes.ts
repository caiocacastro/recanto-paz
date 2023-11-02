import { RouteObject } from "react-router-dom";

export type SystemRoutes = RouteObject & {
  needsAuth?: boolean;
  path: string;
  label: string;
};
