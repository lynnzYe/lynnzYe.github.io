import React from "react";
import "./PianoSections.css";
import { Link } from "react-router-dom";

const PianoSection: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="piano-sections" aria-label="Explore more">
      <Link to="/projects" onClick={scrollTop}>Projects</Link>
      <Link to="/music" onClick={scrollTop}>Music</Link>
      <Link to="/about" onClick={scrollTop}>More about me</Link>
    </nav>
  );
};

export default PianoSection;
