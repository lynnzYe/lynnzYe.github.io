import React from "react";
import banner from "./stylegenie/banner.png";

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

export default function StyleGenie() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">StyleGenie</h1>
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
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4"></div>
            (Code coming soon...?)
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
              Perform any piece you'd like using style-conditioned piano genie!
            </h2>
            <p className="text-gray-600">
              Based on the awesome{" "}
              <a href="https://magenta.withgoogle.com/pianogenie">
                {" "}
                Piano Genie{" "}
              </a>
              and under the guidance of its creator (I was lucky enough), I
              built a web app which allows you to perform any musical score.
              Sounds impossible? Well yeah... the model isn't always spitting
              out the correct pitch, but to some extent yes!
              <br />
              <br />
              Check out the demo video below and take a guess which pieces I was
              performing!
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
                  src="https://www.youtube.com/embed/kbVaQA0yi4Y"
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
