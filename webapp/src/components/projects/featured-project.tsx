import { Link } from "@tanstack/react-router";

import { ArrowUpIcon, BadgeCheckIcon } from "../icons";
import { nFormatter } from "../../lib/nFormatter";
import { buttonLinkVariants } from "../ui/button-link";
import { Project } from "../../gql/graphql";

interface Props {
  project: Project;
}

export function FeaturedProjectCard({ project }: Props) {
  return (
    <Link className="overflow-hidden flex flex-col sm:flex-row items-center rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <div className="px-3 pt-3">
        <div className="h-14 w-14 rounded-full bg-slate-200" />
      </div>
      <div className="flex flex-col p-4 gap-3">
        <div className="flex gap-2 items-center justify-between">
          {project.featured && (
            <div className="flex gap-2 items-center">
              <h2 className="font-semibold text-xl">{project.name}</h2>
              <BadgeCheckIcon className="h-6 w-6 text-white" fill="#1c9bef" />
            </div>
          )}
          <div>
            <div className={buttonLinkVariants({ variant: "secondary" })}>
              <ArrowUpIcon className="h-4 w-4" />
              <p>{nFormatter(23234, { full: true })}</p>
            </div>
          </div>
        </div>
        <p className="font-light">{project.description}</p>
      </div>
    </Link>
  );
}
