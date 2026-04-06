import { HeroSocialLinks } from "@/components/HeroSocialLinks";
import type { HeroContent, SocialLink } from "@/types/portfolio";

interface HeroSectionProps {
  content: HeroContent;
  socials: SocialLink[];
}

export function HeroSection({ content, socials }: HeroSectionProps) {
  return (
    <section className="hero" data-reveal>
      <h1>
        {content.title} <span>{content.accent}</span>
      </h1>
      <div className="hero-copy">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <HeroSocialLinks socials={socials} />
    </section>
  );
}
