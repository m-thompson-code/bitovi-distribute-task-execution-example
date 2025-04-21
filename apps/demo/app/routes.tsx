import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx', { id: "noop" }),
  route(':count', './app.tsx'),
] satisfies RouteConfig;

// {
//   "pageLoadTime": 30000,
//   "numberOfTests": 30
// }

// // 6000 <> 100
// //

