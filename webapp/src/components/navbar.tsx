import { Link, useNavigate } from "@tanstack/react-router";

import { useScroll } from "../hooks/use-scroll";
import { Button, buttonVariants } from "./ui/button";
import { cn, getAvatarFallback } from "../lib/utils";
import { NoteBookIcon, SparklesIcon } from "./icons";
import { useAuthContext } from "../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  const scrolled = useScroll(50);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div
      className={`fixed top-0 flex w-full justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 w-full max-w-screen-md items-center justify-between">
        <Link to="/">
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
          {user ? (
            <>
              <Link
                to={`/dashboard`}
                className="flex justify-center items-center h-10 w-10 bg-muted rounded-full"
              >
                <NoteBookIcon className="h-5 w-5" />
              </Link>
              <Link to={`/profile/$userId`} params={{ userId: user.id }}>
                <Avatar>
                  <AvatarImage src={user?.avatarUrl!} />
                  <AvatarFallback>
                    {getAvatarFallback(user?.username)}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <Button onClick={() => navigate({ to: "/login" })}>Sign in</Button>
          )}
        </div>
      </div>
    </div>
  );
}
