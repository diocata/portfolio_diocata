import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { GraduationCap, Briefcase, Globe } from "lucide-react";

const journeyItems = [
  {
    title: "Business Intelligence Engineer I",
    organization: "Amazon, Luxembourg",
    period: "August 2024 - Present",
    description:
      "Building full-stack applications that optimize Amazon's logistics operations.\n\nDeveloping AI agents to automate manual labor and improve production efficiency.\n\nWorking with React, TypeScript, and Python, leveraging AWS services including API Gateway, DynamoDB, and Lambda.",
    skills: ["React", "TypeScript", "Python", "AWS", "API Gateway", "DynamoDB", "Lambda", "AI"],
    icon: Briefcase,
  },
  {
    title: "Software Developer Engineer - Performance Science",
    organization: "The Goodyear Tire & Rubber Company, Luxembourg",
    period: "February 2024 - August 2024",
    description:
      "Developed an in-house data visualization tool using React.js and Redux Toolkit, enhancing data interaction and decision-making capabilities.\n\nEngineered the backend API with Python's FastAPI framework, integrating querying capabilities with Amazon AWS and Athena for data management.\n\nConducted statistical analyses, including ANOVA tests, post hoc tests, and Bayesian inference, to validate data integrity and analytical assumptions.\n\nRebuilt existing data pipelines and designed new ones from scratch to streamline data flow and optimize processing efficiency across global operations.",
    skills: ["React.js", "Redux", "FastAPI", "AWS", "Athena", "Statistics"],
    icon: Briefcase,
  },
  {
    title: "Master's Degree, Computer Science and Engineering",
    organization: "Instituto Superior Técnico, Lisbon",
    period: "September 2022 - Present",
    description: "Specialization in Data Science",
    skills: ["SQL", "PDI", "MDX", "Python", "R", "d3.js"],
    icon: GraduationCap,
  },
  {
    title: "Erasmus Exchange",
    organization: "Julius-Maximilians-Universität, Würzburg",
    period: "March 2023 - September 2023",
    description:
      "Several multicultural experiences. Developed advanced Jupyter skills.",
    skills: ["Jupyter", "Data Analysis"],
    icon: Globe,
  },
  {
    title: "SET - Semana Empresarial do Técnico",
    organization: "Instituto Superior Técnico, Lisbon",
    period: "October 2022 - September 2023",
    description: "Development of the event website.",
    skills: ["Web Development"],
    icon: Briefcase,
  },
  {
    title: "Bachelor's Degree, Computer Science Engineering",
    organization: "Iscte - Instituto Universitário de Lisboa",
    period: "September 2019 - July 2022",
    description: "Comprehensive foundation in computer science fundamentals.",
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

export default function Journey() {
  return (
    <section id="journey" className="container py-24">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my academic and professional experience
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-8">
          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 translate-y-6" />

                {/* Content */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <Card>
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
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

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
