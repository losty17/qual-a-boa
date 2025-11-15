import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("./pages/index.tsx"),
  route("login", "./pages/login.tsx"),
] satisfies RouteConfig;
