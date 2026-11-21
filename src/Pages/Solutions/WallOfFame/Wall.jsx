
import { Link } from "react-router-dom";

function WallOfFame() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 min-h-screen">

      {/* BREADCRUMB */}
      <div className="sticky top-0 z-[100] w-full bg-gradient-to-br from-blue-100 via-white to-sky-100 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold uppercase tracking-wider">
            Solutions
          </span>

          <div className="flex items-center gap-6 text-lg font-medium text-gray-600">

            <Link
              to="/solutions"
              className="hover:text-blue-600 hover:underline underline-offset-4"
            >
              Solutions
            </Link>

            <Link
              to="/tags"
              className="hover:text-blue-600 hover:underline underline-offset-4"
            >
              Tags
            </Link>

            <Link
              to="/wall"
              className="text-blue-600 hover:underline underline-offset-4"
            >
              Wall of Fame
            </Link>

          </div>
        </div>
      </div>

    </main>
  );
}

export default WallOfFame;
