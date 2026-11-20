import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Check, X, Star, Box } from "lucide-react";
import Button from "../../component/Button";

const solutions = [
  {
    title: "Color palette generator",
     feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/uoubtgw10uyvvcssakdz.jpg",
    level: "Intermediate",
    type: "Premium",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice color math and JavaScript state with this palette generator, featuring five palette types, locked colors, one-click copying, and a live page preview.",
  },
  {
    title: "Gamer sign-up form",
     feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/fx3umtn3qdvwjg6vhwp9.jpg",
    level: "Junior",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice form validation and accessibility with this neon gamer sign-up form, featuring a password strength meter, show/hide passwords, and loading and success states.",
  },
  {
    title: "Poll creator app",
     feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/ht5fodpye9a7ktlwobjq.jpg",
    level: "Intermediate",
    type: "Premium",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Build and deploy a group polling app where voters need no account, can suggest their own options, and results end in a reveal worth sharing.",
  },
  {
    title: "Grid landing page",
     feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/yozhh9xzizlyhidy6h19.jpg",
    level: "Newbie",
    type: "Free",
    tags: ["HTML", "CSS"],
    description:
      "Build a landing page hero with a 2x2 stats grid, a split headline layout, and a toggleable menu. A great first project for practicing CSS Grid.",
  },
  {
    title: "Restaurant ranking app",
     feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/f2isuwy18hozrmkzbkcm.jpg",
    level: "Intermediate",
    type: "Premium",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Build a personal restaurant map with honest, comparison-based ranking. Log where you've eaten and rank it head-to-head.",
  },
  {
    title: "Expense splitter app",
     feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/zjrkg0fsf6k781okaqxs.jpg",
    level: "Advanced",
    type: "Premium",
    tags: ["HTML", "CSS", "JS", "API"],
    description:
      "Build and deploy a group expense splitter with flexible splits, multi-currency support, and clear settlement tracking.",
  },
  {
    title: "Hotel booking confirmation page",
    feedbackRequested: false,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/n8pugt33iomsnewxeyld.jpg",
    level: "Newbie",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice building a clean and responsive hotel booking confirmation page.",
  },
  {
    title: "REST Countries API",
    feedbackRequested: false,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/gnbklcap9xovocj7kj6f.jpg",
    level: "Advanced",
    type: "Free",
    tags: ["HTML", "CSS", "JS", "API"],
    description:
      "Build a countries app with search, filtering, detail pages, and a light and dark theme.",
  },
  {
    title: "Fylo dark theme landing page",
    feedbackRequested: false,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/gnani0d8xypzimlq5gpn.jpg",
    level: "Junior",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and Grid skills.",
  },
  {
    title: "Hotel booking confirmation page",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/n8pugt33iomsnewxeyld.jpg",
    level: "Newbie",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice building a clean and responsive hotel booking confirmation page.",
  },
  {
    title: "REST Countries API",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/z6fscbxarkugtqohzn7s.jpg",
    level: "Advanced",
    type: "Free",
    tags: ["HTML", "CSS", "JS", "API"],
    description:
      "Build a countries app with search, filtering, detail pages, and a light and dark theme.",
  },
  {
    title: "Fylo dark theme landing page",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/orklpxznb9ziinfh3ha8.jpg",
    level: "Junior",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and Grid skills.",
  },
];

function Solutions() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest to oldest");
  const [showFilter, setShowFilter] = useState(false);
  const [level, setLevel] = useState("All");
  const [activeTab, setActiveTab] = useState("Feedback requested");
  const [showAll, setShowAll] = useState(false);

  const filteredSolutions = solutions
    .filter((solution) =>
      solution.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((solution) => (level === "All" ? true : solution.level === level))
    .sort((a, b) => {
      if (sort === "A to Z") return a.title.localeCompare(b.title);
      if (sort === "Z to A") return b.title.localeCompare(a.title);
      return 0;
    });
  const displayedSolutions =
    activeTab === "All solutions"
      ? filteredSolutions
      : filteredSolutions.filter(
          (solution) => solution.feedbackRequested === true,
        );

  const levelColors = {
    Newbie: "text-cyan-500",
    Junior: "text-emerald-400",
    Intermediate: "text-amber-400",
    Advanced: "text-orange-500",
    Guru: "text-rose-600",
  };

  const tagColors = {
    HTML: "bg-sky-100 text-sky-600",
    CSS: "bg-amber-100 text-amber-600",
    JS: "bg-red-100 text-red-600",
    API: "bg-green-100 text-green-600",
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-sky-50 min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-gradient-to-br from-blue-100 via-white to-sky-100 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold uppercase tracking-wider">
            SOLUTIONS
          </span>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/solutions" className="text-blue-600 hover:text-blue-800">
              Solutions
            </a>
            <a href="/tags" className="hover:text-blue-600 transition">
              Tags
            </a>
            <a href="/wall-of-fame" className="hover:text-blue-600 transition">
              Wall of Fame
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8 space-y-6">
        {/* TABS */}
        <div className="flex items-center gap-8 border-b border-gray-200">
          {["Feedback requested", "All solutions"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`relative pb-3 text-lg font-semibold transition-colors ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* SOLUTION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(showAll ? displayedSolutions : displayedSolutions.slice(0, 6)).map(
            (solution, index) => (
              <div
                key={`${solution.title}-${index}`}
                className="bg-white border border-blue-200 rounded-2xl overflow-hidden relative flex flex-col"
              >
                {/* BADGE */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      solution.type === "Free"
                        ? "bg-blue-100 text-blue-500"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {solution.type}
                  </span>
                </div>

                {/* IMAGE */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 flex flex-col gap-4 flex-grow">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    {solution.title}
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-bold ${tagColors[tag]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-neutral-500 text-sm leading-6">
                    {solution.description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        {/* LOAD MORE */}
        {displayedSolutions.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-4 pb-2 text-black font-semibold text-lg hover:text-blue-800 transition"
            >
              {showAll ? "Show less" : "Load more"}

              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        )}

        {displayedSolutions.length === 0 && (
          <p className="text-center text-neutral-500 py-10">
            No solutions found.
          </p>
        )}

        {/* DISCORD SECTION */}
        <div className="bg-white border border-blue-400 rounded-2xl px-6 py-10 text-center text-black flex flex-col items-center gap-5">
          <h2 className="text-xl font-bold uppercase tracking-widest">
            Join our Discord community
          </h2>

          <p className="max-w-2xl text-lg">
            Join thousands of Frontend Mentor community members taking
            challenges, sharing resources, helping each other, and chatting
            about all things front-end!
          </p>

          <Button
            href=""
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Join our Discord
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Solutions;
