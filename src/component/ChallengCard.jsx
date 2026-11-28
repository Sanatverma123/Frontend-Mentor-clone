import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function ChallengeCard({ card, tagColors, levelColors })
 {
  return (
    <div className="group bg-gradient-to-br from-blue-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-blue-200 dark:border-blue-900 rounded-2xl overflow-hidden relative flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      {/* Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        {/* Type */}
        <span className="text-xs text-slate-100 font-bold">{card.type}</span>

        {/* Icon and Title */}
        <div className="flex dark:text-white items-center gap-2 mt-3">
          {card.icon}
          <h3 className="text-xl dark:text-slate-100 font-bold">{card.title}</h3>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1 rounded-full ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Level */}
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-sm ${levelColors[card.level]}`}></span>
            <span className="text-black dark:text-slate-200 text-sm font-medium">{card.level}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm dark:text-slate-300 mt-3">{card.description}</p>

        {/* Button */}
        <Button>
          View Challenge <ArrowUpRight size={18} />
        </Button>
      </div>
    </div>
  );
}
