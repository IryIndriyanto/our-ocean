import { IRoute } from "@/types/navigation";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: IRoute[]): IRoute => {
  const foundRoute: IRoute | undefined = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  if (!foundRoute) {
    // Handle the case where no route is found
    return getDefaultRoute();
  }
  return foundRoute;
};

const getDefaultRoute = (): IRoute => {
  // Define your default route here
  const defaultRoute: IRoute = {
    name: "Map",
    layout: "/main",
    path: "/map",
    icon: "",
  };

  return defaultRoute;
};

export const getActiveRoute = (routes: IRoute[]): string => {
  const route = findCurrentRoute(routes);
  return route?.name || "Default Brand Text";
};

export const getActiveNavbar = (routes: IRoute[]): boolean => {
  const route = findCurrentRoute(routes);
  return route?.secondary !== undefined ? route.secondary : false;
};

export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
  return getActiveRoute(routes) || false;
};
