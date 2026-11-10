import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import type { IProject } from "@/types/project";

type ProjectCardProps = {
  project: IProject;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 4);
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name} case study`}
        className="relative block aspect-2/1 overflow-hidden bg-slate-100"
      >
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-[#0B132B]/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          View case study
          <FaArrowRight className="text-[10px]" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-emerald-700"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <ul className="mb-5 mt-4 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {technology}
            </li>
          ))}

          {remainingTechnologies > 0 ? (
            <li className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
              +{remainingTechnologies}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
          >
            Live demo
            <FaExternalLinkAlt aria-hidden="true" className="text-[10px]" />
          </a>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
          >
            Details
            <FaArrowRight
              aria-hidden="true"
              className="text-[10px] transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
