import type { IProject } from "@/types/project";

export const projects: IProject[] = [
  {
    slug: "development-stack",
    name: "Development Stack",
    category: "Developer Tool",
    description:
      "An interactive web showcase application built for developers to compare frontend, backend, database, and modern tooling options side-by-side to choose the perfect tech stack for their next project.",
    image: "/image/devstack.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://a05-dev-stack-eight.vercel.app/",
    githubLink: "https://github.com/codeby-fahim/A05-DevStack.git",
    challenges: [
      "Organizing complex technology data structures into clean and readable card layouts.",
      "Refactoring components into fully reusable and scalable building blocks.",
      "Keeping navigation and page routing smooth and fast.",
      "Balancing modern UI libraries with custom styling.",
    ],
    improvements: [
      "Let users save or export custom tech stacks as PDFs or shareable links.",
      "Add a compatibility analysis feature for popular tech stacks.",
      "Make the search and filter system more advanced and instant.",
      "Add full keyboard accessibility for navigation.",
    ],
  },
  {
    slug: "fit-log",
    name: "FitLog",
    category: "Fitness Tracker",
    description:
      "An engaging dark-themed gym and workout tracking companion app that helps users choose their preferred exercises, add them to today's workout plan, and track weekly progress.",
    image: "/image/fitlog.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://a06-fit-log-teal.vercel.app/",
    githubLink: "https://github.com/codeby-fahim/A06-Fit-Log.git",
    challenges: [
      "Achieving precise color contrast and a premium feel in a dark interface.",
      "Handling state for workout schedules and plan management.",
      "Aligning gym graphics and text across every screen size.",
      "Persisting custom user routines reliably.",
    ],
    improvements: [
      "Add a calorie burn calculator and fitness progress analytics.",
      "Integrate social sharing so users can share workouts with friends.",
      "Add a built-in stopwatch and rest timer.",
      "Implement offline support as a Progressive Web App.",
    ],
  },
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    category: "E-commerce",
    description:
      "A modern e-commerce and market price monitoring web application that allows users to easily compare current market prices, minimum-maximum rates, and price fluctuations of daily essentials such as rice, lentils, oil, vegetables, fish, and meat in one place.",
    image: "/image/bazardor.jpg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
    ],
    liveLink: "https://a07-bazar-dor-liart.vercel.app/",
    githubLink: "https://github.com/codeby-fahim/a07-bazar-dor.git",
    challenges: [
      "Fetching and rendering live, dynamic data accurately.",
      "Keeping tables and card layouts responsive on every device.",
      "Securing user authentication and session management.",
      "Filtering and searching products quickly across categories.",
    ],
    improvements: [
      "Add charts to display historical price data.",
      "Introduce daily price alerts and notifications for users.",
      "Show price variations based on local markets.",
      "Further optimize accessibility and page loading speed.",
    ],
  },
];

export default projects;
