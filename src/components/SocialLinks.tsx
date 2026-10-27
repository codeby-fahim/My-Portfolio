import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { siteConfig } from "@/data/portfolio";

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  email: FaEnvelope,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {siteConfig.socials.map((social) => {
        const Icon = iconMap[social.icon];
        const isExternal = social.href.startsWith("http");

        return (
          <li key={social.name}>
            <a
              href={social.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={social.name}
              title={social.name}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500 hover:text-slate-950"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
