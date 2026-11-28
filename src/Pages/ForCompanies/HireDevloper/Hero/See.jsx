
import { useRef } from "react";
import {
  MapPin,
  BriefcaseBusiness,
  CircleDollarSign,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const developers = [
  {
    name: "Henry W.",
    image: "https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Ftalent-profile-1.webp&w=256&q=75",
    country: "United Kingdom",
    experience: "0 years experience",
    salary: "~$30,000/year",
    projects: "32 projects completed",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "MongoDB", "Sass", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Vite"],
    project: "A full-stack markdown editor web app built Next.js, Tailwind CSS, and MongoDB.",
  },
  {
    name: "Ngozi U.",
    image: "https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Ftalent-profile-2.webp&w=256&q=75",
    country: "Nigeria",
    experience: "0 years experience",
    salary: "~$30,000/year",
    projects: "51 projects completed",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Styled-components", "Redux Toolkit", "Framer Motion"],
    project: "A full-stack, multi-page product feedback web app built using React, TypeScript, Node.js, and MongoDB.",
  },
  {
    name: "Jackson R.",
    image: "https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Ftalent-profile-3.webp&w=256&q=75",
    country: "United States",
    experience: "3+ years experience",
    salary: "~$50,000/year",
    projects: "33 projects completed",
    skills: ["HTML", "CSS", "JavaScript", "React", "Sass", "Accessibility"],
    project: "A multi-page coffee subscription site built with React and Sass, focusing on accessibility.",
  },
  {
    name: "Oksana P.",
    image: "https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Ftalent-profile-4.webp&w=256&q=75",
    country: "Ukraine",
    experience: "0 years experience",
    salary: "~$20,000/year",
    projects: "16 projects completed",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Sass", "Tailwind CSS", "Framer Motion", "GSAP", "Webpack"],
    project: "A multi-page website built using Next.js, TypeScript, and Tailwind.",
  },
];

function See() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".developer-card");
      const scrollAmount = card ? card.offsetWidth + 20 : 350;

      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 transition-colors duration-300">

      <div className="max-w-7xl mx-auto flex flex-col gap-7 sm:gap-8">

        {/* HEADING */}
        <div className="flex flex-col items-center text-center gap-4">

          <h2 className="font-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900 dark:text-white">
            See the quality for yourself
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl">
            Get a glimpse of the caliber of talent we have in our community.
          </p>

          <div className="w-16 h-1 bg-blue-500 rounded-full mt-2"></div>

        </div>

        {/* DEVELOPER CARDS */}
        <div className="flex flex-col gap-6 w-full">

          <div
            ref={sliderRef}
            className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[65%] md:auto-cols-[calc(50%-10px)] lg:auto-cols-[calc(33.333%-14px)] gap-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >

            {developers.map((developer) => (
              <div
                key={developer.name}
                className="developer-card border border-neutral-200 dark:border-gray-700 rounded-2xl w-full bg-neutral-50 dark:bg-gray-800 overflow-hidden snap-start transition-colors duration-300"
              >

                {/* CARD TOP */}
                <div className="bg-gradient-to-r from-blue-50 to-[#dce8ef] dark:from-gray-800 dark:to-gray-700 h-20 sm:h-24"></div>

                <div className="flex flex-col gap-4 pb-6 px-4 sm:px-5">

                  {/* PROFILE */}
                  <div className="flex flex-col gap-2">

                    <div className="bg-white dark:bg-gray-700 rounded-full relative shadow-inner w-20 h-20 sm:w-24 sm:h-24 -mt-10 sm:-mt-12">
                      <img
                        src={developer.image}
                        alt={developer.name}
                        loading="lazy"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>

                    <h3 className="font-secondary text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      {developer.name}
                    </h3>

                  </div>

                  {/* DETAILS */}
                  <ul className="flex flex-col gap-3">

                    <li className="flex gap-3 items-start">
                      <MapPin className="mt-1 text-neutral-500 shrink-0" size={19} />
                      <span className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                        {developer.country}
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <BriefcaseBusiness className="mt-1 text-neutral-500 shrink-0" size={19} />
                      <span className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                        {developer.experience}
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <CircleDollarSign className="mt-1 text-neutral-500 shrink-0" size={19} />
                      <span className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                        {developer.salary}
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <BadgeCheck className="mt-1 text-neutral-500 shrink-0" size={19} />
                      <span className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                        {developer.projects}
                      </span>
                    </li>

                  </ul>

                  {/* SKILLS */}
                  <div className="flex flex-col gap-3">

                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                      Skills
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {developer.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-secondary px-2 py-1.5 rounded-full text-xs sm:text-sm tracking-wide leading-none bg-white dark:bg-gray-700 border border-neutral-200 dark:border-gray-600 text-black dark:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* FEATURED PROJECT */}
                  <div className="flex flex-col gap-2">

                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                      Featured project
                    </span>

                    <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                      {developer.project}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* SLIDER CONTROLS */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5">

            <p className="text-sm sm:text-base italic text-center sm:text-left text-neutral-500 dark:text-neutral-400 max-w-[45ch]">
              *These profiles represent the real talent you’ll find within the
              Frontend Mentor community.
            </p>

            <div className="flex items-center justify-center gap-4">

              <button
                type="button"
                aria-label="Previous developer"
                onClick={() => scrollSlider("previous")}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-300 dark:border-gray-600 text-neutral-800 dark:text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                aria-label="Next developer"
                onClick={() => scrollSlider("next")}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-300 dark:border-gray-600 text-neutral-800 dark:text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
              >
                <ChevronRight size={24} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default See;
