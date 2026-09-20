import ProjectPage from "../component/ProjectPage";
import banner from "./picomaestro/banner.png";

const musicIcon = (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v9.126A4 4 0 1 0 12 16V6h4a1 1 0 0 0 1-1V3Z" />
  </svg>
);

export default function PiCoMaestro() {
  return (
    <ProjectPage
      title="PiCoMaestro: An Interactive Interface for Piano Conducting"
      author="Lynn Ye"
      authorUrl="https://github.com/lynnzYe"
      banner={banner}
      bannerAlt="PiCoMaestro interactive piano-conducting interface"
      actions={[
        {
          href: "https://www.picomaestro.com/",
          label: "Try it out here!",
          icon: musicIcon,
        },
      ]}
    >
      <section>
        <h2>About PiCoMaestro</h2>
        <p>
          PiCoMaestro is a web-based interface for conducting a piano
          performance in real time. Instead of playing every note, users shape
          the melody through articulation, velocity, and pedaling, while a
          rule-based algorithm generates an accompaniment that responds to
          their expression.
        </p>
        <p>
          The project explores a simple question: how can a pianist focus on
          musical intention without having to control every part of a
          polyphonic performance at once? PiCoMaestro turns a small set of
          expressive gestures into a complete performance, making detailed
          musical control more immediate and accessible.
        </p>
      </section>

      <section>
        <h2>Research and Development</h2>
        <ul>
          <li>
            Curated a dataset of 165 melody-annotated piano scores for music
            information retrieval and automatic melody recognition.
          </li>
          <li>
            Built an automated, consent-based pipeline for collecting user
            performances for expressive piano modeling, score following, and
            automatic accompaniment.
          </li>
        </ul>
      </section>

      <section>
        <h2>What I am working on</h2>
        <p>
          I am currently developing automatic melody recognition, an
          automatic-accompaniment benchmark, and online alignment from tapping
          events to score positions. Together, these components will help
          automate score generation in PiCoMaestro, improve the expressivity of
          its accompaniment, and support fine-grained control in polyphonic
          music.
        </p>
      </section>
    </ProjectPage>
  );
}
