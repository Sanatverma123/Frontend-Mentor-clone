
import heroImage from "../assets/hero.png";
import Button from "../component/Button";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full text-center md:text-left">

          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-5">
            For learners
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-900 leading-tight">
            Get seriously good at building for the{" "}
            <span className="text-blue-600">web.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 mt-4 sm:mt-5 leading-relaxed max-w-xl mx-auto md:mx-0">
            Practice on real projects from professional designs and product
            specs, by hand at first, then with AI agents. Get an AI code review
            and feedback from other developers as you go.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start flex-wrap gap-3 mt-6 sm:mt-7">

            <Button to="/challenges" icon className="w-full sm:w-auto">
              START BUILDING FREE
            </Button>

            <Button to="/challenges" variant="secondary" className="w-full sm:w-auto">
              Browse challenges
            </Button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex items-center justify-center mt-2 sm:mt-4 md:mt-0">

          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-blue-200/40 rounded-full blur-3xl"></div>

          <img
            src={heroImage}
            alt="Frontend development preview"
            className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] h-auto object-contain rounded-2xl sm:rounded-3xl hover:scale-[1.03] transition-transform duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
