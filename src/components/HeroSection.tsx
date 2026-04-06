import type { HeroContent } from "@/types/portfolio";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
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
    </section>
  );
}
