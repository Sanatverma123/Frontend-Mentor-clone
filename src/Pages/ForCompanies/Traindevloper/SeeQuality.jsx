
import { useRef } from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const developers = [
  {
    name: "Henry W.",
    country: "United Kingdom",
    experience: "0",
    salary: "$30,000",
    projects: "32",
    image: "/images/talent-profile-1.webp",
    skills: [
      "HTML", "CSS", "JavaScript", "React", "Next.js",
      "MongoDB", "Sass", "Tailwind CSS", "Redux Toolkit",
      "Framer Motion", "Vite",
    ],
    project:
      "A full-stack markdown editor web app built Next.js, Tailwind CSS, and MongoDB.",
  },
  {
    name: "Ngozi U.",
    country: "Nigeria",
    experience: "0",
    salary: "$30,000",
    projects: "51",
    image: "/images/talent-profile-2.webp",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "React",
      "Next.js", "Node.js", "Express.js", "MongoDB",
      "Tailwind CSS", "Styled-components", "Redux Toolkit",
      "Framer Motion",
    ],
    project:
      "A full-stack, multi-page product feedback web app built using React, TypeScript, Node.js, and MongoDB.",
  },
  {
    name: "Jackson R.",
    country: "United States",
    experience: "3+",
    salary: "$50,000",
    projects: "33",
    image: "/images/talent-profile-3.webp",
    skills: [
      "HTML", "CSS", "JavaScript", "React",
      "Sass", "Accessibility",
    ],
    project:
      "A multi-page coffee subscription site built with React and Sass, focusing on accessibility.",
  },
  {
    name: "Oksana P.",
    country: "Ukraine",
    experience: "0",
    salary: "$20,000",
    projects: "16",
    image: "/images/talent-profile-4.webp",
    skills: [
      "HTML", "CSS", "JavaScript", "React", "Next.js",
      "TypeScript", "Sass", "Tailwind CSS",
      "Framer Motion", "GSAP", "Webpack",
    ],
    project:
      "A multi-page website built using Next.js, TypeScript, and Tailwind.",
  },
];

function DeveloperCard({ developer }) {
  return (
    <li className="border border-neutral-200 isolate relative rounded-2xl w-full bg-neutral-50 overflow-hidden snap-start">
      {/* Top gradient */}
      <div className="bg-[linear-gradient(to_right,hsla(0,0%,0%,0),hsl(206,33%,92%))] h-[5rem]" />

      <div className="flex flex-col gap-4 pb-5 px-5">
        {/* Profile */}
        <div className="flex flex-col gap-2">
          <div className="bg-white flex-shrink-0 rounded-full relative shadow-inner w-[5rem] -mt-[2.5rem]">
            <img
              src={developer.image}
              alt={developer.name}
              className="aspect-square h-full object-cover rounded-full w-full"
            />
          </div>

          <span className="font-secondary text-xl">
            {developer.name}
          </span>
        </div>

        {/* Information */}
        <ul className="flex flex-col gap-4 list-none">
          <li className="flex gap-3">
            <MapPin className="pt-1 text-neutral-500" size={20} />
            <span>{developer.country}</span>
          </li>

          <li className="flex gap-3">
            <Briefcase className="pt-1 text-neutral-500" size={20} />
            <span>{developer.experience} years experience</span>
          </li>

          <li className="flex gap-3">
            <DollarSign className="pt-1 text-neutral-500" size={20} />
            <span>~{developer.salary}/year</span>
          </li>

          <li className="flex gap-3">
            <BadgeCheck className="pt-1 text-neutral-500" size={20} />
            <span>{developer.projects} projects completed</span>
          </li>
        </ul>

        {/* Skills */}
        <div className="flex flex-col gap-2">
          <span className="text-neutral-500 uppercase">Skills</span>

          <div className="flex flex-wrap gap-2">
            {developer.skills.map((skill) => (
              <span
                key={skill}
                className="font-secondary px-2 py-1 rounded-full text-center text-sm tracking-wider w-max leading-none bg-white border border-neutral-200 font-normal normal-case text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        <div className="flex flex-col gap-2">
          <span className="text-neutral-500 uppercase">
            Featured project
          </span>

          <p>{developer.project}</p>
        </div>
      </div>
    </li>
  );
}

function TrainDeveloper() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector("li");

    if (!card) return;

    const scrollAmount = card.offsetWidth + 20;

    sliderRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white px-5 py-8 tablet:py-9">
      <div className="container-xl flex flex-col gap-6 tablet:gap-8">

        {/* Heading */}
        <div className="flex flex-col gap-5 tablet:items-center tablet:text-center">
          <h2 className="font-secondary text-3xl tablet:text-5xl">
            See the quality for yourself
          </h2>

          <p className="text-lg text-neutral-500">
            Get a glimpse of the caliber of talent we have in our community.
          </p>
        </div>

        {/* Slider */}
        <div className="flex flex-col gap-6">

          <ul
            ref={sliderRef}
            className="auto-cols-[80%] gap-5 grid grid-flow-col overflow-x-auto overscroll-x-contain [scrollbar-width:none] snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden tablet:auto-cols-[calc(50%-theme(spacing[5]))] desktop:auto-cols-[calc(33%-calc(theme(spacing[5])/1.5))]"
          >
            {developers.map((developer) => (
              <DeveloperCard
                key={developer.name}
                developer={developer}
              />
            ))}
          </ul>

          {/* Bottom buttons and note */}
          <div className="flex flex-col gap-5 items-center justify-between mobile:flex-row-reverse mobile:text-start">

            {/* Slider buttons */}
            <div className="flex gap-5">
              <button
                aria-label="Previous"
                onClick={() => scrollSlider(-1)}
                className="text-neutral-700 hover:text-neutral-400 transition-colors"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                aria-label="Next"
                onClick={() => scrollSlider(1)}
                className="text-neutral-700 hover:text-neutral-400 transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Note */}
            <p className="italic text-neutral-500 mobile:max-w-[40ch]">
              *These profiles represent the real talent you'll find
              within the Frontend Mentor community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainDeveloper;
