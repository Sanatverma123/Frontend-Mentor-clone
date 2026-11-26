
import Why1 from "../../assets/Why1.png";
import Why2 from "../../assets/Why2.png";
import Why3 from "../../assets/Why3.png";
import Why4 from "../../assets/Why4.png";

function Choose() {
  return (
    <section
      id="choose"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          Why Developers Choose Frontend Mentor
        </h2>

        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
      </div>

      <div className="space-y-5 sm:space-y-6 md:space-y-7">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          <div className="p-5 sm:p-6 md:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-slate-900 leading-snug">
              Move beyond passive learning
            </h3>

            <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-sm lg:text-base">
              Stop watching endless tutorials and start building real-world projects.
              Turn your ideas into interactive websites using professional designs and practical challenges. Strengthen your
              HTML, CSS, and JavaScript skills, solve real development problems,
              and gain the confidence to create projects independently. Learn by doing and take your frontend development journey to the next level.
            </p>
          </div>

          <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex items-center justify-center">
            <img
              src={Why1}
              alt="Move beyond passive learning"
              className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[320px] object-contain"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex items-center justify-center order-2 md:order-1">
            <img
              src={Why2}
              alt="Build a portfolio"
              className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[320px] object-contain"
            />
          </div>

          <div className="p-5 sm:p-6 md:p-6 lg:p-8 order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-slate-900 leading-snug">
              Build a portfolio you can explain
            </h3>

            <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-sm lg:text-base">
              Build a portfolio filled with real-world projects that highlight your frontend development skills.
              Showcase your ability to turn professional designs into responsive, functional websites.
              Each project gives you an opportunity to demonstrate your problem-solving skills, creativity,
              and coding knowledge. Create work you can confidently explain,
              share with others, and present to potential employers to stand out from the crowd.
            </p>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          <div className="p-5 sm:p-6 md:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-slate-900 leading-snug">
              Build by hand first, then with AI
            </h3>

            <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-sm lg:text-base">
              Start by writing code yourself to build a strong understanding of HTML, CSS, and JavaScript.
              Learn how different components work, understand code structure, and develop the confidence to solve problems independently.
              Once you have a solid foundation, use AI tools to speed up development, explore new ideas, and work on larger, more complex projects.
              Learn how to review AI-generated code, identify mistakes, and make improvements.
            </p>
          </div>

          <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex items-center justify-center">
            <img
              src={Why3}
              alt="Build by hand first, then with AI"
              className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[320px] object-contain"
            />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex items-center justify-center order-2 md:order-1">
            <img
              src={Why4}
              alt="Developer community"
              className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[320px] object-contain"
            />
          </div>

          <div className="p-5 sm:p-6 md:p-6 lg:p-8 order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-slate-900 leading-snug">
              Join a supportive developer community
            </h3>

            <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-sm lg:text-base">
              Become part of a welcoming community of developers who are passionate about learning and building together.
              Share your projects, exchange ideas, ask questions, and receive valuable feedback from fellow developers.
              Learn from different experiences, discover new techniques, and get inspired by other people's work. Stay motivated,
              improve your coding skills, and grow together as you build your journey in frontend development.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Choose;
