import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaFileAlt,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/portfolio";
import { containerClass } from "@/lib/ui";

const highlights = [
  {
    title: "Problem solver",
    description:
      "I break complex requirements into simple, maintainable solutions.",
    icon: FaLightbulb,
  },
  {
    title: "Team player",
    description:
      "I communicate clearly and collaborate well across teams and disciplines.",
    icon: FaUsers,
  },
  {
    title: "Quick learner",
    description:
      "I pick up new tools and frameworks quickly and apply them with care.",
    icon: FaBookOpen,
  },
  {
    title: "Goal oriented",
    description:
      "I focus on shipping polished, reliable features that solve real problems.",
    icon: FaBullseye,
  },
];

const focusAreas = [
  "Full-stack development",
  "Responsive UI",
  "Clean architecture",
  "Performance",
  "Accessibility",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className={containerClass}>
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About me"
              title="A developer focused on clean, reliable products"
              id="about-heading"
            />

            <div className="mt-6 space-y-4 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              {siteConfig.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Focus areas
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="#contact"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                    Let&apos;s work together
                  </p>
                  <p className="mt-1.5 font-semibold text-slate-900">
                    Start a conversation
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 transition-transform group-hover:translate-x-1">
                  <FaArrowRight aria-hidden="true" className="text-sm" />
                </span>
              </a>

              <Link
                href={siteConfig.resumePath}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                    My experience
                  </p>
                  <p className="mt-1.5 font-semibold text-slate-900">
                    View résumé
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 transition-transform group-hover:translate-x-1">
                  <FaFileAlt aria-hidden="true" className="text-sm" />
                </span>
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              />
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                What I bring
              </h3>
            </div>

            <ul className="mt-7 space-y-7">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <li key={highlight.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-700">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {highlight.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {highlight.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
