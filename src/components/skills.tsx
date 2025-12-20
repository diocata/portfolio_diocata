"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { skillCategories, languages } from "@/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="container py-24">
      <motion.div
        className="space-y-4 text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Languages</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with and languages I speak
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Technical Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <motion.div
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillCategories.map((category) => (
                  <motion.div key={category.title} variants={scaleIn}>
                    <p className="text-sm text-muted-foreground mb-2">{category.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Languages</h3>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    variants={scaleIn}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 transition-all duration-200 hover:bg-secondary hover:scale-[1.02]"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
