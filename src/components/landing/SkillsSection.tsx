import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { Cpu } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Technical Proficiency</h2>
        <p className="text-lg text-muted-foreground mt-2">A snapshot of the technologies I work with.</p>
      </div>
      
      {/* CSS Grid with auto-fit */}
      <div 
        className="grid justify-center gap-8"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 320px))'
        }}
      >
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader className="flex-row items-center gap-4">
              <Cpu className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}