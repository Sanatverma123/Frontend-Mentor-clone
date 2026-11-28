import Learn from "../../assets/Learn.png";
import Learn2 from "../../assets/learn2.png";
import Learn3 from "../../assets/learn3.png";
import Learn4 from "../../assets/learn4.webp";
import Learn5 from "../../assets/learn5.webp";
import Learn6 from "../../assets/learn6.webp";
import Learn7 from "../../assets/learn7.webp";
import Learn8 from "../../assets/learn8.webp";
import Learn9 from "../../assets/learn9.webp";

const learningPaths = [
  {
    title: "Getting started on Frontend Mentor",
    level: "Newbie",
    color: "text-cyan-500",
    image: Learn2,

    description:
      "These projects will help you find your feet on the Frontend Mentor platform and give you experience working with designs and building small projects. They're all HTML & CSS-only challenges, so you'll practice the basics.",
    link: "/learning-paths/getting-started-on-frontend-mentor",
  },
  {
    title: "Building responsive layouts",
    level: "Newbie",
    color: "text-cyan-500",
    image: Learn3,

    description:
      "Every page you build has to work on phones, tablets, and wide screens. These challenges give you practice building layouts that fit each size, and our feedback after you submit points to what to fix.",
    link: "/learning-paths/building-responsive-layouts",
  },
  {
    title: "JavaScript fundamentals",
    level: "Junior",
    color: "text-emerald-400",
    image: Learn4,

    description:
      "JavaScript is how you make a page respond when someone clicks, types, or submits a form. You'll practice those interactions in six projects, including a newsletter sign-up form, a tip calculator, and a quiz app.",
    link: "/learning-paths/javascript-fundamentals",
  },
  {
    title: "Introduction to web accessibility",
    level: "Junior",
    color: "text-emerald-400",
    image: Learn5,

    description:
      "Some people browse with a keyboard, a screen reader, or a zoomed-in screen. You'll build pages that work for them in seven projects, including an FAQ accordion, a contact form, and a tic-tac-toe game.",
    link: "/learning-paths/introduction-to-web-accessibility",
  },
  {
    title: "Advanced CSS techniques",
    level: "Intermediate",
    color: "text-amber-400",
    image: Learn6,

    description:
      "As a project grows, its CSS gets harder to change without breaking something. You'll practice Sass, animations, frameworks, and performance in seven projects, including a space tourism site and a Pomodoro app.",
    link: "/learning-paths/advanced-css-techniques",
  },
  {
    title: "JavaScript frameworks and libraries",
    level: "Advanced",
    color: "text-orange-500",
    image: Learn7,

    description:
      "Frameworks like React and Vue split a UI into components that update when your data changes. You'll practice components, state, forms, and routing in six projects, including a shopping cart and a memory game.",
    link: "/learning-paths/javascript-frameworks-and-libraries",
  },
  {
    title: "Introduction to front-end testing",
    level: "Advanced",
    color: "text-orange-500",
    image: Learn8,
    description:
      "Tests tell you whether your code still works after a change, even one an AI agent made. You'll write unit, integration, and end-to-end tests in four projects, including a tip calculator and a multi-step form.",
    link: "/learning-paths/introduction-to-front-end-testing",
  },
  {
    title: "Getting job ready",
    level: "Advanced",
    color: "text-orange-500",
    image: Learn9,

    description:
      "Hiring managers will ask why you built things the way you did. You'll set up your GitHub and portfolio, write your application, find roles to apply for, and practice explaining your code in an interview.",
    link: "/learning-paths/getting-job-ready",
  },
];

function LearningPaths() {
  return (
    
    <main className="bg-gradient-to-br from-blue-100 via-white to-sky-50 min-h-screen transition-colors duration-300">
      {/* BREADCRUMB */}
      <div className="bg-blue-50 dark:bg-slate-900 border-b border-t border-blue-200 px-4 sm:px-5">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="border-l border-r border-blue-100 dark:border-blue-800 flex items-center font-bold tracking-wider px-5 py-3 uppercase text-xs dark:text-slate-100 sm:text-sm">
            Learning paths
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-blue-50 dark:bg-slate-900 overflow-hidden pt-7 sm:pt-10 md:pt-12 px-4 sm:px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center md:flex-row">
          {/* HERO TEXT */}
          <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-semibold leading-tight">
              Learning paths
            </h1>

            <p className="text-neutral-500 dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Read a short lesson, then practice it on a real project straight
              away. Start with the basics, or jump to accessibility, frameworks,
              or testing.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Learn}
              alt="Learning paths illustration"
              className="w-full max-w-[30rem] md:max-w-none object-contain"
            />
          </div>
        </div>
      </section>

      {/* LEARNING PATH CARDS */}
      <section className=" bg-blue-50 dark:bg-gray-900 pb-8 pt-8 px-4 sm:px-5">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-col gap-5">
            {learningPaths.map((path, index) => (
              <li
                key={path.title}
                className="bg-white dark:bg-gray-700 border border-blue-100 rounded-2xl w-full flex flex-col-reverse gap-6 p-5 sm:p-6 md:flex-row md:items-stretch"
              >
                {/* CARD TEXT */}
                <div className="flex flex-col gap-4 items-start md:justify-center md:flex-1">
                  {/* LEVEL */}
                  <div
                    className={`inline-flex items-center gap-2 ${path.color}`}
                  >
                    <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>

                    <span className="font-bold leading-none text-neutral-800 dark:text-white text-xs sm:text-sm uppercase">
                      {path.level}
                    </span>
                  </div>

                  {/* TITLE */}
                  <a href={path.link} className="hover:underline">
                    <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-slate-100 dark:text-white leading-snug">
                      {path.title}
                    </h2>
                  </a>

                  {/* DESCRIPTION */}
                  <p className="text-neutral-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* CARD IMAGE */}
                <a
                  href={path.link}
                  aria-hidden="true"
                  tabIndex="-1"
                  className="block relative aspect-[3/2] w-full md:aspect-auto md:min-h-[15rem] md:min-w-[40%] md:w-[40%]"
                >
                  <img
                    src={path.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
    
  );
}

export default LearningPaths;
