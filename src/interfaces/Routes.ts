import { RouteObject } from 'react-router-dom';

export type SystemRoutes = RouteObject & {
  needsAuthentication?: boolean;
  path: string;
  label: string;
};
