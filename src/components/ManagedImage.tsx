import { useEffect, useMemo, useState } from "react";
import type { KeyboardEvent, ImgHTMLAttributes } from "react";

import { getManagedAssetPath, toAssetUrl } from "@/lib/assets";

interface ManagedImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "loading" | "decoding"> {
  src: string;
  critical?: boolean;
  onActivate?: (source: string, alt: string) => void;
}

export function ManagedImage({
  src,
  alt = "",
  critical = false,
  onActivate,
  onClick,
  onKeyDown,
  ...props
}: ManagedImageProps) {
  const originalSrc = useMemo(() => (src.startsWith("/") ? src : `/${src}`), [src]);
  const optimizedSrc = useMemo(() => getManagedAssetPath(originalSrc), [originalSrc]);
  const [currentSrc, setCurrentSrc] = useState(optimizedSrc);

  useEffect(() => {
    setCurrentSrc(optimizedSrc);
  }, [optimizedSrc]);

  const handleOpen = () => {
    onActivate?.(originalSrc, alt);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    onKeyDown?.(event);

    if (!onActivate) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <img
      {...props}
      src={toAssetUrl(currentSrc)}
      alt={alt}
      loading={critical ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={critical ? "high" : "low"}
      data-original-src={originalSrc}
      onClick={(event) => {
        onClick?.(event);
        if (onActivate) {
          handleOpen();
        }
      }}
      onKeyDown={handleKeyDown}
      onError={() => {
        if (currentSrc !== originalSrc) {
          setCurrentSrc(originalSrc);
        }
      }}
      role={onActivate ? "button" : undefined}
      tabIndex={onActivate ? 0 : undefined}
    />
  );
}
