
import Button from "../../component/Button";

function CommunitySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border border-blue-100 dark:border-gray-700 rounded-2xl p-5 sm:p-7 md:p-9 lg:p-12 xl:p-14 text-center shadow-sm">

        {/* DECORATIVE CIRCLES */}
        <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-blue-200/40 rounded-full blur-2xl"></div>

        <div className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-sky-200/40 rounded-full blur-2xl"></div>

        <div className="relative z-10">

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight max-w-3xl mx-auto">
            Join 1,206,685 people building
            <span className="text-blue-600"> portfolio-worthy projects</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base md:text-base lg:text-lg mt-4 sm:mt-5 max-w-2xl mx-auto leading-relaxed">
            Our highly supportive, positive community is here to help you
            improve your skills. We all try to help each other out wherever
            possible. We'd love to welcome you to our community!
          </p>

          {/* BUTTON */}
          <div className="flex justify-center mt-6 sm:mt-7">
            <Button
              href="https://github.com/login"
              className="w-full sm:w-auto"
              icon
            >
              Log In With GitHub
            </Button>
          </div>

          {/* FOOTER TEXT */}
          <p className="text-xs sm:text-sm text-slate-400 mt-4 sm:mt-5">
            Join the community and start building today!
          </p>

        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
