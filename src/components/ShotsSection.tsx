import { ManagedImage } from "@/components/ManagedImage";
import type { LightboxImage } from "@/components/Lightbox";
import type { ShotItem } from "@/types/portfolio";

interface ShotsSectionProps {
  items: ShotItem[];
  onOpenLightbox: (image: LightboxImage) => void;
}

export function ShotsSection({ items, onOpenLightbox }: ShotsSectionProps) {
  const marqueeItems = [...items, ...items];

  return (
    <section className="section">
      <p className="section-label">Shots</p>
      <p className="section-note">A collection of interface explorations and visual experiments.</p>
      <div className="shots-marquee" aria-label="Shots carousel" data-reveal>
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
                onActivate={(src, alt) => onOpenLightbox({ src, alt })}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
