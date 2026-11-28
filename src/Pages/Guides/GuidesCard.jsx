
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

function GuidesCard({ title, description, link, icon: Icon = Rocket }) {
  return (
    <li className="bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 isolate relative rounded-2xl w-full flex flex-col items-start overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

      {/* ICON HEADER */}
      <div className="bg-[#AFC4E8] dark:bg-blue-950/60 flex gap-2 items-center justify-center w-full px-5 py-6 sm:py-7">
        <Icon
          size={24}
          className="text-blue-600 dark:text-blue-400"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2 p-4 sm:p-5 w-full">
        <Link to={link} className="hover:underline">
          <h2 className="font-secondary font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
            {title}
          </h2>
        </Link>

        <p className="text-sm sm:text-base leading-6 text-neutral-500 dark:text-gray-400 mb-auto">
          {description}
        </p>
      </div>

    </li>
  );
}

export default GuidesCard;
