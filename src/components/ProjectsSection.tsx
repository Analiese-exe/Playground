import { Link } from "react-router-dom";

import { ManagedImage } from "@/components/ManagedImage";
import type { ProjectDetail } from "@/types/portfolio";

interface ProjectsSectionProps {
  items: ProjectDetail[];
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section className="section" id="projects">
      <p className="section-label">Projects</p>
      <div className="projects-grid">
        {items.map((item, index) => (
          <Link className="project-card" key={item.slug} to={`/projects/${item.slug}`} data-reveal>
            <div className="project-thumb">
              <ManagedImage
                src={item.coverImage}
                alt={item.coverAlt}
                className="project-thumb-image"
                critical={index < 4}
              />
            </div>
            <div className="project-copy">
              <p className="project-name">{item.title}</p>
              <p className="project-category">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
