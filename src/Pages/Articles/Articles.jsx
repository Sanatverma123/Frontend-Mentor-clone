import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";
import { useState } from "react";

const articleCards = [
  {
    title: "New challenge: Build a gamer sign-up form",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/cvsdylfgaelargxdibbi.jpg",
    description:
      "We've launched a new free challenge: a gamer sign-up form with live validation and a password strength meter. Great practice for building accessible forms.",
      author: "The Frontend Mentor team",
    date: "November 2026",
  },
  {
    title: "New challenge: Build a restaurant ranking appNew challenge: Build an expense splitter app",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/t0vd4rutd3csa1dl2ucq.jpg",
    description: 
    "We've launched a new premium challenge: build and deploy a restaurant-ranking app with an interactive map and honest, head-to-head rankings. The design is yours.",
   author: "The Frontend Mentor team",
    date: "November 2026",
  },
  {
    title: "Should junior developers apply for remote jobs?",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/b26oaswiya6kpjxkjbdn.jpg",
    description: "Fully remote junior roles are scarce and fiercely contested. Here's what the numbers say, and how to make yourself remote-hireable as a junior developer.",
    author: "The Frontend Mentor team",
    date: "November 2026",
  },
  {
    title: "New challenge: Build a hotel booking confirmation page",
    category: "Learning",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/bg51mdpwznbjciyq3izf.png",
    description: "We've launched a new free challenge: a boutique hotel booking confirmation page. A junior-level project focused on responsive layout, with some nice details to take further.",
   author: "Matt Studdert ",
    date: "November 2026",
  },
  {
    title: "Addy Osmani on why you shouldn’t outsource the learning",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/rwfyaiofh4iwjeyxymk8.jpg",
    description: "Addy Osmani says developers risk silently trading future skill for present speed. Here’s what that means if you’re actively learning to code in 2026.",
    author: "The Frontend Mentor team",
    date: "October 2026",
  },
  {
    title: "Is coding still worth learning in 2026?",
    category: "Resource",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/cwtsa93pzlww1wehlcfz.jpg",
    description: "What AI changed about the job, what the junior market really looks like, and how to learn in a way that still gets you hired.",
    author: "Matt Studdert ",
    date: "October 2026",
  },
  {
    title: "The FM30 hackathon returns: Build a currency converter!",
    category: "Career",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/mxvombhsoesoplrntlz8.jpg",
    description: "The FM30 Hackathon returns! Build a currency converter app with live exchange rates, free for everyone for 30 days, with prizes for the top solutions.",
    author: "The Frontend Mentor team",
    date: "October 2026",
  },
  {
    title: "New challenge: Build a multi-page tech conference site",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/wzylx7hxkbnttari7hfg.jpg",
    description: "We've launched a new premium challenge: a multi-page tech conference site. You'll build a fully interactive site that includes filtering, bookmarking, data manipulation, and more.",
   author: "The Frontend Mentor team",
    date: "October 2026",
  },
  {
    title: "What Boris Cherny's ''coding is solved'' statement means for learners",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/efxfvl88lzi4zqr327fa.jpg",
    description: "Boris Cherny, the creator of Claude Code, says coding is solved. The longer version of his argument is more useful and more hopeful than the headline. Here's what it means for learners.",
   author: "The Frontend Mentor team",
    date: "October 2026",
  },
  {
    title: "A new AI code review for every solution you submit",
    category: "Resource",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/lorilyv5cn6nstcj9rer.jpg",
    description: "Our new AI code review on Frontend Mentor scores your work across five categories with line-level findings, so you know what's working and where to focus next.",
   author: "The Frontend Mentor team",
    date: "September 2026",
  },
  {
    title: "We've launched Product Challenges",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/zd6opzxedogw2fnv3hq8.jpg",
    description: "A new challenge format: work from a spec, not a design. Practice product thinking, AI collaboration, and shipping real products. The skills that many companies are looking for.",
    author: "The Frontend Mentor team",
    date: "September 2026",
  },
  {
    title: "Solution reports now include quality scores",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/hwiacgv7bdubrteqjniy.jpg",
    description: "AI-enhanced solution reports now score your HTML, CSS, JavaScript, and Accessibility out of 100. See where you stand at a glance, focus on what matters, and track your improvement over time.",
    author: "The Frontend Mentor team",
    date: "September 2026",
  },
  {
    title: "Free members now get AI-powered code reviews each month",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/h8ppmryj2xtujz7sctkz.jpg",
    description: "Every free community member now gets 2 AI report credits per month, plus we've removed screenshot credits to simplify things",
   author: "The Frontend Mentor team",
    date: "September 2026",
  },
  {
    title: "Introducing progression levels and a revamped profile",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/qp46zysnqwrzc3dj7zdj.jpg",
    description: "We've launched a new progression levels system, fairer scoring for challenges and code reviews, and a completely revamped profile page. Here's what's changed.",
       author: "The Frontend Mentor team",
    date: "August 2026",
  },
  {
    title: "Introducing Guides: Your go-to resource for everything Frontend Mentor",
    category: "Career",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/wesmnrbhruglyh822cl7.jpg",
    description: "Learn about the platform, make the most of its features, and find answers to your questions, all in one place.",
    author: "The Frontend Mentor team",
    date: "August 2026",
  },
  {
    title: "We've added AGENTS.md files to every Frontend Mentor challenge",
    category: "News",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/qebyj1mywqecmcg6hsrb.jpg",
    description: "Every Frontend Mentor challenge now includes AGENTS.md files that turn AI coding tools into difficulty-matched learning partners. Here's what we did and why.",
    author: "The Frontend Mentor team",
    date: "August 2026",
  },
];

function Articles() {
  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <div className="bg-gradient-to-br from-blue-100 via-white to-sky-100 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold uppercase tracking-wider">
            Articles
          </span>
        </div>
      </div>

      {/* FEATURED ARTICLE */}

      <section className="bg-white px-5 pt-16 pb-16 md:pt-[86px] md:pb-[84px]">
        <div className="max-w-[1304px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 lg:gap-20">
          {/* LEFT IMAGE */}
          <div className="rounded-xl relative w-full aspect-[7/4] overflow-hidden">
            <img
              alt="Build a color palette generator"
              src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/Admin/vtq8tjsiqazbuyuysbof.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex flex-wrap gap-3">
              <span className="font-secondary font-bold px-3 py-1.5 rounded-full text-center text-sm tracking-wider uppercase leading-none bg-blue-100 text-blue-500">
                News
              </span>
            </div>

            <Link to="/articles/new-challenge-color-palette-generator">
              <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl leading-[1.12] text-[#4059a5] hover:underline">
                New challenge: Build a color palette generator
              </h2>
            </Link>

            <p className="text-base md:text-lg lg:text-xl leading-[1.5] text-black">
              We've launched a new premium challenge: a color palette generator
              with five palette types, color locking, and one-click copying.
              Great practice for JavaScript state.
            </p>

            {/* AUTHOR DETAILS */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-semibold text-sm md:text-base mt-1">
              <div className="bg-white flex-shrink-0 rounded-full relative shadow-inner w-11 h-11 overflow-hidden">
                <img
                  alt=""
                  loading="lazy"
                  width="44"
                  height="44"
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_40/Avatars/rbz8idemlgsmocy5kpnu.jpg"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <span>The Frontend Mentor team</span>
              <span>·</span>
              <span>12 Nov 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CARDS */}

      <section className="bg-gray-100 flex flex-col gap-6 items-center px-5 py-8">
        <ul className="container-xl w-full max-w-7xl mx-auto gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articleCards.slice(0, visibleCount).map((article, index) => (
            <ArticlesCard key={article.path || index} article={article} />
          ))}
        </ul>

        {/* LOAD MORE BUTTON */}

        {visibleCount < articleCards.length && (
          <button
            onClick={() => setVisibleCount(articleCards.length)}
            className="flex font-secondary items-center gap-2 p-0 relative whitespace-nowrap
      after:bg-rose-600 after:bottom-[-3px] after:h-[2px]
      after:left-0 after:absolute after:w-full
      after:transition-transform after:origin-center
      hover:after:scale-x-0 text-base font-semibold"
          >
            Load more
          </button>
        )}
      </section>
    </main>
  );
}

export default Articles;
