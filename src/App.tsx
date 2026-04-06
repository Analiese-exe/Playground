import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Lightbox } from "@/components/Lightbox";
import type { LightboxImage } from "@/components/Lightbox";
import { HomePage } from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTheme } from "@/hooks/useTheme";

function AppContent() {
  const location = useLocation();
  const { theme, toggleTheme, transition } = useTheme();
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  useScrollReveal(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openLightbox = useCallback((image: LightboxImage) => {
    setLightboxImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage theme={theme} onToggleTheme={toggleTheme} onOpenLightbox={openLightbox} />
          }
        />
        <Route path="/projects/:projectSlug" element={<ProjectPage onOpenLightbox={openLightbox} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <div
        className={`theme-transition-overlay${transition?.active ? " is-active" : ""}${
          transition?.nextTheme === "light" ? " is-light" : " is-dark"
        }`}
        style={
          transition
            ? ({
                ["--theme-origin-x" as string]: transition.originX,
                ["--theme-origin-y" as string]: transition.originY
              } as CSSProperties)
            : undefined
        }
      />

      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </>
  );
}

export default function App() {
  return <AppContent />;
}
