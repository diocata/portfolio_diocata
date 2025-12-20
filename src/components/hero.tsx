"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { EMAIL, SOCIAL_LINKS } from "@/data";
import { staggerFast, fadeInUp, avatarVariants } from "@/lib/animations";

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
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          variants={staggerFast}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-2" variants={fadeInUp}>
            <p className="text-muted-foreground">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Diogo Catarino
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Developing Full-Stack & AI Solutions
            </p>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-md mx-auto md:mx-0"
            variants={fadeInUp}
          >
            Passionate about coding, from full-stack applications to AI agents. 
            Currently pioneering AI adoption at Amazon, building intelligent agents 
            that automate workflows and solve real-world challenges.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start"
            variants={fadeInUp}
          >
            <Button asChild className="group">
              <a href="#journey">
                View My Journey
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
            <Button variant="outline" asChild className="group">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Contact
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start pt-4"
            variants={fadeInUp}
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="transition-transform hover:scale-110 hover:text-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* 3D Avatar */}
        <motion.div
          className="flex-shrink-0"
          variants={avatarVariants}
          initial="hidden"
          animate="visible"
        >
          <Avatar3D />
        </motion.div>
      </div>
    </section>
  );
}
