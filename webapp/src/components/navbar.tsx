import { Link } from "@tanstack/react-router";

import { useScroll } from "../hooks/use-scroll";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { SparklesIcon } from "./icons";

export default function Navbar() {
  const scrolled = useScroll(50);

  return (
    <div
      className={`fixed top-0 flex w-full justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 w-full max-w-screen-md items-center justify-between">
        <Link href="/">
          <img src="/logomark.svg" alt="ReLaunch logo" className="h-14" />
        </Link>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/irere123/codehunt"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "px-3 py-1.5"
            )}
          >
            <SparklesIcon className="h-4 w-4" />
            <p className="text-sm ml-2">{23}</p>
          </a>
          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  );
}
