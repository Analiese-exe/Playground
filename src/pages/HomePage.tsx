import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AwardsSection } from "@/components/AwardsSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import type { LightboxImage } from "@/components/Lightbox";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ShotsSection } from "@/components/ShotsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StackSection } from "@/components/StackSection";
import { SummarySection } from "@/components/SummarySection";
import {
  award,
  education,
  experiences,
  heroContent,
  profile,
  projects,
  shots,
  socialLinks,
  stack,
  summaryParagraphs
} from "@/data/portfolio";
import type { ThemeMode } from "@/types/portfolio";

interface HomePageProps {
  theme: ThemeMode;
  onToggleTheme: (origin?: { x: number; y: number }) => void;
  onOpenLightbox: (image: LightboxImage) => void;
}

export function HomePage({ theme, onToggleTheme, onOpenLightbox }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    const nextState = location.state as { scrollTarget?: string } | null;

    if (!nextState?.scrollTarget) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(nextState.scrollTarget ?? "")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }, [location.key, location.state]);

  useEffect(() => {
    document.title = "Ukeje Analiese - Product Designer";
  }, []);

  return (
    <main className="site-shell">
      <Header profile={profile} theme={theme} onToggleTheme={onToggleTheme} />
      <HeroSection content={heroContent} />
      <ExperienceSection items={experiences} />
      <ProjectsSection items={projects} />
      <ShotsSection items={shots} onOpenLightbox={onOpenLightbox} />
      <EducationSection {...education} />
      <StackSection items={stack} />
      <AwardsSection {...award} />
      <SummarySection paragraphs={summaryParagraphs} socials={socialLinks} />
      <SiteFooter />
    </main>
  );
}
