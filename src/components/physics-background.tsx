"use client";

import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "@tsparticles/engine";

export default function PhysicsBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          background: { color: { value: "#111111" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 1,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
