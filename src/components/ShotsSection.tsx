import { useEffect, useRef } from "react";

import { ManagedImage } from "@/components/ManagedImage";
import type { LightboxImage } from "@/components/Lightbox";
import type { ShotItem } from "@/types/portfolio";

interface ShotsSectionProps {
  items: ShotItem[];
  onOpenLightbox: (image: LightboxImage) => void;
}

export function ShotsSection({ items, onOpenLightbox }: ShotsSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const marqueeItems = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;

    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let frameId = 0;
    let offset = 0;
    let previousTime = performance.now();
    let loopWidth = track.scrollWidth / 2;

    const updateWidth = () => {
      loopWidth = track.scrollWidth / 2;
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(track);
    updateWidth();

    const tick = (time: number) => {
      const delta = (time - previousTime) / 1000;
      previousTime = time;
      const speed = window.innerWidth <= 720 ? 20 : 29;

      offset -= speed * delta;

      if (Math.abs(offset) >= loopWidth) {
        offset += loopWidth;
      }

      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      track.style.transform = "translate3d(0, 0, 0)";
    };
  }, [items]);

  return (
    <section className="section">
      <p className="section-label">Shots</p>
      <p className="section-note">A collection of interface explorations and visual experiments.</p>
      <div className="shots-marquee" aria-label="Shots carousel" data-reveal>
        <div className="shots-track" ref={trackRef}>
          {marqueeItems.map((item, index) => (
            <article
              className="shot-card"
              key={`${item.src}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
            >
              <ManagedImage
                src={item.src}
                alt={index >= items.length ? "" : item.alt}
                onActivate={(src, alt) => onOpenLightbox({ src, alt })}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
