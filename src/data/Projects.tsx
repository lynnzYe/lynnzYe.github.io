import { Project } from "../pages/Projects";
import maskexp from "./maskexp.png";
// import dummyIcon from "./dmy.png";
import dpf from "./dpf.jpeg";
import et from "./et.png";
import chordsense from "./chordsense.png";
import pico from "./pico.webp";
import rhymatcher from "./rhymatcher.jpg";
import taparr from "./taparr.png";
import scorify from "./scorify.png";
import tap2music from "./tap2music.png";
import stylegenie from "./stylegenie.png";

const p9: Project = {
  id: 14,
  img: stylegenie,
  title: "Style Genie",
  brief: "Perform any piece you'd like using style-conditioned piano genie",
  link: "/proj/stylegenie",
};

const p8: Project = {
  id: 13,
  img: tap2music,
  title: "Tap2Music",
  brief: "Tap your music in real time with various condition signals",
  link: "/proj/tap2music",
};

const p7: Project = {
  id: 12,
  img: scorify,
  title: "Scorify",
  brief: "Real-time expressive piano performance transcription",
  link: "/proj/scorify",
};

const p6: Project = {
  id: 11,
  img: taparr,
  title: "Tap Arranger",
  brief:
    "Perform real-time piano arranging of your favorite melody just by tapping!",
  link: "/proj/taparr",
};

const p5: Project = {
  id: 1,
  img: rhymatcher,
  title: "Rhythmic Matcher",
  brief:
    "... is an intuitive transcriber.\n Match touch signals to a musical score. \n(In progress)",
  link: "/proj/rhymatcher",
};

const p4: Project = {
  id: 1,
  img: maskexp,
  title: "Masked Expressiveness",
  brief:
    "Infilling piano key striking velocity based on surrounding expressive parameters",
  link: "/proj/maskexp",
};

const p3: Project = {
  id: 2,
  img: chordsense,
  title: "Chord Sense",
  brief:
    "Embark on a harmonic journey towards a certain chord progression by interacting with transformers",
  link: "/proj/chordsense",
};

const p2: Project = {
  id: 3,
  img: pico,
  title: "Piano Conductor",
  brief:
    "Create artful piano performances by touch signals. Unleash your creative potential with minimal technical distractions.",
  link: "/proj/pico",
};

const p1: Project = {
  id: 3,
  img: et,
  title: "Extraterrestrial Vistor",
  brief:
    "Algorithmic composition using Nyquist for programming \n Collaborator: Tinke Zhang",
  link: "/proj/etvisitor",
};

const p0: Project = {
  id: 3,
  img: dpf,
  title: "Vnomics - DPF Failure Prediction",
  brief:
    "We used autoencoder's reconstruction loss to differentiate between working and failing filters to predict DPF failure. \nI was responsible for the model setup and hyperparameter tuning.",
  link: "https://github.com/mtaruno/vnomics",
};

export const projs = [p7, p8, p9, p6, p5, p4, p3, p2, p1, p0];
