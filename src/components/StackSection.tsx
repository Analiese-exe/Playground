import { ManagedImage } from "@/components/ManagedImage";
import type { StackItem } from "@/types/portfolio";

interface StackSectionProps {
  items: StackItem[];
}

export function StackSection({ items }: StackSectionProps) {
  return (
    <section className="section">
      <p className="section-label">Stack</p>
      <div className="stack-grid">
        {items.map((item) => (
          <article className="stack-card" key={item.name} data-reveal>
            <ManagedImage src={item.iconSrc} alt={`${item.name} logo`} className="stack-icon" />
            <div>
              <p className="stack-name">{item.name}</p>
              <p className="stack-category">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
