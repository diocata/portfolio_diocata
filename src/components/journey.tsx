"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { journeyItems } from "@/data";
import { fadeInUp, cardVariants, dotVariants } from "@/lib/animations";

export default function Journey() {
  return (
    <section id="journey" className="container py-24">
      <motion.div
        className="space-y-4 text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my academic and professional experience
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-8">
          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 translate-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={dotVariants}
                />

                {/* Content */}
                <motion.div
                  className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  custom={isEven}
                >
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.organization}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground mb-3 space-y-2">
                        {item.description.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
