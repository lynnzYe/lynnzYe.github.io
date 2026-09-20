import "./PianoFrame.css";
import React, { ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import PianoHolder from "./PianoHolder";
import ScrollArrow from "./ScrollArrow";

interface PianoCurveProps {
  primaryColor?: string;
  maxScrollThres?: number;
  children?: ReactNode;
  title?: string;
  id?: string;
  disableSection?: boolean;
  disablePiano?: boolean;
  sectionVisibleThres?: number;
}

interface FrameSize {
  width: number;
  height: number;
}

const EMPTY_SIZE: FrameSize = { width: 1, height: 1 };

function buildPianoPath({ width, height }: FrameSize) {
  // Keep the original grand-piano profile, but compress its resting length.
  // Only the soundboard section grows when a page needs more vertical room.
  const restingScale = 2 / 3;
  const baseHeight = width * 1.117 * restingScale;
  const stretch = Math.max(0, height - baseHeight);
  const topShoulder = width * 0.1;
  const waist = width * 0.48 * restingScale + stretch;
  const outerTail = width * 0.79 * restingScale + stretch;
  const innerTail = width * 0.63 * restingScale + stretch;
  const lowerTail = width * 0.93 * restingScale + stretch;
  const end = Math.max(height, baseHeight);

  return `
    M 1 ${end}
    L 1 ${topShoulder}
    Q 1 1 ${width * 0.22} 1
    Q ${width * 0.58} 1 ${width * 0.62} ${topShoulder}
    L ${width * 0.67} ${waist}
    C ${width * 0.72} ${outerTail} ${width * 0.98} ${innerTail} ${width - 1} ${lowerTail}
    V ${end}
  `;
}

/**
 * One responsive grand-piano frame for every top-level page. The top geometry
 * is width-driven; only the soundboard stretches when the content is long.
 */
const PianoFrame: React.FC<PianoCurveProps> = ({
  primaryColor = "#333333",
  children,
  title,
  id,
  disablePiano = false,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<FrameSize>(EMPTY_SIZE);
  const gradientId = useId().replace(/:/g, "");

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const updateSize = () => {
      const next = {
        width: Math.max(1, body.clientWidth),
        height: Math.max(1, body.clientHeight),
      };
      setSize((current) =>
        current.width === next.width && current.height === next.height
          ? current
          : next
      );
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(body);
    return () => observer.disconnect();
  }, []);

  const path = useMemo(() => buildPianoPath(size), [size]);

  return (
    <section className="piano-frame" id={id}>
      <div className="piano-frame__body" ref={bodyRef}>
        <div className="piano-frame__outline-layer" aria-hidden="true">
          <svg
            className="piano-frame__outline"
            viewBox={`0 0 ${size.width} ${size.height}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={primaryColor} stopOpacity="0.28" />
                <stop offset="52%" stopColor="#248753" stopOpacity="0.76" />
                <stop offset="100%" stopColor={primaryColor} stopOpacity="0.3" />
              </linearGradient>
              <filter
                id={`${gradientId}-glow`}
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              className="piano-frame__glow"
              d={path}
              fill="none"
              stroke={primaryColor}
            />
            <path
              className="piano-frame__line"
              d={path}
              pathLength="1"
              fill="none"
              stroke={`url(#${gradientId})`}
              filter={`url(#${gradientId}-glow)`}
            />
          </svg>
        </div>

        <div className="piano-frame__inner">
          {title ? (
            <header className="piano-frame__header">
              <h1>{title}</h1>
              <span aria-hidden="true" />
            </header>
          ) : null}

          <div className="piano-frame__content">{children}</div>
        </div>
      </div>

      {!disablePiano ? (
        <div className="piano-frame__piano">
          <p>Play with your mouse, touch, or computer keyboard.</p>
          <PianoHolder />
        </div>
      ) : null}

      <ScrollArrow />
    </section>
  );
};

export default PianoFrame;
