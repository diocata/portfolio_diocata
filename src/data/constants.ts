import { Github, Linkedin } from "lucide-react";
import type { NavItem, SocialLink } from "@/types";

export const RESUME_URL =
  "https://drive.google.com/file/d/1oAHbCgQ2vYfuosyFQiUW-Usdc2rh_FRW/view?usp=drive_link";

export const EMAIL = "diogo_catarino@outlook.com";

export const NAV_ITEMS: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Catarin0",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/diogo-catarino/",
    icon: Linkedin,
  },
];

export const VIEWPORT_MARGINS = {
  large: "-100px",
  small: "-50px",
} as const;
