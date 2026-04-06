import { MailIcon } from "@/components/icons";
import { ManagedImage } from "@/components/ManagedImage";
import type { SocialLink } from "@/types/portfolio";

interface SummarySectionProps {
  paragraphs: string[];
  socials: SocialLink[];
}

export function SummarySection({ paragraphs, socials }: SummarySectionProps) {
  return (
    <section className="section summary-section">
      <p className="section-label">Summary</p>
      <div className="summary-prose">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="summary-footer" data-reveal>
        <div className="social-links" aria-label="Social links">
          {socials.map((social) => (
            <a
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              key={social.label}
            >
              {social.icon === "mail" ? (
                <MailIcon className="lucide-icon" />
              ) : (
                <ManagedImage
                  className="social-brand-icon"
                  src={
                    social.icon === "linkedin"
                      ? "/linkedin.svg"
                      : social.icon === "dribbble"
                        ? "/dribbble.svg"
                        : "/uil_behance.svg"
                  }
                  alt=""
                />
              )}
            </a>
          ))}
        </div>
        <div className="signature-mark signature-mark--image" aria-hidden="true">
          <ManagedImage className="signature-image signature-image--dark" src="/signature-dark.png" alt="" />
          <ManagedImage className="signature-image signature-image--light" src="/signature-light.png" alt="" />
        </div>
      </div>
    </section>
  );
}
