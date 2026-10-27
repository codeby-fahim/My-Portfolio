import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { containerClass } from "@/lib/ui";

const technologyCount = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B132B] text-white"
    >
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
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div
        className={`${containerClass} relative grid min-h-[calc(100svh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24`}
      >
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </div>

          <p className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-400" />
            Hello, I&apos;m
          </p>

          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.firstName}{" "}
            <span className="block text-emerald-400 sm:inline">
              {siteConfig.lastName}
            </span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-slate-200 sm:text-xl">
            {siteConfig.role}
          </p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400"
            >
              View my work
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </a>

            <Link
              href={siteConfig.resumePath}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-emerald-400/50 hover:bg-white/10"
            >
              <FaFileAlt aria-hidden="true" className="text-xs" />
              View résumé
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <SocialLinks />

            <span aria-hidden="true" className="hidden h-8 w-px bg-white/15 sm:block" />

            <p className="flex items-center gap-2 text-sm text-slate-300">
              <FaMapMarkerAlt
                aria-hidden="true"
                className="text-emerald-400"
              />
              {siteConfig.location}
            </p>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Projects
              </dt>
              <dd className="mt-1 text-xl font-bold text-white">
                {projects.length}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Technologies
              </dt>
              <dd className="mt-1 text-xl font-bold text-white">
                {technologyCount}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Based in
              </dt>
              <dd className="mt-1 text-xl font-bold text-white">Dhaka</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-emerald-400/20 sm:-inset-4"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-emerald-500/10 sm:-bottom-5 sm:-right-5"
          />

          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800 shadow-2xl shadow-slate-950/50">
            <Image
              src="/image/Portfolio2.png"
              alt={`Portrait of ${siteConfig.name}`}
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 448px"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -right-3 top-5 hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-[#0B132B]/95 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-lg backdrop-blur sm:flex">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            Open to opportunities
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Based in
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold">
              <FaMapMarkerAlt
                aria-hidden="true"
                className="text-emerald-600"
              />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
