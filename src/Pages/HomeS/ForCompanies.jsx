
import comp1 from "../../assets/Comp1.png";
import comp2 from "../../assets/Comp2.png";
import Button from "../../component/Button";

function ForCompanies() {
  return (
    <section
      id="companies"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          For Companies
        </h2>

        <div className="w-14 sm:w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 sm:mt-5"></div>
      </div>

      <div className="space-y-5 sm:space-y-6 md:space-y-7">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          {/* TEXT */}
          <div className="p-5 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-center items-start">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
              Train junior developers with real projects
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-sm lg:text-base text-slate-600 leading-relaxed">
              Skip theoretical tutorials. Give your junior developers 133
              real-world challenges that build practical skills. Get an AI code
              review on every developer’s submission to identify skill gaps and
              track their progress.
            </p>

            <Button className="mt-5 w-full sm:w-auto">
              EXPLORE TEAMS
            </Button>
          </div>

          {/* IMAGE */}
          <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex items-center justify-center">
            <img
              src={comp1}
              alt="Train junior developers"
              className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[340px] object-contain"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          {/* IMAGE */}
          <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex items-center justify-center order-2 md:order-1">
            <img
              src={comp2}
              alt="Discover junior talent"
              className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[340px] object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="p-5 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-center items-start order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
              Discover junior talent through skills, not resumes
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-sm lg:text-base text-slate-600 leading-relaxed">
              See real code and live projects upfront, then connect directly
              with developers who've demonstrated the skills and passion you
              need.
            </p>

            <Button className="mt-5 w-full sm:w-auto">
              EXPLORE HIRING
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ForCompanies;
