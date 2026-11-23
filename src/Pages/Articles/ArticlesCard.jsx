
import { Link } from "react-router-dom";

function ArticlesCard({ article }) {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-5 flex flex-col tablet:flex-row items-center gap-8 tablet:gap-20 py-16 tablet:py-20">

        {/* IMAGE LEFT */}
        <div className="w-full tablet:w-1/2 overflow-hidden rounded-xl aspect-[16/9]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT RIGHT */}
        <div className="w-full tablet:w-1/2 flex flex-col items-start gap-5">

          <span className="font-bold px-3 py-1 rounded-full text-sm tracking-wide uppercase bg-indigo-100 text-indigo-700">
            {article.category}
          </span>

          <Link to={article.path}>
            <h2 className="font-secendry text-black text-xl tablet:text-4xl text-[#4059a5] hover:underline leading-tight">
              {article.title}
            </h2>
          </Link>

          <p className="text-lg leading-7 text-neutral-900">
            {article.description}
          </p>

          {/* AUTHOR */}
          <div className="flex flex-wrap items-center gap-3 font-semibold text-sm mt-1">

            <div className="w-11 h-11 rounded-full border border-neutral-200 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_40/Avatars/rbz8idemlgsmocy5kpnu.jpg"
                alt={article.author}
                className="w-full h-full object-cover"
              />
            </div>

            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesCard;