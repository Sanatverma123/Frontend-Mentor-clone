
import { CircleX, CircleCheck } from "lucide-react";

const features = [
  {
    title: "Assess practical skills",
    problem: "It’s tough to evaluate candidates with limited experience.",
    solution:
      "Every Frontend Mentor developer has a portfolio of completed, real-world projects. Get instant clarity on their true capabilities, problem-solving approaches, and code quality.",
  },
  {
    title: "Reduce hiring overhead",
    problem: "Screening hundreds of resumes drains time and resources.",
    solution:
      "Use advanced search filters to quickly find developers who match your exact criteria—saving you time and letting you focus on the best candidates first.",
  },
  {
    title: "Evaluate soft skills & culture fit",
    problem:
      "Little professional history makes it hard to judge collaboration and communication.",
    solution:
      "Our community runs on peer feedback, code reviews, and group projects. You'll discover candidates who are open to feedback, communicate effectively, and work well with others.",
  },
  {
    title: "Discover hidden gems",
    problem: "Consistently finding high-potential early-career talent is hard.",
    solution:
      "Our platform is self-directed and project-based, so you’ll find a talent-rich community of motivated developers ready to contribute and grow with your company.",
  },
  {
    title: "Compete for top talent",
    problem:
      "High demand for top talent makes it hard to retain great developers.",
    solution:
      "Our platform connects you with developers committed to growth. Early-career hires often remain longer, boosting retention and team stability.",
  },
  {
    title: "Streamline onboarding",
    problem: "Training new hires remotely can take time and effort.",
    solution:
      "Our developers are used to self-directed learning. Their real-world workflow experience helps you integrate them into your team faster.",
  },
];

function Wemake() {
  return (
    <section className="w-full bg-neutral-50 dark:bg-gray-900 transition-colors duration-300 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">

        {/* SECTION HEADING */}
        <div className="flex flex-col items-center text-center gap-4">

          <h2 className="font-secondary text-3xl sm:text-4xl lg:text-5xl leading-tight text-neutral-900 dark:text-white">
            We make it easy to...
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-2xl w-full flex flex-col gap-5 p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg"
            >

              {/* CARD TITLE */}
              <h3 className="font-secondary text-xl sm:text-2xl font-semibold leading-snug text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <div className="flex flex-col gap-4 sm:gap-5">

                {/* PROBLEM */}
                <div className="bg-rose-100 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl w-full flex flex-col gap-3 p-4">

                  <div className="flex gap-2 items-center">

                    <CircleX
                      size={20}
                      className="text-red-500 shrink-0"
                    />

                    <h4 className="font-secondary text-base sm:text-lg font-semibold text-red-500">
                      Problem
                    </h4>

                  </div>

                  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                    {feature.problem}
                  </p>

                </div>

                {/* SOLUTION */}
                <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl w-full flex flex-col gap-3 p-4">

                  <div className="flex gap-2 items-center">

                    <CircleCheck
                      size={20}
                      className="text-blue-500 shrink-0"
                    />

                    <h4 className="font-secondary text-base sm:text-lg font-semibold text-blue-500">
                      Solution
                    </h4>

                  </div>

                  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                    {feature.solution}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Wemake;
