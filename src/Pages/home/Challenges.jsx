import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";
import Button from "../../component/Button";

import {
  ArrowUpRight,
  Code2,
  Users,
  LayoutGrid,
  Sparkles,
  Package,
  Crown,
} from "lucide-react";

function Challenges() {
  const cards = [
    {
      image: Card1,
      title: "Gamer-Signup Form",
      description:
        "Practice form validation and accessibility with this neon gamer sign-up form, featuring a password strength meter, show/hide passwords, and loading and success states.",
      icon: <Code2 size={20} />,
      type: "Free",
      level: "Junior",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      image: Card2,
      title: "Pool Creator App",
      description:
        "Build and deploy a group polling app where voters need no account, can suggest their own options, and results end in a reveal worth sharing.",
      icon: <Users size={20} />,
      type: "Premium",
      level: "Intermediate",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      image: Card3,
      title: "Grid Landing Page",
      description:
        "Build a landing page hero with a 2x2 stats grid, a split headline layout, and a toggleable menu. Practice CSS Grid across breakpoints.",
      icon: <LayoutGrid size={20} />,
      type: "Free",
      level: "Newbie",
      tags: ["HTML", "CSS"],
    },
  ];

  const levelColors = {
    Newbie: "text-cyan-500",
    Junior: "text-emerald-500",
    Intermediate: "text-amber-500",
    Advanced: "text-orange-500",
  };

  const tagColors = {
    HTML: "bg-sky-100 text-sky-600",
    CSS: "bg-amber-100 text-amber-600",
    JS: "bg-red-100 text-red-600",
    API: "bg-green-100 text-green-600",
  };

  return (
    <section
      id="challenges"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          Our Challenges
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-slate-900 leading-tight">
          Our latest challenges
        </h2>

        <p className="mt-3 text-sm sm:text-base md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Build real skills with hands-on projects and improve your frontend
          development journey.
        </p>

        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
      </div>

      {/* CHALLENGE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-blue-50 via-white to-sky-100 border border-blue-200 rounded-2xl overflow-hidden relative flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* BADGE */}
            <div className="absolute top-3 right-3 z-10">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  card.type === "Free"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                {card.type}
              </span>
            </div>

            {/* IMAGE */}
            <div className="aspect-[4/3] overflow-hidden bg-blue-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CARD CONTENT */}
            <div className="p-4 sm:p-5 flex flex-col gap-4 flex-grow">
              {/* ICON */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>

              {/* TAGS AND LEVEL */}
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded text-xs font-bold ${tagColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-sm bg-current ${levelColors[card.level]}`}
                  />
                  <span className="text-xs font-bold uppercase text-slate-800">
                    {card.level}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-slate-600 text-sm leading-6">
                {card.description}
              </p>

              {/* BUTTON */}
              <div className="mt-auto pt-2">
                <Button className="w-full sm:w-auto">
                  Explore Challenge
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BROWSE BUTTON */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <Button className="mx-auto w-full sm:w-auto">
          Browse all challenges
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </section>
  );
}

export default Challenges;
