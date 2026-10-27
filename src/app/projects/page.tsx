import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import { containerClass, primaryButtonClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack and frontend projects by Md. Rakibul Islam Fahim, including developer tools, a fitness tracker, and a market price monitoring app.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
  },
};

export default function ProjectsPage() {
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
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
        />

        <div className={`${containerClass} relative py-16 sm:py-20`}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-emerald-400"
          >
            <FaArrowLeft aria-hidden="true" className="text-xs" />
            Back to home
          </Link>

          <p className="mt-10 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            <span aria-hidden="true" className="h-1 w-6 rounded-full bg-emerald-400" />
            Portfolio
          </p>

          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            A collection of full-stack and frontend work focused on clean
            interfaces, thoughtful user experience, and practical problem
            solving.
          </p>
        </div>
      </section>

      <section className={`${containerClass} py-16 sm:py-20`}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              All work
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Open a project to read about the build, challenges, and next steps.
            </p>
          </div>

          <p className="text-sm font-semibold text-slate-500">
            {projects.length} projects
          </p>
        </div>

        <div className="mt-8">
          <ProjectGrid projects={projects} priorityCount={2} />
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Next step
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Have a project in mind?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              I&apos;m always interested in new ideas, collaborations, and
              opportunities to build something useful.
            </p>
          </div>

          <Link href="/#contact" className={`${primaryButtonClass} shrink-0`}>
            Get in touch
            <FaArrowRight aria-hidden="true" className="text-xs" />
          </Link>
        </div>
      </section>
    </div>
  );
}
