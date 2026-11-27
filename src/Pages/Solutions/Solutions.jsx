import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../component/Button";
import SolutionCard from "../Solutions/SolutionCard";

const solutions = [
  {
    id: 1,
    title: "responsive-landing-using-flex-box-pseudo-element",
    feedbackRequested: true,

    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/uoubtgw10uyvvcssakdz.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Pavlo",
    profileHref: "/profile/teboho",
    level: 1,
    points: 40,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "I would appreciate feedback on my CSS structure—specifically how I handled the responsive transition between the......",
  },
  {
    id: 2,
    title: "article-preview-component-with-share-popover",
    feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/fx3umtn3qdvwjg6vhwp9.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Hossam Abdulraouf",
    profileHref: "/profile/teboho",
    level: 1,
    points: 60,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,
    description: "I would love feedback on:",
  },
  {
    id: 3,
    title: "testimonals-grid",
    feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/ht5fodpye9a7ktlwobjq.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "ASh",
    profileHref: "/profile/teboho",
    level: 0,
    points: 57,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 0,
    description:
      "Making sure I didn't make any glaring mistakes, or just what I could do differently.",
  },
  {
    title: "responsive-product-preview-card-using-css-flexbox-and-css-grid",
    feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/yozhh9xzizlyhidy6h19.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Teboho Mosia",
    profileHref: "/profile/teboho",
    level: 1,
    points: 50,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,
    description: "many",
  },
  {
    title: "Restaurant ranking app",
    feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/f2isuwy18hozrmkzbkcm.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "HasSan",
    profileHref: "/profile/teboho",
    level: 1,
    points: 30,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description: "Questions for feedback:",
  },
  {
    title: "base-apparel-coming-soon",
    feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/zjrkg0fsf6k781okaqxs.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "ahmed attlam Luma",
    profileHref: "/profile/teboho",
    level: 1,
    points: 250,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "Of course i need a feedback on my Tailwind using because it's the first time..",
  },
  {
    title: "Hotel booking confirmation page",
    feedbackRequested: false,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/n8pugt33iomsnewxeyld.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Luisa Escobar",
    profileHref: "/profile/teboho",
    level: 1,
    points: 10,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "I would like feedback on improving my JavaScript structure and making the code cleaner and more efficient.....",
  },
  {
    title: "REST Countries API",
    feedbackRequested: false,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/gnbklcap9xovocj7kj6f.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Teboho Mosia",
    profileHref: "/profile/teboho",
    level: 1,
    points: 50,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "Build a countries app with search, filtering, detail pages, and a light and dark theme.",
  },
  {
    title: "Fylo dark theme landing page",
    feedbackRequested: false,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/gnani0d8xypzimlq5gpn.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Abdi Abduljebar",
    profileHref: "/profile/teboho",
    level: 1,
    points: 181,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and Grid skills.",
  },
  {
    title: "Hotel booking confirmation page",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/n8pugt33iomsnewxeyld.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Stephen Appah",
    profileHref: "/profile/teboho",
    level: 1,
    points: 80,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "Practice building a clean and responsive hotel booking confirmation page.",
  },
  {
    title: "REST Countries API",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/z6fscbxarkugtqohzn7s.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "Dmytro Farbun",
    profileHref: "/profile/teboho",
    level: 1,
    points: 25,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

    description:
      "Build a countries app with search, filtering, detail pages, and a light and dark theme.",
  },
  {
    title: "Fylo dark theme landing page",
    feedbackRequested: true,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/orklpxznb9ziinfh3ha8.jpg",

    href: "/solutions/responsive-landing",
    avatar: "https://avatars.githubusercontent.com/u/254246394?v=4",
    author: "SANAT VERMA",
    profileHref: "/profile/teboho",
    level: 1,
    points: 21,
    submittedAt: "about 10 hours ago",
    comments: 0,
    likes: 3,

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
   <main className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 min-h-screen transition-colors duration-300">
      {/* BREADCRUMB */}
      <div className="sticky top-0 z-[100] w-full bg-gradient-to-br from-blue-100 via-white to-sky-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold dark:text-slate-100 uppercase tracking-wider">
            SOLUTIONS
          </span>

          <div className="flex items-center gap-6 text-lg font-medium text-gray-600 dark:text-gray-200">
            <div className="flex items-center gap-6 text-lg font-medium text-gray-600 dark:text-gray-200">
              <Link
                to="/solutions"
                className="text-blue-600 hover:underline underline-offset-4">
                Solutions
              </Link>

              <Link
                to="/tags"
                className="hover:text-blue-600 hover:underline underline-offset-4">             
                Tags
              </Link>

              <Link
                to="/wall"
                className="hover:text-blue-600 hover:underline underline-offset-4" >
                Wall of Fame
              </Link>
            </div>
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
              <SolutionCard
                key={solution.id || `${solution.title}-${index}`}
                solution={solution}
              />
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
