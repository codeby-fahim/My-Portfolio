import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  action,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        centered
          ? "items-center text-center"
          : "sm:flex-row sm:items-end sm:justify-between"
      } ${className}`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        <p
          className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="h-1 w-6 rounded-full bg-emerald-500"
          />
          {eyebrow}
        </p>

        <h2
          id={id}
          className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {title}
        </h2>

        {description ? (
          <p className="mt-3 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
