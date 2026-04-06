interface AwardsSectionProps {
  title: string;
  label: string;
  description: string;
  year: string;
}

export function AwardsSection({ title, label, description, year }: AwardsSectionProps) {
  return (
    <section className="section">
      <p className="section-label">Awards</p>
      <article className="award-item" data-reveal>
        <div className="award-copy">
          <p className="award-title">
            <span>{title}</span> {label}
          </p>
          <p className="award-description">{description}</p>
        </div>
        <span className="award-year">{year}</span>
      </article>
    </section>
  );
}
