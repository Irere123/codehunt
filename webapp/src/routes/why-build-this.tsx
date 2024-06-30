import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/why-build-this")({
  component: () => <div>Hello /why-build-this!</div>,
});
