import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import CopyEmailButton from "@/components/CopyEmailButton";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/portfolio";
import { containerClass } from "@/lib/ui";

const contactMethods = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: FaEnvelope,
    external: false,
  },
  {
    title: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    icon: FaPhoneAlt,
    external: false,
  },
  {
    title: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsapp,
    icon: FaWhatsapp,
    external: true,
  },
  {
    title: "Location",
    value: siteConfig.location,
    href: "https://www.google.com/maps/place/Mirpur+1,+Dhaka",
    icon: FaMapMarkerAlt,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          id="contact-heading"
          description="Have a project, a role, or an idea you'd like to talk about? I'd be glad to hear from you."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B132B] p-7 text-white shadow-xl shadow-slate-950/10 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"
            />

            <div className="relative">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                Open to opportunities
              </p>

              <h3 className="mt-5 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                Have a project in mind? Let&apos;s make it real.
              </h3>

              <p className="mt-3 max-w-md text-pretty text-sm leading-7 text-slate-300 sm:text-base">
                I&apos;m open to new opportunities, collaborations, and
                interesting projects. Send a message and I&apos;ll get back to
                you as soon as I can.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400"
                >
                  Send an email
                  <FaArrowRight aria-hidden="true" className="text-xs" />
                </a>

                <CopyEmailButton email={siteConfig.email} />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6 text-sm text-slate-300">
                <span>Prefer a quick chat?</span>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Message on WhatsApp
                  <FaExternalLinkAlt aria-hidden="true" className="text-[10px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-lg text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-slate-950">
                      <Icon aria-hidden="true" />
                    </span>

                    <FaArrowRight
                      aria-hidden="true"
                      className="mt-1 text-xs text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-emerald-600"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      {method.title}
                    </p>
                    <p className="mt-1.5 wrap-break-word text-sm font-semibold text-slate-900">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <Link
              href="/projects"
              className="group flex flex-col justify-between gap-6 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/60 p-5 transition duration-200 hover:border-emerald-500 hover:bg-emerald-50 sm:col-span-2 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                  Looking for proof?
                </p>
                <p className="mt-1.5 font-semibold text-slate-900">
                  Explore the projects I&apos;ve built
                </p>
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                View projects
                <FaArrowRight
                  aria-hidden="true"
                  className="text-xs transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
