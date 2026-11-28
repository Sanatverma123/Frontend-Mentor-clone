
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Heart,
  Bookmark,
} from "lucide-react";

export default function SolutionCard({
  solution,
  onLike,
  onBookmark,
}) {
  return (
    <li className="bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-2xl w-full flex flex-col min-w-0 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

      {/* SOLUTION IMAGE */}
      <Link
        to={solution.href}
        className="aspect-[4/3] block overflow-hidden relative w-full"
      >
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="flex flex-col flex-grow gap-3 min-h-0 p-4 sm:p-5">

        {/* TITLE */}
        <Link to={solution.href} className="hover:underline">
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">
            {solution.title}
          </h2>
        </Link>

        <hr className="bg-neutral-200 dark:bg-gray-700 border-none h-px w-full" />

        {/* USER INFORMATION */}
        <div className="flex gap-3 min-h-[3.85rem] items-center min-w-0 text-sm">

          {/* PROFILE IMAGE */}
          <div className="relative w-[3.125rem] shrink-0">
            <Link to={solution.profileHref}>
              <img
                src={solution.avatar}
                alt={solution.author}
                className="w-[3.125rem] h-[3.125rem] object-cover rounded-full"
              />
            </Link>

            {/* USER LEVEL */}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-cyan-500 text-white px-1 py-[2px] rounded text-[0.7rem] font-bold italic">
              LVL {solution.level}
            </span>
          </div>

          {/* USER DETAILS */}
          <div className="flex flex-col min-w-0 overflow-hidden">

            <div className="flex items-baseline gap-1 font-bold min-w-0">
              <Link
                to={solution.profileHref}
                className="truncate text-neutral-900 dark:text-gray-100 hover:underline"
              >
                {solution.author}
              </Link>

              <span className="text-gray-500 dark:text-gray-400">•</span>

              <span className="text-blue-500 dark:text-blue-400 shrink-0">
                {solution.points}
              </span>
            </div>

            <span className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm truncate">
              Submitted {solution.submittedAt}
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="text-sm text-neutral-500 dark:text-gray-400 line-clamp-3 leading-6">
          {solution.description}
        </div>

        <hr className="bg-neutral-200 dark:bg-gray-700 border-none h-px w-full mt-auto" />

        {/* FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-neutral-500 dark:text-gray-400">

          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">

            {/* COMMENTS */}
            <Link
              to={`${solution.href}#feedback`}
              className="flex gap-2 items-center hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              <MessageCircle size={17} />
              <span className="text-xs sm:text-sm">
                {solution.comments} comments
              </span>
            </Link>

            {/* LIKES */}
            <button
              onClick={() => onLike?.(solution.id)}
              aria-label="Like solution"
              className="flex gap-2 items-center hover:text-rose-500 transition"
            >
              <Heart size={17} />
              <span className="text-xs sm:text-sm">
                {solution.likes} likes
              </span>
            </button>
          </div>

          {/* BOOKMARK */}
          <button
            onClick={() => onBookmark?.(solution.id)}
            aria-label="Bookmark solution"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Bookmark size={18} />
          </button>

        </div>
      </div>
    </li>
  );
}
