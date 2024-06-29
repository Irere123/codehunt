import { Link } from "@tanstack/react-router";
import { useScroll } from "../hooks/use-scroll";

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
          <img src="/logomark.svg" alt="OSS Gallery logo" className="h-14" />
        </Link>
        <div className="flex items-center space-x-2">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
