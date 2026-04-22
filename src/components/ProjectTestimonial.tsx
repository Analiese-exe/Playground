import type { ProjectTestimonial as ProjectTestimonialData } from "@/types/portfolio";

interface ProjectTestimonialProps {
  testimonial?: ProjectTestimonialData;
}

export function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  if (!testimonial) {
    return null;
  }

  return (
    <figure className="project-testimonial" data-reveal>
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>- {testimonial.author}</figcaption>
    </figure>
  );
}
