import type { LucideIcon } from "lucide-react";

export interface JourneyItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  highlights: string[];
  color: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}
