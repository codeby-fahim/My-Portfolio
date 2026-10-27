export interface IProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink?: string;
  challenges: string[];
  improvements: string[];
}
