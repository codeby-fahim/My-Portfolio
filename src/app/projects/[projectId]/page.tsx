import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import { projects } from "@/data/projects";
import { containerClass, primaryButtonClass } from "@/lib/ui";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((item) => item.slug === projectId);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `/projects/${project.slug}`,
      siteName: "Fahim Portfolio",
      title: `${project.name} — Project`,
      description: project.description,
      images: [
        {
          url: project.image,
          alt: `${project.name} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Project`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { projectId } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === projectId);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B132B] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.07) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
        />

        <div className={`${containerClass} relative py-12 sm:py-16`}>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-emerald-400">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/projects"
              className="transition-colors hover:text-emerald-400"
            >
              Projects
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-slate-200">
              {project.name}
            </span>
          </nav>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
              {project.category}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {project.technologies.length} technologies
            </span>
          </div>

          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>

          <p className="mt-4 max-w-3xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButtonClass}
            >
              Visit live site
              <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
            </a>

            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-emerald-400/50 hover:bg-white/10"
              >
                <FaGithub aria-hidden="true" />
                View source
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className={`${containerClass} py-14 sm:py-16`}>
        <div className="relative aspect-[2/1] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10">
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
          <div className="space-y-12">
            <section aria-labelledby="challenges-heading">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-700">
                  <FaCheckCircle aria-hidden="true" />
                </span>
                <div>
                  <h2
                    id="challenges-heading"
                    className="text-2xl font-bold tracking-tight text-slate-900"
                  >
                    Challenges
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Problems I worked through while building the project.
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={challenge}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-emerald-700 shadow-sm"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-slate-700 sm:text-base">
                      {challenge}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="improvements-heading">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-700">
                  <FaRocket aria-hidden="true" />
                </span>
                <div>
                  <h2
                    id="improvements-heading"
                    className="text-2xl font-bold tracking-tight text-slate-900"
                  >
                    Future improvements
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    What I would build next to take the product further.
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/40"
                  >
                    <FaRocket
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-xs text-emerald-600"
                    />
                    <p className="text-sm leading-6 text-slate-700">
                      {improvement}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                <FaLayerGroup aria-hidden="true" className="text-emerald-600" />
                Tech stack
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Project links
              </h2>

              <div className="mt-4 space-y-2.5">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3.5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Live demo
                  <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                </a>

                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3.5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    Source code
                    <FaGithub aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <p className="px-5 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Next project
              </p>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group mt-3 flex items-center gap-4 px-5 pb-5"
              >
                <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                  <Image
                    src={nextProject.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </span>

                <span className="min-w-0">
                  <span className="block truncate font-semibold text-slate-900 transition-colors group-hover:text-emerald-700">
                    {nextProject.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {nextProject.category}
                  </span>
                </span>

                <FaArrowRight
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-xs text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-600"
                />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Keep exploring
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              More projects and ideas
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              Browse the full portfolio or get in touch if you would like to
              talk about a project.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-emerald-500 hover:text-emerald-700"
            >
              <FaArrowLeft aria-hidden="true" className="text-xs" />
              All projects
            </Link>
            <Link href="/#contact" className={`${primaryButtonClass}`}>
              Get in touch
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
