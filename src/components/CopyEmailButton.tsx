"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-emerald-400/50 hover:bg-white/10"
    >
      {copied ? (
        <>
          <FaCheck aria-hidden="true" className="text-emerald-400" />
          Email copied
        </>
      ) : (
        <>
          <FaCopy aria-hidden="true" />
          Copy email
        </>
      )}
    </button>
  );
}
