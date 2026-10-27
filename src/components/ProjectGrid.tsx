import ProjectCard from "@/components/ProjectCard";
import type { IProject } from "@/types/project";

type ProjectGridProps = {
  projects: IProject[];
  priorityCount?: number;
};

export default function ProjectGrid({
  projects,
  priorityCount = 0,
}: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
