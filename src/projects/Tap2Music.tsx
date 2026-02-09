import React from "react";
import banner from "./tap2music/banner.png";

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

export default function Tap2Music() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">Tap2Music</h1>
            <span
              className="text-4xl md:text-3xl tracking-tight"
              style={{ color: "black" }}
            ></span>
            {/* Authors */}
            <div className="space-y-2">
              <p className="text-lg text-blue-600">
                <a
                  href="https://github.com/lynnzYe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Lynn Ye
                </a>
                <a
                  href="https://github.com/000FLMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  , Sihan He
                </a>
                <a
                  href="https://github.com/Yzq77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  , Ziqi Yang
                </a>
                <a
                  href="https://github.com/WL-412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  , Wenhan Li
                </a>
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/lynnzYe/Tap2Music_Web"
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
              <a
                href="https://lynnzye.github.io/Tap2Music_Web/"
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
                    <path d="M9 18a3 3 0 100-6 3 3 0 000 6zM17 3a1 1 0 00-1-1h-6a1 1 0 00-1 1v9.126A4.002 4.002 0 008 12a4 4 0 104 4V6h4a1 1 0 001-1V3z" />
                  </svg>
                  Try it out here!
                </Button>
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <div className="border rounded-lg overflow-hidden">
            <img
              src={banner}
              alt="Project banner"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">
              Tap your music in real time with various condition signals!
            </h2>
            <p className="text-gray-600">
              This work is inspired by the awesome{" "}
              <a href="https://magenta.withgoogle.com/pianogenie">
                {" "}
                Piano Genie
              </a>
              , which enables real-time music creation just by tapping on 8
              buttoms.
              <br />
              <br />
              Extending Piano Genie, Tap2Music can take a variety of condition
              signals, such as hand position, range, chord type, etc. to
              influence the generated music. You can play with our system using
              the link above! Notice that you need to switch to Tap2Music mode
              to enable AI inference.
              <br />
              <br />
              Alternatively, you can check out the demo video below!
              <br />
              <br />
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
                  src="https://www.youtube.com/embed/OxL76dlAQF0"
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
          </section>
        </div>
      </main>
    </div>
  );
}
