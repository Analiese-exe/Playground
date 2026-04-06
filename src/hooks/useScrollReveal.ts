import { useEffect } from "react";

export function useScrollReveal(key: string) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    items.forEach((item, index) => {
      item.classList.add("scroll-reveal");
      item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -48px 0px"
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [key]);
}
