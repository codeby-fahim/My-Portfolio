import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { containerClass } from "@/lib/ui";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          id="projects-heading"
          description="A few full-stack and frontend projects that show how I approach interfaces, data, and real-world product problems."
          action={
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
            >
              View all projects
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </Link>
          }
        />

        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
