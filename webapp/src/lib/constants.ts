export const __prod__ = process.env.NODE_ENV === "production";
export const api_url = !__prod__
  ? "http://localhost:4000/graphql"
  : "https://relaunch-api.fly.dev";
