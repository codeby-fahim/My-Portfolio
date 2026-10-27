import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";
import { containerClass } from "@/lib/ui";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          id="skills-heading"
          description="The tools and technologies I use to design, build, and ship modern web applications."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {group.description}
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  {group.skills.length}
                </span>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <li
                      key={skill.name}
                      className="flex min-w-0 items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 transition-colors hover:border-slate-200 hover:bg-white"
                    >
                      <Icon
                        aria-hidden="true"
                        className={`shrink-0 text-xl ${skill.color}`}
                      />
                      <span className="truncate text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
