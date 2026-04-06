interface EducationSectionProps {
  degree: string;
  school: string;
  date: string;
  description: string;
}

export function EducationSection({
  degree,
  school,
  date,
  description
}: EducationSectionProps) {
  return (
    <section className="section">
      <p className="section-label">Education</p>
      <article className="education-card" data-reveal>
        <p className="education-degree">{degree}</p>
        <h2 className="education-school">{school}</h2>
        <p className="education-date">{date}</p>
        <p className="education-description">{description}</p>
      </article>
    </section>
  );
}
