
import {
  MessageCircle,
  Layers,
  Palette
} from "lucide-react";

function GetFeedback() {
  return (
    <section
      id="feedback"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      {/* HEADING */}
      <div className="flex flex-col gap-4 items-center text-center mb-8 sm:mb-10 md:mb-12">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug max-w-[38rem]">
          Get feedback on every solution with{" "}
          <span className="inline-block bg-blue-600 px-2 py-1 rounded-lg text-white uppercase">
            Pro
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Get a review on every solution, then re-run it after each round
          of fixes until you’re happy with your code.
        </p>

        <div className="w-14 sm:w-16 h-1 bg-blue-500 rounded-full"></div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

        {/* CARD 1 */}
        <div className="group min-w-0 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-5 md:p-5 lg:p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-600 transition-all duration-300">
            <MessageCircle
              size={21}
              className="text-blue-600 group-hover:text-white transition-all duration-300"
            />
          </div>

          <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition">
            Get an AI code review on every solution
          </h3>

          <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 leading-relaxed">
            Each finding points to specific lines in your code and explains
            what to change and why. Reviews cover code quality, accessibility,
            your commits, and your README, and take your challenge brief into
            account. Free members get one a month, and Pro covers every solution.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group min-w-0 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-5 md:p-5 lg:p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-600 transition-all duration-300">
            <Layers
              size={21}
              className="text-blue-600 group-hover:text-white transition-all duration-300"
            />
          </div>

          <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition">
            Take on bigger, realistic projects
          </h3>

          <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 leading-relaxed">
            Work on multi-page sites, dashboards, and full-stack apps.
            Projects this size make you plan your components and keep a
            growing codebase organized. Build to a design file, or take
            on a product challenge and make the design decisions yourself.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="group min-w-0 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-5 md:p-5 lg:p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-600 transition-all duration-300">
            <Palette
              size={21}
              className="text-blue-600 group-hover:text-white transition-all duration-300"
            />
          </div>

          <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition">
            Practice the design-to-code workflow
          </h3>

          <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 leading-relaxed">
            Get professional design files for every design challenge and
            build to real specs: colors, spacing, type, and more.
            It’s the same workflow developers use on the job.
          </p>
        </div>

      </div>
    </section>
  );
}

export default GetFeedback;
