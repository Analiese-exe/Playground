import { useEffect, useRef } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { ManagedImage } from "@/components/ManagedImage";
import type { LightboxImage } from "@/components/Lightbox";
import type { ShotItem } from "@/types/portfolio";

interface ShotsSectionProps {
  items: ShotItem[];
  onOpenLightbox: (image: LightboxImage) => void;
}

export function ShotsSection({ items, onOpenLightbox }: ShotsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const loopWidthRef = useRef(0);
  const isInteractingRef = useRef(false);
  const marqueeItems = [...items, ...items];

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let frameId = 0;
    let previousTime = performance.now();
    let loopWidth = scroller.scrollWidth / 2;

    const updateWidth = () => {
      loopWidth = scroller.scrollWidth / 2;
      loopWidthRef.current = loopWidth;
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(scroller);
    updateWidth();

    const tick = (time: number) => {
      const delta = (time - previousTime) / 1000;
      previousTime = time;
      const speed = window.innerWidth <= 720 ? 22 : 32;

      if (!isInteractingRef.current) {
        scroller.scrollLeft += speed * delta;

        if (scroller.scrollLeft >= loopWidth) {
          scroller.scrollLeft -= loopWidth;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [items]);

  const nudgeCarousel = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    isInteractingRef.current = true;
    scroller.scrollBy({
      left: scroller.clientWidth * 0.72 * direction,
      behavior: "smooth"
    });

    window.setTimeout(() => {
      const loopWidth = loopWidthRef.current;

      if (loopWidth && scroller.scrollLeft >= loopWidth) {
        scroller.scrollLeft -= loopWidth;
      }

      if (loopWidth && scroller.scrollLeft < 0) {
        scroller.scrollLeft += loopWidth;
      }

      isInteractingRef.current = false;
    }, 380);
  };

  return (
    <section className="section">
      <p className="section-label">Shots</p>
      <p className="section-note">A collection of interface explorations and visual experiments.</p>
      <div
        className="shots-marquee"
        aria-label="Shots carousel"
        data-reveal
        onMouseLeave={() => {
          isInteractingRef.current = false;
        }}
      >
        <button
          type="button"
          className="shots-arrow shots-arrow--prev"
          aria-label="Show previous shots"
          onClick={() => nudgeCarousel(-1)}
        >
          <ArrowLeftIcon className="lucide-icon" />
        </button>
        <div
          className="shots-scroller"
          ref={scrollerRef}
          onPointerDown={() => {
            isInteractingRef.current = true;
          }}
          onPointerUp={() => {
            isInteractingRef.current = false;
          }}
          onPointerCancel={() => {
            isInteractingRef.current = false;
          }}
          onTouchStart={() => {
            isInteractingRef.current = true;
          }}
          onTouchEnd={() => {
            isInteractingRef.current = false;
          }}
          onScroll={() => {
            const loopWidth = loopWidthRef.current;
            const scroller = scrollerRef.current;

            if (!scroller || !loopWidth) {
              return;
            }

            if (scroller.scrollLeft >= loopWidth) {
              scroller.scrollLeft -= loopWidth;
            }
          }}
        >
          <div className="shots-track">
          {marqueeItems.map((item, index) => (
            <article
              className="shot-card"
              key={`${item.src}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
            >
              <ManagedImage
                src={item.src}
                alt={index >= items.length ? "" : item.alt}
                critical={index < 3}
                onActivate={(src, alt) => onOpenLightbox({ src, alt })}
              />
            </article>
          ))}
          </div>
        </div>
        <button
          type="button"
          className="shots-arrow shots-arrow--next"
          aria-label="Show more shots"
          onClick={() => nudgeCarousel(1)}
        >
          <ArrowRightIcon className="lucide-icon" />
        </button>
      </div>
    </section>
  );
}
