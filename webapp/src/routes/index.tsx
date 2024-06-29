import { createFileRoute, Link } from "@tanstack/react-router";
import { MainLayout } from "../components/layouts/MainLayout";
import { BookOpenIcon } from "../components/icons";

export const Route = createFileRoute("/")({
  component: () => <IndexComponent />,
});

function IndexComponent() {
  return (
    <MainLayout>
      <div className="relative z-10 mx-auto w-full max-w-xl px-5 py-10 xl:px-0">
        <Link
          to={`/why-build-this`}
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-7 py-2 transition-colors hover:bg-gray-50"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <BookOpenIcon className="h-4 w-4 text-gray-600" />
          <p className="text-sm font-semibold text-gray-600">
            Why we built ReLaunch?
          </p>
        </Link>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[1.1]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Discover the best open-source projects
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          A crowdsourced list of the best open-source projects on the internet.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        ></div>
      </div>
    </MainLayout>
  );
}
