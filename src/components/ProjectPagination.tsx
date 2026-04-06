import { Link } from "react-router-dom";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { projectMap, projectOrder } from "@/data/portfolio";
import type { ProjectSlug } from "@/types/portfolio";

interface ProjectPaginationProps {
  currentSlug: ProjectSlug;
}

export function ProjectPagination({ currentSlug }: ProjectPaginationProps) {
  const currentIndex = projectOrder.indexOf(currentSlug);
  const previousSlug = projectOrder[currentIndex - 1];
  const nextSlug = projectOrder[currentIndex + 1];

  return (
    <nav className="project-pagination" aria-label="Project navigation" data-reveal>
      {previousSlug ? (
        <Link className="project-nav-link" to={`/projects/${previousSlug}`}>
          <span className="project-nav-direction">
            <span className="project-nav-icon">
              <ArrowLeftIcon className="lucide-icon" />
            </span>
            <span className="project-nav-label">Previous</span>
          </span>
          <span className="project-nav-title">{projectMap[previousSlug].title}</span>
        </Link>
      ) : (
        <span />
      )}

      {nextSlug ? (
        <Link className="project-nav-link next" to={`/projects/${nextSlug}`}>
          <span className="project-nav-direction">
            <span className="project-nav-label">Next</span>
            <span className="project-nav-icon">
              <ArrowRightIcon className="lucide-icon" />
            </span>
          </span>
          <span className="project-nav-title">{projectMap[nextSlug].title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
