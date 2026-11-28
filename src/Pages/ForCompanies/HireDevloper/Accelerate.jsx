
function Accelerate() {
  return (
    <section
      id="choose"
      className="w-full bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Accelerate your hiring
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Our features make it easy for you to find, analyze,
            and contact developers who meet your exact hiring needs.
            No mountains of resumes required.
          </p>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

            <div className="p-5 sm:p-7 md:p-6 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                Advanced candidate search
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 leading-relaxed">
                Stop watching endless tutorials and start building
                real-world projects. Turn your ideas into interactive
                websites using professional designs and practical
                challenges. Strengthen your HTML, CSS, and JavaScript
                skills, solve real development problems, and gain the
                confidence to create projects independently. Learn by
                doing and take your frontend development journey to
                the next level.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-5 lg:p-8 flex items-center justify-center">
              <img
                src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-advanced-search.webp&w=3840&q=75"
                alt="Advanced candidate search"
                className="w-full max-w-xl h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[300px] lg:max-h-[350px] object-contain"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

            <div className="p-5 sm:p-6 md:p-5 lg:p-8 flex items-center justify-center order-2 md:order-1">
              <img
                src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-featured-projects.webp&w=3840&q=75"
                alt="Talent profiles with featured projects"
                className="w-full max-w-xl h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[300px] lg:max-h-[350px] object-contain"
              />
            </div>

            <div className="p-5 sm:p-7 md:p-6 lg:p-10 order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                Talent profiles with featured projects
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 leading-relaxed">
                Build a portfolio filled with real-world projects that
                highlight your frontend development skills. Showcase
                your ability to turn professional designs into
                responsive, functional websites. Each project gives
                you an opportunity to demonstrate your problem-solving
                skills, creativity, and coding knowledge. Create work
                you can confidently explain, share with others, and
                present to potential employers to stand out from the crowd.
              </p>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

            <div className="p-5 sm:p-7 md:p-6 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                Message candidates directly
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 leading-relaxed">
                Start by writing code yourself to build a strong
                understanding of HTML, CSS, and JavaScript. Learn how
                different components work, understand code structure,
                and develop the confidence to solve problems
                independently. Once you have a solid foundation, use
                AI tools to speed up development, explore new ideas,
                and work on larger, more complex projects. Learn how
                to review AI-generated code, identify mistakes, and
                make improvements.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-5 lg:p-8 flex items-center justify-center">
              <img
                src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-message-directly.webp&w=3840&q=75"
                alt="Message candidates directly"
                className="w-full max-w-xl h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[300px] lg:max-h-[350px] object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Accelerate;
