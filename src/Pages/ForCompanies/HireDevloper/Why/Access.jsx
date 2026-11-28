import { CircleCheck } from "lucide-react";

function Access() {
  return (
    <section className="w-full px-5 py-10 flex flex-col gap-8">

      {/* Heading Center */}
      <h2 className="font-secondary text-5xl md:text-5xl leading-tight text-center text-gray-900 dark:text-white mb-8 mt-32">
        Access a truly unique talent pool
      </h2>
           <div className="w-16 h-1 bg-blue-500  rounded-full"></div>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">

        {/* LEFT - Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          <h3 className="font-secondary text-xl md:text-3xl text-gray-900 dark:text-white">
            A community full of highly skilled, early-career developers
          </h3>

          <p className="text-2xl text-neutral-500 dark:text-gray-400">
            We host one of the largest communities dedicated to project-based
            learning. Our developers aren’t just hobbyists; they’ve tested
            their skills by tackling real-world projects.
          </p>

          {/* Points */}
          <ul className="flex flex-col gap-4 p-0 list-none">

            <li className="flex gap-3 items-start">
              <CircleCheck
                size={22}
                className="mt-1 shrink-0 text-blue-500"
              />

              <p className="text-2xl text-neutral-500 dark:text-gray-400">
                <span className="font-semibold text-blue-500">
                  Real-world practice:
                </span>{" "}
                Each developer has built projects that mimic the challenges
                they’ll face on your team.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <CircleCheck
                size={22}
                className="mt-1 shrink-0 text-blue-500"
              />

              <p className="text-2xl text-neutral-500 dark:text-gray-400">
                <span className="font-semibold text-blue-500">
                  Self-driven learners:
                </span>{" "}
                They choose their own projects and schedules, showing
                initiative and independence from day one.
              </p>
            </li>

          </ul>

          {/* Why it matters */}
          <div className="border border-neutral-200 dark:border-gray-700 rounded-2xl w-full bg-blue-100 dark:bg-slate-800 flex flex-col gap-3 p-4">

            <h3 className="font-secondary text-2xl text-blue-500">
              Why it matters
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              You’ll find early-career developers who already know how to
              turn briefs and designs into fully functional digital products.
            </p>

          </div>
        </div>

        {/* RIGHT - Image */}
        <div className="w-full order-1 lg:order-2">
          <img
            src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fwhy-us-1.webp&w=1920&q=75"
            alt="Developers working on real-world projects"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Access;