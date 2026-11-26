import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";
import Button from "../../component/Button";
import ChallengeCard from "../../component/ChallengCard";

import {
  ArrowUpRight,
  Code2,
  Users,
  LayoutGrid,
 
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
  Newbie: "bg-cyan-500",
  Junior: "bg-emerald-500",
  Intermediate: "bg-amber-500",
  Advanced: "bg-orange-500",
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
      className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16 "
    >
      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          Our Challenges
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 leading-tight">
          Our latest challenges
        </h2>

        <p className="mt-3 text-sm sm:text-base md:text-base text-slate-500 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Build real skills with hands-on projects and improve your frontend
          development journey.
        </p>

        <div className="w-16 h-1 bg-blue-500 dark:bg-blue-800  rounded-full mx-auto mt-5"></div>
      </div>

      {/* CHALLENGE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {cards.map((card) => (
          <ChallengeCard
            key={card.title}
            card={card}
            tagColors={tagColors}
            levelColors={levelColors}
          />
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
