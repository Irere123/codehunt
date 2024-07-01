import { cn } from "../../lib/utils";
import ProjectCard from "./project-card";

export default function ProjectsGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
