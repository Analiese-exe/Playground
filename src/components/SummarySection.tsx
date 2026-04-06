interface SummarySectionProps {
  paragraphs: string[];
}

export function SummarySection({ paragraphs }: SummarySectionProps) {
  return (
    <section className="section summary-section">
      <p className="section-label">Summary</p>
      <div className="summary-prose">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
