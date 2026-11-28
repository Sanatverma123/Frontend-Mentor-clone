
import { Code, BadgeCheck, Rocket } from "lucide-react";

function WhyHireSection() {
  const features = [
    {
      icon: Code,
      title: "Real-world skills",
      description:
        "Our developers have completed many professionally designed, industry-standard projects, not just coding exercises. Review their code and finished work to quickly gauge their capabilities in HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      icon: BadgeCheck,
      title: "Proven project experience",
      description:
        "Skip guesswork. Quickly evaluate candidates by exploring live projects they’ve built. See how they handle responsive design, accessibility, and performance before starting a conversation.",
    },
    {
      icon: Rocket,
      title: "Self-motivated talent",
      description:
        "Our community attracts developers who voluntarily engage in continuous learning and skill enhancement. They are proactive, passionate, and ready to contribute from day one.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">

      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">

        {/* SECTION HEADING */}
        <div className="flex flex-col items-center text-center gap-4">

          <h2 className="font-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white max-w-[30ch]">
            Why hire through Frontend Mentor?
          </h2>

          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

        </div>

        {/* FEATURE CARDS */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-2xl w-full h-full flex flex-col items-start gap-4 p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                {/* ICON */}
                <span className="w-[4.5rem] h-[4.5rem] shrink-0 bg-blue-100 dark:bg-blue-950 flex items-center justify-center rounded-xl">

                  <Icon
                    aria-hidden="true"
                    className="text-blue-500 dark:text-blue-400 w-8 h-8"
                  />

                </span>

                {/* TITLE */}
                <h3 className="font-secondary text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

              </li>
            );
          })}

        </ul>

      </div>
    </section>
  );
}

export default WhyHireSection;
