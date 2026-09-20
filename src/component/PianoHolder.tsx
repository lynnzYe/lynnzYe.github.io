import Piano from "../lib/react-piano/Piano.jsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { playNote, stopNote } from "./tones/PianoSampler.js";
import { createKeyPreset } from "./tmp/reactpiano_fix.js";

interface PianoHolderProps {
  isVisible?: boolean;
}

const PianoHolder: React.FC<PianoHolderProps> = ({ isVisible = true }) => {
  const holderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const keyboardShortcuts = useMemo(() => createKeyPreset(), []);
  const noteRange = width > 0 && width < 600
    ? { first: 60, last: 76 }
    : { first: 48, last: 83 };

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;

    const updateWidth = () => {
      setWidth(Math.floor(holder.getBoundingClientRect().width));
    };
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(holder);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="piano-holder" ref={holderRef}>
      {isVisible && width > 0 ? (
        <Piano
          noteRange={noteRange}
          width={width}
          keyboardShortcuts={keyboardShortcuts}
          keyboardShortcutOffset={0}
          playNote={playNote}
          stopNote={stopNote}
        />
      ) : null}
    </div>
  );
};

export default PianoHolder;
