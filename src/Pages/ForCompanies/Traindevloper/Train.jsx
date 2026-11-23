function TeamAccount() {
  return (
    <div className="isolate relative overflow-hidden flex flex-col gap-5 px-5 pt-8 w-full tablet:items-center tablet:text-center">

      <div className="absolute bg-center bg-no-repeat h-full left-0 opacity-30 top-0 w-full z-[-2] [background-image:theme(backgroundImage.patternBracket),theme(backgroundImage.patternDots),theme(backgroundImage.patternSquiggle)] [background-position:top_10%_left_10%,top_20%_right_0,bottom_15%_right_10%,bottom_0_left_-4rem] mobile:[background-image:theme(backgroundImage.patternBracket),theme(backgroundImage.patternDots),theme(backgroundImage.patternSquiggle),theme(backgroundImage.patternCircle)]"></div>

      <h1 className="font-secondary text-3xl tablet:text-5xl leading-tight max-w-[30ch] text-blue-500">
        Upskill your developers faster with hands-on, real-world practice
      </h1>

      <p className="max-w-prose text-lg text-gray-500">
        Close skill gaps with industry-standard projects your developers build in your exact tech stack, plus an AI code review on every solution they submit. See where each learner is strong, where they need support, and how they’re progressing.
      </p>

      <a
        className="border disabled:bg-neutral-500 disabled:border-neutral-500 flex font-bold font-secondary italic items-center justify-center px-5 py-3 text-center text-base tracking-wider transition-colors rounded-full uppercase w-fit leading-none bg-rose-600 border-rose-600 hover:bg-red-700 hover:border-red-700 text-white"
        href="/register"
      >
        Create a team account
      </a>

    </div>
  );
}

export default TeamAccount;


