import { useEffect } from "react";

import { XIcon } from "@/components/icons";
import { toAssetUrl } from "@/lib/assets";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = image ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [image]);

  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [image, onClose]);

  return (
    <div
      className={`shot-lightbox${image ? " is-open" : ""}`}
      aria-hidden={image ? "false" : "true"}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        className="shot-lightbox-close"
        aria-label="Close full image"
        onClick={onClose}
      >
        <XIcon className="lightbox-close-icon" />
      </button>
      {image ? (
        <img
          key={image.src}
          src={toAssetUrl(image.src)}
          alt={image.alt}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      ) : null}
    </div>
  );
}
