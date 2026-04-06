import { useCallback, useEffect, useRef, useState } from "react";

function createClickSound(audioContext: AudioContext) {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(980, now);
  oscillator.frequency.exponentialRampToValueAtTime(640, now + 0.045);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.014, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.065);
}

export function useUiAudio() {
  const [isAmbientEnabled, setIsAmbientEnabled] = useState(false);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const lastTouchSoundAtRef = useRef(0);

  useEffect(() => {
    const ambient = new Audio("/audio/portfolio-ambient.mp3");
    ambient.loop = true;
    ambient.preload = "metadata";
    ambient.volume = 0.035;

    const syncState = () => {
      setIsAmbientEnabled(!ambient.paused);
    };

    ambient.addEventListener("play", syncState);
    ambient.addEventListener("pause", syncState);
    ambientRef.current = ambient;

    return () => {
      ambient.pause();
      ambient.removeEventListener("play", syncState);
      ambient.removeEventListener("pause", syncState);
      ambientRef.current = null;

      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  const ensureAudioContext = useCallback(async () => {
    if (!audioContextRef.current) {
      const AudioContextCtor =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

      if (!AudioContextCtor) {
        return null;
      }

      audioContextRef.current = new AudioContextCtor();
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }, []);

  const playClickSound = useCallback(async () => {
    const audioContext = await ensureAudioContext();

    if (!audioContext) {
      return;
    }

    createClickSound(audioContext);
  }, [ensureAudioContext]);

  useEffect(() => {
    const shouldPlayForTarget = (target: HTMLElement | null) =>
      !!target &&
      !target.closest("[data-no-click-sound='true']") &&
      !!target.closest("a, button, [role='button'], input, textarea, select, label");

    const handleTouchEnd = (event: TouchEvent) => {
      const target = event.target as HTMLElement | null;

      if (!shouldPlayForTarget(target)) {
        return;
      }

      lastTouchSoundAtRef.current = Date.now();
      void playClickSound();
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!shouldPlayForTarget(target)) {
        return;
      }

      if (Date.now() - lastTouchSoundAtRef.current < 450) {
        return;
      }

      void playClickSound();
    };

    document.addEventListener("touchend", handleTouchEnd, true);
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("touchend", handleTouchEnd, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [playClickSound]);

  const toggleAmbient = useCallback(async () => {
    const ambient = ambientRef.current;

    if (!ambient) {
      return;
    }

    if (ambient.paused) {
      try {
        await ambient.play();
      } catch {
        setIsAmbientEnabled(false);
      }
      return;
    }

    ambient.pause();
  }, []);

  return {
    isAmbientEnabled,
    toggleAmbient
  };
}
