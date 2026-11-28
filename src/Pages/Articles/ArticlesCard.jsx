
import { Link } from "react-router-dom";

function ArticlesCard({ article }) {
  return (
    <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

      <div className="w-full flex flex-col items-center gap-5 p-4 sm:p-5">

        {/* IMAGE */}
        <div className="w-full overflow-hidden rounded-xl aspect-[16/9]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full flex flex-col items-start gap-4">

          {/* CATEGORY */}
          <span className="font-bold px-3 py-1 rounded-full text-sm tracking-wide uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
            {article.category}
          </span>

          {/* TITLE */}
          <Link to={article.path || "#"}>
            <h2 className="font-secondary font-bold text-xl sm:text-2xl text-[#4059a5] dark:text-blue-400 hover:underline leading-tight">
              {article.title}
            </h2>
          </Link>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg leading-7 text-neutral-700 dark:text-gray-300">
            {article.description}
          </p>

          {/* AUTHOR */}
          <div className="flex flex-wrap items-center gap-3 font-semibold text-sm mt-1 text-slate-700 dark:text-gray-300">

            <div className="w-11 h-11 rounded-full border border-neutral-200 dark:border-gray-600 overflow-hidden shrink-0">
              <img
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_40/Avatars/rbz8idemlgsmocy5kpnu.jpg"
                alt={article.author}
                className="w-full h-full object-cover"
              />
            </div>

            <span>{article.author}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 dark:text-gray-400">
              {article.date}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesCard;
