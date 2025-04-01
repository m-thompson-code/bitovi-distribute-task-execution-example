import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('count/:count', './routes/count.tsx'),
] satisfies RouteConfig;
