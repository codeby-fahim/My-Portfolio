export const siteConfig = {
  name: "Md. Rakibul Islam Fahim",
  firstName: "Md. Rakibul Islam",
  lastName: "Fahim",
  shortName: "Fahim",
  role: "Full-Stack Web Developer",
  location: "Mirpur-1, Dhaka, Bangladesh",
  email: "fahimdf177@gmail.com",
  phone: "+8801775233949",
  phoneDisplay: "+880 1775 233 949",
  whatsapp: "https://wa.me/8801775233949",
  available: true,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumePath: "/resume",
  description:
    "Md. Rakibul Islam Fahim is a full-stack web developer based in Dhaka, Bangladesh, building modern, responsive web applications with Next.js, React, TypeScript, Node.js, and MongoDB.",
  tagline:
    "I build modern, responsive, and user-friendly web applications with Next.js, React, TypeScript, and Node.js.",
  bio: [
    "I am a dedicated and enthusiastic web developer with a strong interest in modern web technologies. I enjoy building clean, scalable, and user-friendly applications that feel good to use.",
    "I love solving problems, learning new tools, and turning ideas into real products. My focus is on writing maintainable code, crafting thoughtful interfaces, and shipping work that people enjoy using.",
  ],
  navLinks: [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ],
  socials: [
    { name: "GitHub", href: "https://github.com/codeby-fahim", icon: "github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/md-rakibul-islam-fahim",
      icon: "linkedin",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1D4gWMQXMk/",
      icon: "facebook",
    },
    { name: "Email", href: "mailto:fahimdf177@gmail.com", icon: "email" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
