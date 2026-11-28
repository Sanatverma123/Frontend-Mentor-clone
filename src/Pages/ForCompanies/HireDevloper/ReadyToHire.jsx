

import Button from "../../../component/Button";

function ReadyToHire() {
  return (
    <section className="relative overflow-hidden w-full max-w-7xl mx-auto flex flex-col items-center gap-5 sm:gap-6 px-5 sm:px-8 py-10 sm:py-12 lg:py-14 text-center text-base sm:text-lg bg-gray-100 dark:bg-gray-800 text-neutral-600 dark:text-gray-300 rounded-xl transition-colors duration-300">

      {/* HEADING */}
      <h2 className="font-secondary text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-xl text-neutral-900 dark:text-white">
        Ready to find your next great developer?
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-prose leading-relaxed">
        Let us help you build an exceptional team with developers who have
        proven their abilities and are ready to make an impact.
      </p>

      {/* CTA BUTTON */}
      <Button
        to="/register"
      >
        Start your free trial
      </Button>

      {/* NOTE */}
      <p className="italic text-sm sm:text-base">
        14-day free trial with 10 message credits—no credit card required.
      </p>

    </section>
  );
}

export default ReadyToHire;
