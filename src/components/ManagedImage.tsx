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
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchMovedRef = useRef(false);

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

    if (!onActivate || event.pointerType !== "pen") {
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

    if (!onActivate || touchMovedRef.current) {
      touchStartRef.current = null;
      touchMovedRef.current = false;
      return;
    }

    touchActivatedRef.current = true;
    event.preventDefault();
    handleOpen();
    window.setTimeout(() => {
      touchActivatedRef.current = false;
    }, 0);
    touchStartRef.current = null;
    touchMovedRef.current = false;
  };

  const handleTouchStart = (event: TouchEvent<HTMLImageElement>) => {
    props.onTouchStart?.(event);
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    touchMovedRef.current = false;
  };

  const handleTouchMove = (event: TouchEvent<HTMLImageElement>) => {
    props.onTouchMove?.(event);

    const start = touchStartRef.current;
    const touch = event.touches[0];

    if (!start || !touch) {
      return;
    }

    if (Math.abs(touch.clientX - start.x) > 10 || Math.abs(touch.clientY - start.y) > 10) {
      touchMovedRef.current = true;
    }
  };

  const handleTouchCancel = (event: TouchEvent<HTMLImageElement>) => {
    props.onTouchCancel?.(event);
    touchStartRef.current = null;
    touchMovedRef.current = false;
    touchActivatedRef.current = false;
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
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
