import { useEffect, useMemo, useRef, useState } from "react";
import PianoFrame from "../component/PianoFrame";
import "./Music.css";

export interface MusicInfo {
  id: string;
  img: string;
  title: string;
  brief: string;
  link: string;
  type: "composition" | "performance" | "improvisation";
}

interface MusicProps {
  music: MusicInfo[];
}

type MusicFilter = "all" | MusicInfo["type"];

const FILTERS: Array<{ value: MusicFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "composition", label: "Compositions" },
  { value: "performance", label: "Performances" },
  { value: "improvisation", label: "Improvisations" },
];

const MusicCard: React.FC<{ item: MusicInfo }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const description = descriptionRef.current;
    if (!description || expanded) return;

    const measureOverflow = () => {
      setHasOverflow(description.scrollHeight > description.clientHeight + 1);
    };

    measureOverflow();
    const observer = new ResizeObserver(measureOverflow);
    observer.observe(description);
    return () => observer.disconnect();
  }, [expanded, item.brief]);

  return (
    <article className={`music-card ${expanded ? "music-card--expanded" : ""}`}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="music-card-media"
        aria-label={`Listen to ${item.title}`}
      >
        <img src={item.img} alt="" loading="lazy" />
      </a>
      <div className="music-card-content">
        <span className="music-card-type">{item.type}</span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="music-card-title"
        >
          <h2>{item.title}</h2>
        </a>
        <p
          ref={descriptionRef}
          className={expanded ? "music-card-description--expanded" : ""}
        >
          {item.brief}
        </p>
        <button
          type="button"
          className={`music-card-more ${hasOverflow || expanded ? "is-visible" : ""}`}
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Less" : "More"}
        </button>
      </div>
    </article>
  );
};

const Music: React.FC<MusicProps> = ({ music }) => {
  const [filter, setFilter] = useState<MusicFilter>("all");
  const filteredMusic = useMemo(
    () => filter === "all" ? music : music.filter((item) => item.type === filter),
    [filter, music]
  );

  return (
    <PianoFrame title="Music" id="music_frame">
      <div className="filter-bar" role="group" aria-label="Filter music">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`filter-item ${filter === value ? "active" : ""}`}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="music-container" aria-live="polite">
        {filteredMusic.map((item) => <MusicCard key={item.id} item={item} />)}
      </div>
    </PianoFrame>
  );
};

export default Music;
