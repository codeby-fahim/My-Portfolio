import type { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiBetterauth,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, components, and responsive layouts.",
    skills: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#C7A600]" },
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#0891B2]" },
    ],
  },
  {
    title: "Backend & Database",
    description: "APIs, data modelling, and authentication.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Better Auth", icon: SiBetterauth, color: "text-[#2563EB]" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Version control, testing, and design handoff.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-slate-900" },
      { name: "VS Code", icon: BiLogoVisualStudio, color: "text-[#007ACC]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
    ],
  },
];
