import { useQuery } from "urql";
import { graphql } from "../../gql";
import { FeaturedProjectCard } from "./featured-project";
import { Project } from "../../gql/graphql";

const FeaturedProjectsQuery = graphql(`
  query FeaturedProjects {
    getFeaturedProjects {
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

export function FeaturedProjectsGrid() {
  const [{ fetching, data }] = useQuery({ query: FeaturedProjectsQuery });

  if (fetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {data?.getFeaturedProjects?.map((project: Project | null) => (
        <FeaturedProjectCard key={project?.id} project={project!} />
      ))}
    </div>
  );
}
