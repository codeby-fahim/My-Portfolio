import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
  FaEnvelope,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/data/portfolio";
import { containerClass } from "@/lib/ui";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="print:hidden border-t border-white/10 bg-[#0B132B] text-slate-300">
      <div className={`${containerClass} py-14`}>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10">
                <Image
                  src="/image/Logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <span className="text-xl font-bold tracking-wide text-emerald-400">
                {siteConfig.shortName.toUpperCase()}
                <span className="text-white">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Full-stack web developer building modern, responsive, and
              user-focused products from Dhaka, Bangladesh.
            </p>

            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    className="text-sm text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-slate-300 transition-colors hover:text-emerald-400"
                >
                  All projects
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <FaEnvelope aria-hidden="true" className="text-emerald-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <FaPhoneAlt aria-hidden="true" className="text-emerald-400" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-sm text-slate-300">
                <FaMapMarkerAlt
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-emerald-400"
                />
                {siteConfig.location}
              </li>
              <li>
                <Link
                  href={siteConfig.resumePath}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <FaFileAlt aria-hidden="true" className="text-emerald-400" />
                  Résumé
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p>Built with Next.js, React &amp; Tailwind CSS.</p>
            <Link
              href="/#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
            >
              <FaArrowUp aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
