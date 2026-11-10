"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { FaBars, FaFileAlt, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/data/portfolio";
import { containerClass } from "@/lib/ui";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const sections = siteConfig.navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const activeId = isHome
    ? activeSection
    : pathname.startsWith("/projects")
      ? "projects"
      : "";

  function handleNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    setIsMenuOpen(false);

    if (!isHome) return;

    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  }

  return (
    <header className="print:hidden sticky top-0 z-50 border-b border-white/10 bg-[#0B132B]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className={`${containerClass} flex h-20 items-center justify-between gap-4`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setIsMenuOpen(false)}
          aria-label={`${siteConfig.shortName} — home`}
        >
          <Image
            src="/image/Logo.png"
            alt=""
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
          <span className="text-xl font-bold tracking-wide text-emerald-400 sm:text-2xl">
            {siteConfig.shortName.toUpperCase()}
            <span className="text-white">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive = activeId === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={isHome ? `#${link.id}` : `/#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-emerald-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={siteConfig.resumePath}
          target="_blank"
          onClick={() => setIsMenuOpen(false)}
          className="hidden items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400 sm:inline-flex"
        >
          <FaFileAlt aria-hidden="true" className="text-xs" />
          Résumé
        </Link>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={siteConfig.resumePath}
            onClick={() => setIsMenuOpen(false)}
            aria-label="View résumé"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 transition-colors hover:bg-emerald-400 sm:hidden"
          >
            <FaFileAlt aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-lg text-white transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
          >
            {isMenuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 border-t-transparent opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <ul className={`${containerClass} space-y-1 py-3`}>
          {siteConfig.navLinks.map((link) => {
            const isActive = activeId === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={isHome ? `#${link.id}` : `/#${link.id}`}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={(event) => handleNavClick(event, link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/5 text-emerald-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
