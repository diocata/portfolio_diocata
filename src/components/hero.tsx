"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Three.js
const Avatar3D = dynamic(() => import("@/components/avatar-3d"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-muted animate-pulse flex items-center justify-center">
      <span className="text-muted-foreground">Loading 3D...</span>
    </div>
  ),
});

export default function Hero() {
  return (
    <section id="about" className="container py-24 md:py-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-muted-foreground">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Diogo Catarino
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Developing Full-Stack & AI Solutions
            </p>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
            Passionate about coding, from full-stack applications to AI agents. 
            Currently pioneering AI adoption at Amazon, building intelligent agents 
            that automate workflows and solve real-world challenges.
          </p>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Button asChild>
              <a href="#journey">
                View My Journey
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:diogo_catarino@outlook.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Catarin0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/diogo-catarino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>

        {/* 3D Avatar */}
        <div className="flex-shrink-0">
          <Avatar3D />
        </div>
      </div>
    </section>
  );
}
