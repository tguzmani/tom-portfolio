"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  useEffect(() => {
    const check = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const color = dark ? "#cccccc" : "#333333";

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: {
          value: 50,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: color },
        links: {
          enable: true,
          color: color,
          distance: 150,
          opacity: dark ? 0.12 : 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 0.24, max: 0.64 },
          direction: "none" as const,
          outModes: { default: "bounce" as const },
        },
        opacity: {
          value: dark ? 0.3 : 0.25,
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
        },
      },
      detectRetina: true,
    }),
    [color, dark]
  );

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 z-0"
      options={options}
    />
  );
}
