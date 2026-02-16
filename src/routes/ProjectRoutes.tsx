import { Route, Routes } from "react-router-dom";
import Maskexp from "../projects/Maskexp";
import Notfound from "../pages/Notfount";
import ChordSense from "../projects/ChordSense";
import EtVisitor from "../projects/EtVisitor";
import PiCo from "../projects/PiCo";
import RhyMatcher from "../projects/RhyMatcher";
import TapArr from "../projects/TapArr";
import Scorify from "../projects/Scorify";
import Tap2Music from "../projects/Tap2Music";
import StyleGenie from "../projects/StyleGenie";
import MidiAlignVisualizer from "../projects/MidiAlignVisualizer";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Notfound />} />
      <Route path="midi_align_visualizer" element={<MidiAlignVisualizer />} />
      <Route path="tap2music" element={<Tap2Music />} />
      <Route path="scorify" element={<Scorify />} />
      <Route path="stylegenie" element={<StyleGenie />} />
      <Route path="taparr" element={<TapArr />} />
      <Route path="rhymatcher" element={<RhyMatcher />} />
      <Route path="maskexp" element={<Maskexp />} />
      <Route path="chordsense" element={<ChordSense />} />
      <Route path="pico" element={<PiCo />} />
      <Route path="etvisitor" element={<EtVisitor />} />
    </Routes>
  );
};

export default ProjectRoutes;
