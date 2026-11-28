
import Button from "../../../component/Button";

function HireDevelopers() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] dark:bg-gray-900 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 transition-colors duration-300">

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-5 sm:gap-6 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight lg:leading-[1.2] text-blue-900 dark:text-white max-w-[1000px]">
          Hire exceptional, project-proven early-career developers
        </h1>

        <p className="max-w-[850px] text-base sm:text-lg lg:text-[22px] leading-relaxed sm:leading-8 lg:leading-9 text-neutral-500 dark:text-neutral-300">
          Tap into the largest project-based learning community for
          developers—Frontend Mentor. Quickly discover talented junior
          front-end and full-stack developers who’ve honed their skills
          building real-world projects.
        </p>

        {/* BUTTON */}
        <div className="mt-2">
          <Button to="/register">
            Start your free trial
          </Button>
        </div>

        <p className="max-w-prose text-sm sm:text-base lg:text-lg italic text-neutral-500 dark:text-neutral-400">
          14-day free trial with 10 message credits—no credit card required.
        </p>

      </div>

      {/* HERO IMAGE */}
      <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center w-full">
        <img
          alt="Frontend Mentor hiring platform preview"
          width="1980"
          height="1000"
          src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-hero.webp&w=3840&q=75"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>

    </section>
  );
}

export default HireDevelopers;
