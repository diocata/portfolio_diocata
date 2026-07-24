import { Sparkles, BarChart3, Globe, Mail } from "lucide-react";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AI Narrative Generator",
    description:
      "Developed an AI agent that automatically generates business narratives from metrics data at Amazon. The agent analyzes KPIs, identifies trends and anomalies, and produces human-readable insights, eliminating hours of manual reporting work.",
    icon: Sparkles,
    tags: ["Python", "Strands Agents", "AWS Lambda", "AgentCore"],
    highlights: ["Automated reporting", "Metrics analysis", "Natural language output"],
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "AI On-Call Newsletter",
    description:
      "Created an automated daily newsletter system for Amazon on-call engineers. An AI agent analyzes queue state, prioritizes tickets, and generates a personalized briefing with actionable todos delivered before each shift starts.",
    icon: Mail,
    tags: ["Python", "Strands Agents", "AWS Lambda", "Amazon SES", "AgentCore"],
    highlights: ["Daily automation", "Smart prioritization", "Email delivery"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Tire Sensor Data Visualizer",
    description:
      "Developed a data visualization tool at Goodyear for tire performance analysis (LDF Test). Features interactive charts, statistical analysis, and global data pipeline integration.",
    icon: BarChart3,
    tags: ["React.js", "Redux", "FastAPI", "AWS Athena", "D3.js"],
    highlights: ["Global deployment", "Real-time analytics", "ANOVA & Bayesian inference"],
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio featuring a 3D interactive avatar, smooth animations, and dark mode. Built with Next.js 15, React 19, and Three.js for an immersive experience.",
    icon: Globe,
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    highlights: ["3D Avatar", "Dark/Light mode", "Scroll animations"],
    links: {
      github: "https://github.com/diocata/portfolio_diocata",
    },
    color: "from-orange-500/20 to-red-500/20",
  },
];
