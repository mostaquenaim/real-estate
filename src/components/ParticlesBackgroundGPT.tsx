"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 200,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#ffffff", "#1ab31a", "#000000"],
          },
          shape: { type: "circle" },
          opacity: {
            value: 1.7,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
          },
          size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 7, size_min: 0.3, sync: false },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
