import { useCallback } from "react";
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

const ParticlesBackground = ({ isDarkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        fpsLimit: 60,
        particles: {
          number: { 
            value: 60, 
            density: { enable: true, area: 800 } 
          },
          /* Particle color switches based on theme */
          color: { value: isDarkMode ? "#6366f1" : "#cbd5e1" }, 
          links: {
            enable: true,
            /* Link color switches based on theme */
            color: isDarkMode ? "#6366f1" : "#94a3b8",
            distance: 180,
            opacity: isDarkMode ? 0.2 : 0.4, 
            width: 1,
          },
          move: { 
            enable: true, 
            speed: 1.2, 
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          size: { 
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.5 }
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground