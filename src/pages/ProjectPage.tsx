import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { ArrowLeftIcon, ExternalLinkIcon, HomeIcon } from "@/components/icons";
import type { LightboxImage } from "@/components/Lightbox";
import { ManagedImage } from "@/components/ManagedImage";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { ProjectPagination } from "@/components/ProjectPagination";
import { ProjectTestimonial } from "@/components/ProjectTestimonial";
import { projectMap } from "@/data/portfolio";
import { preloadManagedAssets } from "@/lib/assets";
import type { ProjectSlug } from "@/types/portfolio";

interface ProjectPageProps {
  onOpenLightbox: (image: LightboxImage) => void;
}

export function ProjectPage({ onOpenLightbox }: ProjectPageProps) {
  const params = useParams<{ projectSlug: ProjectSlug }>();
  const project = params.projectSlug ? projectMap[params.projectSlug] : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Ukeje Analiese`;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      preloadManagedAssets([project.coverImage, ...project.sections.flatMap((section) => section.images)]);
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="project-shell">
      <section className="project-topbar" data-reveal>
        <Link
          className="icon-pill"
          to="/"
          state={{ scrollTarget: "projects" }}
          aria-label="Back to projects"
        >
          <ArrowLeftIcon className="lucide-icon" />
        </Link>
        <Link className="icon-pill" to="/" aria-label="Back to home">
          <HomeIcon className="lucide-icon" />
        </Link>
      </section>

      <section className="project-hero" data-reveal>
        <div className="project-heading-row">
          <div className="project-heading-copy">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-meta">{project.meta} - Case study</p>
          </div>

          {project.externalUrl ? (
            <a
              className="project-view-link"
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon className="lucide-icon" />
              <span>View work</span>
            </a>
          ) : null}
        </div>

        <p className="project-intro">{project.intro}</p>
        <figure className="project-hero-media">
          <ManagedImage
            className="project-cover-image"
            src={project.coverImage}
            alt={project.coverAlt}
            critical
            onActivate={(src, alt) => onOpenLightbox({ src, alt })}
          />
        </figure>
        <p className="project-caption">{project.coverCaption}</p>
        <div className="project-divider" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <ProjectCaseStudy project={project} onOpenLightbox={onOpenLightbox} />
      <ProjectTestimonial testimonial={project.testimonial} />
      <ProjectPagination currentSlug={project.slug} />
    </main>
  );
}
