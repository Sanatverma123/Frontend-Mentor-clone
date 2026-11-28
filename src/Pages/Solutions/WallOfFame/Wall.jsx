
import { useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import ThisWeek from "./ThisWeek";
import ThisMonth from "./ThisMonth";
import ThisYear from "./ThisYear";
import AllTime from "./AllTime";

const timeframes = ["This week", "This month", "This year", "All time"];

function WallOfFame() {
  const [activeTab, setActiveTab] = useState("This week");

  return (
    <main className="flex flex-col grow relative bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 min-h-screen">

      {/* Solutions Navigation */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 border-y border-neutral-200 dark:border-gray-700 px-3 sm:px-5">
        <div className="max-w-7xl mx-auto flex items-center">

          <span className="border-x border-neutral-200 dark:border-gray-700 font-bold font-secondary text-gray-900 dark:text-white tracking-wider px-3 sm:px-5 py-3 uppercase text-sm sm:text-base shrink-0">
            Solutions
          </span>

          <div className="ml-auto flex gap-3 sm:gap-5 items-center overflow-x-auto p-3 dark:text-gray-300">
            <Link
              to="/solutions"
              className="font-secondary whitespace-nowrap text-sm sm:text-base hover:text-blue-500 transition-colors"
            >
              Solutions
            </Link>

            <Link
              to="/tags"
              className="font-secondary whitespace-nowrap text-sm sm:text-base hover:text-blue-500 transition-colors"
            >
              Tags
            </Link>

            <Link
              to="/wall-of-fame"
              className="font-secondary whitespace-nowrap text-sm sm:text-base text-blue-500 border-b-2 border-blue-500"
            >
              Wall of Fame
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 sm:gap-8 px-3 sm:px-5 py-5 sm:py-6">

        {/* Heading and Timeframe */}
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-5">

          <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:justify-between">

            {/* Heading */}
            <h1 className="font-secondary text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Wall of Fame
            </h1>

            {/* Mobile Select */}
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="sm:hidden w-full border border-neutral-300 dark:border-gray-600 rounded-lg px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"
            >
              {timeframes.map((time) => (
                <option
                  key={time}
                  value={time}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {time}
                </option>
              ))}
            </select>

            {/* Desktop Tabs */}
            <div className="hidden sm:flex items-center border-b border-neutral-200 dark:border-gray-700 overflow-x-auto">
              {timeframes.map((time) => (
                <button
                  key={time}
                  onClick={() => setActiveTab(time)}
                  className={`font-secondary font-semibold px-3 md:px-4 py-3 relative whitespace-nowrap text-sm md:text-base transition-colors ${
                    activeTab === time
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-neutral-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Info Button */}
          <button className="flex gap-2 items-center text-sm sm:text-base font-secondary font-semibold text-gray-800 dark:text-gray-200 hover:opacity-60 sm:ml-auto transition-opacity">
            Learn about our Wall of Fame
            <Info size={17} className="text-cyan-500 shrink-0" />
          </button>

          {/* Selected Timeframe Page */}
          {activeTab === "This week" && <ThisWeek />}
          {activeTab === "This month" && <ThisMonth />}
          {activeTab === "This year" && <ThisYear />}
          {activeTab === "All time" && <AllTime />}

        </div>

        {/* Discord Banner */}
        <div className="max-w-7xl w-full mx-auto bg-blue-900 dark:bg-blue-950 border border-transparent dark:border-blue-900 rounded-xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-5 sm:gap-6 items-center text-center text-white">

          <h2 className="font-bold uppercase tracking-widest text-lg sm:text-xl">
            Join our Discord community
          </h2>

          <p className="max-w-prose text-base sm:text-lg md:text-xl leading-relaxed text-blue-50">
            Join thousands of Frontend Mentor community members taking the
            challenges, sharing resources, helping each other, and chatting
            about all things front-end!
          </p>

          <a
            href="https://discord.gg/UAfh3qzhYb"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 hover:bg-neutral-100 font-bold font-secondary italic px-5 sm:px-6 py-3 rounded-full uppercase text-sm sm:text-base transition-colors"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </main>
  );
}

export default WallOfFame;
