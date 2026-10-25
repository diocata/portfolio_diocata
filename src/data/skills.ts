import type { SkillCategory, Language } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Scala", "R"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS", "D3.js", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "Django", "REST APIs", "OpenAPI 3.1"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Athena", "S3", "Amazon SES"],
  },
  {
    title: "AI & Data",
    skills: [
      "Strands Agents",
      "MCP (Model Context Protocol)",
      "AWS AgentCore",
      "LLMs & AI Agents",
      "PyTorch",
      "Data Pipelines",
      "Pandas",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "pnpm", "Jupyter", "VS Code"],
  },
];

export const languages: Language[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
  { name: "German", level: "Basic" },
];
