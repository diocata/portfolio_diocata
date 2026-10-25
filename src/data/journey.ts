import { Briefcase, GraduationCap, Globe } from "lucide-react";
import type { JourneyItem } from "@/types";

export const journeyItems: JourneyItem[] = [
  {
    title: "Software Development Engineer II",
    organization: "Amazon, Luxembourg",
    period: "September 2026 - Present",
    badge: "Promoted Sep 2026",
    description:
      "Building a full-stack Finance Platform to track cost, ROI, and revenue attribution across AI projects at scale.\n\nDeveloping Project Logos, a conversational AI agent equipped with deep supply chain domain knowledge to answer complex operational and network questions.",
    skills: [
      "React",
      "TypeScript",
      "Python",
      "AWS",
      "Conversational AI",
      "Strands Agents",
      "MCP",
      "AgentCore",
    ],
    icon: Briefcase,
  },
  {
    title: "Business Intelligence Engineer I",
    organization: "Amazon, Luxembourg",
    period: "August 2024 - September 2026",
    description:
      "Architected a multi-agent workflow using Strands and MCP servers to automate the 'Volume Loss to Caps' bridge across fulfillment operations, saving 109,500 man-hours annually.\n\nDeveloped a centralized Goal Tracking platform in React and DynamoDB for 130+ users (automating 500+ Director-level targets and reducing alignment latency by 70%), alongside an autonomous WBR narrative agent saving 5+ hours per week for L6 leadership.",
    skills: [
      "React",
      "TypeScript",
      "Python",
      "AWS",
      "API Gateway",
      "DynamoDB",
      "Lambda",
      "Strands Agents",
      "MCP",
    ],
    icon: Briefcase,
  },
  {
    title: "Software Development Engineer - Performance Science",
    organization: "The Goodyear Tire & Rubber Company, Luxembourg",
    period: "February 2024 - August 2024",
    description:
      "Developed an in-house Lateral Force (LDF) data visualization tool using React.js and Redux Toolkit, enhancing data interaction and engineering decision-making.\n\nEngineered the backend API with Python's FastAPI framework, integrating querying capabilities with AWS and Athena for global tire sensor data management.\n\nConducted statistical analyses, including ANOVA tests, post hoc tests, and Bayesian inference, to validate data integrity and analytical assumptions.",
    skills: ["React.js", "Redux", "FastAPI", "AWS", "Athena", "Statistics"],
    icon: Briefcase,
  },
  {
    title: "Master's Degree, Computer Science and Engineering",
    organization: "Instituto Superior Técnico, Lisbon",
    period: "September 2022 - November 2024",
    description:
      "Specialization in Data Science.\n\nMaster's Thesis: Recognising Portuguese Stones with Deep Learning (PyTorch computer vision models classifying Portuguese ornamental stone varieties).",
    skills: ["PyTorch", "Deep Learning", "Python", "SQL", "R", "d3.js"],
    icon: GraduationCap,
  },
  {
    title: "Erasmus Exchange",
    organization: "Julius-Maximilians-Universität, Würzburg",
    period: "March 2023 - September 2023",
    description:
      "Graduate coursework in Computer Science and Data Science. Developed advanced Jupyter and statistical modeling workflows.",
    skills: ["Jupyter", "Data Analysis", "Python"],
    icon: Globe,
  },
  {
    title: "SET - Semana Empresarial do Técnico",
    organization: "Instituto Superior Técnico, Lisbon",
    period: "October 2022 - September 2023",
    description: "Development of the official event web platform.",
    skills: ["Web Development", "React"],
    icon: Briefcase,
  },
  {
    title: "Bachelor's Degree, Computer Science Engineering",
    organization: "Iscte - Instituto Universitário de Lisboa",
    period: "September 2019 - July 2022",
    description: "Comprehensive foundation in computer science fundamentals, algorithms, and distributed systems.",
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
