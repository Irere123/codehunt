import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Client, cacheExchange, fetchExchange } from "urql";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

const client = new Client({
  url: "http://localhost:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>This is the notFoundComponent configured on root route</p>;
  },
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
