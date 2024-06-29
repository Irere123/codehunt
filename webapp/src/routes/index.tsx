import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";

export const Route = createFileRoute("/")({
  component: () => <IndexComponent />,
});

function IndexComponent() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
