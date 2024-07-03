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
    <Link
      to="/p/$projectId"
      params={{ projectId: project.id }}
      className="overflow-hidden flex flex-col w-full sm:flex-row items-center rounded-md border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="flex flex-col p-4 gap-3 w-full">
        <div className="flex gap-2 items-center justify-between">
          {project.featured && (
            <div className="flex gap-2 items-center">
              <h2 className="font-semibold text-xl">{project.name}</h2>
              <BadgeCheckIcon className="h-6 w-6 text-white" fill="#1c9bef" />
            </div>
          )}
          <div className="flex justify-between">
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
