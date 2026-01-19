import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Certifications & Courses</h2>
        <p className="text-lg text-muted-foreground mt-2">My commitment to continuous learning and professional growth.</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {certifications.map((cert) => (
          <Card key={cert.name} className="transition-all duration-300 hover:bg-card/90 hover:shadow-md">
            <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <CardTitle className="font-headline text-lg">{cert.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{cert.authority} - {cert.date}</p>
              </div>
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Verify <ExternalLink className="h-4 w-4" />
              </a>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
