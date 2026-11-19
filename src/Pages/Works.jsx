
import WorksImage from "../assets/Works.png";

function Works() {
  return (
    <section
      id="works"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >

      {/* HEADING */}
      <div className="text-center mb-7 sm:mb-9 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-slate-900">
          How it works
        </h2>

        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 sm:mt-5"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">

        {/* LEFT SIDE - 4 CARDS */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl border border-blue-400 p-5 sm:p-6 md:p-5 lg:p-6 min-h-[130px] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold leading-snug">
              1 Choose your challenge
            </h5>

            <p className="mt-3 text-sm sm:text-base md:text-sm lg:text-base text-blue-50 leading-relaxed">
              Pick from 133 professional projects across five difficulty
              levels. Build to a design file, or take on a product
              challenge and make the design decisions yourself.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-white text-slate-900 border border-blue-100 rounded-2xl p-5 sm:p-6 md:p-5 lg:p-6 min-h-[75px] sm:min-h-[80px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold leading-snug">
              2 Build it your way
            </h5>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white text-slate-900 border border-blue-100 rounded-2xl p-5 sm:p-6 md:p-5 lg:p-6 min-h-[75px] sm:min-h-[80px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold leading-snug">
              3 Submit and improve
            </h5>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-blue-50 to-white text-slate-900 border border-blue-100 rounded-2xl p-5 sm:p-6 md:p-5 lg:p-6 min-h-[75px] sm:min-h-[80px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold leading-snug">
              4 Level up as you go
            </h5>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-4 sm:p-6 md:p-4 lg:p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 min-h-[220px] sm:min-h-[300px] md:min-h-full">

          <img
            alt="How it works"
            src={WorksImage}
            className="w-full h-auto max-h-[260px] sm:max-h-[360px] md:max-h-[420px] lg:max-h-[480px] object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default Works;
