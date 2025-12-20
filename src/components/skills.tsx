import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 85 },
  { name: "React", level: 75 },
  { name: "C", level: 70 },
  { name: "Scala", level: 65 },
  { name: "R", level: 60 },
  { name: "Jupyter", level: 80 },
  { name: "Django", level: 70 },
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
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
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
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
