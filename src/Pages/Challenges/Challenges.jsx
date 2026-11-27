import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Check, X, Star, Box } from "lucide-react";
import Button from "../../component/Button";

const challenges = [
  {
    title: "Color palette generator",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/rkzygyvnbxkyz6apj80n.jpg",
    level: "Intermediate",
    type: "Premium",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice color math and JavaScript state with this palette generator, featuring five palette types, locked colors, one-click copying, and a live page preview.",
  },
  {
    title: "Gamer sign-up form",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ov5novkl7wqd2u3syizm.jpg",
    level: "Junior",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice form validation and accessibility with this neon gamer sign-up form, featuring a password strength meter, show/hide passwords, and loading and success states.",
  },
  {
    title: "Poll creator app",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/pmyowha2reli5s8bovtu.jpg",
    level: "Intermediate",
    type: "Premium",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Build and deploy a group polling app where voters need no account, can suggest their own options, and results end in a reveal worth sharing.",
  },
  {
    title: "Grid landing page",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ta4fm6tc34p4qlj3ktrk.jpg",
    level: "Newbie",
    type: "Free",
    tags: ["HTML", "CSS"],
    description:
      "Build a landing page hero with a 2x2 stats grid, a split headline layout, and a toggleable menu. A great first project for practicing CSS Grid.",
  },
  {
    title: "Restaurant ranking app",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/xsotumfsy4bb1rnvbgxx.jpg",
    level: "Intermediate",
    type: "Premium",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Build a personal restaurant map with honest, comparison-based ranking. Log where you've eaten and rank it head-to-head.",
  },
  {
    title: "Expense splitter app",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/jzsmbybn0sjhbb13atvj.jpg",
    level: "Advanced",
    type: "Premium",
    tags: ["HTML", "CSS", "JS", "API"],
    description:
      "Build and deploy a group expense splitter with flexible splits, multi-currency support, and clear settlement tracking.",
  },
  {
    title: "Hotel booking confirmation page",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/jc5k0xqylitcm6oomnbn.jpg",
    level: "Newbie",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Practice building a clean and responsive hotel booking confirmation page.",
  },
  {
    title: "REST Countries API",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/yhq5ihanseyinzwblaw1.jpg",
    level: "Advanced",
    type: "Free",
    tags: ["HTML", "CSS", "JS", "API"],
    description:
      "Build a countries app with search, filtering, detail pages, and a light and dark theme.",
  },
  {
    title: "Fylo dark theme landing page",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/mhwyzwfgaii3cw5s6jco.jpg",
    level: "Junior",
    type: "Free",
    tags: ["HTML", "CSS", "JS"],
    description:
      "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and Grid skills.",
  },
];

function Challenges() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest to oldest");
  const [showFilter, setShowFilter] = useState(false);
  const [level, setLevel] = useState("All");

  const filteredChallenges = challenges
    .filter((challenge) =>
      challenge.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((challenge) => (level === "All" ? true : challenge.level === level))
    .sort((a, b) => {
      if (sort === "A to Z") return a.title.localeCompare(b.title);
      if (sort === "Z to A") return b.title.localeCompare(a.title);
      return 0;
    });

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
    <main className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 min-h-screen transition-colors duration-300">
      {/* BREADCRUMB */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold dark:text-slate-100 uppercase tracking-wider">
            Challenges
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8 space-y-6">
        {/* PRO BANNER */}
        <div className="bg-white border border-blue-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Unlock full access</h2>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-700">
              {[
                "AI code review on every solution",
                "Re-run reviews as often as you like",
                "Premium projects and Figma design files",
                "And more!",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={17} className="text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <Button to="/challenges" className="w-full sm:w-auto">
              UPGRADE NOW
            </Button>
            <p className="text-sm text-neutral-500">
              Work in a team?{" "}
              <a
                href="https://teams.frontendmentor.io"
                className="text-blue-500 underline"
              >
                Upgrade your team to Pro
              </a>
            </p>
          </div>
        </div>
        PRODUCT ANNOUNCEMENT
        <div className="bg-teal-50  border border-teal-200 rounded-lg px-4 py-4 flex items-center gap-3">
          <Box className="text-teal-700 shrink-0" size={20} />
          <p className="text-sm text-neutral-600">
            <span className="font-semibold text-neutral-800">
              New: Product challenges.
            </span>{" "}
            Build from a spec and brand kit instead of a design file, and make
            the UX decisions yourself.
            <a href="#" className="text-teal-700 underline ml-1">
              Learn more
            </a>
          </p>
        </div>
        {/* SEARCH AND FILTER*/}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="relative w-full md:max-w-sm">
            <input
              type="text"
              placeholder="Search challenges..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-neutral-300 bg-white rounded-lg px-4 py-3 pr-10 outline-none focus:border-blue-500"
            />
            <Search
              size={19}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-white border border-sky-200 rounded-lg px-5 py-3 flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              <Filter size={17} />
              Filter
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className=" bg-white border border-blue-200 text-black rounded-lg px-4 py-3 outline-none"
            >
              <option>Newest to oldest</option>
              <option>A to Z</option>
              <option>Z to A</option>
            </select>
          </div>
        </div>
        {/* FILTER OPTIONS */}
        {showFilter && (
          <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 flex flex-wrap items-center gap-3">
            <span className="font-semibold text-sm">Difficulty:</span>

            {["All", "Newbie", "Junior", "Intermediate", "Advanced"].map(
              (item) => (
                <Button
                  key={item}
                  onClick={() => setLevel(item)}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    level === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </Button>
              ),
            )}
          </div>
        )}
        {/* RESULT COUNT */}
        <div className="flex flex-wrap justify-between gap-3 text-sm">
          <p className="text-black">
            Showing {filteredChallenges.length} of 9 challenges
          </p>

          <p className="text-neutral-500">
            Not sure where to start?{" "}
            <Link
              to="/learning-paths"
              className="text-blue-500 underline hover:no-underline"
            >
              Try our learning paths
            </Link>
          </p>
        </div>
        {/* CHALLENGE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-white  border border-blue-200 rounded-2xl overflow-hidden relative flex flex-col"
            >
              {/* BADGE */}

              <div className="absolute top-3 right-3 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    challenge.type === "Free"
                      ? "bg-blue-100 text-blue-500"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {challenge.type}
                </span>
              </div>

              {/* IMAGE */}

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CARD CONTENT */}

              <div className="p-5 flex flex-col gap-4 flex-grow">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {challenge.title}
                </h2>

                <div className="flex flex-wrap justify-between items-center gap-3">
                  {/* TECHNOLOGY TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {challenge.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          tagColors[tag]
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* DIFFICULTY */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-sm bg-current ${
                        levelColors[challenge.level]
                      }`}
                    />
                    <span className="text-xs font-bold uppercase text-neutral-800">
                      {challenge.level}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-500 text-sm leading-6">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {filteredChallenges.length === 0 && (
          <p className="text-center text-neutral-500 py-10">
            No challenges found.
          </p>
        )}
        {/* DISCORD SECTION */}
        <div className=" bg-white border border-blue-400 rounded-2xl px-6 py-10 text-center text-black flex flex-col items-center gap-5">
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

export default Challenges;
