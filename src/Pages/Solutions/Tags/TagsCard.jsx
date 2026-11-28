

import { Link } from "react-router-dom";

function TagCard({ title, description, href }) {
  return (
    <li className="bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 isolate relative rounded-2xl w-full flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300">

      <Link to={href} className="hover:underline">
        <h3 className="font-secondary font-semibold text-lg sm:text-xl text-gray-900 dark:text-white leading-snug">
          {title}
        </h3>
      </Link>

      <p className="line-clamp-3 text-sm sm:text-base leading-6 text-neutral-500 dark:text-gray-400">
        {description}
      </p>

    </li>
  );
}

export default TagCard;
