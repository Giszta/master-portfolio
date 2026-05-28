export type SkillStatus = "learning" | "comfortable" | "used-in-projects";

export type SkillCategory =
  | "frontend-core"
  | "ui-engineering"
  | "data-api"
  | "testing"
  | "tools-deployment";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  description: {
    pl: string;
    en: string;
  };
  usedInProjects: string[];
  icon?: string;
};
