import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowLeft,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { siteConfig } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import PrintResumeButton from "./PrintResumeButton";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Md. Rakibul Islam Fahim, a full-stack web developer based in Dhaka, Bangladesh.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    url: "/resume",
  },
};

const github = siteConfig.socials.find((social) => social.name === "GitHub");
const linkedin = siteConfig.socials.find((social) => social.name === "LinkedIn");

export default function ResumePage() {
  return (
    <div className="bg-slate-100 py-10 print:bg-white print:py-0">
      <div className="mx-auto w-full max-w-4xl px-5 print:max-w-none print:px-0">
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
          >
            <FaArrowLeft aria-hidden="true" className="text-xs" />
            Back to portfolio
          </Link>

          <PrintResumeButton />
        </div>

        <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 print:mt-0 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <header className="border-b border-slate-200 pb-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {siteConfig.name}
                </h1>
                <p className="mt-2 text-lg font-semibold text-emerald-700">
                  {siteConfig.role}
                </p>
                <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-slate-600">
                  {siteConfig.description}
                </p>
              </div>

              <address className="not-italic sm:text-right">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-emerald-700"
                    >
                      <FaEnvelope
                        aria-hidden="true"
                        className="text-emerald-600"
                      />
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-emerald-700"
                    >
                      <FaPhoneAlt
                        aria-hidden="true"
                        className="text-emerald-600"
                      />
                      {siteConfig.phoneDisplay}
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <FaMapMarkerAlt
                      aria-hidden="true"
                      className="text-emerald-600"
                    />
                    {siteConfig.location}
                  </li>
                </ul>
              </address>
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {github ? (
                <li>
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-emerald-700"
                  >
                    <FaGithub aria-hidden="true" />
                    github.com/codeby-fahim
                  </a>
                </li>
              ) : null}

              {linkedin ? (
                <li>
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-emerald-700"
                  >
                    <FaLinkedinIn aria-hidden="true" />
                    linkedin.com/in/md-rakibul-islam-fahim
                  </a>
                </li>
              ) : null}
            </ul>
          </header>

          <section className="mt-7 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Profile
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
              {siteConfig.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-7 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Skills
            </h2>

            <dl className="mt-3 space-y-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-1 sm:grid-cols-[180px_1fr]"
                >
                  <dt className="text-sm font-semibold text-slate-900">
                    {group.title}
                  </dt>
                  <dd className="text-sm leading-6 text-slate-700">
                    {group.skills.map((skill) => skill.name).join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Selected projects
            </h2>

            <div className="mt-4 space-y-5">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="print:break-inside-avoid border-l-2 border-emerald-200 pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {project.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm leading-7 text-slate-700">
                    {project.description}
                  </p>

                  <p className="mt-1.5 text-xs leading-6 text-slate-500">
                    <span className="font-semibold text-slate-600">
                      Tech:
                    </span>{" "}
                    {project.technologies.join(", ")}
                  </p>

                  <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-700 transition-colors hover:text-emerald-800"
                    >
                      Live demo
                      <FaExternalLinkAlt aria-hidden="true" className="text-[9px]" />
                    </a>

                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-700 transition-colors hover:text-emerald-700"
                      >
                        Source code
                        <FaExternalLinkAlt aria-hidden="true" className="text-[9px]" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
            Open to new opportunities and collaborations. Feel free to reach out
            at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-emerald-700"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  );
}
