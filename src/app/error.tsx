"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaArrowLeft, FaRedo } from "react-icons/fa";
import { primaryButtonClass } from "@/lib/ui";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-5 py-20">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
          Something went wrong
        </p>

        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          We hit an unexpected error
        </h1>

        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-7 text-slate-600">
          Please try again. If the problem continues, refresh the page or head
          back to the home page.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className={primaryButtonClass}>
            <FaRedo aria-hidden="true" className="text-xs" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-700"
          >
            <FaArrowLeft aria-hidden="true" className="text-xs" />
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
