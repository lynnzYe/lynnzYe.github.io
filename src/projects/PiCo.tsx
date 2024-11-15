import React from "react";
import pico from "./pico/pico.webp";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 flex items-center gap-2"
  >
    {children}
  </button>
);

export default function PiCo() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
              Piano Conductor
            </h1>

            {/* Authors */}
            <div className="space-y-2">
              <p className="text-lg ">
                by{" "}
                <a
                  href="https://github.com/lynnzYe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Linzan Ye
                </a>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/lynnzYe/PiCo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Code
                </Button>
              </a>
            </div>
          </div>
          {/* Banner Image */}
          <div className="flex justify-center items-center rounded-lg">
            <img
              src={pico}
              alt="Project banner"
              className=" h-[300px] object-cover"
            />
          </div>

          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-1">Background</h2>
            <p className="text-gray-600">
              The ideas of "air instruments" (e.g. air guitar) and conducting
              systems are not new. Many projects have explored this idea, such
              as Guitar Hero, Piano Genie, Radio Baton, and others. I want to
              take this further and create an "air piano". I envision a future
              where the technical challenges of piano playing becomes less of a
              barrier for both amateurs and professionals to express their
              interpretations of musical compositions. As early as in the 1970s,
              Max Matthews came up with the idea of "radio baton". Since the
              pitch information is explicitly encoded in most musical scores,
              one can ask computers to memorize it, leaving the performer to
              focus on controlling the rhythm, speed, volume, pattern, and
              timbre of the sound. With recent advancements in artificial
              intelligence, I am motivated to dream bigger. Instead of having
              users to manipulate all the expressive parameters at once, which
              can be overwhelming, why not have AI infer the appropriate
              expressive parameters from the main contour that users provide?
            </p>
          </section>
          {/* Method Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">
              Proof-of-Concept Interactive Demo
            </h2>
            <p className="text-gray-600 pb-5">
              The code for interactive demo is provided in the github repo.
              Given a predetermined note sequence, the program synthesizes a
              performance based on the onset, offset, and velocity information
              provided by the user through a MIDI device. Users only need to
              know the melody and rhythm, and then tap accordingly to produce
              the performance.
              <br />
              <br />
              The goal is to enable users to expressively perform a piece
              without spending hours learning it. Currently, the demo requires
              users to perform on MIDI keyboards, but designing
              pressure-sensitive desks and gloves to capture touch signals could
              eventually allow users to play anywhere, anytime, with reduced
              risk of accidentally triggering notes during a performance.
            </p>
            <div className="flex justify-center items-center rounded-lg pb-5">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  width: "100%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/yefvGfXLf6c"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            </div>
            <blockquote className="text-gray-600 text-sm pb-5">
              The performed melody is the opening excerpt from Schubert's Op.
              142.
            </blockquote>
            <p className="text-gray-600">
              While the current demo works only with a predefined monophonic
              note sequence and synthesizes sound solely when the user sends a
              touch signal, it could be enhanced with an automatic expressive
              accompaniment system to create a full, expressive performance.
              <br />
              <br />
              Another project of mine,{" "}
              <a
                href="https://lynnzye.github.io/#/proj/maskexp"
                target="_blank"
                style={{ color: "#7e83f8" }}
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Masked Expressiveness
              </a>
              , focuses on adding expressiveness based on user input signals.
              <br />
              <br />
              I envision creating the ultimate version of Piano Conductor,
              allowing users to artfully perform pieces like Chopin's Nocturnes
              with nuanced rubatos and voicings—and even apply performance style
              transfers from friends or legendary pianists.
              <br />
              <br />
              With the fully realized Piano Conductor, users would have the
              freedom to focus deeply on shaping their musical interpretations
              and bringing them to life in real time.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
