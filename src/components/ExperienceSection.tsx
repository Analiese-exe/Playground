import type { ExperienceItem } from "@/types/portfolio";
import { ManagedImage } from "@/components/ManagedImage";

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section className="section">
      <p className="section-label">Experience</p>
      <div className="experience-grid">
        {items.map((item) => (
          <article className="experience-card" key={item.company} data-reveal>
            <div className={`experience-logo${item.contain ? " experience-logo--contain" : ""}`}>
              <ManagedImage src={item.logoSrc} alt={`${item.company} logo`} className="" />
            </div>
            <div className="experience-body">
              <h2 className="experience-title">{item.title}</h2>
              <p className="experience-company">{item.company}</p>
              <p className="experience-meta">{item.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
