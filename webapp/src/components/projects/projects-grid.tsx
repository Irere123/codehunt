import { useQuery } from "urql";
import { graphql } from "../../gql";
import { cn } from "../../lib/utils";
import ProjectCard from "./project-card";
import { Project } from "../../gql/graphql";

const ProjectsQuery = graphql(`
  query Projects {
    getAllProjects {
      bannerUrl
      description
      name
      githubRepoUrl
      name
      website
      id
      picture
      featured
    }
  }
`);

export default function ProjectsGrid({ className }: { className?: string }) {
  const [{ fetching, data }] = useQuery({ query: ProjectsQuery });

  if (fetching) {
    return <div>loading...</div>;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {data.getAllProjects.map((project: Project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
