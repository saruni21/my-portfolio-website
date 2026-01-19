import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { SkillsSection } from "@/components/landing/SkillsSection";
import { ExperienceSection } from "@/components/landing/ExperienceSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { CertificationsSection } from "@/components/landing/CertificationsSection";
import { HobbiesSection } from "@/components/landing/HobbiesSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
