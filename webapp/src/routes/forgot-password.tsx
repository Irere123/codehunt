import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forgot-password")({
  component: () => <div>Hello /forgot-password!</div>,
});
