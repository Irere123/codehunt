import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/p/$projectId")({
  component: () => <ProjectPage />,
});

function ProjectPage() {
  const { projectId } = Route.useParams();

  console.log(projectId);

  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}
