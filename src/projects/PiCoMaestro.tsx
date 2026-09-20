import banner from "./picomaestro/banner.png";

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

export default function PiCoMaestro() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 pb-36">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
              PiCoMaestro: An Interactive Interface for Piano Conducting
            </h1>
            <div className="space-y-2">
              <p className="text-lg">
                <a
                  href="https://github.com/lynnzYe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Lynn Ye
                </a>
              </p>
              {/* <p className="text-gray-500">Jun. 2026 – Present</p> */}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.picomaestro.com/"
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
              alt="PiCoMaestro interactive piano-conducting interface"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overview Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">About PiCoMaestro</h2>
            <p className="text-gray-600">
              PiCoMaestro is a web-based interface for conducting a piano
              performance in real time. Instead of playing every note, users
              shape the melody through articulation, velocity, and pedaling,
              while a rule-based algorithm generates an accompaniment that
              responds to their expression.
              <br />
              <br />
              The project explores a simple question: how can a pianist focus on
              musical intention without having to control every part of a
              polyphonic performance at once? PiCoMaestro turns a small set of
              expressive gestures into a complete performance, making detailed
              musical control more immediate and accessible.
            </p>
          </section>

          {/* Research Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">
              Research and Development
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-3">
              <li>
                Curated a dataset of 165 melody-annotated piano scores for music
                information retrieval and automatic melody recognition.
              </li>
              <li>
                Built an automated, consent-based pipeline for collecting user
                performances for expressive piano modeling, score following, and
                automatic accompaniment.
              </li>
              {/* <li>
                Designed a three-dimensional dynamic time warping algorithm for
                online alignment of tapping events to musical scores, achieving
                86% group-level accuracy on a small custom test set.
              </li> */}
            </ul>
          </section>

          {/* Ongoing Work Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">What I am working on</h2>
            <p className="text-gray-600">
              I am currently developing automatic melody recognition, an
              automatic-accompaniment benchmark, and online alignment from
              tapping events to score positions. Together, these components will
              help automate score generation in PiCoMaestro, improve the
              expressivity of its accompaniment, and support fine-grained
              control in polyphonic music.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
