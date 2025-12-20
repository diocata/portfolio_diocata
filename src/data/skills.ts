import type { SkillCategory, Language } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Scala", "R"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "Django", "REST APIs"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Athena", "S3"],
  },
  {
    title: "AI & Data",
    skills: ["LLMs", "AI Agents", "Strands Agents", "Data Pipelines", "Jupyter", "Pandas"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Asana"],
  },
];

export const languages: Language[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
  { name: "German", level: "Basic" },
];
