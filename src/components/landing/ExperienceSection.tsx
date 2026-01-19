import { experience } from "@/lib/data";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Card } from "../ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Work Experience</h2>
        <p className="text-lg text-muted-foreground mt-2">My professional journey so far.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <ExperienceTimeline timeline={experience} />
      </div>
    </section>
  );
}
