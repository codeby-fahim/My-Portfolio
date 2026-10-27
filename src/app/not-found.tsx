import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaFolderOpen } from "react-icons/fa";
import { primaryButtonClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-5 py-20">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
          Error 404
        </p>

        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-7 text-slate-600">
          The page you are looking for may have been moved, renamed, or never
          existed. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={primaryButtonClass}>
            <FaArrowLeft aria-hidden="true" className="text-xs" />
            Back home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-700"
          >
            <FaFolderOpen aria-hidden="true" className="text-xs" />
            Browse projects
          </Link>
        </div>
      </div>
    </div>
  );
}
