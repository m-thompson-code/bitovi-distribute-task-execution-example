import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx', { id: "noop" }),
  route(':count', './app.tsx'),
] satisfies RouteConfig;
