
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Button from "../component/Button";

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
      tag: "NEW",
      tagIcon: <Sparkles size={12} />,
      tagColor: "bg-purple-500 text-white",
    },
    {
      image: Card2,
      title: "Pool Creator App",
      description:
        "Build and deploy a group polling app where voters need no account, can suggest their own options, and results end in a reveal worth sharing.",
      icon: <Users size={20} />,
      tag: "Free",
      tagIcon: <Package size={12} />,
      tagColor: "bg-sky-500 text-white",
    },
    {
      image: Card3,
      title: "Grid Landing Page",
      description:
        "Build a landing page hero with a 2x2 stats grid, a split headline layout, and a toggleable menu. Practice CSS Grid across breakpoints.",
      icon: <LayoutGrid size={20} />,
      tag: "PREMIUM",
      tagIcon: <Crown size={12} />,
      tagColor: "bg-green-600 text-white",
    },
  ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="group min-w-0 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-3 sm:p-4 md:p-3 lg:p-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-48 sm:h-44 md:h-48 lg:h-48 xl:h-52 overflow-hidden rounded-xl bg-blue-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <span
                className={`absolute top-3 right-3 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${card.tagColor}`}
              >
                {card.tagIcon}
                {card.tag}
              </span>
            </div>

            {/* CARD CONTENT */}
            <div className="px-1 sm:px-2 pt-4 sm:pt-5 pb-3">

              {/* ICON */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 leading-relaxed text-sm sm:text-sm md:text-base">
                {card.description}
              </p>

              {/* BUTTON */}
              <Button className="mt-5 w-full sm:w-auto">
                Explore Challenge
                <ArrowUpRight size={16} />
              </Button>

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
