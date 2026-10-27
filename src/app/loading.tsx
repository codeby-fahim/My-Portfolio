export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] items-center justify-center bg-white px-5"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex h-14 w-14 items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-full border-2 border-emerald-500/25 border-t-emerald-600"
          />
          <span
            aria-hidden="true"
            className="text-sm font-bold text-emerald-700"
          >
            F
          </span>
        </span>

        <p className="text-sm font-medium text-slate-500">Loading…</p>
      </div>
    </div>
  );
}
