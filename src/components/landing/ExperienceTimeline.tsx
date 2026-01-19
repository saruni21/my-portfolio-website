import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  dates: string;
  description: string;
  skills: string[];
};

type ExperienceTimelineProps = {
  timeline: ExperienceItem[];
};

export function ExperienceTimeline({ timeline }: ExperienceTimelineProps) {
  return (
    <div className="relative pl-8 border-l-2 border-primary/20">
      {timeline.map((item, index) => (
        <div key={index} className="mb-10">
          <div className="absolute -left-[1.05rem] mt-1.5 h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
            <Briefcase className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="pl-6">
            <p className="text-sm font-medium text-primary">{item.dates}</p>
            <h3 className="text-xl font-bold font-headline mt-1">{item.title}</h3>
            <p className="font-semibold text-muted-foreground">{item.company}</p>
            <p className="mt-2 text-foreground/80">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
