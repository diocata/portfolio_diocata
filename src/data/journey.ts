import { Briefcase, GraduationCap, Globe } from "lucide-react";
import type { JourneyItem } from "@/types";

export const journeyItems: JourneyItem[] = [
  {
    title: "Business Intelligence Engineer I",
    organization: "Amazon, Luxembourg",
    period: "August 2024 - Present",
    description:
      "Building full-stack applications that optimize Amazon's logistics operations.\n\nDeveloping AI agents to automate manual labor and improve production efficiency.\n\nWorking with React, TypeScript, and Python, leveraging AWS services including API Gateway, DynamoDB, and Lambda.",
    skills: [
      "React",
      "TypeScript",
      "Python",
      "AWS",
      "API Gateway",
      "DynamoDB",
      "Lambda",
      "AI",
    ],
    icon: Briefcase,
  },
  {
    title: "Software Developer Engineer - Performance Science",
    organization: "The Goodyear Tire & Rubber Company, Luxembourg",
    period: "February 2024 - August 2024",
    description:
      "Developed an in-house data visualization tool using React.js and Redux Toolkit, enhancing data interaction and decision-making capabilities.\n\nEngineered the backend API with Python's FastAPI framework, integrating querying capabilities with Amazon AWS and Athena for data management.\n\nConducted statistical analyses, including ANOVA tests, post hoc tests, and Bayesian inference, to validate data integrity and analytical assumptions.\n\nRebuilt existing data pipelines and designed new ones from scratch to streamline data flow and optimize processing efficiency across global operations.",
    skills: ["React.js", "Redux", "FastAPI", "AWS", "Athena", "Statistics"],
    icon: Briefcase,
  },
  {
    title: "Master's Degree, Computer Science and Engineering",
    organization: "Instituto Superior Técnico, Lisbon",
    period: "September 2022 - November 2024",
    description: "Specialization in Data Science",
    skills: ["SQL", "PDI", "MDX", "Python", "R", "d3.js"],
    icon: GraduationCap,
  },
  {
    title: "Erasmus Exchange",
    organization: "Julius-Maximilians-Universität, Würzburg",
    period: "March 2023 - September 2023",
    description:
      "Several multicultural experiences. Developed advanced Jupyter skills.",
    skills: ["Jupyter", "Data Analysis"],
    icon: Globe,
  },
  {
    title: "SET - Semana Empresarial do Técnico",
    organization: "Instituto Superior Técnico, Lisbon",
    period: "October 2022 - September 2023",
    description: "Development of the event website.",
    skills: ["Web Development"],
    icon: Briefcase,
  },
  {
    title: "Bachelor's Degree, Computer Science Engineering",
    organization: "Iscte - Instituto Universitário de Lisboa",
    period: "September 2019 - July 2022",
    description: "Comprehensive foundation in computer science fundamentals.",
    skills: [
      "Java",
      "Scala",
      "Data Structures",
      "MySQL",
      "MongoDB",
      "Python",
      "HTML/CSS",
    ],
    icon: GraduationCap,
  },
];
