import { cn } from "../../lib/utils";
import { nFormatter } from "../../lib/nFormatter";
import { Link } from "@tanstack/react-router";
import { ArrowUpIcon, BadgeCheckIcon } from "../icons";
import { buttonLinkVariants } from "../ui/button-link";

export default function ProjectCard() {
  return (
    <Link
      to={`/`}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div
        className={cn(
          "aspect-[5/2] w-full rounded-t-xl bg-gradient-to-tr",
          "from-purple-100 via-violet-50 to-blue-100"
        )}
      />
      <div className="-mt-8 flex items-center justify-between px-2">
        <img
          src={""}
          alt={""}
          width={100}
          height={100}
          className="h-16 w-16 rounded-full bg-white p-2"
        />
        <div className={buttonLinkVariants({ variant: "secondary" })}>
          <ArrowUpIcon className="h-4 w-4" />
          <p className="text-sm">{nFormatter(23432, { full: true })}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-1">
          <h2 className="font-display text-xl font-semibold">
            {"Hello world"}
          </h2>

          <BadgeCheckIcon className="h-6 w-6 text-white" fill="#1c9bef" />
        </div>
        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quisquam enim error ad officia laudantium aspernatur, provident ut
          officiis nesciunt.
        </p>
      </div>
    </Link>
  );
}
