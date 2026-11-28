
import { UserRound } from "lucide-react";
import Button from "../../component/Button";

function Practice() {
  return (
    <section className=" py-8 sm:py-10 md:py-12 lg:py-16">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          Two ways to practice
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-base leading-relaxed">
          Pick the format that trains the skill you want to work on next.
        </p>

        <div className="w-14 sm:w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 sm:mt-5"></div>
      </div>

      {/* FIRST TWO CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-7 sm:mt-8 md:mt-10">

        {/* CARD 1 */}
        <div className="group min-w-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 p-5 sm:p-6 md:p-6 lg:p-8 text-left transition-all duration-300">

          <h6 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition leading-snug">
            Design challenges
          </h6>

          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
            Build real projects from professional designs and product specs. Get
            an AI code review and feedback from other developers as you go.
          </p>

          <div className="mt-5">
            <Button href="#" className="w-full sm:w-auto">
              Browse design challenges
            </Button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="group min-w-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 sm:p-6 md:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">

          <h6 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition leading-snug">
            Product challenges
          </h6>

          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
            Build from a product spec and brand kit, with no design file. You’ll
            practice deciding how a product should look and work, then shipping
            it, by hand or with an agent.
          </p>

          <div className="mt-5">
            <Button href="#" className="w-full sm:w-auto">
              Browse product challenges
            </Button>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10">

        {/* CARD 3 */}
        <div className="min-w-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 p-5 sm:p-6 md:p-6 lg:p-8 text-left transition-all duration-300">

          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
            "I highly recommend Frontend Mentor. Skip the search for project
            ideas and dive into ready-made challenges that help you level up as
            a developer."
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <UserRound size={20} />
            </div>

            <div className="min-w-0">
              <h6 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-200">
                Kevin Powell
              </h6>

              <p className="text-xs sm:text-sm text-blue-600">
                Web Developer & YouTuber
              </p>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="min-w-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-5 sm:p-6 md:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">

          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
            "Frontend Mentor is a win-win. You can sharpen your skills building
            websites and add finished projects to your portfolio to help land a
            job!"
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <UserRound size={20} />
            </div>

            <div className="min-w-0">
              <h6 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-200">
                Jessica Chan
              </h6>

              <p className="text-xs sm:text-sm text-blue-600">
                Web Developer & YouTuber
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Practice;
