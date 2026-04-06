import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, ImgHTMLAttributes, PointerEvent, TouchEvent } from "react";

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
  const touchActivatedRef = useRef(false);

  useEffect(() => {
    setCurrentSrc(optimizedSrc);
  }, [optimizedSrc]);

  const handleOpen = () => {
    onActivate?.(currentSrc, alt);
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

  const handlePointerUp = (event: PointerEvent<HTMLImageElement>) => {
    props.onPointerUp?.(event);

    if (!onActivate || event.pointerType === "mouse") {
      return;
    }

    touchActivatedRef.current = true;
    handleOpen();
    window.setTimeout(() => {
      touchActivatedRef.current = false;
    }, 0);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLImageElement>) => {
    props.onTouchEnd?.(event);

    if (!onActivate) {
      return;
    }

    touchActivatedRef.current = true;
    event.preventDefault();
    handleOpen();
    window.setTimeout(() => {
      touchActivatedRef.current = false;
    }, 0);
  };

  return (
    <img
      {...props}
      src={toAssetUrl(currentSrc)}
      alt={alt}
      loading={critical ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={critical ? "high" : "auto"}
      data-original-src={originalSrc}
      onClick={(event) => {
        onClick?.(event);
        if (onActivate && !touchActivatedRef.current) {
          handleOpen();
        }
        touchActivatedRef.current = false;
      }}
      onPointerUp={handlePointerUp}
      onTouchEnd={handleTouchEnd}
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
