export type Locale = "pl" | "en";

export type LocalizedText = {
  pl: string;
  en: string;
};

export type ProjectCategory = "fullstack" | "frontend" | "landing-page" | "practice" | "api";

export type ProjectStatus = "live" | "in-progress" | "archived";

export type ProjectDifficulty = "beginner" | "intermediate" | "advanced";

export type TechDecision = {
  problem: LocalizedText;
  decision: LocalizedText;
  result: LocalizedText;
};

export type Challenge = {
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  category: ProjectCategory;
  status: ProjectStatus;
  difficulty: ProjectDifficulty;
  featured: boolean;
  priority: number;
  stack: string[];
  features: LocalizedText[];
  techDecisions: TechDecision[];
  challenges: Challenge[];
  learnings: LocalizedText[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  createdAt: string;
};
