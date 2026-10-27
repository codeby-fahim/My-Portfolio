"use client";

import { FaPrint } from "react-icons/fa";

export default function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400"
    >
      <FaPrint aria-hidden="true" />
      Print / Save PDF
    </button>
  );
}
