import type { CSSProperties } from "react";

import { ManagedImage } from "@/components/ManagedImage";
import type { LightboxImage } from "@/components/Lightbox";
import type { ProjectDetail } from "@/types/portfolio";

interface ProjectCaseStudyProps {
  project: ProjectDetail;
  onOpenLightbox: (image: LightboxImage) => void;
}

function Divider() {
  return (
    <div className="project-divider" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function ProjectCaseStudy({ project, onOpenLightbox }: ProjectCaseStudyProps) {
  return (
    <section className="case-study" id="case-study-start">
      {project.sections.map((section, sectionIndex) => {
        const gridClass = `grid-${Math.min(section.images.length, 4)}`;
        const isSingleColumn = section.singleColumn || section.images.length === 1;
        const containClass = section.containImages ? " is-contain" : "";
        const gridStyle = section.imageAspectRatio
          ? ({ "--case-image-ratio": section.imageAspectRatio } as CSSProperties)
          : undefined;

        return (
          <article className="case-section" key={section.title} data-reveal>
            <h2 className="project-section-title">{section.title}</h2>
            <p className="case-paragraph">{section.body}</p>

            {section.images.length ? (
              <>
                <div
                  className={`case-grid ${gridClass}${isSingleColumn ? " is-single-column" : ""}${containClass}`}
                  style={gridStyle}
                >
                  {section.images.map((imagePath, index) => (
                    <ManagedImage
                      key={`${section.title}-${imagePath}`}
                      src={imagePath}
                      alt={`${project.title} design visual ${index + 1}`}
                      critical={sectionIndex < 2 && index < 2}
                      onActivate={(src, alt) => onOpenLightbox({ src, alt })}
                    />
                  ))}
                </div>
                <p className="project-caption">{section.title} visuals</p>
                <Divider />
              </>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
