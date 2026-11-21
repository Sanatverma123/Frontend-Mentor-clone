
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
    <li className="bg-white border border-neutral-200 rounded-2xl w-full flex flex-col min-w-0 overflow-hidden">

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

      <div className="flex flex-col flex-grow gap-3 min-h-0 p-5">

        {/* TITLE */}
        <Link to={solution.href} className="hover:underline">
          <h2 className="text-xl font-semibold text-neutral-900">
            {solution.title}
          </h2>
        </Link>

        <hr className="bg-neutral-200 border-none h-px w-full" />

        {/* USER INFORMATION */}
        <div className="flex gap-3 h-[3.85rem] items-center min-w-0 text-sm">

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
                className="truncate text-neutral-900 hover:underline"
              >
                {solution.author}
              </Link>

              <span>•</span>

              <span className="text-blue-500">
                {solution.points}
              </span>
            </div>

            <span className="text-neutral-500 text-sm truncate">
              Submitted {solution.submittedAt}
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="text-sm text-neutral-500 line-clamp-3">
          {solution.description}
        </div>

        <hr className="bg-neutral-200 border-none h-px w-full mt-auto" />

        {/* FOOTER */}
        <div className="flex items-center justify-between text-neutral-500">

          <div className="flex gap-4 items-center">

            {/* COMMENTS */}
            <Link
              to={`${solution.href}#feedback`}
              className="flex gap-2 items-center hover:opacity-60 transition"
            >
              <MessageCircle size={17} />
              <span className="text-sm">
                {solution.comments} comments
              </span>
            </Link>

            {/* LIKES */}
            <button
              onClick={() => onLike?.(solution.id)}
              aria-label="Like solution"
              className="flex gap-2 items-center hover:opacity-60 transition"
            >
              <Heart size={17} />
              <span className="text-sm">
                {solution.likes} likes
              </span>
            </button>
          </div>

          {/* BOOKMARK */}
          <button
            onClick={() => onBookmark?.(solution.id)}
            aria-label="Bookmark solution"
            className="hover:opacity-60 transition"
          >
            <Bookmark size={18} />
          </button>

        </div>
      </div>
    </li>
  );
}
