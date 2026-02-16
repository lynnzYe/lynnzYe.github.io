import banner from "./midialignV/banner.png";

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

export default function MidiAlignVisualizer() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 pb-36">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
              Midi Alignment Visualizer
            </h1>
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
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/lynnzYe/MidiAlignVisualizer"
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
                href="https://lynnzye.github.io/MidiAlignVisualizer/"
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
              Interactive MIDI Alignment Visualizer
            </h2>
            <p className="text-gray-600">
              Inspired by the awesome{" "}
              <a
                href="https://sildater.github.io/parangonada/"
                target="blank"
                rel="noopener noreferrer"
              >
                Paragonada
              </a>
              , this web app provides a simplistic interactive interface to
              visualize MIDI alignment data. For DAW users, this MIDI visualizer
              might look familiar to you! (including the scrolling, zooming
              actions)
              <br />
              <br />
              The app just needs two MIDI files and an alignment CSV file for
              visualization. The CSV file should record mapping relationship
              from the first MIDI's index to the second MIDI's index. An example
              of the CSV structure can be found below.
              <br />
              <br />
              <hr />
              <br />
              {/* Alignment Table Example */}
              <h2 className="text-1xl font-bold pb-5">
                Alignment Table Example
              </h2>
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b">
                        MIDI1 ID
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b">
                        Intermediary MIDI (optional)
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b">
                        MIDI2 ID
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3">0</td>
                      <td className="px-6 py-3 text-gray-400">—</td>
                      <td className="px-6 py-3">0</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3">1</td>
                      <td className="px-6 py-3 text-gray-400">—</td>
                      <td className="px-6 py-3 text-gray-400">—</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3">2</td>
                      <td className="px-6 py-3">1</td>
                      <td className="px-6 py-3">1</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3">...</td>
                      <td className="px-6 py-3">...</td>
                      <td className="px-6 py-3">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              The <span className="font-medium">Intermediary MIDI</span> column
              is optional. It exists for legacy alignment formats that use an
              additional mapping step. If your alignment does not require it,
              you may leave the field blank or fill it with dummy values.
              <br></br>
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              The MIDI ID can be obtained by first sorting by onset, then by
              pitch (both in increasing order)
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
