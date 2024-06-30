import { Link } from "@tanstack/react-router";
import { ArrowUpIcon, BadgeCheckIcon } from "../icons";

export function FeaturedProjectsGrid() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Link className="overflow-hidden flex items-center rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl">
        <div className="px-3">
          <div className="h-14 w-14 rounded-full bg-slate-200" />
        </div>
        <div className="p-4">
          <div className="flex gap-2 items-center">
            <h2 className="font-semibold text-xl">OSS Gallery</h2>
            <BadgeCheckIcon className="h-6 w-6 text-white" fill="#1c9bef" />
          </div>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et
            error deserunt nam est esse excepturi amet, labore odio ea?
          </p>
        </div>
      </Link>
      <Link className="overflow-hidden flex items-center rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl">
        <div className="px-3">
          <div className="h-14 w-14 rounded-full bg-slate-200" />
        </div>
        <div className="flex flex-col p-4 gap-3">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <h2 className="font-semibold text-xl">Spek</h2>
              <BadgeCheckIcon className="h-6 w-6 text-white" fill="#1c9bef" />
            </div>
            <div>
              <div className="flex gap-2 items-center border border-gray-300 px-3 py-1 text-gray-400 rounded-lg">
                <ArrowUpIcon className="h-4 w-4" />
                <p>20K</p>
              </div>
            </div>
          </div>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et
            error deserunt nam est esse excepturi amet, labore odio ea?
          </p>
        </div>
      </Link>
    </div>
  );
}
