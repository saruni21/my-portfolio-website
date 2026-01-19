import { socialLinks } from "@/lib/data";
import { Code2, Github, Linkedin } from "lucide-react";
import { WhatsappIcon } from "../icons/WhatsappIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline">Saruni</span>
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Saruni's Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                <WhatsappIcon className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}
