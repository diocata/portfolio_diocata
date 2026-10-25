import {
  Sparkles,
  BarChart3,
  Compass,
  Bot,
  Target,
  Layers,
  MessageSquareCode,
  DollarSign,
} from "lucide-react";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Project Logos",
    description:
      "Conversational AI agent at Amazon engineered with deep domain knowledge of the supply chain network, enabling natural-language investigation of operational metrics, fulfillment flows, and domain insights.",
    icon: MessageSquareCode,
    tags: ["Python", "Conversational AI", "Strands Agents", "MCP", "AWS", "Supply Chain"],
    highlights: [
      "Supply chain domain intelligence",
      "Conversational AI agent",
      "Real-time operational Q&A",
    ],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI Finance & ROI Platform",
    description:
      "Full-stack financial tracking platform at Amazon designed to monitor infrastructure cost, resource utilization, and revenue/savings attribution across internal AI initiatives.",
    icon: DollarSign,
    tags: ["React", "TypeScript", "Python", "AWS", "DynamoDB"],
    highlights: [
      "AI project cost & revenue tracking",
      "Real-time ROI attribution",
      "Portfolio-wide financial visibility",
    ],
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Volume Loss Agent Swarm",
    description:
      "Architected an autonomous multi-agent workflow at Amazon using Strands and MCP servers to automate the 'Volume Loss to Caps' bridge across fulfillment operations, eliminating manual spreadsheet reconciliation at scale.",
    icon: Sparkles,
    tags: ["Python", "Strands Agents", "MCP", "AWS Lambda", "AgentCore"],
    highlights: [
      "109,500 man-hours saved/yr",
      "$8.2M+ est. cost reduction",
      "Multi-agent orchestration",
    ],
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Wreck Atlas",
    description:
      "Map-first web application charting over 100,000 documented shipwrecks and underwater obstructions worldwide. Features an interactive sonar map viewport, depth/era filters, vessel tracking, and a public OpenAPI 3.1 REST API.",
    icon: Compass,
    tags: ["TypeScript", "Zustand", "OpenAPI 3.1", "Spatial Indexing", "REST API"],
    highlights: [
      "100,000+ charted wrecks",
      "Interactive sonar map",
      "Public OpenAPI 3.1 API",
    ],
    links: {
      live: "https://shipwreckatlas.com",
      github: "https://github.com/diocata/wreck-atlas",
    },
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Discord Bot MCP Server",
    description:
      "Safety-scoped Model Context Protocol (MCP) server exposing Discord Bot REST API operations as permission-bounded tools for AI assistants like Claude and Cursor, with explicit channel allowlists and rate-limit protection.",
    icon: Bot,
    tags: ["TypeScript", "Node.js", "MCP", "Discord API", "pnpm"],
    highlights: [
      "Safety-scoped MCP tools",
      "Channel allowlists",
      "Claude & Cursor ready",
    ],
    links: {
      github: "https://github.com/diocata/discord-bot-mcp",
    },
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Goal Tracking & WBR Narrative Engine",
    description:
      "Centralized Goal Tracking platform at Amazon for 130+ users automating 500+ Director-level targets, paired with a Strands + MCP agent that drafts weekly WBR narrative bridges and daily on-call briefings.",
    icon: Target,
    tags: ["React", "TypeScript", "AWS DynamoDB", "Strands Agents", "Amazon SES"],
    highlights: [
      "500+ Director targets",
      "-70% alignment latency",
      "5+ hrs/week saved for L6+",
    ],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Tire Sensor Data Visualizer",
    description:
      "Full-stack data visualization and statistical workbench at Goodyear for Lateral Force (LDF) tire performance analysis, integrating interactive charts, ANOVA, post-hoc tests, and Bayesian inference over AWS Athena.",
    icon: BarChart3,
    tags: ["React.js", "Redux", "FastAPI", "AWS Athena", "D3.js"],
    highlights: [
      "Global deployment",
      "Real-time analytics",
      "ANOVA & Bayesian inference",
    ],
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Portuguese Stone Classifier",
    description:
      "Master's thesis research at Instituto Superior Técnico applying deep learning computer vision architectures in PyTorch to classify Portuguese ornamental stones (marble, limestone, granite) from surface imagery.",
    icon: Layers,
    tags: ["PyTorch", "Python", "Computer Vision", "Deep Learning"],
    highlights: [
      "IST Master's Thesis",
      "PyTorch Vision Models",
      "Curated Stone Dataset",
    ],
    color: "from-rose-500/20 to-orange-500/20",
  },
];
