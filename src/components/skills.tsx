import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Scala", "R"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "Django", "REST APIs"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Athena", "S3"],
  },
  {
    title: "AI & Data",
    skills: ["LLMs", "AI Agents", "Strands Agents", "Data Pipelines", "Jupyter", "Pandas"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Asana"],
  },
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
  { name: "German", level: "Basic" },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-24">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Languages</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with and languages I speak
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Technical Skills */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <p className="text-sm text-muted-foreground mb-2">{category.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                >
                  <span className="font-medium">{lang.name}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
