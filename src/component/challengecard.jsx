
import { ArrowUpRight } from "lucide-react";

export default function ChallengeCard({ challenge }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

      <div className="h-40 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center">
        <span className="text-5xl font-bold text-indigo-600">
          {challenge.icon}
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {challenge.level}
          </span>

          <span className="text-xs text-gray-500">
            {challenge.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {challenge.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {challenge.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {challenge.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              {tech}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
          View Challenge <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}
