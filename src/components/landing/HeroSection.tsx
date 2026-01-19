import Image from "next/image";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { Download, HardDriveDownload } from "lucide-react";
import profileImage from '@/app/me.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-primary">{profile.title}</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
            {profile.name}
          </h1>
          <p className="max-w-xl text-lg text-foreground/80">
            {profile.introduction}
          </p>
          {/* <Button size="lg" asChild>
            <a href="/resume.pdf" download="Saruni_resume.pdf">
              <Download/>
              Download CV
            </a>
          </Button> */}
          
          <Button size="lg" asChild>
            <a href="https://drive.google.com/file/d/15qPp6FT9DeblMuMmazOtiVfqEq69NuiL/view?usp=sharing" target="_blank">
              <HardDriveDownload className="mr-2 h-4 w-4" />
              My Resume
            </a>
          </Button>
          
        </div>
        <div className="relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl"></div>
            <Image
              src={profileImage}
              alt={profile.name}
              width={400}
              height={400}
              className="z-10 rounded-full border-4 border-background shadow-lg"
              data-ai-hint={profile.profilePicture.imageHint}
            />
        </div>
      </div>
    </section>
  );
}