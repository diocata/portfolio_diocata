"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data";
import { fadeInUp, staggerFast, scaleIn } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="container py-24">
      <motion.div
        className="space-y-4 text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my expertise in full-stack development and AI
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div key={project.title} variants={scaleIn}>
              <Card className="h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 overflow-hidden relative">
                {/* Gradient background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {project.links?.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">View on GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs transition-all duration-200 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* View project link */}
                  {project.links?.github && (
                    <div className="pt-2">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary group/link"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                          <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
