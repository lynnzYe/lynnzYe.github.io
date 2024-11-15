import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Container, Engine, ISourceOptions } from "tsparticles-engine";

import eth from "../assets/particles/8th.png";
import sxth from "../assets/particles/16th.png";
import qt from "../assets/particles/quarter.png";
import rest from "../assets/particles/rest.png";
import flat from "../assets/particles/flat.png";
import sharp from "../assets/particles/sharp.png";
import { KeyPreset } from "./tmp/reactpiano_fix";
const musicalNoteImages = [eth, sharp, qt, flat, rest, sxth];

const ParticleBackground = () => {
  const options: ISourceOptions = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true,
          speed: { min: 0.2, max: 1 },
          direction: "top",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 12,
          limit: 100,
        },
        opacity: {
          value: 0.4,
          animation: {
            enable: true,
            speed: 1, // Speed at which opacity changes
            minimumValue: 0.1,
          },
        },
        size: {
          value: 25, // Size of the notes
          random: true, // Randomize size of notes within a range
          animation: {
            enable: true,
            speed: 5, // Speed of size animation (bigger or smaller)
            minimumValue: 10,
          },
        },
        shape: {
          type: ["image", "circle"],
          image: musicalNoteImages.map((src) => ({
            src,
            width: 100,
            height: 100,
          })),
          circle: {},
        },
        color: {
          value: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"],
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 40,
            duration: 0.4,
          },
          push: {
            quantity: 2,
            duration: 0.5,
          },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine: Engine) => {
    return loadSlim(engine);
  }, []);

  const containerRef = useRef<Container | undefined>(undefined);

  const particlesLoaded = useCallback(
    async (container: Container | undefined): Promise<void> => {
      containerRef.current = container;
    },
    []
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      if (
        KeyPreset.some(
          (item) =>
            item.natural == event.key ||
            item.flat == event.key ||
            item.sharp == event.key
        )
      ) {
        containerRef.current.particles.push(Math.random() < 0.1 ? 1 : 0);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticleBackground;

interface ParticleLayoutProps {
  children?: ReactNode;
}

export const ParticleLayout: React.FC<ParticleLayoutProps> = ({ children }) => {
  return (
    <>
      <ParticleBackground />
      {children}
    </>
  );
};
